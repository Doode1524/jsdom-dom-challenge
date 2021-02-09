const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const likeList = document.querySelector('.likes');
const pauseButton = document.getElementById('pause');
const submit = document.getElementById('comment-form');

let timer = window.setInterval(increment, 1000);

function increment() {
    let currentTime = parseInt(counter.innerHTML);
    currentTime++;
    counter.innerHTML = String(currentTime);
}

function decrement() {
    let currentTime = parseInt(counter.innerHTML);
    currentTime--;
    counter.innerHTML = String(currentTime);
}

function like() {
    let currentTime = parseInt(counter.innerHTML)

    // if there is currently a list item
    if (!!document.querySelector(`[data-num="${currentTime}"]`)) {
        let listItem = document.querySelector(`[data-num="${currentTime}"]`);
        let span = document.querySelector(`[data-num="${currentTime}"] > span`)
        listItem.innerHTML = `${currentTime} has been liked <span>${parseInt(span.textContent) + 1}</span> times`;
    } else {
        let listItem = document.createElement('li');
        listItem.dataset.num = currentTime;
        listItem.innerHTML = `${currentTime} has been liked <span>1</span> time`;
        likeList.appendChild(listItem);
    };
}

function disableButtons() {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
}

function enableButtons() {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
}

function pause(event) {
    if (event.target.textContent == " pause ") {
        disableButtons();
        window.clearInterval(timer);
        event.target.textContent = " resume ";
    } else {
        enableButtons();
        timer = window.setInterval(increment, 1000);
        event.target.textContent = " pause ";
    }
}

function addComment(event) {
    event.preventDefault()

    let commentText = document.getElementById('comment-input').value;
    let comment = document.createElement('p');
    comment.textContent = commentText;
    document.getElementById('list').appendChild(comment);

    event.target.reset();
}

submit.addEventListener('submit', addComment)
plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', like)
pauseButton.addEventListener('click', pause)