'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnnotationsQueryCtrl = exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _query_ctrl = require('./query_ctrl');

var _annotations_ctrl = require('./annotations_ctrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericConfigCtrl = function GenericConfigCtrl() {
    _classCallCheck(this, GenericConfigCtrl);
};

GenericConfigCtrl.templateUrl = 'partials/config.html';

var GenericQueryOptionsCtrl = function GenericQueryOptionsCtrl() {
    _classCallCheck(this, GenericQueryOptionsCtrl);
};

GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

exports.Datasource = _datasource.GenericDatasource;
exports.QueryCtrl = _query_ctrl.GenericDatasourceQueryCtrl;
exports.ConfigCtrl = GenericConfigCtrl;
exports.QueryOptionsCtrl = GenericQueryOptionsCtrl;
exports.AnnotationsQueryCtrl = _annotations_ctrl.GenericAnnotationsQueryCtrl;
//# sourceMappingURL=module.js.map
