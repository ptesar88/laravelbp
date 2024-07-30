export type Produkt = {
  name: string;
  thumbnail_url: string;
  width: number;
  height: number;
  depth: number;
  price: number;
  label: string;
};

export type Produkty = {
  name: string;
  thumbnail_url: string;
  width: number;
  height: number;
  depth: number;
  price: number;
  label: string;
};

export type Otisk = {
  id: number;
  name: string;
  thumbnail_url: string;
  top: string;
  label: string;
  price: number;
};

export type Sloupek = {
  id: number;
  name: string;
  price: number;
};

const meter = 100;

const FenceICalculator = (props: {
  produkt: Produkt;
  otisk: Otisk | null;
  sloupek: Sloupek | null;
  produkty: Produkty;
}) => {
  return (
    <div>
      <FenceI produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty} />
    </div>
  );
}
const FenceLCalculator = (props: {
  produkt: Produkt;
  otisk: Otisk | null;
  sloupek: Sloupek | null;
  produkty: Produkty;
}) => {
  return (
    <div>
      <FenceL produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty} />
    </div>
  );
}
const FenceUCalculator = (props: {
  produkt: Produkt;
  otisk: Otisk | null;
  sloupek: Sloupek | null;
  produkty: Produkty;
}) => {
  return (
    <div>
      <FenceU produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty} />
    </div>
  );
}

const FenceType = (props: {
  produkt: Produkt;
  otisk: Otisk | null;
  sloupek: Sloupek | null;
  produkty: Produkty;
}) => {
  const [fenceType, setFenceType] = React.useState('');

  const handleTypeChange = (e) => {
    setFenceType(e.target.value);

  };

  return (
    <div>
      <UserSelectedFence />

      <div className="mx-auto items-center grid mb-2 max-w-6xl md:mb-8 md:grid-cols-4 md:gap-3">
        <div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-1" type="radio" value="tvar-I" onChange={handleTypeChange} name="tvarplotu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
            <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar I (jedna strana)</label>
          </div>
        </div>
        {/*
        <div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-2" type="radio" value="tvar-L" onChange={handleTypeChange} name="tvarplotu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
            <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar L (dvě strany)</label>
          </div>
        </div>
        <div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
            <input id="bordered-radio-3" type="radio" value="tvar-U" onChange={handleTypeChange} name="tvarplotu" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" />
            <label htmlFor="bordered-radio-3" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tvar U (tři strany)</label>
          </div>
        </div>
        */}
      </div>

      {fenceType === "tvar-I" && <FenceICalculator produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty}/>}
      {fenceType === "tvar-L" && <FenceLCalculator produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty}/>}
      {fenceType === "tvar-U" && <FenceUCalculator produkt={props.produkt} otisk={props.otisk} sloupek={props.sloupek} produkty={props.produkty}/>}

      <Demand />
    </div>
  );
};
// render plotu
//<canvas ref={canvasRef} width={(fenceLength + 2) * 10} height={(fenceWidth + 2) * 10 + 20}></canvas>

