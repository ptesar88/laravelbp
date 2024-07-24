type FenceRootProps = {
    produkt: Produkt;
    sloupky: Sloupek[];
    otisky: Otisk[];
};

function FenceRoot(props: FenceRootProps) {
    const {
        produkt,
        sloupky,
        otisky,
    } = props;

    const [chciOtisk, setChciOtisk] = React.useState(false);
    const [vybranyOtisk, vyberOtisk] = React.useState(null);
    const [vybranySloupek, vyberSloupek] = React.useState(null);
    

    console.log("render", vybranyOtisk, vybranySloupek);

    return (
        <section className="free-post">
            <h2 className="mx-auto items-center text-center text-2xl mb-2 max-w-4xl md:mb-8 font-extrabold dark:text-white">Konfigurátor</h2>
            <div className="relative z-20 mx-auto max-w-6xl items-center p-2 mb-8 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
                <span className="font-medium">1. Vybrali jste</span>
            </div>
            <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-3 md:gap-3">
                <div>
                    <h3 className="mx-auto items-center text-center font-bold dark:text-white">{produkt.name}</h3>
                </div>
                <div>
                    <img className="mx-auto items-center" src={produkt.thumbnail_url} alt="" />
                </div>
                <div>
                    <div className="mx-auto items-center text-center font-bold dark:text-white">Rozměry: {produkt.width}x{produkt.height}x{produkt.depth}cm</div>
                    <div className="mx-auto items-center text-center font-bold dark:text-white">Cena: {produkt.price} Kč</div>
                </div>
            </div>

            {produkt.label == 'Ano' && (
                <div>
                    <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1">
                        <div>
                            <div className="flex">
                                <div className="flex items-center me-4 ms-2 font-bold">
                                    Chcete použít otisk?
                                </div>

                                <div className="flex items-center me-4">
                                    <input id="inline-radio" type="radio" value="ano" onChange={() => setChciOtisk(true)} name="otiskq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ANO</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <input id="inline-2-radio" type="radio" value="ne" onChange={() => setChciOtisk(false)} name="otiskq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NE</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {chciOtisk && <div id="otiskKonfig" className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                        {otisky.map(otisk => {
                            return (
                                <div key={otisk.id}>
                                    <figure className="flex h-48 flex-col rounded-md shadow-md bg-gray-50 border border-gray-300">
                                        <div className="flex items-center ps-4 ">
                                            <input id={"otisk-" + otisk.id} type="radio" value={otisk.id} onChange={() => { console.log("select", otisk); vyberOtisk(otisk); }} name="otisk_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                                            <label htmlFor={"otisk-" + otisk.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{otisk.name}</label>
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
                                                <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
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


            <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
                <span className="font-medium">2. Vyberte typ sloupku</span>
            </div>

            <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                {sloupky.map(sloupek => {
                    return (
                        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                            <input id={"sloupek-id" + sloupek.id} type="radio" value={sloupek.id} onChange={() => { console.log("select", sloupek); vyberSloupek(sloupek); }} name="sloupek_id" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                            <label htmlFor={"sloupek-id" + sloupek.id} className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{sloupek.name}</label>
                        </div>
                    );
                })}
            </div>
            <div className="relative z-20 mx-auto max-w-6xl items-center mt-12 p-2 mb-2 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-200" role="alert">
                <span className="font-medium">3. Vyberte tvar plotu</span>
            </div>

            <FenceType produkt={produkt} otisk={vybranyOtisk} sloupek={vybranySloupek} />
        </section>
    );
}
