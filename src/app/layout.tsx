import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuBar from "./componentes/menuBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Prueba",
  description:
    "Backoffice para gestion de ordenes y calcular presupuestos.",
  keywords:
    "laboratorio clínico, análisis clínicos, ordenes, consultas bioquimicas, backoffice, presupuesto, autorizaciones",
  creator: "Nacho",
  applicationName: "Lab-app",
  authors: [{ name: "Nacho", url: "https://github.com/SantoroIgnacio" }],
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <MenuBar/>
      <body className={inter.className}>{children}</body> */}
      <body>
        <MenuBar />
        <main className="content-container">
          {children}
        </main>
      </body>
    </html>
  );
}
