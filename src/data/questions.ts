export type Answer = { id: string; text: string };
export type Question = {
  id: number;
  categories: string[];
  scenario: string;
  question: string;
  answers: Answer[];
};

// Mock data — replace with an API call later (same shape).
export const questions: Question[] = [
  {
    id: 1,
    categories: ["Transparência", "Responsabilidade"],
    scenario:
      "Você percebe que um colega cometeu um erro em um relatório importante. O erro ainda pode ser corrigido, mas ele pede que você não informe o responsável da equipe.",
    question: "Como você agiria?",
    answers: [
      { id: "a", text: "Conversaria primeiro com o colega para entender o que aconteceu e buscar uma solução conjunta." },
      { id: "b", text: "Informaria imediatamente o responsável, independentemente da opinião do colega." },
      { id: "c", text: "Corrigiria o problema sem envolver outras pessoas, desde que fosse possível resolver a situação." },
      { id: "d", text: "Buscaria compreender o impacto do erro antes de decidir quem deveria ser envolvido." },
    ],
  },
  {
    id: 2,
    categories: ["Integridade", "Transparência"],
    scenario:
      "Você identifica um erro em um relatório que já foi enviado ao cliente. Corrigir a informação pode gerar atraso e exposição interna da equipe.",
    question: "Como você agiria nessa situação?",
    answers: [
      { id: "a", text: "Comunicaria imediatamente o erro ao cliente e ao responsável interno." },
      { id: "b", text: "Avaliaria com a equipe a melhor forma de comunicar a correção ao cliente." },
      { id: "c", text: "Enviaria uma versão corrigida na próxima entrega, sem destacar o erro." },
      { id: "d", text: "Levaria a situação à liderança e seguiria a orientação recebida." },
    ],
  },
  {
    id: 3,
    categories: ["Conflito de interesses"],
    scenario:
      "Um fornecedor com quem você negocia oferece um convite para um evento exclusivo, com despesas pagas, durante um processo de contratação em andamento.",
    question: "Como você agiria?",
    answers: [
      { id: "a", text: "Recusaria o convite e explicaria o motivo ao fornecedor." },
      { id: "b", text: "Consultaria a política da empresa antes de responder." },
      { id: "c", text: "Aceitaria, desde que isso não influenciasse a decisão." },
      { id: "d", text: "Informaria a liderança e deixaria a decisão com ela." },
    ],
  },
  {
    id: 4,
    categories: ["Lealdade", "Equidade"],
    scenario:
      "Você participa de um processo seletivo interno e percebe que um amigo próximo é um dos candidatos. Ninguém mais sabe da relação entre vocês.",
    question: "Como você agiria?",
    answers: [
      { id: "a", text: "Declararia a relação e me afastaria da avaliação." },
      { id: "b", text: "Continuaria no processo, avaliando com os mesmos critérios aplicados aos demais." },
      { id: "c", text: "Comunicaria a relação, mas manteria minha participação se permitido." },
      { id: "d", text: "Pediria a opinião de outro avaliador sobre esse candidato específico." },
    ],
  },
  {
    id: 5,
    categories: ["Confidencialidade"],
    scenario:
      "Em uma reunião, você tem acesso a informações sobre uma reestruturação que afetará colegas próximos. Um deles pergunta diretamente se você sabe de algo.",
    question: "Como você agiria?",
    answers: [
      { id: "a", text: "Diria que não posso compartilhar informações sobre o assunto." },
      { id: "b", text: "Sugeriria, de forma geral, que ele procurasse a liderança." },
      { id: "c", text: "Compartilharia apenas o necessário para que ele se preparasse." },
      { id: "d", text: "Diria que não tenho informações sobre isso." },
    ],
  },
  {
    id: 6,
    categories: ["Responsabilidade", "Metas"],
    scenario:
      "Sua equipe está próxima de bater a meta trimestral. Antecipar o registro de uma venda ainda não concluída garantiria o resultado.",
    question: "Como você agiria?",
    answers: [
      { id: "a", text: "Registraria a venda apenas após sua conclusão formal." },
      { id: "b", text: "Discutiria a situação com a liderança antes de decidir." },
      { id: "c", text: "Anteciparia o registro, já que a venda é praticamente certa." },
      { id: "d", text: "Explicaria o cenário no relatório, mantendo o registro no prazo correto." },
    ],
  },
];
