import { useState } from "react";
import placeholder from "../assets/placeholder.svg";

export const ImageUpload = ({ url, setUrl }) => {
  // const [preview, setPreview] = useState(null);
  // const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await fetch(import.meta.env.VITE_APP_CLOUDINARY_URL, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setUrl(data.secure_url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // const handleResetClick = () => {
  //   setPreview(null);
  //   setImage(null);
  // };

  return (
    <div>
      <header>
        <p>
          <span>Click on upload a file</span>
        </p>
        <input
          id="hidden-input"
          type="file"
          className="hidden"
          onChange={handleUpload}
          accept="image/*"
        />
        <label htmlFor="hidden-input">
          {loading && (
            <div className="flex items-center justify-center gap-2">
              <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
            </div>
          )}
          <div className="mt-2 border-4 border-dashed rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
            <img
              src={url ? url : placeholder}
              className="h-[160px] w-[160px] object-cover"
            />
          </div>
        </label>

        {/* <div className="flex justify-center mt-5 mx-2 max-w-xs">
          {preview && <img src={preview} alt="preview" className="max-w-sm" />}
        </div> */}
      </header>
    </div>
  );
};
