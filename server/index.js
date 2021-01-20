import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import contentSecurityPolicy from "helmet-csp";

import musixmatchRoutes from "./routes/apis/musixmatch.js";

// The next 4-5 lines are to set up __dirname (as it is not available in modules), which is then used for proper Client Side Routing
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize express application
const app = express();

// Configure dotenv; variables can be accessed via process.env.<<VARIABLE>>
dotenv.config();

// Enable the usage of CORS; front-end can now access back-end through HTTP requests
app.use(cors());

app.use("/api/musixmatch", musixmatchRoutes);

// app.use(
//   contentSecurityPolicy({
//     directives: {
//       defaultSrc: ['*'],
//     },
//   })
// );

// Set up port
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", (_req, res) => {
  //   axios
  //     .get(
  //       `https://api.musixmatch.com/ws/1.1/chart.artists.get?apikey=${process.env.API_KEY_MUSIXMATCH}&page=1&page_size=3&country=CA`
  //     )
  //     .then((response) => res.json(response.data.message.body))
  //     .catch((error) => console.log(error));

  res.send("Hello from the back-end.");
});

app.get("/api/test", (_req, res) => {
  res.json({ message: "Test Message." });
});

// Catch-All
app.get("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
