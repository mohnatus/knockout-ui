import {
  addDays,
  addMonths,
  getEndOfMonth,
  getStartOfDay,
  getStartOfMonth,
  getStartOfWeek
} from "@/utils/date/manipulations";

const today = new Date();
const startOfToday = getStartOfDay(today);

const startOfWeek = getStartOfWeek(startOfToday);
const startOfPrevWeek = addDays(startOfWeek, -7);
const endOfPrevWeek = addDays(startOfPrevWeek, 6);
const sevenDaysAgo = addDays(startOfToday, -6);
const startOfMonth = getStartOfMonth(startOfToday);
const monthAgo = addMonths(startOfToday, -1);
const startOfPrevMonth = getStartOfMonth(monthAgo);
const endOfPrevMonth = getEndOfMonth(startOfPrevMonth);



export const RANGES = [
  {
    name: "Сегодня",
    id: "today",
    period: [+startOfToday, +startOfToday]
  },
  {
    name: "С начала недели",
    id: "week-start",
    period: [+startOfWeek, +startOfToday]
  },
  {
    name: "Прошлая неделя",
    id: "prev-week",
    period: [+startOfPrevWeek, +endOfPrevWeek]
  },
  {
    name: "Последние 7 дней",
    id: "last-week",
    period: [+sevenDaysAgo, +startOfToday]
  },
  {
    name: "Текущий месяц",
    id: "current-month",
    period: [+startOfMonth, +startOfToday]
  },
  {
    name: "Прошлый месяц",
    id: "prev-month",
    period: [+startOfPrevMonth, +endOfPrevMonth]
  },
  {
    name: "Последний месяц",
    id: "last-month",
    period: [+monthAgo, +startOfToday]
  }
];
