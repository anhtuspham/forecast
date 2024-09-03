export type WeatherType = {
  data: {
    id?: number;
    city: string | { latitude: number; longitude: number };
  };
};
