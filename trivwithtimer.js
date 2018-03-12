$(document).ready(function() {

        var correct = 0;
        var incorrect = 0;
        var counter = 0;
        var timeLeft = 30;
        var x = 0;
      
      var game = {
          questionCounter: 0,
          trivia: [

          {
              question: "What is the name of the Republic ship boarded and destroyed by Darth Malak?",
              answer: "The Endar Spire",
              choices: [
                  "The Corellia",
                  "The Fujin",
                  "The Outrider",
                  "The Endar Spire",
            ]
          },

          {
              question: "Urban world with Upper, Lower, and Under cities",
              answer: "Taris",
              choices: [
                  "Taris",
                  "Dantooine",
                  "Nar Shadaa",
                  "Yavin",
            ]
          },

          {
              question: "Sparsely populated world of vast plains, Jedi Enclave",
              answer: "Dantooine",
              choices: [
                  "Drahmin",
                  "Rakata Prime",
                  "Dantooine",
                  "Hoth",
            ]
          },

          {
              question: "Desert planet with two suns",
              answer: "Tatooine",
              choices: [
                  "Tatooine",
                  "Kashyyk",
                  "Korriban",
                  "Yavin",
            ]
          },

          {
              question: "Forest planet with gargantuan trees",
              answer: "Kashyyk",
              choices: [
                  "Kashyyk",
                  "Korriban",
                  "Tatooine",
                  "Manaan",
            ]
          },

          {
              question: "Neutral water world with an artificial island city",
              answer: "Manaan",
              choices: [
                  "Manaan",
                  "Korriban",
                  "Kashyyk",
                  "Yavin",
            ]
          },

          {
              question: "Barren world of cliffs and valleys, location of Sith Academy",
              answer: "Korriban",
              choices: [
                  "Korriban",
                  "Yavin",
                  "Nar Shadaa",
                  "Dantooine",
            ]
          },



          {
              question: "Oceanic world spotted with thousands of islands, where the player crash lands",
              answer: "Rakata Prime",
              choices: [
                  "Rakata Prime",
                  "Telos",
                  "Onderon",
                  "Felinova",
            ]
          },

          {
              question: "Enormous space station and starship factory; sight of final battle",
              answer: "Starforge",
              choices: [
                  "Colassus",
                  "P28",
                  "Starforge",
                  "Blackshade",
            ]
          },

          {
              question: "Jedi Knight with 'Battle Meditation' ability that can turn the tide of war",
              answer: "Bastilla",
              choices: [
                  "Bastilla",
                  "Dorak",
                  "Vrook",
                  "Vandar",
            ]
          },
          {
              question: "Republic veteran, expert pilot who assists Revan",
              answer: "Carth Onasi",
              choices: [
                  "Lt. Dan",
                  "Carth Onasi",
                  "Atton Rand",
                  "Davik Wausute",
            ]
          },
          {
              question: "Old hermit Jedi that joins Revan to fight Malak",
              answer: "Jolie Bindo",
              choices: [
                  "Ulic Qel Droma",
                  "Jolee Bindo",
                  "Kyle Kataarn",
                  "Nomi Sunrider",
            ]
          },
          {
              question: "Highly valuable substance with healing properties that is only found naturally on Manaan",
              answer: "Kolto",
              choices: [
                  "Mithril",
                  "Tempar",
                  "Kolto",
                  "Anthrax",
            ]
          },

          {
              question: "Old apprentice of Revan and leader of the Sith Empire",
              answer: "Darth Malak",
              choices: [
                  "Darth Thrawn",
                  "Juhani",
                  "Exar Kun",
                  "Darth Malak",
            ]
          },

          {
              question: "Fat, slug-like alien race, often crime bosses",
              answer: "Hutts",
              choices: [
                  "Hutts",
                  "Rodians",
                  "Twi'leks",
                  "Ewoks",
            ]
          },
          {
              question: "Common 'bug-eyed' alien race, often merchants or thugs (e.g. Greedo)",
              answer: "Rodians",
              choices: [
                  "Rodians",
                  "Juhanis",
                  "Twi'leks",
                  "Tilanda Till"
            ]
          },
          {
              question: "Popular speed-based sport the gangs compete in",
              answer: "Swoop Racing",
              choices: [
                  "Swoop Racing",
                  "Speeder Biking",
                  "T16 Racing",
                  "Landspeeder racing",
            ]
          },
          {
              question: "Common melee weapon, capable of countering a lightsaber",
              answer: "Vibroblade",
              choices: [
                  "Star Forge",
                  "Juhani",
                  "Vibroblade",
                  "Bacca",
            ]
          },
          {
              question: "Admiral of the Sith fleet that hunts the player's team",
              answer: "Saul Karath",
              choices: [
                  "Grand Admiral Thrawn",
                  "Cassius Fett",
                  "Atton Rand",
                  "Saul Karath",
            ]
          },
          {
              question: "Common alien race with head-tails, similar to humans",
              answer: "Twi'leks",
              choices: [
                  "Ewoks",
                  "Twileks",
                  "Hutts",
                  "Tilanda Till",
            ]
          },
          {
              question: "Popular gambling card game",
              answer: "Pazaak",
              choices: [
                  "Pazaak",
                  "Bacta",
                  "Bastilla",
                  "Manaan",
            ]
          },

          {
              question: "First apprentice of Darth Malak, boards the Endar Spire",
              answer: "Darth Bandon",
              choices: [
                  "Darth Sidious",
                  "Darth Snoke",
                  "Darth Bandon",
                  "Darth Revan",
            ]
          }
          ]
      }

     






      function timerSetup() {


         counter = 0;
         timeLeft = 30;


        $(".timer").text(timeLeft-counter);


function timeIt() {
    counter ++;
 
    $(".timer").text(timeLeft-counter);



    if ((timeLeft-counter) <= 0) {
        clearInterval(x);
    
        alert("Out of time... incorrect");
        incorrect++;
    
        game.questionCounter ++;
        displayWinsLosses();
      
        
        startGame();
    
    }



}

 x = setInterval (timeIt, 1000);




      }











      startGame();



      

      function displayWinsLosses() {
        $(".wins").text("You have guessed " + correct + " question(s) correctly");
      $(".losses").text("You have guessed " + incorrect + " question(s) incorrectly");

      }

      function clearQuestionsAnswers() {
        $(".choices").empty();
        $(".question").empty();


      }

      function startGame() {
        clearInterval(x);
        clearQuestionsAnswers();
        timerSetup();
        
        

     

        if (game.questionCounter === game.trivia.length) {
            
            $(".question").text("Game Complete!");

            displayWinsLosses();
            
        }

        

          $(".question").text(game.trivia[game.questionCounter].question)
          for (let i=0; i < game.trivia[game.questionCounter].choices.length; i++) {

            var p = $("<button>").text(game.trivia[game.questionCounter].choices[i]).attr("id", game.trivia[game.questionCounter].choices[i])
            p.addClass("optionsOf btn btn-primary btn-rounded")

            $(".choices").prepend(p)

 
       
            




      


     
           
          }



        }

        $(document).on("click", ".optionsOf", function(){
        // $(".optionsOf").on("click", function() {]
       
            console.log("click")


var guess = ($(this).attr("id"));

console.log("you guessed " + guess);
console.log("answer is " + game.trivia[game.questionCounter].answer);



if (guess === game.trivia[game.questionCounter].answer) {
   
      alert("Correct!")
      correct ++;
      game.questionCounter ++;
      displayWinsLosses();
      

     
      startGame();

    }
    else  {
       
        alert("Incorrect");
      incorrect++;
      game.questionCounter ++;
      displayWinsLosses();
 
 
      startGame();

    }

});
});






        


      
    




      
    