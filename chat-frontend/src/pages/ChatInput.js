import PropTypes from "prop-types";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { mainStyles } from "./styles";

function ChatInput(props) {
  const { messageInput, handleMessageSend, setMessageInput } = props;
  const classes = mainStyles();

  return (
    <div className={classes.sendButtonWrapper}>
      <Input
        value={messageInput}
        borders="square"
        state="noFocus"
        htmlFor="message"
        name="message"
        type="text"
        size="large"
        className={classes.input}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <Button onClick={handleMessageSend}>&#9658;</Button>
    </div>
  );
}

ChatInput.propTypes = {
  handleMessageSend: PropTypes.func.isRequired,
  messageInput: PropTypes.string,
  setMessageInput: PropTypes.string,
};
export default ChatInput;
