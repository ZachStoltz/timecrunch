import axios from 'axios';
import _ from 'lodash';

const inputElement = document.getElementById("uploader");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  let formData = new FormData();
  _.each(this.files,(file) => {
    formData.append("files", file);
  });
  axios.post('/upload', formData).then(() => {
    setTimeout(() => {
      axios.get('/download').then(data => {
        window.open(window.location + 'download')
      })
    }, 300);
  });
}
