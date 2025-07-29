export const uploadImageToCloudinary = async file => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', 'clone-olx');
  data.append('cloud_name', 'dsev8lxjk');

  try {
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dsev8lxjk/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );

    const json = await res.json();
    return json.secure_url;
  } catch (err) {
    console.error('Upload failed', err);
    return null;
  }
};
