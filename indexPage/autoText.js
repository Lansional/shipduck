// 자동적으로 글자가 나오기
let i = 0, j = 0;

const textArray = ["에 대해 알고 싶으신 가요?", " 문화에 관심이 많으신가요?", " 덕후가 되고 싶으신가요?"],
    speed = 100,
    target = document.getElementById("type");

function txtnum() {
    j == textArray.length - 1
        ? j = 0
        : j++
}

function type() {
    i < textArray[j].length
        ? (target.innerHTML += textArray[j].charAt(i), i++, setTimeout(type, speed))
        : remove()
}

function remove() {
    0 <= i
        ? (target.innerHTML = target.innerHTML.slice(0, i), i--, setTimeout(remove, speed))
        : (type(), txtnum())
}

type();