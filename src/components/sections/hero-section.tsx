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
      id="top"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden page-container snap-start snap-always"
    >
      {/* Main container with defined width */}
      <div className="w-5/6 justify-center flex">
        {/* Hero rectangle container with explicit height */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-[300px] h-full sm:h-[300px] sm:w-full relative">
          {/* Left Column - Content rectangle */}
          <div className="flex flex-col justify-between h-full w-full sm:w-3/5">
            {/* Title at the top left */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="font-bold tracking-tighter text-3xl sm:text-4xl">
                  {profile.name}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground">{profile.title}</p>
            </div>

            {/* Buttons at the bottom left */}
            <div className="flex flex-row flex-wrap gap-2 mt-8 sm:mt-0">
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
          <div className="flex items-center sm:justify-end sm:w-2/5 h-full">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted w-full max-w-[300px] sm:h-full">
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
