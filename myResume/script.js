document.getElementById('resume').addEventListener('change', function() { // Event listener for resume file input
    var file = this.files[0]; // Get the selected file
    var reader = new FileReader(); // Create a new FileReader object
    reader.onload = function(event) { // Event handler for when file reading is complete
        document.getElementById('resume-preview').setAttribute('src', event.target.result); // Set the source of the resume preview to the file's data URL
    };
    reader.readAsDataURL(file); // Read the file as a data URL
});
