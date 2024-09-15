import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delery tie
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Title = () => <h1 id="title">Hello Kanishk😎</h1>;

const Header = () => {
    return(<div className = "header-class">
    <img className="img-class" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256"></img>
    <ul className = "header-list">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>)
}

const AppLayout = () => {
    return <> <Header/>
            <h2 id ="heading">I am learning React🤷‍♀️</h2>
            </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)