"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

const COUNT_MS = 2600;
const WAVE_DELAY = 3;
const WORD = "TRANSPARENCY";
/** PUBLIC's six cuts. The small letter and the wide letter appear once, so the longer word still reads. */
const CUTS = [
  "font-display italic",
  "font-sans font-black",
  "pfw-outline font-sans font-semibold",
  "font-mono font-medium",
  "pfw-i font-display font-semibold",
  "font-sans font-black",
  "font-display italic",
  "font-sans font-black",
  "pfw-outline font-sans font-semibold",
  "font-mono font-medium",
  "font-sans font-light",
  "pfw-c font-sans",
] as const;

function subscribeEntered(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readEntered() {
  try {
    return sessionStorage.getItem("pfw-entered") === "1";
  } catch {
    return false;
  }
}

function subscribeReduce(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function readReduce() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function serverFalse() {
  return false;
}

export function FrontDoor({ children }: { children: React.ReactNode }) {
  const { dict } = useI18n();
  const titleId = useId();
  const ledgerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const alreadyEntered = useSyncExternalStore(subscribeEntered, readEntered, serverFalse);
  const reduceMotion = useSyncExternalStore(subscribeReduce, readReduce, serverFalse);
  const [phase, setPhase] = useState<"public" | "transparency">("public");
  const [count, setCount] = useState(100);
  const open = !alreadyEntered;
  const shown = reduceMotion ? "transparency" : phase;

  const enter = useCallback(() => {
    try {
      sessionStorage.setItem("pfw-entered", "1");
    } catch {
      /* private mode */
    }
    const root = document.documentElement;
    root.dataset.pfwEntered = "1";
    delete root.dataset.pfwGate;
    window.location.assign("/about/");
  }, []);

  useLayoutEffect(() => {
    const path = window.location.pathname;
    const atRoot = path === "/" || path === "/index.html";
    if (!atRoot) return;
    if (alreadyEntered || document.documentElement.dataset.pfwEntered === "1") {
      window.location.replace("/about/");
    }
  }, [alreadyEntered]);

  useLayoutEffect(() => {
    if (!open || document.documentElement.dataset.pfwEntered === "1") return;
    document.documentElement.dataset.pfwGate = "show";
  }, [open]);

  useEffect(() => {
    if (!open || reduceMotion || phase !== "public") return;
    if (document.documentElement.dataset.pfwEntered === "1") return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const next = t < 0.6 ? Math.round(100 - 90 * (t / 0.6)) : Math.round(10 * (1 - (t - 0.6) / 0.4));
      setCount((prev) => (prev === next ? prev : next));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setPhase("transparency");
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [open, reduceMotion, phase]);

  useEffect(() => {
    if (!open || document.documentElement.dataset.pfwEntered === "1") return;
    const root = document.documentElement;
    const previousRoot = root.style.overflow;
    const previous = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const nodes = [
      document.querySelector("header"),
      document.querySelector("footer"),
      document.querySelector('a[href="#main"]'),
      ledgerRef.current,
    ].filter((node): node is HTMLElement => node instanceof HTMLElement);
    for (const node of nodes) node.setAttribute("inert", "");
    return () => {
      root.style.overflow = previousRoot;
      document.body.style.overflow = previous;
      for (const node of nodes) node.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open || shown !== "transparency") return;
    buttonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Enter" || event.repeat) return;
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }
      event.preventDefault();
      enter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, shown, enter]);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="pfw-gate fixed inset-0 z-[120] flex-col items-center justify-center overflow-hidden bg-white text-black"
        >
          {shown === "public" ? (
            <PublicWord titleId={titleId} count={count} />
          ) : (
            <TransparencyWord titleId={titleId} buttonRef={buttonRef} label={dict.gate.enter} onEnter={enter} />
          )}
        </div>
      )}
      <div ref={ledgerRef}>{children}</div>
    </>
  );
}

function PublicWord({ titleId, count }: { titleId: string; count: number }) {
  return (
    <>
      <h1 id={titleId} className="pfw-public m-0 text-black">
        <span className="font-display italic">P</span>
        <span className="font-sans font-black">U</span>
        <span className="pfw-outline font-sans font-semibold">B</span>
        <span className="font-mono font-medium">L</span>
        <span className="pfw-i font-display font-semibold">I</span>
        <span className="pfw-c font-sans">C</span>
      </h1>
      <p className="pfw-count" aria-hidden="true">
        {count}
      </p>
    </>
  );
}

function TransparencyWord({
  titleId,
  buttonRef,
  label,
  onEnter,
}: {
  titleId: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  label: string;
  onEnter: () => void;
}) {
  const wordRef = useRef<HTMLHeadingElement>(null);
  const letters = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const word = wordRef.current;
    if (!word) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canPoint = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce) return;

    const pointer = { x: null as number | null };
    const history: number[] = [];
    let autoStart: number | null = canPoint ? null : performance.now();

    const paint = (x: number | null) => {
      const spans = letters.current;
      if (x == null) {
        history.length = 0;
        for (const span of spans) span?.classList.remove("is-wave");
        return;
      }
      history.unshift(x);
      if (history.length > WORD.length * WAVE_DELAY + 2) history.length = WORD.length * WAVE_DELAY + 2;
      spans.forEach((span, index) => {
        if (!span) return;
        const sample = history[Math.min(history.length - 1, index * WAVE_DELAY)] ?? x;
        const rect = span.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const band = Math.max(28, rect.width * 1.7);
        span.classList.toggle("is-wave", Math.abs(center - sample) < band);
      });
    };

    let frame = 0;
    const tick = (now: number) => {
      if (autoStart != null) {
        const rect = word.getBoundingClientRect();
        const u = Math.min(1, (now - autoStart) / 1600);
        const eased = u < 0.5 ? 2 * u * u : 1 - ((-2 * u + 2) ** 2) / 2;
        pointer.x = rect.left - 48 + (rect.width + 96) * eased;
        if (u >= 1) {
          autoStart = null;
          pointer.x = null;
        }
      }
      paint(pointer.x);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const move = (event: PointerEvent) => {
      if (!canPoint) return;
      autoStart = null;
      pointer.x = event.clientX;
    };
    const leave = () => {
      if (!canPoint) return;
      pointer.x = null;
    };
    word.addEventListener("pointermove", move);
    word.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      word.removeEventListener("pointermove", move);
      word.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <h1 id={titleId} ref={wordRef} className="pfw-transparency m-0">
        {WORD.split("").map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            ref={(node) => {
              letters.current[index] = node;
            }}
            className="pfw-wave-letter"
          >
            <span className={CUTS[index]}>{letter}</span>
          </span>
        ))}
      </h1>
      <button
        ref={buttonRef}
        type="button"
        onClick={onEnter}
        className="mt-[7vh] border border-black bg-black px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.28em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      >
        {label}
      </button>
    </>
  );
}
