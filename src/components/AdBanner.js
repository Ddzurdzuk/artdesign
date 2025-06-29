import React from 'react';

const AdBanner = () => {
  const ads = [
    { id: 1, image: '/images/ad1.jpg', text: 'Скидка 10% на проекты домов!' },
    { id: 2, image: '/images/ad2.jpg', text: 'Бесплатная консультация!' },
  ];

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Спецпредложения</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ads.map((ad) => (
          <div key={ad.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img src={ad.image} alt={`Реклама ${ad.id}`} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <p className="text-lg font-medium">{ad.text}</p>
              <button className="mt-2 bg-yellow-400 text-white px-4 py-2 rounded">Узнать больше</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdBanner;