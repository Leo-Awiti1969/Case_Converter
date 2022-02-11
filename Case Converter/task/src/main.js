
function upperCaseText() {
    let textContent = document.getElementById('textarea_text').value;
    document.getElementById('textarea_text').value = textContent.toUpperCase();
}

function lowerCaseText() {
    let textContent = document.getElementById('textarea_text').value;
    document.getElementById('textarea_text').value = textContent.toLowerCase();
}

function properCaseText() {
    let textContent = document.getElementById('textarea_text').value;
    textContent = textContent.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    document.getElementById('textarea_text').value = textContent;
}

function sentenceCaseText() {
    let textContent = document.getElementById('textarea_text').value;
    textContent = textContent.toLowerCase()
        .split('. ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join('. ');
    document.getElementById('textarea_text').value = textContent;
}

// function saveTextFile() {
//     let textContent = document.getElementById('textarea_text').value;
//     // textContent = textContent.toLowerCase()
//     //     .split('. ')
//     //     .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
//     //     .join('. ');
//     // document.getElementById('textarea_text').value = textContent;
// }

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
function saveTextFile() {
    let textContent = document.getElementById('textarea_text').value;
    download("text.txt",textContent);
}
