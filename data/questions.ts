import type { AnswerScore, AxisId } from "./axes";

export type Answer = { id: string; text: string; score: AnswerScore };
export type Question = {
  id: number;
  categories: string[];
  axes: AxisId[];
  scenario: string;
  question: string;
  answers: Answer[];
};

// Mock data — replace with an API call later (same shape).
export const questions: Question[] = [
  {
    id: 1,
    axes: ["transparency", "responsibility"],
    categories: ["Transparência", "Responsabilidade"],
    scenario:
      "Você percebe que um colega cometeu um erro em um relatório importante. O erro ainda pode ser corrigido, mas ele pede que você não informe o responsável da equipe.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 3,
        text: "Conversaria primeiro com o colega para entender o que aconteceu e buscar uma solução conjunta.",
      },
      {
        id: "b",
        score: 3,
        text: "Informaria imediatamente o responsável, independentemente da opinião do colega.",
      },
      {
        id: "c",
        score: 2,
        text: "Corrigiria o problema sem envolver outras pessoas, desde que fosse possível resolver a situação.",
      },
      {
        id: "d",
        score: 4,
        text: "Buscaria compreender o impacto do erro antes de decidir quem deveria ser envolvido.",
      },
    ],
  },
  {
    id: 2,
    axes: ["integrity", "transparency"],
    categories: ["Integridade", "Transparência"],
    scenario:
      "Você identifica um erro em um relatório que já foi enviado ao cliente. Corrigir a informação pode gerar atraso e exposição interna da equipe.",
    question: "Como você agiria nessa situação?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Comunicaria imediatamente o erro ao cliente e ao responsável interno.",
      },
      {
        id: "b",
        score: 4,
        text: "Avaliaria com a equipe a melhor forma de comunicar a correção ao cliente.",
      },
      {
        id: "c",
        score: 1,
        text: "Enviaria uma versão corrigida na próxima entrega, sem destacar o erro.",
      },
      {
        id: "d",
        score: 2,
        text: "Levaria a situação à liderança e seguiria a orientação recebida.",
      },
    ],
  },
  {
    id: 3,
    axes: ["impartiality"],
    categories: ["Conflito de interesses"],
    scenario:
      "Um fornecedor com quem você negocia oferece um convite para um evento exclusivo, com despesas pagas, durante um processo de contratação em andamento.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Recusaria o convite e explicaria o motivo ao fornecedor.",
      },
      {
        id: "b",
        score: 4,
        text: "Consultaria a política da empresa antes de responder.",
      },
      {
        id: "c",
        score: 0,
        text: "Aceitaria, desde que isso não influenciasse a decisão.",
      },
      {
        id: "d",
        score: 2,
        text: "Informaria a liderança e deixaria a decisão com ela.",
      },
    ],
  },
  {
    id: 4,
    axes: ["impartiality"],
    categories: ["Lealdade", "Equidade"],
    scenario:
      "Você participa de um processo seletivo interno e percebe que um amigo próximo é um dos candidatos. Ninguém mais sabe da relação entre vocês.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Declararia a relação e me afastaria da avaliação.",
      },
      {
        id: "b",
        score: 1,
        text: "Continuaria no processo, avaliando com os mesmos critérios aplicados aos demais.",
      },
      {
        id: "c",
        score: 3,
        text: "Comunicaria a relação, mas manteria minha participação se permitido.",
      },
      {
        id: "d",
        score: 2,
        text: "Pediria a opinião de outro avaliador sobre esse candidato específico.",
      },
    ],
  },
  {
    id: 5,
    axes: ["confidentiality"],
    categories: ["Confidencialidade"],
    scenario:
      "Em uma reunião, você tem acesso a informações sobre uma reestruturação que afetará colegas próximos. Um deles pergunta diretamente se você sabe de algo.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Diria que não posso compartilhar informações sobre o assunto.",
      },
      {
        id: "b",
        score: 3,
        text: "Sugeriria, de forma geral, que ele procurasse a liderança.",
      },
      {
        id: "c",
        score: 0,
        text: "Compartilharia apenas o necessário para que ele se preparasse.",
      },
      {
        id: "d",
        score: 1,
        text: "Diria que não tenho informações sobre isso.",
      },
    ],
  },
  {
    id: 6,
    axes: ["integrity", "responsibility"],
    categories: ["Responsabilidade", "Metas"],
    scenario:
      "Sua equipe está próxima de bater a meta trimestral. Antecipar o registro de uma venda ainda não concluída garantiria o resultado.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Registraria a venda apenas após sua conclusão formal.",
      },
      {
        id: "b",
        score: 2,
        text: "Discutiria a situação com a liderança antes de decidir.",
      },
      {
        id: "c",
        score: 0,
        text: "Anteciparia o registro, já que a venda é praticamente certa.",
      },
      {
        id: "d",
        score: 4,
        text: "Explicaria o cenário no relatório, mantendo o registro no prazo correto.",
      },
    ],
  },
  {
    id: 7,
    axes: ["respect"],
    categories: ["Respeito", "Justiça"],
    scenario:
      "Durante uma reunião, um colega apresenta uma ideia e outro integrante da equipe faz comentários irônicos, desvalorizando sua contribuição na frente de todos.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 0,
        text: "Ignoraria a situação para evitar um conflito durante a reunião.",
      },
      {
        id: "b",
        score: 4,
        text: "Defenderia o colega e incentivaria uma discussão respeitosa sobre a ideia.",
      },
      {
        id: "c",
        score: 3,
        text: "Conversaria em particular com o colega que fez os comentários após a reunião.",
      },
      {
        id: "d",
        score: 1,
        text: "Mudaria de assunto e deixaria a liderança resolver a situação.",
      },
    ],
  },
  {
    id: 8,
    axes: ["integrity", "responsibility"],
    categories: ["Integridade", "Responsabilidade"],
    scenario:
      "Você percebe que um colega está utilizando recursos da empresa para realizar atividades pessoais durante o expediente. Ele afirma que todos fazem isso e que não há prejuízo aparente.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 0,
        text: "Ignoraria a situação, já que aparentemente não existe prejuízo.",
      },
      {
        id: "b",
        score: 1,
        text: "Confrontaria o colega imediatamente na frente da equipe.",
      },
      {
        id: "c",
        score: 4,
        text: "Conversaria com o colega e buscaria compreender a situação, considerando as regras da empresa.",
      },
      {
        id: "d",
        score: 4,
        text: "Comunicaria o ocorrido pelos canais adequados, caso identificasse uma irregularidade relevante.",
      },
    ],
  },
  {
    id: 9,
    axes: ["impartiality"],
    categories: ["Justiça", "Equidade"],
    scenario:
      "Um gestor distribui as melhores oportunidades de treinamento sempre para os mesmos funcionários, mesmo quando outros integrantes da equipe possuem qualificações semelhantes.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 4,
        text: "Sugeriria critérios claros e transparentes para distribuir as oportunidades.",
      },
      {
        id: "b",
        score: 0,
        text: "Aceitaria a decisão, pois o gestor tem autonomia para escolher.",
      },
      {
        id: "c",
        score: 1,
        text: "Pediria uma oportunidade diretamente para mim, sem questionar a distribuição.",
      },
      {
        id: "d",
        score: 3,
        text: "Conversaria com os colegas para verificar se eles também percebem o problema antes de buscar uma solução.",
      },
    ],
  },
  {
    id: 10,
    axes: ["transparency", "respect"],
    categories: ["Transparência", "Respeito"],
    scenario:
      "Um cliente solicita uma explicação sobre um atraso no serviço. Você sabe que parte do problema ocorreu por uma falha interna, mas teme que a informação prejudique a imagem da empresa.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 1,
        text: "Informaria que houve um imprevisto, sem explicar a origem do atraso.",
      },
      {
        id: "b",
        score: 4,
        text: "Explicaria a situação com honestidade, preservando informações internas confidenciais e apresentando uma previsão realista.",
      },
      {
        id: "c",
        score: 0,
        text: "Atribuiria o atraso a um fornecedor para evitar expor a equipe.",
      },
      {
        id: "d",
        score: 2,
        text: "Encaminharia o cliente à liderança sem fornecer nenhuma explicação.",
      },
    ],
  },
  {
    id: 11,
    axes: ["responsibility", "respect"],
    categories: ["Responsabilidade", "Respeito"],
    scenario:
      "Você recebe uma tarefa urgente, mas percebe que não conseguirá concluí-la dentro do prazo sem comprometer a qualidade de outra atividade importante.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 1,
        text: "Tentaria concluir tudo sozinho, mesmo que a qualidade fosse prejudicada.",
      },
      {
        id: "b",
        score: 0,
        text: "Entregaria primeiro a tarefa urgente e deixaria a outra atividade atrasar sem avisar.",
      },
      {
        id: "c",
        score: 4,
        text: "Comunicaria a situação ao responsável, explicaria os riscos e negociaria prioridades.",
      },
      {
        id: "d",
        score: 1,
        text: "Delegaria parte das tarefas a um colega sem consultar ninguém.",
      },
    ],
  },
  {
    id: 12,
    axes: ["integrity", "transparency"],
    categories: ["Integridade", "Transparência"],
    scenario:
      "Ao preparar uma apresentação de resultados, você percebe que alguns dados não atingiram as expectativas. Destacar apenas os resultados positivos deixaria a apresentação mais convincente.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 0,
        text: "Apresentaria apenas os resultados positivos para valorizar o trabalho da equipe.",
      },
      {
        id: "b",
        score: 4,
        text: "Apresentaria todos os dados relevantes, contextualizando os resultados positivos e negativos.",
      },
      {
        id: "c",
        score: 1,
        text: "Retiraria os dados negativos e explicaria os motivos apenas se alguém perguntasse.",
      },
      {
        id: "d",
        score: 2,
        text: "Solicitaria que a liderança decidisse quais resultados deveriam ser apresentados.",
      },
    ],
  },
  {
    id: 13,
    axes: ["confidentiality"],
    categories: ["Confidencialidade"],
    scenario:
      "Um colega pede que você envie uma planilha com dados pessoais de clientes para o e-mail particular dele, pois está com dificuldade para acessar o sistema da empresa.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 0,
        text: "Enviaria a planilha para ajudá-lo a concluir o trabalho mais rápido.",
      },
      {
        id: "b",
        score: 4,
        text: "Usaria apenas um canal autorizado, verificando a permissão de acesso, e orientaria o colega a buscar suporte.",
      },
      {
        id: "c",
        score: 1,
        text: "Enviaria para o e-mail particular e pediria que ele apagasse a mensagem depois.",
      },
      {
        id: "d",
        score: 3,
        text: "Não enviaria a planilha e consultaria a equipe responsável sobre como proceder com segurança.",
      },
    ],
  },
  {
    id: 14,
    axes: ["confidentiality"],
    categories: ["Confidencialidade"],
    scenario:
      "Você envia, por engano, um documento interno confidencial para uma pessoa externa que não deveria ter acesso a ele.",
    question: "Como você agiria?",
    answers: [
      {
        id: "a",
        score: 1,
        text: "Pediria ao destinatário que apagasse o documento, sem comunicar o incidente internamente.",
      },
      {
        id: "b",
        score: 0,
        text: "Aguardaria para ver se alguém percebe o erro antes de tomar uma atitude.",
      },
      {
        id: "c",
        score: 4,
        text: "Comunicaria imediatamente o incidente pelo canal responsável e seguiria as orientações para conter a exposição.",
      },
      {
        id: "d",
        score: 2,
        text: "Tentaria cancelar o envio e só comunicaria o incidente se não conseguisse.",
      },
    ],
  },
];
