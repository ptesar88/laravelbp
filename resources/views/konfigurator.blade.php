
@extends('layouts.default')

@section('page-banner')
<section class="free-post">
<div class="relative z-10 mx-auto max-full bg-gray-100 h-[400px]">
    <img class="z-0 flex mx-auto w-auto h-auto items-center mb-2" src="../bannerV2.png"alt="Banner" />
    <img class="flex mx-auto max-w-sm items-center -mt-64" src="../logo.PNG" alt="Logo" />
  </div>
</section>  
@endsection

@section('page-content')
    <section class="free-post">
        <div class="relative z-20 mx-auto max-w-5xl items-center p-2 mb-4 -mt-20 text-base text-green-800 rounded-lg bg-green-50 border border-green-700" role="alert">
            <span class="font-medium">Akce!</span> Při objednávce betonových plotů i s montáží akce 15%. Pouze na materiál 5%.
          </div>
          <div class="max-w-6xl mx-auto mt-16 mb-8">
            <div class="py-2 px-2 mx-auto max-w-6xl">
              <div class="mx-auto max-w-screen-sm text-center lg:mb-8 mb-8">
                <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-pink-950">Široký výběr designu a barev</h2>
                <p class="font-normal text-gray-600 sm:text-xl dark:text-gray-400">Nabízíme Vám více jak 30 druhu plotů různého dekoru či barvy, jednotlivé bloky lze mezi sebou libovolně kombinovat, finální počet kombinací, tak nelze plně určit, vše je pouze na vaší fantazii.</p>
              </div>
            </div>
        </div>
    </section>
@endsection

