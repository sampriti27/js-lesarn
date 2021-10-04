

const textanylze = () => {
    
    const textVal = document.getElementById("floatingTextarea2").value;
    console.log(textVal);
    const myArr = textVal.split("");
    var totalChar = 0;
    
    for (let index = 0; index < myArr.length; index++) {
        if (myArr[index] != " " ||  myArr[index] != ".") {
            totalChar++
        }
    
    }


    document.getElementById("TotalCharacter").innerHTML = `${totalChar}`

}