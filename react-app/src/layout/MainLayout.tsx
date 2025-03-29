import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: Readonly<MainLayoutProps>) {
  return (
    <div>
      {/* Layout content */}
      {children}
    </div>
  );
}

export default MainLayout;
