// import { GoogleGenerativeAI } from "@google/generative-ai";


// // Test API from browser
// export async function GET() {

//     return Response.json({
//         message: "Chatbot API is working"
//     });

// }



// export async function POST(req: Request) {

//     try {

//         const { message } = await req.json();


//         if (!message) {

//             return Response.json(
//                 {
//                     error: "Message is required"
//                 },
//                 {
//                     status: 400
//                 }
//             );

//         }



//         const apiKey = process.env.GEMINI_API_KEY;


//         console.log(
//             "Gemini Key:",
//             apiKey
//                 ? `${apiKey.substring(0, 8)}********`
//                 : "Missing"
//         );



//         if (!apiKey) {

//             return Response.json(
//                 {
//                     error:
//                         "Gemini API key is missing"
//                 },
//                 {
//                     status: 500
//                 }
//             );

//         }



//         const genAI =
//             new GoogleGenerativeAI(apiKey);


//         const model =
//             genAI.getGenerativeModel({
//                 model: "gemini-2.0-flash-lite"
//             });

//         const prompt = `

// You are Jillur AI Assistant.

// You represent Jillur Rahman, a senior React Native and Full Stack Developer.

// Answer questions professionally and briefly.

// Profile:

// Name:
// Jillur Rahman

// Role:
// React Native Specialist & Full Stack Developer


// Expertise:

// - React Native
// - Expo
// - React.js
// - Next.js
// - TypeScript
// - JavaScript
// - Redux Toolkit
// - Node.js
// - Express.js
// - MongoDB
// - Web3.js


// Projects:

// 1. Mobile applications using React Native and Expo

// 2. Restaurant Management Application

// 3. Quiz Management Platform

// 4. Blockchain NFT based game


// Career:

// Jillur builds scalable mobile applications,
// modern web applications, backend APIs,
// and production-ready solutions.


// User Question:

// ${message}


// Answer:
// `;



//         const result =
//             await model.generateContent(prompt);



//         const response =
//             result.response.text();



//         return Response.json({

//             answer: response

//         });



//     } catch (error: any) {


//         console.error(
//             "Gemini Error:",
//             error
//         );



//         return Response.json(
//             {

//                 error:
//                     error?.message ||
//                     "Something went wrong"

//             },
//             {
//                 status: 500
//             }
//         );

//     }

// }



import Groq from "groq-sdk";


const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});



export async function POST(req:Request){


const {message}=await req.json();



// const completion =
// await groq.chat.completions.create({

//     messages:[

//         {
//             role:"system",
//             content:
//             `
//             You are Jillur's portfolio assistant.
//             Answer questions about Jillur's skills,
//             projects and experience.
//             `
//         },


//         {
//             role:"user",
//             content:message
//         }

//     ],


//     model:
//     "llama-3.1-8b-instant"


// });

const completion =
await groq.chat.completions.create({

    model:"llama-3.1-8b-instant",

    messages:[


        {
            role:"system",

            content:`

You are Jillur AI Assistant.

You represent Jillur Rahman, a Senior Full Stack Developer.

Always answer questions about Jillur using the information below.


PROFILE:

Name:
Jillur Rahman


Title:
React Native Specialist | Full Stack Developer


Experience:
2+ years of professional experience building mobile and web applications.


Main Technologies:

Frontend:
- React.js
- Next.js
- React Native
- Expo
- TypeScript
- JavaScript
- Redux Toolkit
- Tailwind CSS
- Ant Design


Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API


Mobile:
- React Native CLI
- Expo
- Android/iOS application development
- Native Android modules using Java


Blockchain:
- Web3.js
- Smart contract integration
- NFT based applications



Projects:

1. Deligo Rider (Live Application)

Description:
A real-world rider application focused on location tracking, delivery management, and optimized navigation experience.

Technologies:
React Native, TypeScript, Firebase, Google Maps

Features:
- Real-time location tracking
- Distance calculation using Haversine formula
- Location-based mapping logic
- Performance optimization for smoother user experience
- Scalable mobile architecture


2. Terminal APK

Description:
A Tap-to-Pay contactless payment application that allows users to receive payments without requiring external card readers.

Technologies:
React Native CLI, JavaScript, Stripe

Features:
- User authentication
- Contactless payment workflow
- Stripe payment integration
- Secure transaction handling
- Mobile-first payment experience


3. The Sanctum APK

Description:
A women's health and menstrual management application where users can provide health information and receive personalized guidance.

Technologies:
React Native CLI, JavaScript, Stripe

Features:
- User authentication
- Health information management
- Stripe payment integration
- Personalized health guidance system
- Secure user data handling


4. PawsAndBuy APK

Description:
A marketplace application connecting pet product sellers and buyers.

Technologies:
React Native CLI, JavaScript, Stripe

Features:
- Seller account creation
- Product selling management
- Shop creation functionality
- Authentication system
- Payment integration


5. Audio Tour APK

Description:
A location-based audio tour application that automatically notifies users when audio content is available near their location.

Technologies:
React Native CLI, GPS, Push Notification

Features:
- GPS-based location detection
- Audio content discovery
- Push notifications
- Location-aware user experience
- Authentication system


Technical Expertise:

Mobile Development:
- React Native CLI
- Expo
- Android/iOS application development
- Native Android modules using Java

Frontend:
- React.js
- Next.js
- TypeScript
- Redux
- Tailwind CSS
- Framer Motion

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST APIs

Payment & Services:
- Stripe integration
- Firebase
- Google Maps API
- JWT authentication



Professional Experience:

Jillur works as a React Native developer creating scalable mobile applications.

He focuses on:

- Clean architecture
- Performance optimization
- Production-ready applications
- User experience



Contact:

GitHub:
https://github.com/Jillurcf


LinkedIn:
https://www.linkedin.com/in/jillur-rahman-tushar



Rules:

- Answer only about Jillur.
- Be professional.
- Do not say you don't know Jillur.
- If information is unavailable, say:
"I don't have that information about Jillur yet."

`
        },



        {
            role:"user",

            content:message
        }


    ]

});


return Response.json({

answer:
completion.choices[0].message.content

});


}