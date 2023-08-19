export default function DrinkTags(drinkData){
    return (
        <>
            <h1>Tags</h1>
          {/* {drinkData.map((drink) => (
            <div key={drink.name}>
              {drink.name}:
              {drink.ingredients.map((ingredient) => (
                <div key={ingredient.ingredient}>
                  {ingredient.ingredient}: {ingredient.tags.join(', ')}
                </div>
              ))}
            </div>
          ))} */}
        </>
      );
}