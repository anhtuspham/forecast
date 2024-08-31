import { useTheme } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";

type LocationContextProps = {
  children: ReactNode;
};

type LocationType = {
  latitude: number;
  longitude: number;
};

export const LocationContext = createContext<{
  location: LocationType | null;
  setLocation: React.Dispatch<React.SetStateAction<LocationType | null>>;
}>({
  location: null,
  setLocation: () => {},
});

export function LocationContextProvider({ children }: LocationContextProps) {
  const theme = useTheme();
  const [location, setLocation] = useState<LocationType | null>(null);

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
    <LocationContext.Provider value={{ location, setLocation }}>
      <div
        style={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.default,
        }}
      >
        {children}
      </div>
    </LocationContext.Provider>
  );
}
