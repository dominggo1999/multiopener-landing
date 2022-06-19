const urlValidator = /(https|http):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i;

export const isValidUrl = (url) => urlValidator.test(url);
