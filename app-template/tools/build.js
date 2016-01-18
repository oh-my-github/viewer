import task from './lib/task';

import copy   from "./copy";
import clean  from "./clean";
import bundle from "./bundle";
import render from "./render";

export default task(async function build() {
  await clean();
  await copy();
  await bundle();
  await render();
});
