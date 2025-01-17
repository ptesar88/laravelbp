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

import { useFormContext, useWatch } from "react-hook-form"


function DemandForm(props: { index: number }) {
    const { setValue } = useFormContext();
    const { allChoices } = useChoicesContext();
    const { control } = useFormContext();
    const [unitPrice, setUnitPrice] = React.useState(0);

    const watchCount = useWatch({ control, name: `demand_addons_count[${props.index}]` }) || 0;
    const watchPrice = useWatch({ control, name: `demand_addons_price[${props.index}]` }) || 0;
    const totalPrice = Number(watchCount) * Number(unitPrice);
    if (totalPrice !== Number(watchPrice)) {
        setValue(`demand_addons_price[${props.index}]`, totalPrice);
    }

	return (
        <>
            <SelectInput choices={allChoices} onChange={i => {
                const value = i.target.value;
                const choice = allChoices.find(x => x.id === value);
                setValue(`demand_addons_unit[${props.index}]`, choice.unit);
                setValue(`demand_addons_price[${props.index}]`, choice.price);
                setUnitPrice(choice.price);
            }} source={`name-${props.index}`} optionText={i => i.name + " " + i.price + " " + i.unit} optionValue="id" />

            <TextInput source={`demand_addons_unit[${props.index}]`} label="unit" />
            <TextInput source={`demand_addons_count[${props.index}]`} label="count" />
            
            {totalPrice}
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
                    <ArrayInput source="demand_addons" label="Doplňky">
                        <SimpleFormIterator inline>
                            <ReferenceInput reference="demand_addons" source="demand_addon_id" label="Doplňky">
                                <SimpleFormIteratorItemContext.Consumer>{({ index }) => {
                                    return <DemandForm index={index} />
                                }}</SimpleFormIteratorItemContext.Consumer>
                            </ReferenceInput>
                        </SimpleFormIterator>
                    </ArrayInput>
                    
                    <div>{formData.email}</div>
                    <div>{totalPrice + Number(formData.totalPrice)}</div>
                </>
            )}
        </FormDataConsumer>
    );
};
