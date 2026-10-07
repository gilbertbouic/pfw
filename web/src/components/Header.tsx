"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LanguageToggle, useI18n } from "@/i18n/LanguageProvider";
import { Container } from "./Container";
import { MkweliLockup } from "./MkweliLockup";

const NAV_HREFS = [
  { href: "/about", key: "about" },
  { href: "/ledger", key: "home" },
  { href: "/projects", key: "registry" },
  { href: "/landscape", key: "landscape" },
  { href: "/map", key: "places" },
  { href: "/reports", key: "reports" },
  { href: "/sources", key: "sources" },
  { href: "/problem-solution", key: "problemSolution" },
  { href: "/get-involved", key: "getInvolved" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { dict } = useI18n();
  const nav = dict.header.nav;

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const links = NAV_HREFS.map((item) => {
    const active = isActive(item.href);
    return { ...item, active, label: nav[item.key] };
  });

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <div className="border-b border-border/60 bg-primary-soft/50">
        <Container className="flex h-9 items-center justify-between gap-3 text-xs sm:text-sm">
          <a
            href="https://mkweli.tech"
            className="inline-flex min-w-0 items-center gap-1.5 font-medium text-primary-dark transition hover:text-primary"
          >
            <span aria-hidden className="text-muted">
              ←
            </span>
            <span className="truncate">
              {dict.header.backTo}{" "}
              <span className="font-semibold">mkweli.tech</span>
            </span>
          </a>
          <MkweliLockup className="shrink-0 text-xs sm:text-sm" />
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm"
            aria-hidden
          >
            PF
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate whitespace-nowrap text-sm font-semibold tracking-tight text-foreground sm:text-base">
              {dict.header.productName}
            </span>
            <span className="hidden truncate whitespace-nowrap text-xs text-muted sm:block">
              {dict.header.tagline}
            </span>
          </span>
        </Link>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <LanguageToggle />
          <Link
            href="/projects"
            className="inline-flex items-center whitespace-nowrap rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark"
          >
            {dict.header.browseRegistry}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{dict.header.toggleMenu}</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <nav
        className="hidden border-t border-border/70 lg:block"
        aria-label={dict.header.primaryNav}
      >
        <Container className="flex h-11 items-center gap-1 overflow-x-auto">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary-soft text-primary-dark"
                  : "text-muted hover:bg-primary-soft/60 hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-card lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            <a
              href="https://mkweli.tech"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-primary-dark hover:bg-primary-soft/60"
            >
              ← {dict.header.backToHub}
            </a>
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  item.active
                    ? "bg-primary-soft text-primary-dark"
                    : "text-foreground hover:bg-primary-soft/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              {dict.header.browseRegistry}
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
