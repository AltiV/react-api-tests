// See https://stackoverflow.com/a/64135466 as to why unstable_createMuiStrictModeTheme is being used
// (findDOMNode is deprecated in StrictMode) errors
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    // primary: {
    //   main: "#333333",
    // },
  },
});

export default theme;
