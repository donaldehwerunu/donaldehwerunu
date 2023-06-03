// class user{
//     constructor(email, name, age, status){
//         this.email=email;
//         this.name=name;
//         this.age=age;
//         this.status=status;
//         this.score=2;
//     }
//     login(){
//         console.log(this.name, 'has login')
//         return this;
        
//     }
//     logout(){
//         console.log(this.name, 'has logout')
//         return this;

//     }
//     update(){
//         this.score++;
//         console.log(this.email, 'has a score of', this.score, 'has login')
//         return this;
//     }
// }
// class Admin extends user{
//     deleteUsers(user){
//         users=users.filter(u=>{
//             return u.email != user.email;
//         })
//     }
// }
function user(email, name, age, status){
    this.email=email; 
    this.name=name; 
    this.age=age; 
    this.status=status; 
    this.login=function(){
        console.log(this.name, ', has login')
    }
}

const userone=new user('don@gmail.com', 'donald', 23, true,)
const usertwo=new user('joe@gmail.com', 'joe', 30, false,)
userone.login();
console.log(usertwo);
// const userthree=new user('emma@outlook.com', 'emma', 40, false)
// var admin=new Admin('john@gmail.com', 'john', 45, true);
// var users=[userone, usertwo, userthree, admin]
// admin.deleteUsers(usertwo); 
// console.log(users)
// userone.update().update().login().logout();


