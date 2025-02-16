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
    Datagrid,
    ReferenceInput,
    Pagination,
    RichTextField,
    Layout,
    Menu,
    radiantLightTheme as Nano,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { RichTextInput, RichTextInputToolbar } from "ra-input-rich-text";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import { ReactNode } from "react";
import { AddOnDemand } from "./addOnDemand";

const czechMessages = {
    ra: {
        action: {
            add: 'Přidat',
            add_filter: 'Přidat filtr',
            back: 'Jít zpět',
            bulk_actions: '%{smart_count} vybráno',
            cancel: 'Zrušit',
            clear_input_value: 'Smazat hodnotu',
            clone: 'Klonovat',
            close: 'Zavřít',
            close_menu: 'Zavřít menu',
            confirm: 'Potvrdit',
            create: 'Vytvořit',
            create_item: "Vytvořit",
            delete: 'Smazat',
            edit: 'Upravit',
            expand: 'Rozbalit',
            export: 'Exportovat',
            list: 'Listovat',
            move_down: "Dolů",
            move_up: "Nahoru",
            open_menu: 'Otevřít menu',
            refresh: 'Obnovit',
            remove: 'Odstranit',
            remove_filter: 'Odstranit filtr',
            save: 'Uložit',
            search: 'Hledat',
            select_all: "Vybrat vše",
            select_row: "Vybrat řádek",
            show: 'Zobrazit',
            sort: 'Seřadit',
            undo: 'Vrátit',
            unselect: 'Zrušit výběr',
            update: "Aktualizovat",
            clear_array_input: 'Opravdu chcete smazat všechny položky?',
        },
        auth: {
            auth_check_error: "Pro pokračování se prosím přihlaste",
            logout: 'Odhlásit se',
            password: 'Heslo',
            sign_in: 'Přihlásit se',
            sign_in_error: 'Ověření selhalo, zkuste to znovu',
            user_menu: "Profil",
            username: 'Uživatelské jméno',
        },
        boolean: {
            false: 'Ne',
            null: ' ',
            true: 'Ano',
        },
        input: {
            file: {
                upload_several: 'Přetáhněte soubory pro nahrání nebo klikněte pro výběr',
                upload_single: 'Přetáhněte soubor pro nahrání nebo klikněte pro jeho výběr',
            },
            image: {
                upload_several: 'Přetáhněte obrázky pro nahrání nebo klikněte pro výběr',
                upload_single: 'Přetáhněte obrázek pro nahrání nebo klikněte pro jeho výběr',
            },
            password: {
                toggle_hidden: 'Zobrazit heslo',
                toggle_visible: 'Skrýt heslo',
            },
            references: {
                all_missing: 'Nelze nalézt referencovaná data',
                many_missing: 'Minimálně jedna z referencí se nezdá býti nadále dostupná',
                single_missing: 'Reference se nezdá býti nadále dostupná.',
            },
        },
        message: {
            about: 'O',
            are_you_sure: 'Jste si jistý?',
            bulk_delete_content: 'Jste si jistý, že chcete smazat %{name}? |||| Jste si jistý, že chcete smazat těchto %{smart_count} položek?',
            bulk_delete_title: 'Smazat %{name} |||| Smazat %{smart_count} %{name} položek',
            bulk_update_content: "Hromadně změnit obsah",
            bulk_update_title: "Hromadně změnit titulek",
            delete_content: 'Jste si jistý, že chcete smazat tuto položku?',
            delete_title: 'Smazat %{name} #%{id}',
            details: 'Podrobnosti',
            error: 'Nastala chyba a váš požadavek nemohl být zpracován.',
            invalid_form: 'Formulář není validní. Prosím zkontrolujte chyby.',
            loading: 'Stránka se načítá, prosím strpení',
            no: 'Ne',
            not_found: 'Nic nebylo nalezeno.',
            unsaved_changes: 'Některé změny nebyly uloženy. Chcete je ignorovat?',
            yes: 'Ano',
            clear_array_input: 'Opravdu chcete smazat všechny položky?',    
        },
        navigation: {
            next: 'Další',
            no_more_results: 'Stránka číslo %{page} je mimo rozsah. Zkuste předchozí.',
            no_results: 'Žádné výsledky nenalezeny',
            page_out_from_begin: 'Nelze se přepnout před stranu 1',
            page_out_from_end: 'Nelze se přepnout za poslední stranou',
            page_out_of_boundaries: 'Stránka číslo %{page} je mimo rozsah',
            page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
            page_rows_per_page: 'Záznamů na stránku: ',
            prev: 'Předchozí',
            skip_nav: 'Přeskočit na obsah',
        },
        notification: {
            bad_item: 'Špatný prvek',
            canceled: 'Akce zrušena',
            created: 'Prvek vytvořen',
            data_provider_error: 'dataProvider chyba. Pro více detailů zkontrolujte konzoli prohlížeče.',
            deleted: 'Prvek smazán |||| %{smart_count} prvků smazáno',
            http_error: 'Chyba komunikace serveru',
            i18n_error: 'Nelze načíst překlady pro vybraný jazyk',
            item_doesnt_exist: 'Prvek neexistuje',
            logged_out: 'Relace ukončena',
            not_authorized: 'Nemáte oprávnění k přístupu.',
            updated: 'Prvek aktualizován |||| %{smart_count} prvků aktualizováno',
        },
        page: {
            create: 'Vytvořit %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} #%{id}',
            empty: 'Zatím žádný %{name}',
            error: 'Něco se pokazilo',
            invite: 'Chcete přidat?',
            list: '%{name}',
            loading: 'Načítání',
            not_found: 'Nenalezeno',
            show: '%{name} #%{id}',
        },
        sort: {
            ASC: "vzestupně",
            DESC: "sestupně",
            sort_by: "Seřadit podle %{field} %{order}",
        },
        validation: {
            email: 'Musí být validní emailová adresa',
            maxLength: 'Může obsahovat maximálně %{max} znaků',
            maxValue: 'Múže být maximálně %{max}',
            minLength: 'Musí obsahovat nejméně %{min} znaků',
            minValue: 'Musí být minimálně %{min}',
            number: 'Musí být číslo',
            oneOf: 'Musí splňovat jedno z: %{options}',
            regex: 'Musí být ve specifickém formátu (regexp): %{pattern}',
            required: 'Povinné pole',
        },
        configurable: {
            customize: 'Přizpůsobit',
        },
    }
};

const DemandCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="firstname" validate={[required()]} fullWidth label="a" />
            <TextInput source="lastname" validate={[required()]} fullWidth label="a" />
            <TextInput source="company" validate={[required()]} fullWidth label="a" />
            <TextInput source="phone" validate={[required()]} fullWidth label="a" />
            <TextInput source="email" validate={[required()]} fullWidth label="a" />
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth label="a" />
        </SimpleForm>
    </Create>
);

const DemandShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="firstname" label="Jméno" />
            <TextField source="lastname" label="Příjmení" />
            <TextField source="company" label="Společnost" />
            <TextField source="phone" label="Telefon" />
            <TextField source="email" label="Email" />
            <TextField source="localisation" label="Místo realizace" />
            <TextField source="doprava" label="Doprava" />
            <TextField source="montaz" label="Montáž" />
            <TextField source="totalPrice" label="Cena" />
            <RichTextField source="body" fullWidth label="Obsah" />
            <TextField source="id" label="ID" />
        </SimpleShowLayout>
    </Show>
);

const DemandAddonShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" label="Název" />
            <TextField source="unit" label="Jednotka" />
            <TextField source="price" label="Cena" />
            <TextField source="id" label="ID" />
        </SimpleShowLayout>
    </Show>
);

const ProductCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" validate={[required()]} fullWidth />
            <FileInput source="thumbnail">
                <FileField source="src" title="title" label="a" />
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

const ProductTypeInput = () => (
    <ReferenceInput reference="product_types" source="product_type">
        <SelectInput
            label="Product Type"
            source="product_type"
            optionText="name"
        />
    </ReferenceInput>
);

