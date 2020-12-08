var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.send();
request.onload=function(){
    var data=JSON.parse(this.response)
        console.log(data);
/*----------------------------------------------------------------------*/
/*Get all the countries from Asia continent /region using Filter function */        
    var e=data.filter(element=>element.region="Asia")
     console.log(e);

/*-----------------------------------------------------------------------*/
/* Get all the countries with population of less than 2 lacs using Filter function*/     
    var f=data.filter(element=>element.population>20000) 
    console.log(f);

/*----------------------------------------------------------------------*/
/* Print the following details name, capital, flag using forEach function */   
data.forEach((element) => {
    console.log(element.name+' '+element.capital+' '+element.flag);
} 
)

/*--------------------------------------------------------------------*/
/*Print the total population of countries using reduce function */
const total=data.reduce(function(initial,da){
    
  return initial+da.population;
},0)

console.log(total)

/*--------------------------------------------------------------------*/
/* Print the country which use US Dollars as currency.*/
const cur=data.filter((element)=>{
    return element.currrency=" US Dollar"
})
console.log(cur);











}
