import { Button, Flex, Tooltip } from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/?city=${city}`);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]); // Fetch data whenever the city changes
  return (
    <>
      <div>
        <Flex gap='middle' align='center' justify='center'>
          <div>
            <label>Search by city</label>
            <Input placeholder="Enter city name" value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <Tooltip title="search">
            <Button onClick={fetchData} type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </Flex>

        {weatherData && (
          <div>
            <h2>Weather Data for {city}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
          </div>
        )}
      </div>
    </>
  )
}

export default App