const ProductTypeCreate = () => (
    <Create>
        <SimpleForm>
        <TextInput disabled source="id" label="a" />
        <TextInput source="name" validate={[required()]} fullWidth label="a" />
        </SimpleForm>
    </Create>
);
const DemandEdit = () => (
    <>
    <Edit>
        <SimpleForm>
            <TextInput source="firstname" validate={[required()]} fullWidth label="Jméno" />
            <TextInput source="lastname" validate={[required()]} fullWidth label="Příjmeni" />
            <TextInput source="company" fullWidth label="Společnost" />
            <TextInput source="phone" validate={[required()]} fullWidth label="Telefon" />
            <TextInput source="email" validate={[required()]} fullWidth label="Email" />
            <TextInput source="localisation" fullWidth label="Místo realizace" />
            <TextInput source="doprava" fullWidth label="Doprava" />
            <TextInput source="montaz" fullWidth label="Montáž" />
            <TextInput source="totalPrice" validate={[required()]} fullWidth label="Cena" />
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth label="Obsah" />
            <AddOnDemand />
        </SimpleForm>
    </Edit>
    </>
);

const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput disabled source="id" label="a" />
            <TextInput source="name" validate={[required()]} fullWidth label="a" />
            <FileInput source="thumbnail_file">
                <FileField source="src" title="title" label="a" />
            </FileInput>
            <ImageField source="thumbnail_url" title="thumbnail" label="a" />
            <TextInput source="width" fullWidth label="a" />
            <TextInput source="height" fullWidth label="a" />
            <TextInput source="depth" fullWidth label="a" />
            <TextInput source="weight" fullWidth label="a" />
            <TextInput source="price" validate={[required()]} fullWidth label="a" />
            <TextInput source="label" fullWidth label="a" />
            <TypeInput />
            <CategoryInput />
            <CategoryTypeInput />
            <SelectInput source="top" choices={[
                { id: 'Ano', name: 'Ano' },
                { id: 'Ne', name: 'Ne' },
            ]} />
            <ProductTypeInput/>
        </SimpleForm>
    </Edit>
);

const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="name" label="a" />
            <TextField source="id" label="a" />
            <ImageField source="thumbnail_url" title="thumbnail" label="a" />
        </SimpleShowLayout>
    </Show>
);

const AdvantageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth label="a" />
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth label="a" />
            <TextInput source="title" validate={[required()]} fullWidth label="a" />
            <TextInput source="icon" validate={[required()]} fullWidth label="a" />
            <TextInput source="motto" validate={[required()]} fullWidth label="a" />
        </SimpleForm>
    </Create>
);

const AdvantageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" validate={[required()]} fullWidth label="a" />
            <RichTextInput source="body"  toolbar={<RichTextInputToolbar size="large" />} fullWidth label="a" />
            <TextInput source="title" validate={[required()]} fullWidth label="a" />
            <TextInput source="icon" validate={[required()]} fullWidth label="a" />
            <TextInput source="motto" validate={[required()]} fullWidth label="a" />
        </SimpleForm>
    </Edit>
);

const AdvantageShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="name" fullWidth label="a" />
            <TextInput source="body" fullWidth label="a" />
            <TextInput source="title" fullWidth label="a" />
            <TextInput source="icon" fullWidth label="a" />
            <TextInput source="motto" fullWidth label="a" />
        </SimpleShowLayout>
    </Show>
);

const SpecificationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth label="a" />
        </SimpleShowLayout>
    </Show>
);

const SpecificationEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth label="a" />
        </SimpleForm>
    </Edit>
);

const AssemblyShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextInput source="body" fullWidth label="a"/>
        </SimpleShowLayout>
    </Show>
);

const AssemblyEdit = () => (
    <Edit>
        <SimpleForm>
            <RichTextInput source="body" toolbar={<RichTextInputToolbar size="large" />} fullWidth label="a" />
        </SimpleForm>
    </Edit>
);

const PostPagination = () => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} />;

