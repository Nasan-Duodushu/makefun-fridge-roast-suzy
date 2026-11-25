// One Line, One Laugh: Roast Your Fridge — entry program.
// Writes one fridge roast (1-200 chars, single line) to /output/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

class FridgeRoast {
  private readonly line: string;

  constructor() {
    this.line =
      "My fridge's ice maker sounds like it's chewing gravel, then proudly serves me one cube — like a tip for all its hard work.";
  }

  public validate(): number {
    const chars = Array.from(this.line).length;
    if (chars < 1 || chars > 200) {
      throw new Error(`roast is ${chars} chars, outside the 1-200 gate`);
    }
    if (this.line.includes("\n") || this.line.trim().length === 0) {
      throw new Error("roast must be a single non-empty line");
    }
    if (!this.line.toLowerCase().includes("fridge")) {
      throw new Error("roast must be about the fridge");
    }
    return chars;
  }

  public publish(): void {
    const chars = this.validate();
    if (!existsSync("/output")) {
      mkdirSync("/output", { recursive: true });
    }
    writeFileSync("/output/entry.txt", this.line, "utf8");
    console.log(`wrote ${chars} chars to /output/entry.txt`);
  }
}

new FridgeRoast().publish();
