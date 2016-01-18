import task from './lib/task';

export default task(async function build() {
  await require('./clean')();
  await require('./copy')();
  await require('./bundle')();
  await require('./render')();
});
