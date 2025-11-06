import { Next, ReactLogo, TypeScript, TailwindCSS, PostgresSQL, Prisma3, Redux, 
Python, DjangoREST, Redis, Docker } from "@/assets/techLogos";


export const projectsPreview = [
    {
        id: "Puntomind",
        image: "/proyectosPreview/puntomind.webp",
        stack: [Next, ReactLogo, Redux, TypeScript, TailwindCSS, Python, PostgresSQL, DjangoREST, Redis, Docker ],
        link: "https://puntomind.com",
    },
    {
        id: "Numa",
        image: "/proyectosPreview/numa.webp",
        stack: [Next, ReactLogo, TypeScript, TailwindCSS, Prisma3, PostgresSQL],
        link: "https://numa-kappa.vercel.app",
    },
    {
        id: "JustCoffee",
        image: "/proyectosPreview/justcoffee.webp",
        stack: [Next, ReactLogo, TypeScript, TailwindCSS],
        link: "https://just-coffee-sage.vercel.app",
    },
];