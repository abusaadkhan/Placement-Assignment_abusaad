const person = function(name){
    
        this.name= name;
        this.getName = function(){
            console.log(`name of person,${this.name}`)
        }
    
}

let abusaad = new person('abusaad')
let saad = new person('saad')
abusaad.getName()
saad.getName()