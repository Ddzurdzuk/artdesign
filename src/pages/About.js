import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">О нас</h1>
      <p className="text-gray-700 mb-4">Мы специализируемся на проектировании и строительстве современных домов. Наша цель — создать комфортное пространство для вашей семьи.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Наша миссия</h2>
          <p className="text-gray-600">Предоставлять качественные проекты с учетом ваших потребностей.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Наша команда</h2>
          <p className="text-gray-600">Опытные архитекторы и строители с более чем 10 лет опыта.</p>
        </div>
      </div>
    </div>
  );
};

export default About;