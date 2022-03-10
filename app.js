const nextButton = document.querySelector('.next');
const advice = document.querySelector('.advice');
const adviceID = document.querySelector('.adviceID');


async function getAdvice() {
    let res = await fetch('https://api.adviceslip.com/advice')
        .catch((err) => {
            console.error(err);
        });
    let data = await res.json();
    adviceID.innerText = `Advice  #${data['slip']['id']}`
    advice.innerText = `" ${data['slip']['advice']} "`;

    
}


nextButton.addEventListener('click', () => {
    getAdvice();
})