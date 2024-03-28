import React, { Component } from "react";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import f1 from "./images/SSD.jpg";
import f2 from "./images/Mouse.jpg";
import f3 from "./images/keyboard.jpg";
import f4 from "./images/thufeil-m-Nk2vzMpIi0k-unsplash.jpg";
import f5 from "./images/glen-carrie-NZY3eCGZZEU-unsplash.jpg";
import f6 from "./images/liam-briese-lYxQ5F9xBDM-unsplash.jpg";
import f7 from "./images/rebekah-yip-wMT0oiL5XjA-unsplash.jpg";
import f8 from "./images/irving-marca-1TyF7oE5Vio-unsplash.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "SSD", price: 32, img: f1, available: true },
        { id: 2, name: "Mouse", price: 35, img: f2, available: true },
        { id: 3, name: "keyboard", price: 40, img: f3, available: true },
        { id: 4, name: "fan", price: 28, img: f4, available: false },
        { id: 5, name: "Ram", price: 32, img: f5, available: true },
        { id: 6, name: "liam", price: 35, img: f6, available: true },
        { id: 7, name: "Game-mouse", price: 32, img: f7, available: false },
        { id: 8, name: "RAM", price: 35, img: f8, available: true },
      ],
    };
  }
  render() {
    return (
      <>
        <Comp2 />
        {this.state.products.map((product) => (
          <Comp1
            key={product.id}
            name={product.name}
            img={product.img}
            price={product.price}
            available={product.available}
          />
        ))}
      </>
    );
  }
}
export default App;
