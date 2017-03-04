function substitute(template, value) {
  value = Math.round(value);
  if (Array.isArray(template)) {
    template = value > 1 && template[1] || template[0];
  }
  return template.replace('{}', Math.round(value));
}

export default function formatTime(time) {
  const delta = Date.now() - new Date(time).getTime();
  const seconds = delta / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = days / 30;
  const years = days / 365;
  const {strings} = formatTime;
  if (seconds < 10) {
    return substitute(strings.justNow, seconds);
  } else if (minutes < 1) {
    return substitute(strings.seconds, seconds);
  } else if (hours < 1) {
    return substitute(strings.minutes, minutes);
  } else if (days < 1) {
    return substitute(strings.hours, hours);
  } else if (weeks < 1) {
    return substitute(strings.days, days);
  } else if (months < 1) {
    return substitute(strings.weeks, weeks);
  } else if (months < 1) {
    return substitute(strings.days, days);
  } else if (years < 1) {
    return substitute(strings.months, months);
  } else if (years < 10) {
    return substitute(strings.years, years);
  } else {
    return substitute(strings.longAgo, years);
  }
}
formatTime.strings = {
  justNow: 'Just now',
  seconds: 'A few seconds ago',
  minutes: ['A minute ago', '{} minutes ago'],
  hours: ['An hour ago', '{} hours ago'],
  days: ['A day ago', '{} days ago'],
  weeks: ['A week ago', '{} weeks ago'],
  months: ['A month ago', '{} months ago'],
  years: ['A year ago', '{} years ago'],
  longAgo: 'Long long ago',
};
