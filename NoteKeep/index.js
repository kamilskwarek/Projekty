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
exports.push([module.i, "body {\n  background: #404041; }\n\n.main {\n  width: 100%;\n  height: 100%; }\n\n.left-panel {\n  color: white;\n  float: left;\n  width: 20%;\n  height: 280px;\n  background-color: #5D5C61; }\n\n.right-panel {\n  width: 80%;\n  height: 98vh;\n  float: left;\n  background-color: #B1A296; }\n\n.new-note {\n  width: 100%; }\n\n.row {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px; }\n\n.noteRow {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.title-input {\n  border: transparent;\n  background: #938e94;\n  width: 90%;\n  resize: none;\n  box-sizing: border-box; }\n\n.notetext-input {\n  border: transparent;\n  background: #938e94;\n  width: 90%;\n  resize: none;\n  box-sizing: border-box;\n  text-align: left; }\n\n.color-input {\n  border: transparent;\n  background: #938e94;\n  width: auto;\n  resize: none;\n  box-sizing: border-box; }\n\noption {\n  color: white; }\n\n.addButtonDiv {\n  float: right;\n  margin-right: 10px; }\n\n.add-note {\n  background-color: #938e94;\n  border-radius: 5px;\n  border: 1px solid white;\n  font-size: 15px; }\n  .add-note:active {\n    filter: brightness(0.5); }\n\n.note {\n  width: 250px;\n  height: 250px;\n  margin: 10px;\n  float: left;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n  .note:hover {\n    transition: 0.5s;\n    filter: brightness(1.4); }\n\n.title {\n  font-size: 140%;\n  word-wrap: break-word;\n  float: left; }\n\n.note-text {\n  height: 170px;\n  word-wrap: break-word; }\n\n.editNoteBtn {\n  float: right;\n  text-align: right;\n  border-radius: 10px;\n  border: transparent;\n  color: white;\n  background: transparent;\n  outline: 0; }\n  .editNoteBtn:active {\n    filter: brightness(0.5); }\n\n.bottomRow {\n  font-size: 80%;\n  height: 20px; }\n\n.dateDiv {\n  float: left; }\n\n.deleteBtn {\n  text-align: right;\n  float: right;\n  border-radius: 10px;\n  border: transparent;\n  color: white;\n  background: transparent;\n  outline: 0; }\n  .deleteBtn:active {\n    filter: brightness(0.5); }\n\n.pinnedNotes {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n\n.commonNotes {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%; }\n\n.noteType {\n  margin-top: 10px;\n  margin-left: 10px; }\n\n/* custom checkbox */\ninput[type=checkbox].pinCheckbox {\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0; }\n\ninput[type=checkbox].pinCheckbox + label.css-label {\n  padding-left: 20px;\n  height: 15px;\n  display: inline-block;\n  line-height: 15px;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  font-size: 15px;\n  vertical-align: middle;\n  cursor: pointer; }\n\ninput[type=checkbox].pinCheckbox:checked + label.css-label {\n  background-position: 0 -15px; }\n\n.dark-plus {\n  background-image: url(http://csscheckbox.com/checkboxes/dark-plus.png); }\n", ""]);
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

/***/ "./src/createNotes.ts":
/*!****************************!*\
  !*** ./src/createNotes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const loadLocalStorage_1 = __webpack_require__(/*! ./loadLocalStorage */ "./src/loadLocalStorage.ts");
