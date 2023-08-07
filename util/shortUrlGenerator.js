const randomstring = require('randomstring');
const UrlRepository = require('../repositories/url.repositories');

const ShortUrlGenerator = {
  generateShortUrl: async (originalUrl) => {
    try {
      let shortUrlHash;
      while (true) {
        const randomString = randomstring.generate({
          length: 6,
          charset: 'alphabetic',
        });

        const urlDetails = await UrlRepository.getByShortUrlHash(randomString);
        if (!urlDetails) {
          shortUrlHash = randomString;
          break;
        }
      }

      return shortUrlHash;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = ShortUrlGenerator;
