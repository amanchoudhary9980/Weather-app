# Weather App

React app that shows current conditions and a 5-day forecast for your location, or for any city you search.

## Features

- Uses browser geolocation on load, with city search as a fallback
- Current temperature, feels-like, humidity, wind and conditions
- 5-day forecast in 3-hour steps from the OpenWeatherMap API

## Stack

React 18, Tailwind CSS, Material UI, Axios, React Router

## Run it

```bash
npm install
cp .env.example .env   # add your OpenWeatherMap API key
npm start
```

Opens at http://localhost:3000.
