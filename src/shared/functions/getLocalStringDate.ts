export const getLocalStringDate = (date: number): string => {
    return new Date(date).toLocaleString("en-GB", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
};
