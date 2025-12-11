export const weatherCodeMap = {
  0:  { label: "Clear Sky" },
  1:  { label: "Mainly Clear"},
  2:  { label: "Partly Cloudy"},
  3:  { label: "Overcast"},
  45: { label: "Fog"},
  48: { label: "Depositing Rime Fog"},
  51: { label: "Light Drizzle" },
  53: { label: "Moderate Drizzle"},
  55: { label: "Dense Drizzle"},
  61: { label: "Slight Rain"},
  63: { label: "Moderate Rain"},
  65: { label: "Heavy Rain"},
  71: { label: "Slight Snowfall"},
  73: { label: "Moderate Snowfall"},
  75: { label: "Heavy Snowfall"},
  95: { label: "Thunderstorm"},
  96: { label: "Thunderstorm With Hail"},
  99: { label: "Severe Thunderstorm With Hail"}
};

export const getWeatherIcon=(code)=>{
  if(code === 0) return require('../assests/ClearSky.png');
  else if([1, 2, 3].includes(code)) {
    return require("../assests/PartlyCloudyDay.png");
  } else if([[51, 53, 55, 61, 63, 65].includes(code)]) {
    return require("../assests/Rainy.png")
  }
  return require("../assests/PartlyCloudyDay.png");
};

export const getWeatherDescription=(code)=>{
  return weatherCodeMap[code]?.label;
};

export const getNext24Hours = (hourly) => {
  const nowHour = new Date().getHours();

  const startIndex = hourly.findIndex(h =>
    new Date(h.time).getHours() === nowHour
  );

  return [
    ...hourly.slice(startIndex, startIndex + 24),
    ...hourly.slice(0, Math.max(0, 24 - (hourly.length - startIndex)))
  ];
};

export const convertTemp = (tempC, unit) => {
  if(!tempC) return null;
  if (unit === "F") return (tempC)*9/5+32;
  return tempC;
};

export const convertWind = (speedKmh, unit) => {
  if(!speedKmh) return null;
  if (unit === "mph") return speedKmh/1.609;
  return speedKmh;
};


