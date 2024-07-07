'use client';
import { useState } from "react";
import "./quize.css"
export default function quize(this: any){
    const [startDiv, setStartDiv] = useState(true);
    const [QuizeDiv, setQuizeDiv] = useState(false);
    const [ResultDiv, setResultDiv] = useState(false);
    const [id, setId] = useState(0);
    const [answer, setAnswer] = useState(-1);
    const [next, setNext] = useState(false);
    const [A, setA] = useState(0);
    let [T, setT] = useState(0);
    let [C, setC] = useState(0);
    let [E, setE] = useState(0);

    const questiions = [
        {f : "Tell people what i have on my mind", s : "Keep my opinion with me", type : "1", question : "I usually:"},
        {f : "Cool and reserved with others", s : "Warm and friendly with others", type:"2", question : "I see myself:"},
        {f : "Hold back my emotions within me ", s : "Show my emotions to others", type:"2", question : "I ussually"},
        {f : "Hurrying person", s : "Leisurley person", type:"1", question : "I see myself as a"},
        {f : "Willing to take risks in most situations", s : "Who avoids or minimizes risk in most situations", type:"1", question : "I see myself as a person"},
        {f : "As a sirious and thoughtful person", s : "As a person who is tuned to the game and loves having fun", type : "2", question : "I see myself"},//6
        {f : "Start chatting", s : "Wait for others to communicate with me", type : "1", question : "I usually"},//7
        {f : "Facts", s : "Opinions", type : "2", question : "I usually reason on the basis of"},//8
        {f : "To work alone", s : "Working with others", type : "2", question : "I usually like"},//9
        {f : "Take responsibility for the situation", s : "Stay in the shade", type : "1", question : "I usually"},//10
        {f : "An active and direct person", s : "A quite and moderate person", type : "1", question : "I see myself as"},//11
        {f : "Outcomes and results", s : "Process or method", type : "1", question : "I ussually focus on"},//12
        {f : "More interested in what people think", s : "Interested in how people feel", type : "2", question : "I am usually"},//13
        {f : "Business and formal in communicating with others", s : "Relaxed and informal in communicating with others", type : "2", question : "I usually am"},//14
        {f : "Avoid personal involvment in communicating with people", s : "Resort to a more personal approach to people", type : "2", question : "I usually"},//15
        {f : "Go directly in a conflict situation", s : "Avoid conflict and confrantation", type : "1", question : "I usually"},//16
        {f : "See myself patient with others", s : "Usually become impatient with others", type : "1", question : "I"},//17
        {f : "Have limited communication with others", s : "Communicate a lot with others", type : "2", question : "I usually"},//18
        {f : "The task", s : "Relationships", type : "2", question : "I usually focus more on"},//19
        {f : "Restrainde and alienated with others", s : "Open with others", type : "2", question : "I am usually"},//20
        {f : "Competing with others", s : "Collaborating with others", type : "1", question : "I rather see myself"},//21
        {f : "Assertive with others", s : "Restrained with others", type : "1", question : "I see myself more"},//22
        {f:"Indifferent to the feelings of others", s:"Pay attention to the feelings of others", type:"2", question:"I usually"},//23
        {f:"Make quick decisions", s:"Spend more time on making dicisions", type:"1", question:"I usually"},//24
        {f:"A demanding person to myself and others", s:"An easy-going and accepting person", type:"2", question:"I see myself as"},//25
        {f:"Direct the actions of others", s:"Follow others", type:"1", question:"I usually"},//26
        {f:"Wary and restrained in communication", s:"Impulsive and expressive in communication", type:"2", question:"I am usually"},//27
        {f:"Am usualy willing to share my opinions and ideas", s:"Usually keep my opinions and thoughts with me", type:"1", question:"I"},//28
        {f:"Become impatient when working with others", s:"Patiently work with others", type:"1", question:"I ussualy"},//29
        {f:"Keep my personal feelings with me", s:"Share my personal feelings with others", type:"2", question:"I ussually"},//30

    ]
    function start(){
        setStartDiv(false);
        setQuizeDiv(true);
    }
    function setAnsw1(){
        setAnswer(1);
        setNext(true);
    }
    function setAnsw2(){
        setAnswer(2);
        setNext(true)
    }
    function setAnsw1Div(){
        setAnswer(1);
        setNext(true);
    }
    function setAnsw2Div(){
        setAnswer(2);
        setNext(true)
    }
    function nextBtn(){
        setNext(false);
        if (questiions[id]["type"] === "1"){
            if (answer == 1){
                setT(T+1);
            }
            else{
                setA(A+1);
            }
        }
        else{
            if (answer == 1){
                setC(C+1);
            }
            else{
                setE(E+1);
            }
        }
        if (id+1 >= questiions.length){
            setQuizeDiv(false);
            setResultDiv(true);
        }
        else{
            setAnswer(-1);
            setId(id+1);
        }
    }
    function mainTriangle() : string{
        console.log(E-C);
        if (T-A >= 0){
            if (E-C >= 0){
                return "T-E";
            }
            else{
                return "T-C";
            }
        }
        else{
            if (E-C >= 0){
                return "A-E";
            }
            else{
                return "A-C";
            }
        }
    }
    function getChecked(variant : number){
        if (variant==answer){
            return true;
        }
        else{
            return false;
        }
    }
    return (
    <main>
        <div className="start" style={{display : startDiv ? "block" : "none"}}>
            <h2>If you ready to start press button!<br/>Probably test will take about 5-15 minutes.</h2>
            <button id="start" onClick={start}>Start!</button> 
        </div>
        <div className="Quize" style={{display : QuizeDiv ? "block" : "none"}}>
            <progress id="questionNumber" max="30" value={id}/>
            <h1>{questiions[id]["question"]}</h1>
            <div className="questions">
                <div onClick={setAnsw1Div}><input type="radio" name="answer" onChange={setAnsw1} checked={getChecked(1)}/>{questiions[id]["f"]}</div>
                <div onClick={setAnsw2Div}><input type="radio" name="answer" onChange={setAnsw2} checked={getChecked(2)}/>{questiions[id]["s"]}</div>
            </div>
            <button style={{display : next ? "block" : "none"}} onClick={nextBtn}>Next</button>
        </div>
        <div className="Result" style={{display : ResultDiv ? "block" : "none"}}>
            <h2>Your results</h2>
            <ul>
                <li>A - {A} - ask</li>
                <li>T - {T} - tell</li>
                <li>E - {E} - emotions</li>
                <li>C - {C} - controll of emotions</li>
            </ul>
            <h3>Your main triangle is {mainTriangle()}</h3>
            <div className="share">
                <span className="copy" onClick={() => {navigator.clipboard.writeText("I passed work in team test!\nHere are my results:\nA - " + A + " - ask\nT - " + T + " - tell\nE - " + E + " - emotions\nC - " + C + " - controll of emotions\nMy main triangle is " + mainTriangle()); alert("Copied!")}}>Copy</span>
            </div>
        </div>
    </main>
    );
}