import Link from "next/link";
import React from "react";

type UnderlineLinkProps = {
    children: React.ReactNode;
    href?: string;
    as?: "a" | "button" | "span";
    className?: string;
};

export default function UnderlineLink({
                                          children,
                                          href,
                                          as = "a",
                                          className = "",
                                      }: UnderlineLinkProps) {
    const base =
        "relative inline-flex w-fit items-center leading-none " +
        "after:content-[''] after:absolute after:left-0 after:-bottom-[0.3em] " +
        "after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current " +
        "after:transition-transform after:duration-500 after:ease-out " +
        "hover:after:scale-x-100 focus-visible:after:scale-x-100 " +
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

    const cls = `${base} ${className}`;

    // Link (Next)
    if (href) {
        return (
            <Link
                href={href}
                className={cls}
                target="_blank"
                rel="noreferrer"
                cursor-scale={0.5}
            >
                {children}
            </Link>

        );
    }

    // Button
    if (as === "button") {
        return (
            <button type="button" className={cls}>
                {children}
            </button>
        );
    }

    // Fallback
    return <span className={cls}>{children}</span>;
}
