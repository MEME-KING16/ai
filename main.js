fetch('trained-model.json')
  .then(response => response.json())
  .then(trainedModel => {
    const network = new brain.recurrent.LSTM();
    network.fromJSON(trainedModel);

    // Now you can use the network for predictions
    const output = network.run('Some input');
    console.log(output);
  });


function send() {
  let msg = document.getElementById("text")
  let chat = document.getElementById("chat")
// Test the network
const output = network.run(msg.value.toLowerCase());
chat.innerHTML += `You: ${msg.value}<br><br>Chat: ${output}<br>`
msg.value = ""
}
