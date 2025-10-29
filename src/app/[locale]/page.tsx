import HeroClient from "@/components/Hero/HeroClient";
import Nav from "@/components/Nav/Nav";

const HomePage = () => {
    return (
        <>
            <header className="w-full min-h-screen text-almost-white">
                <Nav />
                <HeroClient />
            </header>
            <main>
                <div className="min-h-200 bg-black-background">

                </div>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default HomePage;
