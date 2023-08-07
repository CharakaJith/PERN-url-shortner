const Validator = {
  checkIfEmptyString: async (field, fieldName) => {
    if (!field || field.trim().length === 0) {
      throw new Error(`${fieldName} field is empty!`);
    }
  },
};

module.exports = Validator;
