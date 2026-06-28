"use client";

import {
  useRef,
  useState,
  useEffect
} from "react";

import {
  FaRobot,
  FaPaperPlane,
  FaTimes
} from "react-icons/fa";

import { motion } from "framer-motion";



export default function ChatBot() {


  const [message, setMessage] = useState("");

  const [answer, setAnswer] = useState(
    "Hi 👋 I am Jillur AI Assistant. Ask me about my skills, projects, experience, or technologies."
  );

  const [loading, setLoading] = useState(false);


  const [isOpen, setIsOpen] = useState(true);



  const chatRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    chatRef.current?.scrollTo({

      top: chatRef.current.scrollHeight,

      behavior: "smooth"

    });

  }, [answer]);







  async function sendMessage() {


    if (!message.trim() || loading)
      return;



    const userMessage = message;


    setMessage("");



    try {


      setLoading(true);



      const controller =
        new AbortController();



      const timeout =
        setTimeout(() => {

          controller.abort();

        }, 30000);




      const res =
        await fetch(
          "/api/chatbot",
          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },


            body: JSON.stringify({

              message:userMessage

            }),


            signal: controller.signal

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







  // Closed chatbot button

  if(!isOpen){


    return (

      <motion.button

        initial={{
          scale:0
        }}

        animate={{
          scale:1
        }}

        onClick={()=>
          setIsOpen(true)
        }


        className="
        fixed
        bottom-6
        right-5
        z-50

        w-14
        h-14

        rounded-full

        bg-green-500

        text-black

        flex
        items-center
        justify-center

        shadow-xl

        hover:scale-110

        transition
        "

      >

        <FaRobot size={24}/>


      </motion.button>

    );


  }







return (

<motion.div


drag="y"


dragConstraints={{

  top:0,

  bottom:200

}}



onDragEnd={(event,info)=>{


  // Mobile swipe down close

  if(info.offset.y > 100){

    setIsOpen(false);

  }


}}



initial={{

  opacity:0,

  y:50

}}



animate={{

  opacity:1,

  y:0

}}



className="

fixed

bottom-20
sm:bottom-6

right-3
sm:right-6

left-3
sm:left-auto

z-50

sm:w-[380px]

max-w-[420px]

rounded-2xl

border

border-green-400/30

bg-black/85

backdrop-blur-xl

shadow-2xl

p-3
sm:p-5

text-white

touch-pan-y

"

>





{/* HEADER */}


<div

className="

flex

items-center

justify-between

"

>


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

p-2.5

rounded-full

"

>


<FaRobot size={20}/>


</div>





<div>


<h3

className="

text-green-400

font-bold

text-sm

sm:text-base

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





{/* MOBILE CLOSE BUTTON */}


<button

onClick={()=>setIsOpen(false)}

className="

md:hidden

text-gray-400

hover:text-red-400

transition

"

>

<FaTimes size={18}/>


</button>




</div>







{/* RESPONSE */}



<div


ref={chatRef}


className="

mt-4

min-h-[60px]

sm:min-h-[80px]

max-h-[120px]

sm:max-h-[220px]

overflow-y-auto

text-sm

leading-6

text-gray-300

break-words

"

>


{

loading ?


(

<div

className="

flex

items-center

gap-1

"

>

<span>
Thinking
</span>


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

mt-4

"

>


<input


className="

flex-1

min-w-0

bg-gray-900

border

border-gray-700

px-3

py-2.5

rounded-xl

outline-none

text-sm

focus:border-green-400

"


placeholder="Ask me anything..."



value={message}



disabled={loading}



onChange={

e=>

setMessage(
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

flex

items-center

justify-center

bg-green-500

text-black

w-11

h-11

rounded-xl

hover:scale-105

transition

disabled:opacity-40

"


>


<FaPaperPlane size={16}/>



</button>




</div>





</motion.div>


);


}