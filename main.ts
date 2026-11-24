import * as fs from "node:fs";

const haiku =
  "Cursor blinks at three\n" +
  "the log line scrolls past a bug\n" +
  "Turns out, the bug's me\n";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", haiku, "utf8");
