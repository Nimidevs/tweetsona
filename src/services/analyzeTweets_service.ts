import { tweetSonaApi } from "../api/axios_instance";

export const analyzeTweets = async () => {
  try {
    const response = await tweetSonaApi.get(`/analyze/tweets`);
    console.log(response)
    return response.data.data;
  } catch (error) {
    console.log('Error details:', error.toJSON ? error.toJSON() : error);
    throw new Error('error analyzing Tweets')
  }
};
