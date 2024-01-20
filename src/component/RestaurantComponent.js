const RestaurantComponent = (props)=> {
    const {resObj} = props
    return (
    <div className="restro-container">
      <div className="restro">
        <img alt="restro-logo" className="restro-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resObj.cloudinaryImageId}/>
        <p className="restro-name">{resObj.name}</p>
        <p className="restro-cuisines">{resObj.costForTwo}</p>
        <p className="restro-rating">{resObj.avgRating}</p>
      </div>
    </div>
  )};

  export default RestaurantComponent;