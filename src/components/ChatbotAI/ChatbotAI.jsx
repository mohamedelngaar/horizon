// import { useState, useEffect } from "react";

// import "./ChatbotAI.css";

// const ChatbotAI = () => {
//   const [value, setValue] = useState(null);
//   const [message, setMessage] = useState(null);
//   const [previousChats, setPreviousChats] = useState([]);
//   const [currentTitle, setCurrentTitle] = useState(null);

//   const createNewChat = () => {
//     setMessage(null);
//     setValue("");
//     setCurrentTitle(null);
//   };

//   const handleClick = (uniqueTitle) => {
//     setCurrentTitle(uniqueTitle);
//     setMessage(null);
//     setValue("");
//   };

//   const getMessages = async () => {
//     const options = {
//       method: "POST",
//       body: JSON.stringify({
//         message: value,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:8000/completions",
//         options
//       );
//       const data = await response.json();
//       // console.log(data);
//       setMessage(data.choices[0].message);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     console.log(currentTitle, value, message);

//     if (!currentTitle && value && message) {
//       setCurrentTitle(value);
//     }
//     if (currentTitle && value && message) {
//       setPreviousChats((prevChats) => [
//         ...prevChats,
//         { title: currentTitle, role: "user", content: value },
//         { title: currentTitle, role: message.role, content: message.content },
//       ]);
//     }
//   }, [message, currentTitle]);

//   const currentChat = previousChats.filter(
//     (previousChat) => previousChat.title === currentTitle
//   );
//   const uniqueTitles = Array.from(
//     new Set(previousChats.map((previousChat) => previousChat.title))
//   );

//   return (
//     <div className="chat-ai-app">
//       {/* SIDEBAR */}
//       <section className="side-bar">
//         <button className="new-chat-btn" onClick={createNewChat}>
//           + New Chat
//         </button>
//         <ul className="history">
//           {/* <li>BLUGH</li> */}
//           {uniqueTitles?.map((uniqueTitle, index) => (
//             <li key={index} onClick={() => handleClick(uniqueTitle)}>
//               {uniqueTitle}
//             </li>
//           ))}
//         </ul>
//         <nav className="sidebar-nav">
//           <p>Made by Horizon Harbour</p>
//         </nav>
//       </section>
//       {/* SIDEBAR */}
//       {/* MAIN PART OF THE APP */}
//       <section className="main">
//         {!currentTitle && <h1>Horizon Harbour AI</h1>}
//         <ul className="feed">
//           {currentChat?.map((chatMessage, index) => (
//             <li key={index}>
//               <p className="role">{chatMessage.role}</p>
//               <p>{chatMessage.content}</p>
//             </li>
//           ))}
//         </ul>
//         <div className="bottom-section">
//           <div className="input-container">
//             <input
//               className="prompt-input"
//               value={value}
//               onChange={(e) => setValue(e.target.value)}
//             />
//             <div id="submit" onClick={getMessages}>
//               👉
//             </div>
//           </div>
//           <p className="info">
//             This was made possible by Horizon Harbour. Our goal is to give you
//             all an AI chatbot for free interaction.
//           </p>
//         </div>
//       </section>
//       {/* MAIN PART OF THE APP */}
//     </div>
//   );
// };

// export default ChatbotAI;

import { useState } from "react";

import "./ChatbotAI.css";

const ChatbotAI = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const surpriseOptions = [
    "Who won the latest Nobel Peace Prize?",
    "Where does pizza come from?",
    "How do you make a BLT sandwich?",
  ];

  const surprise = () => {
    const randomValue =
      surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
    setValue(randomValue);
  };

  const getResponse = async () => {
    if (!value) {
      setError("Error! Please ask a question!");
      return;
    }

    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("http://localhost:8000/gemini", options);
      const data = await response.text();
      console.log(data);
      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        {
          role: "user",
          parts: [{ text: value }],
        },
        {
          role: "model",
          parts: [{ text: data }],
        },
      ]);

      setValue("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong! Please try again later.");
    }
  };

  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

  return (
    <>
      <div className="chatai-app">
        <p>
          What do you want to know?
          <button
            className="surprise"
            onClick={surprise}
            disabled={!chatHistory}
          >
            Surprise me!
          </button>
        </p>
        <div className="input-chatai-container">
          <input
            value={value}
            placeholder="When is Christmas...?"
            onChange={(e) => setValue(e.target.value)}
          />
          {!error && <button onClick={getResponse}>Ask me</button>}
          {error && <button onClick={clear}>Clear</button>}
        </div>
        {error && <p>{error}</p>}
        <div className="search-result">
          {chatHistory?.map((chatItem, _index) => (
            <div key={_index}>
              <p className="answer">
                {chatItem.role}: {chatItem.parts[0].text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatbotAI;
