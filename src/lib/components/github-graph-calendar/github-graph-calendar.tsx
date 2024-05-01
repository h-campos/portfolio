import type { ReactElement } from "react";
import type { ThemeInput } from "react-github-calendar";
import GitHubCalendar from "react-github-calendar";
import type { GithubGraphCalendarProps } from "./github-graph-calendar.type";

export function GithubGraphCalendar(props: GithubGraphCalendarProps): ReactElement {
  const { username } = props;

  const theme: ThemeInput = {
    light: ["#44403c", "#047857", "#059669", "#10b981", "#34d399"],
    dark: ["#44403c", "#047857", "#059669", "#10b981", "#34d399"]
  };

  return (
    <GitHubCalendar username={username} style={{ width: "100%" }} blockSize={13} showWeekdayLabels theme={theme} />
  );
}