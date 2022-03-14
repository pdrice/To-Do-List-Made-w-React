import React, { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import Heading from "./Heading";
import AboutApp from "./Navigation/AboutApp";
import AboutLink from "./Navigation/AboutLink";
function App() {
 
  const [items, setItems] = useState([]);

  

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
   
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    
    <div className="container">
      <Router>
      <AboutLink/>
      <Heading/>
      
      <Routes>

      <Route exact path="/" element={
        <>
           <InputArea 
      adds={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
        
       
      </div>
        </>
      }
      >
      
     
      
      </Route>
      
      <Route path="/about" element={<AboutApp/>}/>
      
      </Routes>
      
      </Router>
    </div>
    
  );
}

export default App;
