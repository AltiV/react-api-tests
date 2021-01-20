import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiToolbar-root nav a": {
      margin: theme.spacing(0, 1),
      textTransform: "none",
    },
  },
  brand: {
    flexGrow: 1,
    "& a": {
      color: "white",
      textDecoration: "none",
    },
  },
  activeLink: {
    color: "red",
  },
  "nav a": {
    color: "purple",
  },
}));
