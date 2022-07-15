import { parseISO, format } from "date-fns";

export default function Date({ dateString, className }) {
  if (typeof dateString === "undefined") return <></>;
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString}>
      {format(date, "MMM d, yyyy")}
    </time>
  );
}
