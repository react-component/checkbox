webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(6);
	var Checkbox = __webpack_require__(7);
	
	function onChange(e) {
	  console.log('checkbox checked:' + e.target.checked);
	}
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      disabled: false
	    };
	  },
	  toggle: function toggle() {
	    this.setState({
	      disabled: !this.state.disabled
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { margin: 20 } },
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'label',
	            null,
	            React.createElement(Checkbox, { onChange: onChange,
	              disabled: this.state.disabled }),
	            '  rc-checkbox'
	          ),
	          '  '
	        ),
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'label',
	            null,
	            React.createElement('input', { type: 'checkbox', onChange: onChange,
	              disabled: this.state.disabled }),
	            '  native'
	          ),
	          '  '
	        )
	      ),
	      React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'label',
	            null,
	            React.createElement(Checkbox, { checked: true, onChange: onChange,
	              disabled: this.state.disabled }),
	            '  rc-checkbox'
	          ),
	          '  '
	        ),
	        React.createElement(
	          'p',
	          null,
	          React.createElement(
	            'label',
	            null,
	            React.createElement('input', { type: 'checkbox', checked: true, onChange: onChange,
	              disabled: this.state.disabled }),
	            '  native'
	          ),
	          '  '
	        )
	      ),
	      React.createElement(
	        'button',
	        { onClick: this.toggle },
	        'toggle disabled'
	      )
	    );
	  }
	});
	
	React.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/yiminghe/code/react-components/checkbox/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/checkbox/assets/index.css", function() {
			var newContent = require("!!/Users/yiminghe/code/react-components/checkbox/node_modules/rc-tools/node_modules/css-loader/index.js!/Users/yiminghe/code/react-components/checkbox/assets/index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	exports.push([module.id, "/* 一般状态 */\n.rc-checkbox {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  position: relative;\n}\n.rc-checkbox:hover .rc-checkbox-inner {\n  border-color: #bcbcbc;\n}\n.rc-checkbox-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 3px;\n  border-color: #d9d9d9;\n  background-color: #ffffff;\n  transition: border-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55), background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);\n}\n.rc-checkbox-inner:after {\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  display: table;\n  width: 5px;\n  height: 8px;\n  border: 2px solid #ffffff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);\n          animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-name: amCheckboxOut;\n          animation-name: amCheckboxOut;\n}\n.rc-checkbox-input {\n  position: absolute;\n  left: 0;\n  z-index: 9999;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n/* 选中状态 */\n.rc-checkbox-checked:hover .rc-checkbox-inner {\n  border-color: #3dbcf6;\n}\n.rc-checkbox-checked .rc-checkbox-inner {\n  border-color: #3dbcf6;\n  background-color: #3dbcf6;\n}\n.rc-checkbox-checked .rc-checkbox-inner:after {\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n  position: absolute;\n  left: 4px;\n  top: 1px;\n  display: table;\n  width: 5px;\n  height: 8px;\n  border: 2px solid #ffffff;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  -webkit-animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);\n          animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-name: amCheckboxOut;\n          animation-name: amCheckboxOut;\n}\n.rc-checkbox-disabled.rc-checkbox-checked:hover .rc-checkbox-inner {\n  border-color: #d9d9d9;\n}\n.rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner {\n  background-color: #f3f3f3;\n  border-color: #d9d9d9;\n}\n.rc-checkbox-disabled.rc-checkbox-checked .rc-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: #cccccc;\n}\n.rc-checkbox-disabled:hover .rc-checkbox-inner {\n  border-color: #d9d9d9;\n}\n.rc-checkbox-disabled .rc-checkbox-inner {\n  border-color: #d9d9d9;\n  background-color: #f3f3f3;\n}\n.rc-checkbox-disabled .rc-checkbox-inner:after {\n  -webkit-animation-name: none;\n          animation-name: none;\n  border-color: #f3f3f3;\n}\n.rc-checkbox-disabled .rc-checkbox-inner-input {\n  cursor: default;\n}\n@-webkit-keyframes amCheckboxIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0) rotate(45deg);\n            transform: scale(0, 0) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1) rotate(45deg);\n            transform: scale(1, 1) rotate(45deg);\n  }\n}\n@keyframes amCheckboxIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(0, 0) rotate(45deg);\n            transform: scale(0, 0) rotate(45deg);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transform: scale(1, 1) rotate(45deg);\n            transform: scale(1, 1) rotate(45deg);\n  }\n}\n@-webkit-keyframes amCheckboxOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes amCheckboxOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n", ""]);

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var React = __webpack_require__(6);
	var classnames = __webpack_require__(9);
	
	function noop() {}
	
	var Checkbox = React.createClass({
	  displayName: 'Checkbox',
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var checked = false;
	    if ('checked' in props) {
	      checked = !!props.checked;
	    } else {
	      checked = !!props.defaultChecked;
	    }
	    return {
	      checked: checked
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-checkbox',
	      style: {},
	      className: '',
	      defaultChecked: false,
	      onChange: noop
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('checked' in nextProps) {
	      this.setState({
	        checked: !!nextProps.checked
	      });
	    }
	  },
	  render: function render() {
	    var _classnames;
	
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	    return React.createElement('span', { className: classnames((_classnames = {}, _defineProperty(_classnames, props.className, !!props.className), _defineProperty(_classnames, prefixCls, 1), _defineProperty(_classnames, prefixCls + '-checked', this.state.checked), _defineProperty(_classnames, prefixCls + '-disabled', props.disabled), _classnames)),
	      style: props.style
	    }, React.createElement('span', { className: prefixCls + '-inner' }), React.createElement('input', { type: 'checkbox',
	      className: prefixCls + '-input',
	      name: props.name,
	      disabled: props.disabled,
	      checked: this.state.checked,
	      onChange: this.handleChange
	    }));
	  },
	  handleChange: function handleChange(e) {
	    var checked = e.target.checked;
	    if (!('checked' in this.props)) {
	      this.setState({
	        checked: checked
	      });
	    }
	    this.props.onChange(e);
	  }
	});
	
	module.exports = Checkbox;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ }
]);
//# sourceMappingURL=simple.js.map