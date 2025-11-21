export const sortTickets = (tickets, sortingPreference) => {
    const sortedTickets = [...tickets]; // Create a copy to avoid mutating the original array

    if (sortingPreference === "High to Low") {
        sortedTickets.sort((a, b) => b.priority - a.priority);
    } else if (sortingPreference === "Low to High") {
        sortedTickets.sort((a, b) => a.priority - b.priority);
    }
    return sortedTickets;
}