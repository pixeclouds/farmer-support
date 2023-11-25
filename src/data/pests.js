
// dummy pest data to be fed into the prediction alagorithm for pest alerts
const pestsData = [
    {
        "name": "Maize Weevil",
        "affected_crops": ["Maize", "Sorghum"],
        "active_season": ["June", "July", "August"],
        "prone_regions": ["Northern Nigeria", "Middle Belt"]
    },
    {
        "name": "Cassava Green Mite",
        "affected_crops": ["Cassava"],
        "active_season": ["March", "April", "May"],
        "prone_regions": ["Southwestern Nigeria", "Southeastern Nigeria"]
    },
    {
        "name": "Rice Stem Borer",
        "affected_crops": ["Rice"],
        "active_season": ["July", "August", "September"],
        "prone_regions": ["Northeastern Nigeria", "Northwestern Nigeria"]
    },
    {
        "name": "Groundnut Aphid",
        "affected_crops": ["Groundnut", "Soybean"],
        "active_season": ["October", "November", "December"],
        "prone_regions": ["Northern Nigeria", "Middle Belt"]
    },
    {
        "name": "Yam Scale Insect",
        "affected_crops": ["Yam"],
        "active_season": ["January", "February", "March"],
        "prone_regions": ["Southwestern Nigeria", "Southeastern Nigeria"]
    },
    {
        "name": "Cocoa Mirid Bug",
        "affected_crops": ["Cocoa"],
        "active_season": ["July", "August", "September"],
        "prone_regions": ["Southwestern Nigeria", "Southeastern Nigeria"]
    },
    {
        "name": "Tomato Hornworm",
        "affected_crops": ["Tomato", "Pepper"],
        "active_season": ["December", "January", "February"],
        "prone_regions": ["Northern Nigeria", "Middle Belt"]
    },
    {
        "name": "Cotton Bollworm",
        "affected_crops": ["Cotton"],
        "active_season": ["April", "May", "June"],
        "prone_regions": ["Northern Nigeria", "Northwestern Nigeria"]
    },
    {
        "name": "Citrus Canker",
        "affected_crops": ["Citrus"],
        "active_season": ["November", "December", "January"],
        "prone_regions": ["South-South Nigeria", "Southwestern Nigeria"]
    },
    {
        "name": "Sorghum Midge",
        "affected_crops": ["Sorghum"],
        "active_season": ["June", "July", "August"],
        "prone_regions": ["Middle Belt", "Northeastern Nigeria"]
    }
];

module.exports = { pestsData }
