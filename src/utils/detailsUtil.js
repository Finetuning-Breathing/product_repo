export const trimIdFromUrl = (url) => {
    //takes the current offer's ID from the details url
    return url.pathname.split("/details/")[1];
};

export const trimIdFromEdit = (url) => {
    //takes the current offer's ID from the edit url
    return url.pathname.split("/edit/")[1];
};

export const formatConditionString = (str) => {
    //returns the Condition of each item with the first letter changed to UpperCase
    let newStr = str.charAt(0).toUpperCase();
    newStr = newStr + str.substring(1, str.length);
    return newStr;
};
