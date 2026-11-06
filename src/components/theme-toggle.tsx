import { cn } from "#/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

const readTheme = (): Theme => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  }
  catch {
    // Private mode or blocked storage: the choice simply does not persist.
  }
  for (const listener of listeners) listener();
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

/**
 * Runs before paint so the first frame already has the right theme.
 * Stored choice first, dark otherwise: the validated design is the dark one.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${STORAGE_KEY}');var t=s==='light'||s==='dark'?s:'dark';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.style.colorScheme=t}catch(e){document.documentElement.classList.add('dark')}})()`;

const segment = "inline-flex size-6 items-center justify-center rounded-md text-muted-foreground transition-colors";

export const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, readTheme, (): Theme => "dark");
  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => applyTheme(next)}
      aria-label={next === "dark" ? "Passer en thème sombre" : "Passer en thème clair"}
      title={next === "dark" ? "Thème sombre" : "Thème clair"}
      className="inline-flex gap-0.5 rounded-lg border border-line2 p-[3px] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      <span className={cn(segment, theme === "light" && "bg-line2 text-foreground")}>
        <SunIcon className="size-3.5" />
      </span>

      <span className={cn(segment, theme === "dark" && "bg-line2 text-foreground")}>
        <MoonIcon className="size-3.5" />
      </span>
    </button>
  );
};
