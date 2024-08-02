export const blobToImgSrc = async (file: Blob) => {
  const reader = new FileReader();

  const preview = (await new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  })) as string;

  return preview;
};
