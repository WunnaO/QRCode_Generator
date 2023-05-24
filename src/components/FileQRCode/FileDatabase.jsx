import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import axios from "axios";

const FileDatabase = () => {
  const [fileLink, setFileLink] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // Fetch the file link based on the QR code data
    fetchFileLink(text);
  }, [text]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setText(URL.createObjectURL(file));
  };

  const fetchFileLink = async (text) => {
    try {
      // Make an HTTP request to retrieve the file link
      const response = await axios.get(`/api/file/${text}`);
      const { fileLink } = response.data;
      console.log(`This is ${fileLink}`);
      setFileLink(fileLink);
    } catch (error) {
      console.error("Error fetching file link:", error);
    }
  };

  return (
    <div>
      <h1>QR Code With File</h1>
      <input
        type="file"
        // accept=".pdf , .png , .jpg ,.jpeg , .kri"
        onChange={handleFileUpload}
      />
      <QRCode value={text} />
      {fileLink && (
        <div>
          <a href={fileLink}>Download File</a>
        </div>
      )}
    </div>
  );
};

export default FileDatabase;
