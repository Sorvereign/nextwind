interface Props {
  title: string;
  description: string;
  image: string;
}

const Hero1: React.FC<Props> = ({ title, description, image }): JSX.Element => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 title-font sm:text-4xl">
            {title}
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center ">
            <a href="#" className="btn inline-flex px-6 py-2 text-lg text-white border-0 rounded focus:outline-none hover:bg-opacity-25 font-bold" style={{ 
              background:"linear-gradient(to right,#3498DB,#8d4ded)",
            }}>
              Get Started
            </a>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
