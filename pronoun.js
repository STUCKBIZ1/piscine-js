function pronoun(str) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  const words = str.toLowerCase().split(/\s+/).map(w => w.replace(/[^a-z]/g, ''));
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (pronouns.includes(word)) {
      if (!result[word]) result[word] = { word: [], count: 0 };
      result[word].count++;
      const next = words[i + 1];
      if (next && !pronouns.includes(next)) {
        result[word].word.push(next);
      }
    }
  }

  return result;
}