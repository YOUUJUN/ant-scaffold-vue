export default {

    devBaseUrl : 'http://localhost:80',
    // prodBashUrl : 'http://106.13.63.236',
    prodBashUrl : 'http://114.115.236.101',

    baseUrl (){
        if(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "devBuild"){
            return this.devBaseUrl;
        }else{
            return this.prodBashUrl
        }
    }

};
