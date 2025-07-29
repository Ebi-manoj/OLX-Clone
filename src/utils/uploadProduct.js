import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { uploadImageToCloudinary } from './cloudinary';
import { toast } from 'react-toastify';

export const uploadProduct = async (productData, user) => {
  const { name, price, description, address, file } = productData;
  const image = file[0];

  try {
    const imageUrl = await uploadImageToCloudinary(image);

    const product = {
      name,
      price,
      description,
      address,
      imageUrl,
      postedby: user,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, 'products'), product);
    toast.success('Your Add succesfully posted');
    return true;
    console.log('uploaded');
  } catch (error) {
    toast.success('Failed to Upload Post');
    return false;
  }
};
