"use client";
import React from "react";

export default function LocalTime() {
    const [time, setTime] = React.useState(
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        })
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <span>{time}</span>;
}
