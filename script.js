       function toggleBox() {
        let box = document.querySelector(".box");
        let message = document.getElementById("love-message");
        box.classList.toggle("open");
        message.classList.toggle("hidden");
    }