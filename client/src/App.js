import { BrowserRouter, Route, Switch } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import theme from "./themes/theme";

import Navbar from "./components/Navbar/Navbar";
import Icanhazdadjoke from "./components/Icanhazdadjoke/Icanhazdadjoke";
import MusixMatch from "./components/MusixMatch/MusixMatch";
import NotFound from "./components/NotFound/NotFound";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route
            path="/icanhazdadjoke"
            render={() => <Icanhazdadjoke />}
          ></Route>
          <Route path="/musixmatch" render={() => <MusixMatch />}></Route>
          <Route render={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
