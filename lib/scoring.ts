import { axes } from "../data/axes";
import { questions, type Question } from "../data/questions";

export function calculateResults(
  responses: Record<number, string>,
  questionnaire: Question[] = questions,
) {
  return axes.map((axis) => {
    const relevant = questionnaire.filter((question) =>
      question.axes.includes(axis.id),
    );
    let points = 0;
    let answered = 0;
    for (const question of relevant) {
      const answer = question.answers.find(
        (answer) => answer.id === responses[question.id],
      );
      if (answer) {
        points += answer.score;
        answered++;
      }
    }
    // Incomplete axes stay pending: missing answers must never count as zero.
    const score =
      relevant.length > 0 && answered === relevant.length
        ? Math.round((points / (relevant.length * 4)) * 100)
        : null;
    return { ...axis, score, answered, total: relevant.length };
  });
}
