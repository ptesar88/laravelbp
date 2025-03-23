
function BedRoot(props: FenceRootProps) {
    const {
        produkt,
        sloupky,
        sloupkyPremium,
        sloupkyKlasik,
        otisky,
        produkty,
        colors,
        decors,
        beds,
    } = props;

    const decor = props.decors.filter(decors => decors.id == produkt.category_bed);
    let decorName = decor[0].name;


    const { useState } = React;

    const [bedAmount, setFenceHeightOper] = useState(1);

    const [bedColor, setBedColor] = useState(0);

    const handleColor = (e: any) => {
        const inputValue = e.target.value;
        const bedColor = parseInt(inputValue, 10);

        if (!isNaN(bedColor) && bedColor > 0) {
            setBedColor(bedColor);
            console.log("handleColor", bedColor, decorName);
        } else {
            console.warn("Invalid input for bed color:", inputValue);
        }
    }

    const handleHeightChange = (e: any) => {
        const inputValue = e.target.value;
        const bedAmount = parseInt(inputValue, 10);

        if (!isNaN(bedAmount) && bedAmount > 0) {
            setFenceHeightOper(bedAmount);
            console.log("handleHeightChange", bedAmount);
        } else {
            console.warn("Invalid input for bed amount:", inputValue);
        }
    };

    const amountChangePlus = () => {
        setFenceHeightOper(prevHeight => Math.max(1, prevHeight + 1));
        console.log("Amount of beds:", bedAmount);
    };

    const amountChangeMinus = () => {
        setFenceHeightOper(prevHeight => Math.max(1, prevHeight - 1));
        console.log("Amount of beds:", bedAmount);
    };

    let bedColorSet = bedColor !== 0 ? true : false;
    
    const totalPrice = bedAmount * bedColor;
    const bedWeightAmount = bedAmount * produkt.weight;



    return (
        <div>
            <section className="free-post">
                <h2 className="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold">Konfigurátor záhonu</h2>
                <div className="relative z-20 mx-auto max-w-6xl items-center p-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                    <span className="font-medium">Vybrali jste</span>
                </div>
                <div className="mx-auto items-center p-8 grid max-w-6xl md:grid-cols-3 md:gap-3">
                    <div>
                        <h3 className="mx-auto items-center text-center font-bold">{produkt.name}</h3>
                    </div>
                    <div>
                        <img className="mx-auto items-center" src={produkt.thumbnail_url} alt="" />
                    </div>
                    <div>
                        <div className="mx-auto items-center">Rozměry: {produkt.width}x{produkt.depth}x{produkt.height}cm</div>
                        <div className="mx-auto items-center">Dekor: {decorName}</div>
                        <div className="mx-auto items-center">Cena od: {produkt.price} Kč</div>
                    </div>
                </div>
                <div className="relative z-20 mx-auto max-w-6xl items-center p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                    <span className="font-medium">Doplňky</span><span className="text-slate-700 ml-2 text-sm">prosím vyberte níže</span>
                </div>

                <div>
                    <div className="mx-auto items-center text-center grid md:grid-cols-3 md:gap-3 mb-4 max-w-6xl">
                        <div className="flex">
                            <div className="flex mx-auto items-center text-center">
                                <div className="flex items-center justify-center me-4 ms-2 font-bold">
                                    Barevná varianta záhonu?
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="barvaKonfig" className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                        {beds.map(bed => {
                            return (
                                <div key={bed.id}>
                                    <figure className="flex h-64 flex-col rounded-md shadow-md border border-gray-300">
                                        <div className="flex items-center ps-4 ">
                                            <input id={"barva-" + bed.id} type="radio" value={bed.price} onChange={handleColor} name="barva_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor={"barva-" + bed.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900">{bed.color_name}</label>
                                        </div>
                                        <div className="h-48">
                                            <img className="mx-auto bg-cover md:p-0 p-2 w-auto max-h-[190px]" src={bed.thumbnail_url} alt="" />
                                        </div>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
                { bedColorSet && 
                <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                    <span className="font-medium">Počet kusů záhonů?</span><span className="text-slate-700 ml-2 text-sm">prosím zadejte počet kusů níže</span>
                </div>
                }   
                <div>
                { bedColorSet &&
                    <div className="relative flex items-center max-w-[11rem]">
                        <button type="button" onClick={amountChangeMinus} id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                            </svg>
                        </button>
                        <input
                            type="number"
                            id="quantity-input"
                            value={bedAmount}
                            min={0}
                            step={1}
                            max={50}
                            onChange={handleHeightChange}
                            className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6"
                            required

                        />
                        <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                            </svg>
                            <span>Počet kusů</span>
                        </div>
                        <button type="button" onClick={amountChangePlus} id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                            </svg>
                        </button>
                    </div>
                } 
                </div>
            
                <div>
                { bedColorSet &&
                    <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside mt-2">
                        <li>
                            <span className="text-sm font-medium text-gray-900">*Orientační cena celkem:  {totalPrice} Kč </span>
                            <input type="hidden" id="totalPrice" name="totalPrice" value={totalPrice} />
                            <input type="hidden" id="panelCountTotalAll" name="panelCountTotalAll" value={bedAmount} />    
                            <input type="hidden" id="decor" name="decor" value={decorName} />                       
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Položek celkem: {bedAmount} ks </span>
                            <input type="hidden" id="bedAmount" name="bedAmount" value={bedAmount} />
                        </li>
                        <li>
                            <span className="text-sm font-medium text-gray-900">Celková hmotnost záhonů: {bedWeightAmount} kg </span>
                            <input type="hidden" id="bedWeightAmount" name="bedWeightAmount" value={bedWeightAmount} />
                        </li>
                       

                    </ul>
                }
                 { bedColorSet &&
                    <div>
                    <span className="text-xs text-gray-500">*Poznámka: Orientační cena celkem bude upravena podle místa realizace zakázky a bude přičtena cena za dopravu.</span>
                </div>
                }
                </div>

            </section>
            { bedColorSet &&
            <DemandBed />
            }
        </div>
    );
}
