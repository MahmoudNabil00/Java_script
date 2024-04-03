function test(){
    console.log('hello world')
    let x : number = 4
    console.log(x)
}

class Human {
    name : string
    age : number
    greet(){
        console.log(`Hi ${this.name} Your age is ${this.age}`)
    }
}

const mahmoud = new Human()
mahmoud.name = 'Mahmoud'
mahmoud.age = 25
mahmoud.greet()
console.log(mahmoud)