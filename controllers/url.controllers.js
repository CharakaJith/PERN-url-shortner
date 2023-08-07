const UrlService = require('../services/url.services');

const UrlController = {
  shortNewUrl: async (req, res) => {
    try {
      const data = ({ url } = req.body);

      const shortUrlResponse = await UrlService.shortNewUrl(data);

      res.json({
        success: true,
        message: shortUrlResponse,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error.message,
      });
    }
  },

  getUrlByHash: async (req, res) => {
    try {
      const data = ({ hash } = req.params);

      const getUrlResponse = await UrlService.getUrlByHash(data);

      res.json({
        success: true,
        message: getUrlResponse,
      });
    } catch (error) {
      res.json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = UrlController;
