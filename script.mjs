import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: 'your_API_KEY',
});

// set a timer to fetch and update the quote every 24 hours.(86400000 milliseconds)
setInterval(main() , 86400000);

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "can you send me a motivitinal sentence for today?" },
    { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
    { "role": "user", "content": "Where was it played?" }],
    model: "gpt-3.5-turbo",
  });

  console.log('text', completion.choices[0]);
  document.getElementById("text").innerHTML = completion.choices[0];
}
