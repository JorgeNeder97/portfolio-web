"use client";
import dynamic from "next/dynamic";

// Esto es para que pueda usar scrollreveal sin que me de error 500 al intentar cargar el objeto window
const Stack = dynamic(() => import("@/components/Stack/Stack"), {ssr: false});

const StackClient = () => {
  return <Stack />;
};

export default StackClient;