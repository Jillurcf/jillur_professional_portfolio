import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import ChatBot from "@/components/ChatBot";


export const metadata = {
  title: "Jillur Rahman | Full Stack Developer",
  description:
    "React Native and Full Stack Developer building scalable mobile and web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor/>{children}
        <ChatBot/></body>
    </html>
  );
}






// export default function RootLayout({
//  children,
// }:{
//  children: React.ReactNode
// }) {

// return (

// <html lang="en">

// <body>

// <div className="relative min-h-screen">

// <WebGLBackground />


// <main className="relative z-10">

// {children}

// </main>


// </div>


// </body>

// </html>

// )

// }