async function getJSON(path, params) {
  let url = path;
  if (params) url += '?' + new URLSearchParams(params);

  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);

  const json = await response.json();
  if (json.error) throw new Error(json.error);

  return json.data;
}