var sports_city_bike="http://api.citybik.es/v2/networks"
async function city_bike(){
    var url_fetch1=await fetch (sports_city_bike)
   // console.log(url_fetch1)
    var result=  url_fetch1.json()
    var endresult1=await result
    //console.log(endresult1)
    var data1=endresult1.networks

    for(let i of data1){
       
    try{
        var company=i.company[0]
        //console.log(company)
        var name=i.name
        //console.log(name)
        var city=i.location.city
        var country1=i.location.city
        var id=i.id
       // console.log(id)
        var href=`http://api.citybik.es/v2/networks/${id}`
       var href_fetch=await fetch (href)
        var data2=href_fetch.json()
        var endresult2=await data2
       // console.log(endresult2)
        var lat=endresult2.network.location.latitude
        var lng=endresult2.network.location.longitude
        //console.log(lat)
        //console.log(endresult2)
            }
    catch(e){
        console.log(e)
        console.log("error")

    }
    var parrent1=document.createElement('div')
parrent1.setAttribute('class','card row col-lg-3 col-sm-12')
        parrent1.innerHTML=`
            <div class="head">
                <h3>${name}</h3>
                </div>
                <div class="body">
                    <p><b>company:</b>${company}</p>
                    <p><b>city:</b>${city}</p>
                    <p><b>country:</b>${country1}</p>
                    <p><b>lat:</b>${lat}</p>
                    <p><b>lon:</b>${lng}</p>
                </div>
        `
        document.querySelector('body').append(parrent1)

    }

}
city_bike()
