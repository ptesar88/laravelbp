
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
        <span class="font-medium">1. Vybrali jste</span>
      </div>
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
        <div>
      <h3 class="mx-auto items-center text-center font-bold dark:text-white">{{ $products_detail->name }}</h3>
        </div>
        <div>
          <img class="mx-auto items-center" src="{{ $products_detail->thumbnail_url }}" alt="" />
        </div>  
        <div>
          <div class="mx-auto items-center text-center font-bold dark:text-white">Rozměry: {{ $products_detail->width }}x{{ $products_detail->height }}x{{ $products_detail->depth }}cm</div>
          <div class="mx-auto items-center text-center font-bold dark:text-white">Cena: {{ $products_detail->price }} Kč</div>
        </div>  
      </div>
      @if($products_detail->label == 'Ano')
      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1"> 
        <div>
                <div class="flex">
                    <div class="flex items-center me-4 font-bold">
                        Chcete použít otisk?
                    </div>
                    <div class="flex items-center me-4">
                        <input id="inline-radio" type="radio" value="ano" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                        <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ano</label>
                    </div>
                    <div class="flex items-center me-4">
                        <input id="inline-2-radio" type="radio" value="ne" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
                        <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ne</label>
                    </div>
                </div>
      
        </div>
      </div>  
      
      <div id="otiskKonfig" class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
        @foreach($products_otisk as $otisk)
                    <div key={{ $otisk->id }}>
                        <figure class="flex h-48 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                        <div class="flex items-center ps-4 ">
                            <input id="bordered-radio-1" type="radio" value="{{ $otisk->id }}" onChange={handleTypeChange} name="radioSel" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
                            <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $otisk->name }}</label>
                         </div>
                         <div class="h-24">
                        <img class="mx-auto max-h-[85px]" src="{{ $otisk->thumbnail_url }}" alt="" />
                        </div>
                        <div class="h-12 items-center justify-center text-center bg-gray-200 right-0">
                        @if ($otisk->top == 'Ano')
                          <span class="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            <span class="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                            TOP
                          </span>
                        @endif
                        
                        @if ($otisk->label == 'Ano')
                          <span class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            <span class="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                            OTISK
                          </span>
                        @endif
                          <span class="text-sm font-semibold ml-2">cena od: {{ $otisk->price }} Kč</span>
                                                  
                        </div>
                      </figure>
                    </div>    
            @endforeach
          </div>   
          @endif
      <div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">2. Vyberte typ sloupku</span>
      </div>

      <div class="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
        @foreach($products_sloupek as $sloupek) 
      <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
        <input id="bordered-radio-1" type="radio" value="{{ $sloupek->id }}" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300">
        <label for="bordered-radio-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $sloupek->name }}</label>
    </div>
    @endforeach 
    </div>
      <div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
        <span class="font-medium">3. Vyberte tvar plotu</span>
      </div> 
    
    
    <div id="root" class="mx-auto items-center mb-2 max-w-6xl"></div>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>

    <script type="text/babel">
        const { useState, useEffect, useRef } = React;

        const meter = 100;
        
        let width = {{ $products_detail->width }}; 
        let heightValue = {{ $products_detail->height }}; 
        let priceValue = {{ $products_detail->price }}; 
        let postPriceValue = {{ $products_detail->price }}; 


        // Dummy product catalog
        const productCatalog = [
            { name: 'Fence Panel', price: priceValue },
            { name: 'Fence Post', price: postPriceValue },
            { name: 'Fence Panel Height', height: heightValue},
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

                    const heightFence = productCatalog[1].height;

                    horizontalPanelCount = Math.ceil((fenceLength / (width/meter))*fenceWidth); // Assuming each panel width in m
                    postCount = Math.ceil((fenceLength / (width/meter)) + 1); // Assuming one post for each end of the panel
                    verticalPanelCount = horizontalPanelCount * heightFence; 

                    const panelPrice = (horizontalPanelCount + (verticalPanelCount || 0)) * productCatalog[0].price;
                    const postPrice = postCount * productCatalog[1].price;

                    totalPrice = panelPrice + postPrice;
                    panelCountTotal = horizontalPanelCount + (verticalPanelCount || 0);
                    itemCount = horizontalPanelCount + (verticalPanelCount || 0) + postCount;
                    totalPostCount = postCount;
                }

                return { totalPrice, itemCount, panelCountTotal, totalPostCount };
            };

            const { totalPrice, itemCount, panelCountTotal, totalPostCount } = calculatePrice();
            // jedna strana
            return (
                <div>
                    <form>
                        <div className="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
                        <span className="font-medium">4. Zadejte rozměry plotu</span>
                        </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-4">
                            <div>
                            <label htmlFor="lengthInput" className="font-bold mr-4">Zadejte délku strany (v m):</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                type="number"
                                id="lengthInput"
                                value={fenceLength}
                                onChange={handleLengthChange}
                                default=""
                            />
                            </div>
                            <div>
                            <label htmlFor="widthInput" className="font-bold mr-4">Zadejte výšku plotu (v m):</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/3 p-2.5"
                                type="number"
                                id="widthInput"
                                value={fenceWidth}
                                onChange={handleWidthChange}
                                default=""
                            />
                            </div>
                        </div>
                    </form>
                    <canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>
                    {totalPrice > 0 && (
                        <div>
                            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                                <li>
                                    <span className="font-bold">Cena celkem: </span> {totalPrice} Kč
                                </li>
                                <li>
                                    <span className="font-bold">Panelů celkem: </span> {panelCountTotal} ks
                                </li>
                                <li>
                                    <span className="font-bold">Sloupků celkem: </span> {totalPostCount} ks
                                </li>
                                <li>
                                    <span className="font-bold">Položek celkem: </span> {itemCount} ks
                                </li>
                                <li>
                                    <span className="font-bold">Výška sloupku: </span> {fenceWidth} m
                                </li>
                            </ul>
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

        ReactDOM.render(<FenceCalculator />, document.getElementById('root'));
    </script>

<div class="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
    <span class="font-medium">5. Poptávka</span>
  </div>
<form class="max-w-6xl mx-auto">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firma</label>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jméno</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
          <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Příjmení</label>
      </div>
    </div>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-5 group">
          <input type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
          <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon</label>
      </div>
      <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
    </div>

    </div>

    

<fieldset>
    <div class="flex items-center mb-4">
        <input id="checkbox-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" >
        <label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Souhlasím se zpracováním <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">osobních údajů</a>.</label>
    </div>
  </fieldset>

  
    <button type="submit" class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Odeslat poptávku</button>
  </form>
  
    </section>
    @endsection