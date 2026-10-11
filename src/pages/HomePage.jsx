import Summary from "../components/Summary";


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#F8F9FA]">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-[#1A2E26] tracking-tight mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-[#6C757D] text-sm md:text-base max-w-lg leading-relaxed mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Static Add a Friend Button */}
      <button 
        type="button" 
        className="flex items-center gap-2 bg-[#244D3F] hover:bg-[#1C3D32] text-white font-medium px-6 py-3 rounded-lg shadow-sm transition-colors cursor-pointer"
      >
        <span className="text-lg leading-none">+</span>
        <span>Add a Friend</span>
      </button>
     <Summary></Summary>
    </div>
  );
};

export default HomePage;