/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: lightblue;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.main {\n  color: white;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.cityNameInput {\n  background: transparent;\n  border: none;\n  outline: none;\n  border-bottom: 1px solid white;\n  caret-color: white;\n  color: white; }\n\n.addCityBtn {\n  border: 1px solid white;\n  outline: none;\n  color: white;\n  background: transparent; }\n\n.addCityBtn:active {\n  background-color: rgba(255, 255, 255, 0.4);\n  border: 1px solid white;\n  color: white; }\n\n.weatherDivConteiner {\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.weatherDiv {\n  border: 1px solid white;\n  width: 200px;\n  height: 200px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  color: white;\n  border-radius: 20px;\n  margin: 0px 10px 0px 10px; }\n\n.cityNameDiv {\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid white; }\n\n.bottomData {\n  width: 200px;\n  height: 150px; }\n\n.leftPanel {\n  float: left;\n  height: 150px;\n  width: 100px; }\n\n.rightPanel {\n  float: left;\n  height: 150px;\n  width: 99px;\n  border-left: 1px solid white; }\n\n.sky {\n  width: 100px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid white; }\n\n.temperture {\n  width: 100px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.pressure {\n  width: 99px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid white; }\n\n.humidity {\n  width: 99px;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
class Api {
    constructor() {
        this.ui = new ui_1.Ui;
        this.opwApiKey = '1e4b2024641cb3682285770d3bebc4e8';
    }
    getCityValue() {
        this.addCity = document.querySelector('.addCityBtn');
        this.cityNameInput = document.querySelector('.cityNameInput');
        this.addCity.addEventListener('click', () => this.getCityInfo(this.cityNameInput.value));
    }
    getCityInfo(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const weather = yield this.getWeather(city);
            if (weather == undefined) {
                alert('Nieprawidłowa nazwa');
                return;
            }
            else {
                this.saveData(weather);
            }
        });
    }
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&&APPID=${this.opwApiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            if (weatherResponse.status == 404) {
                return;
            }
            else {
                const weatherData = yield weatherResponse.json();
                return weatherData;
            }
        });
    }
    saveData(data) {
        let index;
        const currentData = this.getData();
        if (!currentData) {
            index = 0;
        }
        else if (currentData) {
            index = currentData.length;
        }
        currentData[index] = data;
        localStorage.setItem('weatherData', JSON.stringify(currentData));
        this.ui.startUi();
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }
        return [];
    }
}
exports.Api = Api;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const refreshData_1 = __webpack_require__(/*! ./refreshData */ "./src/refreshData.ts");
const cityInput_1 = __webpack_require__(/*! ./cityInput */ "./src/cityInput.ts");
class App {
    constructor() {
        this.refreshData = new refreshData_1.RefreshData;
        this.cityInput = new cityInput_1.CityInput;
    }
}
exports.App = App;


/***/ }),

/***/ "./src/cityInput.ts":
/*!**************************!*\
  !*** ./src/cityInput.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(/*! ./api */ "./src/api.ts");
class CityInput {
    constructor() {
        this.api = new api_1.Api;
        this.getCityValue();
    }
    getCityValue() {
        this.addCity = document.querySelector('.addCityBtn');
        this.cityNameInput = document.querySelector('.cityNameInput');
        this.addCity.addEventListener('click', () => this.api.getCityInfo(this.cityNameInput.value));
    }
}
exports.CityInput = CityInput;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const app = new app_1.App();


/***/ }),

