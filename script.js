function addMeal() {
    const input = document.getElementById("meal-input");
    const feedback = document.getElementById("meal-feedback");
    if (input.value.trim() !== "") {
        feedback.style.display = "block";
    }
}

function selectMood(mood) {
    alert("Mood selected: " + mood);
}

function selectPoop(score) {
    alert("Poop score selected: " + score);
}

function sendMessage() {
    const chatInput = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    const msg = chatInput.value.trim();
    if (msg !== "") {
        const userMsg = document.createElement("p");
        userMsg.innerHTML = "<strong>User:</strong> " + msg;
        chatBox.appendChild(userMsg);

        const botMsg = document.createElement("p");
        botMsg.innerHTML = "<strong>Bot:</strong> I'm still learning! 💬";
        chatBox.appendChild(botMsg);

        chatInput.value = "";
    }
}