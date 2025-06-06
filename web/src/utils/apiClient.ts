import ky from 'ky';

const API_BASE_URL = 'https://api.example.com';

export const apiClient = ky.create({
  prefixUrl: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});