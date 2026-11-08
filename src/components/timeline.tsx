import type { Experience } from "#/config/experiences";
import type { CSSProperties } from "react";
import { Heading } from "#/components/sections";
import { Badge } from "#/components/ui/badge";
import { experiences, kindLabel } from "#/config/experiences";
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
            <ArrowRightIcon strokeWidth={1.5} nonScalingStroke className="size-4 transition-transform duration-200 ease-out group-hover/link:translate-x-0.75 motion-reduce:transition-none" />
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
      className="mx-auto max-w-180 scroll-mt-20 px-6 animate-in fade-in fill-mode-both duration-300 ease-out delay-[300ms] motion-safe:slide-in-from-bottom-3 motion-safe:blur-in-4"
    >
      {/* The rail sits 10px left of the 700px column, so the heading shifts back into line with the other sections. */}
      <div className="px-2.5">
        <Heading>Expériences</Heading>
      </div>

      <div className="relative">
        <div aria-hidden="true" className="absolute top-1 bottom-4 left-1 border-l border-dashed border-line" />

        <div className="flex flex-col gap-3.5">
          {experiences.map((experience) => <ExperienceItem key={experience.id} experience={experience} now={now} />)}
        </div>
      </div>
    </section>
  );
};
