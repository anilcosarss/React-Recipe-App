import React from 'react';
import { useNavigate } from 'react-router-dom';


function MealItem({ data }) {
    let navigate = useNavigate();

    return (
        <div className='flex flex-wrap justify-center gap-5'>
            {
                (!data) ? "Not found!" : data.map(item => (
                    <div key={item.idMeal} 
                    onClick={() => {navigate(`/${item.idMeal}`)}}
                    className=" flex flex-col justify-center items-center rounded-lg w-[90%] md:w-[45%] lg:w-[30%] xl:w-[22%] bg-black text-white">
                        <img className='max-w-[80%] rounded-lg py-5 ' src={item.strMealThumb} alt="" />
                        <h3 className='pb-3 text-xl'>{item.strMeal}</h3>
                    </div>
                ))
            }

        </div>
    )
}

export default MealItem;