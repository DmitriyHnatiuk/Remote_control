import { Region, mouse, screen } from "@nut-tree/nut-js";

export const screenShot = async () => {
  const position = await mouse.getPosition();
  const width = 200;
  const height = 200;
  const x = position.x - width / 2;
  const y = position.y - height / 2;

  const region = new Region(x, y, width, height);
  const result = await screen.grabRegion(region);

  return result.data.toString("base64");
};
