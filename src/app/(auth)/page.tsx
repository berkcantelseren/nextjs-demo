import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {navLinks.map((link) => {
        return (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
