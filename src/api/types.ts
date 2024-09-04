export type LocationType = {
  data: {
    id?: number;
    city: string | { latitude: number; longitude: number };
  };
};

// export type WeatherType = {
//   location: {
//     name: string;
//     region: string;
//     country: string;
//     lat: number;
//     long: number;
//     localtime: Date;
//   };
//   condition: {
//     name: string;
//     icon: string;
//     vis_km: number;
//     vis_miles: number;
//   };
//   air: {
//     us_index: number;
//   };
//   temperature: {
//     temp_c: number;
//     temp_f: number;
//     feelslike_c: number;
//     feelslike_f: number;
//     maxtemp_c: number;
//     maxtemp_f: number;
//     avgtemp_c: number;
//     avgtemp_f: number;
//     avghumidity: number;
//     uv: number;
//   };
//   astro: {
//     sunrise: string;
//     sunset: string;
//     moonrise: string;
//     moonset: string;
//     moonphase: string;
//   };
// };

export type WeatherType = {
  search: {
    id: number;
    name: string;
    region: string;
    lat: number;
    lon: number;
    url: string;
  };
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
