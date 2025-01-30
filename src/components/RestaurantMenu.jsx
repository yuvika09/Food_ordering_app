import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const parameter = useParams();
  const { id } = parameter;

  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRest();
  }, [id]);

  async function getRest() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.49690&lng=80.32460&restaurantId=" +
        id
    );
    const jsonData = await data.json();
    setRestaurant(jsonData?.data?.cards[2]?.card?.card?.info);
    setMenu(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards || []
    );
  }

  function handleFoodItem(item) {
    dispatch(addItem(item));
  }

  return (
    <div className="flex">
      {/* <div>{restaurant?.id}</div> */}
      <div className="ml-11 mt-16">
        <div className="text-bold text-2xl rounded-md">{restaurant?.name}</div>
        <img
          className="w-60 my-4"
          src={IMG_URL + restaurant?.cloudinaryImageId}
        />
      </div>
      <div className="m-14">
        {menu.length > 0 ? (
          menu.map((dish, index) => (
            <div
              className="flex justify-between m-4 border-2 p-2 rounded-md bg-purple-50"
              key={index}
            >
              <div>{dish?.card?.info?.name}</div>
              <button onClick={() => handleFoodItem(dish?.card?.info)}>
                ➕
              </button>
            </div>
          ))
        ) : (
          <div>No menu items available</div>
        )}
      </div>
    </div>
  );
};
export default Menu;
