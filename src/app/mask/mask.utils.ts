export const keyCodes = {
  TAB: 9,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  BACKSPACE: 8,
  DELETE: 46,
};

export const SPECIAL_CHARACTERS = [' ', '/', '(', ')', '+', '\/', '-', 'x'];


type DigitValidator = (char: string) => boolean;


const RE_ONLY_NUMBER = new RegExp(/[0-9]/);

const RE_LOWER_CASE = new RegExp(/[a-z]/);

const RE_UPPER_CASE = new RegExp(/[A-Z]/);


export const lowerCaseValidator = char => RE_LOWER_CASE.test(char);

export const upperCaseValidator = char => RE_UPPER_CASE.test(char);

export const numericValidator = char => RE_ONLY_NUMBER.test(char);

export const anyValidator = char => true;

export const neverValidator = char => false;

// const numberRangeValidator = (maxValue: number, char: string) =>
//   numericValidator(char) && parseInt(char) <= maxValue;


export const maskDigitValidators: { [key: string]: DigitValidator } = {
  'a': lowerCaseValidator,
  'A': upperCaseValidator,
  '*': anyValidator,
};

for (let i = 0; i <= 9; i++) {
  // maskDigitValidators[i] = numberRangeValidator.bind(undefined, 9);
}
