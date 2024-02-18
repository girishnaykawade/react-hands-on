import { IMG_URL } from "../utils/constant";

const RestaurantComponent = (props)=> {
    const {resObj} = props
    return (
    <div className="m-2 p-2 bg-slate-200 rounded-lg w-[250px] shadow-lg">
      <div className="">
        <img alt="restro-logo" className=" rounded-lg" src={IMG_URL+resObj.cloudinaryImageId}/>
        <p className="restro-name">{resObj.name}</p>
        <p className="restro-cuisines">{resObj.costForTwo}</p>
        <p className="restro-rating">{resObj.avgRating}</p>
      </div>
    </div>
  )};

  export default RestaurantComponent;

  export const withPromotedLabel = () => {
    return (props) => {
      return (
        <div className="relative">
          <label className="absolute bg-black text-white  px-2 my-2 top-[5px] left-[10px] before:content-[''] before:border-l-[6px] before:border-l-transparent before:border-t-[6px] before:border-t-black before:absolute before:left-0 before:bottom-[-6px]">
            Top Rated            
          </label>
          <RestaurantComponent {...props}></RestaurantComponent>
        </div>
      )
    }
  }