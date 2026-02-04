"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const initial = stored ?? "light";
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
    }, []);

    const toggle = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
    };

    return (
        <button onClick={toggle}>
            {theme === "light" ? "Dark mode" : "Light mode"}
        </button>
    );
}
