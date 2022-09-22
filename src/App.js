import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DisplayCity from "./components/DisplayCity/DisplayCity";
import CreateTrip from "./Pages/CreateTrip";
import UserProfile from "./Pages/UserProfile";
import DisplayCards from "./components/DisplayCards";
import DisplayOneTrip from "./Pages/DisplayOneTrip";
import SignupPage from "./Pages/SignupPage";
import Layout from "./components/Layout";
import { useState } from "react";
import QueryContext from "./Context/QueryContext";
import { SearchContextProvider } from "./Context/SearchResultContext";
import LoginPage from "./Pages/LoginPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnonymous";

const initialQuery = {
  city: '',
  startDate: '',
  endDate: '',
}

function App() {
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    <QueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      <BrowserRouter>
        <SearchContextProvider
          value={{ selectedExperience, setSelectedExperience }}
        >
          <div className="App">
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />

                <Route path="/:city" element={<DisplayCity />} />
                <Route path="/:city/new-trip" element={<CreateTrip />} />

                <Route path="/users/:username" element={
                  <UserProfile />
                } />

                <Route path="/users/:username/trips" element={
                  <IsPrivate>
                    <DisplayCards />
                  </IsPrivate>} />

                <Route
                  path="/users/:username/trips/:tripId"
                  element={
                    <IsPrivate>
                      <DisplayOneTrip />
                    </IsPrivate>}
                />

                <Route path="/signup" element={
                  <IsAnon>
                    <SignupPage />
                  </IsAnon>
                } />
                <Route path="/login" element={
                  <IsAnon>
                    <LoginPage />
                  </IsAnon>
                } />
              </Route>
            </Routes>
          </div>
        </SearchContextProvider>
      </BrowserRouter>
    </QueryContext.Provider>
  );
}

export default App;
