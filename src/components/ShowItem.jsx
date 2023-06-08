import React from 'react'

const ShowItem = ({ element, setItems, items,total,setTotal }) => {
  return (
    <>
      <div>item {element.id} </div>
      <button onClick={() => {
        setItems(Object.values(items), element.count = element.count + 1)
        setTotal(total =total +1)
        console.log(element.count)
        console.log(items)
      }}>+</button><div> {element.count}</div>
      <button onClick={() => {
        setItems(Object.values(items), element.count = element.count - 1)
        setTotal(total =total -1)
        console.log(element.count)
        console.log(items)
      }}>-</button>
    </>


  )
}

export default ShowItem
