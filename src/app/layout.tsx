import './globals.css'
import Header from "@/components/header/Header";

export const metadata = {
    title: 'iDenuncia',
    description: 'iDenuncia - Toda voz é importante.',
    charset: "utf-8",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="pt-br">
            <body>
                <Header/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
