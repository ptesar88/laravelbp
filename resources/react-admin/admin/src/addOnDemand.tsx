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
} from 'react-admin';

import { set, useFormContext, useWatch } from "react-hook-form"

import { Card } from '@material-ui/core'

function DemandForm(props: { index: number }) {
    const { setValue } = useFormContext();
    const { allChoices } = useChoicesContext();
    const { control } = useFormContext();
    const [unitPrice, setUnitPrice] = React.useState(0);

    const watchName = useWatch({ control, name: `demand_addons_name[${props.index}]` }) || 0;
    const watchCount = useWatch({ control, name: `demand_addons_count[${props.index}]` }) || 0;
    const watchPrice = useWatch({ control, name: `demand_addons_price[${props.index}]` }) || 0;
    const totalPrice = Number(watchCount) * Number(unitPrice);
    if (totalPrice !== Number(watchPrice)) {
        setValue(`demand_addons_price[${props.index}]`, totalPrice);
    }

    let setVisibleOfDiscount = false;
    let formattedTotalPrice = totalPrice.toLocaleString();
    if (watchName === "Montáž") {
        setVisibleOfDiscount = true;
        formattedTotalPrice = (watchPrice - Number(totalPrice * 0.1)).toLocaleString();
    }else{
        setVisibleOfDiscount = false;

    }

	return (
        <>
            <SelectInput choices={allChoices} onChange={i => {
                const value = i.target.value;
                const choice = allChoices.find(x => x.id === value);
                setValue(`demand_addons_name[${props.index}]`, choice.name);
                setValue(`demand_addons_unit[${props.index}]`, choice.unit);
                setValue(`demand_addons_price[${props.index}]`, choice.price);
                setUnitPrice(choice.price);
            }} source={`name-${props.index}`} optionText={i => i.name + " " + i.price + " " + i.unit} optionValue="id" label="Doplněk" />

            <TextInput source={`demand_addons_unit[${props.index}]`} label="Jednotka" />
            <TextInput source={`demand_addons_count[${props.index}]`} label="Počet" />
            <Card style={{color: 'black', marginTop: 7, padding: 8}}>{formattedTotalPrice} Kč</Card>
            {setVisibleOfDiscount && 
                <Card style={{color: 'black', marginTop: 7, padding: 8}}>SLEVA 10%</Card>
            }
        </>
  );
}

export function AddOnDemand() {
    const { control } = useFormContext();
    const items = useWatch({ control, name: "demand_addons_price" }) || [];
    const totalPrice = items.reduce((sum: number, item: string | undefined) => sum + Number(item ?? 0), 0);

    return(
        <FormDataConsumer<{ email: string; totalPrice: number }>>
            {({ formData }) => (
                <>
                    <ArrayInput source="demand_addons" label="Vyberte doplněk k poptávce">
                        <SimpleFormIterator inline>
                            <ReferenceInput reference="demand_addons" source="demand_addon_id" label="Doplňky">
                                <SimpleFormIteratorItemContext.Consumer>{({ index }) => {
                                    return <DemandForm index={index} />
                                }}</SimpleFormIteratorItemContext.Consumer>
                            </ReferenceInput>
                        </SimpleFormIterator>
                    </ArrayInput>
                    <Card style={{color: 'black', padding: 10, marginBottom: 10}}>Původní cena: {Number(formData.totalPrice).toLocaleString()} Kč</Card>
                    <Card style={{color: 'black', fontWeight: 'bold', padding: 10}}>Aktualizovaná cena: {(totalPrice + Number(formData.totalPrice)).toLocaleString()} Kč</Card>
                </>
            )}
        </FormDataConsumer>
    );
};
