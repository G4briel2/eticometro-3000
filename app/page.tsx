"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { questions } from "../data/questions";
import { cn } from "../lib/utils";
import { Badge } from "../components/ui/badge";

const LETTERS = ["A", "B", "C", "D"];

export default function Page() {
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/20 backdrop-blur-md">
        <div className="mx-auto grid min-h-20 max-w-[1100px] grid-cols-[auto_1fr] sm:grid-cols-[1fr_minmax(0,360px)_1fr] items-center gap-4 px-5 md:px-10">
          <a
            href="/"
            aria-label="Eticometro home"
            className="inline-flex items-center gap-2.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 1162 1161"
              fill="none"
              aria-hidden="true"
              className="shrink-0 text-primary"
            >
              <path
                d="M427.973 20.7598C118.88 105.353 -63.08 424.493 21.52 733.573C45.1813 819.989 87.1813 896.44 142.145 959.933C222.708 907.532 294.385 839.964 322.799 772.973C370.829 660 367.34 488.96 378.512 418.56C382.064 396.56 383.408 380.205 384.897 368.018C386.095 358.357 387.345 351.346 389.762 346.305C393.84 337.68 403.169 333.378 412.945 333.316C436.83 333.17 443.731 349.509 450.69 372.805C462.351 411.638 460.513 455.816 465.185 495.013C468.195 519.352 474.211 540.726 487.825 543.778C501.746 547.153 529.122 473.872 553.231 394.765C565.216 358.462 574.221 321.229 583.054 288.541C589.887 263.276 596.606 240.749 605.007 223.358C609.919 213.197 615.903 202.192 625.023 195.984C628.143 193.905 632.351 191.806 636.685 191.181C646.877 189.744 660.507 196.541 669.133 206.463C676.221 214.702 679.471 225.025 680.878 233.197C683.888 250.171 679.549 266.828 676.669 282.333C667.341 333.615 653.117 389.792 633.904 447.147C628.914 462.059 626.222 472.283 632.081 475.001C637.347 477.496 649.633 460.491 664.128 435.641C698.893 376.329 718.706 314.761 744.83 268.681C753.278 253.947 761.918 233.769 777.07 227.129C782.716 223.817 792.529 222.635 803.133 225.994C813.628 229.338 823.502 235.916 829.936 243.515C832.305 246.349 834.191 249.177 835.681 251.916C846.191 271.214 840.243 290.495 834.05 306.51C828.097 321.723 819.077 339.088 810.066 358.958C796.915 387.499 779.441 416.764 762.545 448.379C759.873 453.322 757.186 458.317 754.561 463.368C751.055 469.978 733.087 501.051 724.754 522.775C721.264 531.848 719.587 539.114 721.603 541.687C728.514 550.312 752.592 519.108 773.092 494.119C792.436 470.488 809.238 446.52 825.619 424.056C835.541 410.426 845.316 397.354 855.442 385.192C867.395 370.922 879.103 354.583 895.155 345.671C898.676 343.702 903.379 341.734 908.181 341.145C919.556 339.754 934.004 345.338 942.692 353.739C946.869 357.817 949.702 362.697 951.108 366.921C952.436 371.067 952.806 375.447 951.926 379.963C950.421 387.4 946.999 394.665 944.296 400.108C924.952 439.739 893.608 479.321 864.774 525.119C843.222 559.103 815.524 592.54 823.414 597.535C831.268 602.576 864.565 569.248 888.758 539.775C899.013 527.196 909.972 513.92 921.097 501.952C933.019 489.009 948.425 470.993 966.857 463.983C970.888 462.446 975.768 461.071 980.617 461.149C990.232 461.295 1000.08 466.061 1004.41 473.342C1005.95 475.905 1006.68 478.91 1007 481.582C1007.9 488.686 1006.28 497.582 1002.63 508.222C987.482 551.055 904.726 653.035 879.382 698.848C820.07 801.583 712.742 932.755 617.649 1034.18C577.009 1077.22 537.409 1117.93 498.722 1154.77C575.138 1165.76 655.029 1161.72 734.256 1140.01C1043.35 1055.42 1225.3 736.276 1140.68 427.196C1056.16 118.13 737.029 -63.8438 427.949 20.7696L427.973 20.7598Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-heading text-lg font-bold">Eticômetro</span>
          </a>
          <div className="col-span-2 w-full max-w-[360px] justify-self-center py-3 sm:col-span-1">
            <span className="text-xs text-muted-foreground">Seu progresso</span>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-track"
              role="progressbar"
              aria-label="Seu progresso"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="relative pt-2">
              <span
                className="absolute top-1 -translate-x-1/2 rounded bg-primary px-1.5 py-1 text-[10px] font-medium leading-none text-primary-foreground tabular-nums transition-[left] duration-500 after:absolute after:left-1/2 after:bottom-full after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-primary"
                style={{ left: `clamp(2px, ${progress}%, calc(100% - 20px))` }}
                aria-hidden="true"
              >
                {progress}%
              </span>
            </div>
          </div>
          <span className="hidden justify-self-end text-sm text-support sm:block">
            Quiz de ética
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-5 pb-20 pt-32 md:px-10 md:pt-36">
        {done ? (
          <section className="animate-q-in">
            <p className="mb-5 text-xs tracking-[0.14em] text-muted-foreground">
              AVALIAÇÃO CONCLUÍDA
            </p>
            <h1 className="max-w-[720px] text-[24px] font-medium leading-snug md:text-[32px]">
              Obrigado pela participação. Suas respostas foram registradas.
            </h1>
            <p className="mt-5 max-w-[620px] text-muted-foreground">
              Você respondeu {Object.keys(responses).length} de {total}{" "}
              situações.
            </p>
            <button
              onClick={() => {
                setDone(false);
                setIndex(0);
                setResponses({});
              }}
              className="mt-10 h-12 rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Reiniciar avaliação
            </button>
          </section>
        ) : (
          <section key={q.id} className="animate-q-in">
            <div
              className="mb-5 flex flex-wrap gap-2"
              aria-label="Categorias da situação"
            >
              {q.categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="font-medium"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="max-w-[780px] text-[22px] font-medium leading-[1.45] md:text-[30px] md:leading-[1.4]">
              {q.scenario}
            </h1>
            <p className="mt-6 text-muted-foreground">{q.question}</p>

            <div
              role="radiogroup"
              aria-label={q.question}
              className="mt-10 flex flex-col gap-3"
            >
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
                      active
                        ? "border-primary bg-subtle"
                        : "border-border hover:border-border-strong hover:bg-subtle",
                    )}
                  >
                    <span className="mt-1.25 w-4 shrink-0 text-xs font-medium text-support">
                      {LETTERS[i]}
                    </span>
                    <span className="flex-1 text-[15px] leading-relaxed md:text-base">
                      {a.text}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200",
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border",
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
                {index === total - 1 ? "Concluir" : "Continuar"}{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-12 max-w-[560px] text-xs leading-relaxed text-support">
              Não existem respostas universalmente corretas. Considere a
              alternativa que melhor representa como você agiria.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}
