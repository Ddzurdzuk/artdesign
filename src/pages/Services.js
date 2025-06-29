import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: 'Проектирование', description: 'Индивидуальные проекты домов под ключ.' },
    { id: 2, title: 'Строительство', description: 'Качественное строительство с гарантией.' },
    { id: 3, title: 'Ремонт', description: 'Внутренние и внешние ремонтные работы.' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-100 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;