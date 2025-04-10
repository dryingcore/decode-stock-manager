import path from "path";
import fs from "fs";

const dataPath = path.join(__dirname, "data.json");

export function saveData(data: any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
}

export function loadData() {
  if (fs.existsSync(dataPath)) {
    return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  } else {
    return {};
  }
}
