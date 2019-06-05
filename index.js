import fetch from 'isomorphic-fetch';

const ENDPOINTS = {
    departments: 'https://collectionapi.metmuseum.org/public/collection/v1/departments',
    search: 'https://collectionapi.metmuseum.org/public/collection/v1/search',
    objects: 'https://collectionapi.metmuseum.org/public/collection/v1/objects'
};

export default class API {
    static getAllItems() {
        return API.fetch(ENDPOINTS.objects);
    }

    static getItem(itemId) {
        return API.fetch(ENDPOINTS.search + `/${itemId}`);
    }

    static fetch(url) {
        return fetch(url).then(res => res.json());
    }

    static getDepartments() {
        return API.fetch(ENDPOINTS.departments);
    }

    static search(query) {
        return API.fetch(ENDPOINTS.search + `/q=${query}`);
    }
}