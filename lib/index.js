module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(35);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lessonsReducer;
exports.LessonBlockFileData = exports.LessonBlockGallerySlideData = exports.LessonBlockGalleryData = exports.LessonBlockAudioData = exports.LessonBlockVideoData = exports.LessonBlockDescriptionData = exports.LessonBlockTitleData = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(12));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(26));

var _immer = __webpack_require__(27);

var _omit = _interopRequireDefault(__webpack_require__(28));

var _types = __webpack_require__(7);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Data models
var LessonBlockTitleData = function LessonBlockTitleData() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  (0, _classCallCheck2.default)(this, LessonBlockTitleData);
  this.text = text;
};

exports.LessonBlockTitleData = LessonBlockTitleData;

var LessonBlockDescriptionData = function LessonBlockDescriptionData() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  (0, _classCallCheck2.default)(this, LessonBlockDescriptionData);
  this.text = text;
};

exports.LessonBlockDescriptionData = LessonBlockDescriptionData;

var LessonBlockVideoData = function LessonBlockVideoData() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _types.LessonBlockVideoType.YOUTUBE;
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _classCallCheck2.default)(this, LessonBlockVideoData);
  this.type = type;
  this.id = id;
};

exports.LessonBlockVideoData = LessonBlockVideoData;

var LessonBlockAudioData = function LessonBlockAudioData() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  (0, _classCallCheck2.default)(this, LessonBlockAudioData);
  this.src = src;
};

exports.LessonBlockAudioData = LessonBlockAudioData;

var LessonBlockGalleryData = function LessonBlockGalleryData() {
  var slides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  (0, _classCallCheck2.default)(this, LessonBlockGalleryData);
  this.slides = slides;
};

exports.LessonBlockGalleryData = LessonBlockGalleryData;

var LessonBlockGallerySlideData = function LessonBlockGallerySlideData() {
  var image = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _classCallCheck2.default)(this, LessonBlockGallerySlideData);
  this.image = image;
  this.description = description;
};

exports.LessonBlockGallerySlideData = LessonBlockGallerySlideData;

var LessonBlockFileData = function LessonBlockFileData() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _classCallCheck2.default)(this, LessonBlockFileData);
  this.name = name;
  this.description = description;
};

exports.LessonBlockFileData = LessonBlockFileData;

var initialState = function initialState() {
  return {
    create: {
      blocks: [{
        type: _types.LessonBlockType.TITLE,
        data: new LessonBlockTitleData(),
        isRequired: true
      }, {
        type: _types.LessonBlockType.DESCRIPTION,
        data: new LessonBlockDescriptionData(),
        isRequired: true
      }]
    },
    list: []
  };
};

function lessonsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState();
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _immer.produce)(state, function (draft) {
    switch (action.type) {
      case _types.LessonsActions.LESSON_ADD_BLOCK:
        var blockData;

        switch (action.payload.type) {
          case _types.LessonBlockType.TITLE:
            blockData = new LessonBlockTitleData();
            break;

          case _types.LessonBlockType.DESCRIPTION:
            blockData = new LessonBlockDescriptionData();
            break;

          case _types.LessonBlockType.VIDEO:
            blockData = new LessonBlockVideoData();
            break;

          case _types.LessonBlockType.AUDIO:
            blockData = new LessonBlockAudioData();
            break;

          case _types.LessonBlockType.GALLERY:
            blockData = new LessonBlockGalleryData();
            break;

          case _types.LessonBlockType.FILE:
            blockData = new LessonBlockFileData();
            break;
        }

        draft.create.blocks.push({
          type: action.payload.type,
          data: blockData,
          isRequired: false
        });
        break;

      case _types.LessonsActions.LESSON_REMOVE_BLOCK:
        draft.create.blocks.splice(action.payload.idx, 1);
        break;

      case _types.LessonsActions.LESSON_MOVE_BLOCK:
        var blocks = draft.create.blocks;
        var _action$payload = action.payload,
            idx = _action$payload.idx,
            position = _action$payload.position;
        draft.create.blocks[idx] = blocks.splice(position === _types.LessonBlockMovePosition.UP ? idx + 1 : idx - 1, 1, blocks[idx])[0];
        break;

      case _types.LessonsActions.LESSON_UPDATE_BLOCK:
        // @ts-ignore
        draft.create.blocks[action.payload.idx] = _objectSpread(_objectSpread({}, draft.create.blocks[action.payload.idx]), (0, _omit.default)(action.payload, ['idx']));
        break;

      case _types.LessonsActions.LESSON_RESET:
        draft.create = initialState().create;
        break;
    }
  });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LessonBlockMovePosition = exports.LessonBlockVideoType = exports.LessonBlockType = exports.LessonsActions = void 0;
// State types
var LessonsActions;
exports.LessonsActions = LessonsActions;

