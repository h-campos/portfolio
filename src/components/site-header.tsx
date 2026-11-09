import { ThemeToggle } from "#/components/theme-toggle";
import { Button } from "#/components/ui/button";
import { profile } from "#/config/profile";

export const SiteHeader = () => {
  return (
    <header className="nav-bg sticky top-0 z-10 flex items-center justify-between px-6 py-3 backdrop-blur-[10px]">
      <a href="#top" className="flex items-center gap-2.5 text-[13px] font-semibold text-foreground">
        <img src={profile.avatar} alt="" width={28} height={28} className="size-7 rounded-md object-cover outline -outline-offset-1 outline-black/10 dark:outline-white/10" />
        {profile.name}
      </a>

      <div className="flex items-center gap-3.5 text-[13px]">
        <a href="#savoir-faire" className="hidden font-medium text-foreground sm:inline">Savoir-faire</a>

        <a href="#experiences" className="hidden font-medium text-foreground sm:inline">Expériences</a>

        <a href="#stack" className="hidden font-medium text-foreground sm:inline">Stack</a>

        <ThemeToggle />

        <Button asChild variant="outline" size="sm" className="rounded-md border-line px-3.5 text-[13px] font-semibold">
          <a href={profile.bookingUrl} target="_blank" rel="noreferrer">Prendre RDV</a>
        </Button>
      </div>
    </header>
  );
};
