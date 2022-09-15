import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import CreateTrip from "./components/CreateTrip";
import UserProfile from "./components/UserProfile";
import DisplayTrips from "./components/DisplayTrips";
import DisplayOneTrip from "./components/DisplayOneTrip";
import Authentication from "./components/Authentication";
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/:city" element={<SearchResult />} />
            <Route path="/:city/new-trip" element={<CreateTrip />} />

            <Route path="/users/:username" element={<UserProfile />} />
            <Route path="/users/:username/trips" element={<DisplayTrips />} />

            <Route
              path="/users/:username/trips/:tripId"
              element={<DisplayOneTrip />}
            />

            <Route path="/authentication" element={<Authentication />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
