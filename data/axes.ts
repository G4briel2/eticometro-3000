export const axes = [
  {
    id: "integrity",
    label: "Integridade",
    description: "Honestidade e coerência diante de pressões.",
  },
  {
    id: "transparency",
    label: "Transparência",
    description: "Comunicação clara de erros, riscos e resultados.",
  },
  {
    id: "responsibility",
    label: "Responsabilidade",
    description: "Consideração dos impactos e compromisso com as entregas.",
  },
  {
    id: "impartiality",
    label: "Imparcialidade",
    description: "Prevenção de favorecimento e conflitos de interesse.",
  },
  {
    id: "respect",
    label: "Respeito",
    description: "Tratamento digno e consideração pelas pessoas.",
  },
  {
    id: "confidentiality",
    label: "Confidencialidade",
    description: "Proteção de informações e uso adequado dos canais.",
  },
] as const;

export type AxisId = (typeof axes)[number]["id"];
export type AnswerScore = 0 | 1 | 2 | 3 | 4;
