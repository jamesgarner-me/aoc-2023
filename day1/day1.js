// Include fs module
const fs = require('fs');
const os = require('os');

const processInput = () => {
    return fs.readFileSync(__dirname + '/input.txt', 'utf8').split(os.EOL);
};

const partOne = () => {
    const input = processInput();
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        const nums = input[i].match(/\d/g);
        let lineNumber = parseInt(`${nums[0]}${nums[nums.length - 1]}`);
        total += lineNumber;
    }
    console.log(`partOne total: ${total}`);
};
partOne();

const hackyReplaceFunction = (str, regexMap) => {
    regexMap.forEach((v, k) => {
        str = str.replace(k, v);
    });
    return str;
};

const partTwo = () => {
    const input = processInput();
    let total = 0;

    for (let i = 0; i < input.length; i++) {
        const regexMap = new Map([
            [/one/g, 'o1e'],
            [/two/g, 't2o'],
            [/three/g, 't3e'],
            [/four/g, 'f4r'],
            [/five/g, 'f5e'],
            [/six/g, 's6x'],
            [/seven/g, 's7n'],
            [/eight/g, 'e8t'],
            [/nine/g, 'n9e'],
        ]);
        const replacedInput = hackyReplaceFunction(input[i], regexMap);

        const nums = replacedInput.match(/\d/g);

        let lineNumber = parseInt(`${nums[0]}${nums[nums.length - 1]}`);

        total += lineNumber;
    }
    console.log(`partTwo total: ${total}`);
};

partTwo();
