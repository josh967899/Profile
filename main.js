(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<style>\n\n  .test{\n    position: relative;\n    background-image: url(assets/Image/IMGP0731.JPG);\n  /* Center and scale the image nicely */                   \n    background-size:     cover;                      /* <------ */\n    background-repeat:   no-repeat;\n    background-position: center center; \n   min-height: 700px;\n   padding: 0px 0px;\n  }\n  .bgsecond{\n    position: relative;\n    background-color: black;\n    min-height: 400px;\n  }\n  .carousel{\n    position:initial;\n  }\n  .carousel-caption{\n    position:initial;\n  }\n \n  .bd-example{\n    padding-top: 270px;\n  }\n  .devider{\n    width: 100%;\n    height: 23px;\n    background: url(assets/Image/devider.png) no-repeat center center;\n    margin: 5px 0 10px;\n  }\n  h2{\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    margin-bottom: 10px;\n    font-size: 30px;\n    text-align: center;\n  }\n  .subtitle{\n    letter-spacing: 2px;\n    margin-top: 10px;\n    text-align: center;\n  }\n  .titleh4{\n    font-family: 'Roboto', Helvetica, Arial, sans-serif;\n    font-weight: 700;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n  .otherBackground{\n    background-color: #f8f8f8;\n  }\n  .setfont{\n    color: white;\n    text-align: center;\n\n  }\n\n  .hovereffect {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: default;\n}\n\n.hovereffect .overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n}\n\n.hovereffect img {\n  width: 300px;\n  height: 300px;\n  display: block;\n  position: relative;\n  -webkit-transition: all 0.4s ease-in;\n  transition: all 0.4s ease-in;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.hovereffect:hover img {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feColorMatrix type=\"matrix\" color-interpolation-filters=\"sRGB\" values=\"0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0\" /><feGaussianBlur stdDeviation=\"3\" /></filter></svg>#filter');\n  filter: grayscale(1) blur(3px);\n  -webkit-filter: grayscale(1) blur(3px);\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(1.2);\n  transform: scale(1.2);\n}\n\n.hovereffect h2 {\n  text-transform: uppercase;\n  text-align: center;\n  position: relative;\n  font-size: 17px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.hovereffect div.info {\n  display: inline-block;\n  text-decoration: none;\n  padding: 7px 14px;\n  background-color: transparent;\n}\n\n.hovereffect div.info:hover {\n  box-shadow: 0 0 5px #fff;\n}\n\n.hovereffect div.info, .hovereffect h2 {\n  -webkit-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  transform: scale(0.7);\n  -webkit-transition: all 0.4s ease-in;\n  transition: all 0.4s ease-in;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  color: #fff;\n  text-transform: uppercase;\n}\n.hovereffect div.info{\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.hovereffect:hover div.info, .hovereffect:hover h2 {\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  transform: scale(1);\n}\n.spans{\n  float: left;\n  \n}\n\n.navs{\n  position: fixed;\n    z-index: 99999;\n    width: 100%;\n}\n.headText{\n  text-align: center;\n}\n.foot{\n  text-align: center;\n  color: white;\n}\n</style>\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark navs\">\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"#section1\" (click)=\"triggerScrollTo('section1')\">經歷</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#section2\" (click)=\"triggerScrollTo('section2')\">專長</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#section3\" (click)=\"triggerScrollTo('section3')\">興趣</a>\n        </li>   \n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#section4\" (click)=\"triggerScrollTo('section4')\">作品</a>\n          </li>  \n          <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#section5\" (click)=\"triggerScrollTo('section5')\">連絡我</a>\n            </li>   \n      </ul>\n    </div>  \n  </nav>\n  <!--<div [ngClass]=\"sideClass()\">\n  123132323\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 1</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 3</a>\n</div>-->\n<div class=\"col-12 p-0 \"  (mousemove)=\"onMouseover($event)\">\n <div class=\"test\"> \n    <div class=\"bd-example\">\n        <div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\n          </ol>\n          <div class=\"carousel-inner \">\n           \n            <div class=\"carousel-item active\">\n              <div class=\"carousel-caption\">\n                <h5>First slide label</h5>\n                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"carousel-caption \">\n                <h5>Second slide label</h5>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n              </div>\n            </div>\n            <div class=\"carousel-item\">\n              <div class=\"carousel-caption\">\n                <h5>Third slide label</h5>\n                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n              </div>\n            </div>\n          </div>\n          <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n      </div>\n  </div>\n<div class=\"container\" id=\"section1\">\n<div class=\"col-12 py-5\">\n<h2 class=\"\">自傳與工作經歷</h2>\n<div class=\"devider\"></div>\n<p class=\"subtitle\">2014~{{year}}</p>\n</div>\n<div class=\"row\">\n <div class=\"col-md-4 col-sm-12 \" >\n  <h4 class=\"headText\">香港商天景數碼有限公司</h4>\n  <p class=\"subtitle\">2017.11~2019.09</p>\n  <p>\n      擔任軟體開發工程師(junior)，職務內容為開發windows application、web(MVC API)、維護客戶系統。 \n  </p>\n </div>\n <div class=\"col-md-4 col-sm-12 \" >\n  <h4 class=\"headText\">Java Web程式設計師養成班</h4>\n  <p class=\"subtitle\">恆逸教育訓練中心(2017)</p>\n  <p>\n    學習JAVA基本程式語言、web 相關基礎(HTML、CSS、JavaScript、jQuery)，及JAVA Web(JSP、servlet)。\n  </p>\n  </div>\n  <div class=\"col-md-4 col-sm-12 \" >\n      <h4 class=\"headText\">龍華科技大學_化材系學士 </h4>\n      <p class=\"subtitle\">2013(畢)</p>\n      <p>\n        學習化工相關知識，強項在電子相關課程。\n      </p>\n  </div>\n</div>\n<div class=\"my-5\">\n<h4 class=\"titleh4\" >經驗與能力</h4>\n<div class=\"row \">\n    <div class=\"col-md-6 col-sm-12 \" >\n        <h4>資訊系統開發<span style=\"float: right;\">70%</span></h4>  \n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n     </div>\n     <div class=\"col-md-6 col-sm-12 \" >\n        <h4>行政業務與團隊能力<span style=\"float: right;\">80%</span></h4>  \n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n     </div>\n     <div class=\"col-md-6 col-sm-12 \" >\n        <h4>優化與學習能力<span style=\"float: right;\">85%</span></h4>  \n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 85%\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n     </div>\n     <div class=\"col-md-6 col-sm-12 \" >\n        <h4>實務經歷<span style=\"float: right;\">65%</span></h4>  \n        <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n     </div>\n</div>\n</div>\n</div>\n<div class=\"py-5 otherBackground\" >\n  <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-9\">\n      <h1>自傳與簡歷</h1>\n      <p>關於學歷、專業能力與成就。</p>\n    </div>\n    <div class=\"col-md-3\">\n      <a href=\"assets/download/test.pdf\" class=\" btn-default btn-lg\">查看/下載</a>\n    </div>\n    </div>\n  </div>\n  </div>\n\n  \n  <div id=\"section2\" class=\"container pb-5\">\n      <div class=\"col-12 py-5\">\n          <h2 class=\"\">專長</h2>\n          <div class=\"devider\"></div>     \n      </div>\n  <diV class=\"row\">\n    <div class=\"col-md-3 col-sm-6\">\n        <h4 class=\"headText\">程式設計</h4>\n        <p>\n            網頁及應用程式之開發經驗。主要語言以C#、JAVA，其他如:Razor、JSP。\n        </p>\n    </div>\n    <div class=\"col-md-3 col-sm-6\">\n        <h4 class=\"headText\">資料庫</h4>\n        <p>\n            主要使用MSSQL，學習時以MYSQ為主。\n        </p>\n    </div>\n    <div class=\"col-md-3 col-sm-6\">\n        <h4 class=\"headText\">網頁設計</h4>\n        <p>\n          HTML、CSS、JavaScript、jQuery、Bootstrap 。 \n        </p>\n    </div>\n    <div class=\"col-md-3 col-sm-6\">\n        <h4 class=\"headText\">其他經驗</h4>\n        <p>\n            Mobile部分曾經學習過 Xamarin，版本控管以VSTS、SVN為主，雲端部分使用過Azure。\n        </p>\n    </div>\n  </diV>\n</div>\n<div id=\"section3\" class=\"bgsecond\" >\n    <div class=\"col-12 pt-5\">\n        <h2 class=\"setfont\">其他興趣</h2>\n        <div class=\"devider\"></div>\n        <p class=\"subtitle setfont\">運動、攝影、影片</p>     \n    </div>\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n              <div class=\"setfont\">\n                  xxxxx\n                </div>\n          </div>\n          <div class=\"carousel-item\">\n              <div class=\"setfont\">\n                  xxxxx\n                </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"setfont\">\n              xxxxx\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n</div>\n\n<div id=\"section4\" class=\"container pb-5\">\n    <div class=\"col-12 py-5\">\n        <h2 class=\"\">作品</h2>\n        <div class=\"devider\"></div>         \n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-sm-6 pb-4\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/none.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>PCS</h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(winform)、 EntityFramework \n                      </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">資料庫</span>MSSQL\n                       </div>\n                       <div class=\"info col-12\">\n                          協助香港一田百貨，紀錄每日人流補助工具。\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 pb-4\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/3A3C.png\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>員工回饋系統(Web))</h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(.net MVC)、EF(Code First)\n                      </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">前端</span>Bootstrap、jQuery、JavaScript、AJAX、CSS、HTML\n                        </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">資料庫</span>MSSQL\n                       </div>\n                       <div class=\"info col-12\">\n                        透過員工填寫類似心理行為分析的回饋，建立大數據。<br>\n                        NOTE:開發過程主要以Controller及畫面的建置(Razor))，Model主要為提供建議。\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/none.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>Monitor</h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(winform) \n                      </div>\n                       <div class=\"info col-12\">\n                          協助停車場將攝像頭拍下的照片，即時顯示到電腦上的補助工具。\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-4 col-sm-6 pb-4\">\n        \n          <div class=\"hovereffect\">\n             \n              <img class=\"img-responsive\" src=\"assets/Image/Stock.png\" alt=\"\">\n              <div class=\"overlay\">\n                  <a href=\"https://github.com/josh967899/StockReport\"><h2>股票紀錄</h2></a>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(.net MVC)、EF(Code First)\n                      </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">前端</span>Bootstrap、jQuery、JavaScript、AJAX、CSS、HTML\n                        </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">資料庫</span>MSSQL\n                       </div>\n                       <div class=\"info col-12\">\n                        由於有買股票，想記錄過去到現在的損益，而自己寫的網頁。<br>\n                        NOTE:api透過\"基本市況報導網站\"提供。\n                       </div>\n                 </div>\n              </div>\n          </div>\n        \n      </div>\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/none.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>Iasia BCAN</h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(winform) \n                      </div>\n                       <div class=\"info col-12\">\n                          協助 iasia 將每日紀錄之txt檔，透過工具及config data 合併或拆解成 iasia需要的bcan資料。\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/table.png\" alt=\"\">\n              <div class=\"overlay\">\n                  <a href=\"assets/download/Table.pdf\"> <h2>桌上基地</h2></a>\n                 <div class=\"row\">\n                    <div class=\"info col-12\"  >\n                        <span class=\"spans\">後端</span>JAVA、JSP \n                      </div>\n                      <div class=\"info col-12\" >\n                          <span class=\"spans\" >前端</span>jQuery、JavaScript、AJAX、CSS、HTML\n                        </div>\n                      <div class=\"info col-12\">\n                          <span class=\"spans\">資料庫</span>MYSQL\n                       </div>\n                       <div class=\"info col-12\">\n                       Java web 養成班，結訓作品，以電子商務網站開發為主題。\n                       </div>\n                 </div>\n              </div>\n            \n          </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/none.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>Iasia install help system </h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(winform) \n                      </div>\n                       <div class=\"info col-12\">\n                         協助iasia安裝系統時的補助工具:<br>\n                         1.將測試環境安裝資訊匯出(excel))及比對真實環境與測試環境的安裝內容。<br>\n                         2.比對安裝後設定檔參數<br>\n                         3.設定windows scheduler<br>\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/numsend.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                  <a href=\"assets/download/Table.pdf\"> <h2>NumSend</h2></a>\n                 <div class=\"row\">\n                    <div class=\"info col-12\"  >\n                        <span class=\"spans\">後端</span>c# \n                      </div>\n                      <div class=\"info col-12\" >\n                          <span class=\"spans\" >前端</span>xaml\n                        </div>\n                       <div class=\"info col-12\">\n                        開啟時提醒司機打卡，偵測目前司機地理位置若停留太久則再次提醒打卡。\n                       </div>\n                 </div>\n              </div>\n            \n          </div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-6\">\n          <div class=\"hovereffect\">\n              <img class=\"img-responsive\" src=\"assets/Image/none.jpg\" alt=\"\">\n              <div class=\"overlay\">\n                 <h2>Iasia log analysis </h2>\n                 <div class=\"row\">\n                    <div class=\"info col-12\">\n                        <span class=\"spans\">後端</span>C#(winform) \n                      </div>\n                       <div class=\"info col-12\">\n                          透過將api資料做成設定當(xml)，比對產生的Log問題。\n                       </div>\n                 </div>\n              </div>\n          </div>\n      </div>\n    </div>\n\n    \n  </div>\n</div>\n\n<div id=\"section5\" class=\"bgsecond \">\n<div class=\"container \">\n    <div class=\"col-12 pt-5\">\n        <h2 class=\"setfont\">連絡我</h2>\n        <div class=\"devider\"></div>\n        <p class=\"subtitle setfont\">Email or Facebook</p>  \n    </div>\n    <div class=\"row foot\">\n      <div class=\"col-12\">\n        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> josh967899@gmail.com\n      </div>\n      <div class=\"col-12\">\n          <a href=\"https://www.facebook.com/PoKaiW\"><i class=\"fa fa-facebook-square\" style=\"font-size:36px\"></i></a>\n        </div>\n      \n    </div>\n</div>\n</div>\n\n\n  \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_scrollToService) {
        this._scrollToService = _scrollToService;
        this.title = 'ProfileAngular';
        this.year = new Date().getFullYear();
        this.isHovering = false;
        this.IsRwd = false;
        this.status = true;
    }
    AppComponent.prototype.triggerScrollTo = function (val) {
        var config = {
            target: val,
            offset: -20
        };
        this._scrollToService.scrollTo(config);
    };
    AppComponent.prototype.sideClass = function () {
        return {
            'col-1': true,
            'text-success': this.status,
            'test': this.IsRwd,
            'd-none': true
        };
    };
    ;
    AppComponent.prototype.onResize = function (event) {
        console.log(event);
    };
    AppComponent.prototype.onMouseout = function (event) {
        this.isHovering = true;
        this.status = false;
    };
    AppComponent.prototype.onMouseover = function (event) {
        if (event.x < 20 && this.IsRwd) {
            this.isHovering = false;
            this.status = true;
        }
        else {
            this.isHovering = this.IsRwd ? true : false;
            this.status = true;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-popper */ "./node_modules/angular-popper/fesm5/angular-popper.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_popper__WEBPACK_IMPORTED_MODULE_5__["NgxPopper"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__["ScrollToModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\josh9\ProfileAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map