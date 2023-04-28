import React, { useEffect, useState } from "react";
import "./style.css";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=A");
    const [item, setItem] = useState();
    const [show,setShow] = useState(false);
    const [search,setSearch] = useState("");

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals);
                setItem(data.meals);
                setShow(true);
            })
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) =>{
        if(evt.key==="Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }


    return (
        <>
            <div className="main text-center min-h-screen">
                <div className="heading">
                    <h1 className="text-5xl font-bold mb-2 tracking-wide py-3 px-5 rounded-xl mt-5 text-white bg-black inline-block">Search Your Food Recipe</h1>
                    <h4 className="text-white text-xl">You can search a food you want to see recipe!</h4>
                </div>
                <div className="searchBox">
                    <input onChange={ e => setSearch(e.target.value)}
                    onKeyPress={searchRecipe}
                     placeholder="Search a meal.."
                     type="search"
                       className="placeholder:text-slate-400  px-3  rounded-md w-72 h-8 mt-5 outline-none" />
                </div>
                <div className="max-w-[80%] w-[100%] mx-auto mt-12">
                    
                    {
                        show ? <MealItem data={item}/> : "Not Found!"
                    }
                </div>
                <div className="letters-container flex justify-center my-5">
                    <RecipeIndex alphaIndex = {(alpha)=>setIndex(alpha)} />
                </div>
            </div>
        </>
    )
}

export default Meal;