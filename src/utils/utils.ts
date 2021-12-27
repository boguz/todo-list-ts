/**
 * Get a random item from a given array of items
 *
 * @param ArrayToSearch
 */
export function getRandomItemFromArray(ArrayToSearch: any[]) {
  return ArrayToSearch[Math.floor(Math.random() * ArrayToSearch.length)];
}

/**
 * Calculate a whole number percentage from a given partial and total values
 *
 * @param partial
 * @param total
 */
export function calculatePercentage(partial: number, total: number) {
  if (total === 0) return 100;
  return Math.ceil((partial * 100) / total);
}
