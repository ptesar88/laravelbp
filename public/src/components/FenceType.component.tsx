
const { useState, useEffect, useRef } = React;

const meter = 100;

const FenceICalculator = () => {
  const [fenceLength, setFenceLength] = useState(0);
  const [fenceWidth, setFenceWidth] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
      if (fenceLength > 0 && fenceWidth > 0) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Draw fence panels
          ctx.fillStyle = 'black';
          ctx.fillRect(20, 20, fenceLength * 10, 20); // Draw horizontal part of the I

          // Draw fence posts
          ctx.fillStyle = 'gray';
          ctx.fillRect(10 + 10, 10, 10, 10); // Starting post
          ctx.fillRect(10 + fenceLength * 10, 10, 10, 10); // Ending post
      }
  }, [fenceLength, fenceWidth]);

  const handleLengthChange = (e) => {
      const length = parseInt(e.target.value);
      setFenceLength(length);
  };

  const handleWidthChange = (e) => {
      const width = parseInt(e.target.value);
      setFenceWidth(width);
  };

  const calculatePrice = () => {
      let totalPrice = 0;
      let itemCount = 0;
      let panelCountTotal = 0;
      let totalPostCount = 0;
      
      if (fenceLength > 0 && fenceWidth > 0) {
          let horizontalPanelCount;
          let verticalPanelCount;
          let postCount;

          const heightFence = Math.ceil(heightValue/meter);

          horizontalPanelCount = Math.ceil((fenceLength / (width/meter))*fenceWidth); // Assuming each panel width in m
          postCount = Math.ceil((fenceLength / (width/meter)) + 1); // Assuming one post for each end of the panel
          verticalPanelCount = horizontalPanelCount * heightFence; 

          const panelPrice = (horizontalPanelCount + (verticalPanelCount || 0)) * priceValue;
          const postPrice = postCount * postPriceValue;

          totalPrice = panelPrice + postPrice;
          panelCountTotal = horizontalPanelCount + (verticalPanelCount || 0);
          itemCount = horizontalPanelCount + (verticalPanelCount || 0) + postCount;
          totalPostCount = postCount;
      }

      return { totalPrice, itemCount, panelCountTotal, totalPostCount };
  };

  const { totalPrice, itemCount, panelCountTotal, totalPostCount } = calculatePrice();
  // jedna strana
    return <div>
      <form>
                        <div className="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
                        <span className="font-medium">4. Zadejte rozměry plotu</span>
                        </div>
                        
                        <div className="grid gap-6 mb-6 md:grid-cols-4">
                            <div>
                            <label htmlFor="lengthInput" className="block mb-2 text-sm font-medium text-gray-900">Zadejte délku strany (v m):</label>
                            <div className="relative flex items-center max-w-[11rem]">
                                <button type="button" id="decrement-button" data-input-counter-decrement="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input 
                                type="number" 
                                id="bedrooms-input" 
                                value={fenceLength}
                                onChange={handleLengthChange}
                                data-input-counter data-input-counter-min="1" 
                                data-input-counter-max="5" 
                                aria-describedby="helper-text-explanation" 
                                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="" 
                                required />
                                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                                    <span>délka plotu</span>
                                </div>
                                <button type="button" id="increment-button" data-input-counter-increment="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">popisek</p>
                            </div>

                            <div>
                            <label htmlFor="lengthInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zadejte výšku strany (v m):</label>
                            <div className="relative flex items-center max-w-[11rem]">
                                <button type="button" id="decrement-button" data-input-counter-decrement="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                    </svg>
                                </button>
                                <input 
                                type="number" 
                                id="bedrooms-input" 
                                value={fenceWidth}
                                onChange={handleWidthChange}
                                data-input-counter data-input-counter-min="1" 
                                data-input-counter-max="5" 
                                aria-describedby="helper-text-explanation" 
                                className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="" 
                                required />
                                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                                </svg>
                                    <span>výška plotu</span>
                                </div>
                                <button type="button" id="increment-button" data-input-counter-increment="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                    </svg>
                                </button>
                            </div>
                            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">popisek</p>
                          </div>
                          
                          {totalPrice > 0 && (
                          <div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                              
                                <li>
                                    <span className="text-sm font-medium text-gray-900">Panelů celkem:  {panelCountTotal} ks </span>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-gray-900">Sloupků celkem:  {totalPostCount} ks </span>
                                </li>
                                <li>
                                    <span className="text-sm font-medium text-gray-900">Výška sloupku:  {fenceWidth} m </span>
                                </li>
                            </ul>
                          </div>
                          )}
                           {totalPrice > 0 && (
                          <div>
                                <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                                <li>
                                    <span className="text-sm font-medium text-gray-900">Cena celkem:  {totalPrice} Kč </span>
                                </li>

                                <li>
                                    <span className="text-sm font-medium text-gray-900">Položek celkem:  {itemCount} ks </span>
                                </li>
                               
                                </ul>
                                </div>
                            
                        )}
                        </div>




                            
                    </form>
                    <canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>
                   
    </div>;
}
const FenceLCalculator = () => {
    return <div></div>;
}
const FenceUCalculator = () => {
    return <div></div>;
}

const FenceType = () => {
    const [fenceType, setFenceType] = React.useState('');

    const handleTypeChange = (e) => {
        setFenceType(e.target.value);
    };

    return (
      <form>
        <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="I" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar I (jedna strana)</label>
            </div>
          </div>
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" value="L" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar L (dvě strany)</label>
            </div>
          </div>
          <div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-3" type="radio" value="U" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                <label htmlFor= "bordered-radio-3" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar U (tři strany)</label>
            </div>
          </div>
        </div> 
        
      {fenceType === "I" && <FenceICalculator />}
      {fenceType === "L" && <FenceLCalculator />}
      {fenceType === "U" && <FenceUCalculator />}
    </form>
    );
};
