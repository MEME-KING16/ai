let network;
fetch('trained-model.json')
  .then(response => response.json())
  .then(trainedModel => {
    network = new brain.recurrent.LSTM();
    network.fromJSON(trainedModel);
  });


function send() {
  let msg = document.getElementById("text")
  let chat = document.getElementById("chat")
// Test the network
const output = network.run(msg.value.toLowerCase());
chat.innerHTML += `You: ${msg.value}<br><br>Chat: ${output}<br>`
msg.value = ""
}
