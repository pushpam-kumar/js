let DATA = "secret information";

class user {
   constructor(name,email){
    this.name = name;
    this.email = email;
   }
    
    viewData(){
        console.log("data = ", DATA);
    }
}

let student1 = new user("pushpam", "abdn@gmail.com");
let student2 = new user("zer",  "nsms@gmail.com");
console.log(DATA);