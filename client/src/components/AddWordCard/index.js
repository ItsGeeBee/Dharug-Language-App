import { Box, Card, Typography, TextField } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { styled } from "@mui/system";
import { getAddedWord } from "../../utils/API";
import AddIcon from '@mui/icons-material/Add';

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

export default function AddWordCard(props) {
  const { handleAddWord } = props
  const [word, setWord] = useState('')
  const [definition, setDefinition] = useState('')
  const [example, setExample] = useState('')
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
                onChange={evt => setWord(evt.target.value)}
                value={word}
              />
            </Stack>
            <Stack marginTop={2} marginBottom={1}>
              <Typography variant="h6" color="gray" textAlign="center">
                Enter Meaning
              </Typography>
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                onChange={evt => setDefinition(evt.target.value)}
                value={definition}
              />
            </Stack>
            <Stack>
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
                onChange={evt => setExample(evt.target.value)}
                value={example}
              />
            </Stack>
            <Stack spacing={2} marginTop={4}>
              <Button onClick={() => {
                handleAddWord({ word, definition, example })
              }} variant="outlined" startIcon={<AddIcon />}>
                Add Word
              </Button>
            </Stack>
          </Box>
        </Card>
      </Box>
    </>
  );
}