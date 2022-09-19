import "./SearchItems.scss";

const SearchItems = ({ item, isHidden }) => {
  if (!item) {
    return <h1>We are Loading</h1>;
  }

  return (
    <div className={`SearchItem ${isHidden && "hidden"}`}>
      
      <picture>
        <img src={item.photo[0]} alt={`${item.category} View`} />
      </picture>

      <div className="Search-item-description">
        <h3>
          <strong>{item.name}</strong>
        </h3>

        <p>
          <strong>Rating :</strong> {item.rawRating.toFixed(1)} 🌟
        </p>
        <p>
          <strong>Numbers Of Views :</strong> {item.numberOfReviews}
        </p>

        
        <button>Favorite</button>
        <button>Add to My Trip</button>
      </div>
    </div>
  );
};

export default SearchItems;
