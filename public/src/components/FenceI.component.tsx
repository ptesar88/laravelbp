// Code: Fence typ I component

const FenceI = (props: {
    produkt: Produkt;
    otisk: Otisk | null;
    sloupek: Sloupek[];
    produkty: Produkty[];
}) => {

    let widthFence = props.produkt.width;
    let heightFence = props.produkt.height;
    let priceValue = props.produkt.price;
    let priceLabel = props.otisk ? +props.otisk.price : 0;
    let pricePost = null;
    let idPost = props.sloupek.id;

    const { useState, useEffect, useRef } = React;

    const [fenceHeightR, setFenceHeightOper] = useState(0);
    const fenceHeight = Number(fenceHeightR.toFixed(2));
    const postHeight = Number(fenceHeightR*100);
    const postTypeProduktsK = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && (produkt.category_type == 2 || produkt.category_type == 4)).slice(0, 1);
    const postTypeProduktsP = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && produkt.category_type == 1).slice(0, 1);

    const [fenceWidthR, setFenceWidthOper] = useState(0);
    const fenceWidth = Number(fenceWidthR.toFixed(2));

    //const canvasRef = useRef(null);

    useEffect(() => {
        if (fenceHeightR > 0 && fenceWidthR > 0) {
            //const canvas = canvasRef.current;
            //const ctx = canvas.getContext('2d');
            //ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw fence panels
            //ctx.fillStyle = 'black';
            //ctx.fillRect(20, 20, fenceLength * 10, 20); // Draw horizontal part of the I

            // Draw fence posts
            //ctx.fillStyle = 'gray';
            //ctx.fillRect(10 + 10, 10, 10, 10); // Starting post
            //ctx.fillRect(10 + fenceLength * 10, 10, 10, 10); // Ending post
        }
    }, [fenceHeightR, fenceWidthR]);

    const handleHeightChange = (e) => {
        const height = e.target.value;
        setFenceHeightOper(height);
    };

    const heightChangePlus = () => {
        setFenceHeightOper(fenceHeightR + 0.25);
        if (fenceHeightR > 3) {
            setFenceHeightOper(3);
            window.alert("Maximální výška plotu je 3m");
        }
    };

    const heightChangeMinus = () => {
        setFenceHeightOper(fenceHeightR - 0.25);
    };

    const handleWidthChange = (e) => {
        const width = e.target.value;
        setFenceWidthOper(width);
    };

    const widthChangePlus = () => {
         setFenceWidthOper(fenceWidthR + 0.25);
    };

    const widthChangeMinus = () => {
        setFenceWidthOper(fenceWidthR - 0.25);
    };

    const calculatePrice = () => {
        const meter = 100; // 1m = 100cm
        let totalPrice = 0;
        let itemCount = 0;
        let panelCountTotal = 0;
        let totalPostCount = 0;

        if (fenceHeight > 0 && fenceWidth > 0) {
            let widthPanelCount;
            let heightPanelCount;
            let postCount;

            
            const heightFenceM = heightFence/meter; // vyska plotu v metrech
            const widthFenceM = widthFence/meter; // delka plotu v metrech

            widthPanelCount = fenceWidth/widthFenceM; // pocet panelu na jedne strane 

            postCount = (fenceWidth/(widthFenceM) + 1); // pocet sloupku na jedne strane
            panelCountTotal = widthPanelCount * (fenceHeight/heightFenceM);

            const panelPrice = panelCountTotal * priceValue;
            const labelPrice = priceLabel * panelCountTotal;

            let postPriceK = 0;
            let postPriceP = 0;
            
            postTypeProduktsK.map(postTypeProduktK => {
                return (
                   postPriceK = postTypeProduktK.price
                )}
            );
            
            if (postCount > 2){
            postTypeProduktsP.map(postTypeProduktP => {
                return (
                   postPriceP = postTypeProduktP.price
                )}
            );
            }else{
                postPriceP = 0
            }

            const postPriceTotalK = 2 * postPriceK;
            const postPriceTotalP = (postCount - 2) * postPriceP;

            console.log(
                "Delka plotu: ",widthFenceM, "(", fenceWidth, ")",
                "Vyska plotu: ",heightFenceM,"(", fenceHeight, ")",
                "Sloupek", postHeight, postPriceTotalK, postPriceTotalP,
                "Panelů celkem", panelCountTotal, "ks",
            );

            totalPrice = Math.ceil(panelPrice + labelPrice + postPriceTotalK + postPriceTotalP);
            itemCount = panelCountTotal + postCount;
            totalPostCount = postCount;
        }

        return { totalPrice, itemCount, panelCountTotal, totalPostCount };
    };

    const { totalPrice, itemCount, panelCountTotal, totalPostCount } = calculatePrice();
    // jedna strana
    return <div>

        <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
            <span className="font-medium">4. Zadejte rozměry plotu</span>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
                <label htmlFor="lengthInput" className="block mb-2 text-sm font-medium text-gray-900">Zadejte délku strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={widthChangeMinus} id="decrement-button" data-input-counter-decrement="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="lengthInput"
                        value={fenceWidth}
                        max={100}
                        onChange={handleWidthChange}
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required 
                        readOnly
                        />
                    <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <span>délka plotu</span>
                    </div>
                    <button type="button" onClick={widthChangePlus} id="increment-button" data-input-counter-increment="lengthInput" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            <div>
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zadejte výšku strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={heightChangeMinus} id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="quantity-input"
                        value={fenceHeight}
                        max={3}
                        onChange={handleHeightChange}
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        readOnly
                        />
                    <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                        </svg>
                        <span>výška plotu</span>
                    </div>
                    <button type="button" onClick={heightChangePlus}  id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            {totalPrice > 0 && (
                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">

                        <li>
                            <span className="text-sm font-medium text-gray-900">Panelů celkem:  {panelCountTotal} ks </span>
                            <input type="hidden" id="panelCountTotal" name="panelCountTotal" value={panelCountTotal} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků celkem:  {totalPostCount} ks </span>
                            <input type="hidden" id="totalPostCount" name="totalPostCount" value={totalPostCount} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Délka plotu:  {fenceWidth} m </span>
                            <input type="hidden" id="fenceHeight" name="fenceHeight" value={fenceWidth} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Výška sloupku a plotu:  {fenceHeight} m </span>
                            <input type="hidden" id="fenceWidth" name="fenceWidth" value={fenceHeight} />
                        </li>
                    </ul>
                </div>
            )}
            {totalPrice > 0 && (
                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                            <span className="text-sm font-medium text-gray-900">*Orientační cena celkem:  {totalPrice} Kč </span>
                            <input type="hidden" id="totalPrice" name="totalPrice" value={totalPrice} />
                        </li>

                        <li>
                            <span className="text-sm font-medium text-gray-900">Položek celkem:  {itemCount} ks </span>
                            <input type="hidden" id="itemCount" name="itemCount" value={itemCount} />
                        </li>

                    </ul>
                </div>

            )}
        </div>

    </div>;
};


