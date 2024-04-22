import github from "../Resources/github.png";
import { NavLink } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
const Forecast = ({index,data}) => {

  if (!data) return(
    <>
    <div className="weather-details">
    <div className="spinner">
    <InfinitySpin color="blue"/>
    </div>
    </div>
    </>
  );



function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = date.getMonth();
  const month = monthNames[monthIndex];
  const year = String(date.getFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}


function getNextSevenDays() {
  const today = new Date();
  const nextSevenDays = {};
  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    nextSevenDays[`day${i + 1}`] = formatDate(nextDay);
  }
  return nextSevenDays;
}


const nextSevenDaysObject = getNextSevenDays();

  return (
    <>
      <div className="weather-details">
        <nav>
          <ul>
            <li>
              {" "}
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Today</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/tommorow" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Tommorow</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/3" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{nextSevenDaysObject.day3}</NavLink>
            </li>
            <li>
              <NavLink to="/4" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{nextSevenDaysObject.day4}</NavLink>
            </li>
            <li>
              <NavLink to="/5" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{nextSevenDaysObject.day5}</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to="/6" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{nextSevenDaysObject.day6}</NavLink>
            </li>
          </ul>
        </nav>
        <div className="weather-details-grid">
          <div id="windspeed" className="forecast-data-container">
            <span>Wind Speed</span>
            <span className="forecast-data">{data.list[index].wind.speed} km/h</span>
            <span>Degree</span>
            <span className="forecast-data">{data.list[index].wind.deg}°</span>
          </div>
          <div id="humidity" className="forecast-data-container">
            <span>Humidity</span>
            <span className="forecast-data">{data.list[index].main.humidity}%</span>
          </div>
          <div id="realfeel" className="forecast-data-container">
            <span>Feels Like</span>
            <span className="forecast-data">{data.list[index].main.feels_like}°c</span>
          </div>
          <div id="pressure" className="forecast-data-container">
            {" "}
            <span>Pressure</span>
            <span className="forecast-data">{data.list[index].main.pressure} hPa</span>{" "}
          </div>
          <div id="temperature" className="forecast-data-container">
            {" "}
            <span>Min Temprature</span>
            <span className="forecast-data">{data.list[index].main.temp_min}°c </span>
            <span>Max Temprature</span>
            <span className="forecast-data">{data.list[index].main.temp_max}°c </span>
          </div>
          <div id="sun" className="forecast-data-container">
            <span>Ground Level</span>
            <span className="forecast-data"> {data.list[index].main.grnd_level} </span>
            <span>Sea Level</span>
            <span className="forecast-data"> {data.list[index].main.sea_level} </span>
          </div>
          <div className="forecast-data-container">
            <span>Actual Temprature</span>
            <span className="forecast-data"> {data.list[index].main.temp} </span>
          </div>
          <div className="forecast-data-container">
            <span>Visibility</span>
            <span className="forecast-data"> {data.list[index].visibility}m </span>
          </div>
          <div className="forecast-data-container">
            <span>Wind Gust</span>
            <span className="forecast-data"> {data.list[index].wind.gust}m/s </span>
          </div>

        </div>
        <footer>
          <span className="data-info">
            Data provided by{" "}
            <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
              OpenWeatherMap
            </a>
          </span>
          <a href="https://github.com/amanchoudhary9980" target="_blank" rel="noreferrer">
            <img src={github} alt="github-profile" id="github" />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Forecast;
