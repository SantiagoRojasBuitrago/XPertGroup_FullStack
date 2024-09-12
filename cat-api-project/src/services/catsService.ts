import axios from 'axios';

const API_KEY = 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const getBreeds = async () => {
  console.log("Getting breeds")
  const response = await axios.get(`${BASE_URL}/breeds`);
  return response.data;
};

export const getBreedById = async (breedId: string) => {
  console.log("Searching by Id")
  const response = await axios.get(`${BASE_URL}/breeds/${breedId}`);
  return response.data;
};

export const searchBreeds = async (query: string) => {
  console.log(`searchBreeds called with query: ${query}`);  

  try {
    const response = await axios.get(`${BASE_URL}/breeds/search`, {
      params: { q: query },
      headers: { 'x-api-key': API_KEY }
    });

  

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error searching breeds:', {
        message: error.message,
        response: error.response ? {
          status: error.response.status,
          data: error.response.data
        } : undefined
      });
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};