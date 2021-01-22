import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Typography variant="h6" className={classes.brand}>
            <NavLink to="/">API App</NavLink>
          </Typography>
          <nav>
            <Button
              component={NavLink}
              to="/icanhazdadjoke"
              activeClassName={classes.activeLink}
            >
              Dad Jokes
            </Button>
            <Button
              component={NavLink}
              to="/musixmatch"
              activeClassName={classes.activeLink}
            >
              MusixMatch
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
