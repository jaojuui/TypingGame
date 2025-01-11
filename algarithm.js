let targetText = [
    "accept", "focus", "passenger", "spanish", "industry", "trust", "similarly", 
    "finance", "education", "currently", "beautiful", "generation", "knowledge", 
    "imagination", "connection", "development", "environment", "communication", 
    "technology", "information", "transportation", "adventure", "happiness", 
    "creativity", "motivation", "celebration", "friendship", "cooperation", 
    "curiosity", "opportunity", "expression", "achievement", "adoption", 
    "confidence", "independence", "leadership", "perfection", "realization", 
    "transformation", "exploration", "determination", "responsibility", 
    "understanding", "relationship", "improvement", "sustainability", 
    "innovation", "entertainment", "partnership", "commitment", "appreciation", 
    "dedication", "organization", "contribution", "flexibility", "discipline", 
    "enthusiasm", "collaboration", "satisfaction", "gratitude", "celebrity", 
    "generation", "achievement", "improvement", "celebration", "independence", 
    "productivity", "efficiency", "creativity", "motivation", "determination", 
    "imagination", "harmony", "partnership", "friendship", "relationship", 
    "sustainability", "transformation", "realization", "exploration", 
    "responsibility", "appreciation", "dedication", "organization", 
    "innovation", "entertainment", "communication", "transportation", 
    "development", "education", "environment", "technology", "information", 
    "similarly", "finance", "currently", "trust", "accept"
  ];
  
const targetElement = document.getElementById("target-text");
const scoreElement = document.getElementById("score");  
// const typedElement = document.getElementById("typed-text");
const startButton = document.getElementById("startbutton");
const countdownElement = document.getElementById("time");
let randomText = Math.floor(Math.random() * targetText.length); 
let typedText = "";
let scoreuser = 0;
let falsetext = 0;
gamestart = false;
targetElement.innerHTML = targetText[randomText]; 

document.addEventListener("keydown", (event) => {
    if(gamestart){
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
                    // highlightedText += `<span style="color: red">${typedText[i]}</span>`;
                    highlightedText += `<span style="color: red">${targetText[randomText][i]}</span>`;
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
            falsetext=0;
            // c = targetText[randomText];
        }if(falsetext >= 2) {
            falsetext=0;
            typedText = "";
            randomText = Math.floor(Math.random() * targetText.length);
            targetElement.innerHTML = targetText[randomText];
            if(scoreuser>0){
                scoreuser -= 1;
            }
        }
        scoreElement.innerHTML =  scoreuser;
    }
});
function updateCountdown() {
    let timeLeft = 60;
    gamestart = true;
    countdownElement.innerHTML = timeLeft;
    startButton.textContent = "reset";
    startButton.classList.remove("btn-dark");
    startButton.classList.add("btn-warning"); 
    startButton.style.boxShadow = "2px 2px 5px rgb(166, 168, 46), -2px -2px 5px rgba(148, 150, 13, 0.7)"; // เพิ่มเงาให้กับปุ่ม
    startButton.onclick = () => {
        location.reload();
    };
  
    timerId = setInterval(() => {
      timeLeft--;
      countdownElement.innerHTML = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timerId);
        gamestart = false;
        countdownElement.textContent = "Time is up!";
        targetElement.innerHTML = "Your score is " + scoreuser ;
        showRestartButton();
      }
    }, 1000);
  }
  function showRestartButton() {
    startButton.textContent = "Try again later";
    startButton.onclick = () => {
     location.reload();
    };
  }