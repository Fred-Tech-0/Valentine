document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const continueBtn = document.getElementById('continue-btn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const loveForm = document.getElementById('love-form');
    const letterContent = document.getElementById('letter-content');

    // 1. UNTOUCHABLE NO BUTTON
    function moveNo() {
        // Keeps button within screen bounds
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.zIndex = "9999";
    }

    noBtn.addEventListener('mouseenter', moveNo);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevents accidental clicking on mobile
        moveNo();
    });

    // 2. YES BUTTON CLICKED
    yesBtn.addEventListener('click', () => {
        document.getElementById('main-text').innerText = "I knew you'd agree! ❤️";
        document.querySelector('.buttons-container').style.display = 'none';
        document.querySelector('.subtitle').style.display = 'none';
        
        // Reveal the Continue button
        continueBtn.classList.remove('hidden');
        continueBtn.classList.add('visible');
        
        createConfetti();
    });

    // 3. NAVIGATION TO PAGE 2
    continueBtn.addEventListener('click', () => {
        page1.classList.remove('active');
        page1.classList.add('hidden');
        page2.classList.add('active');
    });

    // 4. FORM SUBMISSION TO FINAL LETTER
    loveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        page2.classList.remove('active');
        page2.classList.add('hidden');
        page3.classList.add('active');
        
        letterContent.innerHTML = get500WordLetter();
    });

    // 5. HEART CONFETTI
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-5vh';
            heart.style.color = '#ff4d6d';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.zIndex = '1000';
            heart.style.transition = `transform ${Math.random() * 3 + 2}s linear, top ${Math.random() * 3 + 2}s linear`;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.style.top = '105vh';
                heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            }, 100);
            setTimeout(() => heart.remove(), 5000);
        }
    }
});

function get500WordLetter() {
    return `
    <p><b>My Dearest,</b></p>
    <p>As I sit here attempting to put my feelings into words, I realize that no amount of ink or paper (or digital code) could ever truly capture the depth of what I feel for you. But I am going to try, because you deserve to know, today and every day, just how incredibly special you are to me.</p>
    <p>From the very first moment our paths crossed, my life began to change in ways I never anticipated. I remember that day vividly—not just what we did or where we were, but how I felt. There was a spark, a subtle shift in the universe, as if my soul recognized yours before my mind even had a chance to catch up. You walked into my world, and suddenly, colors seemed brighter, laughter rang louder, and the future—a concept that used to feel blurry and distant—suddenly came into sharp, beautiful focus.</p>
    <p>Thank you for saying "Yes" today. That simple three-letter word means more to me than I can explain. It is a promise, a shared hope, and a doorway to a thousand more memories. I love the way you look at the world with such kindness and curiosity. I love the way your eyes light up when you're excited, the way you challenge me to be a better person, and the way you hold my hand when things get tough. You are not just my Valentine; you are my best friend, my confidant, and my greatest adventure.</p>
    <p>I think about all the little things that make "us." The inside jokes that only we understand, the quiet moments where we don't need to say a word to know what the other is thinking, and even the silly disagreements that end in laughter. I love our story. I love where we’ve been, but I am even more excited about where we are going. Whether we are traveling to new places or simply sitting on the couch watching movies, as long as I am with you, I am home.</p>
    <p>I want you to know that I am here for you. Through the sunshine and the storms, through the triumphs and the failures. I promise to listen when you need to talk, to hold you when you need to cry, and to celebrate with you when you succeed. I promise to keep dating you, to keep trying, and to never get complacent. I want to build a life with you that is built on trust, respect, and this overwhelming, consuming love that I feel right now.</p>
    <p>You have taught me what it means to be vulnerable. You have shown me that love isn't just a feeling; it's an action. It's in the coffee made in the morning, the text check-ins during the day, the patience during hard times. You embody grace and beauty in a way that leaves me in awe.</p>
    <p>So, here is my promise to you: I will love you with everything I have. I will cherish every second we get to spend together. You are my person. You are my heart outside of my body. Thank you for being you. Thank you for choosing me.</p>
    <p>I love you more than words can say, more than the stars in the sky, and more than yesterday, but less than I will tomorrow.</p>
    <p><b>Forever and always yours.</b></p>
    `;
}
