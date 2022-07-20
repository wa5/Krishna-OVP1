import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { Badge, Button } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
interface Ilike {
  like: number | undefined;
  videoId?:string|undefined,
    userId?:string|undefined,
    username?:String|undefined,
}

const Like2: React.FC<Ilike> = (props) => {
    const [open, setOpen] = React.useState(false);
  let [like, setLike] = useState<number>();
  const handleClickOpen=()=>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={
          <Badge badgeContent={props.like} color="success">
            <ThumbUpAltIcon />
          </Badge>       
        }
      />
       <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Login to Activate like and Dislike"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              
              <Link to="/loginpage">click on this link to go to login page</Link>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
           
            
          </DialogActions>
        </Dialog>
    </>
  );
};

export default Like2;
