import React from 'react';
import './App.css'; 

const comboData = [
  {
    id: 1,
    title: "Курбан хайит комбо 1",
    description: "Пепперони 35 см (2 шт) + 8 синнамончиков в подарок",
    oldPrice: "203,000",
    price: "188,000",
    discount: "7%",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400"
  },
  {
    id: 2,
    title: "Курбан хайит комбо 2",
    description: "Пепперони 35 см + 4 синнамончика в подарок",
    oldPrice: "106,000",
    price: "94,000",
    discount: "11%",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=400"
  },
  {
    id: 3,
    title: "Донарная двойка",
    description: "Любые две донар пиццы (25 см) на выбор: донар, куриный донар или чеддер донар",
    oldPrice: "138,000",
    price: "115,000",
    discount: "17%",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400"
  },
  {
    id: 4,
    title: "Ишта-Ха! бокс",
    description: "Пицца (20 см) на выбор, хрустящая картошка фри и 3 аппетитных стрипса. Идеально для 1-2 человек!",
    oldPrice: null,
    price: "49,000",
    discount: null,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=400"
  }
];

export default function App() {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <h2 className="category-title">Комбо</h2>
        
        <div className="combo-grid">
          {comboData.map((item) => (
            <div key={item.id} className="pizza-card">
              <div className="card-top">
                <div className="image-container">
                  <img src={item.image} alt={item.title} className="pizza-image" />
                </div>
                <h3 className="pizza-title">{item.title}</h3>
                <p className="pizza-desc">{item.description}</p>
              </div>

              <div className="card-bottom">
                <div className="price-tags">
                  {item.oldPrice && <span className="old-price">{item.oldPrice} сум</span>}
                  {item.discount && <span className="discount-badge">-{item.discount}</span>}
                </div>
                <div className="action-row">
                  <span className="current-price">{item.price} сум</span>
                  <button className="select-btn">Выбрать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}