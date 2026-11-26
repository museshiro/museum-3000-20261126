import { mkdirSync, writeFileSync } from "node:fs";

const partA = "This side up: a directional prayer for cargo, ";
const partB = "instructing handlers to keep the object's soul pointed toward heaven.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
