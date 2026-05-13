function neuron(arr) {
  const result = {};

  for (const line of arr) {
    const [left, response] = line.split(' - Response: ');
    const colonIdx = left.indexOf(': ');
    
    const type = left.slice(0, colonIdx).toLowerCase();
    const content = left.slice(colonIdx + 2);

    const key = content
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/_+$/, '');

    if (!result[type]) result[type] = {};

    let labelKey;
    if (type === 'questions') labelKey = 'question';
    else if (type === 'affirmations') labelKey = 'affirmation';
    else if (type === 'orders') labelKey = 'order';

    if (!result[type][key]) {
      result[type][key] = {
        [labelKey]: content,
        responses: []
      };
    }

    result[type][key].responses.push(response);
  }

  return result;
}