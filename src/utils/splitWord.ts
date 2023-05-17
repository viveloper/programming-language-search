export default function splitWord(word: string, separator: string) {
  const index = word.toLowerCase().indexOf(separator.toLowerCase());

  if (index === -1) return [word];

  return [
    word.slice(0, index),
    word.slice(index, index + separator.length),
    word.slice(index + separator.length, word.length),
  ];
}
