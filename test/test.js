const assert = require('assert');
const formatTime = require('..');

describe('formatTime', () => {
  it('should format time', () => {
    const now = Date.now();
    assert.equal(formatTime(now - 1000), 'Just now');
    assert.equal(formatTime(now - 1000 * 20), 'A few seconds ago');
    assert.equal(formatTime(now - 1000 - 60 * 1000), 'A minute ago');
    assert.equal(formatTime(now - 1000 - 2 * 60 * 1000), '2 minutes ago');
    assert.equal(formatTime(now - 1000 - 60 * 60 * 1000), 'An hour ago');
    assert.equal(formatTime(now - 1000 - 2 * 60 * 60 * 1000), '2 hours ago');
    assert.equal(formatTime(now - 1000 - 24 * 60 * 60 * 1000), 'A day ago');
    assert.equal(formatTime(now - 1000 - 2 * 24 * 60 * 60 * 1000), '2 days ago');
    assert.equal(formatTime(now - 1000 - 7 * 24 * 60 * 60 * 1000), 'A week ago');
    assert.equal(formatTime(now - 1000 - 2 * 7 * 24 * 60 * 60 * 1000), '2 weeks ago');
    assert.equal(formatTime(now - 1000 - 30 * 24 * 60 * 60 * 1000), 'A month ago');
    assert.equal(formatTime(now - 1000 - 2 * 30 * 24 * 60 * 60 * 1000), '2 months ago');
    assert.equal(formatTime(now - 1000 - 12 * 30 * 24 * 60 * 60 * 1000), '12 months ago');
    assert.equal(formatTime(now - 1000 - 365 * 24 * 60 * 60 * 1000), 'A year ago');
    assert.equal(formatTime(now - 1000 - 2 * 365 * 24 * 60 * 60 * 1000), '2 years ago');
    assert.equal(formatTime(now - 1000 - 10 * 365 * 24 * 60 * 60 * 1000), 'Long long ago');
  });
});
