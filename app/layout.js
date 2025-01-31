"use client";

import {ThemeProvider} from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import "../styles/globals.css";
import "../styles/custom.css";
import {ToastContainer} from "react-toastify";

export const metadata = {
    title: "Portofolio site",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({children}) {
    useEffect(() => {
        AOS.init({duration: 1200});
        AOS.refresh();
    }, []);
    return (
        <html lang="en">
        <body>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

        <ThemeProvider defaultTheme={'dark'} attribute="class">{children}</ThemeProvider>
        </body>
        </html>
    );
}