const ProductList = () => (
    <List pagination={<PostPagination />}>
        <Datagrid rowClick="show">
            <TextField source="id" label="ID" />
            <TextField source="name" label="Název" />
            <ImageField source="thumbnail_url" title="thumbnail" label="Ikona" />
            <TextField source="width" label="Šířka" />
            <TextField source="height" label="Výška" />
            <TextField source="depth" label="Hloubka" />
            <TextField source="weight" label="Váha" />
            <TextField source="price" label="Cena bez DPH" />
            <TextField source="label" label="Otisk" />
            <TextField source="type.name" label="Typ název" />
            <TextField source="category_type.name" label="Kategorie název" />
            <TextField source="category.name" label="Název kategorie"/>
            <TextField source="product_type" label="Produkt typ"/>
        </Datagrid>
    </List>
);

const DemandList = () => (
    <List pagination={<PostPagination /> } sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowClick="show">
            <TextField source="id" label="Id" />
            <TextField source="firstname" label="Jméno" />
            <TextField source="lastname" label="Příjmení"/>
            <TextField source="company" label="Společnost" />
            <TextField source="phone" label="Telefon" />
            <TextField source="email" label="Email" />
            <TextField source="localisation" label="Místo realizace" />
            <TextField source="doprava" label="Doprava" />
            <TextField source="montaz" label="Montáž" />
            <TextField source="totalPrice" label="Cena" />
            <TextField source="body" label="Obsah" />
        </Datagrid>
    </List>
);

const DemandAddonList = () => (
    <List>
        <Datagrid rowClick="show">
            <TextField source="id" label="Id" />
            <TextField source="name" label="Název" />
            <TextField source="price" label="Cena" />
            <TextField source="unit" label="Jednotka"/>
        </Datagrid>
    </List>
);

interface MyLayoutProps {
    children: ReactNode;
}

const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.ResourceItem name="demands" />
        <Menu.ResourceItem name="demand_addon" />
        <Menu.ResourceItem name="products"/>
        <Menu.ResourceItem name="product_types" />
        <Menu.ResourceItem name="types" />
        <Menu.ResourceItem name="categories" />
        <Menu.ResourceItem name="category_types" />
        <Menu.ResourceItem name="advantages" />
        <Menu.ResourceItem name="specifications" />
        <Menu.ResourceItem name="assemblies" />
    </Menu>
);

const MyLayout = ({ children }: MyLayoutProps) => (
    <Layout menu={MyMenu}>
        { children }
    </Layout>
);

export const App = () => {
    const messages: { [key: string]: any } = {
        'cs': czechMessages,
    };
 
    const i18nProvider = polyglotI18nProvider((locale:string) => messages[locale], 'cs');

    return (
    <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider} theme={Nano} >
        <Resource name="demands" options={{ label: 'Poptávky' }} list={DemandList} show={DemandShow} create={DemandCreate} edit={DemandEdit}/>
        <Resource name="products" options={{ label: 'Produkty' }} list={ProductList} show={ProductShow} edit={ProductEdit} create={ProductCreate} />
        <Resource name="product_types" options={{ label: 'Produkty kategorie' }} list={ListGuesser} show={ListGuesser} edit={ListGuesser} create={ProductTypeCreate} />
        <Resource name="types" options={{ label: 'Produkty typy' }} list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
        <Resource name="categories" options={{ label: 'Sloupky kategorie' }} list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
        <Resource name="category_types" options={{ label: 'Sloupky tvary' }} list={ListGuesser} show={ListGuesser} edit={ListGuesser} />
        <Resource name="advantages" options={{ label: 'Výhody' }} list={ListGuesser} show={AdvantageShow} edit={AdvantageEdit} create={AdvantageCreate} />
        <Resource name="specifications" options={{ label: 'Specifikace' }} list={ListGuesser} show={SpecificationShow} edit={SpecificationEdit} />
        <Resource name="assemblies" options={{ label: 'Montáž' }} list={ListGuesser} show={AssemblyShow} edit={AssemblyEdit} />
    </Admin>
)};
