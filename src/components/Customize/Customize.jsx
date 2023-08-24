import Bottle from "../../assets/Bottle.png";
import Boba from "../../assets/Boba.png";
import Pudding from "../../assets/Pudding.png";
import Blacktea from "../../assets/Blacktea.png";
import AMilk from "../../assets/AMilk.png";
import { motion } from "framer-motion";


export default function Customize({lineItem}) {

    return (
            
         


            <div style={{ position:"absolute"}}>


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
                    src={AMilk}
                    alt={AMilk}
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