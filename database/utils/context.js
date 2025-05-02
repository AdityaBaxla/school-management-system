const { Configuration } = require("../models");

async function withCurrentAcademicYear(data) {
  const config = await Configuration.findByPk("CURRENT_AY");
  if (!config) throw new Error("CURRENT_AY not set in configuration");

  return { ...data, academicYearId: config.value };
}

module.exports = { withCurrentAcademicYear };
