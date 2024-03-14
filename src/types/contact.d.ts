export interface Contacts {
    id: number;
    name: string;
    email: string;
    phone: string | number;
}

export interface ContactsForm {
    name: string;
    email: string;
    phone: string | number;
    onClose?: () => void;
}