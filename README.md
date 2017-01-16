timeago
===

Format timestamps in a readable way.

Usage
---
``` js
const formatTime = require('tapas-timeago');

// Optionally import locales
require('tapas-timeago/locales/zh_CN.js');

// Or set locales directly
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

console.log(formatTime('2017-01-16T09:17:13.412Z'))
```
