import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Poppins } from "next/font/google";
import StaggeredMenuClient from "@/components/Menu/StraggeredMenuClient";

const poppins = Poppins({
    weight: ["200", "300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    const messages = (await import(`../../../messages/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <body className={`${poppins.className} antialiased overflow-x-hidden relative`}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StaggeredMenuClient isFixed={true} />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
