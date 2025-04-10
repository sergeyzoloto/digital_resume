import type { ReactNode } from "react";

export interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center page-container snap-start snap-always ${className}`}
    >
      <div className="w-full mt-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="mx-auto py-12">{children}</div>
      </div>
    </section>
  );
}
