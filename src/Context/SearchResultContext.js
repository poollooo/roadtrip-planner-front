import { createContext } from "react";

const SearchContext = createContext();

function SearchContextProvider(props) {
  return (
    <SearchContext.Provider value={props.value}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchContextProvider };
