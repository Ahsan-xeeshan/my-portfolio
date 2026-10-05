import ambulanceImage from "../assets/projects/ambulance-dispatch.png";
import movieDBImage from "../assets/projects/movie-db.png";
import aiSupportImage from "../assets/projects/ai-customer-support.png";
import cvFile from "../assets/Nazmul_Ahsan_CV.pdf";

export const topics = {
  about: {
    label: "About Me",
    icon: "user",
    question: "Tell me about yourself",
    intro:
      "I'm a passionate Full Stack Developer from Bangladesh who enjoys building modern, scalable and user-friendly web applications.",
    list: [
      { icon: "star", text: "Full-Stack Web Developer" },
      { icon: "code", text: "Modern Web Applications" },
      { icon: "smile", text: "AI & Automation Focused" },
      { icon: "check", text: "Available for freelance work" },
    ],
    suggestions: ["skills", "projects"],
  },

  skills: {
    label: "Skills",
    icon: "gear",
    question: "What are your skills?",
    intro:
      "I build modern full-stack applications with React and Python, combining clean user experiences with powerful backend systems and AI-driven automation.",
    chips: [
      "React",
      "JavaScript",
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "AI Integration",
      "LLM APIs",
      "AI Agents",
      "n8n",
    ],
    suggestions: ["projects", "education"],
  },

 projects: {
  type: "projects",
  label: "Projects",
  icon: "layers",
  question: "Show me your projects",
  intro:
    "Here are some of the projects I've built, from full-stack web applications to AI-powered systems:",

  list: [
    {
      title: "Emergency Ambulance Dispatch System",
      description:
        "A full-stack emergency ambulance management platform for handling users, bookings, ambulances, drivers, and dispatch operations An AI-powered customer support assistant.",
      image: ambulanceImage,
      tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT"],
      liveUrl: "https://ambulance-book-dispatch.netlify.app/",
      githubUrl:
        "https://github.com/yourusername/ambulance-dispatch-system",
    },

    {
      title: "AI Customer Support Assistant",
      description:
        "An AI-powered customer support assistant with conversational history, streaming responses, prompt engineering, and LLM integration.",
      image: aiSupportImage,
      tech: ["React", "FastAPI", "OpenRouter", "LLM API"],
      liveUrl: "https://ai-customer-support01.netlify.app",
      githubUrl:
        "https://github.com/Ahsan-xeeshan/AI-Customer-Support-backend",
    },

    {
      title: "Movie DB",
      description:
        "A movie database web application that allows users to browse, search, and view details about movies, built with Next.js and MongoDB.",
      image: movieDBImage,
      tech: ["Next.js", "Express.js", "MongoDB"],
      liveUrl: "https://movie-db-nine-lake.vercel.app",
      githubUrl:
        "https://github.com/Ahsan-xeeshan/movie-db",
    },
  ],

  suggestions: ["skills", "contact"],
},

  contact: {
    label: "Contact",
    icon: "mail",
    question: "How can I reach you?",
    intro: "I'd love to hear from you — here's the best way to reach me:",
    list: [
      { icon: "mail", text: "nazmulahsan.121291@gmail.com" },
      {
        icon: "linkedin",
        text: "www.linkedin.com/in/nazmul-ahsan-14a953133",
      },
      {
        icon: "github",
        text: "https://github.com/Ahsan-xeeshan",
      },
    ],
    suggestions: ["projects", "cv"],
  },

  age: {
    label: "Age",
    icon: "calendar",
    question: "How old are you?",
    intro:
      "I'm 34 years old and continuously learning and building in the world of technology.",
    suggestions: ["about", "education"],
  },

  cv: {
  label: "CV",
  icon: "file",
  question: "Can I see your CV?",
  intro:
    "Sure! You can download my full resume as a PDF using the link below.",

  list: [
    {
      icon: "file",
      text: "Download CV.pdf",
      type: "download",
      url: cvFile,
    },
  ],

  suggestions: ["experience", "skills"],
},

  education: {
    label: "Education",
    icon: "book",
    question: "What's your educational background?",
    intro:
      "I hold a Master's degree in Communication and Journalism from the University of Chittagong. I transitioned into web development through professional paid courses, self-learning, and hands-on projects.",
    list: [
      {
        icon: "book",
        text: "Communication & Journalism — Academic Background",
      },
      {
        icon: "book",
        text: "Frontend Development — Reactive Accelarator by Learn With Sumit Batch-3",
      },
      {
        icon: "book",
        text: "Full-Stack Development — DSA & Software Development by Phitron Batch-8",
      },
      {
        icon: "book",
        text: "AI & Automation — Practical Learning & Project-Based Development",
      },
    ],
    suggestions: ["experience", "skills"],
  },

  experience: {
    label: "Experience",
    icon: "briefcase",
    question: "Tell me about your work experience",
    intro:
      "My professional journey includes experience in banking, web development, and building full-stack and AI-powered applications.",
    list: [
      {
        icon: "briefcase",
        text: "Former Officer (Cash) — Dhaka Bank PLC (2019–2025)",
      },
      {
        icon: "briefcase",
        text: "Full-Stack Web Development — Project-Based Experience",
      },
      {
        icon: "briefcase",
        text: "AI & Automation — Ongoing Project Development",
      },
    ],
    suggestions: ["projects", "education"],
  },

  hobbies: {
  label: "Hobbies",
  icon: "heart",
  question: "What do you do outside of work?",
  intro:
    "Outside of coding, I enjoy running, staying active, learning new technologies, and exploring new ideas that keep me curious and inspired.",
  suggestions: ["about", "contact"],
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
  contact: "contact",
  email: "contact",
  reach: "contact",
  hire: "contact",
  age: "age",
  old: "age",
  cv: "cv",
  download: "cv",
  resume: "cv",
  education: "education",
  study: "education",
  degree: "education",
  university: "education",
  experience: "experience",
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
