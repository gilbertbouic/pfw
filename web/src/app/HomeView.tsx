"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { headlines } from "@/data/headlines";
import { getAllProjects, olderThanTenYears } from "@/data/projects";
import { reviewChanges, type ReviewChange } from "@/data/review-diff";
import {
  attributedMauritiusAmount,
  LEDGER_REVIEWED,
  sourceGroupOf,
  type SourceGroup,
  type SourceRef,
} from "@/data/types";
import type { HeadlineId } from "@/i18n/dictionaries";
import { useI18n } from "@/i18n/LanguageProvider";

const GROUP_CLASS: Record<SourceGroup, string> = {
  un: "border-blue-800 bg-blue-50 text-blue-950",
  world_bank: "border-emerald-800 bg-emerald-50 text-emerald-950",
  government_mauritius: "border-rose-800 bg-rose-50 text-rose-950",
  ngo_red_cross: "border-purple-800 bg-purple-50 text-purple-950",
  other: "border-slate-600 bg-slate-100 text-slate-950",
};

type Claim = {
  id: string;
  label: string;
  display: string;
  source: SourceRef;
};

export function HomeView() {
  const { dict, t, lang, formatMoney } = useI18n();
  const copy = dict.glance;
  const records = getAllProjects();
  const [activeId, setActiveId] = useState(headlines[0]?.id ?? "");
  const [openClaim, setOpenClaim] = useState<Claim | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const claims: Claim[] = [
    ...headlines.map((h) => ({
      id: h.id,
      label: dict.headlines[h.id as HeadlineId].label,
      display: h.display,
      source: h.source,
    })),
    ...records.map((p) => ({
      id: p.id,
      label: p.title,
      display: formatMoney(attributedMauritiusAmount(p), p.currency),
      source: p.sources[0],
    })),
    ...reviewChanges.map((change) => ({
      id: change.id,
      label: lang === "fr" ? change.labelFr : change.label,
      display: change.display,
      source: change.source,
    })),
  ];

  const active = claims.find((c) => c.id === activeId) ?? claims[0];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openClaim && !dialog.open) dialog.showModal();
  }, [openClaim]);

  function activate(id: string) {
    setActiveId(id);
  }

  function open(claim: Claim) {
    setActiveId(claim.id);
    setOpenClaim(claim);
  }

  return (
    <Container className="py-8 sm:py-10">
      <p className="text-sm text-muted">{t(copy.ledgerLine, { date: LEDGER_REVIEWED })}</p>
      <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start lg:gap-8">
        <div>
          <h1 className="sr-only">Public Funds Watch</h1>
          <ul className="grid gap-3 sm:grid-cols-2">
            {headlines.map((h) => {
              const claim = claims.find((c) => c.id === h.id)!;
              return (
                <li key={h.id}>
                  <FigureButton
                    claim={claim}
                    active={active?.id === h.id}
                    onActivate={activate}
                    onOpen={open}
                    large
                  />
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-sm text-muted">{copy.notOneTotal}</p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{copy.record}</caption>
              <thead className="text-xs font-semibold uppercase tracking-wide text-muted">
                <tr>
                  <th className="py-2 pr-3 font-sans">{copy.record}</th>
                  <th className="hidden py-2 pr-3 font-sans sm:table-cell">{copy.donor}</th>
                  <th className="py-2 pr-3 font-sans">{copy.year}</th>
                  <th className="py-2 text-right font-sans">{copy.amount}</th>
                </tr>
              </thead>
              <tbody>
                {records.map((p) => {
                  const claim = claims.find((c) => c.id === p.id)!;
                  const year = p.startYear == null ? null : String(p.startYear);
                  return (
                    <tr
                      key={p.id}
                      className="border-t border-border"
                      onMouseEnter={() => activate(p.id)}
                      onFocus={() => activate(p.id)}
                    >
                      <td className="py-3 pr-3">
                        <Link
                          href={`/projects/${p.id}`}
                          className="font-semibold text-foreground hover:text-primary"
                          onFocus={() => activate(p.id)}
                        >
                          {p.title}
                        </Link>
                        <p className="mt-1 font-sans text-xs text-muted sm:hidden">
                          {p.funders.join(", ")}
                        </p>
                      </td>
                      <td className="hidden py-3 pr-3 text-muted sm:table-cell">
                        {p.funders.join(", ")}
                      </td>
                      <td className="py-3 pr-3 font-mono tabular-nums">
                        {year ?? (
                          <span className="text-amber-800">{copy.notPublished}</span>
                        )}
                      </td>
                      <td className="py-3 text-right">
                        <FigureButton
                          claim={claim}
                          active={active?.id === p.id}
                          onActivate={activate}
                          onOpen={open}
                          compact
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {olderThanTenYears[0] ? (
            <div className="mt-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-wide text-muted">
                {copy.olderLabel}
              </p>
              <FigureButton
                claim={claims.find((c) => c.id === "off-coastal")!}
                active={active?.id === "off-coastal"}
                onActivate={activate}
                onOpen={open}
              />
            </div>
          ) : null}

          <h2 className="mt-8 font-sans text-xs font-semibold uppercase tracking-wide text-muted">
            {t(copy.diffTitle, { date: LEDGER_REVIEWED })}
          </h2>
          <ul className="mt-2 space-y-2">
            {reviewChanges.map((change) => (
              <li key={change.id} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-sans text-xs uppercase tracking-wide text-muted">
                  {kindLabel(change.kind, copy)}
                </span>
                <FigureButton
                  claim={claims.find((c) => c.id === change.id)!}
                  active={active?.id === change.id}
                  onActivate={activate}
                  onOpen={open}
                />
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm">
            <Link href="/sources" className="font-semibold text-primary">
              {copy.doNotInvent} {copy.sources} →
            </Link>
          </p>

          {active ? (
            <div className="mt-4 lg:hidden">
              <SourceCard source={active.source} groupLabel={copy.groups[sourceGroupOf(active.source)]} />
            </div>
          ) : null}
        </div>

        <aside className="sticky top-40 hidden lg:block">
          {active ? (
            <SourceCard source={active.source} groupLabel={copy.groups[sourceGroupOf(active.source)]} />
          ) : null}
        </aside>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(36rem,calc(100%-2rem))] rounded-2xl border border-border bg-card p-6 text-foreground shadow-xl backdrop:bg-black/50"
        onClose={() => setOpenClaim(null)}
      >
        {openClaim ? (
          <SourceDialogBody
            claim={openClaim}
            titleId={titleId}
            quoteMissing={copy.quoteMissing}
            openSource={copy.openSource}
            closeLabel={copy.close}
            groupLabel={copy.groups[sourceGroupOf(openClaim.source)]}
            onClose={() => dialogRef.current?.close()}
          />
        ) : null}
      </dialog>
    </Container>
  );
}

function kindLabel(
  kind: ReviewChange["kind"],
  copy: {
    added: string;
    removed: string;
    offList: string;
    conversion: string;
  },
) {
  if (kind === "added") return copy.added;
  if (kind === "removed") return copy.removed;
  if (kind === "off_list") return copy.offList;
  return copy.conversion;
}

function FigureButton({
  claim,
  active,
  onActivate,
  onOpen,
  large = false,
  compact = false,
}: {
  claim: Claim;
  active: boolean;
  onActivate: (id: string) => void;
  onOpen: (claim: Claim) => void;
  large?: boolean;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={compact ? `${claim.label}: ${claim.display}` : undefined}
      className={`${compact ? "inline-block" : "w-full"} rounded-xl border text-left ${
        active ? "border-foreground" : "border-border"
      } bg-card px-3 py-2 hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground`}
      onMouseEnter={() => onActivate(claim.id)}
      onFocus={() => onActivate(claim.id)}
      onClick={() => onOpen(claim)}
    >
      {compact ? null : (
        <span className="block font-sans text-xs font-semibold uppercase tracking-wide text-muted">
          {claim.label}
        </span>
      )}
      <span
        className={`mt-1 block font-mono tabular-nums text-foreground ${
          large ? "text-2xl sm:text-3xl" : "text-base"
        }`}
      >
        {claim.display}
      </span>
    </button>
  );
}

function SourceCard({ source, groupLabel }: { source: SourceRef; groupLabel: string }) {
  const group = sourceGroupOf(source);
  return (
    <article className={`rounded-xl border-l-4 p-4 ${GROUP_CLASS[group]}`}>
      <p className="font-sans text-xs font-semibold uppercase tracking-wide">{groupLabel}</p>
      <h2 className="mt-2 font-sans text-sm font-semibold">{source.title}</h2>
      <p className="mt-1 font-sans text-xs">
        {source.publisher}
        {source.page ? ` · ${source.page}` : ""} · {source.asOf}
      </p>
    </article>
  );
}

function SourceDialogBody({
  claim,
  titleId,
  quoteMissing,
  openSource,
  closeLabel,
  groupLabel,
  onClose,
}: {
  claim: Claim;
  titleId: string;
  quoteMissing: string;
  openSource: string;
  closeLabel: string;
  groupLabel: string;
  onClose: () => void;
}) {
  const { source } = claim;
  return (
    <>
      <p className="font-sans text-xs font-semibold uppercase tracking-wide text-muted">
        {groupLabel}
      </p>
      <h2 id={titleId} className="mt-2 font-sans text-lg font-semibold">
        {claim.display}
      </h2>
      <p className="mt-1 font-sans text-sm text-muted">{source.title}</p>
      <blockquote className="mt-4 border-l-4 border-border pl-3 font-sans text-sm">
        {source.quote ?? quoteMissing}
      </blockquote>
      <p className="mt-3 font-sans text-xs text-muted">
        {source.publisher}
        {source.page ? ` · ${source.page}` : ""} · {source.asOf}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={source.url}
          className="rounded-lg bg-primary px-4 py-2 font-sans text-sm font-semibold text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          {openSource}
        </a>
        <button
          type="button"
          className="rounded-lg border border-border px-4 py-2 font-sans text-sm font-semibold"
          onClick={onClose}
        >
          {closeLabel}
        </button>
      </div>
    </>
  );
}
