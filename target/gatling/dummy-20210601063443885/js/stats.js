var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "260",
        "ok": "260",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "percentiles1": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "percentiles2": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles3": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "percentiles4": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 260,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    }
},
contents: {
"req_get1-9bf88": {
        type: "REQUEST",
        name: "get1",
path: "get1",
pathFormatted: "req_get1-9bf88",
stats: {
    "name": "get1",
    "numberOfRequests": {
        "total": "260",
        "ok": "260",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "657",
        "ok": "657",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "392",
        "ok": "392",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "92",
        "ok": "92",
        "ko": "-"
    },
    "percentiles1": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "percentiles2": {
        "total": "485",
        "ok": "485",
        "ko": "-"
    },
    "percentiles3": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "percentiles4": {
        "total": "577",
        "ok": "577",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 260,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}