import dayjs from "dayjs";

export const getDay = (date: Date): string => dayjs(date).format("DD");

export const getMonth = (date: Date): string => dayjs(date).format("MM");

export const getYear = (date: Date): string => dayjs(date).format("YYYY");

export const getYesterday = (): Date => dayjs().subtract(1, "day").toDate();

export const getTomorrow = (): Date => dayjs().add(1, "day").toDate();

export const getLastMonthDays = (): Date[] => {
  const lastMonth = dayjs().subtract(1, "month");
  const daysInMonth = lastMonth.daysInMonth();
  const days: Date[] = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(lastMonth.date(i).toDate());
  }

  return days;
};
