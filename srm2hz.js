const iconv = require('iconv-lite');
const fs = require('fs-extra');
const getPath = (...names) => names.join('/');
const readLines = (path, encoding) => iconv.decode(new Buffer(fs.readFileSync(path)), encoding).replace(/\r/g, '\n').replace(/\n\n/g, '\n').split('\n');

const INPUT = 'zimb.txt';
const ENCODING = 'utf16-le';

const ZIMB = {};
readLines(getPath('.', INPUT), ENCODING)
    .map(line => {
        let rtn = {
            pinyin: '',
            characters: []
        };
        line.split('').forEach(c => {
            if (c.match(/^[A-Za-z]+$/)) {
                rtn.pinyin += c;
            } else {
                rtn.characters.push(c);
            }
        });
        return rtn;
    })
    .forEach(obj => ZIMB[obj.pinyin] = obj.characters);

const srm2hz = srm => {
    srm = iconv.decode(new Buffer(srm), ENCODING);
    return iconv.encode(ZIMB[srm] ? ZIMB[srm].characters.join('') : null, ENCODING);
};