(function (LessonsActions) {
  LessonsActions["LESSON_ADD_BLOCK"] = "@app/LESSON_ADD_BLOCK";
  LessonsActions["LESSON_REMOVE_BLOCK"] = "@app/LESSON_REMOVE_BLOCK";
  LessonsActions["LESSON_UPDATE_BLOCK"] = "@app/LESSON_UPDATE_BLOCK";
  LessonsActions["LESSON_MOVE_BLOCK"] = "@app/LESSON_MOVE_BLOCK";
  LessonsActions["LESSON_RESET"] = "@app/LESSON_RESET";
})(LessonsActions || (exports.LessonsActions = LessonsActions = {}));

var LessonBlockType;
exports.LessonBlockType = LessonBlockType;

(function (LessonBlockType) {
  LessonBlockType[LessonBlockType["TITLE"] = 1] = "TITLE";
  LessonBlockType[LessonBlockType["DESCRIPTION"] = 2] = "DESCRIPTION";
  LessonBlockType[LessonBlockType["VIDEO"] = 3] = "VIDEO";
  LessonBlockType[LessonBlockType["AUDIO"] = 4] = "AUDIO";
  LessonBlockType[LessonBlockType["GALLERY"] = 5] = "GALLERY";
  LessonBlockType[LessonBlockType["FILE"] = 6] = "FILE";
})(LessonBlockType || (exports.LessonBlockType = LessonBlockType = {}));

var LessonBlockVideoType;
exports.LessonBlockVideoType = LessonBlockVideoType;

(function (LessonBlockVideoType) {
  LessonBlockVideoType[LessonBlockVideoType["UNKNOWN"] = 0] = "UNKNOWN";
  LessonBlockVideoType[LessonBlockVideoType["YOUTUBE"] = 1] = "YOUTUBE";
})(LessonBlockVideoType || (exports.LessonBlockVideoType = LessonBlockVideoType = {}));

var LessonBlockMovePosition;
exports.LessonBlockMovePosition = LessonBlockMovePosition;

(function (LessonBlockMovePosition) {
  LessonBlockMovePosition[LessonBlockMovePosition["UP"] = 0] = "UP";
  LessonBlockMovePosition[LessonBlockMovePosition["DOWN"] = 1] = "DOWN";
})(LessonBlockMovePosition || (exports.LessonBlockMovePosition = LessonBlockMovePosition = {}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("connected-react-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRootReducer;

var _redux = __webpack_require__(13);

var _connectedReactRouter = __webpack_require__(11);

var _lessons = _interopRequireDefault(__webpack_require__(6));

function createRootReducer(history) {
  return (0, _redux.combineReducers)({
    router: (0, _connectedReactRouter.connectRouter)(history),
    lessons: _lessons.default
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(12));

var _react = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(19));

var _styles = _interopRequireDefault(__webpack_require__(47));

var Section = function Section(_ref) {
  var _classNames;

  var dark = _ref.dark,
      children = _ref.children,
      className = _ref.className,
      containerRef = _ref.containerRef;
  var classes = (0, _classnames.default)(className || '', (_classNames = {}, (0, _defineProperty2.default)(_classNames, _styles.default.section, true), (0, _defineProperty2.default)(_classNames, _styles.default.sectionDark, dark), _classNames));
  return /*#__PURE__*/_react.default.createElement("section", {
    ref: containerRef,
    className: classes
  }, children);
};

Section.defaultProps = {
  dark: false
};
var _default = Section;
exports.default = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactDom = _interopRequireDefault(__webpack_require__(22));

var _App = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(85);

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_App.default, null), document.getElementById('root'));

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactRedux = __webpack_require__(14);

var _connectedReactRouter = __webpack_require__(11);

var _configureStore = __webpack_require__(24);

var _Routes = _interopRequireDefault(__webpack_require__(30));

__webpack_require__(83);

var store = (0, _configureStore.configureStore)();

var App = function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_connectedReactRouter.ConnectedRouter, {
    history: _configureStore.history
  }, /*#__PURE__*/_react.default.createElement(_Routes.default, null)));
};

var _default = App;
exports.default = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = exports.configureStore = void 0;

var _configureStore = _interopRequireDefault(__webpack_require__(25));

var _configureStore2 = _interopRequireDefault(__webpack_require__(29));

var selectedConfigureStore =  true ? _configureStore2.default : undefined;
var configureStore = selectedConfigureStore.configureStore;
exports.configureStore = configureStore;
var history = selectedConfigureStore.history;
exports.history = history;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(12));

var _redux = __webpack_require__(13);

var _history = __webpack_require__(15);

var _connectedReactRouter = __webpack_require__(11);

var _reducers = _interopRequireDefault(__webpack_require__(16));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var history = (0, _history.createBrowserHistory)();
var rootReducer = (0, _reducers.default)(history);

var configureStore = function configureStore(initialState) {
  // Redux Configuration
  var middleware = [];
  var enhancers = []; // Router Middleware

  var router = (0, _connectedReactRouter.routerMiddleware)(history);
  middleware.push(router); // Redux DevTools Configuration

  var actionCreators = _objectSpread({}, _connectedReactRouter.routerActions); // If Redux DevTools Extension is installed use it, otherwise use Redux compose

  /* eslint-disable no-underscore-dangle */


  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://extension.remotedev.io/docs/API/Arguments.html
    actionCreators: actionCreators
  }) : _redux.compose;
  /* eslint-enable no-underscore-dangle */
  // Apply Middleware & Compose Enhancers

  enhancers.push(_redux.applyMiddleware.apply(void 0, middleware));
  var enhancer = composeEnhancers.apply(void 0, enhancers); // Create Store

  var store = (0, _redux.createStore)(rootReducer, initialState, enhancer);

  if (false) {}

  return store;
};

