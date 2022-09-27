var containerQuestionEl = document.getElementById("question-container");
      var containerStartEl = document.getElementById("starter-container");
      var containerEndEl = document.getElementById("end-container")
      var containerScoreEl = document.getElementById("score-banner")
      var formInitials = document.getElementById("initials-form")
      var containerHighScoresEl = document.getElementById("high-score-container")
      var ViewHighScoreEl = document.getElementById("view-high-scores")
      var listHighScoreEl = document.getElementById("high-score-list")
      var correctEl = document.getElementById("correct")
      var wrongEl = document.getElementById("wrong")
      var btnStartEl = document.querySelector("#please-start");
      var btnGoBackEl = document.querySelector("#go-back")
      var btnClearScoresEl = document.querySelector("#clear-high-scores")
      var questionEl = document.getElementById("question")
      var answerbuttonsEl = document.getElementById("answer-buttons")
      var timerEl = document.querySelector("#timer");
      var score = 0;
      var timeleft;
      var gameover
      timerEl.innerText = 0;
      var HighScores = []; 
      var arrayShuffledQuestions
      var QuestionIndex = 0

    // questions for my quiz game.
    var questions = [
        { q: 'What does HTML stand for?', 
          a: '3. Hyperlinks text Markup Language', 
          choices: [{choice: '1. Home toolkit Markup language'}, {choice: '2. Hyperlinks and textmarkup Language'}, {choice: '3. Hyper text Markup Language'}, {choice: '4. All of the above'}]
        },
        { q: 'Choose the correct HTML element to define important text', 
          a: '3. <strong>', 
          choices: [{choice: '1. <i>'}, {choice: '2. <b>'}, {choice: '3. <strong>'}, {choice: '4. <important>'}]
        },
        { q: 'Where in an HTML document is the correct place to refer to an external style sheet?', 
          a: '2. in the <head> section', 
          choices: [{choice: '1. in the <body> section'}, {choice: '2. in the <head> section'}, {choice: '3. in the <footer> section'}, {choice: '4. none of the above'}]
        },
        { q: 'What syntax would call a function?', 
          a: '4. function()', 
          choices: [{choice: '1. var function'}, {choice: '2. function'}, {choice: '3. call function'}, {choice: '4. function()'}]
        },
        { q: 'When does CSS stand for?', 
          a: '3. cascading style sheets', 
          choices: [{choice: '1. colorful style sheets'}, {choice: '2. computer style sheets'}, {choice: '3. cascading style sheets'}, {choice: '4. creative style sheets'}]
        },
        { q: 'What is jQuery?', 
          a: '2. jQuery is a javaScript library', 
          choices: [{choice: '1. jQuery is a javaScript library'}, {choice: '2. jQuery is a bootcamp '}, {choice: '3. jQuery is an app'}, {choice: '4. jQuery is a module'}]
        },
        { q: 'How can you detect the clients browser name', 
          a: '1. none of the below ', 
          choices: [{choice: '1. none of the below'}, {choice: '2. browser.name'}, {choice: '3. push to github'}, {choice: '4. client.navName'}]
        },
      ];  

      btnStartEl.addEventListener("click", startGame)