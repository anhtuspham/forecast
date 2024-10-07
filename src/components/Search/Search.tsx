import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from "./Search.module.css";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { searchLocation } from "../../api/weather";
import { SearchLocationType } from "../../api/types";

export default function Search() {
  const theme = useTheme();
  const [searchItem, setSearchItem] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchLocationType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchItem) {
        // Make API call to fetch weather data for the given search item
        try {
          const data = await searchLocation(searchItem);
          setSearchResult(data);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    };

    fetchData();
  }, [searchItem]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <div className={styles.inputSearchContainer}>
      {/* input search  */}
      <div
        className={styles.inputSearch}
        style={
          {
            "--default-background-color": theme.palette.background.default,
          } as React.CSSProperties
        }
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
        {searchResult && searchResult.length > 0 && (
          <ul className={styles.searchResult}>
            {searchResult.map((result, index) => (
              <li key={index}>
                <button>
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
