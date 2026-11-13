"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";
import { calculateResults } from "../lib/scoring";

const config = {
  score: { label: "Pontuação", color: "var(--primary)" },
} satisfies ChartConfig;

export function ResultsRadar({
  responses,
}: {
  responses: Record<number, string>;
}) {
  const results = calculateResults(responses);
  const complete = results.every((axis) => axis.score !== null);

  return (
    <section
      className="mt-8 rounded-xl border border-border p-4 sm:p-6"
      aria-labelledby="radar-title"
    >
      <h2 id="radar-title" className="text-xl font-medium">
        Seu radar de tendências
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tendências nas situações apresentadas, em uma escala de 0 a 100.
      </p>
      {complete ? (
        <ChartContainer
          config={config}
          className="mx-auto aspect-square h-[320px] w-full max-w-[540px] sm:h-[400px]"
          aria-label="Radar de tendências. Os valores de cada eixo estão disponíveis na lista abaixo."
        >
          <RadarChart data={results} outerRadius="60%" accessibilityLayer>
            <PolarGrid />
            <PolarAngleAxis dataKey="label" tick={{ fontSize: 10 }} />
            <PolarRadiusAxis
              domain={[0, 100]}
              tickCount={5}
              tick={false}
              axisLine={false}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <span className="font-medium">{value} / 100</span>
                  )}
                />
              }
            />
            <Radar
              dataKey="score"
              stroke="var(--color-score)"
              fill="var(--color-score)"
              fillOpacity={0.18}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </RadarChart>
        </ChartContainer>
      ) : (
        <p className="my-6 text-sm text-muted-foreground">
          Responda todas as situações para visualizar o radar completo.
        </p>
      )}
      <dl className="grid gap-5 sm:grid-cols-2">
        {results.map((axis) => (
          <div key={axis.id}>
            <div className="flex items-baseline justify-between gap-2">
              <dt className="text-sm font-medium">{axis.label}</dt>
              <dd className="text-sm tabular-nums">
                {axis.score === null ? "Pendente" : `${axis.score} / 100`}
              </dd>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {axis.description}
            </p>
          </div>
        ))}
      </dl>
      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Cada eixo considera a média dos pontos das respostas associadas,
        convertida para a escala de 0 a 100. Uma situação pode contribuir para
        mais de um eixo. O resultado não é armazenado e nem disponível
        publicamente.
      </p>
    </section>
  );
}
