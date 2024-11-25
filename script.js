document.addEventListener('DOMContentLoaded', () => {
    const words = [
        'System.out.println("Joshua"); }',
        'print("Engineering Student") }',
        'console.log("Designer"); }',
        'fmt.Println("Psychologist") }',
        'echo("Human") }',
        '{ developer: true }',
        'if(brain != empty) { keepCoding(); }'
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentWord = words[wordIndex];
    
    const typedTextElement = document.querySelector('.typed-text');
    
    if (!typedTextElement) {
        console.error('Could not find element with class .typed-text');
        return;
    }
    
    function typeEffect() {
        currentWord = words[wordIndex];
        let textToDisplay = currentWord.substring(0, charIndex);
        
        typedTextElement.textContent = textToDisplay;
        
        let typeSpeed = 100; // Faster base typing speed
        
        if (isDeleting) {
            typeSpeed = 50; // Even faster when deleting
            charIndex--;
        } else {
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Longer pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();
});


  

