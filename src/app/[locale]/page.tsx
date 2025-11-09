import AboutClient from "@/components/About/AboutClient";
import ContactClient from "@/components/Contact/ContactClient";
import ExperienceClient from "@/components/Experience/ExperienceClient";
import HeroClient from "@/components/Hero/HeroClient";
import Nav from "@/components/Nav/Nav";
import Stack from "@/components/Stack/Stack";

const HomePage = () => {
    return (
        <>
            <header className="w-full min-h-screen text-almost-white">
                <Nav />
                <HeroClient />
            </header>
            <main className="w-full min-h-screen bg-black-background flex flex-col place-items-center">
                <div className="sticky top-0 bg-linear-to-b z-30 from-black-background via-black-background/60 to-transparent w-screen h-28 lg:h-0"></div>
                <ExperienceClient />
                <Stack />
                <AboutClient />
            </main>
            <footer className="w-full min-h-screen bg-gray-background flex place-items-center place-content-center">
                <ContactClient />
            </footer>
        </>
    );
};

export default HomePage;
