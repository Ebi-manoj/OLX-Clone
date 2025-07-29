import { convertToDate } from '../utils/convertdate';

const Card = ({ product }) => {
  const { name, price, address, createdAt, imageUrl } = product;
  const date = convertToDate(createdAt);
  console.log(date);
  return (
    <div className="p-3 w-[290px] h-[320px] border-1 border-gray-100 rounded-sm flex flex-col items-center shadow-sm">
      <img src={imageUrl} alt="" className="h-[70%]" />
      <div className="details w-full">
        <h1 className="text-lg font-bold mt-2">{name}</h1>
        <h1 className="font-semibold mt-2">₹{price}</h1>
        <div className="flex text-sm font-semibold justify-between text-gray-500 mt-2">
          <p>{address.toUpperCase()}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
