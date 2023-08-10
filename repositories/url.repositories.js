const models = require('../models');

const UrlRepository = {
  /**
   * Function to create a new record in table "short_urls"
   *
   * @param {Object} shortUrl: URL details object
   * @returns an object of newly created short url details
   */
  addNewShortUrl: async (shortUrl) => {
    try {
      return models.ShortUrls.create(shortUrl);
    } catch (error) {
      throw new Error(`Internal server error while creating a new short url: ${error.message}`);
    }
  },

  /**
   * Funtion to fetch a record from table "short_urls" by column 'original_url'
   *
   * @param {String} url: original url
   * @returns an object of short url details if exists, else null
   */
  getByOriginalUrl: async (url) => {
    try {
      return await models.ShortUrls.findOne({
        where: {
          originalUrl: url,
        },
      });
    } catch (error) {
      throw new Error(
        `Internal server error while getting url details by original url: ${error.message}`
      );
    }
  },

  /**
   * Funtion to fetch a record from table "short_urls" by column 'short_url_hash'
   *
   * @param {String} hash: 6 character hash
   * @returns an object of short url details if exists, else null
   */
  getByShortUrlHash: async (hash) => {
    try {
      return await models.ShortUrls.findOne({
        where: {
          shortUrlHash: hash,
          isActive: true,
        },
      });
    } catch (error) {
      throw new Error(
        `Internal server error while getting url details by short url hash: ${error.message}`
      );
    }
  },
};

module.exports = UrlRepository;
