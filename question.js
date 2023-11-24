function convertor(num){
    let result="";
    while(num !== 0){
        let lastDigit=num & 1;
        result = lastDigit+result;
        num=num>>1
    }
    return result;
}
console.log(convertor(16));
