import { v4 as uuid } from "uuid";
import { mainStyles } from "./styles";

function ChatRoom(props) {
  const { messages, user } = props;
  const classes = mainStyles();

  return messages.map(({ message, userId, time }) => (
    <div
      style={{
        justifyContent: userId === user.id ? "flex-end" : "flex-start",
      }}
      key={uuid()}
      className={classes.messageWrapper}
    >
      <div className={classes.message}>
        {message}
        <div className={classes.time}>{time}</div>
      </div>
    </div>
  ));
}

export default ChatRoom;