var _default = {
  configureStore: configureStore,
  history: history
};
exports.default = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(13);

var _history = __webpack_require__(15);

var _connectedReactRouter = __webpack_require__(11);

var _reducers = _interopRequireDefault(__webpack_require__(16));

var history = (0, _history.createBrowserHistory)();
var rootReducer = (0, _reducers.default)(history);
var router = (0, _connectedReactRouter.routerMiddleware)(history);
var enhancer = (0, _redux.applyMiddleware)(router);

function configureStore(initialState) {
  return (0, _redux.createStore)(rootReducer, initialState, enhancer);
}

var _default = {
  configureStore: configureStore,
  history: history
};
exports.default = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard3 = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireWildcard3(__webpack_require__(1));

var _reactRouterDom = __webpack_require__(17);

var _LoadingScreen = _interopRequireDefault(__webpack_require__(31));

var LessonViewer = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return (0, _interopRequireWildcard2.default)(__webpack_require__(38));
  });
});

var Routes = function Routes() {
  return /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement(_LoadingScreen.default, null)
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    to: "/lesson/make"
  })), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/lesson/view/:id",
    component: LessonViewer
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/lesson/make",
    component: LessonViewer
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, null, "Not found")));
};

var _default = Routes;
exports.default = _default;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _Loader = _interopRequireDefault(__webpack_require__(32));

var _styles = _interopRequireDefault(__webpack_require__(36));

var LoadingScreen = function LoadingScreen() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.loadingScreen
  }, /*#__PURE__*/_react.default.createElement(_Loader.default, null));
};

var _default = LoadingScreen;
exports.default = _default;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _styles = _interopRequireDefault(__webpack_require__(33));

var Loader = function Loader() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.loadingContainer
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null));
};

var _default = Loader;
exports.default = _default;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(34);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".loadingContainer-2NTkX{margin:0 auto;width:54px;text-align:center}.loadingContainer-2NTkX>div{width:10px;height:10px;background-color:#fff;border-radius:100%;display:inline-block;-webkit-animation:loader-animation-1MkhU 1.4s infinite ease-in-out both;animation:loader-animation-1MkhU 1.4s infinite ease-in-out both;margin:0 4px}.loadingContainer-2NTkX>div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.loadingContainer-2NTkX>div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes loader-animation-1MkhU{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0);opacity:0}40%{-webkit-transform:scale(1);transform:scale(1);opacity:.85}}@keyframes loader-animation-1MkhU{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0);opacity:0}40%{-webkit-transform:scale(1);transform:scale(1);opacity:.85}}\n", ""]);

// Exports
exports.locals = {
	"loadingContainer": "loadingContainer-2NTkX",
	"loader-animation": "loader-animation-1MkhU"
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(37);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".loadingScreen-1u922{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}\n", ""]);

// Exports
exports.locals = {
	"loadingScreen": "loadingScreen-1u922"
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(18));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _reactRouterDom = __webpack_require__(17);

var _styles = _interopRequireDefault(__webpack_require__(39));

var _Layout = _interopRequireDefault(__webpack_require__(41));

var _reactRedux = __webpack_require__(14);

var _selectors = __webpack_require__(44);

var _Block = _interopRequireDefault(__webpack_require__(46));

var _actions = __webpack_require__(82);

var LessonViewer = function LessonViewer() {
  var _useParams = (0, _reactRouterDom.useParams)(),
      id = _useParams.id;

  var lesson = (0, _reactRedux.useSelector)(_selectors.lessonCreateSelector);
  var dispatch = (0, _reactRedux.useDispatch)();
  var addBlock = (0, _react.useCallback)(function (type) {
    return dispatch((0, _actions.lessonAddBlock)(type));
  }, [dispatch]);
  var updateBlock = (0, _react.useCallback)(function (idx, data) {
    return dispatch((0, _actions.lessonUpdateBlock)(idx, data));
  }, [dispatch]);
  var resetLesson = (0, _react.useCallback)(function () {
    return dispatch((0, _actions.lessonReset)());
  }, [dispatch]);
  (0, _react.useEffect)(function () {
    if (id !== void 0) {// load from server...
    }

    return function () {
      return resetLesson();
    };
  }, [id, resetLesson]);
  return /*#__PURE__*/_react.default.createElement(_Layout.default, {
    className: _styles.default.lessonViewer
  }, lesson.blocks.map(function (block, idx) {
    return /*#__PURE__*/_react.default.createElement(_Block.default, (0, _extends2.default)({}, block, {
      key: idx,
      idx: idx,
      addBlock: addBlock,
      updateBlock: updateBlock
    }));
  }));
};

var _default = LessonViewer;
exports.default = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(40);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".lessonViewer-1LPze{display:-webkit-box;display:-ms-flexbox;display:flex}\n", ""]);

