import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import CreateTrip from "./components/CreateTrip";
import UserProfile from "./components/UserProfile";
import DisplayCards from "./components/DisplayCards";
import DisplayOneTrip from "./components/DisplayOneTrip";
import SignupPage from "./components/SignupPage";
import Layout from "./components/Layout";
import { useState } from "react";
import QueryContext from "./Context/QueryContext";
import { SearchContextProvider } from "./Context/SearchResultContext";
import LoginPage from "./components/LoginPage";
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

              <Route path="/:city" element={<SearchResult />} />
              <Route path="/:city/new-trip" element={<CreateTrip />} />

              <Route path="/users/:username" element={
                <IsPrivate>
                  <UserProfile />
                </IsPrivate>} />

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
