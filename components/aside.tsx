"use client";

import { type ReactNode, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

const subscribe = () => () => {};

type AsideProps = {
  id: string;
  isOpen: boolean;
  label: string;
  closeLabel: string;
  onHandleClose: () => void;
  children: ReactNode;
};

export function Aside({
  id,
  isOpen,
  label,
  closeLabel,
  onHandleClose,
  children,
}: AsideProps) {
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawerRef.current?.querySelector<HTMLElement>("[data-aside-close]")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onHandleClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onHandleClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={"aside-layer" + (isOpen ? " is-open" : "")}
      aria-hidden={!isOpen}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) onHandleClose();
      }}
    >
      <aside
        ref={drawerRef}
        id={id}
        className="menu-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={label}
      >
        <span className="aside-shimmer" aria-hidden="true" />
        <div className="menu-drawer-head">
          <strong>{label}</strong>
          <button
            data-aside-close
            className="menu-close"
            type="button"
            aria-label={closeLabel}
            onClick={onHandleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {children}
      </aside>
    </div>,
    document.body,
  );
}
