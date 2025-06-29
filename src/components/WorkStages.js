import React from 'react';

const stages = [
  { id: 1, title: 'Консультация', description: 'Обсуждение ваших потребностей и пожеланий.' },
  { id: 2, title: 'Проектирование', description: 'Создание индивидуального проекта дома.' },
  { id: 3, title: 'Строительство', description: 'Реализация проекта с соблюдением сроков.' },
  { id: 4, title: 'Сдача объекта', description: 'Финальная проверка и передача ключей.' },
];

const WorkStages = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Этапы работы</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
              {stage.id}
            </div>
            <h3 className="text-lg font-medium mt-2">{stage.title}</h3>
            <p className="text-gray-600">{stage.description}</p>
            {index < stages.length - 1 && (
              <div className="hidden sm:block h-1 w-20 bg-blue-500 mt-4"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStages; 