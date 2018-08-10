class CountCoins{
    public hundredCount : number;
    public fiftyCount : number;
    constructor(){
        this.fiftyCount = 0;
        this.hundredCount = 0;
    }
    public listIndexOf(amount){
        while(amount>=100){
            countCoins.hundredCount++;
            amount = amount - 100
        }
        while(amount >= 50){
            countCoins.fiftyCount++;
            amount = amount - 50;
        }
    
        console.log("you have to pay " + this.hundredCount + "*100" + " and " + this.fiftyCount +"*50");
    }
}

let countCoins = new CountCoins();
countCoins.listIndexOf(250);

//countCoins.listIndexOf(250);