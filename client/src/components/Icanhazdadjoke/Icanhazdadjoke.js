import { useState } from "react";

import { Card, OutlinedInput, Button, Typography } from "@material-ui/core";

import useStyles from "./styles";

import axios from "axios";

const Icanhazdadjoke = () => {
  const classes = useStyles();

  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    setJoke("...");
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "text/plain" },
      })
      .then((response) => setJoke(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Card className={classes.root}>
        <OutlinedInput
          variant="outlined"
          placeholder="Your dad joke will appear here."
          margin="dense"
          fullWidth
          readOnly
          value={joke}
          className={classes.jokeBox}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <Button
          variant="outlined"
          onClick={generateJoke}
          className={classes.button}
        >
          Generate Joke
        </Button>
      </Card>
      <Typography>
        Jokes fetched from the{" "}
        <a
          href="https://icanhazdadjoke.com/api"
          target="_blank"
          rel="noreferrer"
        >
          icanhazdadjoke API
        </a>
        .
      </Typography>
    </>
  );
};

export default Icanhazdadjoke;
