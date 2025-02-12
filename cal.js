const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
console.log("buttons", buttons)
console.log("output", output)

let str = '';
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log("e.target.value", e.target.value)
        if (e.target.innerHTML === 'AC') {
            str = '';
            output.value = str;


        } else if (e.target.innerHTML === 'Del') {
            str = str.substring(0, str.length - 1);
            output.value = str;

        } else if (e.target.innerHTML === '=') {
            str = eval(str);
            output.value = str;

        } else {
            str += e.target.innerHTML;
            output.value = str;
        }
    });
});