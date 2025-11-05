"use client";

import { useEffect, useState } from "react";

const Clock = () => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();

            // Convertir a GMT-3
            const utc = date.getTime() + date.getTimezoneOffset() * 60000;
            const gmt3 = new Date(utc - 3 * 60 * 60 * 1000);

            // Formatear la hora (ej: 10:35 PM GMT-3)
            const formatted = gmt3.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });

            setTime(`${formatted} GMT-3`);
        };

        updateClock(); // Llamar una vez al montar
        const interval = setInterval(updateClock, 1000); // Actualizar cada segundo

        return () => clearInterval(interval);
    }, []);

    return <span>{time}</span>;
};

export default Clock;
