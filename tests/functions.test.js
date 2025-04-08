import { updateText } from '../functions.js';

describe('updateText', () => {
  test('returns new text if not empty', () => {
    expect(updateText('Hello', 'New Banner')).toBe('New Banner');
  });

  test('returns old text if new text is empty', () => {
    expect(updateText('Hello', '')).toBe('Hello');
  });

  test('trims new text before checking', () => {
    expect(updateText('Hello', '   ')).toBe('Hello');
  });
});
