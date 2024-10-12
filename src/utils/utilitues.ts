import moment from "moment";

export const getRandomId = (index: number) => {
    let unix = moment().unix();
    let randomNumber = Math.floor(Math.random() * 1000);
    return (
        (unix + randomNumber)
            .toString()
            .split("")
            .reduce((a, b) => a + Number(b), 0) +
        index +
        1
    );
};
