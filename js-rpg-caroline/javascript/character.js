//Use this script to generate your character
export default function Person(username,race,item){
    this.username = username;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
        let getHealing = Math.floor((Math.random() * this.maxHealing) + this.min);
        while(getHealing > this.maxHealing){
          return Math.floor((Math.random() * this.maxHealing) + this.min);
        }
    };

    // if (this.item == "Staff") {
    //     return (Math.floor(Math.random() * (this.maxHealing-this.min+1)) + this.min)*(1+this.skill);
    //     } else {
    //        return Math.floor(Math.random() * (this.maxHealing-this.min+1)) + this.min;
    //     }
    // };

    // this.totalHeal = "";

    // this.damage = function(){
    //     let getDamage = Math.floor((Math.random() * this.maxDamage) + this.min);
    //     while(getDamage > this.maxDamage){
    //         return Math.floor((Math.random() * this.maxDamage) + this.min);
    //     }
    // };

    // this.totalDamage = "";

    displayChar(this.username,this.race,this.item,this.maxHealth);
};

//Delete this functiom
function displayChar(username,race,item,maxHealth){
    return console.log(`My name is ${username}. I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);
}