// Exports
exports.locals = {
	"lessonViewer": "lessonViewer-1LPze"
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(19));

var _styles = _interopRequireDefault(__webpack_require__(42));

var Layout = function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(_styles.default.layoutContainer, className)
  }, /*#__PURE__*/_react.default.createElement("main", {
    className: _styles.default.layoutContent
  }, children), /*#__PURE__*/_react.default.createElement("footer", {
    className: _styles.default.layoutFooter
  }));
};

var _default = Layout;
exports.default = _default;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(43);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".layoutContainer-18YW2{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%}.layoutContent-k4WST{padding-bottom:81px;height:100%}.layoutFooter-3XhEW{height:81px;background-color:#2C3E50}\n", ""]);

// Exports
exports.locals = {
	"layoutContainer": "layoutContainer-18YW2",
	"layoutContent": "layoutContent-k4WST",
	"layoutFooter": "layoutFooter-3XhEW"
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lessonCreateSelector = void 0;

var _reselect = __webpack_require__(45);

var lessonCreateState = function lessonCreateState(state) {
  return state.lessons.create;
};

var lessonCreateSelector = (0, _reselect.createSelector)([lessonCreateState], function (state) {
  return state;
});
exports.lessonCreateSelector = lessonCreateSelector;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _interopRequireWildcard = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _types = __webpack_require__(7);

var _Section = _interopRequireDefault(__webpack_require__(20));

var _CreationMenu = _interopRequireDefault(__webpack_require__(49));

var _BlockTypeTitle = _interopRequireDefault(__webpack_require__(53));

var _styles = _interopRequireDefault(__webpack_require__(56));

var _BlockTypeDescription = _interopRequireDefault(__webpack_require__(58));

var _BlockTypeVideo = _interopRequireDefault(__webpack_require__(61));

var _BlockTypeGallery = _interopRequireDefault(__webpack_require__(68));

var _BlockTypeFile = _interopRequireDefault(__webpack_require__(74));

var _BlockTypeAudio = _interopRequireDefault(__webpack_require__(77));

var Block = function Block(_ref) {
  var idx = _ref.idx,
      type = _ref.type,
      data = _ref.data,
      isRequired = _ref.isRequired,
      addBlock = _ref.addBlock,
      updateBlock = _ref.updateBlock;
  var isDark = (0, _react.useMemo)(function () {
    return [_types.LessonBlockType.VIDEO, _types.LessonBlockType.GALLERY].indexOf(type) !== -1;
  }, [type]);
  var onChangeBlockData = (0, _react.useCallback)(function (data) {
    return updateBlock(idx, data);
  }, [idx]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Section.default, {
    dark: isDark,
    className: _styles.default.block
  }, function () {
    switch (type) {
      case _types.LessonBlockType.TITLE:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeTitle.default, {
          onChange: onChangeBlockData,
          text: data.text
        });

      case _types.LessonBlockType.DESCRIPTION:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeDescription.default, {
          onChange: onChangeBlockData,
          text: data.text
        });

      case _types.LessonBlockType.VIDEO:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeVideo.default, {
          onChange: onChangeBlockData,
          type: data.type,
          id: data.id
        });

      case _types.LessonBlockType.GALLERY:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeGallery.default, {
          onChange: onChangeBlockData,
          slides: data.slides
        });

      case _types.LessonBlockType.FILE:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeFile.default, {
          onChange: onChangeBlockData,
          name: data.name,
          description: data.description
        });

      case _types.LessonBlockType.AUDIO:
        return /*#__PURE__*/_react.default.createElement(_BlockTypeAudio.default, {
          onChange: onChangeBlockData,
          src: data.src
        });

      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  }()), /*#__PURE__*/_react.default.createElement(_CreationMenu.default, {
    onSelect: function onSelect(type) {
      return addBlock(type);
    }
  }));
};

var _default = Block;
exports.default = _default;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(48);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".section-fZ4lw{background-color:#fff}.sectionDark-2G7sX{background-color:#F4F5F6}\n", ""]);

// Exports
exports.locals = {
	"section": "section-fZ4lw",
	"sectionDark": "sectionDark-2G7sX"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(18));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _reactFontawesome = __webpack_require__(9);

var _freeSolidSvgIcons = __webpack_require__(10);

var _CreationButton = _interopRequireDefault(__webpack_require__(50));

var _types = __webpack_require__(7);

var _Section = _interopRequireDefault(__webpack_require__(20));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(51));

