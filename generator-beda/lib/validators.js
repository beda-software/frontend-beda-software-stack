const validateNonEmpty = async function (input) {
  if (!input) {
    this.log.write("\n");
    this.log.error("name must be set");
    return false;
  }

  return true;
};

const validateFirstUppercase = async function (input) {
  const charCode = input.charCodeAt(0);

  if (charCode < 65 || charCode > 90) {
    this.log.write("\n");
    this.log.error("name must start with uppercase char");
    return false;
  }

  return true;
};

module.exports = {
  validateNonEmpty,
  validateFirstUppercase,
};
