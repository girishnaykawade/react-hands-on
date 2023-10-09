import React from "react";
import ReactDOM from "react-dom/client";

// const FunctionalComponent = ()=> <h3>this is child componet</h3>
// const JsxHeading = () => (
//   <div>
//     <h1 id="heading" className="head" tabIndex="5">
//       This is Namaste Ract
//     </h1>
//     <h2>This is 2nd heading</h2>
//     <FunctionalComponent></FunctionalComponent>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<JsxHeading/>);


// Episode 3 Assignment: functional component

// const logo = "This is logo Image";
// const SearchComp = ()=> (
//   <div>
//     <input type="text" placeholder="Search"/>
//   </div>
// )
// const userIcon = "This is userIcon image";

// const HeaderComponent = ()=> (
//   <div class="header-compnent">
//     {logo}
//     <SearchComp></SearchComp>
//     {userIcon}
//   </div>
// );

// root.render(<HeaderComponent/>)

// Episode 4 

/*
* App
* Header
*  - logo
*  - nav list
* Body
*   - search 
*   - restrorant 
* Footer
*/


// Header component
const Header = ()=> (
  <div className="restro-header">
    <img className="logo-img" alt="logo-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
    <ul className="nav-list">
      <li>Home</li>
      <li>About Us</li>
      <li>Cart</li>
    </ul>
  </div>
);

const Search = ()=> (
  <div className="search">
    <input type="text" className="search-input"/>
  </div>
);
const imgPath = "./../assets/imgs/restro-banner.JPG"
const RestroComponent = (props)=> {
  const {resObj} = props
  return (
  <div className="restro-container">
    <div className="restro">
      <img alt="restro-logo" className="restro-logo" src={resObj.imgURL}/>
      <p className="restro-name">{resObj.name}</p>
      <p className="restro-cuisines">{resObj.cuisines}</p>
      <p className="restro-rating">{resObj.avgRating}</p>
    </div>
  </div>
)};
const resData = [
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'My restro',
    cuisines: 'South Indian',
    avgRating: '4.5/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'KFC',
    cuisines: 'Chicken Wings',
    avgRating: '4.2/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'PizzaHut',
    cuisines: 'Fast Food',
    avgRating: '4.7/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'PizzaHut',
    cuisines: 'Fast Food',
    avgRating: '4.7/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'PizzaHut',
    cuisines: 'Fast Food',
    avgRating: '4.7/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'PizzaHut',
    cuisines: 'Fast Food',
    avgRating: '4.7/5' 
  },
  {
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq",
    name: 'PizzaHut',
    cuisines: 'Fast Food',
    avgRating: '4.7/5' 
  }
]
const Body = ()=> (
  <div className="restro-body-container">
    <Header/>
    <div className="body-main">
      <div className="search-section">
        <Search/>
      </div>
      <div className="restro-section">
        {
          resData?.map( (item) => <RestroComponent resObj={item}/>)
        }
        
      </div>
    </div>
  </div>
);

root.render(<Body/>)