export function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffleArray(array) {
  let currentIndex = array.length;
  while (currentIndex > 0) {
    currentIndex -= 1;
    const randomIndex = Math.floor(Math.random() * currentIndex + 1);
    if (currentIndex !== randomIndex) {
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
}
