const { remote } = require('electron');
const fileSystem = require('fs');
const path = require('path');

require('electron-compile/lib/initialize-renderer').initializeRendererProcess(remote.getGlobal('globalCompilerHost').readOnlyMode);

window.interopAPI = {
    getApprovedContent: () => {
        var content = fileSystem.readFileSync(
            path.join(__dirname, 'SafeContent.txt'),
            'utf8'
        );

        return content;
    }
};
