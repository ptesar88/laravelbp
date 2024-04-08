import {
    Admin,
    Resource,
    ListGuesser,
    Create,
    SimpleForm,
    TextInput,
    required,
    FileField,
    FileInput,
    Show,
    SimpleShowLayout,
    TextField,
    ImageField,
    Edit,
    SelectInput,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { RichTextInput, RichTextInputToolbar } from "ra-input-rich-text";


export const ProductCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" validate={[required()]} fullWidth />
            <FileInput source="thumbnail">
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]} fullWidth />
            <FileInput source="thumbnail">
                <FileField source="src" title="title" />
            </FileInput>
            <ImageField source="thumbnail_url" title="thumbnail" />
            <TextInput source="width" fullWidth />
            <TextInput source="height" fullWidth />
            <TextInput source="depth" fullWidth />
            <TextInput source="weight" fullWidth />
            <TextInput source="price" validate={[required()]} fullWidth />
            <TextInput source="label" fullWidth />
            <SelectInput source="type" choices={[
                { id: 'plot', name: 'Plot' },
                { id: 'sloupek', name: 'Sloupek' },
                { id: 'otisk', name: 'Otisk' },
            ]} />
            <SelectInput source="category" choices={[
                { id: 'hladke', name: 'Hladké' },
                { id: 'cihlicka', name: 'Cihlička' },
                { id: 'stipanykamen', name: 'Štípaný kámen' },
                { id: 'litypremium', name: 'Litý PREMIUM' },
            ]} />
            <SelectInput source="category_type" choices={[
                { id: 'prubezny', name: 'Průběžný' },
                { id: 'koncovy', name: 'Koncový' },
                { id: 'rohovy', name: 'Rohový' },
                { id: 'koncovy_levy_pravy', name: 'Koncový levý a pravý' },
            ]} />
            <SelectInput source="top" choices={[
                { id: 'Ano', name: 'Ano' },
                { id: 'Ne', name: 'Ne' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="id" />
            <ImageField source="thumbnail_url" title="thumbnail" />
        </SimpleShowLayout>
    </Show>
);

export const AdvantageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth />
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="icon" validate={[required()]} fullWidth />
            <TextInput source="motto" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);

export const AdvantageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth />
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth />
            <TextInput source="title" validate={[required()]} fullWidth />
            <TextInput source="icon" validate={[required()]} fullWidth />
            <TextInput source="motto" validate={[required()]} fullWidth />
        </SimpleForm>
    </Edit>
);

export const AdvantageShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="name" fullWidth />
            <TextInput source="body" fullWidth />
            <TextInput source="title"  fullWidth />
            <TextInput source="icon"  fullWidth />
            <TextInput source="motto"  fullWidth />
        </SimpleShowLayout>
    </Show>
);

export const SpecificationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth />
        </SimpleShowLayout>
    </Show>
);

export const SpecificationEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth />
        </SimpleForm>
    </Edit>
);

export const AssemblyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth />
        </SimpleShowLayout>
    </Show>
);

export const AssemblyEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth />
        </SimpleForm>
    </Edit>
);

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="products" list={ListGuesser} show={ProductShow} edit={ProductEdit} create={ProductCreate} />
        <Resource name="advantages" list={ListGuesser} show={AdvantageShow} edit={AdvantageEdit} create={AdvantageCreate} />
        <Resource name="specifications" list={ListGuesser} show={SpecificationShow} edit={SpecificationEdit} />
        <Resource name="assemblies" list={ListGuesser} show={AssemblyShow} edit={AssemblyEdit} />
    </Admin>
);
