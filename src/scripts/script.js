function Copy(containerid) {
    let textarea = document.createElement('textarea');
    textarea.id = 'temp';
    textarea.style.height = 0;
    document.body.appendChild(textarea);
    textarea.value = document.getElementById(containerid).innerText;
    let selector = document.querySelector('#temp');
    selector.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }