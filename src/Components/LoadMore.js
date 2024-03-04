
const LoadMore = () => {
  return (
    <>
     <div className="bg-lime-400 text-black p-0 md:p-2 lg:p-2 mx-2 rounded-lg xl:p-2 text-center">
        <h2 className=" md:text-0xl lg:text-2xl xl:text-4xl font-bold">Load more...</h2>
      </div>
      <div className=" text-white bg-black border-2 border-green-400 rounded-xl mx-2 my-2  p-4 md:p-2 lg:p-2 xl:p-2 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-4">Subscribe to our Newsletter</h2>
        <p className="text-sm md:text-base lg:text-lg xl:text-xl mb-4">
          Subscribe to this newsletter to get regular updates about interesting
          and secret upcoming NFT projects and events that are coming soon
          exclusively on our site. Become the First to Know about NFT launch,
          NFT Drops, Giveaways, Auctions.
        </p>
        <input className="input-field bg-black border-2 border-green-500 rounded-md  p-2 n mb-4" type="email" placeholder="Email here" />
        <button className="btn-sub bg-green-500 text-black font-bold px-4 py-2">Subscribe</button>
      </div>
    </>
  );
};

export default LoadMore;
