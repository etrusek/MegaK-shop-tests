const form = document.querySelector('form');

const handleSubmit = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    const res = fetch(
        '/cookie/set', {
            method: 'POST',
            body: JSON.stringify({
                name,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}

form.addEventListener('submit', handleSubmit)