
const meter = 100;

const FenceICalculator = () => {
    return (
        <div>
            <FenceI />
        </div>
      );
}
const FenceLCalculator = () => {
    return (
      <div>
          <FenceL />
      </div>
    );
}
const FenceUCalculator = () => {
  return (
    <div>
        <FenceU />
    </div>
  );
}

const FenceType = () => {
    const [fenceType, setFenceType] = React.useState('');

    const handleTypeChange = (e) => {
        setFenceType(e.target.value);
        
    };

    return (
      <div>
        <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="I" onChange={handleTypeChange} name="tvarI" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar I (jedna strana)</label>
            </div>
          </div>
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" value="L" onChange={handleTypeChange} name="tvarU" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar L (dvě strany)</label>
            </div>
          </div>
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-3" type="radio" value="U" onChange={handleTypeChange} name="tvarL" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-3" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar U (tři strany)</label>
            </div>
          </div>
        </div> 
        
      {fenceType === "I" && <FenceICalculator />}
      {fenceType === "L" && <FenceLCalculator />}
      {fenceType === "U" && <FenceUCalculator />}
    </div>
    );
};
// render plotu
//<canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>