@section('page-all-products')

    <section class="free-post">
      <h2 class="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold dark:text-white">Konfigurátor</h2>
      <div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">Vybrali jste</span>
      </div>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
        <div>
      <h3 class="mx-auto items-center text-center text-lg mb-8 font-bold dark:text-white">{{ $products_detail->name }}</h3>
        </div>
        <div>
          <img class="mx-auto items-center" src="{{ $products_detail->thumbnail_url }}" alt="" />
        </div>  
        <div>
          <div class="mx-auto items-center text-center text-lg mb-8 font-bold dark:text-white">Rozměry: {{ $products_detail->width }}x{{ $products_detail->height }}x{{ $products_detail->depth }}cm</div>
        </div>  
      </div>
      <div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">Vyberte tvar plotu</span>
      </div> 
    </section>
    
    <div id="root" class="mx-auto items-center mb-2 max-w-6xl"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel">
        const { useState, useEffect, useRef } = React;

        // Dummy product catalog
        const productCatalog = [
            { name: 'Fence Panel', price: 50 },
            { name: 'Fence Post', price: 10 },
        ];

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
                    ctx.fillStyle = 'brown';
                    ctx.fillRect(20, 20, fenceLength * 10, 20); // Draw horizontal part of the I

                    // Draw fence posts
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(10, 10, 10, 10); // Starting post
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

                if (fenceLength > 0 && fenceWidth > 0) {
                    let horizontalPanelCount;
                    let verticalPanelCount;
                    let postCount;

                    horizontalPanelCount = Math.ceil(fenceLength / 6); // Assuming each panel is 6 feet long
                    postCount = horizontalPanelCount + 1; // Assuming one post for each end of the panel


                    const panelPrice = (horizontalPanelCount + (verticalPanelCount || 0)) * productCatalog[0].price;
                    const postPrice = postCount * productCatalog[1].price;

                    totalPrice = panelPrice + postPrice;
                    itemCount = horizontalPanelCount + (verticalPanelCount || 0) + postCount;
                }

                return { totalPrice, itemCount };
            };

            const { totalPrice, itemCount } = calculatePrice();

            return (
                <div>
                    <h2>Fence I Calculator</h2>
                    <form>
                        <div>
                            <label htmlFor="lengthInput">Enter the length of the fence (in feet):</label>
                            <input
                                type="number"
                                id="lengthInput"
                                value={fenceLength}
                                onChange={handleLengthChange}
                            />
                            <label htmlFor="widthInput">Enter the width of the fence (in feet):</label>
                            <input
                                type="number"
                                id="widthInput"
                                value={fenceWidth}
                                onChange={handleWidthChange}
                            />
                        </div>
                    </form>
                    <canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>
                    {totalPrice > 0 && (
                        <div>
                            <p>Total Price: ${totalPrice}</p>
                            <p>Total Count of Items: {itemCount}</p>
                        </div>
                    )}
                </div>
            );
        };

        const FenceLCalculator = () => {
            const [fenceLength, setFenceLength] = useState(0);
            const [fenceWidth, setFenceWidth] = useState(0);
            const canvasRef = useRef(null);

            useEffect(() => {
                if (fenceLength > 0 && fenceWidth > 0) {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw fence panels
                    ctx.fillStyle = 'brown';
                    ctx.fillRect(20, 20, fenceLength * 10, fenceWidth * 10); // Draw horizontal part of the L
                    ctx.fillRect(20, 20 + fenceWidth * 10, fenceWidth * 10, 20); // Draw vertical part of the L

                    // Draw fence posts
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(10, 10, 10, 10); // Starting post
                    ctx.fillRect(10 + fenceLength * 10, 10, 10, 10); // Ending post
                    ctx.fillRect(10, 10 + fenceWidth * 10, 10, 10); // Left bottom corner post
                    ctx.fillRect(10 + fenceLength * 10, 10 + fenceWidth * 10, 10, 10); // Right bottom corner post
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

                if (fenceLength > 0 && fenceWidth > 0) {
                    let horizontalPanelCount;
                    let verticalPanelCount;
                    let postCount;

                    horizontalPanelCount = Math.ceil(fenceLength / 6); // Assuming each panel is 6 feet long
                    verticalPanelCount = Math.ceil(fenceWidth / 6); // Assuming each panel is 6 feet long
                    postCount = (horizontalPanelCount + verticalPanelCount) * 2 - 2; // Assuming one post for each end of the panel

                    const panelPrice = (horizontalPanelCount + (verticalPanelCount || 0)) * productCatalog[0].price;
                    const postPrice = postCount * productCatalog[1].price;

                    totalPrice = panelPrice + postPrice;
                    itemCount = horizontalPanelCount + (verticalPanelCount || 0) + postCount;
                }

                return { totalPrice, itemCount };
            };

            const { totalPrice, itemCount } = calculatePrice();

            return (
                <div>
                    <h2>Fence L Calculator</h2>
                    <form>
                        <div>
                            <label htmlFor="lengthInput">Enter the length of the fence (in feet):</label>
                            <input
                                type="number"
                                id="lengthInput"
                                value={fenceLength}
                                onChange={handleLengthChange}
                            />
                            <label htmlFor="widthInput">Enter the width of the fence (in feet):</label>
                            <input
                                type="number"
                                id="widthInput"
                                value={fenceWidth}
                                onChange={handleWidthChange}
                            />
                        </div>
                    </form>
                    <canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>
                    {totalPrice > 0 && (
                        <div>
                            <p>Total Price: ${totalPrice}</p>
                            <p>Total Count of Items: {itemCount}</p>
                        </div>
                    )}
                </div>
            );
        };

        const FenceUCalculator = () => {
            const [fenceLength, setFenceLength] = useState(0);
            const [fenceWidth, setFenceWidth] = useState(0);
            const canvasRef = useRef(null);

            useEffect(() => {
                if (fenceLength > 0 && fenceWidth > 0) {
                    const canvas = canvasRef.current;
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Draw fence panels
                    ctx.fillStyle = 'brown';
                    ctx.fillRect(20, 20, fenceLength * 10, fenceWidth * 10); // Draw top part of the U
                    ctx.fillRect(20, 20 + fenceWidth * 10, fenceWidth * 10, 20); // Draw vertical part of the U

                    // Draw fence posts
                    ctx.fillStyle = 'gray';
                    ctx.fillRect(10, 10, 10, 10); // Starting post
                    ctx.fillRect(10 + fenceLength * 10, 10, 10, 10); // Ending post
                    ctx.fillRect(10, 10 + fenceWidth * 10, 10, 10); // Left bottom corner post
                    ctx.fillRect(10 + fenceLength * 10, 10 + fenceWidth * 10, 10, 10); // Right bottom corner post
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

                if (fenceLength > 0 && fenceWidth > 0) {
                    let horizontalPanelCount;
                    let verticalPanelCount;
                    let postCount;

                    horizontalPanelCount = Math.ceil(fenceLength / 6); // Assuming each panel is 6 feet long
                    verticalPanelCount = Math.ceil(fenceWidth / 6); // Assuming each panel is 6 feet long
                    postCount = (horizontalPanelCount + verticalPanelCount) * 2 - 2; // Assuming one post for each end of the panel

                    const panelPrice = (horizontalPanelCount + (verticalPanelCount || 0)) * productCatalog[0].price;
                    const postPrice = postCount * productCatalog[1].price;

                    totalPrice = panelPrice + postPrice;
                    itemCount = horizontalPanelCount + (verticalPanelCount || 0) + postCount;
                }

                return { totalPrice, itemCount };
            };

            const { totalPrice, itemCount } = calculatePrice();

            return (
                <div>
                    <h2>Fence U Calculator</h2>
                    <form>
                        <div>
                            <label htmlFor="lengthInput">Enter the length of the fence (in feet):</label>
                            <input
                                type="number"
                                id="lengthInput"
                                value={fenceLength}
                                onChange={handleLengthChange}
                            />
                            <label htmlFor="widthInput">Enter the width of the fence (in feet):</label>
                            <input
                                type="number"
                                id="widthInput"
                                value={fenceWidth}
                                onChange={handleWidthChange}
                            />
                            <label htmlFor="sideCInput">Enter the width of the fence (in feet):</label>
                            <input
                                type="number"
                                id="widthInput"
                                value={fenceWidth}
                                onChange={handleWidthChange}
                            />
                        </div>
                    </form>
                    <canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>
                    {totalPrice > 0 && (
                        <div>
                            <p>Total Price: ${totalPrice}</p>
                            <p>Total Count of Items: {itemCount}</p>
                        </div>
                    )}
                </div>
            );
        };

        const FenceCalculator = () => {
            const [fenceType, setFenceType] = useState('');

            const handleTypeChange = (e) => {
                setFenceType(e.target.value);
            };

            return (
              <form>
                <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
                  <div>
                    <div className="mx-auto items-center text-center mb-4">
                      <input id="radio-1" type="radio" value="I" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                      <label htmlFor="radio-1" className="ms-2 text-lg font-bold text-gray-900 dark:text-gray-300">Tvar I (jedna strana)</label>
                  </div>
                  </div>
                  <div>
                    <div className="mx-auto items-center text-center mb-4">
                      <input id="radio-2" type="radio" value="L" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                      <label htmlFor="radio-2" className="ms-2 text-lg font-bold text-gray-900 dark:text-gray-300">Tvar L (dvě strany)</label>
                  </div>
                  </div>
                  <div>
                    <div className="mx-auto items-center text-center mb-4">
                      <input id="radio-3" type="radio" value="U" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                      <label htmlFor="radio-3" className="ms-2 text-lg font-bold text-gray-900 dark:text-gray-300">Tvar U (tři strany)</label>
                  </div>
                  </div>
                </div> 
              {fenceType === "I" && <FenceICalculator />}
              {fenceType === "L" && <FenceLCalculator />}
              {fenceType === "U" && <FenceUCalculator />}
            </form>
            );
        };

        ReactDOM.render(<FenceCalculator />, document.getElementById('root'));
    </script>
@endsection