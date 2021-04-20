interface Props {
  message: string;
  description: string;
}


const PricingSection: React.FC<Props> = ({ message, description }) => {
  return (
    <section className="relative w-full">
      <div className="items-center">
        <div className="mt-16 bg-gray-200 items-center p-9 text-white font-extrabold" style={{background:"linear-gradient(to right,#3498DB,#8d4ded)"}}>
          
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
