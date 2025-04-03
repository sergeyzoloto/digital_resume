export function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 min-w-screen border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pl-4 pr-8 md:pl-8">
      <div className="flex items-center justify-between md:h-16 flex-row">
        <div className="flex items-center flex-row gap-2 px-0 pt-0">
          <p className="text-sm leading-loose text-muted-foreground text-left">
            {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4 pb-0">
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
