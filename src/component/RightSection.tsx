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

interface RightSectionProps {
  favoriteCountries: Country[];
  deletehandler: (country: Country) => void;
}

const RightSection: React.FC<RightSectionProps> = ({ favoriteCountries, deletehandler }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {favoriteCountries.map((country:Country) => (
        <div className=" p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform bg-green-100 border border-green-500 " key={country.ccn3}>
          <img
            className='mb-4 w-full h-[180px] p-[30px]'
            src={country.flags.png}
            onClick={() => deletehandler(country)}
          />
          <p className='text-xl font-semibold mb-2'>국가명: {country.name.common}</p>
          <p className='text-gray-600'>수도: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