var CreationMenu = function CreationMenu(_ref) {
  var onSelect = _ref.onSelect;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var menuEl = (0, _react.useRef)(null);
  var onSelectContainer = (0, _react.useCallback)(function (type) {
    return function (evt) {
      evt.preventDefault();
      onSelect && onSelect(type);
      setOpen(false);
    };
  }, [onSelect, setOpen]);
  var outsideClickHandler = (0, _react.useCallback)(function (evt) {
    if (isOpen && menuEl && !menuEl.current.contains(evt.target)) {
      setOpen(false);
    }
  }, [isOpen, menuEl, setOpen]);
  (0, _react.useEffect)(function () {
    document.addEventListener('click', outsideClickHandler, false);
    return function () {
      return document.removeEventListener('click', outsideClickHandler);
    };
  }, [outsideClickHandler]);
  var menu = [{
    title: 'Галерея',
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faImage
    }),
    onClick: onSelectContainer(_types.LessonBlockType.GALLERY)
  }, {
    title: 'Видео',
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faVideo
    }),
    onClick: onSelectContainer(_types.LessonBlockType.VIDEO)
  }, {
    title: 'Аудио',
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faMusic
    }),
    onClick: onSelectContainer(_types.LessonBlockType.AUDIO)
  }, {
    title: 'Файл',
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faFile
    }),
    onClick: onSelectContainer(_types.LessonBlockType.FILE)
  }];
  return /*#__PURE__*/_react.default.createElement(_Section.default, {
    containerRef: menuEl,
    className: _styles.default.creationMenuContainer
  }, isOpen ? /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.creationButtonsContainer
  }, /*#__PURE__*/_react.default.createElement(_antd.Divider, null), /*#__PURE__*/_react.default.createElement(_antd.Typography.Title, {
    level: 4
  }, "\u0412\u044B\u0431\u0435\u0440\u0438 \u0442\u0438\u043F \u0431\u043B\u043E\u043A\u0430"), /*#__PURE__*/_react.default.createElement("div", null, menu.map(function (item, idx) {
    return /*#__PURE__*/_react.default.createElement(_CreationButton.default, (0, _extends2.default)({
      key: idx
    }, item));
  })), /*#__PURE__*/_react.default.createElement(_antd.Divider, null)) : /*#__PURE__*/_react.default.createElement(_antd.Divider, null, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    placement: "top",
    title: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u043A"
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: function onClick() {
      return setOpen(true);
    },
    block: true,
    shape: "circle",
    type: "default",
    size: "small",
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPlus
    })
  }))));
};

var _default = CreationMenu;
exports.default = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _antd = __webpack_require__(5);

var CreationButton = function CreationButton(_ref) {
  var onClick = _ref.onClick,
      title = _ref.title,
      icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
    placement: "top",
    title: title
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    onClick: onClick,
    block: true,
    type: "link",
    size: "large",
    icon: icon
  }));
};

var _default = CreationButton;
exports.default = _default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(52);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".creationMenuContainer-28Vrt{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.creationButtonsContainer-3hzbu{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}\n", ""]);

// Exports
exports.locals = {
	"creationMenuContainer": "creationMenuContainer-28Vrt",
	"creationButtonsContainer": "creationButtonsContainer-3hzbu"
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(54));

var _lessons = __webpack_require__(6);

var BlockTypeTitle = function BlockTypeTitle(_ref) {
  var text = _ref.text,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(text),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var timerRef = (0, _react.useRef)(-1);
  (0, _react.useEffect)(function () {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(function () {
      return value && onChange(new _lessons.LessonBlockTitleData(value));
    }, 300);
  }, [value, timerRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeTitleContainer
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    size: "large",
    placeholder: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A...",
    value: value,
    onChange: function onChange(evt) {
      return setValue(evt.target.value);
    }
  }));
};

var _default = BlockTypeTitle;
exports.default = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(55);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeTitleContainer-sgY2L{width:100%;max-width:560px}\n", ""]);

// Exports
exports.locals = {
	"blockTypeTitleContainer": "blockTypeTitleContainer-sgY2L"
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(57);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".block-3vkhi{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:8px}.block-3vkhi:first-child{padding-top:32px}.block-3vkhi:last-child{padding-bottom:32px}\n", ""]);

// Exports
exports.locals = {
	"block": "block-3vkhi"
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(59));

var _lessons = __webpack_require__(6);

var BlockTypeDescription = function BlockTypeDescription(_ref) {
  var text = _ref.text,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(text),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var timerRef = (0, _react.useRef)(-1);
  (0, _react.useEffect)(function () {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(function () {
      return value && onChange(new _lessons.LessonBlockDescriptionData(value));
    }, 300);
  }, [value, timerRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeDescriptionContainer
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.TextArea, {
    autoSize: {
      minRows: 5
    },
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435...",
    value: value,
    onChange: function onChange(evt) {
      return setValue(evt.target.value);
    }
  }));
};

var _default = BlockTypeDescription;
exports.default = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(60);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeDescriptionContainer-13axS{width:100%;max-width:560px}\n", ""]);

// Exports
exports.locals = {
	"blockTypeDescriptionContainer": "blockTypeDescriptionContainer-13axS"
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _types = __webpack_require__(7);

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(62));

var _VideoPlayer = _interopRequireDefault(__webpack_require__(64));

var _reactFontawesome = __webpack_require__(9);

var _freeSolidSvgIcons = __webpack_require__(10);

var _lessons = __webpack_require__(6);

var _getVideoTypeFromURL = _interopRequireDefault(__webpack_require__(66));

var _youtubeParseURL = _interopRequireDefault(__webpack_require__(67));

