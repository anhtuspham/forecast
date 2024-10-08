export type WeatherType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_mph: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelsllike_f: number;
    vis_km: number;
    uv: number;
    air_quality: {
      ['us-epa-index']: number;
      ['gb-defra-index']: number;
    };
  };
  astronomy: {
    astro: {
      sunrise: string;
      sunset: string;
      moonrise: string;
      moonset: string;
    };
  };
};

export type ForecastWeatherType = {
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        condition: {
          text: string;
          icon: string;
        };
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number
      };
    }>
  }
}

export type LocationType = {
  id?: number;
  name?: string;
  region?: string;
  country?: string;
  lat: number;
  lon: number;
}