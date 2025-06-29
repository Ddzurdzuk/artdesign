import React from 'react';

const Contacts = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Контакты</h1>
      <div className="max-w-md mx-auto text-center">
        <p className="text-gray-700 mb-2">Телефон: +7 (999) 123-45-67</p>
        <p className="text-gray-700 mb-2">Email: info@doma.ru</p>
        <p className="text-gray-700 mb-4">Адрес: г. Москва, ул. Примерная, д. 1</p>
        <button className="bg-yellow-400 text-white px-4 py-2 rounded">Связаться с нами</button>
      </div>
    </div>
  );
};

export default Contacts;