import React, { useState } from "react";
import "./App.css";
import FileList from "./Components/FileItem/FileList";
import FileUpload from "./Components/FileUpload/FileUpload";

function App() {
  const [files, setFiles] = useState([
    
  ]);

  const removeFile = (filename) => {
    setFiles(files.filter((file) => file.name !== filename));
  };

  console.log(files);

  return (
    <div className="App">
      <p className="title">Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
