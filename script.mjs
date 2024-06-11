// import OpenAI from "openai";
// const openai = new OpenAI({
//   apiKey: 'your_API_KEY',
// });

// set a timer to fetch and update the quote every 24 hours.(86400000 milliseconds)
// setInterval(main(), 86400000);
main()
async function main() {
  // const completion = await openai.chat.completions.create({
  //   messages: [{ "role": "system", "content": "You are a helpful assistant." },
  //   { "role": "user", "content": "can you send me a motivitinal sentence for today?" },
  //   { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
  //   { "role": "user", "content": "Where was it played?" }],
  //   model: "gpt-3.5-turbo",
  // });
console.log('hey.....');
  const baseUrl = 'https://api.avalai.ir/v1/chat/completions';
  const apiKey = 'aa-zk7aduIZaTbVZnYVowHz8m4qlcTjgHAJKJaYq9fcbEePR8rD';
  const messages = [
    { role: 'system', content: 'Get me a new motivational quote for today ' },
  ];

  const headers = ({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`
  });

  const body = {
    model: 'gpt-3.5-turbo',
    messages
  };

  const response = await fetch(
    baseUrl,
    {
      headers,
      method: "POST",
      body: JSON.stringify(body),
    },
  );

  const data = await response.json();
  const text = data.choices[0].message.content;

  document.getElementById("text").innerHTML = text;
}
