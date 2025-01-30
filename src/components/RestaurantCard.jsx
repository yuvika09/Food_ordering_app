import { IMG_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRatingString,
  cuisines,
  areaName,
  sla,
}) => {
  return (
    <>
      <div className="border-2 rounded-md p-2 m-4 w-52 h-[400px] shadow-lg bg-purple-100 text-center">
        <div className="p-2">
          <img
            src={IMG_URL + cloudinaryImageId}
            className="h-52 w-48 rounded-lg"
          />
        </div>
        <div>
          <div className="text-md font-semibold">{name}</div>
          <div className="rate-dist">
            ⭐{avgRatingString} &emsp; &emsp; ⏱️{sla.slaString}
          </div>
          <div className="text-sm">{cuisines.join(", ")}</div>
          <div className="">{areaName}</div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
