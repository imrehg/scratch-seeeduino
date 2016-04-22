(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        if (!connected) {
            return { status:1, msg:'Disconnected' };
        } else {
            return { status:2, msg:'Connected' };
        }
    };

    ext._deviceRemoved = function(dev) {
        console.log('Device removed');
        // Not currently implemented with serial devices
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
        ]
    };
    
    var potentialDevices = [];
    ext._deviceConnected = function(dev) {
        console.log(dev);
        potentialDevices.push(dev);

        if (!device) {
            tryNextDevice();
        }
    }
    
    var serial_info = {type: 'serial'};
    // Register the extension
    ScratchExtensions.register('Seeeduino', descriptor, ext, serial_info);
})({});
