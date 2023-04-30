import React from 'react';

function RecipeIndex({alphaIndex}) {
    const alpha = ['A', "B", "C", "D", "E", "F", "J", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  return (
    <div className='flex flex-wrap'>
        {
        alpha.map((letter =>(
            
            <div key={letter} onClick={()=>alphaIndex(letter)} className="cursor-pointer flex justify-center rounded-lg items-center h-8 w-8  bg-black text-white mx-3 my-1">
                <h3 >{letter}</h3>
            </div>
        )))
        }
    </div>
  )
}

export default RecipeIndex;