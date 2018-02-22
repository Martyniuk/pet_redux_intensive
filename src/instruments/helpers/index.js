export const sort = (list) => {
    const completed = [];
    const other = [];

    list.forEach((todo) => {
        if (todo.completed) {
            completed.push(todo);
        } else {
            other.push(todo);
        }
    });
    const sortedOther = other.sort((a, b) => a.favorite < b.favorite);

    return [...sortedOther, ...completed];
};
