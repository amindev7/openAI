const openai = require("../config/openaiConfig");

const openaiMetaData = async (name) => {
  const description = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        context: `come up with a description for the project name ${name}`,
      },
    ],
    max_tokens: 100,
  });

  console.log(description.data.choices[0].message);
};

module.exports = { openaiMetaData };
