import Header from "./Header";
import Content from "./Content";
/* import Request from "./Request"; */
import {useState, useEffect} from "react"


function App() {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

  const [items, setItems] = useState([])

  const request = async (url) => {
    try {
        const response = await fetch(url);
        const listItems = await response.json();
        const filtListItems = listItems.filter(x => x.id <= 10);
        const strFiltListItems = JSON.stringify(filtListItems)
        setItems(filtListItems);
       // console.log(strFiltListItems);
    }
    catch(err) {
       console.log(err)
    }
 
   
 }

  return (
    <section className="App">
      <Header 
        USERS_URL= {USERS_URL}
        request={request}

      />
      <main>
        <Content 
          items={items}
          
        />
      
      </main>
    </section>
  );
}

export default App;
