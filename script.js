//QUESTION 1
// Get all the countries from Asia continent /region using Filter function


var request=new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all","true")
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    var output=result.filter((ele)=>console.log(ele.continents,ele.region))
}
//QUESTION 2
//Get all the countries with a population of less than 2 lakhs using Filter function

var request1=new XMLHttpRequest()
request1.open("GET","https://restcountries.com/v3.1/all","true")
request1.send();
request1.onload=function(){
    var data1=request1.response
    var result1=JSON.parse(data1)
    var total=result1.filter((elem)=>(elem.population<200000))
    var final=total.map((elem)=>console.log(elem.name.common))

}

//QUESTION 3
//Print the following details name, capital, flag, using forEach function

var request2=new XMLHttpRequest()
request2.open("GET","https://restcountries.com/v3.1/all","true")
request2.send();
request2.onload=function(){
    var data2=request2.response
    var result2=JSON.parse(data2)
    var total2=result2.forEach((elemen)=>console.log(`names:${elemen.name.common},flag:${elemen.flag},capital:${elemen.capital}`))

}

//QUESTION 4
//Print the total population of countries using reduce function


var request3=new XMLHttpRequest()
request3.open("GET","https://restcountries.com/v3.1/all","true")
request3.send();
request3.onload=function(){
    var data3=request3.response
    var result3=JSON.parse(data3)
    var output3=result3.reduce((acc,cv)=>acc+cv.population,0)
    console.log(output3)
}

//QUESTION 5
//Print the country that uses US dollars as currency.

var request4=new XMLHttpRequest()
request4.open("GET","https://restcountries.com/v3.1/all","true")
request4.send();
request4.onload=function(){
    var data4=request4.response
    var result4=JSON.parse(data4)
    var output4=result4.filter((element)=>console.log(element.currencies.USD))       
}