const app = document.querySelector(".app");
const button = document.getElementById("send-message");
const input = document.getElementById("message-input");

function renderMessage() {
		let messageContainer = document.querySelector(".messages");
			let el = document.createElement("div");
			el.setAttribute("class", "my-message");
			el.innerHTML = input.value;
			messageContainer.appendChild(el);
			input.value = "";
		// Scroll chat to end
		messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;

	}
	function addListAfterKeypress(event) {
	if (input.value > 0 && event.keyCode === 13) {
		renderMessage();
	}
}


input.addEventListener("keypress", addListAfterKeypress)
button.addEventListener("click", renderMessage);