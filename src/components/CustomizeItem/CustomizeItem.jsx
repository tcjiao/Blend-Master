import './CustomizeItem.css';
import { motion } from "framer-motion";
//Baee
import Bottle from "../../assets/Bottle.png";
//Milk
import ChocolateMilk from "../../assets/ChocolateMilk.png";
import Milk from "../../assets/Milk.png";
import Taro from "../../assets/Taro.png";
//Tea
import Blacktea from "../../assets/Blacktea.png";
import Greentea from "../../assets/Greentea.png";
import Wulongtea from "../../assets/Wulongtea.png";
//Juice
import Applejuice from "../../assets/Applejuice.png";
import Orangejuice from "../../assets/Orangejuice.png";
import Watermelonjuice from "../../assets/Watermelonjuice.png";
import Grapejuice from "../../assets/Grapejuice.png";
import Lycheejuice from "../../assets/Lycheejuice.png";
import Peachjuice from "../../assets/Peachjuice.png";

//Topping
import Boba from "../../assets/Boba.png";
import Pudding from "../../assets/Pudding.png";
import Secret from "../../assets/Secret.png";
import Icecream from "../../assets/Icecream.png";


export default function CustomizeItem({lineItem}) {

    return (
            
         
        <div className="CusomizeItem" style={{position:"absolute"}} >


                {lineItem.item.name === "Chocolate Milk" && (
                    <img
                    src={ChocolateMilk}
                    alt={ChocolateMilk}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Taro Milk" && (
                    <img
                    src={Taro}
                    alt={Taro}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Apple Juice" && (
                    <img
                    src={Applejuice}
                    alt={Applejuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Orange Juice" && (
                    <img
                    src={Orangejuice}
                    alt={Orangejuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Watermelon Juice" && (
                    <img
                    src={Watermelonjuice}
                    alt={Watermelonjuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Grape Juice" && (
                    <img
                    src={Grapejuice}
                    alt={Grapejuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Lychee Juice" && (
                    <img
                    src={Lycheejuice}
                    alt={Lycheejuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Peach Juice" && (
                    <img
                    src={Peachjuice}
                    alt={Peachjuice}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
              
                {lineItem.item.name === "Almond Milk" || lineItem.item.name === "Coconut Milk" || lineItem.item.name === "Soy Milk" || lineItem.item.name === "Fresh Milk" ? (
                    <img
                    src={Milk}
                    alt={Milk}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                ): null}

                {lineItem.item.name === "Green Tea" && (
                    <img
                    src={Greentea}
                    alt={Greentea}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Wulong Tea" && (
                    <img
                    src={Wulongtea}
                    alt={Wulongtea}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Secret Gift" && (
                    <img
                    src={Secret}
                    alt={Secret}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Boba" && (
                    <img
                    src={Boba}
                    alt={Boba}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Pudding" && (
                    <img
                    src={Pudding}
                    alt={Pudding}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                    )}
                {lineItem.item.name === "Icecream" && (
                    <img
                    src={Icecream}
                    alt={Icecream}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                    )}
         
                {lineItem.item.name === "Black Tea" && (
                    <img
                    src={Blacktea}
                    alt={Blacktea}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                    )}

                    <img src={Bottle} alt="Bottle" height="100%" width="100%" className="" />

            </div>
    )
}