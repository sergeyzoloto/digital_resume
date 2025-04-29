import type { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";
import { ScrollProvider } from "../context/scroll-context";

import { usePageTitle } from "@/hooks/use-page-title";
import { NavigationBar } from "@/components/navigation-bar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  // Update page title based on language
  usePageTitle();

  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ScrollProvider>
          <Header />
          <NavigationBar />
          {children}
          <Footer />
        </ScrollProvider>
      </ThemeProvider>
    </div>
  );
}

export default MainLayout;
