"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

import { useState, useEffect } from "react";
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

  const { language } = useLanguage();
  const t = translations[language];
  const interfaceData = t.interface;
  const [isScreenTooShort, setIsScreenTooShort] = useState(false);

  // Check if the screen height is too short
  useEffect(() => {
    const checkScreenHeight = () => {
      setIsScreenTooShort(window.innerHeight < 400); // Adjust this value as needed
    };

    checkScreenHeight();
    window.addEventListener("resize", checkScreenHeight);

    return () => window.removeEventListener("resize", checkScreenHeight);
  }, []);

  // Update current slide when carousel changes
  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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

    return <div className="flex flex-row">{children}</div>;
  };

  return (
    <section
      id={id}
      className={`flex flex-col snap-start snap-always overflow-hidden ${className}`}
    >
      <div className="page-container section-container flex-1 flex flex-col justify-center items-center">
        {isScreenTooShort && (
          <div className="flex items-center justify-center h-screen bg-background text-muted-foreground">
            <p className="text-center text-sm sm:text-base">
              {interfaceData.rotateMessage}
            </p>
          </div>
        )}
        {!isScreenTooShort && (
          <>
            <div className="space-y-2 text-center xl:mt-4">
              <h2 className="text-lg sm:text-xl xl:text-3xl font-bold tracking-tighter">
                {title}
              </h2>
              {description && (
                <p className="text-xs sm:text-sm xl:text-base mx-auto whitespace-nowrap max-w-[700px] text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            <div className="w-full mt-2 lg:mt-4 xl:mt-6 overflow-x-auto">
              {renderContent()}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
