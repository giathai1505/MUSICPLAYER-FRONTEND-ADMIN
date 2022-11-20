export const checkImage = (file) => {
  let err = "";
  if (!file) return (err = "File does not exist.");

  if (file.size > 1024 * 1024)
    // 1mb
    err = "The largest image size is 1mb.";

  if (file.type !== "image/jpeg" && file.type !== "image/png")
    err = "Image format is incorrect.";

  return err;
};

const useImageUpload = () => {
  return async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", "t1pu4dpc");
    formData.append("cloud_name", "dccswqs2m");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dccswqs2m/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data;
  };
};

export default useImageUpload;
