export class Home{
    contructor($log){
        this._$log = $log;
    }
    
    foo(){
        this.msg += "foo";
    }
}