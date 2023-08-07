var { nanoid } = require('nanoid');
const SEPARATOR_HYPHEN = '-';

const ExposableIdGenerator = {
  EXPOSABLE_ID_URL: () => {
    return 'URL' + SEPARATOR_HYPHEN + nanoid(10);
  },
};

module.exports = ExposableIdGenerator;
