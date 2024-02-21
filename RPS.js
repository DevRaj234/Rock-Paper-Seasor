let comcnt=0;
let usercnt=0;
let choices=document.querySelectorAll(".choice");
let move= document.querySelector("#move")
let userscore=document.querySelector("#UserScore");
let comscor=document.querySelector("#CompScore");
const computerchoice=()=>{
    let comcho=["rock","paper","scissors"];
    let randomindex=Math.floor(Math.random()*3);
    return comcho[randomindex];
}
const draw=()=>{
    console.log("Game was draw");
    move.innerText="Game was draw,Play Again"
    move.style.backgroundColor="teal";
}
const showwinner=(w)=>{
    if(w){
        console.log("You win");
        move.innerText="You Win!!"
        move.style.backgroundColor="Green";
        usercnt++
        userscore.innerText=usercnt;
    }
    else {
        console.log("computer win");
        move.innerText="You Lose!!"
        move.style.backgroundColor="red";
        comcnt++;
        comscor.innerText=comcnt;
    }
}
const playgame=( userchoice)=>{
     let computercho=computerchoice();
     if(userchoice===computercho){
         draw();
     }
     else {
         let userwin=true;
         if(userchoice==="rock"){
           userwin=computercho==="paper"?false:true;
         }
         else if(userchoice==="paper"){
             userwin=computercho==="scissors"?false:true;
         }
         else {
             userwin=computercho==="rock"? false:true;
         }
         showwinner(userwin);

     }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice selected");
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})