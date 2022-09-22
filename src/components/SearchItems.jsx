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

  const handleSelect = () => {
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
  }

  return (
    <div id={item._id}
      className={`SearchItem ${isHidden && "hidden"}`}
    >
      <picture>
        <img
          onClick={() => {
            setCurrentActivity(item);
          }}
          src={item.photo}
          alt={`${item.category} View`}
          className="rounded-lg px-0 w-12"
        />
        <button>
          <img
            src={!cancelSelected ? addSvg : addedSvg}
            alt="add-experience"
            className="icon-add"
            onClick={handleSelect}
          />
        </button>
      </picture>
      <div className="flex items-end w-full justify-between">
        <div className="flex flex-col items-start mt-1 justify-start">
          <h3>
            <strong>{item.name.length > 24 ? item.name.slice(0, 24) + '...' : item.name}</strong>
          </h3>

          <p>
            Rating : {Number(item.rawRating).toFixed(1)} 🌟
          </p>
          <p>
            Numbers Of Views : {item.numberOfReviews}
          </p>
        </div>
        <div>
          <button
            className="bg-green-pine text-white rounded-md w-14 border-2 border-green-pine"
            // switch className if the item is selected
            {...(cancelSelected && { className: "bg-white text-green-pine border-2 border-green-pine rounded-md w-20" })}
            onClick={handleSelect}
          >
            {!cancelSelected ? 'Add' : 'Remove'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItems;
