export const ICONS_INPUTS = {
    'user': 'icon-user.svg',
    'mail': 'icon-mail.svg',
    'company': 'icon-company.svg',
    'phone': 'icon-phone.svg',
    'cellphone': 'icon-cell-phone.svg',
    'state': 'icon-state.svg',
    'people': 'icon-people.svg',
    'aboutUs': 'icon-shield.svg'
}

export const DEFAULT_VALUES_FORM = [
    {
        field: 'input',
        name: 'contact_name',
        text: 'Nombre y apellido',
        icon: 'user',
        pattern: `^[A-Za-zÀ-ÿ ,.'-]+$`,
        regex: /^[ a-zA-ZÀ-ÿ\\u00f1\\u00d1]*$/,
        type: 'text',
        maxLength: 100,
        placeholder: '',
        message: 'Ingrese un nombre válido',
        showMessage: false,
        isError: false,
        isRequired: true,
        isDisabled: false,
        value: '',
    },
    {
        field: 'input',
        name: 'email',
        text: 'Correo electrónico',
        icon: 'mail',
        type: 'email',
        pattern: '(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}',
        regex: /^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
        maxLength: 75,
        placeholder: '',
        message: 'Ingrese un correo válido',
        showMessage: false,
        isError: false,
        isRequired: true,
        isDisabled: false,
        value: '',
    },
    {
        field: 'input',
        name: 'partner_name',
        text: 'Nombre de la empresa',
        icon: 'company',
        placeholder: '',
        maxLength: 100,
        isError: false,
        isRequired: true,
        isDisabled: false,
        value: '',
    },
    {
        field: 'phone',
        name: 'phone',
        text: 'Teléfono',
        icon: 'phone',
        placeholder: '55 1234 4567',
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        message: 'Ingrese un número de teléfono válido',
        maxLength: 16,
        showMessage: false,
        isError: false,
        isRequired: true,
        isDisabled: false,
        value: '',
    },
    {
        field: 'phone',
        name: 'mobile',
        text: 'Celular',
        icon: 'cellphone',
        placeholder: '55 1234 4567',
        regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        message: 'Ingrese un número de teléfono válido',
        maxLength: 16,
        showMessage: false,
        isError: false,
        isRequired: false,
        isDisabled: false,
        value: '',
    },
    {
        field: 'select',
        name: 'state',
        text: 'Estado',
        icon: 'state',
        placeholder: '',
        isLoading: false,
        isError: false,
        isDisabled: false,
        isRequired: true,
        value: '',
    },
    {
        field: 'select',
        name: 'city',
        text: 'Ciudad',
        icon: 'company',
        placeholder: '',
        isError: false,
        isLoading: false,
        isDisabled: true,
        isRequired: true,
        value: '',
    },
    {
        field: 'select',
        name: 'people',
        text: '¿Cuántas personas deseas prevenir?',
        icon: 'people',
        placeholder: '',
        options: [
            {
                disabled: true,
                selected: true,
                text: '',
                value: ''
            },
            {
                text: '1 a 10 personas',
                value: '1-10',
            },
            {
                text: '11 a 50 personas',
                value: '11-50',
            },
            {
                text: '51 a 250 personas',
                value: '51-250',
            },
            {
                text: '251 o más',
                value: '251-MORE',
            },
        ],
        isError: false,
        isDisabled: false,
        isRequired: false,
        value: '',
    },
    {
        field: 'select',
        name: 'aboutUs',
        text: '¿Cómo te enteraste de nosotros?',
        icon: 'aboutUs',
        placeholder: '',
        options: [
            {
                disabled: true,
                selected: true,
                text: '',
                value: ''
            },
            {
                text: 'Redes sociales (Twitter, Facebook. Instagram u otro)',
                value: 'SocialMedia',
            },
            {
                text: 'Sitio web (www.skyalert.mx)',
                value: 'WebSite',
            },
            {
                text: 'Recomendación',
                value: 'Recommendation',
            },
            {
                text: 'Otro',
                value: 'Other',
            },
        ],
        isError: false,
        isDisabled: false,
        isRequired: true,
        value: '',
    },
    {
        field: 'textArea',
        name: 'comment',
        text: 'Para otros temas o solicitudes escribe tu mensaje:',
        placeholder: '',
        rows: 5 ,
        maxLength: 300,
        isError: false,
        isRequired: false,
        isDisabled: false,
        value: ''
    },
];

export const DEFAULT_OPTION = {
    disabled: true,
    selected: true,
    text: '',
    value: ''
};

export const NOT_AVAILABLE_OPTION = (name) => ([
    {
        disabled: true,
        selected: true,
        text: 'No disponible por el momento',
        value: `${name} not available`,
    }
]);


export const MESSAGES_ERROR = {
    REQUIRED: 'Campos requeridos',
    SERVER: 'Ha ocurrido un error, por favor inténtelo de nuevo más tarde',
    UNKNOWN: 'No se ha podido enviar la información, comprueba tu conexión a internet e intenta de nuevo',
};
