var sqlite = require('./sqlite');
module.exports.db = new sqlite.init();
module.exports.Proto = require('./sqlite.proto');
module.exports.Service = require('./sqlite.service');
module.exports.Device = require('./sqlite.deviceTest');
module.exports.HmVersion = require('./sqlite.hm_version');
module.exports.HiveManager = require('./sqlite.hivemanagerTest');
module.exports.Hm6DC = require("./sqlite.hm6_dc");
module.exports.Hm6Type = require("./sqlite.hm6_type");
module.exports.HmNgDC = require("./sqlite.hmng_dc");
module.exports.CountryCode = require("./sqlite.country.code");