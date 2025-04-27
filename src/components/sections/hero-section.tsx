"use client";

import { Button } from "../ui/button";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const profile = t.profile;

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden page-container snap-start snap-always"
    >
      {/* Main container with defined width */}
      <div className="justify-center flex w-full">
        {/* Hero rectangle container with explicit height */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-[300px] h-full md:h-[300px] md:w-full relative">
          {/* Left Column - Content rectangle */}
          <div className="flex flex-col justify-between h-full items-center md:w-3/5 w-content md:items-start">
            {/* Title at the top left */}
            <div className="space-y-2">
              <p className="font-bold tracking-tighter leading-none text-center md:text-left title">
                {profile.name}
              </p>

              <p className="text-muted-foreground pt-4 text-center md:text-left subtitle">
                {profile.title}
              </p>
            </div>

            {/* Buttons at the bottom left */}
            <div className="flex flex-row flex-wrap gap-2 mt-8 md:mt-0 w-full justify-center md:justify-start">
              <Button asChild>
                <a href="#contact">
                  {profile.contactButton}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
              <Button variant="outline">
                {profile.downloadButton}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column - Image aligned to the right edge */}
          <div className="flex items-center md:justify-end md:w-2/5 h-full">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted w-full max-w-[300px] md:h-full">
              <img
                src={profile.profileImage || "/placeholder.svg"}
                alt={profile.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
