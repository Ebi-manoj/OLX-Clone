const Card = ({ product }) => {
  return (
    <div className="p-3 w-[290px] h-[320px] border-1 border-gray-100 rounded-sm flex flex-col items-center shadow-sm">
      <img
        src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H.jpeg"
        alt=""
        className="h-[70%]"
      />
      <div className="details w-full">
        <h1 className="text-lg font-bold mt-2">Iphone 16</h1>
        <h1 className="font-semibold mt-2">₹12000</h1>
        <div className="flex text-sm font-semibold justify-between text-gray-500 mt-2">
          <p>KOCHI</p>
          <p>JULY 08</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