var BlockTypeVideo = function BlockTypeVideo(_ref) {
  var id = _ref.id,
      type = _ref.type,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(id ? "https://youtu.be/".concat(id) : ''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // youtubeParseURL(url)
  // getVideoTypeFromURL(value)


  var onApplyValue = (0, _react.useCallback)(function (value) {
    var detectedVideoType = (0, _getVideoTypeFromURL.default)(value);
    var detectedVideoCode = (0, _youtubeParseURL.default)(value);

    if (detectedVideoType !== _types.LessonBlockVideoType.UNKNOWN && detectedVideoCode) {
      onChange(new _lessons.LessonBlockVideoData(detectedVideoType, detectedVideoCode));
    }
  }, [onChange, value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeVideoContainer
  }, id ? /*#__PURE__*/_react.default.createElement(_VideoPlayer.default, {
    width: 560,
    type: type,
    id: id
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeVideoSplash
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFilm,
    size: '3x',
    color: "rgba(0, 0, 0, 0.5)"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_antd.Typography.Paragraph, null, "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E...")), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeVideoInput
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E...",
    value: value,
    onChange: function onChange(evt) {
      return setValue(evt.target.value);
    },
    onPressEnter: function onPressEnter() {
      return onApplyValue(value);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCheck
    }),
    onClick: function onClick() {
      return onApplyValue(value);
    }
  })));
};

var _default = BlockTypeVideo;
exports.default = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(63);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeVideoContainer-3uChe{width:100%;max-width:560px;padding-top:12px}.blockTypeVideoContainer-3uChe .blockTypeVideoSplash-uZgog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:315px;background-color:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.06)}.blockTypeVideoContainer-3uChe .blockTypeVideoInput-aAWwN{padding-top:12px;padding-bottom:12px;display:-webkit-box;display:-ms-flexbox;display:flex}.blockTypeVideoContainer-3uChe .blockTypeVideoInput-aAWwN>:last-child{-webkit-box-flex:0;-ms-flex:0 0 32px;flex:0 0 32px;margin-left:-1px}\n", ""]);

// Exports
exports.locals = {
	"blockTypeVideoContainer": "blockTypeVideoContainer-3uChe",
	"blockTypeVideoSplash": "blockTypeVideoSplash-uZgog",
	"blockTypeVideoInput": "blockTypeVideoInput-aAWwN"
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactYoutube = _interopRequireDefault(__webpack_require__(65));

var _types = __webpack_require__(7);

var _antd = __webpack_require__(5);

var VideoPlayer = function VideoPlayer(_ref) {
  var type = _ref.type,
      id = _ref.id,
      width = _ref.width;

  switch (type) {
    case _types.LessonBlockVideoType.YOUTUBE:
      return /*#__PURE__*/_react.default.createElement(_reactYoutube.default, {
        videoId: id,
        opts: {
          height: "".concat(width / 16 * 9),
          width: "".concat(width),
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        }
      });

    default:
      return /*#__PURE__*/_react.default.createElement(_antd.Alert, {
        message: "Unsupported player",
        type: "error"
      });
  }
};

VideoPlayer.defaultProps = {
  width: 460
};
var _default = VideoPlayer;
exports.default = _default;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getVideoTypeFromURL;

var _types = __webpack_require__(7);

function getVideoTypeFromURL(url) {
  if (/youtu/.test(url)) {
    return _types.LessonBlockVideoType.YOUTUBE;
  } else {
    return _types.LessonBlockVideoType.UNKNOWN;
  }
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeParseURL;

function youtubeParseURL(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : void 0;
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(69));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(70));

var _reactFontawesome = __webpack_require__(9);

var _freeSolidSvgIcons = __webpack_require__(10);

var _Gallery = _interopRequireDefault(__webpack_require__(72));

var _lessons = __webpack_require__(6);

var Slide = function Slide(_ref) {
  var idx = _ref.idx,
      image = _ref.image,
      description = _ref.description,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(image),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      imageValue = _useState2[0],
      setImageValue = _useState2[1];

  var _useState3 = (0, _react.useState)(description),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      descriptionValue = _useState4[0],
      setDescriptionValue = _useState4[1];

  var onApplyValue = (0, _react.useCallback)(function (image, description) {
    if (imageValue) {
      onChange(idx, new _lessons.LessonBlockGallerySlideData(image, description));
    }
  }, [onChange, imageValue, descriptionValue]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGallerySlide
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGallerySplash
  }, image ? /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGalleryImage,
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faImage,
    size: '3x',
    color: "rgba(0, 0, 0, 0.5)"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_antd.Typography.Paragraph, null, "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435..."))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGalleryInput
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435...",
    value: imageValue,
    onChange: function onChange(evt) {
      return setImageValue(evt.target.value);
    },
    onPressEnter: function onPressEnter() {
      return onApplyValue(imageValue, descriptionValue);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCheck
    }),
    onClick: function onClick() {
      return onApplyValue(imageValue, descriptionValue);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGalleryInput
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435...",
    value: descriptionValue,
    onChange: function onChange(evt) {
      return setDescriptionValue(evt.target.value);
    },
    onPressEnter: function onPressEnter() {
      return onApplyValue(imageValue, descriptionValue);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCheck
    }),
    onClick: function onClick() {
      return onApplyValue(imageValue, descriptionValue);
    }
  })));
};

