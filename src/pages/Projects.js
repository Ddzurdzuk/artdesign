import React, { useState } from 'react';
import houses from '../data/houses.json';

const Projects = () => {
  const [filters, setFilters] = useState({
    floors: '',
    garage: '',
    bedrooms: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredHouses = houses.filter((house) => {
    return (
      (filters.floors === '' || house.floors === parseInt(filters.floors)) &&
      (filters.garage === '' || house.garage === (filters.garage === 'true')) &&
      (filters.bedrooms === '' || house.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Проекты домов</h1>
      
      {/* Фильтры */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <select
          name="floors"
          value={filters.floors}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Все этажи</option>
          <option value="1">1 этаж</option>
          <option value="2">2 этажа</option>
        </select>
        <select
          name="garage"
          value={filters.garage}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Гараж</option>
          <option value="true">С гаражом</option>
          <option value="false">Без гаража</option>
        </select>
        <select
          name="bedrooms"
          value={filters.bedrooms}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="">Все спальни</option>
          <option value="2">2 спальни</option>
          <option value="3">3 спальни</option>
          <option value="4">4 спальни</option>
          <option value="5">5 спален</option>
        </select>
      </div>

      {/* Карточки проектов */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <div key={house.id} className="border rounded-lg shadow-lg p-4">
            <img src={house.image} alt={house.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-4">{house.name}</h2>
            <p className="text-gray-600">{house.description}</p>
            <p><strong>Площадь:</strong> {house.area} м²</p>
            <p><strong>Этажей:</strong> {house.floors}</p>
            <p><strong>Спален:</strong> {house.bedrooms}</p>
            <p><strong>Гараж:</strong> {house.garage ? 'Есть' : 'Нет'}</p>
            <p><strong>Цена:</strong> {house.price.toLocaleString()} руб.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;