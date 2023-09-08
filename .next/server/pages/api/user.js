"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _utils_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/userModel */ \"(api)/./utils/userModel.js\");\n\n\nasync function handler(req, res) {\n    (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch((error)=>res.json({\n            error: \"Connection Failed\"\n        }));\n    if (req.method === \"POST\") {\n        try {\n            let response = await _utils_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                username: req.body.username\n            });\n            if (!response) response = await _utils_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                username: req.body.username\n            });\n            return res.status(200).json({\n                response\n            });\n        } catch (error) {\n            console.log(error);\n            res.status(500).json({\n                msg: \"An Internal Server Error Occoured\"\n            });\n        }\n    } else {\n        res.status(500).json({\n            msg: \"Invalid Request\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFDSjtBQUU5QixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5Q0osNERBQVNBLEdBQUdLLEtBQUssQ0FBQyxDQUFDQyxRQUFVRixJQUFJRyxJQUFJLENBQUM7WUFBRUQsT0FBTztRQUFvQjtJQUVuRSxJQUFJSCxJQUFJSyxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsSUFBSUMsV0FBVyxNQUFNUixnRUFBYSxDQUFDO2dCQUFFVSxVQUFVUixJQUFJUyxJQUFJLENBQUNELFFBQVE7WUFBQztZQUNqRSxJQUFJLENBQUNGLFVBQ0hBLFdBQVcsTUFBTVIsK0RBQVksQ0FBQztnQkFBRVUsVUFBVVIsSUFBSVMsSUFBSSxDQUFDRCxRQUFRO1lBQUM7WUFFOUQsT0FBT1AsSUFBSVUsTUFBTSxDQUFDLEtBQUtQLElBQUksQ0FBQztnQkFBRUU7WUFBUztRQUN6QyxFQUFFLE9BQU9ILE9BQU87WUFDZFMsUUFBUUMsR0FBRyxDQUFDVjtZQUNaRixJQUFJVSxNQUFNLENBQUMsS0FBS1AsSUFBSSxDQUFDO2dCQUFFVSxLQUFLO1lBQW9DO1FBQ2xFO0lBQ0YsT0FBTztRQUNMYixJQUFJVSxNQUFNLENBQUMsS0FBS1AsSUFBSSxDQUFDO1lBQUVVLEtBQUs7UUFBa0I7SUFDaEQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmkyZG8vLi9wYWdlcy9hcGkvdXNlci9pbmRleC5qcz81N2NiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RiQ29ubmVjdFwiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3VzZXJNb2RlbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGRiQ29ubmVjdCgpLmNhdGNoKChlcnJvcikgPT4gcmVzLmpzb24oeyBlcnJvcjogXCJDb25uZWN0aW9uIEZhaWxlZFwiIH0pKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlKVxyXG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgVXNlcnMuY3JlYXRlKHsgdXNlcm5hbWU6IHJlcS5ib2R5LnVzZXJuYW1lIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzcG9uc2UgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbXNnOiBcIkFuIEludGVybmFsIFNlcnZlciBFcnJvciBPY2NvdXJlZFwiIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1zZzogXCJJbnZhbGlkIFJlcXVlc3RcIiB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlVzZXJzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJqc29uIiwibWV0aG9kIiwicmVzcG9uc2UiLCJmaW5kT25lIiwidXNlcm5hbWUiLCJib2R5IiwiY3JlYXRlIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsIm1zZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/user/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nconst dbConnect = async ()=>{\n    if (connection.isConnected) return;\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsQ0FBQztBQUVwQixNQUFNQyxZQUFZLFVBQVk7SUFDNUIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO0lBRTVCLE1BQU1DLEtBQUssTUFBTUosdURBQWdCLENBQUNNLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO1FBQ3ZEQyxpQkFBaUIsSUFBSTtRQUNyQkMsb0JBQW9CLElBQUk7SUFDMUI7SUFFQVQsV0FBV0UsV0FBVyxHQUFHQyxHQUFHTyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO0FBQ3ZEO0FBRUEsaUVBQWVWLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmkyZG8vLi91dGlscy9kYkNvbm5lY3QuanM/YzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5jb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHJldHVybjtcclxuXHJcbiAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ }),

