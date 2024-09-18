function Demand() {
    const initState = {
        company: '',
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        localisation: '',
        checkbox: false,

    };

    const [chciDopravu, setChciDopravu] = React.useState(false);

    const [chciMontaz, setChciMontaz] = React.useState(false);
    
    const [state, setState] = React.useState(initState);
    
    const [zobrazitPodminky, setZobrazitPodminky] = React.useState(false);

    const saveDemand = async (e: any) => {

        e.preventDefault();

        const { company, firstname, lastname, phone, email, localisation, checkbox } = state;
        if (company === '' || firstname === '' || lastname === '' || phone === '' || email === '' || localisation === '' || checkbox === false) {
            alert('Vyplňte prosím všechny povinné údaje.');
            return;
        }
        const data = {
            company,
            firstname,
            lastname,
            phone,
            email,
            localisation,

        };
        const response = await fetch('/api/demands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status === 201) {
            alert('Poptávka byla úspěšně odeslána.');
            setState({
                company: '',
                firstname: '',
                lastname: '',
                phone: '',
                email: '',
                localisation: '',
                checkbox: false
            });
        } else {
            alert('Poptávku se nepodařilo odeslat.');
        }

    };

    return (

        <div>
            {zobrazitPodminky && (

                <div id="default-modal" className="overflow-y-auto overflow-x-hidden fixed top-0 mx-auto z-50 bg-gray-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-4/5">

                        <div className="relative bg-white dark:bg-gray-700 mx-auto">

                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 dark:border-gray-600">
                                <button type="button" onClick={() => setZobrazitPodminky(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ms-auto justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <Conditions />
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 dark:border-gray-600">
                                <button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-blue-600 hover:underline dark:text-blue-500" onClick={() => setZobrazitPodminky(false)}>Zavřít</button></div>
                            </div>
                        </div>
                </div>

            )}

            <div className="relative z-20 mx-auto max-w-6xl items-center p-2 my-4 text-base text-amber-800 rounded-lg bg-amber-50 border border-amber-500" role="alert">
                <span className="font-medium">Poptávka</span>
            </div>


            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Firma</label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="firstname" id="firstname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="firstname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jméno*</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="lastname" id="lastname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="lastname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Příjmení*</label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefon*</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email*</label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="localisation" id="localisation" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                <label htmlFor="localisation" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Místo realizace*</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="notes" id="notes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                <label htmlFor="notes" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Poznámka</label>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">*Poznámka: Povinná pole.</span>
            <div className="mx-auto items-center grid mb-2 mt-2 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1">
                        <div>
                            <div className="flex">
                                <div className="flex items-center w-20 me-4 ms-2 font-bold">
                                    Doprava
                                </div>

                                <div className="flex h-16 items-center ps-4 pe-4 mr-2 mb-2 border border-gray-200 bg-slate-200 rounded">
                                    <input id="inline-radio-doprava" type="radio" value="Ano" onChange={() => setChciDopravu(true)} name="dopravaq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-radio-doprava" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ANO</label>
                                </div>
                                <div className="flex h-16 items-center ps-4 pe-4 mb-2 border border-gray-200 bg-slate-200 rounded">
                                    <input id="inline-2-radio-doprava" type="radio" value="Ne" onChange={() => setChciDopravu(false)} name="dopravaq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-2-radio-doprava" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NE*</label>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-1 md:gap-1">
                        <div>
                            <div className="flex">
                                <div className="flex items-center w-20 me-4 ms-2 font-bold">
                                   Montáž
                                </div>

                                <div className="flex h-16 items-center ps-4 pe-4 mr-2 mb-2 border border-gray-200 bg-slate-200 rounded">
                                    <input id="inline-radio-montaz" type="radio" value="Ano" onChange={() => setChciMontaz(true)} name="montazq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-radio-montaz" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ANO</label>
                                </div>
                                <div className="flex h-16 items-center ps-4 pe-4 mb-2 border border-gray-200 bg-slate-200 rounded">
                                    <input id="inline-2-radio-montaz" type="radio" value="Ne" onChange={() => setChciMontaz(false)} name="montazq" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-2-radio-montaz" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NE*</label>
                                </div>
                            </div>
                        </div>
                        </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">*Poznámka: V případě, že si nevyberete dopravu nebo montáž, budete zajišťovat svépomocí.</span>

            <fieldset>
                <div className="flex items-center mb-4">
                    <input id="checkbox" type="checkbox" name="checkbox" className="w-4 h-4 mt-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><button type="button" data-modal-target="default-modal" data-modal-toggle="default-modal" onClick={() => setZobrazitPodminky(true)} className="mt-8 text-blue-600 hover:underline dark:text-blue-500">Souhlasím se zpracováním osobních údajů</button>.</label>
                </div>
            </fieldset>

            <button type="submit" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Odeslat poptávku</button>

        
            </div>


    );
}
