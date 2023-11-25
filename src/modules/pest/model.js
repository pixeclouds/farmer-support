const { stateRegionMap } = require('../../data/regions')
const { pestsData } = require('../../data/pests'); 

function getStateRegion(state) {
    let stateRegion = stateRegionMap
    return stateRegion[state] || "Federal Capital Territory";
}

function getCurrentMonth() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];

    return currentMonth;
}

function getNextMonth(currentMonth) {
    const monthsMap = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };

    const nextMonthIndex = (monthsMap[currentMonth] + 1) % 12;
    const nextMonth = Object.keys(monthsMap)[nextMonthIndex];

    return nextMonth;
}

exports.predictPest = (farmLocation) => {
    const farmRegion = getStateRegion(farmLocation);       
    const currentMonth = getCurrentMonth();
    const nextMonth = getNextMonth(currentMonth);

    const potentialPests = pestsData
        .filter(pest => pest.prone_regions.includes(farmRegion) && pest.active_season.includes(nextMonth))
        .map(pest => pest.name);

    return potentialPests;

}



