import React from 'react';
import "./styles.css";
import image from "../../assets/background.png";

const Background = () => {
  return (
    <img src={image} className="background" alt="imagem de fundo"/>
  )
}

export { Background };