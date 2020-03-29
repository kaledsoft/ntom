
console.log("content dot JS started");
chrome.runtime.onMessage.addListener(gotmessage);

function gotmessage(message, sender, sendResponse) {
    console.log(message.txt);
}
window.addEventListener('mouseup', optionSelected);

function optionSelected() {
    console.log('Option selected function ');
    let option = window.getSelection().toString();

    console.log(option);
}
window.addEventListener('contextmenu', mouseMover);


function mouseMover() {

    console.log('Down - >>>>>');

}

function click() {
    ///alert("dddddddd555555555555dddddddd")
}
window.addEventListener("dblclick", click())