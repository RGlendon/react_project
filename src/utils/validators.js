export const required = value => value ? undefined : 'this field is required';

export const maxLength = (maxLength) => (value) => (value && value.length <= maxLength) ? undefined : `max length is ${maxLength} symbols`;
