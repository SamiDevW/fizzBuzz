document.addEventListener('DOMContentLoaded', function () {
    const outputDiv = document.getElementById('output');

    for (let i = 1; i <= 100; i++) {
        let numberText = '';

        if (i % 3 === 0 && i % 5 === 0) {
            numberText = 'FizzBuzz';
        } else if (i % 3 === 0) {
            numberText = 'Fizz';
        } else if (i % 5 === 0) {
            numberText = 'Buzz';
        } else {
            numberText = i.toString();
        }

        const numberSpan = document.createElement('span');
        numberSpan.textContent = numberText;
        numberSpan.classList.add('number');
        if (i % 3 === 0 && i % 5 === 0) {
            numberSpan.classList.add('fizzbuzz');
        } else if (i % 3 === 0) {
            numberSpan.classList.add('fizz');
        } else if (i % 5 === 0) {
            numberSpan.classList.add('buzz');
        }

        outputDiv.appendChild(numberSpan);
    }
});
