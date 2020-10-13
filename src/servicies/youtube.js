import axios from 'axios';

const baseUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const getVideos = async (query) => {
  const data = await axios.get(`${baseUrl}&q=${query}`);
  return data.data;
};

export const getNextPage = async (pageToken) => {
  const nextPageUrl = `${baseUrl}&pageToken=${pageToken}`;
  const data = await axios.get(nextPageUrl);
  return data.data;
};
