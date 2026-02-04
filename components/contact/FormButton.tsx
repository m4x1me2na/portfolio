"use client";

import { useState } from "react";
import BoutonRiveEnvoyer from "@/components/rive/BoutonRiveEnvoyer";

export default function FormButton() {
    const [sending, setSending] = useState(false);

    const submit = async () => {
        const form = document.getElementById("contact-form") as HTMLFormElement | null;
        if (!form) return;

        // (la validité est déjà check côté bouton, mais on re-safe)
        if (!form.checkValidity()) return;

        if (sending) return;
        setSending(true);

        try {
            const res = await fetch("https://formspree.io/f/xpqqznjy", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
            });

            if (res.ok) form.reset();
        } finally {
            setSending(false);
        }
    };

    return (
        <BoutonRiveEnvoyer
            formId="contact-form"
            locked={sending}
            onClick={submit}
        />
    );
}
