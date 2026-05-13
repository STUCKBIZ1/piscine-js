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
    const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}