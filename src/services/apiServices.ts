import api from './api';

export async function fetchItems() {
    try {
        const response = await api.get('/items');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar itens:", error);
        throw error;
    }
}

export async function createItem(itemData: any) {
    try {
        const response = await api.post('/item/store', itemData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar item:", error);
        throw error;
    }
}

export async function deleteItem(itemId: any) {
    try {
        const response = await api.delete(`/item/${itemId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar item:", error);
        throw error;
    }
}
