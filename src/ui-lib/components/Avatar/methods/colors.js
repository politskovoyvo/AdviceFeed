const firstCyrillicCode = 1040;
const lastCyrillicCode = 1071;
const firstLatinCode = 65;
const lastLatinCode = 90;
const colors = ['bg-green-500', 'bg-orange-700', 'bg-red-900', 'bg-green-800', 'bg-primary-500'];
/** Получаем позицию выбранного цвета, считаем цвета в соответствии со списком букв с повторением
 * [1,2,3,4,5] - ['красный', 'синий', 'зеленый', 'красный', 'синий',...]
 */
const countPosition = (num) => {
    const colorDecimal = (num / colors.length) % 1;
    return Math.floor(colors.length * colorDecimal);
};
const getLettersColor = (firstLetter, secondLetter) => {
    const firstUnicode = firstLetter.toUpperCase().charCodeAt(0);
    const secondUnicode = secondLetter.toUpperCase().charCodeAt(0);
    const [first, second] = [firstUnicode, secondUnicode].map((code) => {
        let result = 0;
        if (code >= firstCyrillicCode && code <= lastCyrillicCode) {
            result = lastCyrillicCode - code;
        }
        else if (code >= firstLatinCode && code <= lastLatinCode) {
            result = lastLatinCode - code;
        }
        return result;
    });
    const colorIndex = countPosition((first + second) / 2);
    return colors[colorIndex];
};

export { getLettersColor };
