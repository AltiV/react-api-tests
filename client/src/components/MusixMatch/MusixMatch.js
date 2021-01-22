import { useState } from "react";

import {
  Typography,
  Card,
  OutlinedInput,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

import useStyles from "./styles";

import axios from "axios";

const MusixMatch = () => {
  const classes = useStyles();

  const [category, setCategory] = useState("artists");
  const [data, setData] = useState({});

  const CATEGORY_MAP = {
    artists: "artist.search",
    tracks: "track.search",
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setData({});

      axios
        .get("/api/musixmatch", {
          params: {
            category: CATEGORY_MAP[category],
            searchValue: event.target.value,
          },
        })
        .then((response) => setData(response.data))
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
            <MenuItem value="artists">Artists</MenuItem>
            <MenuItem value="tracks">Tracks</MenuItem>
          </Select>
        </FormControl>
        {/* <Typography variant="subtitle1">Search</Typography> */}
      </Card>

      <Box>{JSON.stringify(data, null, "\t")}</Box>
    </>
  );
};

export default MusixMatch;
