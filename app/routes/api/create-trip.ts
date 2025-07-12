import { GoogleGenerativeAI } from "@google/generative-ai";
import { ID } from "appwrite";
import { parseMarkdownToJson } from "lib/utils";
import { data, type ActionFunctionArgs } from "react-router";
import { appwriteconfig, database } from "~/appwrite/client";
import { interests } from "~/constants";

export const action = async ({ request }: ActionFunctionArgs) => {
  const {
    country,
    numberOfDays,
    travelStyle,
    interest,
    budget,
    groupType,
    userId,
  } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY;

  try {
    const prompt = `
🌍🧳 **Travel Planner Assistant Request**

You are a professional AI travel planner helping a user plan an unforgettable ${numberOfDays}-day trip to **${country}**. Your goal is to craft a **vibrant, personalized, and realistic** itinerary that blends adventure, rest, local flavor, and culture, based on the user's preferences below.

🧑‍💼 **User Profile**
- 🧑‍🤝‍🧑 Group Type: ${groupType}
- 💸 Budget Level: ${budget} (e.g., shoestring, mid-range, luxury)
- 🛫 Travel Style: ${travelStyle} (e.g., relaxed, fast-paced, adventurous, cultural)
- 🎯 Interests: ${interest} (e.g., history, nature, food, nightlife, beaches, museums, hiking, shopping)
- 🗓️ Duration: ${numberOfDays} days
- 📌 Country: ${country}
- 🧾 Internal userId (no need to include in output): ${userId}

---

🔍 **Itinerary Output Structure**

🎯 **Overview**  
Start with a short summary of what this trip will offer: e.g., “Explore the majestic landscapes of Iceland through waterfalls, hot springs, and Viking history!”

🗓️ **Day-by-Day Breakdown**  
For **each day**, include:
- 🌅 **Morning**: Activities (e.g., guided tours, hiking, markets)
- 🌞 **Afternoon**: Local experiences (e.g., museums, parks, food stops)
- 🌙 **Evening**: Relaxation or nightlife options
- 🍽️ **Dining Suggestions**: Recommend local dishes and restaurants
- 🚶 **Transport Mode**: Mention how the user can move (walk, metro, bus, rental)
- 💡 **Tips or Warnings**: Language, safety, customs, or booking tips

🏡 **Accommodation Recommendations**
- Suggest 1–2 lodging options per location based on budget and group type (e.g., hostels, B&Bs, hotels)
- Mention amenities that suit their travel style

🍴 **Must-Try Local Foods**
- Include 3–5 local meals/snacks per region and where to try them

🚗 **Transportation Strategy**
- Best ways to get around in the country (e.g., metro cards, bike rentals, car hire)
- Mention if public transport is safe, available, and affordable

🎭 **Cultural Etiquette**
- Customs, tipping, dress codes, or behaviors to note
- Local greetings or helpful phrases in the local language

🗺️ **Hidden Gems & Pro Tips**
- Add lesser-known but amazing spots for bonus value
- Include insider tips for skipping queues, saving money, or local secrets

💰 **Estimated Daily Expenses**
- Rough breakdown by accommodation, food, transport, and activity
- Tailor this to the budget level provided

---

📌 **Format & Tone**
- Use clear markdown formatting with bold titles and bullet points
- Use **friendly, exciting tone** with **relevant emojis** for each section
- Avoid overloading — keep descriptions clear and inspiring

⚠️ **Important**
- Do not fabricate places that don’t exist
- Be realistic with time and budget
- Avoid activities that require booking months in advance unless noted

🎉 Let’s make this a trip to remember!
`;

    const textResult = await genAI
      .getGenerativeModel({ model: "gemini-2.0-flash" })
      .generateContent([prompt]);

    const trip = parseMarkdownToJson(textResult.response.text());

    const imgResponse = await fetch(
      `https://api.unsplash.com/search/photos?qQuery=${country} ${interests} ${travelStyle}&client_id=${unsplashApiKey}`
    );

    const imageUrls = (await imgResponse.json()).results
      .slice(0, 3)
      .map((result: any) => result.urls?.regular || null);

    const result = await database.createDocument(
      appwriteconfig.databaseId,
      appwriteconfig.databaseId,
      appwriteconfig.tripCollectionId,
      ID.unique(),
      {
        tripDetails: JSON.stringify(trip),
        createdAt: new Date().toISOString(),
        imageUrls,
        userId,
      }
    );

    return data({ id: result.$id });
  } catch (e) {
    console.error("error generating travel plan", e);
  }
};
