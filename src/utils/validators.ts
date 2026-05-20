export function required(
value:string
){

return value
.trim()
.length>0;

}

export function minLength(

value:string,

length:number

){

return value.length>=length;

}

export function maxLength(

value:string,

length:number

){

return value.length<=length;

}

export function isNumber(
value:string
){

return !isNaN(
Number(value)
);

}

export function isPhone(
value:string
){

return /^[6-9]\d{9}$/
.test(value);

}

export function isEmail(
value:string
){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(value);

}