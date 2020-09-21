const fs = require('fs');

exports.getFileSize = function(filename) {
    let stats = fs.statSync(filename);
    let {size} = stats;
    let i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'KB', 'MB', 'GB', 'TB'][i];
}

