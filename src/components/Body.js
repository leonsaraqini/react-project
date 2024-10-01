import RestaurantCard from "./RestaurantCard";
import { listOfRestaurant } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const changeValue = (r1, r2) => {
    if(r1.info.avgRating < r2.info.avgRating) return -1;
    if(r1.info.avgRating > r2.info.avgRating) return 1;
    return 0;
}

const filterRes = (restaurant, searchText) => {
    if(searchText === "" || restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())){
        console.log(restaurant);
        return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData ={restaurant}/></Link>;
    }
}

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);
    
    // const [filteredListOfRes, setfilteredListOfRes] = useState([]);

    const [searchText, setSearchText] = useState(""); 

    useEffect(() => {
        fetchData();        
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        
        setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        // setfilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //Conditional Rendering
    
    return listOfRes.length == 0 ? <Shimmer /> : (

        <div className="body">

            <div className="filter">
                
                <div className="search">
                    
                    <label>Search:
                    
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value);}}></input>
                    
                    </label>
                     
                    {/* <button onClick={() => {
                        let list = listOfRes.filter((restaurant) => searchText === "" || restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredListOfRes(list);
                    } }>Search</button> */}
                    
                </div>
                
                <button className="filter-btn" onClick={() => {
                
                let list = listOfRes.filter(restaurant => restaurant);
                    
                    list.sort((r1, r2) => changeValue(r1, r2));
                    
                    setListOfRes(list);
                
                }}>Top Rated Restaurants</button>
                
            </div>

            <div className="res-container">
                
                 {listOfRes.map((restaurant) => ( 
                        filterRes(restaurant, searchText)
                    )
                    // filteredListOfRes.map((restaurant) => (
                //     <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
                //     )
                // )
                )} 
                
                

            </div>
        </div>
    )
}

export default Body;