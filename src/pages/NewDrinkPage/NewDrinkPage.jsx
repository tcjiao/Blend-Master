import React from 'react';
import NewDrinkForm from '../../components/NewDrinkForm/NewDrinkForm';
import DrinkTags from '../../components/DrinkTag/DrinkTag';

export default function NewDrinkPage(drinkData) {
  return (
    <>
      <h1>NewDrinkPage</h1>
      <NewDrinkForm />
      <DrinkTags drinkData={drinkData} />
    </>
  );
}