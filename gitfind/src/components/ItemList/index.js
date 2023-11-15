// src/components/ItemList/index.jsx
import React from 'react';
import "./styles.css";

function ItemList({ title, items }) {
  return (
    <div>
      <h4 className="list-title">{title}</h4>
      {items.map(item => (
        <div key={item.id} className="item-list">
          <strong>{item.name}</strong>
          <p>{item.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export { ItemList };
