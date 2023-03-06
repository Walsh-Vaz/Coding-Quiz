


//function init () {
    //var displayTime = document.getElementById("time");
    



    document.addEventListener("DOMContentLoaded" , function() {

        var button = document.getElementById("startquiz");
        var timer = document.getElementById("time");
        var displayEl = document.getElementById("questions-1");
        var options = document.getElementById("opt");
        var headerContainer = document.getElementById("heading-container");
        //var feedEl = document.getElementById("feed");
    
        var final = document.getElementById("final-score");
        var header2 = document.getElementById("ending-tag");
    
        
        var quizQuestionIndex = 0;
        var setTime;
        var time = 60;
    
        //console.log(headerContiner);
    
        quiz = [
        // first question
        {
            question: "What is the fastest animal?",
            options: ["Cheetah", "Lion", "Tiger", "Bear"],
            answer: "Cheetah"
        },
            
        // second question 
        {
            question: "What does javascript provide to your website?",
            options: ["structure", "styling", "functionality", "all of the above"],
            answer: "functionality"
        }
        ];
    
        function beginQuiz() {
    
            
    
            headerContainer.style.display = "none";
            
    
            setTime = setInterval(function() {
                time--;
                timer.textContent = "Time: " + time;
    
                if (time <= 0){
                    clearInterval(setTime);
                    displayEl.style.display = "none";
                    //timer.style.display = "none";
                    header2.textContent = "Congrats You have completed the Quiz !!!!";
                    final.textContent = "Your final score is " + time;
    
                    //console.log ("time:" + time);
                } 
            }, 1000);
    
            timer.textContent = "Time: " + time;
    
            displayQuestions();
        }
    
    
        function displayQuestions (){
            
            var firstQuestion = quiz[quizQuestionIndex];
            var questions = document.getElementById("display-question");
    
            questions.textContent = firstQuestion.question;
    
            options.innerHTML = "";
    
            firstQuestion.options.forEach(function (opt , i) {
                var buttonOption = document.createElement("button");
                buttonOption.setAttribute("class", "option");
                buttonOption.setAttribute("value", opt);
    
                buttonOption.textContent = i + " " + opt;
    
                buttonOption.addEventListener("click", function() {
                    if (this.value !== quiz[quizQuestionIndex].answer){
                         
                        time = time - 10;
                        timer.textContent = "Time: " + time;
                        
                        //feedEl.textContent = "Wrong";
                    }
                    
                    quizQuestionIndex++;
    
                    if (quizQuestionIndex === quiz.length){
                        clearInterval(setTime);
                        displayEl.style.display = "none";
                        //timer.style.display = "none";
                        header2.textContent = "Congrats You have completed the Quiz !!!!";
                        final.textContent = "Your final score is " + time;
                    }
    
                    else {
                        displayQuestions();
                    }
                    
                });
                
                options.appendChild(buttonOption);
    
            });
    
        }
    
        
    
        button.addEventListener("click", beginQuiz);
    });
    
    
    
    
        // button.addEventListener("click", function() {
        // //console.log ();
        // //var headerContiner = document.querySelector(".header-container");
        // console.log(headerContiner);
        // var seconds = 50;
        // var timer = document.createElement("p");
        // timer.classList.add("time");
        // var time = document.createTextNode("text");
        // timer.appendChild(time);
        // headerContiner.appendChild(timer);
    
    
    // function setTime() {
    //     var seconds = 50;
    //     var timer = document.createElement("p");
    //     timer.classList.add("time");
    //     var time = document.createTextNode("text");
    //     timer.appendChild(time);
    //     headerContiner.appendChild(timer);
    
    //     //console.log("test");
    //     /*
    //     var setTime =  setInterval(function(){
    //         seconds--;
    //         headerContiner.appendChild(timer);
    
    
    
    //         if (seconds === 0){
    //             clearInterval(setTime);
    //         }
    
    //     }, 1000);*/
    // }
    
    
        //setTime();
    
    
    
    
    
    
    
    