import React, { useState } from 'react'
import ShowItem from './ShowItem';
import Test from './Test';



const AddingItems = () => {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  const[total,setTotal] = useState(0)
  return (
    <>
      <div>
        <div>
          <button onClick={() => {
            setItems(current => [...current, { id: count + 1, count: 0 }])
            setCount(count + 1)
            console.log(items)
          }
          }>Add</button>
          
        </div>
        {Object.values(items).map((element, index) =>
          <ShowItem key={index} element={element} setItems={setItems} items ={items} total={total} setTotal={setTotal}/>
        )}
        <div>{"total===>"}{total}</div>
      </div>
    </>

  )
}

export default AddingItems
