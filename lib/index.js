'use strict';

function substitute(template, value) {
  value = Math.round(value);
  if (Array.isArray(template)) {
    template = value > 1 && template[1] || template[0];
  }
  return template.replace('{}', Math.round(value));
}

function formatTime(time) {
  var delta = Date.now() - new Date(time).getTime();
  var seconds = delta / 1000;
  var minutes = seconds / 60;
  var hours = minutes / 60;
  var days = hours / 24;
  var weeks = days / 7;
  var months = days / 30;
  var years = days / 365;
  var strings = formatTime.strings;

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
  longAgo: 'Long long ago'
};

module.exports = formatTime;
