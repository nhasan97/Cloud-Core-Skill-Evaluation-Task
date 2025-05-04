export const toTitleCase = (str: string) => {
  if (!str) return "";

  return str
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((phrase) => phrase[0].toUpperCase() + phrase.slice(1))
    .join(" ");
};
