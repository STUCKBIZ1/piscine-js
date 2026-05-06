function firstDayWeek(week, year) {
    let d = new Date()
    d.setDate(1)
    d.setFullYear(year)
    d.setMonth(0)
    //    const origin = new Date(d);
     if (week === 1) {
        return "01-01-" + year;
    }
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() - 1);
    }
    // if (d.getFullYear() < year) {
    //     d = new Date(origin)
    // }
    for (let i = 1; i < week; i++) {
        d.setDate(d.getDate() + 7);
    }
    let dd = d.getDate();
    let mm = d.getMonth() + 1;
    let yyyy = d.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (yyyy < 10) yyyy = "0"+"0"+"0"+yyyy
    if (yyyy < 100 && yyyy > 9) yyyy = "0"+"0"+yyyy
    if (yyyy < 1000 && yyyy > 99) yyyy = "0"+ yyyy

return dd + "-" + mm + "-" + yyyy;
}
// console.log(firstDayWeek(52, 1000))