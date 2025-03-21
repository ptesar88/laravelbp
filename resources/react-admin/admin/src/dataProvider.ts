import simpleRestProvider from "ra-data-simple-rest";
import { CreateParams, DataProvider, UpdateParams, fetchUtils } from "react-admin";

const endpoint = import.meta.env.VITE_SIMPLE_REST_URL;
const baseDataProvider = simpleRestProvider(endpoint);

type ProductParams = {
    id: number; // Add the 'id' property to satisfy the 'RaRecord<Identifier>' constraint
    name: string;
    thumbnail: {
        rawFile: File;
        src?: string;
        title?: string;
    };
    width: string;
    height: string;
    depth: string;
    weight: string;
    price: string;
    label: string;
    type: string;
    top: string;
    category: string;
    category_type: string;
    product_type: string;
    category_desk: string;
};
type AdvantageParams = {
    id: number; // Add the 'id' property to satisfy the 'RaRecord<Identifier>' constraint
    name: string;
    title: string;
    body: string;
    icon: string;
    motto: string;
};
type SpecificationParams = {
    id: number; 
    body: string;
};
type AssemblyParams = {
    id: number; 
    body: string;
};

type demandAddOnParams = {
    id: number; 
    name: string;
    unit: string;
    price: string;
};

type DemandParams = {
    id: number; 
    firstname: string;
    lastname: string;
    company: string;
    phone: string;
    email: string;
    localisation: string;
    doprava: string;
    montaz: string;
    totalPrice: string;
    body: string;
    demand_addons_id: Array<string>;
    demand_addons_name: Array<string>;
    demand_addons_unit: Array<string>;
    demand_addons_count: Array<string>;
    demand_addons_price: Array<string>;
};

const updateDemandsAddOnFormData = (
    params: UpdateParams<demandAddOnParams>
) => {
    const formData = new FormData();

    params.data.name && formData.append("name", params.data.name);
    params.data.unit && formData.append("unit", params.data.unit);
    params.data.price && formData.append("price", params.data.price);

    return formData;
};

const createDemandAddOnFormData = (
    params: CreateParams<demandAddOnParams>
) => {
    const formData = new FormData();

    params.data.name && formData.append("name", params.data.name);
    params.data.unit && formData.append("unit", params.data.unit);
    params.data.price && formData.append("price", params.data.price);

    return formData;
};

const updateDemandsFormData = (
    params: UpdateParams<DemandParams>
) => {
    const formData = new FormData();

    if (params.data.firstname)  formData.append("firstname", params.data.firstname);
    if (params.data.lastname)  formData.append("lastname", params.data.lastname);
    if (params.data.company)  formData.append("company", params.data.company);
    if (params.data.phone)  formData.append("phone", params.data.phone);
    if (params.data.email)  formData.append("email", params.data.email);
    if (params.data.localisation)  formData.append("localisation", params.data.localisation);
    if (params.data.doprava)  formData.append("doprava", params.data.doprava);
    if (params.data.montaz)  formData.append("montaz", params.data.montaz);
    if (params.data.totalPrice)  formData.append("totalPrice", params.data.totalPrice);
    if (params.data.body)  formData.append("body", params.data.body);
    
    const addons = [];
    for (let i = 0; i < (params.data.demand_addons_price ?? []).length; i++) {
        const addon = {
            price: params.data.demand_addons_price?.[i],
            name: params.data.demand_addons_name?.[i],
            unit: params.data.demand_addons_unit?.[i],
            count: params.data.demand_addons_count?.[i],
        };
        addons.push(addon);
    }
    formData.append("demand_addons", JSON.stringify(addons)); 

    return formData;
};


const createDemandFormData = (
    params: CreateParams<DemandParams>
) => {
    const formData = new FormData();

    params.data.firstname && formData.append("firstname", params.data.firstname);
    params.data.lastname && formData.append("lastname", params.data.lastname);
    params.data.company && formData.append("company", params.data.company);
    params.data.phone && formData.append("phone", params.data.phone);
    params.data.email && formData.append("email", params.data.email);
    params.data.localisation && formData.append("localisation", params.data.localisation);
    params.data.doprava && formData.append("doprava", params.data.doprava);
    params.data.montaz && formData.append("montaz", params.data.montaz);
    params.data.totalPrice && formData.append("totalPrice", params.data.totalPrice);
    params.data.body && formData.append("body", params.data.body);

    return formData;
};

