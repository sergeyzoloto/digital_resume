import { useState, useEffect } from "react";

export function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="fixed bottom-0 z-50 min-w-screen border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 width-container">
      <div className="flex items-center justify-between md:h-16 flex-row">
        <div className="flex items-center flex-row gap-2 px-0 pt-0">
          <p
            className={`text-sm leading-loose text-muted-foreground text-left transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <a
              href="#top"
              className="text-sm font-medium text-muted-foreground underline underline-offset-4"
            >
              Back to top
            </a>
          </p>
        </div>
        <div className="flex gap-4 md:pr-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
