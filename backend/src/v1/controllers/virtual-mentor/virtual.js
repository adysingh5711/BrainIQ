import { PrismaClient } from "@prisma/client";
import { customResponse } from "../../../utils/Response";
const { OpenAIApi, Configuration } = require("openai");
const prisma = new PrismaClient();
const virtualMentor = {
  async openAianswer(req, res, next) {
    try {
      const { prompt } = req.body;
      const completion = await openai.createCompletion({
        prompt: prompt,
        max_tokens: 50, // Adjust this according to your needs
      });
      const answer = completion.choices[0].text;
      customResponse(res, 200, { answer: answer });
    } catch (error) {
      next(error);
    }
  },
};
export default virtualMentor;
