"use client";


import BoutonRiveEnvoyer from "@/components/rive/BoutonRiveEnvoyer";

export default function ContactFormClient() {
    const handleSend = () => {
        // ton code client (ex: setState, toast, requestSubmit, etc.)
        console.log("send");
    };

    return (
        <>
            {/* ton form ici */}
            <BoutonRiveEnvoyer formId="contact-form" onClick={handleSend} />
        </>
    );
}
