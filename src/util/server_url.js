export const SERVER_URL = 
  process.env.NODE_ENV === "production" 
    ? "https://mighty-fjord-51024.herokuapp.com"
    : "http://localhost:3000"