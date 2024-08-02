// JavaScript for interactive elements

// Example: Adding a click event to the navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple form validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
    } else {
        alert('Thank you for your message!');
        // Here you can add code to actually send the form data
    }
});

// Function to check quiz answers
function checkAnswers() {
    const answers = {
        q1: 'b', // Resplendent Quetzal
        q2: 'c', // Brown Basilisk
        q3: 'b', // Translucent Skin
        q4: 'b', // Juego de los Diablitos
        q5: 'c', // Wood Carving
        q6: 'a'  // Wood
    };

    let score = 0;
    let totalQuestions = 6;
    
    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    const resultText = score === totalQuestions ? 'PERFECT!!! 🎉' : `You scored ${score} out of ${totalQuestions}.`;
    document.getElementById('quiz-result').innerText = resultText;
}
