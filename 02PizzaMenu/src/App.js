import './App.css';
import pizza1img from './pizzas/focaccia.jpg'
import pizza2img from './pizzas/funghi.jpg'
import pizza3img from './pizzas/margherita.jpg'
import pizza4img from './pizzas/prosciutto.jpg'
import pizza5img from './pizzas/salamino.jpg'
import pizza6img from './pizzas/spinaci.jpg'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: pizza1img,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: pizza2img,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: pizza3img,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: pizza4img,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: pizza5img,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: pizza6img,
    soldOut: false,
  },
];


function App() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
}



function Menu(){

  const pizzas = pizzaData;

  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzas && <ul className='pizzas'>
      {pizzas.map((pizza) => (
        <Pizza pizzaObj = {pizza} key={pizza.name} />
      ))}
     </ul>}
     
     <Footer/>

    </main>
  )
}
function Pizza(props){
  return(
    <li className='pizza' >
      <img src={props.pizzaObj.photoName} alt="" />
      <div>
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price}</span>
      </div>
      
    </li>
  )
}

function Footer(){
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour;


return(
<footer className='footer'>
{isOpen && (
  <div className='order' >
  <p>We're open until {closeHour}:00 Come visit us or order online.</p> 
  <button className='btn'>Order</button>
  </div>
  )}
</footer>
)
}

export default App;


