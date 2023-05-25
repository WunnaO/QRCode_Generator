import { useState } from "react";

const FireBaseQRCode = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.value);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <img src={file} />
      <button>Upload to Firebase</button>
    </div>
  );
};

export default FireBaseQRCode;
