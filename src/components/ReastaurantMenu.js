import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [menuData, setMenuData] = useState(null);
    const [menuItems, setMenuItems] = useState(null);
    
    const {resId} = useParams(); 

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=236083");

        // fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=236083")
        // .then((response) => {
        //     if(!response.ok)
        //         throw new Error(`Error: ${response.status}`);

        //     return response.json();
        // })
        // .then((data) => {
        //     setMenuData(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[10]?.card?.card?.itemCards);
            
        // })
        // .catch((error) => {
        //     console.error("Failed to fetch data", error);
        // });

        const data = await fetch(MENU_API + resId);

        const json = await data.json();

        setMenuItems(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        setMenuData(json?.data?.cards);
    }

    console.log(menuItems);

    if (menuItems == null || menuData == null) return <Shimmer/>;

    const { text } = menuData[0]?.card?.card;
    
    
    return (
        <div className="menu">
            
            <h1>{text}</h1>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item) => {
                    const {id ,name , price} = item?.card?.info;

                    return <li key={id}>{name} - <b>{price}</b></li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;