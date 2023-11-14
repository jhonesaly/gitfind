import React from 'react';
import './styles.css';

const SearchButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Buscar</button>
    );
  }
  
  export { SearchButton };