/***/ "./src/loadLocalStorage.ts":
/*!*********************************!*\
  !*** ./src/loadLocalStorage.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class loadLocalStorage {
    start() {
        this.getLocalStorageLenght();
        for (let i = 0; i < this.localStorageLenght; i++) {
            if (this.localWetherDataAsArray[i] == null) {
                return;
            }
            else {
                this.selectDataPalces(i);
                this.loadData(i);
                this.pasteData();
            }
        }
    }
    getLocalStorageLenght() {
        const localWetherData = localStorage.getItem('weatherData');
        if (localWetherData == null) {
            return;
        }
        else {
            this.localWetherDataAsArray = JSON.parse(localWetherData);
            this.localStorageLenght = this.localWetherDataAsArray.length;
        }
    }
    selectDataPalces(i) {
        this.cityNameDiv = document.querySelector(`#cityNameDiv-${i}`);
        this.skyDiv = document.querySelector(`#sky-${i}`);
        this.tempertureDiv = document.querySelector(`#temperture-${i}`);
        this.pressureSpan = document.querySelector(`#pressureSpan-${i}`);
        this.humiditySpan = document.querySelector(`#humiditySpan-${i}`);
    }
    loadData(i) {
        this.cityNameValue = this.localWetherDataAsArray[i].name;
        this.skyValue = this.localWetherDataAsArray[i].weather[0].main;
        this.tempertureValue = Math.round(this.localWetherDataAsArray[i].main.temp) + 'ᵒC';
        this.pressureValue = this.localWetherDataAsArray[i].main.pressure;
        this.humidityValue = this.localWetherDataAsArray[i].main.humidity + "%";
    }
    pasteData() {
        this.cityNameDiv.innerHTML = this.cityNameValue;
        this.skyDiv.innerHTML = this.skyValue;
        this.tempertureDiv.innerHTML = this.tempertureValue;
        this.pressureSpan.innerHTML = `Ciśnienie<br />${this.pressureValue}hPa`;
        this.humiditySpan.innerHTML = `wilgotność<br />${this.pressureValue}`;
    }
}
exports.loadLocalStorage = loadLocalStorage;


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/refreshData.ts":
/*!****************************!*\
  !*** ./src/refreshData.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(/*! ./api */ "./src/api.ts");
