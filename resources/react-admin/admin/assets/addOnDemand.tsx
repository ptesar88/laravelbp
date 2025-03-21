import React from 'react';
import {
    TextInput,
    SelectInput,
    ReferenceInput,
    FormDataConsumer,
    SimpleFormIterator,
    ArrayInput,
    useChoicesContext,
    SimpleFormIteratorItemContext,
    BooleanField,
} from 'react-admin';

import { useFormContext, useWatch } from "react-hook-form"

import { Card } from '@material-ui/core'
import Stack from '@mui/material/Stack';

function DemandForm(props: { index: number }) {
    const { setValue } = useFormContext();
    const { allChoices } = useChoicesContext();
    const { control } = useFormContext();
    const [unitPrice, setUnitPrice] = React.useState(0);

    const watchName = useWatch({ control, name: `demand_addons_name[${props.index}]` }) || "";
    const watchCount = useWatch({ control, name: `demand_addons_count[${props.index}]` }) || 0;
    const watchPrice = useWatch({ control, name: `demand_addons_price[${props.index}]` }) || 0;
    let setVisibleOfDiscount = false;

    let totalPrice = 0;
    if (watchName === "Montáž") {
        totalPrice = (Number(watchCount) * Number(unitPrice)) - (Number(watchCount) * Number(unitPrice)) * 0.1;
        setVisibleOfDiscount = true;
    } else {
        totalPrice = Number(watchCount) * Number(unitPrice);
    }

    if (totalPrice !== Number(watchPrice)) {
        setValue(`demand_addons_price[${props.index}]`, totalPrice);
    }

    let formattedTotalPrice = totalPrice.toLocaleString();

    return (
        <>
            <SelectInput choices={allChoices} onChange={i => {
                const value = i.target.value;
                const choice = allChoices.find(x => x.id === value);
                setValue(`demand_addons_id[${props.index}]`, choice.id);
                setValue(`demand_addons_name[${props.index}]`, choice.name);
                setValue(`demand_addons_unit[${props.index}]`, choice.unit);
                setValue(`demand_addons_price[${props.index}]`, choice.price);
                setUnitPrice(choice.price);
            }} source={`name-${props.index}`} optionText={i => i.name + " " + i.price + " " + i.unit} optionValue="id" label="Doplněk" helperText={false} />

            <TextInput source={`demand_addons_unit[${props.index}]`} label="Jednotka" helperText={false} />
            <TextInput source={`demand_addons_count[${props.index}]`} label="Počet" helperText={false} />
            <Stack direction="row" spacing={2}>
                <Card style={{ color: 'black', marginTop: 7, padding: 8, marginBottom: 7, backgroundColor: '#fffaa8' }}>{formattedTotalPrice} Kč</Card>
                {setVisibleOfDiscount &&
                    <Card style={{ color: 'black', marginTop: 7, padding: 8, marginBottom: 7, backgroundColor: '#fffaa8' }}>SLEVA 10%</Card>
                }
            </Stack>
        </>
    );
}

function UpdatedPrice() {
    const { control } = useFormContext();
    const items = useWatch({ control, name: "demand_addons_price" }) || [];
    const totalPriceAddons = items.reduce((sum: number, item: string | undefined) => sum + Number(item ?? 0), 0);

    return (
        <FormDataConsumer<{ email: string; totalPrice: number, id: number }>>
            {({ formData }) => (
                <>
                    <Card style={{ color: 'black', padding: 8, marginTop: 7, width: 270, backgroundColor: '#f9f0b0' }}>Cena doplňků: {totalPriceAddons.toLocaleString()} Kč</Card>
                    <Card style={{ color: 'black', fontWeight: 'bold', marginTop: 7, padding: 8, width: 270, backgroundColor: '#f9f0b0' }}>Aktualizovaná cena: {(totalPriceAddons + Number(formData.totalPrice)).toLocaleString()} Kč</Card>
                </>
            )}
        </FormDataConsumer>
    );
}

export function AddOnDemand() {
    return (
        <>
            <FormDataConsumer<{ email: string; totalPrice: number, id: number }>>
                {({ formData }) => (
                    <>

                        <ArrayInput source="demand_addons" label="Vyberte doplněk k poptávce">
                            <SimpleFormIterator>
                                <ReferenceInput reference="demand_addons" source="demand_addon_body" label="Doplňky">
                                    <SimpleFormIteratorItemContext.Consumer>{({ index }) => {
                                        return <DemandForm index={index} />
                                    }}</SimpleFormIteratorItemContext.Consumer>
                                </ReferenceInput>
                            </SimpleFormIterator>
                        </ArrayInput>
                        <Card style={{ color: 'black', padding: 8, marginTop: 7, width: 270, backgroundColor: '#f9f0b0' }}>Původní cena: {Number(formData.totalPrice).toLocaleString()} Kč</Card>
                        <UpdatedPrice />
                        <BooleanField source="send_mail_updated" label="Odeslat email zákazníkovi" />

                    </>
                )}
            </FormDataConsumer>

        </>

    );
};
