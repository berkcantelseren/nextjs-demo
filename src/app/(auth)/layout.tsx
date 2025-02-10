"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href) && link.href !== "";
        return (
          <Link
            href={link.href}
            key={link.name}
            className={`mr-5 text-2xl ml-20  ${
              isActive
                ? "font-bold underline underline-offset-[10px]"
                : "text-blue-400"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
