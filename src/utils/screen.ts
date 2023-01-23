import { screen } from "@nut-tree/nut-js";

export const screenShot = async () => {
  const result = await screen.grab();
  return result;
};
