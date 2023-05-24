import { DateTime } from "luxon";
import readingTime from "reading-time";

export const getReadingTime = (text: string) => {
  return readingTime(text).text;
};

export const getRelativeDate = (date: string) => {
  return DateTime.fromISO(date).toRelative();
};
