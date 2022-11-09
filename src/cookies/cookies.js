import  Cookies  from "universal-cookie";

var cookies = new Cookies();

export function setCookies(data) {
    for(let key in data){
        cookies.set(key, data[key], {path: '/'})
    }
}

export function getCookies(name){
    return cookies.get(name)
}