import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div>
      {/* Layout content */}
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
