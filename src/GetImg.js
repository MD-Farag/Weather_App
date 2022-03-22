export const GetImg = (imgURL) => {

    const images = [
        "/img/sunny-sm.png",
        "/img/sunny-lg.png",
        "/img/rainy-sm.png",
        "/img/rainy-lg.png",
        "/img/partly-cloudy-sm.png",
        "/img/partly-cloudy-lg.png",
        "/img/mostly-cloudy-sm.png",
        "/img/mostly-cloudy-lg.png"
    ]

    let imgSm = ""
    let imgLg = ""

    switch (imgURL) {
        case "Clear":
        case "Sunny":
        case "Mostly sunny":
            imgSm = images[0]
            imgLg = images[1]
            break;
        case "Clear with periodic clouds":
        case "Partly cloudy":
            imgSm = images[4]
            imgLg = images[5]
            break;
        case "Mostly cloudy":
        case "Cloudy":
        case "Haze":
            imgSm = images[6]
            imgLg = images[7]
            break;
        case "Rain":
        case "Rain and snow":
        case "Showers":
        case "Scattered showers":
        case "Light rain showers":
        case "Scattered thunderstorms":
        case "thunderstorms":


            imgSm = images[2]
            imgLg = images[3]
            break;
    }
    return { imgSm, imgLg }
}