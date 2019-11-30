export const RE_FORMAT_NUMBER = new RegExp(/[^\d]+/g);

export const RE_NUMBER = new RegExp(/^\d+$/);

export const RE_ONLY_NUMBER = new RegExp(/[0-9]/);

export const RE_LOWER_CASE = new RegExp(/[a-z]/);

export const RE_UPPER_CASE = new RegExp(/[A-Z]/);

export const RE_THREE_NUMBERS = new RegExp(/.{1,3}/g);

export const RE_CURRENCY = new RegExp(/(\d)(?=(\d\d\d)+([^\d]|$))/g);
