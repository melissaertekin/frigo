import React from "react"
import "./recipe.css"
import { recipes } from "../../data/data"
import RecipeBox  from "./RecipeBox"
import { Link } from "react-router-dom"

const Recipe = () => {
  return (
    <>
      <section className='recipe'>
        <div className='container grid3'>
     
          {recipes.map((item) => (
            <RecipeBox key={item.id} id={item.id} recipeImg={item.recipeImg} name={item.name} desc={item.desc}  />
          ))}
     
        </div>
      </section>
    </>
  )

}
export default Recipe;