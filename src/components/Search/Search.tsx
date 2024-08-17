import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import styles from './Search.module.css'

export default function Search() {
  return (
    <div className={styles.inputContainer}>
      <SearchIcon />
      <input placeholder="Search for location" className={styles.input}/>
      <LocationOnIcon sx={{cursor: 'pointer'}}/>
    </div>
  );
}
