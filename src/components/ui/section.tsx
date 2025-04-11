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
      className={`h-screen flex flex-col page-container snap-start snap-always overflow-hidden ${className}`}
    >
      <div className="flex-1 flex flex-col justify-center items-center mt-4">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </div>
        <div className="w-full pt-4 md:pt-6">{children}</div>
      </div>
    </section>
  );
}
