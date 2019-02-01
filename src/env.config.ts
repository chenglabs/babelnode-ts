import dotenv from "dotenv";
import fs from "fs";

let result: dotenv.DotenvConfigOutput = {};
const configFile = `config/${process.env.NODE_ENV || ""}.env`;
if (fs.existsSync(configFile)) {
  result = dotenv.config({ path: configFile });
  if (result.error) {
    throw result.error;
  }
}

export default { result };
