const form = document.querySelector('form');

const sendForm = e => {
    e.preventDefault();
    const numA = e.target[0].value;
    const numB = e.target[1].value
    fetch('/calc', {
            method: 'POST',
            body: JSON.stringify({
                numA,
                numB,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then(response => response.json()).then(data => {console.log(data.anser)})
}

form.addEventListener('submit', sendForm)