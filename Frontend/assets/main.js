$(document).ready(function () {
    $("#part2").hide();
    $("#next").click(function () {
        $("#part1").hide();
        $("#part2").show();
        $("#part3").hide();
    })
    $("#previous").click(function () {
        $("#part2").hide();
        $("#part1").show();
        $("#part3").show()
    })
});


function addData(e) {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let regNumber = document.getElementById("regno").value;
    let email = document.getElementById("srmemail").value;
    let dept = document.getElementById("dept").value;
    let section = document.getElementById("sec").value;
    let year = document.getElementById("year").value;
    let hosteler = document.querySelector('input[name="hostel"]:checked').value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="GENDER"]:checked').value;
    let vaccine = document.querySelector('input[name="VACCINATED"]:checked').value;
    let vaccine_status = document.getElementById("DOSE").value;
    let covid_status = document.querySelector('input[name="covid"]:checked').value;
    let home_state = document.getElementById("home_state").value;


    fetch('http://localhost:8006/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "fname": fname,
            "lname": lname,
            "regNumber": regNumber,
            "email": email,
            "dept": dept,
            "section": section,
            "year": year,
            "hosteler": hosteler,
            "age": age,
            "gender": gender,
            "vaccine": vaccine,
            "vaccine_dose": vaccine_status,
            "covid_status": covid_status,
            "home_state": home_state
        })
    }).then(res => {
        return res.json();
    })
        .then(data => console.log(data))
        .catch(error => console.log("ERROR"))
        
    Swal.fire(
        'Data Submitted Successfully',
        'Thank You!',
        'success'
      );
}


async function getCovidApi() {
    const jsonFormatData = await fetch("https://api.covid19api.com/summary");
    const jsFormatData = await jsonFormatData.json();

    const TotalglobalCase = jsFormatData.Global.TotalConfirmed;
    console.log("Total Global Case : " + TotalglobalCase);

    const countryName = jsFormatData.Countries[0].Country;
    console.log("First Country Name : " + countryName);
    console.log(jsFormatData.Countries[76].Country);

    document.getElementById("g1").innerHTML = jsFormatData.Global.TotalConfirmed;
    document.getElementById("g2").innerHTML = jsFormatData.Global.TotalDeaths;
    document.getElementById("g3").innerHTML = jsFormatData.Global.NewConfirmed;


    document.getElementById("i1").innerHTML = jsFormatData.Countries[76].TotalConfirmed;
    document.getElementById("i2").innerHTML = jsFormatData.Countries[76].TotalDeaths;
    document.getElementById("i3").innerHTML = jsFormatData.Countries[76].NewConfirmed;


}
getCovidApi();
