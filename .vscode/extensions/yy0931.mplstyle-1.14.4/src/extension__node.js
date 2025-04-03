"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/json5/lib/unicode.js
var require_unicode = __commonJS({
  "node_modules/json5/lib/unicode.js"(exports, module2) {
    module2.exports.Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
    module2.exports.ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
    module2.exports.ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
  }
});

// node_modules/json5/lib/util.js
var require_util = __commonJS({
  "node_modules/json5/lib/util.js"(exports, module2) {
    var unicode = require_unicode();
    module2.exports = {
      isSpaceSeparator(c) {
        return typeof c === "string" && unicode.Space_Separator.test(c);
      },
      isIdStartChar(c) {
        return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "$" || c === "_" || unicode.ID_Start.test(c));
      },
      isIdContinueChar(c) {
        return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "$" || c === "_" || c === "\u200C" || c === "\u200D" || unicode.ID_Continue.test(c));
      },
      isDigit(c) {
        return typeof c === "string" && /[0-9]/.test(c);
      },
      isHexDigit(c) {
        return typeof c === "string" && /[0-9A-Fa-f]/.test(c);
      }
    };
  }
});

// node_modules/json5/lib/parse.js
var require_parse = __commonJS({
  "node_modules/json5/lib/parse.js"(exports, module2) {
    var util = require_util();
    var source;
    var parseState;
    var stack;
    var pos;
    var line;
    var column;
    var token;
    var key;
    var root;
    module2.exports = function parse(text, reviver) {
      source = String(text);
      parseState = "start";
      stack = [];
      pos = 0;
      line = 1;
      column = 0;
      token = void 0;
      key = void 0;
      root = void 0;
      do {
        token = lex();
        parseStates[parseState]();
      } while (token.type !== "eof");
      if (typeof reviver === "function") {
        return internalize({ "": root }, "", reviver);
      }
      return root;
    };
    function internalize(holder, name, reviver) {
      const value = holder[name];
      if (value != null && typeof value === "object") {
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const key2 = String(i);
            const replacement = internalize(value, key2, reviver);
            if (replacement === void 0) {
              delete value[key2];
            } else {
              Object.defineProperty(value, key2, {
                value: replacement,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
          }
        } else {
          for (const key2 in value) {
            const replacement = internalize(value, key2, reviver);
            if (replacement === void 0) {
              delete value[key2];
            } else {
              Object.defineProperty(value, key2, {
                value: replacement,
                writable: true,
                enumerable: true,
                configurable: true
              });
            }
          }
        }
      }
      return reviver.call(holder, name, value);
    }
    var lexState;
    var buffer;
    var doubleQuote;
    var sign;
    var c;
    function lex() {
      lexState = "default";
      buffer = "";
      doubleQuote = false;
      sign = 1;
      for (; ; ) {
        c = peek();
        const token2 = lexStates[lexState]();
        if (token2) {
          return token2;
        }
      }
    }
    function peek() {
      if (source[pos]) {
        return String.fromCodePoint(source.codePointAt(pos));
      }
    }
    function read() {
      const c2 = peek();
      if (c2 === "\n") {
        line++;
        column = 0;
      } else if (c2) {
        column += c2.length;
      } else {
        column++;
      }
      if (c2) {
        pos += c2.length;
      }
      return c2;
    }
    var lexStates = {
      default() {
        switch (c) {
          case "	":
          case "\v":
          case "\f":
          case " ":
          case "\xA0":
          case "\uFEFF":
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
            read();
            return;
          case "/":
            read();
            lexState = "comment";
            return;
          case void 0:
            read();
            return newToken("eof");
        }
        if (util.isSpaceSeparator(c)) {
          read();
          return;
        }
        return lexStates[parseState]();
      },
      comment() {
        switch (c) {
          case "*":
            read();
            lexState = "multiLineComment";
            return;
          case "/":
            read();
            lexState = "singleLineComment";
            return;
        }
        throw invalidChar(read());
      },
      multiLineComment() {
        switch (c) {
          case "*":
            read();
            lexState = "multiLineCommentAsterisk";
            return;
          case void 0:
            throw invalidChar(read());
        }
        read();
      },
      multiLineCommentAsterisk() {
        switch (c) {
          case "*":
            read();
            return;
          case "/":
            read();
            lexState = "default";
            return;
          case void 0:
            throw invalidChar(read());
        }
        read();
        lexState = "multiLineComment";
      },
      singleLineComment() {
        switch (c) {
          case "\n":
          case "\r":
          case "\u2028":
          case "\u2029":
            read();
            lexState = "default";
            return;
          case void 0:
            read();
            return newToken("eof");
        }
        read();
      },
      value() {
        switch (c) {
          case "{":
          case "[":
            return newToken("punctuator", read());
          case "n":
            read();
            literal("ull");
            return newToken("null", null);
          case "t":
            read();
            literal("rue");
            return newToken("boolean", true);
          case "f":
            read();
            literal("alse");
            return newToken("boolean", false);
          case "-":
          case "+":
            if (read() === "-") {
              sign = -1;
            }
            lexState = "sign";
            return;
          case ".":
            buffer = read();
            lexState = "decimalPointLeading";
            return;
          case "0":
            buffer = read();
            lexState = "zero";
            return;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            buffer = read();
            lexState = "decimalInteger";
            return;
          case "I":
            read();
            literal("nfinity");
            return newToken("numeric", Infinity);
          case "N":
            read();
            literal("aN");
            return newToken("numeric", NaN);
          case '"':
          case "'":
            doubleQuote = read() === '"';
            buffer = "";
            lexState = "string";
            return;
        }
        throw invalidChar(read());
      },
      identifierNameStartEscape() {
        if (c !== "u") {
          throw invalidChar(read());
        }
        read();
        const u = unicodeEscape();
        switch (u) {
          case "$":
          case "_":
            break;
          default:
            if (!util.isIdStartChar(u)) {
              throw invalidIdentifier();
            }
            break;
        }
        buffer += u;
        lexState = "identifierName";
      },
      identifierName() {
        switch (c) {
          case "$":
          case "_":
          case "\u200C":
          case "\u200D":
            buffer += read();
            return;
          case "\\":
            read();
            lexState = "identifierNameEscape";
            return;
        }
        if (util.isIdContinueChar(c)) {
          buffer += read();
          return;
        }
        return newToken("identifier", buffer);
      },
      identifierNameEscape() {
        if (c !== "u") {
          throw invalidChar(read());
        }
        read();
        const u = unicodeEscape();
        switch (u) {
          case "$":
          case "_":
          case "\u200C":
          case "\u200D":
            break;
          default:
            if (!util.isIdContinueChar(u)) {
              throw invalidIdentifier();
            }
            break;
        }
        buffer += u;
        lexState = "identifierName";
      },
      sign() {
        switch (c) {
          case ".":
            buffer = read();
            lexState = "decimalPointLeading";
            return;
          case "0":
            buffer = read();
            lexState = "zero";
            return;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            buffer = read();
            lexState = "decimalInteger";
            return;
          case "I":
            read();
            literal("nfinity");
            return newToken("numeric", sign * Infinity);
          case "N":
            read();
            literal("aN");
            return newToken("numeric", NaN);
        }
        throw invalidChar(read());
      },
      zero() {
        switch (c) {
          case ".":
            buffer += read();
            lexState = "decimalPoint";
            return;
          case "e":
          case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
          case "x":
          case "X":
            buffer += read();
            lexState = "hexadecimal";
            return;
        }
        return newToken("numeric", sign * 0);
      },
      decimalInteger() {
        switch (c) {
          case ".":
            buffer += read();
            lexState = "decimalPoint";
            return;
          case "e":
          case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
        }
        if (util.isDigit(c)) {
          buffer += read();
          return;
        }
        return newToken("numeric", sign * Number(buffer));
      },
      decimalPointLeading() {
        if (util.isDigit(c)) {
          buffer += read();
          lexState = "decimalFraction";
          return;
        }
        throw invalidChar(read());
      },
      decimalPoint() {
        switch (c) {
          case "e":
          case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
        }
        if (util.isDigit(c)) {
          buffer += read();
          lexState = "decimalFraction";
          return;
        }
        return newToken("numeric", sign * Number(buffer));
      },
      decimalFraction() {
        switch (c) {
          case "e":
          case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
        }
        if (util.isDigit(c)) {
          buffer += read();
          return;
        }
        return newToken("numeric", sign * Number(buffer));
      },
      decimalExponent() {
        switch (c) {
          case "+":
          case "-":
            buffer += read();
            lexState = "decimalExponentSign";
            return;
        }
        if (util.isDigit(c)) {
          buffer += read();
          lexState = "decimalExponentInteger";
          return;
        }
        throw invalidChar(read());
      },
      decimalExponentSign() {
        if (util.isDigit(c)) {
          buffer += read();
          lexState = "decimalExponentInteger";
          return;
        }
        throw invalidChar(read());
      },
      decimalExponentInteger() {
        if (util.isDigit(c)) {
          buffer += read();
          return;
        }
        return newToken("numeric", sign * Number(buffer));
      },
      hexadecimal() {
        if (util.isHexDigit(c)) {
          buffer += read();
          lexState = "hexadecimalInteger";
          return;
        }
        throw invalidChar(read());
      },
      hexadecimalInteger() {
        if (util.isHexDigit(c)) {
          buffer += read();
          return;
        }
        return newToken("numeric", sign * Number(buffer));
      },
      string() {
        switch (c) {
          case "\\":
            read();
            buffer += escape();
            return;
          case '"':
            if (doubleQuote) {
              read();
              return newToken("string", buffer);
            }
            buffer += read();
            return;
          case "'":
            if (!doubleQuote) {
              read();
              return newToken("string", buffer);
            }
            buffer += read();
            return;
          case "\n":
          case "\r":
            throw invalidChar(read());
          case "\u2028":
          case "\u2029":
            separatorChar(c);
            break;
          case void 0:
            throw invalidChar(read());
        }
        buffer += read();
      },
      start() {
        switch (c) {
          case "{":
          case "[":
            return newToken("punctuator", read());
        }
        lexState = "value";
      },
      beforePropertyName() {
        switch (c) {
          case "$":
          case "_":
            buffer = read();
            lexState = "identifierName";
            return;
          case "\\":
            read();
            lexState = "identifierNameStartEscape";
            return;
          case "}":
            return newToken("punctuator", read());
          case '"':
          case "'":
            doubleQuote = read() === '"';
            lexState = "string";
            return;
        }
        if (util.isIdStartChar(c)) {
          buffer += read();
          lexState = "identifierName";
          return;
        }
        throw invalidChar(read());
      },
      afterPropertyName() {
        if (c === ":") {
          return newToken("punctuator", read());
        }
        throw invalidChar(read());
      },
      beforePropertyValue() {
        lexState = "value";
      },
      afterPropertyValue() {
        switch (c) {
          case ",":
          case "}":
            return newToken("punctuator", read());
        }
        throw invalidChar(read());
      },
      beforeArrayValue() {
        if (c === "]") {
          return newToken("punctuator", read());
        }
        lexState = "value";
      },
      afterArrayValue() {
        switch (c) {
          case ",":
          case "]":
            return newToken("punctuator", read());
        }
        throw invalidChar(read());
      },
      end() {
        throw invalidChar(read());
      }
    };
    function newToken(type, value) {
      return {
        type,
        value,
        line,
        column
      };
    }
    function literal(s) {
      for (const c2 of s) {
        const p = peek();
        if (p !== c2) {
          throw invalidChar(read());
        }
        read();
      }
    }
    function escape() {
      const c2 = peek();
      switch (c2) {
        case "b":
          read();
          return "\b";
        case "f":
          read();
          return "\f";
        case "n":
          read();
          return "\n";
        case "r":
          read();
          return "\r";
        case "t":
          read();
          return "	";
        case "v":
          read();
          return "\v";
        case "0":
          read();
          if (util.isDigit(peek())) {
            throw invalidChar(read());
          }
          return "\0";
        case "x":
          read();
          return hexEscape();
        case "u":
          read();
          return unicodeEscape();
        case "\n":
        case "\u2028":
        case "\u2029":
          read();
          return "";
        case "\r":
          read();
          if (peek() === "\n") {
            read();
          }
          return "";
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          throw invalidChar(read());
        case void 0:
          throw invalidChar(read());
      }
      return read();
    }
    function hexEscape() {
      let buffer2 = "";
      let c2 = peek();
      if (!util.isHexDigit(c2)) {
        throw invalidChar(read());
      }
      buffer2 += read();
      c2 = peek();
      if (!util.isHexDigit(c2)) {
        throw invalidChar(read());
      }
      buffer2 += read();
      return String.fromCodePoint(parseInt(buffer2, 16));
    }
    function unicodeEscape() {
      let buffer2 = "";
      let count = 4;
      while (count-- > 0) {
        const c2 = peek();
        if (!util.isHexDigit(c2)) {
          throw invalidChar(read());
        }
        buffer2 += read();
      }
      return String.fromCodePoint(parseInt(buffer2, 16));
    }
    var parseStates = {
      start() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        push();
      },
      beforePropertyName() {
        switch (token.type) {
          case "identifier":
          case "string":
            key = token.value;
            parseState = "afterPropertyName";
            return;
          case "punctuator":
            pop();
            return;
          case "eof":
            throw invalidEOF();
        }
      },
      afterPropertyName() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        parseState = "beforePropertyValue";
      },
      beforePropertyValue() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        push();
      },
      beforeArrayValue() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        if (token.type === "punctuator" && token.value === "]") {
          pop();
          return;
        }
        push();
      },
      afterPropertyValue() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        switch (token.value) {
          case ",":
            parseState = "beforePropertyName";
            return;
          case "}":
            pop();
        }
      },
      afterArrayValue() {
        if (token.type === "eof") {
          throw invalidEOF();
        }
        switch (token.value) {
          case ",":
            parseState = "beforeArrayValue";
            return;
          case "]":
            pop();
        }
      },
      end() {
      }
    };
    function push() {
      let value;
      switch (token.type) {
        case "punctuator":
          switch (token.value) {
            case "{":
              value = {};
              break;
            case "[":
              value = [];
              break;
          }
          break;
        case "null":
        case "boolean":
        case "numeric":
        case "string":
          value = token.value;
          break;
      }
      if (root === void 0) {
        root = value;
      } else {
        const parent = stack[stack.length - 1];
        if (Array.isArray(parent)) {
          parent.push(value);
        } else {
          Object.defineProperty(parent, key, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
      if (value !== null && typeof value === "object") {
        stack.push(value);
        if (Array.isArray(value)) {
          parseState = "beforeArrayValue";
        } else {
          parseState = "beforePropertyName";
        }
      } else {
        const current = stack[stack.length - 1];
        if (current == null) {
          parseState = "end";
        } else if (Array.isArray(current)) {
          parseState = "afterArrayValue";
        } else {
          parseState = "afterPropertyValue";
        }
      }
    }
    function pop() {
      stack.pop();
      const current = stack[stack.length - 1];
      if (current == null) {
        parseState = "end";
      } else if (Array.isArray(current)) {
        parseState = "afterArrayValue";
      } else {
        parseState = "afterPropertyValue";
      }
    }
    function invalidChar(c2) {
      if (c2 === void 0) {
        return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
      }
      return syntaxError(`JSON5: invalid character '${formatChar(c2)}' at ${line}:${column}`);
    }
    function invalidEOF() {
      return syntaxError(`JSON5: invalid end of input at ${line}:${column}`);
    }
    function invalidIdentifier() {
      column -= 5;
      return syntaxError(`JSON5: invalid identifier character at ${line}:${column}`);
    }
    function separatorChar(c2) {
      console.warn(`JSON5: '${formatChar(c2)}' in strings is not valid ECMAScript; consider escaping`);
    }
    function formatChar(c2) {
      const replacements = {
        "'": "\\'",
        '"': '\\"',
        "\\": "\\\\",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "	": "\\t",
        "\v": "\\v",
        "\0": "\\0",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      if (replacements[c2]) {
        return replacements[c2];
      }
      if (c2 < " ") {
        const hexString = c2.charCodeAt(0).toString(16);
        return "\\x" + ("00" + hexString).substring(hexString.length);
      }
      return c2;
    }
    function syntaxError(message) {
      const err = new SyntaxError(message);
      err.lineNumber = line;
      err.columnNumber = column;
      return err;
    }
  }
});

// node_modules/json5/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/json5/lib/stringify.js"(exports, module2) {
    var util = require_util();
    module2.exports = function stringify(value, replacer, space) {
      const stack = [];
      let indent = "";
      let propertyList;
      let replacerFunc;
      let gap = "";
      let quote;
      if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
        space = replacer.space;
        quote = replacer.quote;
        replacer = replacer.replacer;
      }
      if (typeof replacer === "function") {
        replacerFunc = replacer;
      } else if (Array.isArray(replacer)) {
        propertyList = [];
        for (const v of replacer) {
          let item;
          if (typeof v === "string") {
            item = v;
          } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
            item = String(v);
          }
          if (item !== void 0 && propertyList.indexOf(item) < 0) {
            propertyList.push(item);
          }
        }
      }
      if (space instanceof Number) {
        space = Number(space);
      } else if (space instanceof String) {
        space = String(space);
      }
      if (typeof space === "number") {
        if (space > 0) {
          space = Math.min(10, Math.floor(space));
          gap = "          ".substr(0, space);
        }
      } else if (typeof space === "string") {
        gap = space.substr(0, 10);
      }
      return serializeProperty("", { "": value });
      function serializeProperty(key, holder) {
        let value2 = holder[key];
        if (value2 != null) {
          if (typeof value2.toJSON5 === "function") {
            value2 = value2.toJSON5(key);
          } else if (typeof value2.toJSON === "function") {
            value2 = value2.toJSON(key);
          }
        }
        if (replacerFunc) {
          value2 = replacerFunc.call(holder, key, value2);
        }
        if (value2 instanceof Number) {
          value2 = Number(value2);
        } else if (value2 instanceof String) {
          value2 = String(value2);
        } else if (value2 instanceof Boolean) {
          value2 = value2.valueOf();
        }
        switch (value2) {
          case null:
            return "null";
          case true:
            return "true";
          case false:
            return "false";
        }
        if (typeof value2 === "string") {
          return quoteString(value2, false);
        }
        if (typeof value2 === "number") {
          return String(value2);
        }
        if (typeof value2 === "object") {
          return Array.isArray(value2) ? serializeArray(value2) : serializeObject(value2);
        }
        return void 0;
      }
      function quoteString(value2) {
        const quotes = {
          "'": 0.1,
          '"': 0.2
        };
        const replacements = {
          "'": "\\'",
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "	": "\\t",
          "\v": "\\v",
          "\0": "\\0",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        let product = "";
        for (let i = 0; i < value2.length; i++) {
          const c = value2[i];
          switch (c) {
            case "'":
            case '"':
              quotes[c]++;
              product += c;
              continue;
            case "\0":
              if (util.isDigit(value2[i + 1])) {
                product += "\\x00";
                continue;
              }
          }
          if (replacements[c]) {
            product += replacements[c];
            continue;
          }
          if (c < " ") {
            let hexString = c.charCodeAt(0).toString(16);
            product += "\\x" + ("00" + hexString).substring(hexString.length);
            continue;
          }
          product += c;
        }
        const quoteChar = quote || Object.keys(quotes).reduce((a, b) => quotes[a] < quotes[b] ? a : b);
        product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
        return quoteChar + product + quoteChar;
      }
      function serializeObject(value2) {
        if (stack.indexOf(value2) >= 0) {
          throw TypeError("Converting circular structure to JSON5");
        }
        stack.push(value2);
        let stepback = indent;
        indent = indent + gap;
        let keys = propertyList || Object.keys(value2);
        let partial = [];
        for (const key of keys) {
          const propertyString = serializeProperty(key, value2);
          if (propertyString !== void 0) {
            let member = serializeKey(key) + ":";
            if (gap !== "") {
              member += " ";
            }
            member += propertyString;
            partial.push(member);
          }
        }
        let final;
        if (partial.length === 0) {
          final = "{}";
        } else {
          let properties;
          if (gap === "") {
            properties = partial.join(",");
            final = "{" + properties + "}";
          } else {
            let separator = ",\n" + indent;
            properties = partial.join(separator);
            final = "{\n" + indent + properties + ",\n" + stepback + "}";
          }
        }
        stack.pop();
        indent = stepback;
        return final;
      }
      function serializeKey(key) {
        if (key.length === 0) {
          return quoteString(key, true);
        }
        const firstChar = String.fromCodePoint(key.codePointAt(0));
        if (!util.isIdStartChar(firstChar)) {
          return quoteString(key, true);
        }
        for (let i = firstChar.length; i < key.length; i++) {
          if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
            return quoteString(key, true);
          }
        }
        return key;
      }
      function serializeArray(value2) {
        if (stack.indexOf(value2) >= 0) {
          throw TypeError("Converting circular structure to JSON5");
        }
        stack.push(value2);
        let stepback = indent;
        indent = indent + gap;
        let partial = [];
        for (let i = 0; i < value2.length; i++) {
          const propertyString = serializeProperty(String(i), value2);
          partial.push(propertyString !== void 0 ? propertyString : "null");
        }
        let final;
        if (partial.length === 0) {
          final = "[]";
        } else {
          if (gap === "") {
            let properties = partial.join(",");
            final = "[" + properties + "]";
          } else {
            let separator = ",\n" + indent;
            let properties = partial.join(separator);
            final = "[\n" + indent + properties + ",\n" + stepback + "]";
          }
        }
        stack.pop();
        indent = stepback;
        return final;
      }
    };
  }
});

