import React from 'react';

interface Country {
  ccn3: number;
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  capital: string;
}

interface LeftSectionProps {
  countries: Country[];
  addhandler: (country: Country) => void;
}

const LeftSection: React.FC<LeftSectionProps> = ({ countries, addhandler }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {countries.map((country:Country) => (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform " key={country.ccn3}>
          <img
            className='mb-4 w-full h-[180px] p-[30px]'
            src={country.flags.png}
            onClick={() => addhandler(country)}
          />
          <p className='text-xl font-semibold mb-2'>국가명: {country.name.common}</p>
          <p className='text-gray-600'>수도: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftSection;
