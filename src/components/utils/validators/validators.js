export const required  = value => {
    if(value)return undefined;
    return "Field is required";
}
export const maxLengthThunk  = (maxLength) => (value) =>{
    if(value.length > maxLength) return `Max Lenght is ${maxLength}`;
    return undefined;
}