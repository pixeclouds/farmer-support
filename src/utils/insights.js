exports.getMarketInsights = async(filteredProduce) => {

        // Create an object to store insights for each day
        const insights = {}

        // Initialize insights for each day with default values
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - i);
            insights[currentDate.toDateString()] = {
                averagePrice: 0.00,
                produceCount: 0,
            };
        }

        // Calculate average price and count for each day with actual produce entries
        filteredProduce.forEach(entry => {
            const entryDate = new Date(entry.createdAt)
            const entryDateString = entryDate.toDateString()

            insights[entryDateString].averagePrice += parseFloat(entry.price)
            insights[entryDateString].produceCount += 1
        });

        // Calculate average price for each day
        for (const date in insights) {
            const dayInsight = insights[date]
            if (dayInsight.produceCount > 0) {
                dayInsight.averagePrice /= dayInsight.produceCount
            }
            dayInsight.averagePrice = dayInsight.averagePrice.toFixed(2)
        }

        return insights
 
}