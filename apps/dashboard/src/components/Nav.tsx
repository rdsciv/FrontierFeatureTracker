"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Command" },
  { href: "/matrix", label: "Feature Matrix" },
  { href: "/gaps", label: "Gaps" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/timeline", label: "Timeline" },
  { href: "/chinese", label: "Chinese Velocity" },
  { href: "/financial", label: "Financial" },
  { href: "/products", label: "Products" },
  { href: "/sources", label: "Sources" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        Frontier Feature Tracker
      </Link>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={pathname === l.href ? "active" : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
