export function proxyFactory($http,$log){
    class Proxy{
        constructor(url)
        {
            this.url = url;
        }
        load(num = 3)
        {
            //"https://randomuser.me/api/?results="
            return $http.get(`${this.url}?results=${num}`)
                .then((res)=>{
                    $log.debug(`result length: ${res.data.results.length}`);
                    return res.data.results;})
        }
    }
    
    return new Proxy('https://randomuser.me/api/');
}