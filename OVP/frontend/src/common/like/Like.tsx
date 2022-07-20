import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Badge, Button } from "@mui/material";
import { useState } from "react";
interface Ilike {
  like?: number | undefined;
  videoId?:string|undefined,
    userId?:string|undefined,
    username?:String|undefined,
}

const Like: React.FC<Ilike> = (props) => {
  let [like, setLike] = useState<number>();
  const handleSubmit = () => {
    console.log('called4444')
    const res = fetch("http://localhost:8000/api/like", {
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
    console.log("ll99",{
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
          <Badge badgeContent={props.like} color="success">
            <ThumbUpAltIcon />
          </Badge>
        }
      />
    </>
  );
};

export default Like;
