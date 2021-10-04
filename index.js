

const textanylze = () => {
    
    const textVal = document.getElementById("floatingTextarea2").value;
    console.log(textVal);
    const myArr = textVal.split("");
    console.log(myArr);
    var totalChar = 0;
    var vowel = 0;
    var consonant = 0;
    var other = 0;
    
    for (let index = 0; index < myArr.length; index++) {
        if (myArr[index] != " " ||  myArr[index] != ".") {
            totalChar++;
        }
        
        if(myArr[index] === "a" || myArr[index] === "e" || myArr[index] === "i" || myArr[index] === "o" || myArr[index] === "u"){
            vowel++;
            console.log(vowel);
        }
        
        if(myArr[index] === "_" || myArr[index] === " " || myArr[index] === "."){
            other++;
        }else{
            consonant++;
        }
    
    }


    document.getElementById("TotalCharacter").innerHTML = `${totalChar}`
    document.getElementById("vowel").innerHTML = `${vowel}`
    document.getElementById("consonant").innerHTML = `${consonant}`
    document.getElementById("other").innerHTML = `${other}`

}