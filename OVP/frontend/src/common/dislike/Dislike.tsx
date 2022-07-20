import { Badge, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import React from "react";
interface IDislike {
  dislike?: number | undefined;
  videoId?: string | undefined;
  userId?: string | undefined;
  username?: String | undefined;
}
const Dislike: React.FC<IDislike> = (props) => {
  const handleSubmit = () => {
    console.log("called4444");
    const res = fetch("http://localhost:8000/api/dislike", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoId: props.videoId,
        userId: props.userId,
        username: props.username,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("ll99", {
      videoId: props.videoId,
      userId: props.userId,
      username: props.username,
    });
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleSubmit}
        startIcon={
          <Badge badgeContent={props.dislike} color="primary">
            <ThumbDownIcon />
          </Badge>
        }
        color="error"
      />
    </>
  );
};

export default Dislike;
