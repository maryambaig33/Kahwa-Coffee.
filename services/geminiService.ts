import { GoogleGenAI, Type, Schema } from "@google/genai";
import { RecommendationResult } from "../types";

export const getCoffeeRecommendation = async (
  userPreference: string,
  menuItemsJson: string
): Promise<RecommendationResult> => {
  try {
    // Initialize the client inside the function to avoid top-level execution issues
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = "gemini-2.5-flash";
    
    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        coffeeName: {
          type: Type.STRING,
          description: "The exact name of the coffee from the provided menu.",
        },
        reasoning: {
          type: Type.STRING,
          description: "A warm, barista-style explanation of why this coffee fits the user's mood.",
        },
        customNote: {
          type: Type.STRING,
          description: "A small customization tip (e.g., 'Ask for extra foam').",
        }
      },
      required: ["coffeeName", "reasoning", "customNote"],
    };

    const prompt = `
      You are an expert barista at Kahwa Coffee.
      The customer says: "${userPreference}".
      
      Here is our menu in JSON format:
      ${menuItemsJson}
      
      Select the best match from the menu. If nothing matches perfectly, pick the closest option and suggest a customization.
      Be warm, inviting, and sophisticated in your tone.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        temperature: 0.7,
      },
    });

    // Correctly accessing the text property directly
    const jsonText = response.text;
    
    if (!jsonText) {
      throw new Error("No response from AI Barista.");
    }

    const result = JSON.parse(jsonText) as RecommendationResult;
    return result;

  } catch (error) {
    console.error("Error fetching recommendation:", error);
    throw error;
  }
};