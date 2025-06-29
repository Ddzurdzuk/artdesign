import React from 'react';
import { useParams } from 'react-router-dom';
import houses from '../data/houses.json';

const ProjectDetail = () => {
  const { id } = useParams();
  const house = houses.find((h) => h.id === parseInt(id));

  if (!house) return <div>Проект не найден</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={house.image} alt={house.name} className="w-full h-96 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{house.name}</h1>
          <p className="text-green-600 mb-2">Площадь: {house.area} м²</p>
          <p className="text-green-600 mb-2">Этажей: {house.floors}</p>
          <p className="text-green-600 mb-2">Спален: {house.bedrooms}</p>
          <p className="text-green-600 mb-4">Стоимость: {house.price.toLocaleString()} руб.</p>
          <p className="text-gray-700 mb-6">{house.description}</p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-white px-4 py-2 rounded">Рассчитать стоимость</button>
            <button className="bg-transparent border border-yellow-400 text-yellow-400 px-4 py-2 rounded">
              Понравилась дом? Рассчитайте стоимость в калькуляторе
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;