class RefreshData {
    constructor() {
        this.api = new api_1.Api;
        this.opwApiKey = '1e4b2024641cb3682285770d3bebc4e8';
        this.getLocalStorageLenght();
        setInterval(() => this.getLocalStorageLenght(), 120000);
    }
    getLocalStorageLenght() {
        console.log("odświezyłem dane");
        this.cityNameArray = [];
        const localWetherData = localStorage.getItem('weatherData');
        if (localWetherData == null) {
            return;
        }
        else {
            this.localWetherDataAsArray = JSON.parse(localWetherData);
            this.localStorageLenght = this.localWetherDataAsArray.length;
            this.pushCityNameToArray();
            const removeLocalData = localStorage.removeItem('weatherData');
            removeLocalData;
        }
    }
    pushCityNameToArray() {
        for (let i = 0; i < this.localStorageLenght; i++)
            this.cityNameArray.push(this.localWetherDataAsArray[i].name);
        console.log(this.cityNameArray);
        this.getCityValue();
    }
    getCityValue() {
        let cityName;
        for (let i = 0; i < this.cityNameArray.length; i++) {
            cityName = this.cityNameArray[i];
            this.api.getCityInfo(cityName);
        }
    }
}
exports.RefreshData = RefreshData;


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loadLocalStorage_1 = __webpack_require__(/*! ./loadLocalStorage */ "./src/loadLocalStorage.ts");
class Ui {
    constructor() {
        this.loadStorage = new loadLocalStorage_1.loadLocalStorage;
        this.divsIndex = 0;
    }
    start() {
        this.addCity = document.querySelector('.addCityBtn');
        this.addCity.addEventListener("click", () => this.startUi());
    }
    startUi() {
        this.getLocalStorageLenght();
        this.removeOldDivs();
        for (let i = 0; i < this.localStorageLenght; i++) {
            if (this.localWetherDataAsArray[i] == null) {
                return;
            }
            else {
                this.createDivs();
                this.addClassesToDiv();
                this.addIdToDivs(i);
                this.generateDivs(i);
            }
        }
        ;
        this.loadLocalStorage();
    }
    getLocalStorageLenght() {
        const localWetherData = localStorage.getItem('weatherData');
        if (localWetherData == null) {
            return;
        }
        else {
            this.localWetherDataAsArray = JSON.parse(localWetherData);
            this.localStorageLenght = this.localWetherDataAsArray.length;
        }
    }
    removeOldDivs() {
        this.divContainer = document.querySelector('.weatherDivConteiner');
        this.divContainer.innerHTML = '';
    }
    createDivs() {
        this.weatherDiv = document.createElement('div');
        this.cityNameDiv = document.createElement('div');
        this.bottomDataDiv = document.createElement('div');
        this.leftPanelDiva = document.createElement('div');
        this.skyDiv = document.createElement('div');
        this.tempertureDiv = document.createElement('div');
        this.rightPanelDiv = document.createElement('div');
        this.pressureDiv = document.createElement('div');
        this.humidityDiv = document.createElement('div');
        this.presureSpan = document.createElement('span');
        this.humiditySpan = document.createElement('span');
    }
    addClassesToDiv() {
        this.weatherDiv.classList.add('weatherDiv');
        this.cityNameDiv.classList.add('cityNameDiv');
        this.bottomDataDiv.classList.add('bottomData');
        this.leftPanelDiva.classList.add('leftPanel');
        this.skyDiv.classList.add('sky');
        this.tempertureDiv.classList.add('temperture');
        this.rightPanelDiv.classList.add('rightPanel');
        this.pressureDiv.classList.add('pressure');
        this.humidityDiv.classList.add('humidity');
    }
    addIdToDivs(i) {
        this.weatherDiv.id = `weatherDiv-${i}`;
        this.cityNameDiv.id = `cityNameDiv-${i}`;
        this.bottomDataDiv.id = `bottomData-${i}`;
        this.leftPanelDiva.id = `leftPanel-${i}`;
        this.skyDiv.id = `sky-${i}`;
        this.tempertureDiv.id = `temperture-${i}`;
        this.rightPanelDiv.id = `rightPanel-${i}`;
        this.pressureDiv.id = `pressure-${i}`;
        this.humidityDiv.id = `humidity-${i}`;
        this.presureSpan.id = `pressureSpan-${i}`;
        this.humiditySpan.id = `humiditySpan-${i}`;
    }
    generateDivs(i) {
        document.querySelector('.weatherDivConteiner').appendChild(this.weatherDiv);
        document.querySelector(`#weatherDiv-${i}`).appendChild(this.cityNameDiv);
        document.querySelector(`#weatherDiv-${i}`).appendChild(this.bottomDataDiv);
        document.querySelector(`#bottomData-${i}`).appendChild(this.leftPanelDiva);
        document.querySelector(`#bottomData-${i}`).appendChild(this.rightPanelDiv);
        document.querySelector(`#leftPanel-${i}`).appendChild(this.skyDiv);
        document.querySelector(`#leftPanel-${i}`).appendChild(this.tempertureDiv);
        document.querySelector(`#rightPanel-${i}`).appendChild(this.pressureDiv);
        document.querySelector(`#rightPanel-${i}`).appendChild(this.humidityDiv);
        document.querySelector(`#pressure-${i}`).appendChild(this.presureSpan);
        document.querySelector(`#humidity-${i}`).appendChild(this.humiditySpan);
    }
    loadLocalStorage() {
        this.loadStorage.start();
    }
}
exports.Ui = Ui;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NpdHlJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWRMb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovLy8uL3NyYy9yZWZyZXNoRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QUFlLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZFLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGdCQUFnQjtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBL0hELGdCQStIQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzM2NjZmYgMCUsICNmZjk5Y2MgMTAwJSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgfVxcblxcbi5tYWluIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2l0eU5hbWVJbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XFxuICBjYXJldC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYWRkQ2l0eUJ0biB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcblxcbi5hZGRDaXR5QnRuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi53ZWF0aGVyRGl2Q29udGVpbmVyIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ud2VhdGhlckRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMTBweDsgfVxcblxcbi5jaXR5TmFtZURpdiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLmJvdHRvbURhdGEge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxNTBweDsgfVxcblxcbi5sZWZ0UGFuZWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXFxuLnJpZ2h0UGFuZWwge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgd2lkdGg6IDk5cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLnNreSB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlOyB9XFxuXFxuLnRlbXBlcnR1cmUge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5wcmVzc3VyZSB7XFxuICB3aWR0aDogOTlweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7IH1cXG5cXG4uaHVtaWRpdHkge1xcbiAgd2lkdGg6IDk5cHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7IFVpIH0gZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGNsYXNzIEFwaSB7XG4gICAgdWkgPSBuZXcgVWk7XG5cbiAgICBjaXR5TmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGFkZENpdHk6IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIG9wd0FwaUtleSA9ICcxZTRiMjAyNDY0MWNiMzY4MjI4NTc3MGQzYmViYzRlOCc7XG5cblxuICAgIGdldENpdHlWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZENpdHlCdG4nKTtcbiAgICAgICAgdGhpcy5jaXR5TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlOYW1lSW5wdXQnKTtcbiAgICAgICAgdGhpcy5hZGRDaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5nZXRDaXR5SW5mbyh0aGlzLmNpdHlOYW1lSW5wdXQudmFsdWUpKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDaXR5SW5mbyhjaXR5OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IHRoaXMuZ2V0V2VhdGhlcihjaXR5KTtcbiAgICAgICAgaWYod2VhdGhlciA9PXVuZGVmaW5lZCl7XG4gICAgICAgICAgICBhbGVydCgnTmllcHJhd2lkxYJvd2EgbmF6d2EnKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zYXZlRGF0YSh3ZWF0aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgYXN5bmMgZ2V0V2VhdGhlcihjaXR5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBvcGVuV2VhdGhlclVybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZsYW5nPXBsJnVuaXRzPW1ldHJpYyYmQVBQSUQ9JHt0aGlzLm9wd0FwaUtleX1gO1xuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChvcGVuV2VhdGhlclVybCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJSZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIGlmKHdlYXRoZXJSZXNwb25zZS5zdGF0dXMgPT0gNDA0KXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduaWUgcHJ6ZXN6xYJvJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncHJ6ZXN6xYJvJylcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlclJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNhdmVEYXRhKGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgaW5kZXg6IG51bWJlcjtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgaWYgKCFjdXJyZW50RGF0YSkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudERhdGEpIHtcbiAgICAgICAgICAgIGluZGV4ID0gY3VycmVudERhdGEubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudERhdGFbaW5kZXhdID0gZGF0YTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJEYXRhJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTtcbiAgICAgICAgdGhpcy51aS5zdGFydFVpKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBnZXREYXRhKCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckRhdGEnKTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gW107XG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBSZWZyZXNoRGF0YSB9IGZyb20gJy4vcmVmcmVzaERhdGEnO1xuaW1wb3J0IHsgQ2l0eUlucHV0IH0gZnJvbSAnLi9jaXR5SW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICByZWZyZXNoRGF0YSA9IG5ldyBSZWZyZXNoRGF0YTsgICBcbiAgICBjaXR5SW5wdXQgPSBuZXcgQ2l0eUlucHV0O1xufSIsImltcG9ydCB7IEFwaSB9IGZyb20gXCIuL2FwaVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENpdHlJbnB1dHtcclxuICAgIGFwaSA9IG5ldyBBcGk7XHJcblxyXG4gICAgY2l0eU5hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGFkZENpdHk6IEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5nZXRDaXR5VmFsdWUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0Q2l0eVZhbHVlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDaXR5QnRuJyk7XHJcbiAgICAgICAgdGhpcy5jaXR5TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlOYW1lSW5wdXQnKTtcclxuICAgICAgICB0aGlzLmFkZENpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFwaS5nZXRDaXR5SW5mbyh0aGlzLmNpdHlOYW1lSW5wdXQudmFsdWUpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbiIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIGxvYWRMb2NhbFN0b3JhZ2V7XHJcbiAgICBcclxuICAgIGNpdHlOYW1lVmFsdWU6IGFueTtcclxuICAgIHNreVZhbHVlOiBzdHJpbmc7XHJcbiAgICB0ZW1wZXJ0dXJlVmFsdWU6IHN0cmluZztcclxuICAgIHByZXNzdXJlVmFsdWU6IHN0cmluZztcclxuICAgIGh1bWlkaXR5VmFsdWU6ICBzdHJpbmc7XHJcblxyXG4gICAgY2l0eU5hbWVEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgc2t5RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRlbXBlcnR1cmVEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJlc3N1cmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgICBodW1pZGl0eVNwYW46IEhUTUxTcGFuRWxlbWVudDtcclxuICAgIFxyXG5cclxuICAgIGxvY2FsV2V0aGVyRGF0YUFzQXJyYXk6IEFycmF5PGFueT47XHJcbiAgICBsb2NhbFN0b3JhZ2VMZW5naHQ6IG51bWJlcjtcclxuICAgIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmdldExvY2FsU3RvcmFnZUxlbmdodCgpXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0OyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXlbaV0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGFQYWxjZXMoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXN0ZURhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRMb2NhbFN0b3JhZ2VMZW5naHQoKXtcclxuICAgICAgICBjb25zdCBsb2NhbFdldGhlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckRhdGEnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobG9jYWxXZXRoZXJEYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxXZXRoZXJEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VMZW5naHQgPSB0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3REYXRhUGFsY2VzKGk6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNpdHlOYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NpdHlOYW1lRGl2LSR7aX1gKVxyXG4gICAgICAgIHRoaXMuc2t5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NreS0ke2l9YClcclxuICAgICAgICB0aGlzLnRlbXBlcnR1cmVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGVtcGVydHVyZS0ke2l9YClcclxuICAgICAgICB0aGlzLnByZXNzdXJlU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcmVzc3VyZVNwYW4tJHtpfWApXHJcbiAgICAgICAgdGhpcy5odW1pZGl0eVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaHVtaWRpdHlTcGFuLSR7aX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKGk6IG51bWJlcil7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmNpdHlOYW1lVmFsdWUgPSB0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXlbaV0ubmFtZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNpdHlOYW1lVmFsdWUpXHJcbiAgICAgICAgdGhpcy5za3lWYWx1ZSA9IHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheVtpXS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5za3lWYWx1ZSlcclxuICAgICAgICB0aGlzLnRlbXBlcnR1cmVWYWx1ZSA9IE1hdGgucm91bmQodGhpcy5sb2NhbFdldGhlckRhdGFBc0FycmF5W2ldLm1haW4udGVtcCkrJ+G1kkMnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGVtcGVydHVyZVZhbHVlKVxyXG4gICAgICAgIHRoaXMucHJlc3N1cmVWYWx1ZSA9IHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheVtpXS5tYWluLnByZXNzdXJlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJlc3N1cmVWYWx1ZSlcclxuICAgICAgICB0aGlzLmh1bWlkaXR5VmFsdWUgPSB0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXlbaV0ubWFpbi5odW1pZGl0eSArIFwiJVwiO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaHVtaWRpdHlWYWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBwYXN0ZURhdGEoKXtcclxuICAgICAgICB0aGlzLmNpdHlOYW1lRGl2LmlubmVySFRNTCA9IHRoaXMuY2l0eU5hbWVWYWx1ZTtcclxuICAgICAgICB0aGlzLnNreURpdi5pbm5lckhUTUwgPXRoaXMuc2t5VmFsdWU7XHJcbiAgICAgICAgdGhpcy50ZW1wZXJ0dXJlRGl2LmlubmVySFRNTCA9IHRoaXMudGVtcGVydHVyZVZhbHVlO1xyXG4gICAgICAgIHRoaXMucHJlc3N1cmVTcGFuLmlubmVySFRNTCA9IGBDacWbbmllbmllPGJyIC8+JHt0aGlzLnByZXNzdXJlVmFsdWV9aFBhYFxyXG4gICAgICAgIHRoaXMuaHVtaWRpdHlTcGFuLmlubmVySFRNTCA9IGB3aWxnb3Rub8WbxIc8YnIgLz4ke3RoaXMucHJlc3N1cmVWYWx1ZX1gXHJcbiAgICB9XHJcblxyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgVWkgfSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgeyBBcGkgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWZyZXNoRGF0YXtcclxuICAgIGFwaSA9IG5ldyBBcGk7XHJcblxyXG4gICAgY2l0eU5hbWVBcnJheTogQXJyYXk8c3RyaW5nPjtcclxuICAgIGxvY2FsU3RvcmFnZUxlbmdodDogbnVtYmVyO1xyXG4gICAgbG9jYWxXZXRoZXJEYXRhQXNBcnJheTogQXJyYXk8YW55PjtcclxuXHJcbiAgICBjaXR5TmFtZTogc3RyaW5nO1xyXG4gICAgYWRkQ2l0eTogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBvcHdBcGlLZXkgPSAnMWU0YjIwMjQ2NDFjYjM2ODIyODU3NzBkM2JlYmM0ZTgnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhbFN0b3JhZ2VMZW5naHQoKVxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuZ2V0TG9jYWxTdG9yYWdlTGVuZ2h0KCksIDEyMDAwMCkgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0TG9jYWxTdG9yYWdlTGVuZ2h0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvZMWbd2llennFgmVtIGRhbmVcIilcclxuICAgICAgICB0aGlzLmNpdHlOYW1lQXJyYXkgPSBbXTtcclxuICAgICAgICBjb25zdCBsb2NhbFdldGhlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2VhdGhlckRhdGEnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobG9jYWxXZXRoZXJEYXRhID09IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxXZXRoZXJEYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2VMZW5naHQgPSB0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnB1c2hDaXR5TmFtZVRvQXJyYXkoKTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlTG9jYWxEYXRhID0gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3dlYXRoZXJEYXRhJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZUxvY2FsRGF0YTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1c2hDaXR5TmFtZVRvQXJyYXkoKXtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCB0aGlzLmxvY2FsU3RvcmFnZUxlbmdodDsgaSsrKVxyXG4gICAgICAgIHRoaXMuY2l0eU5hbWVBcnJheS5wdXNoKHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheVtpXS5uYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2l0eU5hbWVBcnJheSk7XHJcbiAgICAgICAgdGhpcy5nZXRDaXR5VmFsdWUoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldENpdHlWYWx1ZSgpIHtcclxuICAgICAgICBsZXQgY2l0eU5hbWU7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2l0eU5hbWVBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNpdHlOYW1lID0gdGhpcy5jaXR5TmFtZUFycmF5W2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFwaS5nZXRDaXR5SW5mbyhjaXR5TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2FkTG9jYWxTdG9yYWdlXCI7XG5cblxuZXhwb3J0IGNsYXNzIFVpIHtcbiAgICBsb2FkU3RvcmFnZSA9IG5ldyBsb2FkTG9jYWxTdG9yYWdlO1xuXG4gICAgd2VhdGhlckRpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgY2l0eU5hbWVEaXY6IEhUTUxEaXZFbGVtZW50O1xuICAgIGJvdHRvbURhdGFEaXY6IEhUTUxEaXZFbGVtZW50O1xuICAgIGxlZnRQYW5lbERpdmE6IEhUTUxEaXZFbGVtZW50O1xuICAgIHNreURpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgdGVtcGVydHVyZURpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcmlnaHRQYW5lbERpdjogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJlc3N1cmVEaXY6IEhUTUxEaXZFbGVtZW50O1xuICAgIGh1bWlkaXR5RGl2OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIHByZXN1cmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XG4gICAgaHVtaWRpdHlTcGFuOiBIVE1MU3BhbkVsZW1lbnQ7XG5cbiAgICBhZGRDaXR5OiBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGRpdkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBsb2NhbFN0b3JhZ2VMZW5naHQ6IG51bWJlcjtcbiAgICBkaXZzSW5kZXg6IG51bWJlciA9IDA7XG4gICAgbG9jYWxXZXRoZXJEYXRhQXNBcnJheTogQXJyYXk8YW55PlxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWRkQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRDaXR5QnRuJyk7XG4gICAgICAgIHRoaXMuYWRkQ2l0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zdGFydFVpKCkpO1xuICAgIH1cblxuICAgIHN0YXJ0VWkoKSB7XG4gICAgICAgIHRoaXMuZ2V0TG9jYWxTdG9yYWdlTGVuZ2h0KCk7XG4gICAgICAgIHRoaXMucmVtb3ZlT2xkRGl2cygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsV2V0aGVyRGF0YUFzQXJyYXlbaV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZURpdnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzZXNUb0RpdigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSWRUb0RpdnMoaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZURpdnMoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICB0aGlzLmxvYWRMb2NhbFN0b3JhZ2UoKTtcblxuICAgIH1cblxuICAgIGdldExvY2FsU3RvcmFnZUxlbmdodCgpIHtcbiAgICAgICAgY29uc3QgbG9jYWxXZXRoZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dlYXRoZXJEYXRhJyk7XG5cblxuICAgICAgICBpZiAobG9jYWxXZXRoZXJEYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxXZXRoZXJEYXRhQXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxXZXRoZXJEYXRhKTtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0ID0gdGhpcy5sb2NhbFdldGhlckRhdGFBc0FycmF5Lmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZU9sZERpdnMoKSB7XG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXJEaXZDb250ZWluZXInKTtcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cblxuICAgIGNyZWF0ZURpdnMoKSB7XG4gICAgICAgIHRoaXMud2VhdGhlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmNpdHlOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuYm90dG9tRGF0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmxlZnRQYW5lbERpdmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5za3lEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy50ZW1wZXJ0dXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMucmlnaHRQYW5lbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnByZXNzdXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuaHVtaWRpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5wcmVzdXJlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5odW1pZGl0eVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICB9XG5cblxuICAgIGFkZENsYXNzZXNUb0RpdigpIHtcbiAgICAgICAgdGhpcy53ZWF0aGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3dlYXRoZXJEaXYnKVxuICAgICAgICB0aGlzLmNpdHlOYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ2NpdHlOYW1lRGl2JylcbiAgICAgICAgdGhpcy5ib3R0b21EYXRhRGl2LmNsYXNzTGlzdC5hZGQoJ2JvdHRvbURhdGEnKVxuICAgICAgICB0aGlzLmxlZnRQYW5lbERpdmEuY2xhc3NMaXN0LmFkZCgnbGVmdFBhbmVsJylcbiAgICAgICAgdGhpcy5za3lEaXYuY2xhc3NMaXN0LmFkZCgnc2t5JylcbiAgICAgICAgdGhpcy50ZW1wZXJ0dXJlRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbXBlcnR1cmUnKVxuICAgICAgICB0aGlzLnJpZ2h0UGFuZWxEaXYuY2xhc3NMaXN0LmFkZCgncmlnaHRQYW5lbCcpXG4gICAgICAgIHRoaXMucHJlc3N1cmVEaXYuY2xhc3NMaXN0LmFkZCgncHJlc3N1cmUnKVxuICAgICAgICB0aGlzLmh1bWlkaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2h1bWlkaXR5JylcbiAgICB9XG5cbiAgICBhZGRJZFRvRGl2cyhpOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaSlcbiAgICAgICAgdGhpcy53ZWF0aGVyRGl2LmlkID0gYHdlYXRoZXJEaXYtJHtpfWA7XG4gICAgICAgIHRoaXMuY2l0eU5hbWVEaXYuaWQgPSBgY2l0eU5hbWVEaXYtJHtpfWA7XG4gICAgICAgIHRoaXMuYm90dG9tRGF0YURpdi5pZCA9IGBib3R0b21EYXRhLSR7aX1gO1xuICAgICAgICB0aGlzLmxlZnRQYW5lbERpdmEuaWQgPSBgbGVmdFBhbmVsLSR7aX1gO1xuICAgICAgICB0aGlzLnNreURpdi5pZCA9IGBza3ktJHtpfWA7XG4gICAgICAgIHRoaXMudGVtcGVydHVyZURpdi5pZCA9IGB0ZW1wZXJ0dXJlLSR7aX1gO1xuICAgICAgICB0aGlzLnJpZ2h0UGFuZWxEaXYuaWQgPSBgcmlnaHRQYW5lbC0ke2l9YDtcbiAgICAgICAgdGhpcy5wcmVzc3VyZURpdi5pZCA9IGBwcmVzc3VyZS0ke2l9YDtcbiAgICAgICAgdGhpcy5odW1pZGl0eURpdi5pZCA9IGBodW1pZGl0eS0ke2l9YDtcbiAgICAgICAgdGhpcy5wcmVzdXJlU3Bhbi5pZCA9IGBwcmVzc3VyZVNwYW4tJHtpfWA7XG4gICAgICAgIHRoaXMuaHVtaWRpdHlTcGFuLmlkID0gYGh1bWlkaXR5U3Bhbi0ke2l9YDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpdnMoaTogbnVtYmVyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyRGl2Q29udGVpbmVyJykuYXBwZW5kQ2hpbGQodGhpcy53ZWF0aGVyRGl2KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3dlYXRoZXJEaXYtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMuY2l0eU5hbWVEaXYpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjd2VhdGhlckRpdi0ke2l9YCkuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21EYXRhRGl2KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JvdHRvbURhdGEtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMubGVmdFBhbmVsRGl2YSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib3R0b21EYXRhLSR7aX1gKS5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0UGFuZWxEaXYpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbGVmdFBhbmVsLSR7aX1gKS5hcHBlbmRDaGlsZCh0aGlzLnNreURpdik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNsZWZ0UGFuZWwtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMudGVtcGVydHVyZURpdik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyaWdodFBhbmVsLSR7aX1gKS5hcHBlbmRDaGlsZCh0aGlzLnByZXNzdXJlRGl2KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3JpZ2h0UGFuZWwtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMuaHVtaWRpdHlEaXYpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJlc3N1cmUtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMucHJlc3VyZVNwYW4pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjaHVtaWRpdHktJHtpfWApLmFwcGVuZENoaWxkKHRoaXMuaHVtaWRpdHlTcGFuKTtcbiAgICB9XG5cbiAgICBsb2FkTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICB0aGlzLmxvYWRTdG9yYWdlLnN0YXJ0KCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=