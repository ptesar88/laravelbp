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
    List,
    SimpleList,
    Datagrid,
    useGetList,
    useGetOne,
    ReferenceInput,
    Pagination,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { RichTextInput, RichTextInputToolbar } from "ra-input-rich-text";
import { useWatch } from 'react-hook-form';

const ProductCreate = () => (
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

const TypeInput = () => (
    <ReferenceInput reference="types" source="type">
        <SelectInput
            label="Type"
            source="type"
            optionText="name"
        />
    </ReferenceInput>
);

const CategoryInput = () => (
    <ReferenceInput reference="categories" source="category">
        <SelectInput
            label="Category"
            source="category"
            optionText="name"
        />
    </ReferenceInput>
);

const CategoryTypeInput = () => (
    <ReferenceInput reference="category_types" source="category_type">
        <SelectInput
            label="Category Type"
            source="category_type"
            optionText="name"
        />
    </ReferenceInput>
);

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]} fullWidth />
            <FileInput source="thumbnail_file">
                <FileField source="src" title="title" />
            </FileInput>
            <ImageField source="thumbnail_url" title="thumbnail" />
            <TextInput source="width" fullWidth />
            <TextInput source="height" fullWidth />
            <TextInput source="depth" fullWidth />
            <TextInput source="weight" fullWidth />
            <TextInput source="price" validate={[required()]} fullWidth />
            <TextInput source="label" fullWidth />
            <TypeInput />
            <CategoryInput />
            <CategoryTypeInput />
            <SelectInput source="top" choices={[
                { id: 'Ano', name: 'Ano' },
                { id: 'Ne', name: 'Ne' },
            ]} />
        </SimpleForm>
    </Edit>
);

const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" />
            <TextField source="id" />
            <ImageField source="thumbnail_url" title="thumbnail" />
        </SimpleShowLayout>
    </Show>
);

const AdvantageCreate = () => (
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

const AdvantageEdit = () => (
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

const AdvantageShow = () => (
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

const SpecificationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth />
        </SimpleShowLayout>
    </Show>
);

const SpecificationEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth />
        </SimpleForm>
    </Edit>
);

const AssemblyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth />
        </SimpleShowLayout>
    </Show>
);

const AssemblyEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth />
        </SimpleForm>
    </Edit>
);

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const ProductList = (props: any) => (
    <List pagination={<PostPagination />}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <ImageField source="thumbnail_url" title="thumbnail" />
            <TextField source="width" />
            <TextField source="height" />
            <TextField source="depth" />
            <TextField source="weight" />
            <TextField source="price" />
            <TextField source="label" />
            <TextField source="type.name" />
            <TextField source="category_type.name" />
            <TextField source="category.name" />
        </Datagrid>
    </List>
);

export const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="products" list={ProductList} show={ProductShow} edit={ProductEdit} create={ProductCreate} />
        <Resource name="advantages" list={ListGuesser} show={AdvantageShow} edit={AdvantageEdit} create={AdvantageCreate} />
        <Resource name="specifications" list={ListGuesser} show={SpecificationShow} edit={SpecificationEdit} />
        <Resource name="assemblies" list={ListGuesser} show={AssemblyShow} edit={AssemblyEdit} />
        <Resource name="types" list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
        <Resource name="categories" list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
        <Resource name="category_types" list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
    </Admin>
);