var BlockTypeGallery = function BlockTypeGallery(_ref2) {
  var slides = _ref2.slides,
      onChange = _ref2.onChange;
  var modSlides = [].concat((0, _toConsumableArray2.default)(slides), [{
    image: '',
    description: ''
  }]);
  var onUpdateSlide = (0, _react.useCallback)(function (idx, slide) {
    var newSlides = (0, _toConsumableArray2.default)(slides);

    if (newSlides[idx]) {
      newSlides[idx] = slide;
    } else {
      newSlides.push(slide);
    }

    console.log(new _lessons.LessonBlockGalleryData(newSlides));
    onChange(new _lessons.LessonBlockGalleryData(newSlides));
  }, [slides, onChange]);
  var gallerySlides = modSlides.map(function (slide, idx) {
    return /*#__PURE__*/_react.default.createElement(Slide, {
      key: idx,
      idx: idx,
      onChange: onUpdateSlide,
      image: slide.image,
      description: slide.description
    });
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeGalleryContainer
  }, /*#__PURE__*/_react.default.createElement(_Gallery.default, {
    slides: gallerySlides
  }));
};

var _default = BlockTypeGallery;
exports.default = _default;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(71);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeGalleryContainer-2B_c2{width:100%;padding-top:12px}.blockTypeGalleryContainer-2B_c2 .blockTypeGallerySlide-SZoxN{width:460px;-webkit-box-sizing:border-box;box-sizing:border-box}.blockTypeGalleryContainer-2B_c2 .blockTypeGallerySplash-11oro{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:315px;background-color:rgba(0,0,0,0.03);border:1px solid rgba(0,0,0,0.06)}.blockTypeGalleryContainer-2B_c2 .blockTypeGalleryImage-1az98{background-size:cover;height:315px;width:100%}.blockTypeGalleryContainer-2B_c2 .blockTypeGalleryInput-29LJR{padding-top:12px;padding-bottom:12px;display:-webkit-box;display:-ms-flexbox;display:flex}.blockTypeGalleryContainer-2B_c2 .blockTypeGalleryInput-29LJR>:last-child{-webkit-box-flex:0;-ms-flex:0 0 32px;flex:0 0 32px;margin-left:-1px}\n", ""]);

// Exports
exports.locals = {
	"blockTypeGalleryContainer": "blockTypeGalleryContainer-2B_c2",
	"blockTypeGallerySlide": "blockTypeGallerySlide-SZoxN",
	"blockTypeGallerySplash": "blockTypeGallerySplash-11oro",
	"blockTypeGalleryImage": "blockTypeGalleryImage-1az98",
	"blockTypeGalleryInput": "blockTypeGalleryInput-29LJR"
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _react2 = __webpack_require__(73);

var Gallery = function Gallery(_ref) {
  var slides = _ref.slides;
  return /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 24
  }, slides.map(function (slide, idx) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: idx
    }, slide);
  }));
};

var _default = Gallery;
exports.default = _default;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(75));

var _freeSolidSvgIcons = __webpack_require__(10);

var _reactFontawesome = __webpack_require__(9);

var _lessons = __webpack_require__(6);

