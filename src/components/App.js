import React from 'react';
import './style.css';
import Header from './Header';
import FoodForm from './FoodForm';
import FoodCard from './FoodCard';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodForm />
      <FoodCard />
    </div>
  );
}

export default App;