/***/ "(api)/./utils/userModel.js":
/*!****************************!*\
  !*** ./utils/userModel.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SheetSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    solved: {\n        type: [\n            Number\n        ],\n        default: []\n    },\n    bookmarked: {\n        type: [\n            Number\n        ],\n        default: []\n    }\n});\nconst defaultSheet = {\n    solved: [],\n    bookmarked: []\n};\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    sheet0: {\n        type: SheetSchema,\n        default: defaultSheet\n    },\n    sheet1: {\n        type: SheetSchema,\n        default: defaultSheet\n    },\n    sheet2: {\n        type: SheetSchema,\n        default: defaultSheet\n    },\n    sheet3: {\n        type: SheetSchema,\n        default: defaultSheet\n    },\n    sheet4: {\n        type: SheetSchema,\n        default: defaultSheet\n    },\n    sheet5: {\n        type: SheetSchema,\n        default: defaultSheet\n    }\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy91c2VyTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGNBQWMsSUFBSUgsNENBQU1BLENBQUM7SUFDN0JJLFFBQVE7UUFDTkMsTUFBTTtZQUFDQztTQUFPO1FBQ2RDLFNBQVMsRUFBRTtJQUNiO0lBQ0FDLFlBQVk7UUFDVkgsTUFBTTtZQUFDQztTQUFPO1FBQ2RDLFNBQVMsRUFBRTtJQUNiO0FBQ0Y7QUFFQSxNQUFNRSxlQUFlO0lBQ25CTCxRQUFRLEVBQUU7SUFDVkksWUFBWSxFQUFFO0FBQ2hCO0FBRUEsTUFBTUUsYUFBYSxJQUFJViw0Q0FBTUEsQ0FBQztJQUM1QlcsVUFBVTtRQUNSTixNQUFNTztRQUNOQyxVQUFVLElBQUk7UUFDZEMsUUFBUSxJQUFJO0lBQ2Q7SUFDQUMsUUFBUTtRQUNOVixNQUFNRjtRQUNOSSxTQUFTRTtJQUNYO0lBQ0FPLFFBQVE7UUFDTlgsTUFBTUY7UUFDTkksU0FBU0U7SUFDWDtJQUNBUSxRQUFRO1FBQ05aLE1BQU1GO1FBQ05JLFNBQVNFO0lBQ1g7SUFDQVMsUUFBUTtRQUNOYixNQUFNRjtRQUNOSSxTQUFTRTtJQUNYO0lBQ0FVLFFBQVE7UUFDTmQsTUFBTUY7UUFDTkksU0FBU0U7SUFDWDtJQUNBVyxRQUFRO1FBQ05mLE1BQU1GO1FBQ05JLFNBQVNFO0lBQ1g7QUFDRjtBQUVBLE1BQU1ZLFFBQVFuQiw0Q0FBTUEsRUFBRW9CLFFBQVFyQiwrQ0FBS0EsQ0FBQyxRQUFRUztBQUU1QyxpRUFBZVcsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RyaTJkby8uL3V0aWxzL3VzZXJNb2RlbC5qcz9jNjk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgU2hlZXRTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBzb2x2ZWQ6IHtcclxuICAgIHR5cGU6IFtOdW1iZXJdLFxyXG4gICAgZGVmYXVsdDogW10sXHJcbiAgfSxcclxuICBib29rbWFya2VkOiB7XHJcbiAgICB0eXBlOiBbTnVtYmVyXSxcclxuICAgIGRlZmF1bHQ6IFtdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgZGVmYXVsdFNoZWV0ID0ge1xyXG4gIHNvbHZlZDogW10sXHJcbiAgYm9va21hcmtlZDogW10sXHJcbn07XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdW5pcXVlOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2hlZXQwOiB7XHJcbiAgICB0eXBlOiBTaGVldFNjaGVtYSxcclxuICAgIGRlZmF1bHQ6IGRlZmF1bHRTaGVldCxcclxuICB9LFxyXG4gIHNoZWV0MToge1xyXG4gICAgdHlwZTogU2hlZXRTY2hlbWEsXHJcbiAgICBkZWZhdWx0OiBkZWZhdWx0U2hlZXQsXHJcbiAgfSxcclxuICBzaGVldDI6IHtcclxuICAgIHR5cGU6IFNoZWV0U2NoZW1hLFxyXG4gICAgZGVmYXVsdDogZGVmYXVsdFNoZWV0LFxyXG4gIH0sXHJcbiAgc2hlZXQzOiB7XHJcbiAgICB0eXBlOiBTaGVldFNjaGVtYSxcclxuICAgIGRlZmF1bHQ6IGRlZmF1bHRTaGVldCxcclxuICB9LFxyXG4gIHNoZWV0NDoge1xyXG4gICAgdHlwZTogU2hlZXRTY2hlbWEsXHJcbiAgICBkZWZhdWx0OiBkZWZhdWx0U2hlZXQsXHJcbiAgfSxcclxuICBzaGVldDU6IHtcclxuICAgIHR5cGU6IFNoZWV0U2NoZW1hLFxyXG4gICAgZGVmYXVsdDogZGVmYXVsdFNoZWV0LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlcnMgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoXCJVc2VyXCIsIFVzZXJTY2hlbWEpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XHJcbiJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsIlNoZWV0U2NoZW1hIiwic29sdmVkIiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJib29rbWFya2VkIiwiZGVmYXVsdFNoZWV0IiwiVXNlclNjaGVtYSIsInVzZXJuYW1lIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJzaGVldDAiLCJzaGVldDEiLCJzaGVldDIiLCJzaGVldDMiLCJzaGVldDQiLCJzaGVldDUiLCJVc2VycyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user/index.js"));
module.exports = __webpack_exports__;

})();