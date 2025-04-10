import md5 from 'md5';
import defaultFunc from './module.js'

const encodeBefore = defaultFunc();
const encodeAfter = md5(encodeBefore);
console.log({ encodeBefore, encodeAfter });