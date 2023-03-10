import { IMG_CDN_URL } from "../constants";
const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, id } = props?.data;
  return (
    <div className="RestaurantCard p-2 m-4 h-72 w-[220] border shadow-xl hover:shadow-violet-300 border-violet-400">
      <img
        className="h-32 w-64"
        alt="RestaurantImage"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <span className="font-bold">{name}</span>
      <h2>{avgRating}</h2>
    </div>
  );
};
export default RestaurantCard;
