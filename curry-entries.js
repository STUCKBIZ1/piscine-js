const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 })

const mapCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => fn([k, v])))

const reduceCurry = (fn) => (obj, start) =>
  Object.entries(obj).reduce((acc, [k, v]) => fn(acc, [k, v]), start)

const filterCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(([k, v]) => fn([k, v])))

const reduceScore = (personnel) =>
  reduceCurry((acc, [k, v]) => v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc)(personnel, 0)

const filterForce = (personnel) =>
  filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(personnel)

const mapAverage = (personnel) =>
  mapCurry(([k, v]) => [k, { averageScore: (v.pilotingScore + v.shootingScore) / 2 }])(personnel)