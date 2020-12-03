import React from "react";
import { Button } from "@material-ui/core";
import db from "./firebase";

function Msg(props) {
  return (
    <div>
      {
        <li>
          {props.text}&nbsp;&nbsp;&nbsp;
          {
            /* <Button
            variant="contained"
            color="primary"
            onClick={() =>
              props.color
                ? db
                    .collection("messages")
                    .doc(props.id)
                    .update({ completed: false })
                : db
                    .collection("messages")
                    .doc(props.id)
                    .update({ completed: true })
            }
            style={props.color ? { opacity: 0.3 } : { opacity: 1 }}
          >
            done
          </Button>
          */
            <Button
              variant="contained"
              color="secondary"
              onClick={() => db.collection("messages").doc(props.id).delete()}
            >
              delete
            </Button>
          }
        </li>
      }
    </div>
  );
}

export default Msg;
