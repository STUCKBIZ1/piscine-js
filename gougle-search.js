function queryServers(serverName, q) {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);
}

async function gougleSearch(q) {
  const timer = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  const search = Promise.all([
    queryServers('web', q),
    queryServers('image', q),
    queryServers('video', q),
  ]).then(([web, image, video]) => ({ web, image, video }));

  return Promise.race([search, timer]);
}