const Validator = {
  checkIfEmptyString: async (field, fieldName) => {
    if (!field || field.trim().length === 0) {
      throw new Error(`The ${fieldName} field is empty!`);
    }
  },

  checkIfValidUrl: async (url) => {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      throw new Error('Invalid URL format!');
    }
  },
};

module.exports = Validator;
