import { PRODUCTS, SUPPLIERS } from "./dataTypes";
import { STORE, UPDATE, DELETE } from "./modelActionTypes";

let idCounter = 100;

export const saveProduct = (product) => createSaveEvent(PRODUCTS, product);

export const saveSupplier = (supplier) => createSaveEvent(SUPPLIERS, supplier);

export const deleteProduct = (product) => ({
    type: DELETE,
    dataType: PRODUCTS,
    payload: product.id,
});

export const deleteSupplier = (supplier) => ({
    type: DELETE,
    dataType: SUPPLIERS,
    payload: supplier.id,
});

const createSaveEvent = (dataType, payload) => {
    if (!payload.id) {
        return {
            type: STORE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++ },
        };
    } else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload,
        }
    }
};
