import { restaurantList } from "../content";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

// What is state
// what is React Hooks? - functions,
// What is useState

function filterData(searchText) {
  const filterData = restaurantList.filter((restaurant) =>
  restaurant.data.name.toUpperCase().includes(searchText.toUpperCase())
  );

  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  // useEffect(()=>{
  //   if(searchText.length){
  //     const data = filterData(searchText);
  //     // update the state - restaurants
  //     setRestaurants(data);
  //     }
  //     else{
  //       setRestaurants(restaurantList);
  //     }

  // });

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const text = e.target.value.toString()
            if(text.length){
              const data = filterData(text);
              // update the state - restaurants
              setRestaurants(data);
            }
            else{
                setRestaurants(restaurantList);
            }
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
