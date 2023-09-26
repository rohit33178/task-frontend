export const API_ENDPOINT = 
    process.env.ENV === 'development'
    ? ""
    : "http://localhost:5000"