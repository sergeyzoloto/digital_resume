import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ThemeProvider } from "../components/theme-provider";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
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
