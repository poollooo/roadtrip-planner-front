import React from 'react'

const SearchItems = ({imageUrl,name,description,stars,review}) => {
  return (
    <div>
      <img src={imageUrl} alt="Place" />
      <div>
        <h1></h1>
      </div>
    </div>
  );
}

export default SearchItems