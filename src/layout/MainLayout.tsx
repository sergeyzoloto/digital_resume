import type { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { usePageTitle } from "@/hooks/use-page-title";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  // Update page title based on language
  usePageTitle();

  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MainLayout;
