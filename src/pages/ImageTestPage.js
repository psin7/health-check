import React from 'react';

const ImageTestPage = () => {
  const imagePaths = [
    '/images/physical-health/diabetes_test.svg',
    '/images/physical-health/sleep_apnea_test.svg',
    '/images/physical-health/thyroid_test.svg',
    '/images/physical-health/heart_disease_test.svg'
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Image Test Page</h1>
      <p className="mb-4">This page tests loading the SVG images directly:</p>
      
      <div className="grid grid-cols-2 gap-4">
        {imagePaths.map((path, index) => (
          <div key={index} className="border p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Image {index + 1}: {path}</h2>
            <div className="bg-gray-100 p-2 rounded mb-2">
              <code>{path}</code>
            </div>
            <div className="h-64 border border-gray-300 rounded overflow-hidden">
              <img 
                src={path} 
                alt={`Test image ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTestPage;
