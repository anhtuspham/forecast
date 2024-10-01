import { useTheme } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

type WeatherContextProps = {
  children: ReactNode;
};

type LocationType = {
  latitude: number;
  longitude: number;
};

export const WeatherContext = createContext<{
  location: LocationType | null;
  setLocation: React.Dispatch<React.SetStateAction<LocationType | null>>;
  handleSwitchDegreeUnit: () => void;
  isCelsiusDegree: boolean;
  currentUnitDegree: string;
}>({
  location: null,
  setLocation: () => {},
  handleSwitchDegreeUnit: () => {},
  isCelsiusDegree: true,
  currentUnitDegree: "°C",
});

export function WeatherContextProvider({ children }: WeatherContextProps) {
  const theme = useTheme();
  const [location, setLocation] = useState<LocationType | null>(null);
  const [isCelsiusDegree, setIsCelsiusDegree] = useState<boolean>(true);

  const handleSwitchDegreeUnit = () => {
    setIsCelsiusDegree((prevIsCelsiusDegree) => !prevIsCelsiusDegree);
  };

  const currentUnitDegree = isCelsiusDegree ? "°C" : "°F";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting position", error);
        }
      );
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        handleSwitchDegreeUnit,
        isCelsiusDegree,
        currentUnitDegree,
      }}
    >
      <div
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </div>
    </WeatherContext.Provider>
  );
}