const deleteNote_1 = __webpack_require__(/*! ./deleteNote */ "./src/deleteNote.ts");
const editNote_1 = __webpack_require__(/*! ./editNote */ "./src/editNote.ts");
class CreateNote {
    constructor() {
        this.deleteNote = new deleteNote_1.DeleteNote;
        this.editNote = new editNote_1.EditNote;
        this.loadStorage = new loadLocalStorage_1.loadLocalStorage;
    }
    start() {
        this.getLocalStorageLenght();
        this.removeNotes();
        for (let i = 0; i < this.localStorageLenght; i++) {
            if (this.localNoteDataAsArray[i] == null) {
                return;
            }
            else {
                this.createElements();
                this.addClassesToDiv();
                this.addIdToDivs(i);
                this.getNoteColor(i);
                this.getPinnedValue(i);
                this.setPinnedValue();
                this.generateDivs(i);
            }
        }
        this.loadLocalStorage();
        this.deleteBtnListeners();
        this.editBtnListeners();
    }
    getLocalStorageLenght() {
        const localNoteData = localStorage.getItem('notes');
        if (localNoteData == null) {
            return;
        }
        else {
            this.localNoteDataAsArray = JSON.parse(localNoteData);
            this.localStorageLenght = this.localNoteDataAsArray.length;
        }
    }
    getNoteColor(i) {
        this.noteColor = this.localNoteDataAsArray[i].color;
        if (this.noteColor == "Kolor") {
            this.noteDiv.style.backgroundColor = '#404041';
        }
        else {
            this.setNoteColor();
        }
    }
    setNoteColor() {
        this.noteDiv.style.backgroundColor = `${this.noteColor}`;
    }
    getPinnedValue(i) {
        this.pinnedValue = this.localNoteDataAsArray[i].pinned;
    }
    setPinnedValue() {
        if (this.pinnedValue == true) {
            this.noteContainer = document.querySelector('.pinnedNotes');
        }
        else {
            this.noteContainer = document.querySelector('.commonNotes');
        }
    }
    removeNotes() {
        this.pinnedNoteContainer = document.querySelector('.pinnedNotes');
        this.pinnedNoteContainer.innerHTML = '';
        this.commonNoteContainer = document.querySelector('.commonNotes');
        this.commonNoteContainer.innerHTML = '';
    }
    createElements() {
        this.noteDiv = document.createElement('div');
        this.firstRowDiv = document.createElement('div');
        this.titleDiv = document.createElement('div');
        this.editNoteBtn = document.createElement('button');
        this.noteTextDiv = document.createElement('div');
        this.bottomRowDiv = document.createElement('div');
        this.dateDiv = document.createElement('div');
        this.delateBtn = document.createElement('button');
    }
    addClassesToDiv() {
        this.noteDiv.classList.add('note');
        this.firstRowDiv.classList.add('noteRow', 'firstRow');
        this.titleDiv.classList.add('title');
        this.editNoteBtn.classList.add('editNoteBtn');
        this.noteTextDiv.classList.add('noteRow', 'note-text');
        this.bottomRowDiv.classList.add('noteRow', 'bottomRow');
        this.dateDiv.classList.add('dateDiv');
        this.delateBtn.classList.add('deleteBtn');
    }
    addIdToDivs(i) {
        this.noteDiv.id = `noteDiv-${i}`;
        this.firstRowDiv.id = `firstRowDiv-${i}`;
        this.titleDiv.id = `titleDiv-${i}`;
        this.editNoteBtn.id = `${i}`;
        this.noteTextDiv.id = `noteTextDiv-${i}`;
        this.bottomRowDiv.id = `bottomRowDiv-${i}`;
        this.dateDiv.id = `dateDiv-${i}`;
        this.delateBtn.id = `${i}`;
    }
    generateDivs(i) {
        this.noteContainer.appendChild(this.noteDiv);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.firstRowDiv);
        document.querySelector(`#firstRowDiv-${i}`).appendChild(this.titleDiv);
        document.querySelector(`#firstRowDiv-${i}`).appendChild(this.editNoteBtn);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.noteTextDiv);
        document.querySelector(`#noteDiv-${i}`).appendChild(this.bottomRowDiv);
        document.querySelector(`#bottomRowDiv-${i}`).appendChild(this.dateDiv);
        document.querySelector(`#bottomRowDiv-${i}`).appendChild(this.delateBtn);
    }
    loadLocalStorage() {
        this.loadStorage.start();
    }
    deleteBtnListeners() {
        this.deleteNote.start();
    }
    editBtnListeners() {
        this.editNote.start();
    }
}
exports.CreateNote = CreateNote;


/***/ }),

/***/ "./src/deleteNote.ts":
/*!***************************!*\
  !*** ./src/deleteNote.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const createNotes_1 = __webpack_require__(/*! ./createNotes */ "./src/createNotes.ts");
class DeleteNote {
    start() {
        this.getButtons();
        this.setListener();
        this.getLocalData();
    }
    getButtons() {
        this.deleteBtns = document.querySelectorAll('.deleteBtn');
    }
    setListener() {
        this.deleteBtns.forEach((e) => {
            e.addEventListener("click", (e) => this.getBtnId(e));
        });
    }
    getBtnId(e) {
        const a = e.target;
        this.buttonId = parseInt(a.id);
        this.removeFromLocalStorage(this.buttonId);
    }
    getLocalData() {
        this.localData = JSON.parse(localStorage.getItem('notes'));
    }
    removeFromLocalStorage(i) {
        this.localData.splice(i, 1);
        this.saveModifiedData();
    }
    saveModifiedData() {
        localStorage.setItem('notes', JSON.stringify(this.localData));
        this.refreshNotes();
    }
    refreshNotes() {
        const create = new createNotes_1.CreateNote;
        create.start();
    }
}
exports.DeleteNote = DeleteNote;


/***/ }),

/***/ "./src/editNote.ts":
/*!*************************!*\
  !*** ./src/editNote.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = __webpack_require__(/*! ./note */ "./src/note.ts");
