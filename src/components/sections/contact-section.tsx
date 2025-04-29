"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Section } from "../ui/section";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const contactData = t.contact;

  const contactInfoCard = (
    <Card
      key="contact-info"
      className="overflow-y-auto h-full max-h-[calc(100vh-19rem)] md:max-h-[calc(100vh-22rem)]" // Adjust height for mobile
    >
      <CardHeader>
        <CardTitle>{contactData.contactInfoTitle}</CardTitle>
        <CardDescription>{contactData.contactInfoDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {contactData.contactInfo.map((info, index) => (
          <div
            key={`contact-info-${index}`}
            className="flex items-center gap-3"
          >
            {info.icon === "map-pin" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            )}
            {info.icon === "mail" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            )}
            {info.icon === "phone" && (
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
                className="h-5 w-5 text-muted-foreground"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            )}
            <div>
              <h4 className="font-medium">{info.title}</h4>
              <p className="text-sm text-muted-foreground">{info.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );

  return (
    <Section
      id="contact"
      title={contactData.title}
      description={contactData.description}
    >
      <div className="w-full">
        <div>
          {contactInfoCard}
          <div className="mt-6"></div>
        </div>
      </div>
    </Section>
  );
}
