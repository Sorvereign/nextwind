interface Props {
  message: string;
  description: string;
}


const PricingSection: React.FC<Props> = ({ message, description }) => {
  return (
    <section className="relative w-full">
      <div className="items-center">
        <div className="mt-16 bg-gray-200 items-center p-9" style={{background:"linear-gradient(to right,#3498DB,#8d4ded)"}}>
        <form>
          <div className="mt-8 sm:mt-0 text-center text-white">
            <h1 className="text-2xl lg:text-3xl leading-none font-bold">
                Be a plus in our newsletter
            </h1>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <input type="email" name="EMAIL" className="form-control form-control-lg rounded p-3 text-gray-500" />
            <button className="btn btn-primary text-white btn-lg-position-absolute text-nowrap p-2 border hover:bg-indigo-900 hover:bg-opacity-50 h-200 d-flex font-bold rounded" type="submit"
             
            >
               Subscribe
            </button>
          </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
