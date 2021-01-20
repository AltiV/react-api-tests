import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
  searchBox: {
    // display: "flex",
    margin: theme.spacing(5),
    padding: theme.spacing(5),
    backgroundColor: "beige",
    border: "2px solid black",
    borderRadius: "9999px",
  },
  categoryBox: {
    top: "-8px",
    marginLeft: theme.spacing(1),
  },
}));
