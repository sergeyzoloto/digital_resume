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
      <div className="w-5/6 sm:w-full">
        <div className="flex flex-col sm:flex-row w-full gap-4">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-start space-y-4 w-full">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="font-bold tracking-tighter">{profile.name}</h1>
              </div>
              <p className="text-xl text-muted-foreground">
                {profile.title} based in&nbsp;{profile.location}
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
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
          {/* Right Column */}
          <div className="flex items-start">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-muted max-w-[300px]">
              <img
                src={profile.profileImage || "/placeholder.svg"}
                alt={profile.name}
                className="object-contain max-w-full h-auto bg-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
