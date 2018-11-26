import axios from 'axios';

const KEY = 'AIzaSyAqPmay6MFYEv8RnZ9Xdc_f1yV80OrnEmQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
