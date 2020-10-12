import axios from 'axios';

const baseUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet&chart=mostPopular&regionCode=RU&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const getTrends = async () => {
  const data = await axios.get(baseUrl);
  return data.data;
};

export const getNextPage = async (pageToken) => {
  const nextPageUrl = `${baseUrl}&pageToken=${pageToken}`;
  const data = await axios.get(nextPageUrl);
  return data.data;
};
