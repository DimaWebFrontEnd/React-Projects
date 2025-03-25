

const Request = async (url = "https://jsonplaceholder.typicode.com/comments") => {
   try {
      const response = await fetch(url);
      const listItems = await response.json();
      const filtListItems = listItems.filter(x => x.id <= 10);
      console.log(filtListItems);
   }
   catch(err) {
      console.log(err)
   }

  
}



export default Request
