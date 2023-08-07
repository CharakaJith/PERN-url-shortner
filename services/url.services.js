const ExposableIdGenerator = require('../common/exposableIdGenerator');
const Validator = require('../util/validator');
const ShortUrlGenerator = require('../util/shortUrlGenerator');
const UrlRepository = require('../repositories/url.repositories');

const UrlService = {
  shortNewUrl: async (data) => {
    try {
      const { url } = data;

      // validate user inputs
      await Validator.checkIfEmptyString(url, 'URL');

      // check if url is already shortened
      const urlDetails = await UrlRepository.getByOriginalUrl(url);
      if (urlDetails) {
        return urlDetails;
      }

      // generate short url
      const urlHash = await ShortUrlGenerator.generateShortUrl(url);

      // save url details
      const urldId = ExposableIdGenerator.EXPOSABLE_ID_URL();
      const shortUrlDetails = {
        exposableId: urldId,
        originalUrl: url,
        shortUrlHash: urlHash,
      };
      return await UrlRepository.addNewShortUrl(shortUrlDetails);
    } catch (error) {
      throw error;
    }
  },

  getUrlByHash: async (data) => {
    try {
      const { hash } = data;

      const urlDetails = await UrlRepository.getByShortUrlHash(hash);
      if (!urlDetails) {
        throw new Error('No URL found under this hash!');
      }

      return urlDetails;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UrlService;
