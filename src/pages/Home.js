import React from 'react';
import houses from '../data/houses.json';
import WorkStages from '../components/WorkStages';
import AdBanner from '..components/AdBanner';

const Home = () => {
  const featuredHouses = houses.slice(0, 3);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Добро пожаловать</h1>
      
      <h2 className="text-2xl font-semibold mb-4">Популярные проекты</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {featuredHouses.map((house) => (
          <div key={house.id} className="border rounded-lg shadow-lg p-4">
            <img src={house.image} alt={house.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-4">{house.name}</h2>
            <p className="text-gray-600">{house.description}</p>
            <p><strong>Площадь:</strong> {house.area} м²</p>
            <p><strong>Цена:</strong> {house.price.toLocaleString()} руб.</p>
          </div>
        ))}
      </div>

      <AdBanner />

      <WorkStages />
    </div>
  );
};

export default Home;