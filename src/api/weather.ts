import { LocationType } from "./types";

export async function fetchWeatherData(
  typeAPI: string,
  city: string | { lat: number; long: number }
): Promise<LocationType[]> {
  let url;
  if (typeof city === "string") {
    url = `${process.env.REACT_APP_WEATHER_API_URL}/${typeAPI}?q=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes`;
  } else {
    url = `${process.env.REACT_APP_WEATHER_API_URL}/${typeAPI}?q=${city.lat}%2C%20${city.long}&key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes`;
  }

  return await (await fetch(url)).json();
}
