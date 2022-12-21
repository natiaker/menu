import React from 'react'

const Categories = ({ categories, handleFilter }) => {
    return(
        <div className="button-container mb-16 text-[#c59d5f] flex justify-center ">
            {categories.map((category, index) => {
                return <button className='btn' key={index} onClick={()=>handleFilter(category)}>{category}</button>
            })}
        </div>
    );
}

export default Categories