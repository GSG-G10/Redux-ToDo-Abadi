import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ToDo() {
  const [data, setData] = useState([
    { id: 1, toDoDescription: 'hi Iam Ahmed' },
  ]);
  const [inputValue, setInputValue] = useState(null);
  console.log(inputValue);

  const AddToDo = (inputValue) => {
    if (data.length === 0) {
      data.push({ id: 1, toDoDescription: inputValue });
      setData([...data]);
    } else {
      console.log(inputValue);
      const NewId = data[data.length - 1].id + 1;
      data.push({ id: NewId, toDoDescription: inputValue });
      setData([...data]);
    }
  };

  const deleteToDO = (id) => {
    const deleteData = data.filter((toDoo) => toDoo.id !== id);
    console.log(deleteData);
    setData(deleteData);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="I Will Do This"
        variant="standard"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={() => AddToDo(inputValue)}>
        Add toDo
      </Button>
      <div
        className="toDo-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {data.map((ele) => {
          return (
            <div>
              <span>{ele.toDoDescription}</span>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginLeft: ' 20px' }}
                onClick={() => deleteToDO(ele.id)}
              >
                Delete
              </Button>
            </div>
          );
        })}
      </div>
    </Box>
  );
}

export default ToDo;
