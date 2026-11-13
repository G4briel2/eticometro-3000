import { describe, expect, it } from "vitest";
import { questions } from "../data/questions";
import { calculateResults } from "./scoring";

describe("questionnaire scoring", () => {
  it("defines four valid scores and known axes for every question", () => {
    expect(new Set(questions.map((q) => q.id)).size).toBe(questions.length);
    const axisIds = calculateResults({}).map((axis) => axis.id);
    for (const question of questions) {
      expect(question.answers.map((answer) => answer.id)).toEqual([
        "a",
        "b",
        "c",
        "d",
      ]);
      expect(question.axes.length).toBeGreaterThan(0);
      question.axes.forEach((axis) => expect(axisIds).toContain(axis));
      question.answers.forEach((answer) =>
        expect([0, 1, 2, 3, 4]).toContain(answer.score),
      );
    }
  });

  it("normalizes maximum answers to 100 despite different question counts", () => {
    const responses = Object.fromEntries(
      questions.map((q) => [
        q.id,
        q.answers.reduce((best, answer) =>
          answer.score > best.score ? answer : best,
        ).id,
      ]),
    );
    const results = calculateResults(responses);
    expect(results.every((axis) => axis.score === 100)).toBe(true);
    expect(results.map((axis) => axis.total)).toEqual([5, 4, 4, 3, 4, 3]);
  });

  it("keeps missing and invalid answers pending instead of scoring zero", () => {
    expect(calculateResults({}).every((axis) => axis.score === null)).toBe(
      true,
    );
    const confidentiality = calculateResults({
      5: "c",
      13: "a",
      14: "invalid",
    }).find((axis) => axis.id === "confidentiality")!;
    expect(confidentiality.score).toBeNull();
    expect(confidentiality.answered).toBe(2);
    expect(
      calculateResults({ 5: "c", 13: "a", 14: "b" }).find(
        (axis) => axis.id === "confidentiality",
      )!.score,
    ).toBe(0);
  });

  it("calculates and rounds each axis independently", () => {
    const results = calculateResults({ 3: "a", 4: "c", 9: "d" });
    expect(results.find((axis) => axis.id === "impartiality")!.score).toBe(83);
    expect(results.find((axis) => axis.id === "integrity")!.score).toBeNull();
  });
});
