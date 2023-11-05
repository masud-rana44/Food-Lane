import { useState } from "react";
import { Image } from "cloudinary-react";

export const ImageUpload = ({ url, setUrl }) => {
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };

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
          onChange={handleImageChange}
          accept="image/*"
        />
        <label htmlFor="hidden-input">
          <div className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
            Upload a file
          </div>
        </label>

        <div className="flex justify-center mt-5 mx-2 max-w-xs">
          {preview && <img src={preview} alt="preview" className="max-w-sm" />}
        </div>
      </header>
      <div className="flex justify-end pb-8 pt-6 gap-4">
        <button
          onClick={handleUpload}
          type="button"
          className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
          disabled={!image}
        >
          Upload now
        </button>
        <button
          onClick={handleResetClick}
          type="button"
          className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
        >
          Reset
        </button>
      </div>
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
          <span>Processing...</span>
        </div>
      ) : (
        url && (
          <div className="pb-8 pt-4">
            <Image
              cloudName={import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME}
              publicId={url}
            />
          </div>
        )
      )}
    </div>
  );
};
