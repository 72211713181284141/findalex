document.getElementById('fileInput').addEventListener('change', function (event) {
  const fileList = event.target.files;
  const selectedFilesDiv = document.getElementById('selectedFiles');
  selectedFilesDiv.innerHTML = '';

  if (fileList.length > 0) {
    const fileNames = document.createElement('p');
    fileNames.textContent = 'Selected files: ';
    selectedFilesDiv.appendChild(fileNames);

    const filesList = document.createElement('ul');
    for (let i = 0; i < fileList.length; i++) {
      const fileItem = document.createElement('li');
      fileItem.textContent = fileList[i].name;
      filesList.appendChild(fileItem);
    }
    selectedFilesDiv.appendChild(filesList);
  }
});
