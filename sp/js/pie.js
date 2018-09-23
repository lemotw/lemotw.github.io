var sa_Data         = {};
var academic_data   = {};
var sp_Data         = {};
var recreation_Data = {};
var service_Data    = {};
var pe_Data         = {};


var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: [],
            backgroundColor: [],
            label: ''
        }],
        labels: []
    },
    options: {
        responsive: true
    }
};

var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
};

var tt;

var request = new XMLHttpRequest();
request.open("GET", "./budge.json", true);
request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var data = JSON.parse(request.responseText);
            sa_Data = data.sa;
            academic_data = data.ae;
            sp_Data = data.sp;
            recreation_Data = data.re;
            service_Data = data.se;
            pe_Data = data.pe;
            console.log(request.responseText);
            tt = request.responseText;
            var bugdata = [];
            var bugstr = [];
            var colorSet = [];
            console.log(sa_Data);
            sa_Data["arr"].forEach(function store_data(i) {
                bugdata.push(i.get);
                bugstr.push(i.str);
                colorSet.push(dynamicColors());
            });

            config.data.datasets[0].data = bugdata;
            config.data.datasets[0].backgroundColor = colorSet;
            config.data.datasets[0].label = sa_Data.str;
            config.data.labels = bugstr;

            var ctx = document.getElementById('chart-area').getContext('2d');
            window.myPie = new Chart(ctx, config);
        }
    }
}
request.send();

function update_chart(dataset){
    var bugdata = [];
    var bugstr = [];
    var colorSet = [];

    dataset.arr.forEach(function (i) {
        bugdata.push(i.get);
        bugstr.push(i.str);
        colorSet.push(dynamicColors());
    });

    config.data.datasets[0].data = bugdata;
    config.data.datasets[0].backgroundColor = colorSet;
    config.data.datasets[0].label = dataset.str;
    config.data.labels = bugstr;

    window.myPie.update();
}