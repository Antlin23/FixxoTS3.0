// Validate name
export const validateText = (elementName: string, value: string, minLenght: number = 2) => {
    if(value.length == 0){
        return `${elementName} is required`
    }
    else if(value.length < minLenght){
        return `please enter at least ${minLenght} characters`
    }
    else{
        return ''
    }
}
// Validate email
export const validateEmail = (elementName: string, value: string) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(value.length == 0){
        return `${elementName} is required`
    }
    else if(!regEx.test(value)){
        return `please enter a valid email`
    }
    else {
        return ''
    }
}
