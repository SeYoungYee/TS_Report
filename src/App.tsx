import { useState, useEffect } from 'react';
import axios from 'axios';
import LeftSection from './component/LeftSection';
import RightSection from './component/RightSection';
import "./App.css";

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

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [favoriteCountries, setFavoriteCountries] = useState<Country[]>([]);

  // 왼쪽에서 오른쪽으로
  const addHandler = (country: Country) => {
    setFavoriteCountries([...favoriteCountries, country]);
    setCountries(countries.filter((prev) => prev.ccn3 !== country.ccn3));
  };

  // 오른쪽에서 왼쪽으로
  const deleteHandler = (country: Country) => {
    setCountries([...countries, country]);
    setFavoriteCountries(favoriteCountries.filter((prev) => prev.ccn3 !== country.ccn3));
  };

  // API 호출
  useEffect(() => {
    const fetchCountries = async (): Promise<any> => {
      const response = await axios.get<Country[]>("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    };
    fetchCountries();
  }, []);

  return (
    <div>
      <div className="text-3xl text-center mb-6">나라 분류 사이트</div>

      <div className="grid grid-cols-2 gap-4">
        {/* 왼쪽 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Countries</h2>
          <LeftSection countries={countries} addhandler={addHandler} />
        </div>

        {/* 오른쪽 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Favorite Countries</h2>
          <RightSection favoriteCountries={favoriteCountries} deletehandler={deleteHandler} />
        </div>

      </div>
    </div>
  );
};

export default App;
