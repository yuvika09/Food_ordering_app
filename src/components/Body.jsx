import { useContext, useEffect, useState } from "react";
// import { restaurants } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRest from "./NoRest";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRest, setAllRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.error(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setAllRest(
      jsonData.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      jsonData.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   jsonData.data.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    // );
  }

  function filterData(searchText, allRest) {
    const data = allRest.filter((rest) => {
      return rest.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return data;
  }

  if (!allRest) return null;

  return allRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-3 flex justify-center">
        <input
          type="text"
          className="focus:bg-purple-100 border-2 shadow-md rounded-md m-2 text-sm p-1"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-purple-600 shadow-md text-white text-sm px-2 mt-2 h-7 rounded-md hover:bg-purple-800"
          onClick={() => {
            const data = filterData(searchText, allRest);
            setFilteredRest(data);
          }}
        >
          Search
        </button>
        {/* <input
          type="text"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
          className="focus:bg-purple-100 border-2 shadow-md rounded-md m-2 text-sm p-1"
        />
        <input
          type="text"
          value={user.address}
          onChange={(e) => {
            setUser({
              ...user,
              address: e.target.value,
            });
          }}
          className="focus:bg-purple-100 border-2 shadow-md rounded-md m-2 text-sm p-1"
        /> */}
      </div>

      <h1 className="text-3xl font-bold text-center italic mb-3">
        Top restaurant chains in Kanpur
      </h1>

      <div className="flex flex-wrap justify-center">
        {filteredRest.length === 0 ? (
          <NoRest />
        ) : (
          filteredRest.map((rest) => {
            return (
              <Link to={"/restaurant/" + rest.info.id}>
                <RestaurantCard {...rest.info} key={rest.info.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
