import OpenAI from "openai";
const formVisionController = async (req: { body: any }, res: any) => {
  console.log(req.body);
  const base64Screenshot = req.body;
  console.log(base64Screenshot);
  const openai = new OpenAI();
  async function main() {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What’s in this image?" },
              {
                type: "image_url",
                image_url: {
                  url: base64Screenshot,
                },
              },
            ],
          },
        ],
      });
      console.log(response.choices[0]);
      return res.status(200).json({ response: response.choices[0] });
    } catch (error) {
      console.log(error);
    }
  }
  main();
};
export { formVisionController };
