import axios from 'axios';

const apiKey = 'wbD1lFBCc3Aa77TKN4rbKXrhSZIa2Rqn48_IfhsccIo';
const baseUrl = 'https://api.unsplash.com';

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/photos/?per_page=8&query=${query}&page=${page}&client_id=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.log('Error fetching images:', error);
    throw error;
  }
};
