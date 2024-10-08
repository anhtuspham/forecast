import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from "./Search.module.css";
import { useTheme } from "@mui/material";
import { useEffect, useState, useRef, useContext } from "react";
import { searchLocation } from "../../api/weather";
import { LocationType } from "../../api/types";
import { WeatherContext } from "../../context/WeatherContextProvider";

export default function Search() {
  const theme = useTheme();
  const [searchItem, setSearchItem] = useState<string>("");
  const { setLocation } = useContext(WeatherContext);
  const [searchResult, setSearchResult] = useState<LocationType[]>([]);
  const [isDropDownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const inputSearchRef = useRef<HTMLDivElement>(null);

  // call api to get search results
  useEffect(() => {
    const fetchData = async () => {
      if (searchItem) {
        // Make API call to fetch weather data for the given search item
        try {
          const data = await searchLocation(searchItem);
          setSearchResult(data);
          setIsDropdownOpen(true);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };

    fetchData();
  }, [searchItem]);

  // handle search base on input value change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);
  };

  // handle get weather data for the given search item
  const handleSelectPosition = (position: LocationType) => {
    setLocation(position);
    setIsDropdownOpen(false);
  };

  // handle close dropdown
  useEffect(() => {
    const handleCloseDropdown = (event: MouseEvent) => {
      if (!inputSearchRef.current?.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleCloseDropdown);
    return () => {
      document.removeEventListener("mousedown", handleCloseDropdown);
    };
  }, []);

  return (
    <div className={styles.inputSearchContainer} ref={inputSearchRef}>
      {/* input search  */}
      <div
        className={styles.inputSearch}
        style={
          {
            "--default-background-color": theme.palette.background.default,
          } as React.CSSProperties
        }
        onClick={() => setIsDropdownOpen(true)}
      >
        <SearchIcon />
        <input
          placeholder="Search for location"
          className={styles.input}
          style={
            {
              "--placeholder-color": theme.palette.text.secondary,
              color: theme.palette.text.primary,
            } as React.CSSProperties
          }
          value={searchItem}
          onChange={handleSearch}
        />
        <LocationOnIcon className={styles.locationIcon} />
      </div>

      {/* suggested search result dropdown */}
      <div
        className={styles.dropdown}
        style={
          {
            "--default-background-color": theme.palette.background.secondary,
          } as React.CSSProperties
        }
      >
        {searchResult && isDropDownOpen && searchResult.length > 0 && (
          <ul className={styles.searchResult}>
            {searchResult.map((result, index) => (
              <li key={index}>
                <button onClick={() => handleSelectPosition(result)}>
                  {result.name}, {result.region}, {result.country}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
