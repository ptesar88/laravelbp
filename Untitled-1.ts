const { useState, useEffect, useRef } = React;

const meter = 100;

// Dummy product catalog
const productCatalog = [
    { name: 'Fence Panel', price: priceValue },
    { name: 'Fence Post', price: postPriceValue },
    { name: 'Fence Panel Height', height: heightValue },
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

            horizontalPanelCount = Math.ceil((fenceLength / (width / meter)) * fenceWidth); // Assuming each panel width in m
            postCount = Math.ceil((fenceLength / (width / meter)) + 1); // Assuming one post for each end of the panel
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
                        <input id="bordered-radio-1" type="radio" value="I" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar I (jedna strana)</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-2" type="radio" value="L" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar L (dvě strany)</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-3" type="radio" value="U" onChange={handleTypeChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="bordered-radio-3" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar U (tři strany)</label>
                    </div>
                </div>
            </div>

            {fenceType === "I" && <FenceICalculator />}
            {fenceType === "L" && <FenceLCalculator />}
            {fenceType === "U" && <FenceUCalculator />}
        </form>
    );
};

const LabelChange = () => {

    const handleLabelChange = (e) => {
        setFenceType(e.target.value);
    };

    return (
        <form>
            <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
                <div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="Ano" onChange={handleLabelChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ano</label>
                    </div>
                </div>
                <div>
                    <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                        <input id="bordered-radio-2" type="radio" value="Ne" onChange={handleLabelChange} name="radioSel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
                        <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ne</label>
                    </div>
                </div>
            </div>
        </form>
    );
};