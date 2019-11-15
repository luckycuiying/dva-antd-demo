import fetch from 'dav/fetch'
const BASE_URL ='';


export default function(url,options){
    options.headers = options.headers||{}
    options.method = options.method||'GET'
    options.headers['Content-Type'] = 'application/json';
    options.headers['Accept'] = 'application/json'
    options.credential ='include'
    return fetch(url,options).then(res=>res.json())
}