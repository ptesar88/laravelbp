
type FenceRootProps = {
    produkt: Produkt;
    sloupky: Sloupek[];
    sloupkyPremium: sloupkyPremium[];
    sloupkyKlasik: sloupkyKlasik[];
    otisky: Otisk[];
    produkty: Produkty[];
    colors: Colors[];
};

function FenceRoot(props: FenceRootProps) {
    const {
        produkt,
        sloupky,
        sloupkyPremium,
        sloupkyKlasik,
        otisky,
        produkty,
        colors,
    } = props;

    const [chciOtisk, setChciOtisk] = React.useState(null);
    const [vybranyOtisk, vyberOtisk] = React.useState(null);
    const [chciBarvu, setChciBarvu] = React.useState(null);
    const [vybranaBarva, vyberBarvu] = React.useState(null);
    const [vybranySloupek, vyberSloupek] = React.useState(null);

    const sloupkyTypy = props.produkt.product_type == 1 ? sloupkyPremium : sloupkyKlasik;

    let doplnekVybranOtiskBarva = (chciBarvu !== null) && (chciOtisk !== null) ? 'block' : 'hidden';
    let doplnekVybranBarva = chciBarvu !== null ? 'block' : 'hidden'; 
  
    const doplnekVybran = produkt.label == 'Ano' ? doplnekVybranOtiskBarva : doplnekVybranBarva;
    const sloupekVybran = vybranySloupek !== null ? 'block' : 'hidden'; 
    const titulekHandle = (chciBarvu !== null) && (chciOtisk !== null) ? true : false;
    const titulekHandlePlot = vybranySloupek !== null ? true : false;
   
    console.log("render", chciOtisk, chciBarvu, doplnekVybran);

    console.log("sloupky product_type", props.produkt.product_type, sloupkyTypy );

    return (

        <section className="free-post">
            <h2 className="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold">Konfigurátor</h2>
            <div className="relative z-20 mx-auto max-w-6xl items-center p-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                <span className="font-medium">Vybrali jste</span>
            </div>
            <div className="mx-auto items-center p-8 grid max-w-6xl md:grid-cols-3 md:gap-3 bg-gray-50">
                <div>
                    <h3 className="mx-auto items-center text-center font-bold">{produkt.name}</h3>
                </div>
                <div>
                    <img className="mx-auto items-center" src={produkt.thumbnail_url} alt="" />
                </div>
                <div>
                    <div className="mx-auto items-center">Rozměry: {produkt.width}x{produkt.height}x{produkt.depth}cm</div>
                    <div className="mx-auto items-center">Cena: {produkt.price} Kč</div>
                </div>
            </div>
            <div className="relative z-20 mx-auto max-w-6xl items-center p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                <span className="font-medium">Doplňky</span>{doplnekVybran && <span className="text-slate-700 ml-2 text-sm">prosím vyberte níže, poté budete pokračovat na výběr sloupku</span>}
            </div>
            {produkt.label == 'Ano' && (
                <div>
                    <div className="mx-auto items-center text-center grid md:grid-cols-3 md:gap-3 mb-2 max-w-6xl">
                        <div className="flex">
                            <div className="flex mx-auto items-center text-center">
                                <div className="flex items-center justify-center me-4 ms-2 font-bold">
                                    Chcete použít otisk?
                                </div>
                            </div>
                        </div> 
                        <div className="flex">  
                                <div className="flex h-16 items-center text-center ps-4 pe-4 mr-2 border border-gray-200 bg-slate-200 rounded">
                                        <input id="inline-radio" type="radio" value="Ano" onChange={() => setChciOtisk(true)} name="otiskq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900">ANO</label>
                                </div>
                                <div className="flex h-16 items-center text-center ps-4 pe-4 border border-gray-200 bg-slate-200 rounded">
                                        <input id="inline-2-radio" type="radio" value="Ne" onChange={() => setChciOtisk(false)} name="otiskq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                        <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900">NE</label>
                                </div>
                            </div>     
                        <div></div>
                    </div>

                    {chciOtisk && <div id="otiskKonfig" className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                        {otisky.map(otisk => {
                            return (
                                <div key={otisk.id}>
                                    <figure className="flex h-48 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                                        <div className="flex items-center ps-4 ">
                                            <input id={"otisk-" + otisk.id} type="radio" value={otisk.id} onChange={() => { console.log("select", otisk); vyberOtisk(otisk); }} name="otisk_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor={"otisk-" + otisk.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900">{otisk.name}</label>
                                        </div>
                                        <div className="h-24">
                                            <img className="mx-auto max-h-[85px]" src={otisk.thumbnail_url} alt="" />
                                        </div>

                                        
                                        <div className="h-12 items-center justify-center text-center bg-gray-200 right-0">
                                            {(otisk.top == 'Ano') && (
                                                <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                    <span className="w-2 h-2 me-1 bg-blue-500 rounded-full"></span>
                                                    TOP
                                                </span>
                                            )}

                                            {(otisk.label == 'Ano') && (
                                                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                                    <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                                                    OTISK
                                                </span>
                                            )}
                                            <span className="text-sm font-semibold ml-2">cena od: {otisk.price} Kč</span>
                                        </div>
                                    </figure>
                                </div>
                            );
                        })}
                    </div>}
                </div>)
            }
        {produkt.label == 'Ano' && <hr className="h-px my-4 bg-amber-300 border-0"></hr>}
        <div>
                    <div className="mx-auto items-center text-center grid md:grid-cols-3 md:gap-3 mb-2 max-w-6xl">
                        <div className="flex">
                            <div className="flex mx-auto items-center text-center">
                                <div className="flex items-center justify-center me-4 ms-2 font-bold">
                                Barevná varianta plotu?
                                </div>
                            </div>
                        </div> 
                        <div className="flex">
                            <div className="flex h-16 items-center ps-4 pe-4 mr-2 border border-gray-200 bg-slate-200 rounded">
                                <input id="inline-radio" type="radio" value="Ano" onChange={() => setChciBarvu(true)} name="barvaq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900">ANO</label>
                            </div>
                            <div className="flex h-16 items-center ps-4 pe-4 border border-gray-200 bg-slate-200 rounded">
                                <input id="inline-2-radio" type="radio" value="Ne" onChange={() => setChciBarvu(false)} name="barvaq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900">NE</label>     
                            </div>
                        </div>    
                        <div className="flex items-center text-xs font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>
                            +45% z celkové ceny plotu 
                        </div>
                    </div>

                    {chciBarvu && <div id="barvaKonfig" className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                        {colors.map(color => {
                            return (
                                <div key={color.id}>
                                    <figure className="flex h-64 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                                        <div className="flex items-center ps-4 ">
                                            <input id={"barva-" + color.id} type="radio" value={color.id} onChange={() => { console.log("select", color); vyberBarvu(color); }} name="barva_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor={"barva-" + color.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900">{color.name}</label>
                                        </div>
                                        <div className="h-48">
                                            <img className="mx-auto bg-cover w-full max-h-[190px]" src={color.thumbnail_url} alt="" /> 
                                        </div>
                                 
                                    </figure>
                                </div>
                            );
                        })}
                    </div>}
                </div>

        <div>
            <div className="relative z-20 mx-auto max-w-6xl items-center p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                <span className="font-medium">Vyberte typ sloupku</span>{titulekHandle && <span className="text-slate-700 ml-2 text-sm">prosím vyberte níže typ sloupku, poté budete pokračovat na výběr typ plotu</span>}
            </div>
            <div className={doplnekVybran}>
            <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
            {sloupkyTypy.map(sloupek => {
                    return (
                        <div key={sloupek.id}>
                                 <figure className="flex h-64 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                                        <div className="flex items-center ps-4 ">
                                            <input id={"sloupek-id" + sloupek.id} type="radio" value={sloupek.id} onChange={() => { console.log("select", sloupek); vyberSloupek(sloupek); }} name="sloupek_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor={"sloupek-id" + sloupek.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900">{sloupek.name}</label>
                                        </div>
                                        <div className="h-48">
                                            <img className="mx-auto bg-cover w-full max-h-[190px]" src={sloupek.thumbnail_url} alt="" /> 
                                        </div>
                                 
                                    </figure>
                    </div>                        
                    );
                })
            }
            </div>
            </div>
            </div>
            
            <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                <span className="font-medium">Vyberte tvar plotu</span>{titulekHandlePlot && <span className="text-slate-700 ml-2 text-sm">prosím vyberte níže typ plotu, poté zadejte požadované rozměry v metrech</span>}
            </div>

            <div className={sloupekVybran}>
            <FenceType produkt={produkt} chciOtisk={chciOtisk} chciBarvu={chciBarvu} otisk={vybranyOtisk} barva={vybranaBarva} sloupek={vybranySloupek} produkty={produkty}/>
            </div>
        </section>
    );
}
