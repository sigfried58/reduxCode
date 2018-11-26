import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID dcca6e5b968924bd517259f8e3a64408b4a30dbc3c733930bee8ac75a5b1612b'
  }
});
