function greeting() {
    let userName = 'Alexandra';

    function displayUserName() {
        return `Hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g)
console.log(g());