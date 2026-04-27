function dogYears(planet, seconds) {

    let earthYears = seconds / 31557600;

    switch (planet) {

        case "earth":
            return (earthYears / 1.0) * 7;

        case "mercury":
            return (earthYears / 0.2408467) * 7;

        case "venus":
            return (earthYears / 0.61519726) * 7;

        case "mars":
            return (earthYears / 1.8808158) * 7;

        case "jupiter":
            return (earthYears / 11.862615) * 7;

        case "saturn":
            return (earthYears / 29.447498) * 7;

        case "uranus":
            return (earthYears / 84.016846) * 7;

        case "neptune":
            return (earthYears / 164.79132) * 7;
    }
}