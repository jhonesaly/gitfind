import React from 'react';
import "./styles.css";

function ItemList({ title, items }) {
  return (
    <div className="item-list">
      <h4 className="list-title">{title}</h4>
      {items.map(item => (
        <div key={item.id} className="item">
          <hr />
          <strong>{item.name}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export { ItemList };
