const generateRandomUser = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const usernameLength = 6;

    let username = '';

    for (let i = 0; i <= usernameLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        username += chars.substring(randomNumber, randomNumber +1);
    }

    return username;
}

const generateRandomPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    
    let password = '';

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }

    return password;
}

module.exports = {
    generateRandomPassword,
    generateRandomUser
}