// Greate Memory Card Game : 
// [1] Show The Card's And Hide It 
// [2] Compare Two Card If They Same They Steel Open 
// And If They Wrong Count Tries Well Count 

// [3] Add Timer 
// [4] Add Hero List That Contain Players
// [5] Add Sound's

let duration = 1000;
let blockCont = document.querySelector(".game-cont");
let blocks = Array.from(blockCont.children);
let orderRange = Array.from(Array(blocks.length).keys());


let controlSpan = document.querySelector(".control-buttons span");

controlSpan.addEventListener("click", () => {
    // Get The Name
    let theName = prompt("What Is Your Name ? ");
    // Set The Name
    (theName == "" || theName == null ? document.querySelector(".name span").innerHTML = "Unknown" : document.querySelector(".name span").innerHTML = theName)
    controlSpan.parentElement.remove();
    
    // Show The Card And Hied It
    document.querySelectorAll(".game-cont .game-block").forEach((e) => e.classList.add("is-flipped"));
    setTimeout(() => document.querySelectorAll(".game-cont .game-block").forEach((e) => e.classList.remove("is-flipped")), 2000);
})


shuffel(orderRange)

// Add Order To Block Element 
blocks.forEach((b,i) => {
    b.style.order = orderRange[i]

    b.addEventListener("click", () => {
        flipBlock(b)
    })
})


// Flip Block Function 
function flipBlock (selectedBlock) {
    // Add Class Flip 
    selectedBlock.classList.add("is-flipped")
    //Cllect All Flipped Card 
    let allFippedBlcok = blocks.filter(flippBlock => flippBlock.classList.contains("is-flipped"));
    if(allFippedBlcok.length === 2) {
        // Stop Clicking Function 
        stopClicking () ;

        // Check Matched Block Function 
        checkMatch(allFippedBlcok[0] ,allFippedBlcok[1]);
    }
}


// Stop Clicking Function 
function stopClicking () {
    blockCont.classList.add("no-click");
    setTimeout(() => blockCont.classList.remove("no-click"),duration)
}

// Check Matched Block Function 
function checkMatch(firstCard,secondCard) {
    let triesEl = document.querySelector(".tries span")
    if (firstCard.dataset.color === secondCard.dataset.color)
    {
        firstCard.classList.remove("is-flipped");
        secondCard.classList.remove("is-flipped");

        firstCard.classList.add("has-match");
        secondCard.classList.add("has-match");
    }
    else{
        triesEl.innerHTML = parseInt(triesEl.innerHTML) +1;
        setTimeout(() => {
            firstCard.classList.remove("is-flipped");
            secondCard.classList.remove("is-flipped");
        },duration)
    }
}


// Shuffle Function
function shuffel (arr) {
    let current = arr.length,
        temp,
        random ;
    while(current > 0)
    {
        // Get Random Number 
        random = Math.floor(Math.random() * current);

        // Decrease Length By One 
        current--;

        // [1] Save Current Element In The Stash 
        temp = arr[current];

        // [2] Current Element = Random Element 
        arr[current] = arr[random];

        //[3] Random Element = Get Element From Stash
        arr[random] = temp
    }
    return arr
}




