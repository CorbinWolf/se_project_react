export const defaultWeatherCards = {
  day: {
    condition: "unknown",
    url: new URL("../assets/day/default.png", import.meta.url).href,
  },
  night: {
    condition: "unknown",
    url: new URL("../assets/night/default.png", import.meta.url).href,
  },
};

export const weatherCards = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/clouds.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "storm",
    url: new URL("../assets/day/thunderstorm.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/fog.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/clouds.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rain.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/thunderstorm.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snow.png", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/fog.png", import.meta.url).href,
  },
];

export const coordinates = {
  latitude: 47.978985,
  longitude: -122.20208,
};

export const apiKey = "1b2bb757b7ed7cb315881fb031d577bb";

export const baseUrl = "http://localhost:3001";
export const headers = {
  "Content-Type": "application/json",
};
export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  "Content-Type": "application/json",
});
