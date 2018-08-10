class listOperations{
    static listIndexOf(array , element){
        for (let index = 0; index < array.length; index++) {
            if(array[index]== element){
                console.log("the index of " + element + " is : " + index);
            }
            
        }
    }
}
let a : number[] = [1,2,3,4];
listOperations.listIndexOf(a,3);

