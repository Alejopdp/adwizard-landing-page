// Create a function that will send data to an API with a POST Request. It must have the following signature => const sendContactUsForm = async (name: string, email: string) and you should use the fetch API to send the data to the following endpoint: https://jsonplaceholder.typicode.com/posts. The data should be sent as a JSON object with the following structure: { name, email }.

// Solution:
// src/api/api.ts
export const sendContactUsForm = async (name: string, email: string) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    });

    return response.json();
}