import { useState } from "react";

import {
  Typography,
  Card,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import useStyles from "./styles";

import axios from "axios";

const MusixMatch = () => {
  const classes = useStyles();

  const [category, setCategory] = useState("");

  const CATEGORY_MAP = {
    artists: "artist.search",
    albums: "album.search",
    tracks: "track.search",
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // TODO: Build URL to hit MusixMatch API
      // console.log(event.target.value);
      // console.log(category);
      axios
        .get("/api/musixmatch", {
          params: {
            category: CATEGORY_MAP[category],
          },
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Typography variant="body1">This is the MusixMatch page.</Typography>
      <Card className={classes.searchBox}>
        <OutlinedInput
          variant="outlined"
          placeholder="Search..."
          margin="dense"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          onKeyDown={handleKeyDown}
        />
        <FormControl
          required
          variant="outlined"
          margin="dense"
          className={classes.categoryBox}
        >
          <Select onChange={handleCategoryChange} value={category}>
            <MenuItem value="">Select Category...</MenuItem>
            <MenuItem value="artists">Artists</MenuItem>
            <MenuItem value="albums">Albums</MenuItem>
            <MenuItem value="tracks">Tracks</MenuItem>
          </Select>
        </FormControl>
        {/* <Typography variant="subtitle1">Search</Typography> */}
      </Card>
    </>
  );
};

export default MusixMatch;
