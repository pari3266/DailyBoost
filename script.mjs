main()
async function main() {
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
