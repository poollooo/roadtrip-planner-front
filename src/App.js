import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import CreateTrip from "./components/CreateTrip";
import UserProfile from "./components/UserProfile";
import DisplayCards from "./components/DisplayCards";
import DisplayOneTrip from "./components/DisplayOneTrip";
import Authentication from "./components/Authentication";
import Layout from "./components/Layout";
import { useState } from "react";
import QueryContext from "./Context/QueryContext";

const initialQuery = {
  city: '',
  startDate: '',
  endDate: '',
}

function App() {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    //wrap the whole app in the queryContext
    <QueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />

              <Route path="/:city" element={<SearchResult />} />
              <Route path="/:city/new-trip" element={<CreateTrip />} />

              <Route path="/users/:username" element={<UserProfile />} />
              <Route path="/users/:username/trips" element={<DisplayCards />} />

              <Route
                path="/users/:username/trips/:tripId"
                element={<DisplayOneTrip />}
              />

              <Route path="/authentication" element={<Authentication />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </QueryContext.Provider>
  );
}

export default App;
