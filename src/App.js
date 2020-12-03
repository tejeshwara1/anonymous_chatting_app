import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import { useState, useEffect } from "react";
import Msg from "./Msg";
import db from "./firebase";
import firebase from "firebase";
const styles = {
  btn: {
    marginLeft: 20,
    marginTop: 10,
  },
};

function App() {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [position, setposition] = useState({});
  if (msgs.length > 10) {
    db.collection("messages").doc(msgs.pop()["id"]).delete();
  }

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMsgs(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const addmsg = (event) => {
    event.preventDefault();
    const randomString = Math.random().toString(36).substring(7);
    db.collection("messages").doc(randomString).set({
      text: input,
      id: randomString,
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <p>{position.latitude}</p>
      <p>{position.longitude}</p>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Type Message</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          {/* <FormHelperText id="my-helper-text">hahah</FormHelperText> */}
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={addmsg}
          type="submit"
          disabled={!input}
          style={styles.btn}
        >
          add
        </Button>
      </form>
      <ul style={{ listStyleType: "none" }}>
        {msgs.map((msg) => (
          <Msg key={msg.id} text={msg.text} id={msg.id} color={msg.completed} />
        ))}
      </ul>
    </div>
  );
}

export default App;
