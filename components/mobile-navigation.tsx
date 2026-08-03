"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Aside } from "@/components/aside";

type Item = { href: string; label: string };
type Props = {
  localeHref: string; localeLabel: string; localeAriaLabel: string;
  menuLabel: string; closeLabel: string; navigationLabel: string;
  items: Item[]; action: Item;
};

export function MobileNavigation(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  const onHandleOpen = useCallback(() => setIsOpen(true), []);
  const onHandleClose = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const onBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) onHandleClose();
    };
    desktop.addEventListener("change", onBreakpointChange);
    return () => desktop.removeEventListener("change", onBreakpointChange);
  }, [onHandleClose]);

  return (
    <div className="mobile-controls">
      <Link className="locale mobile-locale" href={props.localeHref}
        hrefLang={props.localeLabel === "EN" ? "en" : "it-IT"}
        aria-label={props.localeAriaLabel}>{props.localeLabel}</Link>
      <button ref={trigger} className="menu-toggle" type="button"
        aria-label={props.menuLabel} aria-controls="mobile-navigation"
        aria-expanded={isOpen} disabled={isOpen} onClick={onHandleOpen}>
        <span className="menu-toggle-lines" aria-hidden="true">
          <i /><i /><i />
        </span>
        <span className="menu-toggle-label" aria-hidden="true">Menu</span>
      </button>
      <Aside
        id="mobile-navigation"
        isOpen={isOpen}
        label={props.navigationLabel}
        closeLabel={props.closeLabel}
        onHandleClose={onHandleClose}
      >
        <nav className="mobile-nav-links" aria-label={props.navigationLabel}>
          {props.items.map((item) => <Link key={item.href} href={item.href}
            onClick={onHandleClose}>{item.label}</Link>)}
          <Link className="button" href={props.action.href}
            onClick={onHandleClose}>{props.action.label}</Link>
        </nav>
      </Aside>
    </div>
  );
}
