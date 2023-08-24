import Bottle from "../../assets/Bottle.png";
import Boba from "../../assets/Boba.png";
import Secret from "../../assets/Secret.png";
import Pudding from "../../assets/Pudding.png";
import Blacktea from "../../assets/Blacktea.png";
import Greentea from "../../assets/Greentea.png";
import Wulongtea from "../../assets/Wulongtea.png";
import Milk from "../../assets/Milk.png";
import ChocolateMilk from "../../assets/ChocolateMilk.png";
import { motion } from "framer-motion";


export default function Customize({lineItem}) {

    return (
            
         


            <div style={{ position:"absolute"}}>

                {lineItem.item.name === "Green Tea" && (
                    <img
                    src={Greentea}
                    alt={Greentea}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                )}
                {lineItem.item.name === "Chocolate Milk" && (
                    <img
                    src={ChocolateMilk}
                    alt={ChocolateMilk}
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
                {lineItem.item.name === "Almond Milk" && (
                    <img
                    src={Milk}
                    alt={Milk}
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
         
                {lineItem.item.name === "Black Tea" && (
                    <img
                    src={Blacktea}
                    alt={Blacktea}
                    height="100%"
                    width="100%"
                    className="items"
                    />
                    )}

                    <img src={Bottle} alt="Bottle" height="100%" width="100%" className="bottle" />
            </div>

    )
}