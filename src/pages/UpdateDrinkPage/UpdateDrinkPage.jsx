import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as drinksAPI from '../../utilities/drinks-api';
import '../NewDrinkPage/NewDrinkPage.css';
import {Link, useNavigate, useParams} from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import Customize from '../../components/Customize/Customize';

export default function UpdateDrinkPage({user, setuser}) {
    const [menuItems, setMenuItems] = useState([]);
    const categoriesRef = useRef([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();
    const [drinkName, setDrinkName] = useState('');
    const [addedItems, setAddedItems] = useState([]);

    const [drink, setDrink] = useState(null);
    const {drinkId} = useParams();

    const handleChangeDrinkName = (newName) => {
        setDrink({
            ...drink,
            name: newName
        })
    }

    useEffect(() => {
        async function getDrink() {
            const drink = await drinksAPI.getDrink(drinkId);
            setDrink(drink);
        }
        if (drinkId) {
            getDrink();
        }
    }, [drinkId]);



    useEffect(function () {
        async function getItems(){
            const items = await itemsAPI.getAll();
            categoriesRef.current = [...new Set(items.map(item => item.category.name))];
            setMenuItems(items);
            setActiveCat(categoriesRef.current[0]);
        }

        getItems();


        async function getCart() {
            const cart = await drinksAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);

    async function handleAddToDrink(itemId) {
        const item = await itemsAPI.getByIdInEditFormat(itemId);
        const _drink = {...drink};
        _drink.lineItems.push(item);
        setDrink(_drink)
    }

    async function handleRemoveDrink(itemId) {
        const _drink = {...drink};
        _drink.lineItems = _drink.lineItems.filter(item => item.item._id !== itemId);
        setDrink(_drink)
    }

    async function handleCreate() {
        await drinksAPI.updateDrink(drinkId, {
            name: drink.name,
            items: drink.lineItems.map(item => item.item)
        })
        navigate('/drinks')
    }





    return (
        <main className="NewDrinkPage">
            <CategoryList
                categories={categoriesRef.current}
                activeCat={activeCat}
                setActiveCat={setActiveCat}
            />
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
                handleAddToDrink={handleAddToDrink}
                addedItems={addedItems}
            />

            <Customize
                drink={cart}
                handleRemoveDrink={handleRemoveDrink}
                handleCreate={handleCreate}
                drinkName={drinkName}
                setDrinkName={setDrinkName}
                items={menuItems}
            />


            {drink && (
                <DrinkDetail
                    editable={true}
                    drink={drink}
                    handleRemoveDrink={handleRemoveDrink}
                    handleCreate={handleCreate}
                    drinkName={drink.name}
                    setDrinkName={handleChangeDrinkName}
                    items={menuItems}
                />
            )}
        </main>
    );
}