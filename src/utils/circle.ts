import { mouse } from "@nut-tree/nut-js";

export const circle = async (radius: number) => {
  try {
    const position = await mouse.getPosition();

    const points = [];
    const centerX = position.x;
    const centerY = position.y;

    for (let i = 0, slide = 300; i < slide; i++) {
      const angle = (i / slide) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      points.push({ x, y });
    }

    Promise.all([mouse.setPosition(points[0]), mouse.drag(points)]);
  } catch (e) {
    console.error(e);
  }
};
