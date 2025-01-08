let targetText = ["accept", "focus", "passenger", "spanish", "industry", "trust", "similarly", "finance", "education", "currently"];
let typedText = "";
const targetElement = document.getElementById("target-text");
let scoreuser = 0;
const scoreElement = document.getElementById("score");  

const typedElement = document.getElementById("typed-text");

let randomText = Math.floor(Math.random() * targetText.length); 
let falsetext = 0;
targetElement.innerHTML = targetText[randomText]; 

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        typedText = typedText.slice(0, -1);
    } else if (event.key.length === 1) {
        typedText += event.key;
    }

    let highlightedText = "";
    for (let i = 0; i < targetText[randomText].length; i++) {
        if (i < typedText.length) {
            if (typedText[i] === targetText[randomText][i]) {
                highlightedText += `<span style="color: green">${typedText[i]}</span>`;  
            } else {
                falsetext+=1;
                highlightedText += `<span style="color: red">${typedText[i]}</span>`;
            }
        } else {
            highlightedText += targetText[randomText][i]; 
        }
    }
    
    targetElement.innerHTML = highlightedText;

    if (targetText[randomText] === typedText) {
        scoreuser += 1;
        typedText = "";
        randomText = Math.floor(Math.random() * targetText.length);
        targetElement.innerHTML = targetText[randomText];
    }if(falsetext > 2) {
        falsetext=0;
        typedText = "";
        randomText = Math.floor(Math.random() * targetText.length);
        targetElement.innerHTML = targetText[randomText];
        if(scoreuser>0){
            scoreuser -= 1;
        }
    }
    scoreElement.innerHTML =  scoreuser;
});
function runtime(){

    
}