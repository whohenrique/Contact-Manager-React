import axios from "axios";
import { Contacts, ContactsForm } from "../types/contact";

export const API = axios.create({
    baseURL: 'http://localhost:8000/api/contacts',
    headers: {
        "Content-Type": 'application/json'
    },
});

export async function getAllContacts(): Promise<Contacts[]> {
    try {
        const response = await API.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao obter contatos:", error);
        throw error;
    }
}

export async function createContacts(item: ContactsForm): Promise<Contacts> {
    try {
        const response = await API.post('/', item);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar contato:", error);
        throw error;
    }
}

export const updateContacts = async (
    id: number, 
    {  name, email, phone }: ContactsForm) => {
    try {
        const response = await API.put(`/${id}/`, {name, email, phone});
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar contato:", error);
        throw error;
    }
}

export async function deleteContacts(id: number): Promise<void> {
    try {
        await API.delete(`/${id}`);
    } catch (error) {
        console.error("Erro ao excluir contato:", error);
        throw error;
    }
}
