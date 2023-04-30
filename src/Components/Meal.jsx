import React, { useEffect, useState } from "react";
import "./style.css";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";

const Meal = () => {
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=A");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const [categoriesUrl,setCategoriesUrl] = useState();
    const [showDiv, setShowDiv] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals);
                setShow(true);
            })
    }, [url])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(data => data.json())
            .then(res => {
                setCategories(res.categories)
                console.log(res.categories)
            })
    },[])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesUrl}`)
            .then(data => data.json())
            .then(res => {
                console.log(res)
                setItem(res.meals);


            })
    },[categoriesUrl])

    const setCategoryUrl = (category) => {
        setCategoriesUrl(category.strCategory);
        setShowDiv(false)
    };

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if (evt.key === "Enter") {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    
  const toggle = () => {
    setShowDiv(!showDiv);
    console.log(showDiv)
  };


    return (
        <>
            <nav className="overflow-auto bg-black fixed overflow-auto z-2 w-[100%] opacity-80 h-20 overflow-visible ">
                <ul className="px-5 pt-2 inline-block">
                    <li onClick={toggle} className="text-white text-2xl bg-black inline-block ">Categories</li>
                    {
                        categories.map(category => (
                            <li key={category.idCategory} onClick={() => setCategoryUrl(category)}  className={`text-white  ${showDiv ? "flex" : "hidden" } `}>{category.strCategory}</li>
                        ))

                    }

                </ul>
            </nav>
            <div className="main text-center min-h-screen pt-20">
                <div className="heading">
                    <h1 className="md:text-5xl text-2xl font-bold mb-2 tracking-wide py-3 px-5 rounded-xl mt-5 text-white bg-black inline-block">Search Your Food Recipe</h1>
                    <h4 className="text-white text-xl">You can search a food you want to see recipe!</h4>
                </div>
                <div className="searchBox">
                    <input onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchRecipe}
                        placeholder="Search a meal.."
                        type="search"
                        className="placeholder:text-slate-400  px-3  rounded-md w-72 h-8 mt-5 outline-none" />
                </div>
                <div className="max-w-[80%] w-[100%] mx-auto mt-12">

                    {
                        show ? <MealItem data={item} /> : "Not Found!"
                    }
                </div>
                <div className="letters-container flex justify-center my-5">
                    <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
                </div>
            </div>
        </>
    )
}

export default Meal;