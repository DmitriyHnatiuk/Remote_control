import { down, left, mouse, right, up } from "@nut-tree/nut-js";
import { circle } from "./circle.js";
import { screenShot } from "./screen.js";
import { square } from "./square.js";

class Command {
  async mouse_position() {
    try {
      const position = await mouse.getPosition();

      return ` ${position.x}px,${position.y}px`;
    } catch (error) {
      console.error(error);
    }
  }

  async mouse_down(width: string) {
    try {
      await mouse.move(down(Number(width)));

      return `_${width}px`;
    } catch (e) {
      console.error(e);
    }
  }

  async mouse_up(width: string) {
    try {
      await mouse.move(up(Number(width)));

      return `_${width}px`;
    } catch (e) {
      console.error(e);
    }
  }

  async mouse_left(width: string) {
    try {
      await mouse.move(left(Number(width)));

      return `_${width}px`;
    } catch (e) {
      console.error(e);
    }
  }

  async mouse_right(width: string) {
    try {
      await mouse.move(right(Number(width)));

      return `_${width}px`;
    } catch (e) {
      console.error(e);
    }
  }

  async draw_circle(width: string) {
    try {
      await circle(Number(width));

      return `_${width}px`;
    } catch (e) {
      console.error(e);
    }
  }

  async draw_rectangle(width: string, height: string) {
    try {
      await square({ width: Number(width), height: Number(height) });
      return `_${width}_${height}`;
    } catch (e) {
      console.error(e);
    }
  }

  async draw_square(width: string) {
    try {
      await square({ width: Number(width), height: Number(width) });
      return `_${width}`;
    } catch (e) {
      console.error(e);
    }
  }
  //TODO: this functional
  async prnt_scrn() {
    try {
      const result = await screenShot();
      return String(result.data);
    } catch (e) {
      console.error(e);
    }
  }
}

export const commands = new Command();
