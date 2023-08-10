const UrlService = require('../services/url.services');

const UrlController = {
  shortNewUrl: async (req, res) => {
    try {
      const data = ({ url } = req.body);

      const shortUrlResponse = await UrlService.shortNewUrl(data);

      res.status(201).json({
        success: true,
        message: shortUrlResponse,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  getUrlByHash: async (req, res) => {
    try {
      const data = ({ hash } = req.params);

      const getUrlResponse = await UrlService.getUrlByHash(data);

      res.redirect(getUrlResponse.originalUrl);
    } catch (error) {
      res.status(404).json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = UrlController;
