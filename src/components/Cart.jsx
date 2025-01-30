import { useSelector } from "react-redux";
import { IMG_URL } from "../config";

const Cart = () => {
  const cartDishes = useSelector((store) => store.cart.items);
  // console.log(cartDishes);

  return (
    <>
      <div className="flex flex-wrap justify-center">

        {cartDishes.map((item) => {
          return (
            <>
              <div className="border-2 rounded-md p-2 m-4 w-52 shadow-lg bg-purple-100 text-center">
                <div className="p-2">
                  <img
                    src={IMG_URL + item?.imageId}
                    className="h-52 w-48 rounded-lg"
                  />
                </div>
                <div>
                  <div className="text-md font-semibold">{item?.name}</div>
                  <div className="text-sm">{item.category}</div>
                </div>
              </div>
            </>
          );
        })}
        
      </div>
    </>
  );
};

export default Cart;
