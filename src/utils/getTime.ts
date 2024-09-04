export function getDaysName(date: Date): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

export function getMonthName(date: Date): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[date.getMonth() + 1];
}

export function extractDateInfo(date: string): {
  time: string;
  day: string;
  date: number;
  month: string;
} {
  const newDate = new Date(date);
  return {
    time:
      newDate.getHours().toString().padStart(2, "0") +
      ":" +
      newDate.getMinutes().toString().padStart(2, "0"),
    day: getDaysName(newDate),
    date: newDate.getDate(),
    month: getMonthName(newDate),
  };
}
