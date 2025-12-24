import React, { useEffect, useState } from 'react'




const Shop = () => {
    const [recipes, setRecipes] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const data = await res.json();
      console.log(data)
      setRecipes(data.recipes);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (

    <div>
      <h1>Recipes</h1>
    
    <div className="recipe-container">
      
      {recipes.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img className="recipe-img" src={recipe.image} alt={recipe.name}  />
          <h3 className="recipe-title">{recipe.name}</h3>
          <span className="recipe-rating">⭐ {recipe.rating}</span>
          
          
        </div>
      ))}
    </div>
    </div>
  )
}

export default Shop