const createNotes_1 = __webpack_require__(/*! ./createNotes */ "./src/createNotes.ts");
class EditNote {
    start() {
        this.getButtons();
        this.setListener();
        this.getLocalData();
    }
    getButtons() {
        this.editBtns = document.querySelectorAll('.editNoteBtn');
    }
    setListener() {
        this.editBtns.forEach((e) => {
            e.addEventListener("click", (e) => this.getBtnId(e));
        });
    }
    getBtnId(e) {
        const a = e.target;
        this.buttonId = parseInt(a.id);
        this.getElements(this.buttonId);
        this.transferValues(this.buttonId);
        this.changeButton();
    }
    getElements(i) {
        this.titleDiv = document.querySelector(`#titleDiv-${i}`);
        this.noteTextDiv = document.querySelector(`#noteTextDiv-${i}`);
        this.titleInput = document.querySelector('.title-input');
        this.textInput = document.querySelector('.notetext-input');
        this.colorInput = document.querySelector('.color-input');
        this.pinnedInput = document.querySelector('.pinCheckbox');
    }
    transferValues(i) {
        this.titleInput.value = this.localData[i].title;
        this.textInput.value = this.localData[i].noteText;
        this.colorInput.value = this.localData[i].color;
        this.pinnedInput.checked = this.localData[i].pinned;
    }
    changeButton() {
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.replaceWith(this.addNoteBtn.cloneNode(true));
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.textContent = "Modyfikuj";
        this.modifyBtnListener();
    }
    modifyBtnListener() {
        this.addNoteBtn.addEventListener("click", () => this.modifyValues());
    }
    modifyValues() {
        this.getElementsValue();
        this.addValueToNote();
        this.editLocalStorage(this.buttonId);
        this.saveModifiedData();
        this.refreshNotes();
    }
    getLocalData() {
        this.localData = JSON.parse(localStorage.getItem('notes'));
    }
    getElementsValue() {
        this.titleInputValue = this.titleInput.value;
        this.noteTextInputValue = this.textInput.value;
        this.colorInputValue = this.colorInput.value;
        this.pinnedInputValue = this.pinnedInput.checked;
        this.date = Date.now();
    }
    addValueToNote() {
        this.note = new note_1.Note(this.titleInputValue, this.noteTextInputValue, this.colorInputValue, this.pinnedInputValue, this.date);
    }
    editLocalStorage(i) {
        this.localData.splice(i, 1, this.note);
        this.saveModifiedData();
    }
    saveModifiedData() {
        localStorage.setItem('notes', JSON.stringify(this.localData));
        this.refreshNotes();
    }
    refreshNotes() {
        const create = new createNotes_1.CreateNote;
        create.start();
    }
}
exports.EditNote = EditNote;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const saveToLocalStorage_1 = __webpack_require__(/*! ./saveToLocalStorage */ "./src/saveToLocalStorage.ts");
const createNotes_1 = __webpack_require__(/*! ./createNotes */ "./src/createNotes.ts");
const createNote = new createNotes_1.CreateNote;
createNote.start();
const saveToLocalStorage = new saveToLocalStorage_1.SaveToLocalStorage;
saveToLocalStorage.btnListener();


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
            if (this.localNoteDataAsArray[i] == null) {
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
        const localNoteData = localStorage.getItem('notes');
        if (localNoteData == null) {
            return;
        }
        else {
            this.localNoteDataAsArray = JSON.parse(localNoteData);
            this.localStorageLenght = this.localNoteDataAsArray.length;
        }
    }
    selectDataPalces(i) {
        this.titleDiv = document.querySelector(`#titleDiv-${i}`);
        this.noteTextDiv = document.querySelector(`#noteTextDiv-${i}`);
        this.dateDiv = document.querySelector(`#dateDiv-${i}`);
        this.editBtn = document.querySelector(`div.noteRow.firstRow [id='${i}']`);
        this.deleteBtn = document.querySelector(`div.noteRow.bottomRow [id='${i}']`);
    }
    loadData(i) {
        this.titleValue = this.localNoteDataAsArray[i].title;
        this.noteTextValue = this.localNoteDataAsArray[i].noteText;
        this.dateValue = this.localNoteDataAsArray[i].date;
    }
    pasteData() {
        this.titleDiv.innerHTML = this.titleValue;
        this.noteTextDiv.innerHTML = this.noteTextValue;
        this.dateDiv.innerHTML = new Date(this.dateValue).toLocaleString();
        this.editBtn.innerHTML = 'Edytuj';
        this.deleteBtn.innerHTML = 'Usuń';
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

/***/ "./src/note.ts":
/*!*********************!*\
  !*** ./src/note.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Note {
    constructor(title, noteText, color, pinned, date) {
        this.title = title;
        this.noteText = noteText;
        this.color = color;
        this.pinned = pinned;
        this.date = date;
    }
}
exports.Note = Note;


/***/ }),

/***/ "./src/saveToLocalStorage.ts":
/*!***********************************!*\
  !*** ./src/saveToLocalStorage.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const note_1 = __webpack_require__(/*! ./note */ "./src/note.ts");
