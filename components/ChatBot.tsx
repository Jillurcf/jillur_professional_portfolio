"use client";

import {
    useRef,
    useState,
    useEffect
} from "react";

import {
    FaRobot,
    FaPaperPlane
} from "react-icons/fa";



export default function ChatBot() {


    const [message, setMessage] = useState("");

    const [answer, setAnswer] = useState(
        "Hi 👋 I am Jillur AI Assistant. Ask me about my skills, projects, experience, or technologies."
    );

    const [loading, setLoading] = useState(false);


    const chatRef = useRef<HTMLDivElement>(null);



    useEffect(()=>{

        chatRef.current?.scrollTo({

            top:
            chatRef.current.scrollHeight,

            behavior:"smooth"

        });

    },[answer]);





    async function sendMessage(){


        if(!message.trim() || loading)
            return;



        const userMessage = message;


        setMessage("");



        try {


            setLoading(true);



            const controller =
                new AbortController();



            const timeout =
                setTimeout(()=>{

                    controller.abort();

                },30000);




            const res =
            await fetch(
                "/api/chatbot",
                {

                    method:"POST",

                    headers:{

                        "Content-Type":
                        "application/json"

                    },


                    body:
                    JSON.stringify({

                        message:userMessage

                    }),


                    signal:
                    controller.signal

                }
            );



            clearTimeout(timeout);




            const data =
            await res.json();




            if(!res.ok){

                throw new Error(
                    data.error ||
                    "AI service unavailable"
                );

            }





            setAnswer(
                data.answer
            );




        }
        catch(error:any){


            console.error(
                "Chatbot Error:",
                error
            );



            if(error.name==="AbortError"){

                setAnswer(
                    "The AI response took too long. Please try again."
                );

            }
            else if(
                error.message?.includes("429") ||
                error.message?.includes("quota")
            ){

                setAnswer(
                    "I am receiving many requests right now. Please wait a moment and try again."
                );

            }
            else{


                setAnswer(

                    "Sorry, I couldn't answer right now. Please try again."

                );

            }



        }
        finally{

            setLoading(false);

        }


    }






    function handleKeyDown(
        e:React.KeyboardEvent<HTMLInputElement>
    ){

        if(
            e.key==="Enter" &&
            !loading
        ){

            sendMessage();

        }

    }





return (

<div
className="
fixed
bottom-6
right-6
z-50
w-[calc(100%-32px)]
sm:w-[380px]
rounded-2xl
border
border-green-400/30
bg-black/85
backdrop-blur-xl
shadow-2xl
p-5
text-white
"
>


{/* HEADER */}

<div
className="
flex
items-center
gap-3
"
>


<div
className="
bg-green-500
text-black
p-3
rounded-full
"
>

<FaRobot size={22}/>

</div>



<div>

<h3
className="
text-green-400
font-bold
"
>

Jillur AI Assistant

</h3>


<p
className="
text-xs
text-gray-400
"
>

Powered by Gemini AI

</p>


</div>


</div>





{/* RESPONSE */}

<div

ref={chatRef}

className="
mt-5
min-h-[100px]
max-h-[220px]
overflow-y-auto
text-sm
leading-6
text-gray-300
"

>


{loading ? (

<div
className="
flex
gap-1
items-center
"
>

<span>Thinking</span>

<span className="animate-bounce">
.
</span>

<span className="animate-bounce">
.
</span>

<span className="animate-bounce">
.
</span>


</div>


)

:

answer

}


</div>






{/* INPUT */}


<div
className="
flex
gap-2
mt-5
"
>


<input

className="
flex-1
bg-gray-900
border
border-gray-700
p-3
rounded-xl
outline-none
focus:border-green-400
"
placeholder="Ask me anything..."

value={message}

disabled={loading}

onChange={
e=>setMessage(
e.target.value
)
}


onKeyDown={
handleKeyDown
}

/>




<button

onClick={sendMessage}

disabled={
loading ||
!message.trim()
}

className="
bg-green-500
text-black
px-4
rounded-xl
hover:scale-105
transition
disabled:opacity-40
"

>


<FaPaperPlane/>


</button>



</div>



</div>

);


}