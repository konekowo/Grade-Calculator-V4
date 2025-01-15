import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

import { TRPCReactProvider } from "~/trpc/react";
import {CssBaseline} from "@mui/material";

export const metadata: Metadata = {
  title: "Grade Calculator",
  description: "A calculator specifically made for calculating grades after changes made by the student.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
