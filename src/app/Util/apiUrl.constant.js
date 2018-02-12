import propertiesList from "../../properties.json";
export class ApiUrlConstant {
    static BASE_URL = propertiesList.apiServer;
    static API_VERSION = "";
    static API_URLS = {
        login: "login",
    };

    static getApiUrl(key) {
        return this.BASE_URL+this.API_VERSION+this.API_URLS[key];
    }

    static getBase() {
        return this.BASE_URL;
    }

    static getFullUrl(relativeUrl) {
        return this.BASE_URL+this.API_VERSION+relativeUrl;
    }
}