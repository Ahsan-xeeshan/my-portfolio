export const topics = {
  about: {
    label: "About Me",
    icon: "user",
    question: "Tell me about yourself",
    intro:
      "I'm a frontend developer passionate about building clean, intuitive interfaces and meaningful digital experiences that people enjoy using.",
    list: [
      { icon: "star", text: "9+ Years in Web Development" },
      { icon: "code", text: "62+ Completed Projects" },
      { icon: "smile", text: "55+ Happy Customers" },
      { icon: "check", text: "Available for freelance work" },
    ],
  },
  skills: {
    label: "Skills",
    icon: "gear",
    question: "What are your skills?",
    intro:
      "I work across the full stack, but I'm happiest turning designs into fast, accessible interfaces.",
    chips: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "Node.js",
      "MySQL",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Redux",
      "Fastapi",
    ],
  },
  projects: {
    label: "Projects",
    icon: "layers",
    question: "Show me your projects",
    intro: "Here are a few things I've shipped recently:",
    list: [
      {
        icon: "briefcase",
        text: "Finto — a personal finance dashboard (Next.js, PostgreSQL)",
      },
      {
        icon: "briefcase",
        text: "Loopline — realtime team chat (React, Socket.io, MongoDB)",
      },
      {
        icon: "briefcase",
        text: "Cartly — headless e-commerce storefront (Next.js, Stripe)",
      },
    ],
  },
  clients: {
    label: "Clients",
    icon: "users",
    question: "Who have you worked with?",
    intro:
      "I've partnered with startups and larger teams alike, from early MVPs to scaling products.",
    list: [
      { icon: "building", text: "Adobe — internal tooling consultancy" },
      { icon: "building", text: "Nomad Labs — SaaS analytics platform" },
      { icon: "building", text: "Brightside — DTC e-commerce brand" },
    ],
  },
  contact: {
    label: "Contact",
    icon: "mail",
    question: "How can I reach you?",
    intro: "I'd love to hear from you — here's the best way to reach me:",
    list: [
      { icon: "mail", text: "nazmulahsanxeeshann@gmail.com" },
      { icon: "linkedin", text: "www.linkedin.com/in/nazmul-ahsan-14a953133" },
      { icon: "github", text: "https://github.com/Ahsan-xeeshan" },
    ],
  },
  age: {
    label: "Age",
    question: "How old are you?",
    intro: "I'm 34 years old — been coding professionally since I was 20.",
  },
  cv: {
    label: "CV",
    question: "Can I see your CV?",
    intro:
      "Sure! You can download my full resume as a PDF using the link below.",
    list: [{ icon: "file", text: "Download CV.pdf" }],
  },
  education: {
    label: "Education",
    question: "What's your educational background?",
    intro: "I studied Computer Science and kept learning on the job since.",
    list: [
      {
        icon: "book",
        text: "B.Sc. Computer Science — State University (2015–2019)",
      },
      { icon: "book", text: "Frontend Masters — Advanced React & Testing" },
    ],
  },
  experience: {
    label: "Experience",
    question: "Tell me about your work experience",
    intro: "9+ years across agencies, startups, and freelance work:",
    list: [
      {
        icon: "briefcase",
        text: "Senior Frontend Engineer — Nomad Labs (2022–Present)",
      },
      {
        icon: "briefcase",
        text: "Frontend Engineer — PixelForge Agency (2019–2022)",
      },
      { icon: "briefcase", text: "Freelance Web Developer (2016–2019)" },
    ],
  },
  awards: {
    label: "Awards",
    question: "Have you won any awards?",
    intro: "A few highlights over the years:",
    list: [
      { icon: "award", text: "Awwwards Site of the Day — Finto Dashboard" },
      { icon: "award", text: "CSS Design Awards — UI Innovation" },
    ],
  },
  hobbies: {
    label: "Hobbies",
    question: "What do you do outside of work?",
    intro:
      "Outside of code, I climb, tinker with mechanical keyboards, and play way too much chess.",
  },
};

// Keyword -> topic key, used to route free-text input typed by the user.
export const keywordMap = {
  about: "about",
  who: "about",
  yourself: "about",
  skill: "skills",
  skills: "skills",
  tech: "skills",
  stack: "skills",
  project: "projects",
  projects: "projects",
  work: "experience",
  portfolio: "projects",
  client: "clients",
  clients: "clients",
  customer: "clients",
  contact: "contact",
  email: "contact",
  reach: "contact",
  hire: "contact",
  age: "age",
  old: "age",
  cv: "cv",
  resume: "cv",
  education: "education",
  study: "education",
  degree: "education",
  university: "education",
  experience: "experience",
  award: "awards",
  awards: "awards",
  hobby: "hobbies",
  hobbies: "hobbies",
};

export function resolveTopic(input) {
  const text = String(input).toLowerCase();

  for (const [keyword, topicKey] of Object.entries(keywordMap)) {
    if (text.includes(keyword)) {
      return topicKey;
    }
  }

  return null;
}
export const fallbackAnswer =
  "I don't have a canned answer for that yet — try asking about my age, CV, education, experience, awards, or hobbies, or tap one of the buttons below.";
