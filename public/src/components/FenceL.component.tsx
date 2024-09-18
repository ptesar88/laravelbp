// Code: Fence typ I component

const FenceL = (props: {
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

    //1.strana
    //vyska
    const [fenceHeightR, setFenceHeightOper] = useState(0);
    const fenceHeight = Number(fenceHeightR.toFixed(2));
    //sirka
    const [fenceWidthR, setFenceWidthOper] = useState(0);
    const fenceWidth = Number(fenceWidthR.toFixed(2));

    //2. strana
    //vyska
    const [fenceHeightR2, setFenceHeightOper2] = useState(0);
    const fenceHeight2 = Number(fenceHeightR2.toFixed(2));
    //sirka
    const [fenceWidthR2, setFenceWidthOper2] = useState(0);
    const fenceWidth2 = Number(fenceWidthR2.toFixed(2));

    //vyska sloupku 1.strana
    const postHeight = Number(fenceHeightR * 100);
    //vyska sloupku 2.strana
    const postHeight2 = Number(fenceHeightR2 * 100);
    //vyska sloupku rohovy
    const postHeightR = Math.max(postHeight, postHeight2);


    const postTypeProduktsK = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && (produkt.category_type == 2 || produkt.category_type == 4)).slice(0, 1);
    const postTypeProduktsK2 = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight2 && (produkt.category_type == 2 || produkt.category_type == 4)).slice(0, 1);
    const postTypeProduktsP = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight && produkt.category_type == 1).slice(0, 1);
    const postTypeProduktsP2 = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeight2 && produkt.category_type == 1).slice(0, 1);
    const postTypeProduktsR = props.produkty.filter(produkt => produkt.category == idPost && produkt.height >= postHeightR && produkt.category_type == 3).slice(0, 1);
 
    

    //const canvasRef = useRef(null);

    useEffect(() => {
        if (fenceHeightR > 0 && fenceWidthR > 0 && fenceHeightR2 > 0 && fenceWidthR2 > 0) {
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
    }, [fenceHeightR, fenceWidthR, fenceHeightR2, fenceWidthR2]);

    

    //zmena vysky 1.strana
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

    //zmena sirky 1.strana
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

    //zmena vysky 2.strana
    const handleHeightChange2 = (e) => {
        const height2 = e.target.value;
        setFenceHeightOper2(height2);
    };

    const heightChangePlus2 = () => {
        setFenceHeightOper2(fenceHeightR2 + 0.25);
        if (fenceHeightR2 > 3) {
            setFenceHeightOper2(3);
            window.alert("Maximální výška plotu je 3m");
        }
    };

    const heightChangeMinus2 = () => {
        setFenceHeightOper2(fenceHeightR2 - 0.25);
    };

    //zmena sirky 2.strana
    const handleWidthChange2 = (e) => {
        const width2 = e.target.value;
        setFenceWidthOper2(width2);
    };

    const widthChangePlus2 = () => {
        setFenceWidthOper2(fenceWidthR2 + 0.25);
    };

    const widthChangeMinus2 = () => {
        setFenceWidthOper2(fenceWidthR2 - 0.25);
    };

    //vypocet ceny
    const calculatePrice = () => {
        const meter = 100; // 1m = 100cm
        let totalPrice = 0;
        let itemCount = 0;
        let panelCountTotal = 0;
        let panelCountTotal2 = 0;
        let totalPostCount = 0;
        let postCountPA = 0;
        let postCountP2A = 0;

        if (fenceHeight > 0 && fenceWidth > 0 && fenceHeight2 > 0 && fenceWidth2 > 0) {
            let widthPanelCount;
            let widthPanelCount2;
            let panelCountTotalAll;
            let postCountTotalAll;

            let priceUpPro = 0;

            if (barvaRes == true) {
                priceUpPro = 1.35;
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
            widthPanelCount2 = fenceWidth2 / widthPanelM; // pocet panelu na sirku 2.strana

            const postCount = (fenceWidth / (widthPanelM) + 1); // pocet sloupku 1.strana
            const postCount2 = (fenceWidth2 / (widthPanelM) + 1); // pocet sloupku 2.strana
            const postCountK = 2; // pocet sloupku K 1.strana + 2.strana
            const postCountR = 1; // pocet sloupku R

            panelCountTotal = widthPanelCount * (fenceHeight / heightPanelM); // pocet panelu celkem 1.strana
            panelCountTotal2 = widthPanelCount2 * (fenceHeight2 / heightPanelM); // pocet panelu celkem 2.strana

            panelCountTotalAll = Math.ceil(panelCountTotal + panelCountTotal2); // pocet panelu celkem
            postCountTotalAll = Math.ceil((postCount + postCount2 + postCountR) - 2);

            const postCountP = Math.ceil(postCount - 2); // pocet sloupku P 1.strana
            const postCountP2 = Math.ceil(postCount2 - 2);// pocet sloupku P 2.strana

          

            let postPriceK = 0;
            let postPriceP = 0;
            let postPriceK2 = 0;
            let postPriceP2 = 0;
            let postPriceR = 0;

            postTypeProduktsK.map(postTypeProduktK => {
                return (
                    postPriceK = postTypeProduktK.price
                )
            }
            );

            postTypeProduktsK2.map(postTypeProduktK2 => {
                return (
                    postPriceK2 = postTypeProduktK2.price
                )
            }
            );

            if (postCount >= 2) {
                postTypeProduktsP.map(postTypeProduktP => {
                    return (
                        postPriceP = postTypeProduktP.price
                    )
                }
                );
            } else {
                postPriceP = 0
            }

            if (postCount2 >= 2) {
                postTypeProduktsP2.map(postTypeProduktP2 => {
                    return (
                        postPriceP2 = postTypeProduktP2.price
                    )
                }
                );
            } else {
                postPriceP2 = 0
            }

            postTypeProduktsR.map(postTypeProduktR => {
                return (
                    postPriceR = postTypeProduktR.price
                )
            }
            );

            const postPriceTotalK = postPriceK;
            const postPriceTotalK2 = postPriceK2;
            const postPriceTotalP = Math.ceil(postCountP * postPriceP);
            const postPriceTotalP2 = Math.ceil(postCountP2 * postPriceP2);
            const postPriceRTotal = postPriceR;

            let pricePanel = Math.ceil(panelCountTotalAll * priceValue); 
            let tempCalc = Math.ceil((+pricePanel) + (+postPriceTotalP) + (+postPriceTotalK) + (+postPriceTotalK2) + (+postPriceTotalP2) + (+postPriceRTotal));
            let panelPriceAndPostWithColor = Math.ceil(tempCalc * priceUpPro); // cena panelu s barvou
            let panelPriceColorHandle = barvaRes ? panelPriceAndPostWithColor : tempCalc; // cena panelu s barvou nebo bez barvy
            let labelPrice = Math.ceil(panelCountTotalAll * priceLabel); // cena za otisk
            let labelPriceHandle = props.otisk ? labelPrice : 0; // cena za otisk nebo bez otisku
            console.log(
                labelPriceHandle,
                tempCalc,
                "Cena za barvu v %", priceUpPro,
                "Cena za panel (barva)", panelPriceColorHandle,
                "Počet sloupků 1.strana", postCount,
                "Počet sloupků 2.strana", postCount2,
                "Počet sloupků K", postCountK,
                "Počet sloupků R", postCountR,
                "Počet sloupků P", postCountP,
                "Počet sloupků P2", postCountP2,
                "Počet sloupků celkem", postCountTotalAll,
                "Cena sloupku K 1.strana", postPriceK,
                "Cena sloupku P 1.strana", postPriceP,
                "Cena sloupku K 2.strana", postPriceK2,
                "Cena sloupku P 2.strana", postPriceP2,
                "Cena sloupku R", postPriceR,
            );

            totalPrice = +((+panelPriceColorHandle) + (+labelPriceHandle)).toFixed(0);
            itemCount = panelCountTotalAll + postCountTotalAll;
            totalPostCount = postCountTotalAll;
            postCountPA = postCountP;
            postCountP2A = postCountP2;


        }

        return { panelCountTotal, panelCountTotal2, totalPrice, itemCount, panelCountTotalAll, postCount, postCount2, totalPostCount, postCountPA, postCountP2A };
    };

    const { panelCountTotal, panelCountTotal2, totalPrice, itemCount, panelCountTotalAll, postCount, postCount2, totalPostCount, postCountPA, postCountP2A } = calculatePrice();
    // dvě strany
    return <div>

        <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
            <span className="font-medium">Zadejte rozměry plotu</span>
        </div>
     
            {valuesElement && <div>
            <div className="mx-auto items-center grid mb-4 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1">
                        <div>
                            <div className="flex">
                                <div className="flex items-center me-4 ms-2">
                                    Volba jednotek:
                                </div>

                                <div className="flex items-center me-4">
                                    <input id="inline-radio" type="radio" value="0,25" name="valueq" onChange={handleValueChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">0,25 m</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input id="inline-2-radio" type="radio" value="1" name="valueq" onChange={handleValueChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1 m</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input id="inline-3-radio" type="radio" value="10" name="valueq" onChange={handleValueChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-3-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">10 m</label>
                                </div>
                            </div>
                        </div>

            </div>
            </div>}
    

        <div className="grid gap-6 mb-6 md:grid-cols-4">

            <div>

                <label htmlFor="lengthInput" className="block mb-2 text-sm font-medium text-gray-900">Zadejte délku 1.strany (v m):</label>
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
                <label htmlFor="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zadejte výšku 1.strany (v m):</label>
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
                    <button type="button" onClick={heightChangePlus} id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
            </div>
    
            <div>

                <label htmlFor="lengthInput2" className="block mb-2 text-sm font-medium text-gray-900">Zadejte délku 2.strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={widthChangeMinus2} id="decrement-button" data-input-counter-decrement="lengthInput2" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="lengthInput2"
                        value={fenceWidth2}
                        max={100}
                        onChange={handleWidthChange2}
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
                    <button type="button" onClick={widthChangePlus2} id="increment-button" data-input-counter-increment="lengthInput2" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            <div>
                <label htmlFor="quantity-input2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zadejte výšku 2.strany (v m):</label>
                <div className="relative flex items-center max-w-[11rem]">
                    <button type="button" onClick={heightChangeMinus2} id="decrement-button" data-input-counter-decrement="quantity-input2" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        type="number"
                        id="quantity-input2"
                        value={fenceHeight2}
                        max={3}
                        onChange={handleHeightChange2}
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
                    <button type="button" onClick={heightChangePlus2} id="increment-button" data-input-counter-increment="quantity-input2" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

            </div>

            {fenceWidthR > 0 && fenceHeightR > 0 && fenceWidthR2 > 0 && fenceHeightR2 > 0 && (

                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                            <span className="text-sm font-medium text-gray-900">1. strana</span>
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Panelů celkem:  {panelCountTotal} ks </span>
                            <input type="hidden" id="panelCountTotal" name="panelCountTotal" value={panelCountTotalAll} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků koncových: 1 ks </span>
                            <input type="hidden" id="totalPostCountK" name="totalPostCountK" value='1' />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků průběžných: {postCountPA} ks </span>
                            <input type="hidden" id="postCountPA" name="postCountPA" value={postCountPA} />
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
            {fenceWidthR > 0 && fenceHeightR > 0 && fenceWidthR2 > 0 && fenceHeightR2 > 0 && (
                <div>
                <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                        <span className="text-sm font-medium text-gray-900">2. strana</span>
                    </li>
                    <li>
                        <span className="text-sm font-medium text-gray-900">Panelů celkem:  {panelCountTotal2} ks </span>
                        <input type="hidden" id="panelCountTotal" name="panelCountTotal2" value={panelCountTotal2} />
                    </li>
                    <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků koncových: 1 ks </span>
                            <input type="hidden" id="totalPostCountK2" name="totalPostCountK2" value='1' />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků průběžných: {postCountP2A} ks </span>
                            <input type="hidden" id="postCountP2A" name="postCountP2A" value={postCountP2A} />
                        </li>
                    <li>
                        <span className="text-sm font-medium text-gray-900">Délka plotu:  {fenceWidth2} m </span>
                        <input type="hidden" id="fenceWidth2" name="fenceWidth2" value={fenceWidth2} />
                    </li>
                    <li>
                        <span className="text-sm font-medium text-gray-900">Výška sloupku a plotu:  {fenceHeight2} m </span>
                        <input type="hidden" id="fenceHeight2" name="fenceHeight2" value={fenceHeight2} />
                    </li>
                </ul>
                </div>
            )}
            {fenceWidthR > 0 && fenceHeightR > 0 && fenceWidthR2 > 0 && fenceHeightR2 > 0 && (
                <div>
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                        <li>
                            <span className="text-sm font-medium text-gray-900">*Orientační cena celkem: {totalPrice} Kč </span>
                            <input type="hidden" id="totalPrice" name="totalPrice" value={totalPrice} />
                            <input type="hidden" id="panelCountTotal" name="panelCountTotalAll" value={panelCountTotalAll} />                         
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Položek celkem: {itemCount} ks </span>
                            <input type="hidden" id="itemCount" name="itemCount" value={itemCount} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Sloupků celkem: {totalPostCount} ks, včetně 1 ks rohového</span>
                            <input type="hidden" id="totalPostCount" name="totalPostCount" value={totalPostCount} />
                            <input type="hidden" id="totalPostCountR" name="totalPostCountR" value='1' />
                            <input type="hidden" id="typeFence" name="typeFence" value='L' />
                        </li>
                    </ul>
                </div>
            )}
            {fenceWidthR > 0 && fenceHeightR > 0 && fenceWidthR2 > 0 && fenceHeightR2 > 0 && (
                <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">*Poznámka: Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za montáž a dopravu.</span>
                </div>
            )}
              
    </div>
    </div>;
}