const createProductsFormData = (
    params: CreateParams<ProductParams>
) => {
    const formData = new FormData();

    params.data.thumbnail?.rawFile && formData.append("thumbnail", params.data.thumbnail.rawFile);
    params.data.name && formData.append("name", params.data.name);

    return formData;
};

const updateProductsFormData = (
    params: UpdateParams<ProductParams>
) => {
    const formData = new FormData();

    params.data.thumbnail?.rawFile && formData.append("thumbnail", params.data.thumbnail.rawFile);
    params.data.name && formData.append("name", params.data.name);
    params.data.width && formData.append("width", params.data.width);
    params.data.height && formData.append("height", params.data.height);
    params.data.depth && formData.append("depth", params.data.depth);
    params.data.weight && formData.append("weight", params.data.weight);
    params.data.price && formData.append("price", params.data.price);
    params.data.label && formData.append("label", params.data.label);
    params.data.type  && formData.append("type", params.data.type);
    params.data.top && formData.append("top", params.data.top);
    params.data.category && formData.append("category", params.data.category);
    params.data.category_type  && formData.append("category_type", params.data.category_type); 
    params.data.product_type && formData.append("product_type", params.data.product_type); 

    return formData;
};

const createAdvantagesFormData = (
    params: CreateParams<AdvantageParams>
) => {
    const formData = new FormData();

    params.data.name && formData.append("name", params.data.name);
    params.data.body && formData.append("body", params.data.body);
    params.data.title && formData.append("title", params.data.title);
    params.data.icon && formData.append("icon", params.data.icon);
    params.data.motto && formData.append("motto", params.data.motto);

    return formData;
};

const updateAdvantagesFormData = (
    params: UpdateParams<AdvantageParams>
) => {
    const formData = new FormData();

    params.data.name && formData.append("name", params.data.name);
    params.data.body && formData.append("body", params.data.body);
    params.data.title && formData.append("title", params.data.title);
    params.data.icon && formData.append("icon", params.data.icon);
    params.data.motto && formData.append("motto", params.data.motto);
   
    return formData;
};

const updateSpecificationsFormData = (
    params: UpdateParams<SpecificationParams>
) => {
    const formData = new FormData();

    params.data.body && formData.append("body", params.data.body);
   
    return formData;
};

const updateAssemblyFormData = (
    params: UpdateParams<AssemblyParams>
) => {
    const formData = new FormData();

    params.data.body && formData.append("body", params.data.body);
   
    return formData;
};


export const dataProvider: DataProvider = {
    ...baseDataProvider,
    create: (resource, params) => {
        if (resource === "products") {
            const formData = createProductsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "advantages") {  
            const formData = createAdvantagesFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "demands") {  
            const formData = createDemandFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "demand_addons") {
            const formData = createDemandAddOnFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "product_desks") {
            const formData = createProductsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }

        return baseDataProvider.create(resource, params);
    },
    update: (resource: string, params: any) => {
        console.log(resource, params);

        if (resource === "products") {
            const formData = updateProductsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "advantages") {  
            const formData = updateAdvantagesFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
         }else if (resource === "specifications") {  
            const formData = updateSpecificationsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "assemblies") {  
            const formData = updateAssemblyFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "demands") {
            const formData = updateDemandsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "demand_addons") {
            const formData = updateDemandsAddOnFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }else if (resource === "product_desks") {
            const formData = updateProductsFormData(params);
            return fetchUtils
                .fetchJson(`${endpoint}/${resource}/${params.id}`, {
                    method: "POST",
                    body: formData,
                })
                .then(({ json }) => ({ data: json }));
        }

        return baseDataProvider.edit(resource, params);
    },
    
};
