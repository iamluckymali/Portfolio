const cards = [
    ['#cardTitle', 'developer.js'],
    ['#dev', 'developer = {'],
    ['#name', "'Lucky Mali'"],
    ['#role', "'Web Developer'"],
    ['#html', "'HTML'"],
    ['#css', "'CSS'"],
    ['#js', "'Javascript'"],
    ['#focus', "'clean UI'"],
    ['#status', "'Learning Javascript'"],
    ['#available', 'true']
];

let index = 0;
function typeNext() {
    if(index===cards.length) return;

    const [element,text] = cards[index];
    new Typed(element,{
        strings: [text],
        typeSpeed: 50,
        showCursor: false,
        onComplete: ()=>{
            index++
            typeNext();
        }
    });
}
typeNext();

document.addEventListener("keydown",(event)=>{
    if(event.shiftKey && event.ctrlKey && event.key === "C"){
        event.preventDefault();
    }
    if(event.key === "F12"){
        event.preventDefault();
    }
});
document.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
});

document.addEventListener("copy",(ev)=>{
    ev.preventDefault();
    const copyTxt = "Text copying is not allowed.";
    ev.clipboardData.setData("text/plain", copyTxt);
});