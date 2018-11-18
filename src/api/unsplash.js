import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID a94176a14e9d6792fe8b8d2197cb1d28110672db91b9f600641e01f4b46f8cc7"
  }
});