// node_modules/json5/lib/index.js
var require_lib = __commonJS({
  "node_modules/json5/lib/index.js"(exports, module2) {
    var parse = require_parse();
    var stringify = require_stringify();
    var JSON5 = {
      parse,
      stringify
    };
    module2.exports = JSON5;
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  _testing: () => _testing,
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var import_vscode2 = __toESM(require("vscode"));

// src/logger.ts
var import_vscode = __toESM(require("vscode"));
var Logger = class {
  #outputChannel;
  constructor() {
    this.#outputChannel = import_vscode.default.window.createOutputChannel("mplstyle");
  }
  dispose() {
    this.#outputChannel.dispose();
  }
  async try(f) {
    try {
      return await f();
    } catch (err) {
      if (err instanceof Error && err.stack !== void 0) {
        this.error(err.stack);
      } else {
        this.error(err + "");
      }
    }
  }
  trySync(f) {
    try {
      const out = f();
      if (out instanceof Promise) {
        this.warning(`The function passed to trySync() returned a Promise`);
      }
      return out;
    } catch (err) {
      this.error(err instanceof Error ? err : err + "");
    }
  }
  info(message) {
    this.#outputChannel.appendLine(`[Info] ${message}`);
  }
  warning(message) {
    this.#outputChannel.appendLine(`[Warning]${message}`);
  }
  error(message) {
    if (message instanceof Error && message.stack !== void 0) {
      message = message.stack;
    }
    this.#outputChannel.appendLine(`[Error] ${message}`);
    import_vscode.default.window.showErrorMessage(`mplstyle: ${message}`);
  }
};

// src/mplstyle-parser.ts
var import_json5 = __toESM(require_lib());
var parseAll = (content) => {
  const rc = /* @__PURE__ */ new Map();
  const errors = [];
  for (const [lineNumber, line] of content.replaceAll("\r", "").split("\n").entries()) {
    const pair = parseLine(line);
    if (pair === null) {
      continue;
    }
    if (pair.value === null) {
      errors.push({ error: "Missing colon", severity: "Error", line: lineNumber, columnStart: 0, columnEnd: line.length, key: pair.key.text });
    }
    const param = rc.get(pair.key.text);
    if (param !== void 0) {
      errors.push({ error: `duplicate key "${pair.key.text}"`, severity: "Error", line: lineNumber, columnStart: pair.key.start, columnEnd: pair.key.end, key: pair.key.text });
      param.push({ pair, line: lineNumber });
    } else {
      rc.set(pair.key.text, [{ pair, line: lineNumber }]);
    }
  }
  return { rc, errors };
};
var findCommentStart = (s) => {
  let insideDoubleQuote = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '"') {
      insideDoubleQuote = !insideDoubleQuote;
    }
    if (!insideDoubleQuote && s[i] === "#") {
      return i;
    }
  }
  return null;
};
var countLeadingSpaces = (s) => s.trim() === "" ? 0 : s.length - s.trimStart().length;
var parseLine = (line) => {
  const commentStart = findCommentStart(line);
  line = commentStart === null ? line : line.slice(0, commentStart);
  if (line.trimStart() === "") {
    return null;
  }
  const colon = line.indexOf(":");
  if (colon === -1) {
    const keyStart2 = countLeadingSpaces(line);
    const keyEnd2 = line.trimEnd().length;
    return { key: { text: line.slice(keyStart2, keyEnd2), start: keyStart2, end: keyEnd2 }, value: null, commentStart };
  }
  const keyStart = countLeadingSpaces(line.slice(0, colon));
  const keyEnd = line.slice(0, colon).trimEnd().length;
  let valueStart = colon + 1 + countLeadingSpaces(line.slice(colon + 1));
  let valueEnd = line.trimEnd().length;
  if (line[valueStart] === '"' && line[valueEnd - 1] === '"' && valueStart !== valueEnd - 1) {
    valueStart += 1;
    valueEnd -= 1;
  }
  return {
    key: { text: line.slice(keyStart, keyEnd), start: keyStart, end: keyEnd },
    value: { text: line.slice(valueStart, valueEnd), start: valueStart, end: valueEnd },
    commentStart
  };
};
var findRcParamsInPythonFiles = (source) => {
  const result = [];
  for (const matches of source.matchAll(/(?<=(?:matplotlib\.|mpl\.|matplotlib\.pyplot\.|plt\.|[^.]|^)\s*rcParams\s*\[\s*['"])(?<key>[^'"]*)/g)) {
    if (matches.index !== void 0 && matches.groups?.key !== void 0) {
      result.push({ index: matches.index, key: matches.groups.key });
    }
  }
  return result;
};
var parseColor = (value, colorMap) => {
  if (value.toLowerCase() === "none") {
    return [0, 0, 0, 0];
  }
  const color = colorMap.get(value);
  if (color !== void 0) {
    return [...color];
  }
  if (/^[a-f0-9]{6}$/i.test(value)) {
    return [
      parseInt(value.slice(0, 2), 16) / 255,
      parseInt(value.slice(2, 4), 16) / 255,
      parseInt(value.slice(4, 6), 16) / 255,
      1
    ];
  }
  if (/^[a-f0-9]{8}$/i.test(value)) {
    return [
      parseInt(value.slice(0, 2), 16) / 255,
      parseInt(value.slice(2, 4), 16) / 255,
      parseInt(value.slice(4, 6), 16) / 255,
      parseInt(value.slice(6, 8), 16) / 255
    ];
  }
  if (/^#[a-f0-9]{6}$/i.test(value)) {
    return [
      parseInt(value.slice(1, 3), 16) / 255,
      parseInt(value.slice(3, 5), 16) / 255,
      parseInt(value.slice(5, 7), 16) / 255,
      1
    ];
  }
  if (/^#[a-f0-9]{8}$/i.test(value)) {
    return [
      parseInt(value.slice(1, 3), 16) / 255,
      parseInt(value.slice(3, 5), 16) / 255,
      parseInt(value.slice(5, 7), 16) / 255,
      parseInt(value.slice(7, 9), 16) / 255
    ];
  }
  const x = (() => {
    try {
      return import_json5.default.parse(value);
    } catch (err) {
      return null;
    }
  })();
  if (typeof x === "number") {
    return [x, x, x, 1];
  }
  return null;
};

// src/rcsetup-parser.ts
var import_json52 = __toESM(require_lib());

// src/sample-matplotlibrc-parser.ts
var sample_matplotlibrc_parser_default = (content) => {
  const entries = /* @__PURE__ */ new Map();
  let lastKey = null;
  let sectionHeader = null;
  let sectionHeaderBuf = null;
  let subheading = { body: [], target: [] };
  const lines = content.replaceAll("\r", "").split("\n");
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (line.startsWith("#")) {
      line = line.slice(1);
    }
    if (/^#\w/.test(line)) {
      line = line.slice(1);
    }
    if (line.startsWith("# *******")) {
      continue;
    }
    if (sectionHeaderBuf === null) {
      if (line.startsWith("# * ")) {
        sectionHeaderBuf = { title: line.slice("# * ".length, -1).trim(), body: "" };
        subheading = { body: [], target: [] };
      } else {
        if (line.trim() === "") {
          subheading = { body: [], target: [] };
          continue;
        }
        if (/^# /.test(line)) {
          if (subheading.target.length > 0) {
            subheading = { body: [], target: [] };
          }
          subheading.body.push(line.slice("# ".length));
          continue;
        }
        if (/^ +#/.test(line) && lastKey !== null) {
          const lastItem = entries.get(lastKey);
          if (lastItem !== void 0) {
            lastItem.comment[0].push(line.split("#", 2)[1].trimStart());
          }
          continue;
        }
        if (/^[# ]/.test(line)) {
          subheading = { body: [], target: [] };
          continue;
        }
        const pair = parseLine(line);
        if (pair === null) {
          continue;
        }
        if (pair.value === null) {
          console.log(`Parse error: ${line}`);
          continue;
        }
        const comment = [[], () => [], []];
        if (pair.commentStart !== null) {
          comment[0] = [line.slice(pair.commentStart + 1).trim()];
        }
        const subheading2 = subheading;
        comment[1] = () => subheading2.body.length === 0 ? [] : [...subheading2.body, ...subheading2.target.length <= 1 ? [] : ["", ...subheading2.target.map((v) => `- ${v}`)]];
        subheading.target.push(pair.key.text);
        if (sectionHeader !== null) {
          comment[2] = [`#### ${sectionHeader.title}`, sectionHeader.body];
        }
        entries.set(pair.key.text, {
          exampleValue: pair.value.text,
          comment
        });
        lastKey = pair.key.text;
      }
    } else {
      if (line.startsWith("# ")) {
        sectionHeaderBuf.body += `${line.slice("# ".length)}
`;
      } else {
        if (sectionHeaderBuf.body === "") {
          sectionHeader = null;
        } else {
          sectionHeader = sectionHeaderBuf;
        }
        sectionHeaderBuf = null;
        i--;
      }
    }
  }
  return new Map(Array.from(entries.entries()).map(([k, v]) => [k, {
    exampleValue: v.exampleValue,
    comment: v.comment.map((v2) => Array.isArray(v2) ? v2 : v2()).filter((v2) => v2.length > 0).map((v2, i) => [...i === 0 ? [] : ["", "---"], ...v2]).flat().join("\n")
  }]));
};

// src/rcsetup-parser.ts
var parseMplSource = async (extensionPath, matplotlibPath, joinPaths, readFile2, isNOENT2, opts) => {
  const useDefaultPath = !matplotlibPath;
  const matplotlibDirectory = useDefaultPath ? joinPaths(extensionPath, "matplotlib") : matplotlibPath;
  const errors = [];
  const readMatplotlibFile = async (filepaths) => {
    for (const filepath of filepaths) {
      try {
        const content = await readFile2(joinPaths(matplotlibDirectory, filepath));
        if (content === "") {
          continue;
        }
        return { content };
      } catch (err) {
        if (isNOENT2(err)) {
          continue;
        }
        console.error(err);
        return { err: err + "" };
      }
    }
    return { err: `${filepaths.length >= 2 ? "neither of " : ""}"${filepaths.map((v) => joinPaths(matplotlibDirectory, v).toString()).join(" nor ")}" does not exist. ${useDefaultPath ? "Please reinstall the extension" : "Please clear or modify `mplstyle.hover.matplotlibPath`"}.` };
  };
  const withPrefix = (x) => [`lib/matplotlib/` + x, x];
  const rcsetup = await readMatplotlibFile(withPrefix("rcsetup.py"));
  if ("err" in rcsetup) {
    return { params: /* @__PURE__ */ new Map(), cyclerProps: /* @__PURE__ */ new Map(), documentation: /* @__PURE__ */ new Map(), errors: [...errors, rcsetup.err] };
  }
  const validators = parseDict(rcsetup.content, "_validators");
  errors.push(...validators.err.map((v) => `Error during parsing rcsetup.py: ${v}`));
  const propValidators = parseDict(rcsetup.content, "_prop_validators");
  errors.push(...propValidators.err.map((v) => `Error during parsing rcsetup.py: ${v}`));
  const params = new Map(validators.result.map(({ key, value }) => [key, parseValidator(value, opts)]));
  const cyclerProps = new Map(propValidators.result.map(({ key, value }) => [key, parseValidator(value, opts)]));
  const matplotlibrc = await readMatplotlibFile(withPrefix("mpl-data/matplotlibrc"));
  if ("err" in matplotlibrc) {
    [matplotlibrc.err];
    return { params, cyclerProps, documentation: /* @__PURE__ */ new Map(), errors: [...errors, matplotlibrc.err] };
  }
  return { params, cyclerProps, documentation: sample_matplotlibrc_parser_default(matplotlibrc.content), errors };
};
var json5Parse = (text) => {
  try {
    return import_json52.default.parse(text);
  } catch (err) {
    return err;
  }
};
var escapeRegExp = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
var trimLineComment = (source) => {
  let strLiteral = "";
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (strLiteral === "") {
      if (char === `"` || char === `'`) {
        strLiteral = char;
        while (source[i + 1] === char) {
          strLiteral += source[i + 1];
          i++;
        }
      } else if (char === `#`) {
        return source.slice(0, i).trimEnd();
      }
    } else {
      if (source.startsWith(strLiteral, i)) {
        i += strLiteral.length - 1;
        strLiteral = "";
      } else if (char === "\\") {
        i++;
      }
    }
  }
  return source;
};
var parseDict = (content, variableNamePattern) => {
  content = content.replace(/\r/g, "");
  const replaced = content.replace(new RegExp(String.raw`^(.|\n)*\n\s*${variableNamePattern}\s*=\s*\{\n`), "");
  if (content === replaced) {
    return { result: [], err: [`Parse error: "${variableNamePattern}" does not exist`] };
  }
  content = replaced;
  const result = [];
  const err = [];
  const lines = content.split("\n").map((line) => line.trim());
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line === "}") {
      break;
    }
    let matches = null;
    if (matches = /^\s*["']([\w\-_]+(?:\.[\w\-_]+)*)["']\s*:\s*(.*)$/.exec(line)) {
      const key = matches[1];
      let value = trimLineComment(matches[2]);
      for (const [left, right] of [["[", "]"], ["(", ")"]]) {
        if (new RegExp(r`^\w*${escapeRegExp(left)}`).test(value) && !value.includes(right)) {
          i++;
          for (; i < lines.length; i++) {
            if (lines[i].includes(right)) {
              value += lines[i].split(right)[0] + right;
              break;
            } else {
              value += trimLineComment(lines[i]);
            }
          }
        }
      }
      if (value.endsWith(",")) {
        value = value.slice(0, -1).trim();
      }
      result.push({ value, key });
    } else if (!/^\s*(?:#.*)?$/.test(line)) {
      err.push(`Parse error: "${line}"`);
    }
  }
  return { result, err };
};
var matchExpr = (pattern, source) => {
  return new RegExp(String.raw`^${pattern}$`).exec(source);
};
var r = String.raw.bind(String);
var Type = {
  new: (x) => ({
    constants: [],
    color: false,
    shortLabel: x.label,
    ...x
  }),
  /** values[0] | values[1] | ... */
  enum: (values, caseSensitive = false) => {
    const valuesForCheck = caseSensitive ? values : values.map((v) => v.toLowerCase());
    return Type.new({ label: values.map((x) => JSON.stringify(x)).join(" | "), check: (x) => valuesForCheck.includes(caseSensitive ? x : x.toLowerCase()), constants: values });
  },
  /** child[] */
  list: (child, { len = null, allow_stringlist = false, literal_eval = false } = {}) => {
    const left = (allow_stringlist ? "str | " : "") + "list[";
    const right = "]" + (len === null ? "" : ` (len=${len})`);
    return Type.new({
      shortLabel: left + child.shortLabel + right,
      label: left + child.label + right,
      check: (x) => {
        if (allow_stringlist) {
          return true;
        }
        if (literal_eval && /^\[.*\]$|^\(.*\)$/s.test(x)) {
          x = x.slice(1, -1);
        }
        if (len !== null && x.split(",").length !== len) {
          return false;
        }
        if (x.trim() === "") {
          return true;
        }
        return x.split(",").map((v) => v.trim()).every((v) => child.check(v));
      },
      constants: child.constants,
      color: child.color
    });
  },
  /** types[0] | types[1] | ... */
  union: (...types) => Type.new({
    shortLabel: types.map((v) => v.shortLabel).join(" | "),
    label: types.map((v) => v.label).join(" | "),
    check: (x) => types.some((v) => v.check(x)),
    constants: types.flatMap((v) => v.constants),
    color: types.some((v) => v.color)
  }),
  int: () => Type.new({
    label: "int",
    check: (x) => {
      x = json5Parse(x);
      return typeof x === "number" && Number.isInteger(x);
    }
  }),
  float: () => Type.new({
    label: "float",
    check: (x) => typeof json5Parse(x) === "number"
  })
};
var parseValidator = (source, opts = { none: "None", bool: ["t", "y", "yes", "on", "True", "1", "f", "n", "no", "off", "False", "0"], cm: [] }) => {
  const any = (x) => true;
  let matches = null;
  if (matches = matchExpr(r`_?validate_(\w+)`, source)) {
    const type = matches[1];
    if (type.endsWith("_or_None")) {
      return Type.union(parseValidator(source.slice(0, -"_or_None".length), opts), Type.enum([opts.none]));
    }
    if (type === "fontsize_None") {
      return Type.union(parseValidator(source.slice(0, -"_None".length), opts), Type.enum([opts.none]));
    }
    if (type.endsWith("list")) {
      return Type.list(parseValidator(source.slice(0, -"list".length), opts));
    }
    switch (type) {
      case "linestyle":
        return Type.union(Type.new({ shortLabel: type, label: '(offset (int), list["on" | "off"]) | list["on" | "off"]', check: any }), Type.enum(["-", "--", "-.", ":", " ", "solid", "dashed", "dashdot", "dotted", "none"]));
      case "dpi":
        return Type.union(Type.int(), Type.enum(["figure"], true));
      case "fontsize":
        return Type.union(Type.float(), Type.enum(["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger"], true));
      case "fontweight":
        return Type.union(Type.float(), Type.enum(["ultralight", "light", "normal", "regular", "book", "medium", "roman", "semibold", "demibold", "demi", "bold", "heavy", "extra bold", "black"], true));
      case "bbox":
        return Type.enum(["tight", "standard"], true);
      case "float":
        return Type.float();
      case "int": {
        return Type.int();
      }
      case "bool":
        return Type.new({ label: "bool", check: (x) => opts.bool.map((v) => v.toLowerCase()).includes(x.toLowerCase()), constants: opts.bool });
      case "string":
        return Type.new({ label: `str`, check: any });
      case "any":
        return Type.new({ label: `any`, check: any });
      case "dash":
        return Type.list(Type.float());
      case "hatch": {
        return Type.new({ label: String.raw`/[\\/|\-+*.xoO]*/`, check: (x) => x === "" || /[\\/|\-+*.xoO]*/.test(x) });
      }
      case "cmap":
        return Type.new({ label: type, check: any, constants: opts.cm });
      case "fonttype":
        return Type.new({ label: type, check: any });
      case "pathlike":
        return Type.new({ label: type, check: any });
      case "aspect":
        return Type.union(Type.float(), Type.enum(["auto", "equal"], true));
      case "axisbelow":
        return Type.union(parseValidator("validate_bool", opts), Type.enum(["line"], true));
      case "color":
        return Type.new({ label: `color | "C0"-"C9"`, check: any, color: true });
      case "color_or_auto":
        return Type.new({ label: `color | "C0"-"C9" | "auto"`, check: any, constants: ["auto"], color: true });
      case "color_for_prop_cycle":
        return Type.new({ label: "color", check: any, color: true });
      case "color_or_inherit":
        return Type.new({ label: `color | "C0"-"C9" | "inherit"`, check: any, constants: [...Array.from(Array(10).keys(), (i) => `C${i}`), "inherit"], color: true });
      case "color_or_linecolor":
        return Type.union(Type.new({ label: "color", check: any, color: true }), Type.enum(["linecolor", "markerfacecolor", "markeredgecolor"]));
      case "cycler":
        return Type.new({ label: `cycler`, check: any });
      case "whiskers":
        return Type.union(Type.list(Type.float(), { len: 2 }), Type.float());
      case "fillstyle": {
        return { ...Type.enum(["full", "left", "right", "bottom", "top", "none"]), shortLabel: type };
      }
      case "sketch":
        const tuple = Type.list(Type.float(), { len: 3 });
        return Type.union(Type.new({ ...tuple, check: (value) => tuple.check(value) || /^\(.*\)$/s.test(value) && tuple.check(value.slice(1, -1)) }), Type.enum([opts.none]));
      case "hist_bins": {
        return Type.union(Type.int(), parseValidator("validate_floatlist", opts), Type.enum(["auto", "sturges", "fd", "doane", "scott", "rice", "sqrt"], true));
      }
      case "fontstretch": {
        return Type.union(Type.int(), Type.enum(["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], true));
      }
      case "legend_loc": {
        return Type.union(
          Type.enum([
            "best",
            "upper right",
            "upper left",
            "lower left",
            "lower right",
            "right",
            "center left",
            "center right",
            "lower center",
            "upper center",
            "center"
          ]),
          Type.new({
            label: "int (0 <= x <= 10)",
            check: (x) => {
              x = json5Parse(x);
              return typeof x === "number" && Number.isInteger(x) && 0 <= x && x <= 10;
            }
          }),
          Type.list(Type.float(), { len: 2, literal_eval: true })
        );
      }
      case "greaterthan_minushalf": {
        return Type.new({
          label: "float (x > -0.5)",
          check: (x) => {
            x = json5Parse(x);
            return typeof x === "number" && x > -0.5;
          }
        });
      }
      case "minor_tick_ndivs": {
        return Type.union(Type.enum(["auto"], false), Type.new({
          label: "int (x >= 0)",
          check: (x) => {
            x = json5Parse(x);
            return typeof x === "number" && Number.isInteger(x) && x >= 0;
          }
        }));
      }
      case "greaterequal0_lessequal1": {
        return Type.new({
          label: "float (0 <= x <= 1)",
          check: (x) => {
            x = json5Parse(x);
            return typeof x === "number" && 0 <= x && x <= 1;
          }
        });
      }
      case "papersize": {
        return Type.enum([
          "figure",
          "auto",
          "letter",
          "legal",
          "ledger",
          ...["a", "b"].flatMap((ab) => Array.from(Array(11).keys(), (i) => `${ab}${i}`))
        ], false);
      }
      case "marker": {
        return Type.new({ label: `int | str`, check: any });
      }
      default:
        return Type.new({ label: `${type} (any)`, check: any });
    }
  } else if (matchExpr(r`JoinStyle`, source)) {
    return Type.enum(["miter", "round", "bevel"]);
  } else if (matchExpr(r`CapStyle`, source)) {
    return Type.enum(["butt", "projecting", "round"]);
  } else if (matches = matchExpr(r`(\[\s*(?:"[^"]*"|'[^']*')\s*(?:,\s*(?:"[^"]*"|'[^']*')\s*)*\])\s*`, source)) {
    try {
      const values = import_json52.default.parse(matches[1]);
      if (Array.isArray(values) && values.every((v) => typeof v === "string")) {
        return Type.enum(values);
      } else {
        return Type.new({ label: `${source} (any)`, check: any });
      }
    } catch (err) {
      console.log(`Parse error: ${matches[1]}`);
      return Type.new({ label: `${source} (any)`, check: any });
    }
  } else if (matches = matchExpr(r`_listify_validator\(([^\)]+?)(?:,\s*n=(\d+)\s*)?(?:,\s*allow_stringlist=(True|False)\s*)?\)`, source)) {
    const len = matches[2];
    return Type.list(parseValidator(matches[1], opts), { len: len === void 0 ? null : +len, allow_stringlist: matches[3] === "True" });
  } else if (matches = matchExpr(r`_ignorecase\(([^\)]+)\)`, source)) {
    return parseValidator(matches[1], opts);
  } else {
    return Type.new({ label: `${source} (any)`, check: any });
  }
};

// src/extension.ts
var formatLine = (line) => {
  const pair = parseLine(line);
  if (pair === null) {
    return [];
  }
  const edits = [];
  if (pair.key.start > 0) {
    edits.push({ edit: "delete", start: 0, end: pair.key.start });
  }
  if (pair.value !== null && pair.value.text !== "" && (line[pair.key.end] !== ":" || pair.key.end + 2 !== pair.value.start)) {
    edits.push({ edit: "replace", start: pair.key.end, end: pair.value.start, replacement: ": " });
  }
  return edits;
};
var toHex = (color) => {
  return ("00" + Math.floor(color[0] * 255).toString(16).toUpperCase()).slice(-2) + ("00" + Math.floor(color[1] * 255).toString(16).toUpperCase()).slice(-2) + ("00" + Math.floor(color[2] * 255).toString(16).toUpperCase()).slice(-2) + (color[3] === 1 ? "" : ("00" + Math.floor(color[3] * 255).toString(16).toUpperCase()).slice(-2));
};
var findDocumentColorRanges = (mpl, colorMap, pair) => {
  const type = mpl.params.get(pair.key.text);
  if (type === void 0 || pair.value === null) {
    return [];
  }
  const result = [];
  const pushRange = (start, end) => {
    const color = parseColor(pair.value.text.slice(start - pair.value.start, end - pair.value.start), colorMap);
    if (color !== null) {
      result.push([start, end, color]);
    }
  };
  if (type.color) {
    pushRange(pair.value.start, pair.value.end);
  } else if (type.label === "cycler") {
    for (const matches of pair.value.text.matchAll(/'[\w\d\-:. ]*'|"#?[\w\d\-:. ]*"/gi)) {
      if (matches.index === void 0) {
        continue;
      }
      pushRange(pair.value.start + matches.index + 1, pair.value.start + matches.index + matches[0].length - 1);
    }
  }
  return result;
};
var generateDocumentationForKey = (key, options) => {
  const type = options.mpl.params.get(key);
  if (type === void 0) {
    return null;
  }
  let documentation = "";
  const image = options.images.get(key);
  if (options.showImage && image !== void 0) {
    documentation += `![${key}](${image}|height=150)

---
`;
  }
  documentation += (options.mpl.documentation.get(key)?.comment ?? "") + "\n\n---\n#### Example\n";
  documentation += `\`\`\`mplstyle
${key}: ${options.mpl.documentation.get(key)?.exampleValue ?? ""}
\`\`\`
`;
  return {
    detail: {
      plaintext: `${key}: ${type.label}`,
      md: `\`\`\`python
${key}: ${type.label}
\`\`\`
`
    },
    documentation
  };
};
var generateDocumentationForCycler = (mpl) => ({
  detail: {
    form2: {
      param1: `label: ${Array.from(mpl.cyclerProps.keys()).map((v) => JSON.stringify(v)).join(" | ")}`,
      param2: `values: list`
    },
    form3: {
      kwargs: Array.from(mpl.cyclerProps.entries()).map(([k, v]) => `${k}: ${v.shortLabel}`)
    }
  },
  documentation: "Creates a `cycler.Cycler` which cycles over one or more colors simultaneously."
});
var _testing = { formatLine, toHex, generateDocumentationForKey, generateDocumentationForCycler, findDocumentColorRanges };
var readFile = async (filepath) => import_vscode2.default.workspace.fs.readFile(filepath).then((v) => new TextDecoder().decode(v));
var isNOENT = (err) => err instanceof import_vscode2.default.FileSystemError && ["FileNotFound", "FileIsADirectory", "NoPermissions"].includes(err.code);
var getMatplotlibPathConfig = () => {
  const value = import_vscode2.default.workspace.getConfiguration("mplstyle").get("hover.matplotlibPath");
  if (value === void 0 || typeof value !== "string" || value === "") {
    return void 0;
  }
  return import_vscode2.default.Uri.file(value);
};
var getKeywords = (cm) => {
  const none = import_vscode2.default.workspace.getConfiguration("mplstyle").get("completion.keywords.none");
  const bool = import_vscode2.default.workspace.getConfiguration("mplstyle").get("completion.keywords.bool");
  return { none, bool, cm };
};
var activate = async (context) => {
  const logger = new Logger();
  logger.info(`${context.extension.packageJSON.publisher}.${context.extension.packageJSON.name} ${context.extension.packageJSON.version} running on VSCode ${import_vscode2.default.version}`);
  logger.info(`extensionUri: ${context.extensionUri}`);
  const cm = JSON.parse(await readFile(import_vscode2.default.Uri.joinPath(context.extensionUri, "matplotlib", "cm.json")));
  let mpl = await parseMplSource(context.extensionUri, getMatplotlibPathConfig(), import_vscode2.default.Uri.joinPath, readFile, isNOENT, getKeywords(cm));
  for (const err of mpl.errors) {
    logger.error(err);
  }
  const diagnosticCollection = import_vscode2.default.languages.createDiagnosticCollection("mplstyle");
  const colors = new Map(Object.entries(JSON.parse(await readFile(import_vscode2.default.Uri.joinPath(context.extensionUri, "matplotlib", "colors.json")))));
  logger.info(`The number of color names: ${colors.size}`);
  const imageDir = import_vscode2.default.Uri.joinPath(context.extensionUri, "example");
  const images = new Map(new TextDecoder().decode(await import_vscode2.default.workspace.fs.readFile(import_vscode2.default.Uri.joinPath(imageDir, "index.txt"))).split("\n").map((filename) => [filename.slice(0, -".png".length), import_vscode2.default.Uri.joinPath(imageDir, filename).toString()]));
  const diagnose = () => {
    const editor = import_vscode2.default.window.activeTextEditor;
    if (editor?.document.languageId !== "mplstyle") {
      return;
    }
    const ignoredKeys = new Set(import_vscode2.default.workspace.getConfiguration("mplstyle.diagnostics").get("ignoredKeys", []));
    const { rc, errors } = parseAll(editor.document.getText());
    errors.push(...Array.from(rc.values()).flat().flatMap(({ pair, line }) => {
      if (pair.value === null) {
        return [];
      }
      const type = mpl.params.get(pair.key.text);
      if (type === void 0) {
        return [{ error: `Property ${pair.key.text} is not defined`, severity: "Error", line, columnStart: pair.key.start, columnEnd: pair.key.end, key: pair.key.text }];
      }
      if (type.check(pair.value.text) === false) {
        return [{ error: `${pair.value.text} is not assignable to ${type.label}`, severity: "Error", line, columnStart: pair.value.start, columnEnd: pair.value.end, key: pair.key.text }];
      }
      return [];
    }));
    diagnosticCollection.set(
      editor.document.uri,
      errors.filter((err) => !ignoredKeys.has(err.key)).map((err) => {
        const d = new import_vscode2.default.Diagnostic(
          new import_vscode2.default.Range(err.line, err.columnStart, err.line, err.columnEnd),
          err.error,
          import_vscode2.default.DiagnosticSeverity[err.severity]
        );
        d.code = `mplstyle-key-${err.key}`;
        d.source = "mplstyle";
        return d;
      })
    );
  };
  context.subscriptions.push(
    logger,
    diagnosticCollection,
    import_vscode2.default.window.onDidChangeActiveTextEditor(() => logger.trySync(() => {
      diagnose();
    })),
    import_vscode2.default.window.onDidChangeTextEditorOptions(() => logger.trySync(() => {
      diagnose();
    })),
    import_vscode2.default.workspace.onDidOpenTextDocument(() => logger.trySync(() => {
      diagnose();
    })),
    import_vscode2.default.workspace.onDidChangeConfiguration(() => logger.trySync(() => {
      diagnose();
    })),
    import_vscode2.default.workspace.onDidChangeTextDocument(() => logger.trySync(() => {
      diagnose();
    })),
    import_vscode2.default.workspace.onDidCloseTextDocument((document) => logger.trySync(() => {
      diagnosticCollection.delete(document.uri);
    }))
  );
  context.subscriptions.push(import_vscode2.default.workspace.onDidChangeConfiguration(async (ev) => logger.try(async () => {
    if (ev.affectsConfiguration("mplstyle.hover.matplotlibPath") || ev.affectsConfiguration("mplstyle.completion.keywords")) {
      mpl = await parseMplSource(context.extensionUri, getMatplotlibPathConfig(), import_vscode2.default.Uri.joinPath, readFile, isNOENT, getKeywords(cm));
      for (const err of mpl.errors) {
        logger.error(err);
      }
    }
  })));
  context.subscriptions.push(import_vscode2.default.languages.registerCodeActionsProvider({ language: "mplstyle" }, {
    provideCodeActions(document, range, context2, token) {
      return context2.diagnostics.filter((d) => typeof d.code === "string" && d.code.startsWith("mplstyle-key-")).map((d) => {
        const key = d.code.slice("mplstyle-key-".length);
        const action = new import_vscode2.default.CodeAction(`Ignore errors on key "${key}"`, import_vscode2.default.CodeActionKind.QuickFix);
        action.diagnostics = [d];
        action.command = {
          title: "Ignore property",
          command: "mplstyle.ignoreKey",
          arguments: [key]
        };
        return action;
      });
    }
  }));
  context.subscriptions.push(import_vscode2.default.commands.registerCommand("mplstyle.ignoreKey", async (key) => {
    if (typeof key !== "string") {
      return;
    }
    const cfg = import_vscode2.default.workspace.getConfiguration("mplstyle.diagnostics");
    await cfg.update("ignoredKeys", [...cfg.get("ignoredKeys", []), key], import_vscode2.default.ConfigurationTarget.Global);
  }));
  context.subscriptions.push(import_vscode2.default.languages.registerHoverProvider({ language: "python" }, {
    provideHover(document, position) {
      return logger.trySync(() => {
        for (const { index, key } of findRcParamsInPythonFiles(document.lineAt(position.line).text)) {
          if (index <= position.character && position.character < index + key.length) {
            const docs = generateDocumentationForKey(key, { showImage: import_vscode2.default.workspace.getConfiguration("mplstyle").get("hover.showImages") ?? true, images, mpl });
            if (docs === null) {
              return void 0;
            }
            return new import_vscode2.default.Hover(new import_vscode2.default.MarkdownString(docs.detail.md + "---\n" + docs.documentation), new import_vscode2.default.Range(position.line, index, position.line, index + key.length));
          }
        }
      });
    }
  }));
  context.subscriptions.push(import_vscode2.default.languages.registerHoverProvider({ language: "mplstyle" }, {
    provideHover(document, position) {
      return logger.trySync(() => {
        const line = parseLine(document.lineAt(position.line).text);
        if (line === null) {
          return;
        }
        if (line.key.start <= position.character && position.character < line.key.end) {
          const docs = generateDocumentationForKey(line.key.text, { showImage: import_vscode2.default.workspace.getConfiguration("mplstyle").get("hover.showImages") ?? true, images, mpl });
          if (docs === null) {
            return void 0;
          }
          return new import_vscode2.default.Hover(new import_vscode2.default.MarkdownString(docs.detail.md + "---\n" + docs.documentation), new import_vscode2.default.Range(position.line, line.key.start, position.line, line.key.end));
        } else if (line.value !== null && line.value.start <= position.character && position.character < line.value.end) {
          const matches = /^\s*cycler\b/.exec(line.value.text);
          if (matches !== null && line.value.start + matches.index <= position.character && position.character < line.value.start + matches.index + matches[0].length) {
            const cycler = generateDocumentationForCycler(mpl);
            return new import_vscode2.default.Hover(
              new import_vscode2.default.MarkdownString().appendCodeblock(`cycler(${cycler.detail.form2.param1}, ${cycler.detail.form2.param2})
cycler(*, ${cycler.detail.form3.kwargs.join(", ")})`, "python").appendMarkdown("---\n").appendMarkdown(cycler.documentation),
              new import_vscode2.default.Range(position.line, line.value.start + matches.index, position.line, line.value.start + matches.index + matches[0].length)
            );
          }
        }
      });
    }
  }));
  context.subscriptions.push(import_vscode2.default.languages.registerCompletionItemProvider({ language: "python" }, {
    provideCompletionItems(document, position) {
      return logger.trySync(() => {
        for (const match of findRcParamsInPythonFiles(document.lineAt(position.line).text)) {
          if (!(match.index <= position.character && position.character <= match.index + match.key.length)) {
            continue;
          }
          const showComparisonImage = import_vscode2.default.workspace.getConfiguration("mplstyle").get("hover.showImages") ?? true;
          return Array.from(mpl.params.keys()).flatMap((key) => {
            const item = new import_vscode2.default.CompletionItem(key, import_vscode2.default.CompletionItemKind.Property);
            const docs = generateDocumentationForKey(key, { showImage: showComparisonImage, images, mpl });
            if (docs === null) {
              return [];
            }
            item.detail = `${docs.detail.plaintext} (mplstyle)`;
            item.documentation = new import_vscode2.default.MarkdownString(docs.documentation);
            item.range = new import_vscode2.default.Range(position.line, match.index, position.line, match.index + match.key.length);
            return [item];
          });
        }
      });
    }
  }, `"`, `'`));
  context.subscriptions.push(import_vscode2.default.languages.registerCompletionItemProvider({ language: "mplstyle" }, {
    provideCompletionItems(document, position) {
      return logger.trySync(() => {
        const textLine = document.lineAt(position.line);
        if (textLine.text.slice(0, position.character).includes(":")) {
          const line = parseLine(textLine.text);
          if (line === null || line.value === null) {
            return;
          }
          const type = mpl.params.get(line.key.text);
          if (type === void 0) {
            return;
          }
          const items = type.constants.map((v) => {
            const item = new import_vscode2.default.CompletionItem(v, import_vscode2.default.CompletionItemKind.Constant);
            item.detail = "constant";
            return item;
          });
          const colorNameCompletionItems = (quotation, range) => Array.from(colors.entries()).map(([k, v]) => {
            const item = new import_vscode2.default.CompletionItem(quotation + k + quotation, import_vscode2.default.CompletionItemKind.Color);
            item.detail = "#" + toHex(v);
            if (range !== void 0) {
              item.range = range;
            }
            return item;
          });
          if (type.color) {
            items.push(...colorNameCompletionItems(""));
          } else if (type.label === "cycler") {
            if (textLine.text.slice(line.value.start, position.character).trim() === "") {
              const item = new import_vscode2.default.CompletionItem("cycler", import_vscode2.default.CompletionItemKind.Function);
              item.insertText = new import_vscode2.default.SnippetString("cycler(color=[${1}])");
              item.command = { title: "Trigger Parameter Hints", command: "editor.action.triggerParameterHints" };
              item.documentation = new import_vscode2.default.MarkdownString(generateDocumentationForCycler(mpl).documentation);
              items.push(item);
            } else {
              const m = /['"][\w :]*$/.exec(textLine.text.slice(0, position.character));
              if (m === null) {
                items.push(...colorNameCompletionItems("'"));
              } else {
                items.push(...colorNameCompletionItems("", new import_vscode2.default.Range(position.line, m.index + 1, position.line, position.character)));
              }
            }
          }
          return items;
        } else {
          const showComparisonImage = import_vscode2.default.workspace.getConfiguration("mplstyle").get("hover.showImages") ?? true;
          return Array.from(mpl.params.entries()).flatMap(([key, type]) => {
            const docs = generateDocumentationForKey(key, { showImage: showComparisonImage, images, mpl });
            if (docs === null) {
              return [];
            }
            const item = new import_vscode2.default.CompletionItem(key, import_vscode2.default.CompletionItemKind.Property);
            item.detail = docs.detail.plaintext;
            item.documentation = new import_vscode2.default.MarkdownString(docs.documentation);
            const colon = textLine.text.indexOf(":");
            if (colon === -1) {
              item.range = textLine.range;
              item.insertText = new import_vscode2.default.SnippetString(`${key}: \${1}`);
              if (type.color || type.constants.length > 0 || type.label === "cycler") {
                item.command = { title: "Trigger Suggest", command: "editor.action.triggerSuggest" };
              }
            } else {
              item.range = new import_vscode2.default.Range(position.line, 0, position.line, colon);
            }
            return [item];
          });
        }
      });
    }
  }));
  context.subscriptions.push(import_vscode2.default.languages.registerSignatureHelpProvider({ language: "mplstyle" }, {
    provideSignatureHelp(document, position) {
      return logger.trySync(() => {
        const textLine = document.lineAt(position.line);
        const pair = parseLine(textLine.text);
        if (pair === null || pair.value === null) {
          return;
        }
        if (/^\s*cycler\b/.test(pair.value.text)) {
          const cycler = generateDocumentationForCycler(mpl);
          const form2 = new import_vscode2.default.SignatureInformation(`cycler(${cycler.detail.form2.param1}, ${cycler.detail.form2.param2})`);
          form2.parameters = [new import_vscode2.default.ParameterInformation(cycler.detail.form2.param1), new import_vscode2.default.ParameterInformation(cycler.detail.form2.param2)];
          const form3 = new import_vscode2.default.SignatureInformation(`cycler(*, ${cycler.detail.form3.kwargs.join(", ")})`);
          form3.parameters = cycler.detail.form3.kwargs.map((v) => new import_vscode2.default.ParameterInformation(v));
          form2.documentation = form3.documentation = cycler.documentation;
          const h = new import_vscode2.default.SignatureHelp();
          h.signatures = [form2, form3];
          if (/^\s*cycler\(\w+=/.test(pair.value.text)) {
            h.activeSignature = 1;
            let keywordArgName = null;
            for (const matches of textLine.text.matchAll(/[(,]\s*(\w+)\s*=/g)) {
              if (matches.index === void 0 || matches.index >= position.character) {
                break;
              }
              keywordArgName = matches[1];
            }
            if (keywordArgName !== null) {
              const index = Array.from(mpl.cyclerProps.keys()).indexOf(keywordArgName);
              if (index === -1) {
                return h;
              }
              h.activeParameter = index;
            }
          } else {
            h.activeSignature = 0;
            h.activeParameter = pair.value.text.split(",").length - 1;
          }
          return h;
        }
      });
    }
  }, "(", ",", "="));
  context.subscriptions.push(import_vscode2.default.languages.registerColorProvider({ language: "mplstyle" }, {
    provideDocumentColors(document) {
      return logger.trySync(() => {
        const result = [];
        for (const { pair, line } of Array.from(parseAll(document.getText()).rc.values()).flat()) {
          for (const [start, end, color] of findDocumentColorRanges(mpl, colors, pair)) {
            result.push(new import_vscode2.default.ColorInformation(new import_vscode2.default.Range(line, start, line, end), new import_vscode2.default.Color(...color)));
          }
        }
        return result;
      });
    },
    provideColorPresentations(color) {
      return logger.trySync(() => [new import_vscode2.default.ColorPresentation(toHex([color.red, color.green, color.blue, color.alpha]))]);
    }
  }));
  const mapEdits = (edits, line) => edits.map((v) => v.edit === "delete" ? import_vscode2.default.TextEdit.delete(new import_vscode2.default.Range(line, v.start, line, v.end)) : import_vscode2.default.TextEdit.replace(new import_vscode2.default.Range(line, v.start, line, v.end), v.replacement));
  context.subscriptions.push(import_vscode2.default.languages.registerDocumentRangeFormattingEditProvider({ language: "mplstyle" }, {
    provideDocumentRangeFormattingEdits(document, range) {
      const edits = [];
      for (let i = range.start.line; i <= range.end.line; i++) {
        edits.push(...mapEdits(formatLine(document.lineAt(i).text), i));
      }
      return edits;
    }
  }));
  context.subscriptions.push(import_vscode2.default.languages.registerDocumentFormattingEditProvider({ language: "mplstyle" }, {
    provideDocumentFormattingEdits(document) {
      const edits = [];
      for (let i = 0; i < document.lineCount; i++) {
        edits.push(...mapEdits(formatLine(document.lineAt(i).text), i));
      }
      return edits;
    }
  }));
};
var deactivate = () => {
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _testing,
  activate,
  deactivate
});
