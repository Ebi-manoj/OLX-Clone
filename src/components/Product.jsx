const Product = () => {
  return (
    <div className="flex justify-center w-full min-h-screen p-10 px-[5%]">
      <div className="flex justify-center h-[500px] shadow-lg">
        <div className="image w-1/2 h-full flex-1/2">
          <img
            src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H.jpeg"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="product-details flex-1/2 pt-10 px-5">
          <h1 className="text-2xl font-bold mb-2">Name</h1>
          <h3 className="font-semibold mb-2 text-xl">₹12000</h3>
          <p className="text-[#292929] mb-10 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
            eligendi.
          </p>
          <p className="text-[#8D90A1] mb-2">Kochi India</p>
          <p className="text-[#8D90A1] mb-2">Posted on July 08</p>
          <p className="text-[#8D90A1] mb-2">Posted by Ebi</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
