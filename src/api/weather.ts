import { WeatherType } from "./Types";

export async function fetchWeatherData(
  typeAPI: string,
  city: string | { lat: number; long: number }
): Promise<WeatherType[]> {
  let url;
  if (typeof city === "string") {
    url = `${process.env.REACT_APP_WEATHER_API_URL}/${typeAPI}?q=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`;
  } else {
    url = `${process.env.REACT_APP_WEATHER_API_URL}/${typeAPI}?q=${city.lat}%2C%20${city.long}&key=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }

  return await (await fetch(url)).json();
}
