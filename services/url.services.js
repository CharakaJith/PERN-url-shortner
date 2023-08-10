const url = require('url');
const ExposableIdGenerator = require('../common/exposableIdGenerator');
const Validator = require('../util/validator');
const ShortUrlGenerator = require('../util/shortUrlGenerator');
const UrlRepository = require('../repositories/url.repositories');

const UrlService = {
  shortNewUrl: async (data) => {
    try {
      const { url, domain } = data;

      // validate user inputs
      await Validator.checkIfEmptyString(url, 'URL');
      await Validator.checkIfValidUrl(url);

      // check if url is already shortened
      const urlDetails = await UrlRepository.getByOriginalUrl(url);
      if (urlDetails && urlDetails.isActive) {
        return urlDetails;
      }

      // generate url host and hash
      const urlHash = await ShortUrlGenerator.generateShortUrl(url);
      const urlHost = new URL(url).host;

      // save url details
      const urldId = ExposableIdGenerator.EXPOSABLE_ID_URL();
      const shortUrlDetails = {
        exposableId: urldId,
        originalUrl: url,
        originalUrlHost: urlHost,
        shortUrlHash: urlHash,
        shortUrlDomain: domain,
        isActive: true,
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
      if (!urlDetails.isActive) {
        throw new Error('Short URL has expired!');
      }

      return urlDetails;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UrlService;