var BlockTypeFile = function BlockTypeFile(_ref) {
  var description = _ref.description,
      onChange = _ref.onChange;
  var fileInput = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(name),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      nameValue = _useState2[0],
      setNameValue = _useState2[1];

  var _useState3 = (0, _react.useState)(description),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      descriptionValue = _useState4[0],
      setDescriptionValue = _useState4[1];

  var selectFile = (0, _react.useCallback)(function (evt) {
    evt.preventDefault();

    if (evt.currentTarget.files) {
      var file = evt.currentTarget.files[0];
      setNameValue(file.name);
      onChange(new _lessons.LessonBlockFileData(file.name, descriptionValue));
    }
  }, [setNameValue, descriptionValue]);
  var timerRef = (0, _react.useRef)(-1);
  (0, _react.useEffect)(function () {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(function () {
      return descriptionValue && onChange(new _lessons.LessonBlockFileData(nameValue, descriptionValue));
    }, 300);
  }, [descriptionValue, timerRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeFileContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeFileIcon
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFile,
    size: '3x',
    color: "rgba(0, 0, 0, 0.5)"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeFileInputs
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: _styles.default.blockTypeFileInput,
    ref: fileInput,
    type: "file",
    onChange: selectFile
  }), /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u0418\u043C\u044F \u0444\u0430\u0439\u043B\u0430...",
    value: nameValue,
    size: 'small',
    onChange: function onChange(evt) {
      return setNameValue(evt.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u0430...",
    value: descriptionValue,
    size: 'small',
    onChange: function onChange(evt) {
      return setDescriptionValue(evt.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeFileButton
  }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    size: 'large',
    onClick: function onClick() {
      return fileInput.current ? fileInput.current.click() : false;
    }
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")));
};

var _default = BlockTypeFile;
exports.default = _default;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(76);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeFileContainer-2yDGJ{width:100%;max-width:560px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.blockTypeFileContainer-2yDGJ>.blockTypeFileInputs-15P3F{-webkit-box-flex:1;-ms-flex:1;flex:1}.blockTypeFileContainer-2yDGJ>.blockTypeFileIcon-3O58H{-webkit-box-flex:0;-ms-flex:0 0 64px;flex:0 0 64px;margin-right:12px}.blockTypeFileContainer-2yDGJ>.blockTypeFileButton-3l-kf{margin-left:12px;-webkit-box-flex:0;-ms-flex:0 0 164px;flex:0 0 164px}.blockTypeFileContainer-2yDGJ .blockTypeFileInput-S2ed9{display:none}\n", ""]);

// Exports
exports.locals = {
	"blockTypeFileContainer": "blockTypeFileContainer-2yDGJ",
	"blockTypeFileInputs": "blockTypeFileInputs-15P3F",
	"blockTypeFileIcon": "blockTypeFileIcon-3O58H",
	"blockTypeFileButton": "blockTypeFileButton-3l-kf",
	"blockTypeFileInput": "blockTypeFileInput-S2ed9"
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(4);

var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _antd = __webpack_require__(5);

var _styles = _interopRequireDefault(__webpack_require__(78));

var _freeSolidSvgIcons = __webpack_require__(10);

var _reactFontawesome = __webpack_require__(9);

var _lessons = __webpack_require__(6);

var _AudioPlayer = _interopRequireDefault(__webpack_require__(80));

var BlockTypeAudio = function BlockTypeAudio(_ref) {
  var src = _ref.src,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(src),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      srcValue = _useState2[0],
      setSrcValue = _useState2[1];

  var timerRef = (0, _react.useRef)(-1);
  var onApplyValue = (0, _react.useCallback)(function (value) {
    if (srcValue) {
      onChange(new _lessons.LessonBlockAudioData(srcValue));
    }
  }, [onChange, srcValue]);
  (0, _react.useEffect)(function () {
    timerRef && timerRef.current && window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(function () {
      return srcValue && onChange(new _lessons.LessonBlockAudioData(srcValue));
    }, 300);
  }, [srcValue, timerRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeAudioContainer
  }, src ? /*#__PURE__*/_react.default.createElement(_AudioPlayer.default, {
    src: src
  }) : null, /*#__PURE__*/_react.default.createElement("p", null), /*#__PURE__*/_react.default.createElement("div", {
    className: _styles.default.blockTypeAudioInput
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0430\u0443\u0434\u0438\u043E \u0444\u0430\u0439\u043B...",
    value: srcValue,
    onChange: function onChange(evt) {
      return setSrcValue(evt.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement(_antd.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCheck
    }),
    onClick: function onClick() {
      return onApplyValue(srcValue);
    }
  })));
};

var _default = BlockTypeAudio;
exports.default = _default;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(79);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".blockTypeAudioContainer-28sBK{width:100%;max-width:560px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.blockTypeAudioContainer-28sBK .blockTypeAudioInput-2jk8k{padding-top:12px;padding-bottom:12px;display:-webkit-box;display:-ms-flexbox;display:flex;width:560px}\n", ""]);

// Exports
exports.locals = {
	"blockTypeAudioContainer": "blockTypeAudioContainer-28sBK",
	"blockTypeAudioInput": "blockTypeAudioInput-2jk8k"
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _lazy = _interopRequireDefault(__webpack_require__(81));

var AudioPlayer = function AudioPlayer(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/_react.default.createElement(_lazy.default, {
    url: src,
    width: "460px",
    height: "50px",
    playing: false,
    controls: true
  });
};

var _default = AudioPlayer;
exports.default = _default;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-player/lazy");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lessonAddBlock = lessonAddBlock;
exports.lessonRemoveBlock = lessonRemoveBlock;
exports.lessonUpdateBlock = lessonUpdateBlock;
exports.lessonMoveBlock = lessonMoveBlock;
exports.lessonReset = lessonReset;

var _types = __webpack_require__(7);

function lessonAddBlock(type) {
  return {
    type: _types.LessonsActions.LESSON_ADD_BLOCK,
    payload: {
      type: type
    }
  };
}

function lessonRemoveBlock(idx) {
  return {
    type: _types.LessonsActions.LESSON_REMOVE_BLOCK,
    payload: {
      idx: idx
    }
  };
}

function lessonUpdateBlock(idx, data) {
  return {
    type: _types.LessonsActions.LESSON_UPDATE_BLOCK,
    payload: {
      idx: idx,
      data: data
    }
  };
}

function lessonMoveBlock(idx, position) {
  return {
    type: _types.LessonsActions.LESSON_MOVE_BLOCK,
    payload: {
      idx: idx,
      position: position
    }
  };
}

function lessonReset() {
  return {
    type: _types.LessonsActions.LESSON_RESET
  };
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(84);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, ".app-36tG7{height:100%}\n", ""]);

// Exports
exports.locals = {
	"app": "app-36tG7"
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(86);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "", ""]);



/***/ })
/******/ ]);