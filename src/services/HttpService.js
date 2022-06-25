import { baseUrl } from "../constant";

export default class HttpService {
    url = baseUrl;
    postData = async (item, addedUrl, tokenId = "") => {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.postRequestOptions(token, item);
        return await fetch(this.url + "/" + addedUrl, requestOptions).then(
            response => response.json()
        )
    }

    getData = async (addedUrl, tokenId = "") => {
        const token = await localStorage.getItem(tokenId);
        const requestOptions = this.getRequestOptions(token);
        return await fetch(this.url + "/" + addedUrl, requestOptions).then(
            response => response.json()
        )
    }

    getRequestOptions = (token) => {
        let requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
        return requestOptions;
    }

    postRequestOptions = (token, item) => {
        let requestOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: JSON.stringify(item)
        }
        return requestOptions;
    }
}