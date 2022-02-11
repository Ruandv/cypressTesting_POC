const {
  addMatchImageSnapshotPlugin,
  matchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('after:screenshot', details => {
    return matchImageSnapshotPlugin(details);
  });
};
