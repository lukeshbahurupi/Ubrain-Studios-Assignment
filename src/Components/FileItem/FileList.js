import React from "react";
import FileItem from "./FileItem";
import classes from "./FileList.module.css";
export default function FileList({ files, removeFile }) {
  const deleteFileHandler = (_name) => {
    fetch(`https://update-delete-cce11-default-rtdb.firebaseio.com/upload.json`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("failed user");
      });
    // console.log(_name);
    removeFile(_name);
  };

  return (
    <ul className={classes["file-list"]}>
      {files &&
        files.map((file) => (
          <FileItem
            key={file.name}
            file={file}
            deleteFile={deleteFileHandler}
          />
        ))}
    </ul>
  );
}
