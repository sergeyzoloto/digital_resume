export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
}

export interface ContactData {
  title: string;
  description: string;
  contactInfo: ContactInfo[];
  formTitle: string;
  formDescription: string;
}

export const contactData: ContactData = {
  title: "Contact Me",
  description: "Get in touch to discuss opportunities.",
  contactInfo: [
    {
      icon: "map-pin",
      title: "Location",
      value: "The Netherlands",
    },
    {
      icon: "mail",
      title: "Email",
      value: "s.@.com",
    },
    {
      icon: "phone",
      title: "Phone",
      value: "Available upon request",
    },
  ],
  formTitle: "Send Me a Message",
  formDescription:
    "Fill out the form below and I'll get back to you as soon as possible.",
};
