import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import "dayjs/locale/fr";

dayjs.extend(utc);
dayjs.extend(timezone);

const ZONE = "Europe/Paris";

const calendarDate = (isoDate: string): dayjs.Dayjs => dayjs.utc(isoDate.slice(0, 10));

const parisToday = (now: string): dayjs.Dayjs => calendarDate(dayjs(now).tz(ZONE).format("YYYY-MM-DD"));

export const formatMonth = (isoDate: string): string => {
  const label = calendarDate(isoDate).locale("fr").format("MMMM YYYY");
  return label.charAt(0).toLocaleUpperCase("fr-FR") + label.slice(1);
};

export const formatPeriod = (start: string, end: string | null): string => {
  return `${formatMonth(start)} — ${end === null ? "Aujourd’hui" : formatMonth(end)}`;
};

export const formatYears = (start: string, end: string | null): string => {
  const from = start.slice(0, 4);
  if (end === null) return `${from} — auj.`;
  const to = end.slice(0, 4);
  return from === to ? from : `${from} — ${to}`;
};

export const monthsBetween = (start: string, end: string | null, now: string): number => {
  const until = (end === null ? parisToday(now) : calendarDate(end)).add(1, "day");
  return Math.max(1, until.diff(calendarDate(start), "month"));
};

export const formatDuration = (start: string, end: string | null, now: string): string => {
  const months = monthsBetween(start, end, now);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${String(years)} ${years > 1 ? "ans" : "an"}`);
  if (rest > 0 || years === 0) parts.push(`${String(rest)} mois`);
  return parts.join(" ");
};

export const yearsSince = (year: number, now: string): number => dayjs(now).tz(ZONE).year() - year;
