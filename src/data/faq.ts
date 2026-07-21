import {
  additionalInfo,
  arsenal,
  certifications,
  education,
  experience,
  profile,
} from "./resume";

export interface FaqEntry {
  id: string;
  keywords: string[];
  answer: string;
}

const experienceAnswer = experience
  .map((job) => `• ${job.company} — ${job.role}`)
  .join("\n");

const skillsAnswer = arsenal
  .map((group) => `• ${group.title}: ${group.items.join(", ")}`)
  .join("\n");

const educationAnswer = education
  .map((item) => `• ${item.title} (${item.date}) — ${item.place}`)
  .join("\n");

const certificationsAnswer = certifications
  .map((cert) => `• ${cert.title} — ${cert.place}`)
  .join("\n");

export const faq: FaqEntry[] = [
  {
    id: "about",
    keywords: ["quien eres", "sobre ti", "perfil", "quien es daniel", "presentate"],
    answer: profile.summary,
  },
  {
    id: "experience",
    keywords: ["experiencia", "trabajo", "empresa", "empresas", "laboral"],
    answer: `Experiencia de Daniel:\n${experienceAnswer}`,
  },
  {
    id: "skills",
    keywords: ["skills", "habilidades", "tecnologias", "lenguajes", "stack", "arsenal"],
    answer: `Stack técnico de Daniel:\n${skillsAnswer}`,
  },
  {
    id: "education",
    keywords: ["educacion", "estudios", "universidad", "master", "titulo"],
    answer: `Formación de Daniel:\n${educationAnswer}`,
  },
  {
    id: "certifications",
    keywords: ["certificacion", "certificaciones", "certificado", "certificados"],
    answer: `Certificaciones de Daniel:\n${certificationsAnswer}`,
  },
  {
    id: "availability",
    keywords: [
      "disponibilidad",
      "remoto",
      "ubicacion",
      "donde vive",
      "reubicacion",
      "presencial",
    ],
    answer: `Daniel está en ${profile.location}, ${profile.availability.toLowerCase()}. ${additionalInfo.join(". ")}.`,
  },
  {
    id: "contact",
    keywords: ["contacto", "correo", "email", "telefono", "numero", "celular"],
    answer: `Puedes escribirle a ${profile.emailDisplay} o llamarlo al ${profile.phone}.`,
  },
];

export const quickReplies = [
  { label: "Experiencia laboral", id: "experience" },
  { label: "Stack técnico", id: "skills" },
  { label: "Educación", id: "education" },
  { label: "Disponibilidad", id: "availability" },
];

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

export function matchFaq(message: string): FaqEntry | undefined {
  const normalized = normalize(message);
  return faq.find((entry) =>
    entry.keywords.some((keyword) => normalized.includes(normalize(keyword))),
  );
}
