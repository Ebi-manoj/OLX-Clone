import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { uploadImageToCloudinary } from './cloudinary';

export const uploadProduct = async (productData, user) => {
  const { name, price, description, address, file } = productData;
  const image = file[0];

  const imageURL = await uploadImageToCloudinary(image);

  const product = {
    name,
    price,
    description,
    address,
    imageURL,
    postedby: user,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'products'), product);
  console.log('uploaded');
};
