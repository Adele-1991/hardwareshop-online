import React, { Component } from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

class Comp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  upClickHandler = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  downClickHandler = () => {
    if (this.state.counter >0){
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
   
  };

  render() { 
    const { name, img, price, available } = this.props;
    const { counter } = this.state;
    return (
      <div className="product-box">
        <div className="product-name">{name}</div>
        <img src={img} alt="harware" className="img-hardware" />
        {available ? <h3>{price}$ {this.state.counter!==0 && `*${counter}= ${counter*price}$` }</h3> : <h3>Not available</h3>}
        <div className="counter-box">
          <FontAwesomeIcon icon={faArrowDown} onClick={this.downClickHandler} />
          <p>{this.state.counter}</p>
          <FontAwesomeIcon icon={faArrowUp} onClick={this.upClickHandler} />
        </div> 
      </div>
    );
  }
}

export default Comp1;
