"use client";

import React from "react";

import { useState } from "react";
import type { ReactNode } from "react";
import { useMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import type { CarouselApi } from "./carousel";

export interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  // Carousel options
  useCarouselOnMobile?: boolean;
  carouselChildrenFilter?: (children: ReactNode) => ReactNode[];
}

export function Section({
  id,
  title,
  description,
  children,
  className = "",
  useCarouselOnMobile = false,
  carouselChildrenFilter,
}: SectionProps) {
  const isMobile = useMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Update current slide when carousel changes
  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  // Set up the carousel API
  useState(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  });

  // Extract carousel items if needed
  const carouselItems = carouselChildrenFilter
    ? carouselChildrenFilter(children)
    : React.Children.toArray(children);

  // Render content based on mobile state and carousel option
  const renderContent = () => {
    if (isMobile && useCarouselOnMobile) {
      return (
        <div className="w-full">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {carouselItems.map((child, index) => (
                <CarouselItem key={`carousel-item-${index}`}>
                  {child}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
          {carouselItems.length > 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex gap-1">
                {carouselItems.map((_, index) => (
                  <div
                    key={`indicator-${index}`}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      current === index ? "bg-primary" : "bg-primary/30"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return <div>{children}</div>;
  };

  return (
    <section
      id={id}
      className={`flex flex-col snap-start snap-always overflow-hidden ${className}`}
    >
      <div className="page-container section-container flex-1 flex flex-col justify-center items-center">
        <div className="space-y-2 text-center mt-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {description}
            </p>
          )}
        </div>
        <div className="w-full pt-4 md:pt-6 overflow-x-auto">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
