export function usersComponentFactory($log,usersProxy)
{
    class UsersController{
        constructor()
        {
            this.num = 10;
            this.data = [];
        }
        
        load()
        {
            usersProxy
                .load(this.num)
                .then((results)=>{
                    this.data = results;
                    
                });
        }
    }
    
    class UsersComponent{
        constructor()
        {
            this.controller = UsersController;
            this.controllerAs = 'users';
          this.template = `
            <div>
                <input type="text" ng-model="users.num"/>
                <button ng-click="users.load()">Load</button>
                <hr>
                <div ng-repeat="item in users.data">
                    {{item.user.name.first}}
                    <img ng-src="{{item.user.picture.large}}"/>
                </div>
            </div>
          `;  
        }
    }
    
    return new UsersComponent();
}