export function getRandomItemFromArray(ArrayToSearch: any[]) {
  return ArrayToSearch[Math.floor(Math.random() * ArrayToSearch.length)];
}
