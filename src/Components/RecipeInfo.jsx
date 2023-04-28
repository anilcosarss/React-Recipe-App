import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


function RecipeInfo() {
    const [item, setItem] = useState();
    const { MealId } = useParams();

    if (MealId !== "") {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals[0]);
            })
    }


    return (
        <div >
            {
                (!item) ? "" : (<>
                    <div className="content flex flex-col items-center text-center text-white pt-5 ps-5">
                        <h1 className='text-3xl font-bold bg-black px-3 py-2 mb-5 rounded-xl'>{item.strMeal}</h1>
                        <img className=' hover:transition-all transition-all hover:max-w-[31%] max-w-[30%] border border-black rounded-[50px] ' src={item.strMealThumb} alt="" />
                        <div className="inner-content mb-5 text-center">
                            <h2 className='bg-black text-2xl px-2 mt-2 mx-auto rounded-xl'>{item.strArea}</h2>
                            <h3 className='bg-black px-2 mt-2 mx-auto rounded-xl'>{item.strCategory}</h3>

                        </div>
                    </div>
                    <div className="recipe-details text-white flex mx-auto mb-12 w-screen max-w-[80%] gap-12">
                        <div className="ingredients bg-black w-1/2 mx-auto d-flex p-5 rounded-xl">
                            <h2 className='text-3xl font-bold border-b pb-3 inline'>Ingredients</h2>
                            <div className="mt-5">
                                <h4>{item.strIngredient1} : {item.strMeasure1}</h4>
                                <h4>{item.strIngredient2} : {item.strMeasure2}</h4>
                                <h4>{item.strIngredient3} : {item.strMeasure3}</h4>
                                <h4>{item.strIngredient4} : {item.strMeasure4}</h4>
                                <h4>{item.strIngredient5} : {item.strMeasure5}</h4>
                                <h4>{item.strIngredient6} : {item.strMeasure6}</h4>
                                <h4>{item.strIngredient7} : {item.strMeasure7}</h4>
                                <h4>{item.strIngredient8} : {item.strMeasure8}</h4>
                            </div>

                        </div>
                        <div className="instructions w-1/2">
                            <h2 className='text-3xl mb-3 border-b pb-3 font-bold'>Instructions</h2>
                            <h4>{item.strInstructions}</h4>
                        </div>

                    </div>
                   
                </>


                )
            }
        </div>
    )
}

export default RecipeInfo;