// control methods data for the pests

const pestControlData = [
    {
        "name": "Maize Weevil",
        "crops_affected": ["Maize", "Sorghum"],
        "control_methods": [
            "Use phosphine gas to fumigate storage facilities.",
            "Apply controlled heat to kill weevils in stored grains.",
            "Maintain proper grain moisture levels to discourage weevil activity.",
            "Use vacuum-sealed containers to prevent weevil infestations."
        ]
    },
    {
        "name": "Cassava Green Mite",
        "crops_affected": ["Cassava"],
        "control_methods": [
            "Introduce predatory mites to control green mite populations.",
            "Apply horticultural oils to suffocate and control mite infestations.",
            "Use biological insecticides specific to mites.",
            "Apply insecticidal soap to disrupt mite feeding.",
        ]
    },
    {
        "name": "Rice Stem Borer",
        "crops_affected": ["Rice"],
        "control_methods": [
            "Introduce Trichogramma wasps for biological control.",
            "Apply Bt insecticide targeting stem borers.",
            "Use pheromone traps to monitor and disrupt mating.",
            "Apply neem-based sprays to deter stem borer feeding.",
        ]
    },
    {
        "name": "Groundnut Aphid",
        "crops_affected": ["Groundnut", "Soybean"],
        "control_methods": [
            "Introduce ladybugs, natural predators of aphids, to the field.",
            "Apply neonicotinoid insecticides targeting aphids.",
            "Use reflective mulches to disrupt aphid feeding.",
            "Implement crop rotation to reduce aphid populations.",
        ]
    },
    {
        "name": "Yam Scale Insect",
        "crops_affected": ["Yam"],
        "control_methods": [
            "Apply systemic insecticides targeting scale insects.",
            "Prune and dispose of heavily infested plant parts.",
            "Apply insecticidal soap directly on scale insects.",
            "Use yellow sticky traps to monitor and trap scale insects."
        ]
    },
    {
        "name": "Cocoa Mirid Bug",
        "crops_affected": ["Cocoa"],
        "control_methods": [
            "Prune and destroy branches with visible mirid bug infestations.",
            "Apply systemic insecticides to control mirid bug populations.",
            "Introduce parasitoid wasps to control bug populations.",
            "Regularly monitor cocoa trees for early signs and take immediate action."
        ]
    },
    {
        "name": "Tomato Hornworm",
        "crops_affected": ["Tomato", "Pepper"],
        "control_methods": [
            "Apply Bt spray specifically targeting hornworms.",
            "Handpick and crush hornworms to manually control populations.",
            "Plant marigold to repel hornworms.",
            "Use row covers to prevent adult moths from laying eggs on plants."
        ]
    },
    {
        "name": "Cotton Bollworm",
        "crops_affected": ["Cotton"],
        "control_methods": [
            "Use Bt cotton for built-in resistance against bollworms.",
            "Introduce Trichogramma wasps for biological control.",
            "Apply systemic insecticides targeting bollworms.",
            "Harvest cotton crops early to reduce bollworm damage."
        ]
    },
    {
        "name": "Citrus Canker",
        "crops_affected": ["Citrus"],
        "control_methods": [
            "Apply copper hydroxide sprays to control bacterial growth.",
            "Plant citrus varieties resistant to citrus canker.",
            "Prune infected branches and destroy them to prevent further spread.",
            "Use copper-based bactericides for canker control."
        ]
    },
    {
        "name": "Sorghum Midge",
        "crops_affected": ["Sorghum"],
        "control_methods": [
            "Apply insecticides during the heading stage of sorghum.",
            "Adjust planting dates to avoid peak midge populations.",
            "Introduce parasitic wasps for biological control.",
            "Implement field sanitation to eliminate overwintering sites."
        ]
    }
]


module.exports = { pestControlData }