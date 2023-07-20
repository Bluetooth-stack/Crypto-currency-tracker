export const reduceNumberLength = (number) => {
    const numberString = number.toLocaleString();
    let numberArray = numberString.split(',');
    if(numberArray.length === 5){
        return numberArray[0]+'.'+numberArray[1].slice(0,2)+'T';
    }
    else if(numberArray.length === 4){
        return numberArray[0]+'.'+numberArray[1].slice(0,2)+'B';
    }
    else if(numberArray.length === 3){
        return numberArray[0]+'.'+numberArray[1].slice(0,2)+'M';
    }
    else if(numberArray.length === 2){
        return numberArray[0]+'.'+numberArray[1].slice(0,2)+'K';
    }
    else{
        return number.toLocaleString()
    }
}