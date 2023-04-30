// Get the value of the input field with id "user-input"
// const userInput = document.getElementById("user-input").value;

function sendToOpenAI(userInput) {
    // Secret Key
    const apiKey = "sk-$KEY";

    // Set up the data to send in the request body
    const data = {
        model: "gpt-3.5-turbo",
        // messages: [{ role: "user", content: "How do you say hello in Spanish?" }],
        messages: [{ role: "user", content: userInput }],
        // Randomness of answer (higher = more random)
        temperature: 0.5,
        max_tokens: 100,
    };

    // Set up the request headers
    const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    };

    // Make the request to the OpenAI API
    fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        // Display the OpenAI API response in the console
        console.log(data);
        const responseElement = document.getElementById("response");
        responseElement.textContent = data.choices[0].message.content;
        console.log(responseElement.textContent);

    })
    .catch((error) => {
        // Display any errors in the console
        console.error(error);
    });
}