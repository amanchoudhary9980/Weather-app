const Weather = ({ data }) => {
  if (!data) return null;
  const icon = data.weather[0].icon;
  const unixseconds = data.dt * 1000;

  const curdate = new Date(null);
  curdate.setTime(unixseconds);
  const optionsfordate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const optionsfortime = {
    weekday: "long", hour: "numeric", minute:"numeric", 
  };
  const normalDate = curdate.toLocaleDateString("en-ZA", optionsfordate);
  const normalTime = curdate.toLocaleTimeString("en-ZA", optionsfortime);
  console.log(curdate)
  return (
    <>
      <div className="weather-1">
        <div className="weather-icon">
          <img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} />
        </div>
        <div className="weather-temp"> {Math.round(data.main.temp)}°c</div>
        <div className="weather-type"> {data.weather[0].main} </div>
      </div>
      <div className="weather-2">
        <div className="weather-time">
          <span className="date">{normalDate}</span>
          <span className="time">{normalTime}</span>
        </div>
        <div className="weather-location"> {data.name}</div>
      </div>
    </>
  );
};

export default Weather;
