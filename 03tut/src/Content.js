import ListItems from "./ListItems"

const Content = ({items}) => {
   console.log(items, "CONTENT")
  return (
      <ul>
         {/* {items.map((item) => (
                  <ListItems
                     key={item.id}
                     item={item}
               
                  />
               ))} */}
         {items.map((item) => (
            <ListItems 
               key={item.id}
               item={JSON.stringify(item)}
            />
         ))}
      </ul>
      
  )
}

export default Content
