$(function(){
   $("#file-up").fileinput({
        uploadUrl: '#',
        allowedFileExtensions : ['jpg','jpeg', 'png','gif'],
        overwriteInitial: false,
        maxFileSize: 5000,
        maxFilesNum: 1,
        slugCallback: function(filename) {
            return filename.replace('(', '_').replace(']', '_');
        }
    }); 
});