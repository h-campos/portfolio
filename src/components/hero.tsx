import { experiences } from "#/config/experiences";
import { profile } from "#/config/profile";
import { yearsSince } from "#/lib/date";

export const Hero = ({ now }: { now: string }) => {
  const years = yearsSince(profile.sinceYear, now);
  const malt = profile.socials.find((social) => social.icon === "malt");

  return (
    <section
      id="top"
      className="relative mx-auto mt-14 flex max-w-175 items-start gap-3.5 px-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-[420ms]"
    >
      <img
        src={profile.avatar}
        alt={`Portrait de ${profile.name}`}
        width={52}
        height={52}
        className="size-13 shrink-0 rounded-md object-cover"
      />

      <div className="dashed-card px-6 py-5.5">
        <h1 className="text-[30px] leading-[1.15] font-bold tracking-[-0.02em] text-foreground">
          {"Hugo, "}
          <span className="text-muted-foreground">développeur frontend.</span>
        </h1>

        <p className="mt-3 text-[15px] text-soft">{profile.intro}</p>

        <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-muted-foreground">
          <span>
            <b className="font-semibold text-foreground">{`${String(years)} ans`}</b>
            {" d’expérience"}
          </span>

          <span aria-hidden="true" className="hidden sm:inline">·</span>

          <span>
            <b className="font-semibold text-foreground">{experiences.length}</b>
            {" entreprises et projets"}
          </span>

          {malt !== undefined && (
            <>
              <span aria-hidden="true" className="hidden sm:inline">·</span>

              <a href={malt.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <img
                  src="/companies/malt.png"
                  alt=""
                  width={14}
                  height={14}
                  className="relative -top-[0.5px] size-3.5 rounded-[3px]"
                />
                Profil Malt ↗
              </a>
            </>
          )}
        </p>
      </div>
    </section>
  );
};
