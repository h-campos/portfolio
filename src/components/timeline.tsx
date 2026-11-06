import type { Experience } from "#/config/experiences";
import type { CSSProperties } from "react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { experiences, kindLabel } from "#/config/experiences";
import { profile } from "#/config/profile";
import { formatDuration, formatPeriod, formatYears } from "#/lib/date";
import { cn } from "#/lib/utils";
import { ArrowRightIcon } from "lucide-react";

const brand = (color: string): CSSProperties => ({ "--brand": color }) as CSSProperties;

const focusRing = "rounded-sm outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

const Span = ({ start, end, now }: { start: string; end: string | null; now: string }) => {
  return (
    <>
      <time dateTime={start}>{formatPeriod(start, end)}</time>

      {` · ${formatDuration(start, end, now)}`}
    </>
  );
};

const ExperienceItem = ({ experience, now }: { experience: Experience; now: string }) => {
  const kind = kindLabel[experience.kind];
  const positions = experience.positions ?? [];

  return (
    <article className="relative pl-7" style={brand(experience.color)}>
      <span className="rail-dot top-4" aria-hidden="true" />

      <div className="dashed-card p-4">
        {experience.url !== null && (
          <a
            href={experience.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Site de ${experience.company}`}
            className={cn("group/link float-right -m-1 p-1 text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground", focusRing)}
          >
            <ArrowRightIcon className="size-4 transition-transform duration-200 ease-out group-hover/link:translate-x-0.75 motion-reduce:transition-none" />
          </a>
        )}

        <Badge variant="outline" className="rounded-md border-line px-2 py-0.75 text-xs font-normal text-soft">
          {formatYears(experience.start, experience.end)}
        </Badge>

        <h3 className="mt-3 mb-1.5 flex flex-wrap items-center gap-2 text-[15px] font-bold text-foreground">
          <img
            src={experience.logo}
            alt=""
            width={18}
            height={18}
            className="relative -top-px size-4.5 shrink-0 rounded-sm object-cover"
            loading="lazy"
          />

          {experience.url === null ? experience.company : (
            <a href={experience.url} target="_blank" rel="noreferrer" className={focusRing}>
              {experience.company}
            </a>
          )}

          {kind !== null && <span className="text-xs font-normal text-muted-foreground">{`· ${kind}`}</span>}
        </h3>

        {positions.length > 1 ? (
          <>
            <p className="text-[13px] text-muted-foreground">
              <Span start={experience.start} end={experience.end} now={now} />
            </p>

            <ol className="relative mt-3 space-y-2.5 border-l border-dashed border-line pl-4">
              {positions.map((position, index) => (
                <li key={position.start} className="relative">
                  <span
                    aria-hidden="true"
                    className={cn("absolute top-1.75 -left-5 size-1.75 rounded-full ring-[3px] ring-card", index === 0 ? "bg-(--brand)" : "bg-line")}
                  />

                  <p className="text-[13.5px] font-semibold text-foreground">{position.role}</p>

                  <p className="text-[12.5px] text-muted-foreground">
                    <Span start={position.start} end={position.end} now={now} />
                  </p>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <p className="text-[13px] text-muted-foreground">
            {`${experience.role} · `}
            <Span start={experience.start} end={experience.end} now={now} />
          </p>
        )}

        <p className="mt-2 text-[13.5px] text-soft">{experience.tagline}</p>

        <ul className="mt-2 list-disc space-y-0.5 pl-4 text-[13px] text-muted-foreground marker:text-line">
          {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>

        <p className="mt-2.5 text-[12.5px] text-muted-foreground">
          <span className="text-soft">Stack</span>
          {` · ${experience.stack.join(" · ")}`}
        </p>
      </div>
    </article>
  );
};

export const Timeline = ({ now }: { now: string }) => {
  return (
    <section
      id="experiences"
      className="relative mx-auto mt-9 max-w-180 scroll-mt-20 px-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:delay-[120ms] motion-safe:duration-[420ms] motion-safe:fill-mode-both"
    >
      <div aria-hidden="true" className="absolute top-1 bottom-4 left-7 border-l border-dashed border-line" />

      <div className="flex flex-col gap-3.5">
        <div className="relative pl-7" style={brand("var(--success)")}>
          <span className="rail-dot top-1.25" aria-hidden="true" />

          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            <div>
              <div className="mb-1 text-[12.5px] text-muted-foreground">Aujourd’hui</div>

              <b className="mb-1 block text-base leading-[1.3] text-foreground">
                {`En poste chez ${profile.currentCompany}, ouvert aux discussions`}
              </b>

              <p className="text-[13px] text-muted-foreground">Principalement en full remote.</p>
            </div>

            <Button asChild size="sm" className="rounded-md px-3.5 text-[13px] font-semibold">
              <a href={`mailto:${profile.email}`}>Me contacter</a>
            </Button>
          </div>
        </div>

        {experiences.map((experience) => <ExperienceItem key={experience.id} experience={experience} now={now} />)}
      </div>
    </section>
  );
};
