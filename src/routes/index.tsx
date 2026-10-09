import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { questions } from "@/data/questions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eticômetro — Avaliação ética profissional" },
      { name: "description", content: "Assessment ético de situações e dilemas do ambiente corporativo." },
      { property: "og:title", content: "Eticômetro — Avaliação ética profissional" },
      { property: "og:description", content: "Assessment ético de situações e dilemas do ambiente corporativo." },
    ],
  }),
  component: Index,
});

const LETTERS = ["A", "B", "C", "D"];
const pad = (n: number) => String(n).padStart(2, "0");

function Index() {
  const [index, setIndex] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [done, setDone] = useState(false);
  const q = questions[index]!;
  const selected = responses[q.id];
  const total = questions.length;
  const progress = Math.round(((done ? total : index) / total) * 100);

  const select = (id: string) => setResponses((r) => ({ ...r, [q.id]: id }));
  const next = () => {
    if (!selected) return;
    if (index < total - 1) setIndex(index + 1);
    else setDone(true);
  };
  const back = () => index > 0 && setIndex(index - 1);

  useEffect(() => {
    if (done) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA") return;
      const n = Number(e.key);
      const a = q.answers[n - 1];
      if (n >= 1 && a) select(a.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="h-16 border-b border-border">
        <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-5 md:px-10">
          <span className="text-sm font-semibold tracking-[0.18em]">ETICÔMETRO</span>
          <span className="hidden text-sm text-support sm:block">Avaliação ética profissional</span>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-5 pb-20 pt-12 md:px-10 md:pt-[10vh]">
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-baseline justify-between text-xs tracking-[0.12em] text-muted-foreground">
            <span>{done ? "CONCLUÍDO" : `SITUAÇÃO ${pad(index + 1)} DE ${pad(total)}`}</span>
            <span className="tabular-nums">{progress}%</span>
          </div>
          <div className="h-[2px] w-full bg-track" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
            <div className="h-full bg-primary transition-[width] duration-500 ease-out" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {done ? (
          <section className="animate-q-in">
            <p className="mb-5 text-xs tracking-[0.14em] text-muted-foreground">AVALIAÇÃO CONCLUÍDA</p>
            <h1 className="max-w-[720px] text-[24px] font-medium leading-snug md:text-[32px]">
              Obrigado pela participação. Suas respostas foram registradas.
            </h1>
            <p className="mt-5 max-w-[620px] text-muted-foreground">
              Você respondeu {Object.keys(responses).length} de {total} situações.
            </p>
            <button
              onClick={() => { setDone(false); setIndex(0); setResponses({}); }}
              className="mt-10 h-12 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Reiniciar avaliação
            </button>
          </section>
        ) : (
          <section key={q.id} className="animate-q-in">
            <p className="mb-5 text-xs tracking-[0.14em] text-muted-foreground">
              {q.categories.map((c) => c.toUpperCase()).join(" · ")}
            </p>
            <h1 className="max-w-[780px] text-[22px] font-medium leading-[1.45] md:text-[30px] md:leading-[1.4]">
              {q.scenario}
            </h1>
            <p className="mt-6 text-muted-foreground">{q.question}</p>

            <div role="radiogroup" aria-label={q.question} className="mt-10 flex flex-col gap-3">
              {q.answers.map((a, i) => {
                const active = selected === a.id;
                return (
                  <button
                    key={a.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    aria-label={`Alternativa ${LETTERS[i]}: ${a.text}`}
                    onClick={() => select(a.id)}
                    className={cn(
                      "group flex w-full items-start gap-5 rounded-[10px] border bg-background px-5 py-5 text-left transition-colors duration-200 md:px-6",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      active ? "border-primary bg-subtle" : "border-border hover:border-border-strong hover:bg-subtle",
                    )}
                  >
                    <span className="mt-0.5 w-4 shrink-0 text-xs font-medium text-support">{LETTERS[i]}</span>
                    <span className="flex-1 text-[15px] leading-relaxed md:text-base">{a.text}</span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                        active ? "border-primary bg-primary text-primary-foreground" : "border-border",
                      )}
                      aria-hidden
                    >
                      {active && <Check className="h-3 w-3" strokeWidth={3} />}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                onClick={back}
                disabled={index === 0}
                className="inline-flex h-12 items-center gap-2 rounded-lg px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-hover hover:text-foreground disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowLeft className="h-4 w-4" /> Voltar
              </button>
              <button
                onClick={next}
                disabled={!selected}
                className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:bg-muted disabled:text-support disabled:hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {index === total - 1 ? "Concluir" : "Continuar"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-12 max-w-[560px] text-xs leading-relaxed text-support">
              Não existem respostas universalmente corretas. Considere a alternativa que melhor representa como você agiria.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
