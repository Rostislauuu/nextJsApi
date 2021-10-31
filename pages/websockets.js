import React, { useState, useRef } from "react";

import { postMessage } from "../api/index";

import styles from "../styles/Websockets.module.scss";

const WebSockets = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [userMessages, setUserMessages] = useState([]);
    const [userMessage, setUserMessage] = useState("");
    const [username, setUsername] = useState("");

    const socket = useRef(null);

    const connectToSocket = () => {
        if (!username) {
            return;
        }

        socket.current = new WebSocket("wss://evening-citadel-13160.herokuapp.com/cable");

        socket.current.onopen = () => {
            setIsConnected(true);
            const message = {
                command: "subscribe",
                identifier: JSON.stringify({
                    channel: "ChatRoomChannel",
                    room_id: 1
                })
            }

            socket.current.send(JSON.stringify(message))
        }

        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data);

            if (typeof message.message === "object") {
                setUserMessages(prev => [message, ...prev]);
            }
        }

        socket.current.onclose= () => {
            console.log("Socket was closed")
        }

        socket.current.onerror = () => {
            console.log("Oooooops. Got error");
        }
    }

    const sendMessage = async () => {
        if (!userMessage) {
            return;
        }

        const message = {
            message: userMessage,
            userId: 1,
        }

        postMessage(message);
        setUserMessage("");
    }

    if (!isConnected) {
        return (
            <div className={styles["form-container"]}>
                <div className={styles["form"]}>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        type="text"
                        placeholder="Enter your email"
                        className={styles["input"]}
                    />
                    <button onClick={connectToSocket} className={styles["btn"]}>
                        Enter chat
                    </button>
                </div>
            </div>
        )
    }

    return (
       <React.Fragment>
            <div className={styles["container"]}>
                {!!userMessages.length ? (
                    <div>
                        <div>
                            <div>
                                {userMessages.map(userMessage => {
                                    return (
                                        <div key={userMessage.message.id}>
                                            {
                                                <div>
                                                    {userMessage.message.message}
                                                </div>
                                            }
                                        </div>
                                    )
                                }
                                
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        Type some message here
                    </div> 
                )}
            </div>
            <div className={styles["send-message-form"]}>
                <input
                  value={userMessage}
                  onChange={e => setUserMessage(e.target.value)}
                   type="text"
                   className={styles["send-message-form--input"]}
                />

                <button onClick={sendMessage} className={styles["send-message-form--btn"]}>
                    Send
                </button>
            </div>
       </React.Fragment>
    )
}

export default WebSockets;
