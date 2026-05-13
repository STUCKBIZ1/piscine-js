    function filterEntries(obj, fn) {
    return Object.fromEntries(
        Object.entries(obj).filter(([k, v]) => fn([k, v]))
    )
    }

    function mapEntries(obj, fn) {
    return Object.fromEntries(
        Object.entries(obj).map(([k, v]) => fn([k, v]))
    )
    }

    function reduceEntries(obj, fn, start) {
    return Object.entries(obj).reduce(
        (acc, [k, v]) => fn(acc, [k, v]),
        start
    )
    }

    function totalCalories(cart) {
    const total = reduceEntries(cart, (total, [item, grams]) => {
        return total + (nutritionDB[item].calories * grams / 100)
    }, 0)

    return Math.round(total * 10) / 10
    }

  function lowCarbs(cart) {
  return filterEntries(cart, ([item, grams]) => {
    const carbsPer100 = nutritionDB[item].carbs
    const totalCarbs = carbsPer100 * grams / 100
    return totalCarbs < 50
  })
}

    function cartTotal(cart) {
    return mapEntries(cart, ([item, grams]) => {
        const nutrition = nutritionDB[item]
        const scaled = {}

        for (const key in nutrition) {
        scaled[key] = Number(
            (nutrition[key] * grams / 100).toFixed(3)
        )
        }

        return [item, scaled]
    })
    }