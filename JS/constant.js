export function setData(key,value){
    localStorage.setItem(key,value)
}

export function getData(key){
    return localStorage.getItem(key)
}
