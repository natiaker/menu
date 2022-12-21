import React, { useState } from "react";
import Categories from "./Categories";
import items from './data';
import Item from "./Item";
const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const handleFilter = (category) => {
    if(category === 'all') return setMenu(items);
    const newMenu = items.filter((item) => item.category === category);
    return setMenu(newMenu);
  }

  return (
    <main className="bg-[#f1f5f8] flex flex-col justify-center items-center min-h-screen py-20	px-7">
      <div className="title mb-8">
        <h2 className="mb-3 text-4xl font-bold text-center tracking-widest">Our Menu</h2>
        <div className="underline w-20 h-1.5	bg-[#c59d5f] mx-auto"></div>
      </div>
      <Categories categories={categories} handleFilter={handleFilter}/>
      <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-2  gap-y-12 gap-x-8">
        {menu.map((item)=>{
          return(
            <Item {...item} key={item.id}/>
          );
        })}
      </div>
    </main>
  );
}

export default App;
