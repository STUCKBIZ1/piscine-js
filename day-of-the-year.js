function dayOfTheYear(date){
    const start = Date.UTC(date.getUTCFullYear(), 0, 1)
    const current = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
    )

    return Math.floor((current - start) / (1000 * 60 * 60 * 24)) + 1
}
// dayOfTheYear(new Date(1, 3, 4))