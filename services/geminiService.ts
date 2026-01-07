
import { GoogleGenAI, Type } from "@google/genai";
import { AIRecommendation, ToyCategory } from "../types";

export const getToyRecommendation = async (userPrompt: string): Promise<AIRecommendation | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user is looking for a toy recommendation with this context: "${userPrompt}". 
      Analyze their needs and recommend a general category of toy. 
      The available categories are: ${Object.values(ToyCategory).join(', ')}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestion: {
              type: Type.STRING,
              description: "A specific toy idea name.",
            },
            reasoning: {
              type: Type.STRING,
              description: "Briefly explain why this is a good choice based on their prompt.",
            },
            toyCategory: {
              type: Type.STRING,
              description: "The closest matching category from the list provided.",
            }
          },
          required: ["suggestion", "reasoning", "toyCategory"]
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text.trim());
      return data as AIRecommendation;
    }
    return null;
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return null;
  }
};
