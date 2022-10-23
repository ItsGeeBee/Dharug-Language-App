import { Box, Card, Typography, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
// import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import { styled } from "@mui/system";
import { getAddedWord } from "../../utils/API";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import EditIcon from '@mui/icons-material/Edit';

const AddedWordCard = styled(getAddedWord)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

// export default function AddedWordCard(props) {

export default function AddWordCard() {
  const [addWord, setaddedWords] = useState(false);
  return (
    <>
      <Box justifyContent="center" alignItems="center" m={8}>
        <Card sx={{ minWidth: 275 }}>
          <Box justifyContent="center" alignItems="center" m={8}>
            <Stack spacing={2}>
              <Typography variant="h6" color="gray" textAlign="center">
                Enter Word
              </Typography>
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                fullWidth
              />
            </Stack>
            <Stack marginTop={2} marginBottom={1}>
              <Typography variant="h6" color="gray" textAlign="center">
                Enter Meaning
              </Typography>
            </Stack>
            <Stack>
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <Typography
                variant="h6"
                color="gray"
                textAlign="center"
                marginTop={2}
              >
                Word Example
              </Typography>
              <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                fullWidth
                maxRows={4}
                variant="filled"
              />
            </Stack>
            <Stack spacing={2} marginTop={4}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button>
              <Button variant="outlined" startIcon={<PostAddOutlinedIcon />}>
                Post
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>
  );
}

// export { AddWordCard };

// import "./style.css";

// export default function Write() {
//   return (
//     <div className="write">
//       <form className="writeForm">
//         <div className="writeFormGroup">
//           <label htmlFor="fileInput">
//             <i className="writeIcon fas fa-plus"></i>
//           </label>
//           <input id="fileInput" type="file" style={{ display: "none" }} />
//           <input
//             className="writeInput"
//             placeholder="Title"
//             type="text"
//             autoFocus={true}
//           />
//         </div>
//         <div className="writeFormGroup">
//           <textarea
//             className="writeInput writeText"
//             placeholder="Tell your story..."
//             type="text"
//             autoFocus={true}
//           />
//         </div>
//         <button className="writeSubmit" type="submit">
//           Publish
//         </button>
//       </form>
//     </div>
//   );
// }
