const gridSize = 500;
const gridCount = 50; // No. of squares in each direction
const squareSize = gridSize / gridCount;
const fetchInterval = 1000;
const refreshInterval = 33;
const turnDuration = refreshInterval * 8;
const animationOverhead = 200;


Number.prototype.round = function(places) { // eslint-disable-line
    return +(Math.round(`${this}e+${places}e-${places}`));
  }
  
  export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  export const wait = (t) => new Promise((res) => {
    setTimeout(() => {
      res();
    }, t);
  });
  
  const baseUrl ='http://localhost:5500'
   
  export const api = {};
  api.get = async endpoint => {
    const res = await fetch(`${baseUrl}${endpoint}`);
    if (res.json) return await res.json();
    return res;
  };
  export const config = {
  gridSize,
  gridCount,
  squareSize,
  fetchInterval,
  refreshInterval,
  turnDuration,
  animationOverhead,
};

