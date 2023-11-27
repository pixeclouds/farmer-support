const { stateRegionMap } = require('../../data/regions')
const { pestsData } = require('../../data/pests'); 
const { pestControlData } = require('../../data/pest-control')

async function getStateRegion(state) {
    // capitalize state string to comform with the keys of the stateRegionMap dictionary
    state = state.charAt(0).toUpperCase() + state.slice(1).toLowerCase();

    let stateRegion = stateRegionMap
    return stateRegion[state] || "Federal Capital Territory";
}

async function getCurrentMonth() {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];

    return currentMonth;
}

async function getNextMonth(currentMonth) {
    const monthsMap = {
        "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
        "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
    };

    const nextMonthIndex = (monthsMap[currentMonth] + 1) % 12;
    const nextMonth = Object.keys(monthsMap)[nextMonthIndex];

    return nextMonth;
}


/*
    Pest prediction algorithm
       data - the algorithm works with dummy data, as there are no suitable local data
              to feed into it
       prediction parameters - (i) farmer location : is the farm located in a pest prone region 
                                (ii) time of the year: is the active season of the pest near (1 months time)
                                (iii) crops affected 
*/
exports.predictPest = async (farmLocation) => {
    const farmRegion = await getStateRegion(farmLocation);    
    const currentMonth = await getCurrentMonth();
    const nextMonth = await getNextMonth(currentMonth);

    const potentialPests = pestsData
    .filter(pest => {
        const regions = pest.prone_regions.map(region => region.toLowerCase());
        return regions.includes(farmRegion.toLowerCase()) && pest.active_season.includes(nextMonth);
    })
    .map(pest => pest.name);

    return potentialPests;

}


exports.getPestControl = async (pestNames) => {
    // Convert pestNames to lowercase for case-insensitive comparison
    let lowerCasePestNames = pestNames.map(name => name.toLowerCase());
    // Filter pests based on the provided names
    let pestControl = pestControlData.filter(pest => lowerCasePestNames.includes(pest.name.toLowerCase()))

    return pestControl
}





