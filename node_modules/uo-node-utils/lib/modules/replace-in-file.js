var fs = require('fs');

/* Utils.replaceInFile();
 * Read a file, update it's content */

module.exports = function (filePath, strToReplace, newContent) {
  if (!this.exist(filePath))
    throw new Error('File does not exist ' + filePath);

  newContent = this.read.file(filePath).replace(strToReplace, newContent);

  fs.writeFileSync(filePath, newContent);
  this.log('Updated file: ' + filePath);

  return this;
};
