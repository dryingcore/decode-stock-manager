import { app } from 'electron';
import path from "path";
import fs from "fs";


const dataPath = path.join(app.getPath('userData'), 'data.json');


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
