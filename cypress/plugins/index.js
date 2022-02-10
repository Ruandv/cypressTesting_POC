const fs = require('fs');
const pathModule = require('path');
const {
  addMatchImageSnapshotPlugin,
  matchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  // there can only be one `on('after:screenshot`), which is being used by matchImageSnapshotPlugin
  // tapping into the event and then returning the expected function
  on('after:screenshot', details => {
    const { path } = details;
    // Preserve a copy of the actual screenshot which is used by matchImageSnapshotPlugin
    // The (failed) screen is already output, so can skip that
    if (!path.includes('(failed)')) {
      let newPath = path.replace(
        `cypress${pathModule.sep}screenshots`,
        `cypress${pathModule.sep}snapshots`
      );
      fs.copyFileSync(path, newPath.replace('.png', '-actual.snap.png'));
    }
    return matchImageSnapshotPlugin(details);
  });
};