class SaveToLocalStorage {
    btnListener() {
        this.addNoteBtn = document.querySelector('.add-note');
        this.addNoteBtn.addEventListener("click", () => this.start());
    }
    start() {
        this.getElements();
        this.getElementsValue();
        this.addValueToNote();
    }
    getElements() {
        this.titleInput = document.querySelector('.title-input');
        this.noteTextInput = document.querySelector('.notetext-input');
        this.colorInput = document.querySelector('.color-input');
        this.pinnedInput = document.querySelector('.pinCheckbox');
    }
    getElementsValue() {
        this.titleInputValue = this.titleInput.value;
        this.noteTextInputValue = this.noteTextInput.value;
        this.colorInputValue = this.colorInput.value;
        this.pinnedInputValue = this.pinnedInput.checked;
        this.date = Date.now();
    }
    addValueToNote() {
        this.note = new note_1.Note(this.titleInputValue, this.noteTextInputValue, this.colorInputValue, this.pinnedInputValue, this.date);
        console.log(this.note);
        this.saveData(this.note);
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
        localStorage.setItem('notes', JSON.stringify(currentData));
    }
    getData() {
        const data = localStorage.getItem('notes');
        if (data) {
            return JSON.parse(data);
        }
        return [];
    }
}
exports.SaveToLocalStorage = SaveToLocalStorage;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3JlYXRlTm90ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbGV0ZU5vdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXROb3RlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbG9hZExvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzPzRlNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25vdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NhdmVUb0xvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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QUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFFZCxDQUFDO0NBR0o7QUFqRkQsZ0RBaUZDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjNDA0MDQxOyB9XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4ubGVmdC1wYW5lbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDI4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVENUM2MTsgfVxcblxcbi5yaWdodC1wYW5lbCB7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiA5OHZoO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjFBMjk2OyB9XFxuXFxuLm5ldy1ub3RlIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnJvdyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuLm5vdGVSb3cge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi50aXRsZS1pbnB1dCB7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogIzkzOGU5NDtcXG4gIHdpZHRoOiA5MCU7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuLm5vdGV0ZXh0LWlucHV0IHtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAjOTM4ZTk0O1xcbiAgd2lkdGg6IDkwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmNvbG9yLWlucHV0IHtcXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kOiAjOTM4ZTk0O1xcbiAgd2lkdGg6IGF1dG87XFxuICByZXNpemU6IG5vbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxub3B0aW9uIHtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5hZGRCdXR0b25EaXYge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XFxuXFxuLmFkZC1ub3RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MzhlOTQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTVweDsgfVxcbiAgLmFkZC1ub3RlOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpOyB9XFxuXFxuLm5vdGUge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgaGVpZ2h0OiAyNTBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5ub3RlOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNCk7IH1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAxNDAlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ubm90ZS10ZXh0IHtcXG4gIGhlaWdodDogMTcwcHg7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG5cXG4uZWRpdE5vdGVCdG4ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogMDsgfVxcbiAgLmVkaXROb3RlQnRuOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpOyB9XFxuXFxuLmJvdHRvbVJvdyB7XFxuICBmb250LXNpemU6IDgwJTtcXG4gIGhlaWdodDogMjBweDsgfVxcblxcbi5kYXRlRGl2IHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmRlbGV0ZUJ0biB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiAwOyB9XFxuICAuZGVsZXRlQnRuOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpOyB9XFxuXFxuLnBpbm5lZE5vdGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb21tb25Ob3RlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubm90ZVR5cGUge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4OyB9XFxuXFxuLyogY3VzdG9tIGNoZWNrYm94ICovXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ucGluQ2hlY2tib3gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwOyB9XFxuXFxuaW5wdXRbdHlwZT1jaGVja2JveF0ucGluQ2hlY2tib3ggKyBsYWJlbC5jc3MtbGFiZWwge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdLnBpbkNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbC5jc3MtbGFiZWwge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTVweDsgfVxcblxcbi5kYXJrLXBsdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9jc3NjaGVja2JveC5jb20vY2hlY2tib3hlcy9kYXJrLXBsdXMucG5nKTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9hZExvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBEZWxldGVOb3RlIH0gZnJvbSAnLi9kZWxldGVOb3RlJztcclxuaW1wb3J0IHsgRWRpdE5vdGUgfSBmcm9tIFwiLi9lZGl0Tm90ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZU5vdGUge1xyXG5cclxuICAgIGRlbGV0ZU5vdGUgPSBuZXcgRGVsZXRlTm90ZTtcclxuICAgIGVkaXROb3RlID0gbmV3IEVkaXROb3RlO1xyXG4gICAgbG9hZFN0b3JhZ2UgPSBuZXcgbG9hZExvY2FsU3RvcmFnZTtcclxuXHJcbiAgICBub3RlRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGZpcnN0Um93RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHRpdGxlRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGVkaXROb3RlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIG5vdGVUZXh0RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGJvdHRvbVJvd0RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBkYXRlRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGRlbGF0ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBub3RlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBub3RlQ29sb3I6IHN0cmluZztcclxuICAgIHBpbm5lZFZhbHVlOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2VMZW5naHQ6IG51bWJlcjtcclxuICAgIGxvY2FsTm90ZURhdGFBc0FycmF5OiBBcnJheTxhbnk+XHJcbiAgICBwaW5uZWROb3RlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbW1vbk5vdGVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdldExvY2FsU3RvcmFnZUxlbmdodCgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlTm90ZXMoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxOb3RlRGF0YUFzQXJyYXlbaV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzZXNUb0RpdigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJZFRvRGl2cyhpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90ZUNvbG9yKGkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQaW5uZWRWYWx1ZShpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGlubmVkVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVEaXZzKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZExvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQnRuTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgdGhpcy5lZGl0QnRuTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRMb2NhbFN0b3JhZ2VMZW5naHQoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxOb3RlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsTm90ZURhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbE5vdGVEYXRhQXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxOb3RlRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0ID0gdGhpcy5sb2NhbE5vdGVEYXRhQXNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE5vdGVDb2xvcihpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm5vdGVDb2xvciA9IHRoaXMubG9jYWxOb3RlRGF0YUFzQXJyYXlbaV0uY29sb3I7XHJcbiAgICAgICAgaWYgKHRoaXMubm90ZUNvbG9yID09IFwiS29sb3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0MDQwNDEnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXROb3RlQ29sb3IoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldE5vdGVDb2xvcigpIHtcclxuICAgICAgICB0aGlzLm5vdGVEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7dGhpcy5ub3RlQ29sb3J9YDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGlubmVkVmFsdWUoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5waW5uZWRWYWx1ZSA9IHRoaXMubG9jYWxOb3RlRGF0YUFzQXJyYXlbaV0ucGlubmVkO1xyXG4gICAgfVxyXG4gICAgc2V0UGlubmVkVmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGlubmVkVmFsdWUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlubmVkTm90ZXMnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tb25Ob3RlcycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW1vdmVOb3RlcygpIHtcclxuICAgICAgICB0aGlzLnBpbm5lZE5vdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlubmVkTm90ZXMnKTtcclxuICAgICAgICB0aGlzLnBpbm5lZE5vdGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgdGhpcy5jb21tb25Ob3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1vbk5vdGVzJyk7XHJcbiAgICAgICAgdGhpcy5jb21tb25Ob3RlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMubm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5lZGl0Tm90ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHRoaXMubm90ZVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJvdHRvbVJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZGVsYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2xhc3Nlc1RvRGl2KCkge1xyXG5cclxuICAgICAgICB0aGlzLm5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZScpXHJcbiAgICAgICAgdGhpcy5maXJzdFJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdub3RlUm93JywgJ2ZpcnN0Um93JylcclxuICAgICAgICB0aGlzLnRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJylcclxuICAgICAgICB0aGlzLmVkaXROb3RlQnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXROb3RlQnRuJylcclxuICAgICAgICB0aGlzLm5vdGVUZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ25vdGVSb3cnLCAnbm90ZS10ZXh0JylcclxuICAgICAgICB0aGlzLmJvdHRvbVJvd0Rpdi5jbGFzc0xpc3QuYWRkKCdub3RlUm93JywgJ2JvdHRvbVJvdycpXHJcbiAgICAgICAgdGhpcy5kYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGVEaXYnKVxyXG4gICAgICAgIHRoaXMuZGVsYXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZUJ0bicpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkSWRUb0RpdnMoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlRGl2LmlkID0gYG5vdGVEaXYtJHtpfWA7XHJcbiAgICAgICAgdGhpcy5maXJzdFJvd0Rpdi5pZCA9IGBmaXJzdFJvd0Rpdi0ke2l9YDtcclxuICAgICAgICB0aGlzLnRpdGxlRGl2LmlkID0gYHRpdGxlRGl2LSR7aX1gO1xyXG4gICAgICAgIHRoaXMuZWRpdE5vdGVCdG4uaWQgPSBgJHtpfWA7XHJcbiAgICAgICAgdGhpcy5ub3RlVGV4dERpdi5pZCA9IGBub3RlVGV4dERpdi0ke2l9YDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJvd0Rpdi5pZCA9IGBib3R0b21Sb3dEaXYtJHtpfWA7XHJcbiAgICAgICAgdGhpcy5kYXRlRGl2LmlkID0gYGRhdGVEaXYtJHtpfWA7XHJcbiAgICAgICAgdGhpcy5kZWxhdGVCdG4uaWQgPSBgJHtpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEaXZzKGk6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLm5vdGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ub3RlRGl2KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbm90ZURpdi0ke2l9YCkuYXBwZW5kQ2hpbGQodGhpcy5maXJzdFJvd0Rpdik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZpcnN0Um93RGl2LSR7aX1gKS5hcHBlbmRDaGlsZCh0aGlzLnRpdGxlRGl2KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmlyc3RSb3dEaXYtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMuZWRpdE5vdGVCdG4pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlRGl2LSR7aX1gKS5hcHBlbmRDaGlsZCh0aGlzLm5vdGVUZXh0RGl2KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbm90ZURpdi0ke2l9YCkuYXBwZW5kQ2hpbGQodGhpcy5ib3R0b21Sb3dEaXYpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib3R0b21Sb3dEaXYtJHtpfWApLmFwcGVuZENoaWxkKHRoaXMuZGF0ZURpdik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JvdHRvbVJvd0Rpdi0ke2l9YCkuYXBwZW5kQ2hpbGQodGhpcy5kZWxhdGVCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkU3RvcmFnZS5zdGFydCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQnRuTGlzdGVuZXJzKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlTm90ZS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVkaXRCdG5MaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0Tm90ZS5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgTm90ZSB9IGZyb20gXCIuL25vdGVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlTm90ZSB9IGZyb20gXCIuL2NyZWF0ZU5vdGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlTm90ZSB7XHJcbiAgICBub3RlOiBOb3RlO1xyXG5cclxuICAgIGRlbGV0ZUJ0bnM6IE5vZGVMaXN0O1xyXG4gICAgYnV0dG9uOiBFdmVudFRhcmdldDtcclxuICAgIGJ1dHRvbklkOiBudW1iZXI7XHJcblxyXG4gICAgbG9jYWxEYXRhOiBBcnJheTxOb3RlPlxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMuc2V0TGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLmdldExvY2FsRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgIHRoaXMuZGVsZXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGVCdG4nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0TGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kZWxldGVCdG5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2V0QnRuSWQoZSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRCdG5JZChlOiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLmJ1dHRvbklkID0gcGFyc2VJbnQoYS5pZCk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9jYWxTdG9yYWdlKHRoaXMuYnV0dG9uSWQpO1xyXG4gICAgfVxyXG4gICAgZ2V0TG9jYWxEYXRhKCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbm90ZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZShpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgdGhpcy5zYXZlTW9kaWZpZWREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZU1vZGlmaWVkRGF0YSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbm90ZXMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvY2FsRGF0YSkpXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoTm90ZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hOb3RlcygpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGUgPSBuZXcgQ3JlYXRlTm90ZTtcclxuICAgICAgICBjcmVhdGUuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBOb3RlIH0gZnJvbSBcIi4vbm90ZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVOb3RlIH0gZnJvbSBcIi4vY3JlYXRlTm90ZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdE5vdGUge1xyXG4gICAgbm90ZTogTm90ZTtcclxuXHJcbiAgICB0aXRsZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29sb3JJbnB1dDogSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbiAgICBwaW5uZWRJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGRhdGU6IG51bWJlcjtcclxuXHJcblxyXG4gICAgdGl0bGVJbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBub3RlVGV4dElucHV0VmFsdWU6IHN0cmluZztcclxuICAgIGNvbG9ySW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gICAgcGlubmVkSW5wdXRWYWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBsb2NhbERhdGE6IEFycmF5PE5vdGU+XHJcblxyXG4gICAgZWRpdEJ0bnM6IE5vZGVMaXN0O1xyXG4gICAgYnV0dG9uSWQ6IG51bWJlcjtcclxuXHJcbiAgICB0aXRsZURpdjogSFRNTERMaXN0RWxlbWVudDtcclxuICAgIG5vdGVUZXh0RGl2OiBIVE1MRExpc3RFbGVtZW50O1xyXG5cclxuXHJcbiAgICBhZGROb3RlQnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5zZXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYWxEYXRhKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0Tm90ZUJ0bicpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmVkaXRCdG5zLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHRoaXMuZ2V0QnRuSWQoZSkpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRCdG5JZChlOiBFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGEgPSBlLnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICB0aGlzLmJ1dHRvbklkID0gcGFyc2VJbnQoYS5pZCk7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50cyh0aGlzLmJ1dHRvbklkKTtcclxuICAgICAgICB0aGlzLnRyYW5zZmVyVmFsdWVzKHRoaXMuYnV0dG9uSWQpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlQnV0dG9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudHMoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0aXRsZURpdi0ke2l9YCk7XHJcbiAgICAgICAgdGhpcy5ub3RlVGV4dERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNub3RlVGV4dERpdi0ke2l9YCk7XHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZXRleHQtaW5wdXQnKTtcclxuICAgICAgICB0aGlzLmNvbG9ySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sb3ItaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnBpbm5lZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpbkNoZWNrYm94Jyk7XHJcbiAgICB9XHJcbiAgICB0cmFuc2ZlclZhbHVlcyhpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpdGxlSW5wdXQudmFsdWUgPSB0aGlzLmxvY2FsRGF0YVtpXS50aXRsZTtcclxuICAgICAgICB0aGlzLnRleHRJbnB1dC52YWx1ZSA9IHRoaXMubG9jYWxEYXRhW2ldLm5vdGVUZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC52YWx1ZSA9IHRoaXMubG9jYWxEYXRhW2ldLmNvbG9yO1xyXG4gICAgICAgIHRoaXMucGlubmVkSW5wdXQuY2hlY2tlZCA9IHRoaXMubG9jYWxEYXRhW2ldLnBpbm5lZDtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VCdXR0b24oKSB7XHJcbiAgICAgICAgdGhpcy5hZGROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlJyk7XHJcbiAgICAgICAgdGhpcy5hZGROb3RlQnRuLnJlcGxhY2VXaXRoKHRoaXMuYWRkTm90ZUJ0bi5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgICAgICAgdGhpcy5hZGROb3RlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ub3RlJyk7XHJcbiAgICAgICAgdGhpcy5hZGROb3RlQnRuLnRleHRDb250ZW50ID0gXCJNb2R5ZmlrdWpcIjtcclxuICAgICAgICB0aGlzLm1vZGlmeUJ0bkxpc3RlbmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kaWZ5QnRuTGlzdGVuZXIoKSB7XHJcbiAgICAgICAgdGhpcy5hZGROb3RlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLm1vZGlmeVZhbHVlcygpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb2RpZnlWYWx1ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50c1ZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRWYWx1ZVRvTm90ZSgpO1xyXG4gICAgICAgIHRoaXMuZWRpdExvY2FsU3RvcmFnZSh0aGlzLmJ1dHRvbklkKTtcclxuICAgICAgICB0aGlzLnNhdmVNb2RpZmllZERhdGEoKTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hOb3RlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2FsRGF0YSgpIHtcclxuICAgICAgICB0aGlzLmxvY2FsRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnRzVmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0VmFsdWUgPSB0aGlzLnRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RlVGV4dElucHV0VmFsdWUgPSB0aGlzLnRleHRJbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLmNvbG9ySW5wdXRWYWx1ZSA9IHRoaXMuY29sb3JJbnB1dC52YWx1ZTtcclxuICAgICAgICB0aGlzLnBpbm5lZElucHV0VmFsdWUgPSB0aGlzLnBpbm5lZElucHV0LmNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWYWx1ZVRvTm90ZSgpIHtcclxuICAgICAgICB0aGlzLm5vdGUgPSBuZXcgTm90ZSh0aGlzLnRpdGxlSW5wdXRWYWx1ZSwgdGhpcy5ub3RlVGV4dElucHV0VmFsdWUsIHRoaXMuY29sb3JJbnB1dFZhbHVlLCB0aGlzLnBpbm5lZElucHV0VmFsdWUsIHRoaXMuZGF0ZSlcclxuICAgIH1cclxuXHJcbiAgICBlZGl0TG9jYWxTdG9yYWdlKGk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubG9jYWxEYXRhLnNwbGljZShpLCAxLCB0aGlzLm5vdGUpO1xyXG4gICAgICAgIHRoaXMuc2F2ZU1vZGlmaWVkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVNb2RpZmllZERhdGEoKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5sb2NhbERhdGEpKVxyXG4gICAgICAgIHRoaXMucmVmcmVzaE5vdGVzKClcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoTm90ZXMoKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlID0gbmV3IENyZWF0ZU5vdGU7XHJcbiAgICAgICAgY3JlYXRlLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICcuL21haW4uc2Nzcyc7XG5pbXBvcnQgeyBTYXZlVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3NhdmVUb0xvY2FsU3RvcmFnZSc7XG5pbXBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2FkTG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IE5vdGUgfSBmcm9tICcuL25vdGUnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcbmltcG9ydCB7IGZpcmViYXNlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgQ3JlYXRlTm90ZSB9IGZyb20gJy4vY3JlYXRlTm90ZXMnO1xuXG5cblxuXG5jb25zdCBjcmVhdGVOb3RlID0gbmV3IENyZWF0ZU5vdGU7XG5cbmNyZWF0ZU5vdGUuc3RhcnQoKTtcblxuXG5cbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9IG5ldyBTYXZlVG9Mb2NhbFN0b3JhZ2U7XG5cbnNhdmVUb0xvY2FsU3RvcmFnZS5idG5MaXN0ZW5lcigpO1xuXG5cblxuXG4vLyBsZXQgdGl0bGUgPSBcIlR5dHXFglwiO1xuLy8gbGV0IG5vdGVUZXh0ID0gXCJub3RhdGthXCI7XG4vLyBsZXQgY29sb3IgPSBcInJlZFwiO1xuLy8gbGV0IHBpbm5lZCA9IHRydWU7XG4vLyBsZXQgZGF0ZTtcbi8vIGxldCBpZCA9IFwiYXNkZmdoamtcIjtcblxuXG4vLyBjb25zdCBjcmVhdGVOb3RlID0gbmV3IENyZWF0ZU5vdGU7XG5cbi8vIGNyZWF0ZU5vdGUuc3RhcnQoKTtcblxuXG4vLyBjb25zdCBnZXREYXRlID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGRhdGUgPSBEYXRlLm5vdygpO1xuLy8gICAgIHJldHVybiBkYXRlO1xuLy8gfVxuLy8gZ2V0RGF0ZSgpXG5cbi8vIGNvbnNvbGUubG9nKGRhdGUpXG5cblxuLy8gbGV0IHRhYmxlID0gW107XG5cblxuLy8gY29uc3Qgbm90ZSA9IG5ldyBOb3RlKHRpdGxlLCBub3RlVGV4dCwgY29sb3IsIHBpbm5lZCwgZ2V0RGF0ZSgpKTtcblxuLy8gY29uc29sZS5sb2cobm90ZSlcblxuLy8gdGFibGUucHVzaChub3RlKTtcbi8vIHRhYmxlLnB1c2gobm90ZSk7XG4vLyB0YWJsZS5wdXNoKG5vdGUpO1xuLy8gdGFibGUucHVzaChub3RlKTtcbi8vIHRhYmxlLnB1c2gobm90ZSk7XG5cbi8vIGNvbnNvbGUubG9nKHRhYmxlKVxuXG5cblxuXG4vKlxuXG5jb25zdCBmaXJlYmFzZUFwcCA9IGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgZGIgPSBmaXJlYmFzZUFwcC5maXJlc3RvcmUoKTtcblxuY29uc3Qgbm90ZSA9IHtcbiAgICB0aXRsZTogJ1RoaXJkIG5vdGUnLFxuICAgIGNvbnRlbnQ6ICdUaGlyZCBub3RlIGNvbnRlbnQgZnJvbSBjb2RlJ1xufVxuXG4vLyBhZGROb3RlKG5vdGUpO1xuYXN5bmMgZnVuY3Rpb24gYWRkTm90ZShub3RlOiBhbnkpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdub3RlcycpLmFkZChub3RlKVxufVxuXG4vLyBkZWxldGVOb3RlKCdXR1hsekowSklrMFlqU1UxMlh4ZCcpO1xuYXN5bmMgZnVuY3Rpb24gZGVsZXRlTm90ZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZGIuY29sbGVjdGlvbignbm90ZXMnKS5kb2MoaWQpLmRlbGV0ZSgpO1xufVxuXG4vLyB1cGRhdGVOb3RlKFxuLy8gICAgICdZNklqMEVqdHE3cGNHR1kxRWhYbScsXG4vLyAgICAge1xuLy8gICAgICAgICB0aXRsZTogJ1VwZGF0ZWQgbm90ZScsXG4vLyAgICAgICAgIGNvbnRlbnQ6ICdOZXZlciBtaW5kJ1xuLy8gICAgIH1cbi8vICk7XG5hc3luYyBmdW5jdGlvbiB1cGRhdGVOb3RlKGlkOiBzdHJpbmcsIG5vdGU6IGFueSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ25vdGVzJykuZG9jKGlkKS51cGRhdGUobm90ZSk7XG59XG5cbi8vIGdldE5vdGUoJ1k2SWowRWp0cTdwY0dHWTFFaFhtJykudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG5hc3luYyBmdW5jdGlvbiBnZXROb3RlKGlkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZGIuY29sbGVjdGlvbignbm90ZXMnKS5kb2MoaWQpLmdldCgpLnRoZW4ocmVzID0+ICh7aWQ6IHJlcy5pZCwgZGF0YTogcmVzLmRhdGEoKX0pKVxufVxuXG5nZXROb3RlcygpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xuYXN5bmMgZnVuY3Rpb24gZ2V0Tm90ZXMoKSB7XG4gICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24oJ25vdGVzJykuZ2V0KCkudGhlbihyZXMgPT4gKHtzaXplOiByZXMuc2l6ZSwgZG9jczogcmVzLmRvY3N9KSlcbn1cblxuXG5cbiovIiwiZXhwb3J0IGNsYXNzIGxvYWRMb2NhbFN0b3JhZ2Uge1xyXG5cclxuICAgIHRpdGxlVmFsdWU6IHN0cmluZztcclxuICAgIG5vdGVUZXh0VmFsdWU6IHN0cmluZztcclxuICAgIGRhdGVWYWx1ZTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICB0aXRsZURpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBub3RlVGV4dERpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBkYXRlRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBlZGl0QnRuOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGRlbGV0ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5cclxuICAgIGxvY2FsTm90ZURhdGFBc0FycmF5OiBBcnJheTxhbnk+O1xyXG4gICAgbG9jYWxTdG9yYWdlTGVuZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhbFN0b3JhZ2VMZW5naHQoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2NhbFN0b3JhZ2VMZW5naHQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2NhbE5vdGVEYXRhQXNBcnJheVtpXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0YVBhbGNlcyhpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3RlRGF0YSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBnZXRMb2NhbFN0b3JhZ2VMZW5naHQoKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxOb3RlRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdub3RlcycpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGxvY2FsTm90ZURhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbE5vdGVEYXRhQXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxOb3RlRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlTGVuZ2h0ID0gdGhpcy5sb2NhbE5vdGVEYXRhQXNBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc2VsZWN0RGF0YVBhbGNlcyhpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpdGxlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RpdGxlRGl2LSR7aX1gKTtcclxuICAgICAgICB0aGlzLm5vdGVUZXh0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25vdGVUZXh0RGl2LSR7aX1gKTtcclxuICAgICAgICB0aGlzLmRhdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGF0ZURpdi0ke2l9YCk7XHJcbiAgICAgICAgdGhpcy5lZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2Lm5vdGVSb3cuZmlyc3RSb3cgW2lkPScke2l9J11gKTtcclxuICAgICAgICB0aGlzLmRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi5ub3RlUm93LmJvdHRvbVJvdyBbaWQ9JyR7aX0nXWApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKGk6IG51bWJlcikge1xyXG5cclxuICAgICAgICB0aGlzLnRpdGxlVmFsdWUgPSB0aGlzLmxvY2FsTm90ZURhdGFBc0FycmF5W2ldLnRpdGxlO1xyXG4gICAgICAgIHRoaXMubm90ZVRleHRWYWx1ZSA9IHRoaXMubG9jYWxOb3RlRGF0YUFzQXJyYXlbaV0ubm90ZVRleHQ7XHJcbiAgICAgICAgdGhpcy5kYXRlVmFsdWUgPSB0aGlzLmxvY2FsTm90ZURhdGFBc0FycmF5W2ldLmRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcGFzdGVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMudGl0bGVEaXYuaW5uZXJIVE1MID0gdGhpcy50aXRsZVZhbHVlO1xyXG4gICAgICAgIHRoaXMubm90ZVRleHREaXYuaW5uZXJIVE1MID0gdGhpcy5ub3RlVGV4dFZhbHVlO1xyXG4gICAgICAgIHRoaXMuZGF0ZURpdi5pbm5lckhUTUwgPSBuZXcgRGF0ZSh0aGlzLmRhdGVWYWx1ZSkudG9Mb2NhbGVTdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmVkaXRCdG4uaW5uZXJIVE1MID0gJ0VkeXR1aic7XHJcbiAgICAgICAgdGhpcy5kZWxldGVCdG4uaW5uZXJIVE1MID0gJ1VzdcWEJztcclxuICAgIH1cclxuXHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJleHBvcnQgY2xhc3MgTm90ZSB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgbm90ZVRleHQ6IHN0cmluZztcclxuICAgIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwaW5uZWQ6IGJvb2xlYW47XHJcbiAgICBkYXRlOiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBub3RlVGV4dDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBwaW5uZWQ6IGJvb2xlYW4sIGRhdGU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLm5vdGVUZXh0ID0gbm90ZVRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMucGlubmVkID0gcGlubmVkO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOb3RlIH0gZnJvbSBcIi4vbm90ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVUb0xvY2FsU3RvcmFnZSB7XHJcblxyXG4gICAgdGl0bGVJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIG5vdGVUZXh0SW5wdXQ6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICBjb2xvcklucHV0OiBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHBpbm5lZElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgZGF0ZTogbnVtYmVyO1xyXG4gICAgYWRkTm90ZUJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgdGl0bGVJbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgICBub3RlVGV4dElucHV0VmFsdWU6IHN0cmluZztcclxuICAgIGNvbG9ySW5wdXRWYWx1ZTogc3RyaW5nO1xyXG4gICAgcGlubmVkSW5wdXRWYWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBub3RlOiBOb3RlO1xyXG5cclxuXHJcbiAgICByZW1vdmVOb3RlOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICBidG5MaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmFkZE5vdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5vdGUnKTtcclxuICAgICAgICB0aGlzLmFkZE5vdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc3RhcnQoKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50c1ZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5hZGRWYWx1ZVRvTm90ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMudGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMubm90ZVRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RldGV4dC1pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMucGlubmVkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGluQ2hlY2tib3gnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudHNWYWx1ZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZUlucHV0VmFsdWUgPSB0aGlzLnRpdGxlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5ub3RlVGV4dElucHV0VmFsdWUgPSB0aGlzLm5vdGVUZXh0SW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb2xvcklucHV0VmFsdWUgPSB0aGlzLmNvbG9ySW5wdXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5waW5uZWRJbnB1dFZhbHVlID0gdGhpcy5waW5uZWRJbnB1dC5jaGVja2VkO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVmFsdWVUb05vdGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub3RlID0gbmV3IE5vdGUodGhpcy50aXRsZUlucHV0VmFsdWUsIHRoaXMubm90ZVRleHRJbnB1dFZhbHVlLCB0aGlzLmNvbG9ySW5wdXRWYWx1ZSwgdGhpcy5waW5uZWRJbnB1dFZhbHVlLCB0aGlzLmRhdGUpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubm90ZSlcclxuXHJcbiAgICAgICAgdGhpcy5zYXZlRGF0YSh0aGlzLm5vdGUpXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGluZGV4OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50RGF0YSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IGN1cnJlbnREYXRhLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN1cnJlbnREYXRhW2luZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25vdGVzJywgSlNPTi5zdHJpbmdpZnkoY3VycmVudERhdGEpKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25vdGVzJyk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9