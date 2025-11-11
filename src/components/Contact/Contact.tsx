import Github from "@/assets/Github";
import Gmail from "@/assets/Gmail";
import Instagram from "@/assets/Instagram";
import Linkedin from "@/assets/Linkedin";
import Whatsapp from "@/assets/Whatsapp";
import { useTranslations } from "next-intl";
import Clock from "../Clock/Clock";


const Contact = () => {

    const t = useTranslations("Contact");
    const v = useTranslations("Version");
    const h = useTranslations("HoraLocal");

    return (
        <section id="contact" className="text-white min-h-screen w-screen overflow-x-hidden relative flex flex-col place-items-center place-content-center lg:place-content-start pt-20 hd:place-content-center hd:pt-0 pb-20 gap-20">
            <div className="flex flex-col place-items-center gap-15">
                {/* Titulo y Disposición */}
                <header className="flex flex-col place-items-center gap-10">
                    <h2 className="text-3xl lg:text-[54px] font-bold">{t("TituloUno")}</h2>
                    <span className="text-center text-md px-5 font-normal tracking-wider leading-8 max-w-[calc(100vw-30px)] lg:w-[650px]">{t("DescripcionTituloUno")}</span>
                </header>

                {/* Redes */}
                <div className="flex flex-col w-full place-items-center gap-5">
                    
                    <h2 className="text-xl lg:text-2xl text-white font-semibold">{t("Redes")}</h2>
                    
                    <ul className="flex flex-row place-items-center gap-1 lg:gap-5">
                        <li><hr className="w-screen border-2 text-gray-300" /></li>
                        <li ><a href="mailto:jorge.neder97@gmail.com" target="_blank" className="socialIcons" rel="noopener noreferrer" aria-label="Gmail"><Gmail className="w-10 h-10" /></a></li>
                        <li ><a href="https://linkedin.com/in/jorge-neder/" target="_blank" className="socialIcons" rel="noopener noreferrer" aria-label="Linkedin"><Linkedin className="w-10 h-10" /></a></li>
                        <li ><a href="https://github.com/JorgeNeder97" target="_blank" className="socialIcons" rel="noopener noreferrer" aria-label="Github"><Github className="w-10 h-10" /></a></li>
                        <li ><a href="https://wa.me/5493854187064" target="_blank" className="socialIcons" rel="noopener noreferrer" aria-label="Whatsapp"><Whatsapp className="w-10 h-10" /></a></li>
                        <li ><a href="https://www.instagram.com/jorge_neder97/" target="_blank" className="socialIcons" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="w-10 h-10" /></a></li>
                        <li><hr className="w-screen border-2 text-gray-300" /></li>
                    </ul>
                    <span className="text-md w-3/5 max-w-[calc(100vw-30px)] text-center mt-5 text-white tracking-wide">{t("Conclusion")}</span>
                </div>
            </div>

            <span className="text-lg text-center lg:text-xl font-medium">{t("Saludo")}</span>

            <div className="absolute bottom-3 right-5 flex flex-col place-items-start gap-3">
                <span className="text-almost-white">{v("Titulo")}</span>
                <span className="text-sm">{v("Contenido")}</span>
            </div>

            <div className="absolute bottom-3 left-5 flex flex-col place-items-start gap-3">
                <span className="text-almost-white">{h("Titulo")}</span>

                {/* Aqui va la funcion para el reloj con formato HH:MM AM/PM GMT-3*/}
                <span className="text-sm"><Clock /></span>
            </div>

        </section>
    );
};


export default Contact;