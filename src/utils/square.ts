import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const _square = async (width: number, height: number) => {
  await mouse.move(up(height));
  await mouse.move(left(width));
  await mouse.move(down(height));
  await mouse.move(right(width));
};

export const square = async ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  const position = await mouse.getPosition();
  await mouse.setPosition({
    x: position.x + width / 2,
    y: position.y + height / 2,
  });

  await mouse.pressButton(0);
  await _square(width, height);
  await mouse.releaseButton(0);
};
