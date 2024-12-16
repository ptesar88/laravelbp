// Code: Fence typ I component

const FenceI = (props: {
    produkt: Produkt;
    otisk: Otisk | null;
    sloupek: Sloupek[];
    produkty: Produkty[];
    barva: Colors[];
    chciOtisk: boolean;
    chciBarvu: boolean;
}) => {

    let widthFenceSelected = props.produkt.width;
    let heightFenceSelected = props.produkt.height;
    let priceValue = props.produkt.price;
    let priceLabel = props.otisk ? +props.otisk.price : 0;
    let pricePost = null;
    let idPost = props.sloupek.id;
    let otiskRes = props.chciOtisk;
    let barvaRes = props.chciBarvu;

    const valuesElement = false;
    const { useState, useEffect, useRef } = React;
    const [valueSelectedS, setValue] = useState(0);
    const valueSelected = Number(valueSelectedS.toFixed(2));
    const [fenceHeightR, setFenceHeightOper] = useState(0);
    const fenceHeight = Number(fenceHeightR.toFixed(2));
    //sirka
    const [fenceWidthR, setFenceWidthOper] = useState(0);
    const fenceWidth = Number(fenceWidthR.toFixed(2));
    //vyska sloupku 1.strana
    const postHeight = Number(fenceHeightR * 100);
    const postTypeProduktsK = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && (produkt.category_type == 2 || produkt.category_type == 4)).slice(0, 1);
    const postTypeProduktsP = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && produkt.category_type == 1).slice(0, 1);

    const colorSelect = props.barva ? props.barva.name : null;
    const priceUp = props.barva ? +props.barva.priceup : 0;

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
    //zmena vysky 1.strana
    const handleHeightChange = (e) => {
        if(parseInt(e.target.value) > parseInt(e.target.max)) {
            e.target.value = e.target.max;
            window.alert("Maximální výška plotu je 3m");
        }
        const height = +e.target.value;
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
    //zmena sirky 1.strana
    const handleWidthChange = (e) => {
        const width = +e.target.value;
        setFenceWidthOper(width);
    };

    const widthChangePlus = () => {
         setFenceWidthOper(fenceWidthR + 0.25);
    };

    const widthChangeMinus = () => {
        setFenceWidthOper(fenceWidthR - 0.25);
    };

    //vypocet ceny
    const calculatePrice = () => {
        const meter = 100; // 1m = 100cm
        let totalPrice = 0;
        let itemCount = 0;
        let panelCountTotalAll = 0;
        let totalPostCount = 0;
        let postCountPA = 0;

        if (fenceHeight > 0 && fenceWidth > 0) {
            let widthPanelCount;
            let postCountTotalAll;
            let priceUpPro = 0;

            if (barvaRes == true) {
                priceUpPro = 1.45;/*ToDo: cena za barvu v %, get from DB */
            } else {
                priceUpPro = 1;
            }    
            
            if (otiskRes == true) {
                priceLabel;
            } else {
                priceLabel = 0;
            }
            
            const heightPanelM = heightFenceSelected / meter; // vyska panelu v metrech
            const widthPanelM = widthFenceSelected / meter; // delka panelu v metrech

            widthPanelCount = fenceWidth / widthPanelM; // pocet panelu na sirku 1.strana

            const postCount = Math.ceil((fenceWidth / (widthPanelM) + 1)).toFixed(0); // pocet sloupku 1.strana
            const postCountK = 2; // pocet sloupku K 1.strana + 2.strana
            panelCountTotalAll = +Math.ceil(Number(widthPanelCount) * (Number(fenceHeight) / Number(heightPanelM))).toFixed(1); // pocet panelu celkem 1.strana

            postCountTotalAll = postCount;            
            const postCountP = Math.ceil(Number(postCount) - 2); // pocet sloupku P 1.strana

            

            let postPriceK = 0;
            let postPriceP = 0;
            
            postTypeProduktsK.map(postTypeProduktK => {
                return (
                   postPriceK = postTypeProduktK.price
                )}
            );
            
            if (Number(postCount) >= 2) {
                postTypeProduktsP.map(postTypeProduktP => {
                    return (
                        postPriceP = postTypeProduktP.price
                    )
                }
                );
            } else {
                postPriceP = 0
            }

            const postPriceTotalK = 2 * postPriceK;
            const postPriceTotalP = Math.ceil(postCountP * postPriceP);

            let pricePanel = Math.ceil(Number(panelCountTotalAll) * priceValue); 
            let tempCalc = Math.ceil(pricePanel + postPriceTotalP + postPriceTotalK);
            let panelPriceAndPostWithColor = Math.ceil(tempCalc * priceUpPro);  // cena panelu s barvou
            let panelPriceColorHandle = barvaRes ? panelPriceAndPostWithColor : tempCalc; // cena panelu s barvou nebo bez barvy
            let labelPrice = Math.ceil(Number(panelCountTotalAll) * priceLabel); // cena za otisk
            let labelPriceHandle = props.otisk ? labelPrice : 0; // cena za otisk nebo bez otisku

            console.log(
                panelCountTotalAll,
                labelPriceHandle,
                tempCalc,
                "Cena za barvu v %", priceUpPro,
                "Cena za panel (barva)", panelPriceColorHandle,
                "Počet sloupků 1.strana", postCount,
                "Počet sloupků K", postCountK,
                "Počet sloupků P", postCountP,
                "Počet sloupků celkem", postCountTotalAll,
                "Cena sloupku K 1.strana", postPriceK,
                "Cena sloupku P 1.strana", postPriceP,
            );

            totalPrice = +((+panelPriceColorHandle) + (+labelPriceHandle)).toFixed(0);
            itemCount = Number(panelCountTotalAll) + Number(postCountTotalAll);
            totalPostCount = postCountTotalAll;
            postCountPA = postCountP;
            
       
        }

        return { panelCountTotalAll, totalPrice, itemCount, totalPostCount, postCountPA };
    };

    const { panelCountTotalAll, totalPrice, itemCount, totalPostCount, postCountPA  } = calculatePrice();
    // jedna strana
    return <div>

        <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
            <span className="font-medium">Zadejte rozměry plotu</span>
        </div>

        <div className="grid gap-6 mb-6 md:grid-cols-4">
            <div>
                <label htmlFor="lengthInput" className="block mb-2 text-sm font-medium text-gray-900">Zadejte délku strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={widthChangeMinus} id="decrement-button" data-input-counter-decrement="lengthInput" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="lengthInput"
                        value={fenceWidth}
                        min={0}
                        step={0.25}
                        max={150}
                        onChange={handleWidthChange}
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6"
                        required 
                        />
                    <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                        <span>délka plotu</span>
                    </div>
                    <button type="button" onClick={widthChangePlus} id="increment-button" data-input-counter-increment="lengthInput" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            <div>
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900">Zadejte výšku strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={heightChangeMinus} id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="quantity-input"
                        value={fenceHeight}
                        min={0}
                        step={0.25}
                        max={3}
                        onChange={handleHeightChange}
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6"
                        required
                
                        />
                    <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                        </svg>
                        <span>výška plotu</span>
                    </div>
                    <button type="button" onClick={heightChangePlus}  id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            {totalPrice > 0 && (
                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside">

                        <li>
                            <span className="text-sm font-medium text-gray-900">Panelů celkem:  {panelCountTotalAll} ks </span>
                            <input type="hidden" id="panelCountTotal" name="panelCountTotal" value={panelCountTotalAll} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků koncových: 2 ks </span>
                            <input type="hidden" id="totalPostCountK" name="totalPostCountK" value='2' />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků průběžných: {postCountPA} ks </span>
                            <input type="hidden" id="postCountPA" name="postCountPA" value={postCountPA} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků celkem:  {totalPostCount} ks </span>
                            <input type="hidden" id="totalPostCount" name="totalPostCount" value={totalPostCount} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Délka plotu:  {fenceWidth} m </span>
                            <input type="hidden" id="fenceWidth" name="fenceWidth" value={fenceWidth} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Výška sloupku a plotu:  {fenceHeight} m </span>
                            <input type="hidden" id="fenceHeight" name="fenceHeight" value={fenceHeight} />
                              </li>
                    </ul>
                </div>
            )}
            {totalPrice > 0 && (
                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside">
                        <li>
                            <span className="text-sm font-medium text-gray-900">*Orientační cena celkem:  {totalPrice} Kč </span>
                            <input type="hidden" id="totalPrice" name="totalPrice" value={totalPrice} />
                            <input type="hidden" id="panelCountTotalAll" name="panelCountTotalAll" value={panelCountTotalAll} />                         </li>

                        <li>
                            <span className="text-sm font-medium text-gray-900">Položek celkem: {itemCount} ks </span>
                            <input type="hidden" id="itemCount" name="itemCount" value={itemCount} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků celkem: {totalPostCount} ks, včetně 2 ks koncových</span>
                            <input type="hidden" id="totalPostCount" name="totalPostCount" value={totalPostCount} />
                            <input type="hidden" id="typeFence" name="typeFence" value='I' />
                        </li>

                    </ul>
                    <div>
                    <span className="text-xs text-gray-500">*Poznámka: Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za montáž a dopravu.</span>
                </div>
                </div>

            )}
        </div>

    </div>;
};


