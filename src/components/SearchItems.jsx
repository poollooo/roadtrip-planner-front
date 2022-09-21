import { useContext, useState } from "react";
import { SearchContext } from "../Context/SearchResultContext";
import "./SearchItems.scss";
import addSvg from '../images/choose.svg'
import addedSvg from '../images/choosed.svg'


const SearchItems = ({ item, isHidden, setCurrentActivity }) => {
  const { selectedExperience, setSelectedExperience } =
    useContext(SearchContext);
  const [cancelSelected, setCancelSelected] = useState(false);

  if (!item || !Object.keys(item).length) {
    return;
  }

  return (
    <div id={item._id} className={`SearchItem ${isHidden && "hidden"}`}>
      <picture>
        <img
          onClick={() => {
            setCurrentActivity(item);
          }}
          src={item.photo}
          alt={`${item.category} View`}
        />
        <img
          src={!cancelSelected ? addSvg : addedSvg}
          alt="add-experience"
          className="icon-add"
          onClick={() => {
            if (!cancelSelected) {
              setSelectedExperience((prevState) => {
                const foundExp = prevState.find((ele) => ele._id === item._id);
                if (foundExp) {
                  return prevState;
                }
                return [...prevState, item];
              });
            } else {
              setSelectedExperience((prevState) => {
                const keepExp = prevState.filter((ele) => ele._id !== item._id);

                return [...keepExp];
              });
            }
            setCancelSelected(!cancelSelected);
          }}
        />
      </picture>

      <div className="Search-item-description">
        <h3>
          <strong>{item.name}</strong>
        </h3>

        <p>
          Rating : {Number(item.rawRating).toFixed(1)} 🌟
        </p>
        <p>
          Numbers Of Views : {item.numberOfReviews}
        </p>
      </div>
    </div>
  );
};

export default SearchItems;
