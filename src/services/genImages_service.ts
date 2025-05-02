import { tweetSonaApi } from "../api/axios_instance";

export const genImage = async (prompt: string) => {
  try {
    const response = await tweetSonaApi.post(``, {
      prompt,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
