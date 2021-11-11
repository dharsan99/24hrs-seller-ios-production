(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_sellerdetails_sellerdetails_module_ts"],{

/***/ 92779:
/*!***************************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPageRoutingModule": function() { return /* binding */ SellerdetailsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellerdetails.page */ 51783);




const routes = [
    {
        path: '',
        component: _sellerdetails_page__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPage
    }
];
let SellerdetailsPageRoutingModule = class SellerdetailsPageRoutingModule {
};
SellerdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SellerdetailsPageRoutingModule);



/***/ }),

/***/ 76516:
/*!*******************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPageModule": function() { return /* binding */ SellerdetailsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellerdetails-routing.module */ 92779);
/* harmony import */ var _sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sellerdetails.page */ 51783);







let SellerdetailsPageModule = class SellerdetailsPageModule {
};
SellerdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sellerdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.SellerdetailsPageRoutingModule
        ],
        declarations: [_sellerdetails_page__WEBPACK_IMPORTED_MODULE_1__.SellerdetailsPage]
    })
], SellerdetailsPageModule);



/***/ }),

/***/ 51783:
/*!*****************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerdetailsPage": function() { return /* binding */ SellerdetailsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sellerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sellerdetails.page.html */ 69762);
/* harmony import */ var _sellerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sellerdetails.page.scss */ 22912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let SellerdetailsPage = class SellerdetailsPage {
    constructor(router, http) {
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
    }
    navigateHome() {
        this.router.navigate(['/tabs']);
    }
};
SellerdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService }
];
SellerdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sellerdetails',
        template: _raw_loader_sellerdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sellerdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SellerdetailsPage);



/***/ }),

/***/ 28191:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        const options = { headers: headers, withCredentials: false };
        return this.http.get(url, options);
    }
    post(serviceName, data) {
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        const options = { headers: headers, withCredentials: false };
        console.log(data);
        return this.http.post(url, JSON.stringify(data), options);
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 22912:
/*!*******************************************************!*\
  !*** ./src/app/sellerdetails/sellerdetails.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".myproduct-div {\n  position: absolute;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 11px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #FF6000;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #fff !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background-color: #FF6000;\n  color: #fff;\n  height: 25px;\n  width: 55%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 10px !important;\n  margin-left: 35px !important;\n}\n\n.skip-btn {\n  border-radius: 5px !important;\n  background-color: #fff;\n  color: #FF6000;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 13px !important;\n  padding: 3px;\n  margin: 10px !important;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcmRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDRTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUVKOztBQUFFO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBR0o7O0FBREE7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSUY7O0FBRkE7RUFDSSxlQUFBO0FBS0oiLCJmaWxlIjoic2VsbGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlwcm9kdWN0LWRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjZWJlNmU2O1xuICAgIHdpZHRoOjk2JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjo1cHg7XG4gICAgXG4gIH1cbiAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGNjAwMDs7XG4gIH1cbiAgaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4ICNlOWYzZmY7XG4gIH1cbiAgLnVwZGF0ZS1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjAwMDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOjU1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46MTBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzNXB4ICFpbXBvcnRhbnQgO1xufVxuLnNraXAtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6I0ZGNjAwMDtcbiAgaGVpZ2h0OjI1cHg7XG4gIHdpZHRoOjI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjoxMHB4ICFpbXBvcnRhbnQ7XG59XG5sb3R0aWUtcGxheWVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 69762:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sellerdetails/sellerdetails.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"mt-2\">\n  <div class=\"myproduct-div mt-5 \">\n\n    <div class=\"row\">\n      <div class=\"col-7\">\n        <ion-icon (click)=\"navigateHome()\" style=\"margin:20px;cursor:pointer;color:#FF6000\" name=\"close\"></ion-icon>\n\n      </div>\n      <div class=\"col-5 ion-text-center\">\n        <img id=\"logo\" height=\"100px\" width=\"120px\" src=\"assets/logo.jpeg\" alt=\"\">\n      </div>\n\n    </div>\n    <p style=\"font-size:20px;margin-left:10px;margin-top:10px; color: #5C5C5C;\"> Provide Your Details:</p>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Store logo:</p>\n      </div>\n      <div class=\"col-6\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_GZxjzF.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:40%;margin-left:5px;\" loop autoplay></lottie-player>\n      </div>\n    </div>\n\n    <div class=\"row mt-4\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Store Name:</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" value=\"9876543210\">\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Store Address:</p>\n      </div>\n      <div class=\"col-6\">\n        <lottie-player src=\"https://assets6.lottiefiles.com/packages/lf20_CEyvj2.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:50%;margin-left:5px;\" loop autoplay></lottie-player>\n      </div>\n    </div>\n\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">User Name:</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" value=\"Ravi\">\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">User Number:</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" value=\"9876543210\">\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Id Proff:</p>\n      </div>\n      <div class=\"col-6\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/private_files/lf30_0pkhkmwj.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:50%;margin-left:5px;\" loop autoplay></lottie-player>\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"edit-name\">Address Proff:</p>\n      </div>\n      <div class=\"col-6\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_jxgqawba.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:50%;margin-left:5px;\" loop autoplay></lottie-player>\n      </div>\n    </div>\n\n    <div class=\"row \">\n       <div class=\"col-7\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm skip-btn\">Skip</button>\n       </div>\n       <div class=\"col-5\">\n        <button (click)=\"navigateHome()\" type=\"button\" class=\"btn btn-success btn-sm update-btn\">Submit</button>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_sellerdetails_sellerdetails_module_ts-es2015.js.map