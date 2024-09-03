export type LocationType = {
  data: {
    id?: number;
    city: string | { latitude: number; longitude: number };
  };
};

export type WeatherType = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    long: number;
    localtime: Date;
  };
  condition: {
    name: string;
    icon: string;
    vis_km: number;
    vis_miles: number;
  };
  air: {
    us_index: number;
  };
  temperature: {
    temp_c: number;
    temp_f: number;
    feelslike_c: number;
    feelslike_f: number;
    maxtemp_c: number;
    maxtemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avghumidity: number;
    uv: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moonphase: string;
  };
};
