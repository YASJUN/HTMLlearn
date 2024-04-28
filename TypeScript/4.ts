//存取器
class User{
    private _password:string = ""
    
    get password():string{
        return "********"
    }

    set password(newvalue:string){
        this._password = newvalue
    }
}

const u = new User()
console.log(u.password)
