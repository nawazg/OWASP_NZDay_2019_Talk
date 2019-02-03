var fileSystem = require('fs');
var remote = require('electron');
console.log('hasRun')
function getFileContents() {
    var contents = fileSystem.readFileSync(
        '/Users/nawaz/Documents/Projects/Some_cool_data_you_need.txt',
        'utf8'
    );
    console.log(contents);
    return remote.app.getFileContents;
};

window.interop = {
    gfc = getFileContents
};