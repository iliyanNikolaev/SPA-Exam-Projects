import { get, post, put, del } from "./api.js";

const endpoints = {
    all: '/data/events?sortBy=_createdOn%20desc',
    items: '/data/events',
    byId: '/data/events/',
}

export const getAllItems = async () => {
    return get(endpoints.all);
}

export const getItemById = async (id) => {
    return get(endpoints.byId + id);
}

export const createItem = async (data) => {
    return post(endpoints.items, data);
}

export const editItemById = async (id, data) => {
    return put(endpoints.byId + id, data);
}


export const deleteItemById = async (id) => {
    return del(endpoints.byId + id);
}