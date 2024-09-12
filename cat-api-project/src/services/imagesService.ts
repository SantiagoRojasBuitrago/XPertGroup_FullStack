import axios from 'axios';

const API_KEY = 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const getImagesByBreedId = async (breedId: string) => {
  const response = await axios.get(`${BASE_URL}/images/search`, {
    headers: { 'x-api-key': API_KEY },
    params: { breed_id: breedId }
  });
  return response.data;
};
