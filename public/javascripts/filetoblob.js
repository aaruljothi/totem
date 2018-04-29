function getFile(filePath) {
    return filePath.substr(filePath.lastIndexOf('\\') + 1).split('.')[0];
}

function getoutput() {
    outputfile.value = getFile(inputfile.value);
    extension.value = inputfile.value.split('.')[1];
}

function filetoblob(file, callback){
    // Initialize an instance of the `FileReader`
        const reader = new FileReader();

    // Specify the handler for the `load` event
        reader.onload = function (e) {
            // Do something with the file
            // E.g. Send it to the cloud
            let result = e.target.result;
            console.log(result);
            callback = result;
        };

    // Read the file
        reader.readAsDataURL(file);
}

function blobtofile(blob, name) {
    return new File([blob], name, {type: contentType, lastModified: Date.now()});
}


