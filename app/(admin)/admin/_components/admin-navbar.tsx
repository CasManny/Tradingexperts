import Link from "next/link";
import React from "react";

const adminLinks = [
  {
    label: "All Users",
    href: "/admin",
  },
  {
    label: "Transactions",
    href: "/admin/transactions",
  },
];

const AdminNavbar = () => {
  return (
    <nav className="p-5 bg-black text-white">
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
        <Link href={"/"} className="text-2xl font-bold">
          TradingExperts
        </Link>
        <div className="flex gap-4">
          {adminLinks.map((link, index) => (
            <Link
              href={link.href}
              className="text-lg hover:text-brand-4 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
