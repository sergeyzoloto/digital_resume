export function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-around md:justify-between md:h-16 md:flex-row">
        <div className="flex flex-col items-center gap-4 pt-2 md:flex-row md:gap-2 md:px-0 md:pt-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4 pb-4 md:pb-0">
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
