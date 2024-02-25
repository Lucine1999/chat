import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { mainStyles } from "./styles";
import Button from "../components/button/Button";
import { BASE_URL } from "../constants/constants";
import { fetchData } from "../helpers/helpers";
import ChatInput from "./ChatInput";
import ChatRoom from "./ChatRoom";

function Main() {
  const classes = mainStyles();
  const userRole = useSelector((state) => state.auth.role);
  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const socket = io(BASE_URL);
  const [messageInput, setMessageInput] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    socket.emit("login", user.id);
  }, [socket, user.id]);

  useEffect(() => {
    socket.on("private message", ({ message, userId, time }) => {
      const changingId = userId === user.id ? currentUser.id : userId;

      console.log({ userId, users });
      const firstName =
        user.id === userId
          ? user.firstName
          : users.find(({ id }) => id === userId).firstName;

      setMessages((prevMessages) => {
        const newArr = [
          ...prevMessages[changingId],
          {
            message: `${firstName}: ${message}`,
            userId,
            time,
          },
        ];
        return {
          ...prevMessages,
          [changingId]: newArr,
        };
      });
    });

    return () => {
      socket.disconnect(); // Clean up socket connection when component unmounts
    };
  }, [currentUser?.id, messages, socket, user.firstName, user.id, users]);

  useEffect(() => {
    if (!isAuth) {
      setUsers([]);
    }
  }, [isAuth]);

  useEffect(() => {
    const getUsers = async () => {
      const requestOptions = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetchData(
        "users",
        undefined,
        requestOptions,
        "GET",
      );

      const visibleUsers = response.data.data.filter(
        ({ id }) => id !== user.id,
      );

      setUsers(visibleUsers);
    };
    if (isAuth) {
      getUsers();
    }
  }, [isAuth, user.id]);

  useEffect(() => {
    const newMessages = users.reduce((a, { id }) => ({ ...a, [id]: [] }), {});

    setMessages(newMessages);
  }, [users]);

  const handleMessageSend = async () => {
    if (messageInput.trim() !== "") {
      socket.emit("private message", {
        recipientId: currentUser.id,
        message: messageInput,
        senderId: user.id,
        time: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now(),
        ).getMinutes()}`,
      });

      setMessages((prevMessages) => {
        const newArr = [
          ...prevMessages[currentUser.id],
          {
            message: `${user.firstName}: ${messageInput}`,
            userId: user.id,
            time: `${new Date(Date.now()).getHours()}:${new Date(
              Date.now(),
            ).getMinutes()}`,
          },
        ];
        return {
          ...prevMessages,
          [currentUser.id]: newArr,
        };
      });

      setMessageInput("");
    }
  };

  return (
    <Grid item xs={8}>
      <div className={classes.usersList}>
        {users.map((userData) => (
          <Button
            className={classes.user}
            key={userData.id}
            onClick={() => {
              setCurrentUser(userData);
            }}
            {...(currentUser?.id === userData.id && {
              color: "info",
            })}
          >
            {userData.firstName} {userData.lastName}
          </Button>
        ))}
      </div>
      {userRole === "USER" && currentUser && (
        <div className={classes.chatWrapper}>
          <div className={classes.messagesWrapper}>
            {messages[currentUser.id] && (
              <ChatRoom messages={messages[currentUser.id]} user={user} />
            )}
          </div>
          <ChatInput
            handleMessageSend={handleMessageSend}
            setMessageInput={setMessageInput}
            messageInput={messageInput}
          />
        </div>
      )}
      {userRole === "" && (
        <div className={classes.emptyMessage}>Please signIn/signUp to chat</div>
      )}
    </Grid>
  );
}

export default Main;
