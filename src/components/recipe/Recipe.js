import React from "react"
import "./recipe.css"
import { recipes } from "../../data/data"
import RecipeBox  from "./RecipeBox"
import { useSelector } from 'react-redux';


const Recipe = () => {

  const myFrigoItems = useSelector((state) => state.myfrigo.productList);
  console.log(myFrigoItems)

  // check if product exists in frigo
  const existeInFridge = (id) => {
    for (let index = 0; index < myFrigoItems.length; index++)
    {
      if(myFrigoItems[index].id === id)
      {
        return true;
      }
    }
    return false;
  }

  // check if every ingrediant exists in frigo
  const canCook = (recipe) => {
    console.log(recipe);
    let count = 0;
    for (let index = 0; index < recipe.ingrediants.length; index++) 
    {
      if(existeInFridge(recipe.ingrediants[index]))
      {
        count++;
      }
    }
    return count === recipe.ingrediants.length;
  }

  const filteredRecipes = recipes.filter(recipe => canCook(recipe));

  return (
    <>
      <section className='recipe'>
      <h1>Recipes for your Frigo</h1>
        <div className='container grid3'>
          {
            filteredRecipes.map(recipe => (
              <RecipeBox 
                key={recipe.id} 
                id={recipe.id} 
                recipeImg={recipe.recipeImg} 
                name={recipe.name} 
                desc={recipe.desc}  
              />
            ))
          }
        </div>   
        <h1>All of our recipes</h1>
        <div className='container grid3'>
          {
            recipes.map(recipe => (
              <RecipeBox 
                key={recipe.id} 
                id={recipe.id} 
                recipeImg={recipe.recipeImg} 
                name={recipe.name} 
                desc={recipe.desc}  
              />
            ))
          }
        </div>   
      </section>
    </>
  )
}
export default Recipe;