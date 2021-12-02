import { fetchCategories, fetchRandom } from 'api';

const category = 'dev';

test('Test fetch all categories', () => {
  return fetchCategories().then((categories) => {
    expect(categories.data.length).toBeGreaterThan(0);
  });
});

test('Test random category joke', () => {
  return fetchRandom(category).then((joke) => {
    expect(joke.data.value.length).toBeGreaterThan(0);
  });
});
