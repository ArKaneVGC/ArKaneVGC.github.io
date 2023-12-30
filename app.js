

function calcHP(poke) {
    let hp = poke.find(".hp");
    let total;
    let base = ~~hp.find(".base").val();
    if (base === 1) {
        total = 1;
    } else {
        let level = 50;
        let evs = ~~hp.find(".evs").val();
        let ivs = ~~hp.find(".ivs").val();
        total = Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + level + 10;
    }
    hp.find(".total").text(total);
}

function calcStat(poke, statName) {
    let stat = poke.find(statName);
    let total;
    let base = ~~stat.find(".base").val();
    if (base === 1) {
        total = 1;
    } else {
        let level = 50;
        let evs = ~~stat.find(".evs").val();
        let ivs = ~~stat.find(".ivs").val();
        total = Math.floor((base * 2 + ivs + Math.floor(evs / 4)) * level / 100) + 5;
    }
    stat.find(".total").text(total);
}

function setEVs(stat, val) {
    ~~stat.find(".range").val(val);
    ~~stat.find(".num").val(val);

}

$(".hp .base, .hp .evs, .hp .ivs").bind("keyup change input", function () {
    calcHP($(this).closest(".poke-info"));
});

$(".at .base, .at .evs, .at .ivs").bind("keyup change input", function () {
    calcStat($(this).closest(".poke-info"), ".at");
});

$(".df .base, .df .evs, .df .ivs").bind("keyup change input", function () {
    calcStat($(this).closest(".poke-info"), ".df");
});

$(".sa .base, .sa .evs, .sa .ivs").bind("keyup change input", function () {
    calcStat($(this).closest(".poke-info"), ".sa");
});

$(".sd .base, .sd .evs, .sd .ivs").bind("keyup change input", function () {
    calcStat($(this).closest(".poke-info"), ".sd");
});

$(".sp .base, .sp .evs, .sp .ivs").bind("keyup change input", function () {
    calcStat($(this).closest(".poke-info"), ".sp");
});


$(".evs").bind("keyup change input", function () {
    setEVs($(this).closest(".stat"), $(this).val());
});

const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            console.log("in");
            const registration = await navigator.serviceWorker.register("/serviceworker.js");
            console.log("out");
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            } 
            console.log(registration);
        }
        catch (error) {
            console.error(`Registration failed with ${error}`);
        }

    }else{
        console.log("serviceworker not in navigator")
    }
};
