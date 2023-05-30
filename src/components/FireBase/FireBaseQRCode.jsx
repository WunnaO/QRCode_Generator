import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { QRCode } from "react-qrcode-logo";
import storage from "./FireBaseConfig";
// import firebase from "firebase/app";

const FireBaseQRCode = () => {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert("Please a file first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // download url
        console.log("Hello");
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log(url);
            setImgUrl(url);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleChange} accept="/images/*" />
        <button onClick={handleFileUpload}>
          Upload to Firebase <p>{percent}% done</p>
        </button>
        <QRCode value={imgUrl} />
      </div>
    </>
  );
};

export default FireBaseQRCode;
