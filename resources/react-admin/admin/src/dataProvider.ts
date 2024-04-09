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
    id: number; // Add the 'id' property to satisfy the 'RaRecord<Identifier>' constraint
    body: string;
};
type AssemblyParams = {
    id: number; // Add the 'id' property to satisfy the 'RaRecord<Identifier>' constraint
    body: string;
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
        }

        return baseDataProvider.create(resource, params);
    },
    update: (resource: string, params: any) => {
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
        }

        return baseDataProvider.edit(resource, params);
    },
    
};
