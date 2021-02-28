let question = {
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
};

function start() {
    // get alternatives
    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.addEventListener('click', function(){
            // check correct answer
            console.log('check correct answer');
        });
    });

    // show first question
    showQuestion(question);
}

function showQuestion(q) {
    // show question title
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title;

    // show alternatives
    let alts = document.querySelectorAll('.alternative');
    
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];        
    });
}

start();






