let readNotif = document.querySelectorAll(".unread");
let dot = document.querySelectorAll(".dot");
let notifCount = document.getElementById("notif");
let mark = document.getElementById("markRead");

let count = 0;
readNotif.forEach(() => {
    count += 1;
})

readNotif.forEach(el => el.addEventListener("click", () => {
    if (el.classList.contains("unread")) {
        el.classList.remove("unread");
        el.lastElementChild.firstElementChild.lastElementChild.classList.remove("dot");
        if (count > 0) {
            count -= 1;
            notifCount.innerHTML = count;
        }
    }

}))

mark.addEventListener("click", () => {
    readNotif.forEach(el => el.classList.remove("unread"));
    dot.forEach(dot => dot.classList.remove("dot"));
    notifCount.innerHTML = 0;
})