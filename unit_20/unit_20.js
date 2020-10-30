
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(e) {
    document.querySelector('.out-1').innerText = e.key;
}

// ваше событие здесь!!!
document.querySelector('.i-1').onkeypress = t1;
// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
    document.querySelector('.out-2').innerText = e.code;
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(e) {
    let out = e.charCode > 57 ? true : false;
    document.querySelector('.out-3').innerText = out;
}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

let out4 = '';
function t4(e) {
    if(e.key=== e.key.toLowerCase()) out4 += e.key;
    document.querySelector('.out-4').innerText = out4;
}

// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4;
// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

let out5 = '';
function t5(e) {
    if(e.key === e.key.toUpperCase()) out5 += e.key;
    document.querySelector('.out-5').innerText = out5;
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5;
// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let out6 = '';
function t6(e) {
    if(e.key !== e.key.toUpperCase()) out6 += e.key;
    document.querySelector('.out-6').innerText = out6;
}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
const a7 = [];
function t7(e) {
    a7.push(e.key);
    let num = Math.floor(Math.random() * Math.floor(a7.length - 1));
    document.querySelector('.out-7').innerText = a7[num];
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;
// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let out8 = '';
function t8(e) {
    switch (e.key) {
        case 'i':
            out8 += 1;
            break;
        case 'o':
            out8 += 0;
            break;
        case 'I':
            out8 += 7;
            break;
        default:
            out8 += e.key;
    }
    document.querySelector('.out-8').innerText = out8;
}

// ваше событие здесь!!!
document.querySelector('.i-8').onkeypress = t8;

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let out9 = 0;
function t9(e) {
    if(e.key === 'ArrowDown') out9++;
    document.querySelector('.out-9').innerText = out9;
}

// ваше событие здесь!!!
document.querySelector('.i-9').onkeydown = t9;

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let width = document.getElementsByClassName('div-10 block')[0].offsetWidth;
let height = document.getElementsByClassName('div-10 block')[0].offsetHeight;
function t10(e) {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        width++
        document.querySelector('.block').style.width =  width + 'px';
    }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        height++
        document.querySelector('.block').style.height =  height + 'px';
    }
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;
// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

function t11(e) {
    let button = document.querySelector(`#button-${e.code}`);
    switch (e.type) {
        case "keydown":
            button.classList.add('active');
            break;
        case "keyup":
            button.classList.remove('active');
            break;
    }
    if(e.type = "Tab") setTimeout(()=> {button.classList.remove('active')}, 200);
}
// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t11;
document.querySelector('.i-11').onkeyup = t11;

// собираем наборы кнопок по рядам
const keyboardArr = [
        [{"Escape": "Escape"}, {"F1": "F1"}, {"F2": "F2"}, {"F3": "F3"},{"F4": "F4"},{"F5": "F5"},{"F6": "F6"},
           {"F7": "F7"},{"F8": "F8"},{"F9": "F9"},{"F10": "F10"},{"F11": "F11"},{"F12": "F12"}],
        [{"`": "Backquote"}, {"1": "Digit1"}, {"2": "Digit2"}, {"3": "Digit3"}, {"4": "Digit4"}, {"5": "Digit5"},
            {"6": "Digit6"}, {"7": "Digit7"}, {"8": "Digit8"}, {"9": "Digit9"}, {"0": "Digit0"}, {"-": "Minus"},
            {"=": "Equal"}, {"Backspace": "Backspace"}],
        [{"Tab": "Tab"}, {"q": "KeyQ"}, {"w": "KeyW"}, {"e": "KeyE"}, {"r": "KeyR"}, {"t": "KeyT"}, {"y": "KeyY"},
            {"u": "KeyU"}, {"i": "KeyI"}, {"o": "KeyO"}, {"p": "KeyP"}, {"[": "BracketLeft"}, {"]": "BracketRight"}],
        [{"CapsLock": "CapsLock"}, {"a": "KeyA"}, {"s": "KeyS"}, {"d": "KeyD"}, {"f": "KeyF"}, {"g": "KeyG"},
            {"h": "KeyH"}, {"j": "KeyJ"}, {"k": "KeyK"}, {"l": "KeyL"}, {";": "Semicolon"}, {"'": "Quote"}, {"Enter": "Enter"}],
        [{"Shift": "ShiftLeft"}, {"z": "KeyZ"}, {"x": "KeyX"}, {"c": "KeyC"}, {"v": "KeyV"}, {"b": "KeyB"}, {"n": "KeyN"},
            {"m": "KeyM"}, {",": "Comma"}, {".": "Period"}, {"/": "Slash"}, {"Shift": "ShiftRight"}],
        [{"Control": "ControlLeft"}, {"Meta": "MetaLeft"}, {" ": "Space"}, {"ContextMenu": "ContextMenu"}, {"Control": "ControlRight"}]
]

// отрисовываем клавиатуру
let keyboard = '';
for(let key of keyboardArr) {
    keyboard += `<div class="keyboardRow">`;
    for(let button of key) {
        for(let key in button) {
            keyboard += `<span id="button-${button[key]}" class="span" ">${key}</span>`;
        }
    }
    keyboard += `</div>`;
}
document.querySelector('.keyboard').innerHTML = keyboard;
