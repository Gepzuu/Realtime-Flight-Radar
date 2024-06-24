export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: '4.225384', 
    bl_lng: '116.978812', 
    tr_lat: '21.896103', 
    tr_lng: '126.604984', 
    limit: '100'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  },
};

export const headerOpt = {
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  },
};
