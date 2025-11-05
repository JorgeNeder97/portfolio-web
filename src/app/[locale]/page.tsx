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
