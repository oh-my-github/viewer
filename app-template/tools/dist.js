import copy from './lib/copy';
import task from './lib/task';

import clean from "./clean";
import build from "./build";

import path from "path";

export default task(async function clean() {
  await clean();
  await build();

  let buildDir = "build";
  let generatorTemplateDir = path.join(
    process.cwd(), "../generator-omg-basic/generators/app/templates")

  await copy(buildDir, generatorTemplateDir);
});
