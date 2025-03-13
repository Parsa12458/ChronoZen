export function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export function getContrastingTextColor(hex) {
  // Remove the hash symbol if present
  hex = hex.replace("#", "");

  // Parse the hex color
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return black for light backgrounds and white for dark backgrounds
  return luminance > 0.55 ? "#000000" : "#FFFFFF";
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  const userLocale = navigator.language || "en-US";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat(userLocale, options).format(date);
}

export function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(hours, minutes);
  const userLocale = navigator.language || "en-US";

  const options = { hour: "numeric", minute: "numeric", hour12: true };
  return new Intl.DateTimeFormat(userLocale, options).format(date);
}

export function isTodayOrAfterToday(dateToCheck) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const date = new Date(dateToCheck);
  date.setHours(0, 0, 0, 0);

  // Compare the dates
  return date >= today;
}

export function isToday(dateToCheck) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const date = new Date(dateToCheck);
  date.setHours(0, 0, 0, 0);

  // Compare the dates
  return date === today;
}
