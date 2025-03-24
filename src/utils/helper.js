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

export function formatDate(dateString, includeDay = false) {
  const date = new Date(dateString);
  const userLocale = navigator.language || "en-US";

  const options = includeDay
    ? { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    : { year: "numeric", month: "long", day: "numeric" };

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

export function calculateStreak(dateArray) {
  if (!Array.isArray(dateArray) || dateArray.length === 0) return 0;

  // Helper: converts a Date object to YYYY-MM-DD (local dates)
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Build a Set of normalized date strings from the logs.
  const dateSet = new Set(
    dateArray.map((dateStr) => formatDate(new Date(dateStr))),
  );

  const now = new Date();
  const todayStr = formatDate(now);

  // Compute today's end-of-day timestamp.
  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);

  // ----------------------------
  // Case 1: Today's log is present.
  // ----------------------------
  if (dateSet.has(todayStr)) {
    // Count consecutive days including today.
    let streak = 0;
    let temp = new Date(now);
    while (dateSet.has(formatDate(temp))) {
      streak++;
      temp.setDate(temp.getDate() - 1);
    }
    return streak;
  }

  // ----------------------------
  // Case 2: Today's log is missing.
  // ----------------------------
  // If the day is already ended (i.e. it's past 23:59:59) then the streak is 0.
  if (now >= endOfToday) {
    return 0;
  }

  // Otherwise, we're in “pending” mode (today has not ended yet).
  // In pending mode we report a nonzero streak only if the most recent logged date is exactly yesterday.

  // Get the maximum logged date (as Date) that is before today.
  let maxLoggedDate = null;
  for (let dStr of dateSet) {
    let d = new Date(dStr);
    // Compare only the date portions (ignore time)
    if (d < new Date(todayStr)) {
      if (maxLoggedDate === null || d > maxLoggedDate) {
        maxLoggedDate = d;
      }
    }
  }
  if (!maxLoggedDate) return 0;

  // Check if the most recent log is exactly yesterday.
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = formatDate(yesterday);
  if (formatDate(maxLoggedDate) !== yesterdayStr) {
    return 0;
  }

  // Count the consecutive chain _ending_ at yesterday.
  let pendingChain = 0;
  let temp = new Date(maxLoggedDate);
  while (dateSet.has(formatDate(temp))) {
    pendingChain++;
    temp.setDate(temp.getDate() - 1);
  }

  return pendingChain;
}

export const formatLocalDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export function isTodayChecked(checkedDates) {
  return checkedDates?.some((date) => {
    const today = new Date();
    const checkedDate = new Date(date);

    return (
      today.getFullYear() === checkedDate.getFullYear() &&
      today.getMonth() === checkedDate.getMonth() &&
      today.getDate() === checkedDate.getDate()
    );
  });
}

export function getTimeOfDay() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 5 && hour < 12) {
    return "Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "Evening";
  } else {
    return "Night";
  }
}

export function hexToRgba(hex, opacity) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
