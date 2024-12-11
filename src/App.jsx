
import { useState } from 'react'
import './App.css'
import storeData from './storeData.json';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('Tohoku');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <div className="App">
      <h1>店舗情報</h1>
      <label>
        地域を選択:
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="Tohoku">東北</option>
          <option value="Kanto">関東</option>
          <option value="Kansai">関西</option>
        </select>
      </label>
      <ul>
        {storeData.regions[selectedRegion].map((store, index) => (
          <li key={index}>
            <b>{store.storeName}</b>:
            <div>住所: {store.address}</div>
            <div>電話番号: {store.phoneNumber}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;