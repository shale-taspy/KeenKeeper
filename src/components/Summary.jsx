const Summary = () => {
  const stats = [
    { label: 'Total Friends', count: 12 },
    { label: 'On Track', count: 5 },
    { label: 'Need Attention', count: 7 },
    { label: 'Interactions This Month', count: 14 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[140px]"
          >
            <span className="text-3xl font-bold text-[#244D3F] mb-2">
              {item.count}
            </span>
            <span className="text-gray-500 text-sm font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Bottom Separator Line */}
      <div className="border-b border-gray-200/60 mt-12"></div>
    </div>
  );
};

export default Summary;