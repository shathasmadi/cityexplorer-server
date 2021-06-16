class Weather{
    constructor(obj){
        this.description=obj.weather.description;
        this.date=obj.datetime;
    }
}
module.exports=Weather;