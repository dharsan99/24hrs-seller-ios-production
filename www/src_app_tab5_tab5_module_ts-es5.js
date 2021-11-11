(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab5_tab5_module_ts"], {
    /***/
    28191:
    /*!****************************************!*\
      !*** ./src/app/shared/http.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpService": function HttpService() {
          return (
            /* binding */
            _HttpService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);

      var _HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "get",
          value: function get(serviceName) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            var options = {
              headers: headers,
              withCredentials: false
            };
            return this.http.get(url, options);
          }
        }, {
          key: "post",
          value: function post(serviceName, data) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            var options = {
              headers: headers,
              withCredentials: false
            };
            console.log(data);
            return this.http.post(url, JSON.stringify(data), options);
          }
        }]);

        return HttpService;
      }();

      _HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
        }];
      };

      _HttpService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
      })], _HttpService);
      /***/
    },

    /***/
    26672:
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageRoutingModule": function Tab5PageRoutingModule() {
          return (
            /* binding */
            _Tab5PageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
      }];

      var _Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      _Tab5PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab5PageRoutingModule);
      /***/
    },

    /***/
    5184:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageModule": function Tab5PageModule() {
          return (
            /* binding */
            _Tab5PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab5-routing.module */
      26672);

      var _Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      _Tab5PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
        }]), _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page]
      })], _Tab5PageModule);
      /***/
    },

    /***/
    32584:
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5Page": function Tab5Page() {
          return (
            /* binding */
            _Tab5Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab5.page.html */
      66717);
      /* harmony import */


      var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab5.page.scss */
      84966);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/http.service */
      28191);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(router, http, toastCtrl, route) {
          var _this = this;

          _classCallCheck(this, Tab5Page);

          this.router = router;
          this.http = http;
          this.toastCtrl = toastCtrl;
          this.PopupModel = false;
          route.params.subscribe(function (val) {
            _this.PopupModel = false;
          });
        }

        _createClass(Tab5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "support",
          value: function support() {
            this.router.navigate(['/support']);
          }
        }, {
          key: "backToprivious",
          value: function backToprivious() {
            this.PopupModel = false;
          }
        }, {
          key: "popupModelOpen",
          value: function popupModelOpen() {
            this.PopupModel = true;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            this.backToprivious();
            this.router.navigate(['/tabs/tab5']);
          }
        }]);

        return Tab5Page;
      }();

      _Tab5Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }, {
          type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
        }];
      };

      _Tab5Page = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab5Page);
      /***/
    },

    /***/
    84966:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  color: #5C5C5C;\n}\n\n.myproduct-div {\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 96% !important;\n  margin: 5px;\n}\n\n.support-btn {\n  border-radius: 5px !important;\n  background-color: #FF6000;\n  height: 25px;\n  width: 70%;\n  text-align: center;\n  border: 1px solid #ebe6e6;\n  font-size: 12px !important;\n  padding: 3px;\n  margin-top: 18px !important;\n  color: #fff;\n}\n\nimg {\n  border-radius: 25px;\n  margin: 10px;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n}\n\n.edit-name {\n  font-size: 15px;\n  margin-top: 5px;\n}\n\ninput[type=text] {\n  font-size: 14px;\n  margin: 0 5px;\n  margin-top: -12px;\n  margin-left: -20px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #FF6000;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 1px solid #fff !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n#edit {\n  cursor: pointer;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background-color: #FF6000;\n  color: #fff;\n  height: 25px;\n  width: 50%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\nion-toggle {\n  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);\n  overflow: visible;\n  contain: none;\n}\n\nion-badge {\n  border-radius: 3px !important;\n  margin-left: -10px !important;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 150%;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -215px !important;\n  z-index: 5;\n}\n\n#modal {\n  position: absolute;\n  top: 15%;\n  margin: 10px;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 90% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n@keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDRTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUZKOztBQUlFO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDRSxzRkFBQTtFQUVBLGlCQUFBO0VBRUEsYUFBQTtBQUhGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBRkY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQURGOztBQUlBO0VBQ0U7SUFBTSxRQUFBO0VBQU47RUFDQTtJQUFJLFVBQUE7SUFBWSxzQkFBQTtFQUdoQjtBQUNGOztBQU5BO0VBQ0U7SUFBTSxRQUFBO0VBQU47RUFDQTtJQUFJLFVBQUE7SUFBWSxzQkFBQTtFQUdoQjtBQUNGOztBQUZBO0VBQ0ksaUNBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUFJO0VBQ0ksYUFBQTtBQUVSIiwiZmlsZSI6InRhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBjb2xvcjojNUM1QzVDO1xuICB9XG4ubXlwcm9kdWN0LWRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNlYmU2ZTY7XG4gICAgd2lkdGg6OTYlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICBcbiAgfVxuICAuc3VwcG9ydC1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjAwMDtcbiAgICBoZWlnaHQ6MjVweDtcbiAgICB3aWR0aDo3MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgbWFyZ2luLXRvcDoxOHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I2ZmZjtcbiAgIFxufVxuaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgbWFyZ2luOjEwcHg7XG59XG4ubmFtZXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzVDNUM1Qztcbn1cbi5lZGl0LW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi8vICNlZGl0LWZpZWxke1xuLy8gICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbi8vICAgICB3aWR0aDoxMDAlO1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbi8vICAgICBmb250LXNpemU6IDExcHg7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyB9XG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY2MDAwO1xuICB9XG4gIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAjZTlmM2ZmO1xuICB9XG5cbiNlZGl0e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVwZGF0ZS1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjAwMDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGhlaWdodDoyNXB4O1xuICAgIHdpZHRoOjUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBtYXJnaW46MTVweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgLS1oYW5kbGUtYm94LXNoYWRvdzogMCAzcHggMTJweCByZ2JhKDI1NSwgMCwgMCwgMC42KSwgMCAzcHggMXB4IHJnYmEoNTAsIDcwLCAyNTUsIDAuNik7XG5cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG5cbiAgY29udGFpbjogbm9uZTtcbn1cbmlvbi1iYWRnZXtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG4jY2FyZHtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDoxNTAlO1xuICB3aWR0aDoxNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgbWFyZ2luLXRvcDogLTIxNXB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDU7XG59XG4jbW9kYWx7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MTUlO1xuICBtYXJnaW46IDEwcHg7O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4ICNjY2M7XG4gIHdpZHRoOjkwJSAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsgIFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgXG59XG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICBmcm9tIHt0b3A6IDBweDt9XG4gIHRvIHt0b3A6IDIwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO31cbn1cbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBkYXJrdHVycXVvaXNlXG4gICAgLy8gMCUsICNkMWYyZTdcbiAgICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
      /***/
    },

    /***/
    66717:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <!-- <img  id=\"logo\"  src=\"assets/logo.jpeg\" alt=\"\"> -->\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\">\n\n  <div class=\"myproduct-div mt-4 \">\n\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <h4 style=\"margin:10px; color: #5C5C5C;\"> <b>My Profile</b></h4>\n      </div>\n      <div class=\"col-4\">\n        <button type=\"button\" (click)=\"support()\" class=\"btn btn-primary  support-btn \">Support </button>\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-4 ion-text-center\">\n        <img\n          src=\"https://www.jadefontenotdds.com/site/wp-content/uploads/2019/02/92979836-stock-vector-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg\"\n          alt=\"\">\n      </div>\n      <div class=\"col-8\" style=\"margin-top: 8%;\">\n        <h5 style=\" color: #5C5C5C;\"> <b>abc store\n            <svg id=\"edit\" style=\"margin: 5px;\" (click)=\"popupModelOpen()\" width=\"20\" height=\"15\"\n              viewBox=\"0 0 20 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path\n                d=\"M0 13.6571V16.5278C0 16.7923 0.244411 17 0.555478 17H3.93279C4.07721 17 4.22164 16.9528 4.32162 16.8584L16.4533 6.55589L12.2872 3.01472L0.166644 13.3172C0.0555479 13.4116 0 13.5249 0 13.6571ZM19.675 3.81739C20.1083 3.4491 20.1083 2.85419 19.675 2.4859L17.0754 0.276212C16.6421 -0.0920705 15.9422 -0.0920705 15.509 0.276212L13.4759 2.0043L17.642 5.54548L19.675 3.81739Z\"\n                fill=\"black\" />\n            </svg>\n          </b></h5>\n\n\n      </div>\n    </div>\n\n\n    <div class=\"row\" style=\"padding: 10px;\">\n      <div class=\"col-6\">\n        <p class=\"name\">Username :</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" disabled value=\"Ravi\">\n      </div>\n\n      <div class=\"col-6\">\n        <p class=\"name\">Email:</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" disabled value=\"abc@gmail.com\">\n      </div>\n\n      <div class=\"col-6\">\n        <p class=\"name\">Mobile number :</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" disabled value=\"5456456456456\">\n      </div>\n\n      <div class=\"col-6\">\n        <p class=\"name\">Store location :</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" disabled value=\"Peelamedu\">\n        <svg style=\"cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"35\" fill=\"#FF6000\" class=\"bi bi-geo-alt-fill\" viewBox=\"0 0 16 16\">\n          <path d=\"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z\"/>\n        </svg>\n      </div>\n\n\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-4\">\n        <p class=\"name\">Id Proof:</p>\n      </div>\n      <div class=\"col-3\">\n        <img src=\"https://media.istockphoto.com/vectors/format-file-isolated-on-white-background-vector-id1226002079?b=1&k=20&m=1226002079&s=170667a&w=0&h=QyCTGPkTl8uZDjpFH8TJMYigtx2JmJW9EFCB-xFJ044=\" alt=\"\">\n      </div>\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets3.lottiefiles.com/packages/lf20_uywti8w5.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%;margin-left:5px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-3 mt-4\">\n        <ion-badge style=\"background-color: #FF6000;color:#fff\">Upload Pdf</ion-badge>\n      </div>\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 10px;\">\n      <div class=\"col-4\">\n        <p class=\"name\">Address Proof:</p>\n      </div>\n      <div class=\"col-3\">\n        <img src=\"https://media.istockphoto.com/vectors/format-file-isolated-on-white-background-vector-id1226002079?b=1&k=20&m=1226002079&s=170667a&w=0&h=QyCTGPkTl8uZDjpFH8TJMYigtx2JmJW9EFCB-xFJ044=\" alt=\"\">\n      </div>\n      <div class=\"col-2\">\n        <lottie-player src=\"https://assets5.lottiefiles.com/packages/lf20_slGFhN.json\" background=\"transparent\"\n          speed=\"1.5\" style=\"width:100%;margin-left:5px;\" autoplay></lottie-player>\n      </div>\n      <div class=\"col-3 mt-4\">\n        <ion-badge style=\"background-color: #FF6000;color:#fff\">Upload Pdf</ion-badge>\n      </div>\n    </div>\n\n  \n\n  </div>\n  </div>\n  <div class=\"myproduct-div mt-4 \">\n    <p style=\"font-size:16px;margin-left:10px;margin-top:10px; color: #5C5C5C;\">Select how customers can reach you :</p>\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <svg style=\"margin-left: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 38 37\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <g clip-path=\"url(#clip0_1172:10)\">\n            <path\n              d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n              fill=\"url(#paint0_radial_1172:10)\" />\n            <path\n              d=\"M12.6672 18.5C12.6672 17.2803 13.0386 16.0881 13.7346 15.074C14.4305 14.0599 15.4197 13.2695 16.577 12.8027C17.7343 12.336 19.0078 12.2139 20.2364 12.4518C21.465 12.6898 22.5935 13.2771 23.4793 14.1395C24.365 15.0019 24.9682 16.1007 25.2126 17.2969C25.457 18.4932 25.3316 19.7331 24.8522 20.8599C24.3728 21.9867 23.561 22.9498 22.5195 23.6274C21.4779 24.305 20.2534 24.6667 19.0007 24.6667C17.321 24.6667 15.71 24.017 14.5222 22.8605C13.3344 21.704 12.6672 20.1355 12.6672 18.5ZM9.24293 18.5C9.24293 20.3788 9.81512 22.2154 10.8872 23.7776C11.9592 25.3397 13.4829 26.5573 15.2656 27.2764C17.0484 27.9954 19.0101 28.1836 20.9027 27.8171C22.7952 27.4507 24.5337 26.546 25.8983 25.2176C27.2628 23.8892 28.1921 22.1966 28.5687 20.3539C28.9453 18.5113 28.7522 16.6013 28.014 14.8654C27.2757 13.1296 26.0253 11.6459 24.421 10.6019C22.8166 9.55797 20.9304 9.00065 19.0007 9.00043C17.7195 9.00038 16.4507 9.24607 15.267 9.72345C14.0832 10.2008 13.0076 10.9006 12.1016 11.7827C11.1956 12.6648 10.4769 13.7121 9.98663 14.8646C9.49633 16.0172 9.244 17.2525 9.24405 18.5H9.24293ZM26.8618 8.6239C26.8617 9.06298 26.9953 9.49223 27.2457 9.85739C27.4961 10.2225 27.8521 10.5072 28.2687 10.6754C28.6853 10.8435 29.1437 10.8876 29.586 10.8021C30.0283 10.7166 30.4347 10.5053 30.7537 10.1949C31.0726 9.88455 31.2899 9.48905 31.3781 9.05844C31.4662 8.62783 31.4212 8.18145 31.2487 7.77574C31.0763 7.37003 30.7842 7.02322 30.4093 6.77917C30.0344 6.53511 29.5936 6.40477 29.1427 6.40463C28.5382 6.40492 27.9585 6.6388 27.531 7.05491C27.1035 7.47102 26.8631 8.03534 26.8626 8.6239H26.8618ZM11.3259 33.5586C10.121 33.5452 8.92736 33.33 7.79738 32.9224C6.97211 32.6254 6.22543 32.1526 5.61193 31.5385C4.98031 30.9425 4.49453 30.2157 4.1906 29.4121C3.77124 28.312 3.54967 27.1499 3.53563 25.9765C3.44361 24.0264 3.42386 23.4406 3.42386 18.5004C3.42386 13.5601 3.44361 12.9758 3.53563 11.0242C3.55077 9.85111 3.77177 8.68918 4.18911 7.58863C4.49415 6.7851 4.97976 6.0581 5.61044 5.46076C6.22287 4.84545 6.96986 4.37243 7.79589 4.07689C8.92627 3.66879 10.1204 3.45344 11.3259 3.44027C13.3288 3.35068 13.9305 3.33145 19.0007 3.33145C24.071 3.33145 24.6749 3.35068 26.6793 3.44027C27.8841 3.45501 29.0775 3.67019 30.2078 4.07653C31.0334 4.37299 31.7802 4.84587 32.3933 5.4604C33.0245 6.05734 33.5101 6.78446 33.8146 7.58826C34.2335 8.68842 34.4545 9.8506 34.4681 11.0238C34.5601 12.9754 34.5799 13.5598 34.5799 18.5C34.5799 23.4402 34.5616 24.0246 34.4681 25.9762C34.4535 27.1493 34.2325 28.3113 33.8146 29.4117C33.4984 30.2096 33.0141 30.9341 32.3929 31.5387C31.7717 32.1432 31.0274 32.6145 30.2078 32.922C29.0779 33.3298 27.8843 33.5451 26.6793 33.5583C24.6764 33.6479 24.0747 33.6671 19.0007 33.6671C13.9268 33.6671 13.3266 33.6493 11.3259 33.5583V33.5586ZM11.1672 0.112088C9.59104 0.142448 8.03158 0.433021 6.55526 0.971431C5.28728 1.43599 4.13856 2.16412 3.18914 3.1051C2.2217 4.02863 1.47359 5.14715 0.997353 6.38214C0.444504 7.8197 0.146193 9.33818 0.115122 10.8729C0.0216087 12.8455 0 13.476 0 18.5C0 23.524 0.0216087 24.1545 0.115122 26.1271C0.14634 27.6617 0.444777 29.1801 0.997725 30.6175C1.47395 31.8525 2.22191 32.9711 3.18914 33.8949C4.13888 34.8354 5.28733 35.5636 6.55488 36.0289C8.03127 36.5671 9.59069 36.8577 11.1668 36.8883C13.194 36.9779 13.8404 37.0004 19.0004 37.0004C24.1604 37.0004 24.8079 36.9793 26.8339 36.8883C28.4101 36.8579 29.9695 36.5673 31.4459 36.0289C32.7084 35.5537 33.8549 34.8268 34.812 33.895C35.7691 32.9631 36.5157 31.8467 37.0038 30.6175C37.5574 29.1803 37.8559 27.6618 37.8864 26.1271C37.9784 24.153 37.9981 23.524 37.9981 18.5C37.9981 13.476 37.9765 12.8455 37.8864 10.8729C37.8552 9.33827 37.5568 7.8199 37.0038 6.3825C36.5259 5.14828 35.7782 4.02998 34.8123 3.1051C33.864 2.16366 32.7158 1.43533 31.4481 0.971069C29.9717 0.432382 28.4121 0.14192 26.8358 0.112088C24.8101 0.0224902 24.1622 0 19.0007 0C13.8392 0 13.1925 0.0210392 11.1657 0.112088\"\n              fill=\"url(#paint1_radial_1172:10)\" />\n          </g>\n          <defs>\n            <radialGradient id=\"paint0_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n              gradientTransform=\"translate(5.04861 37.1748) scale(49.6057 48.2984)\">\n              <stop offset=\"0.09\" stop-color=\"#FA8F21\" />\n              <stop offset=\"0.78\" stop-color=\"#D82D7E\" />\n            </radialGradient>\n            <radialGradient id=\"paint1_radial_1172:10\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\"\n              gradientTransform=\"translate(23.0464 38.8322) scale(39.0961 38.0657)\">\n              <stop offset=\"0.64\" stop-color=\"#8C3AAA\" stop-opacity=\"0\" />\n              <stop offset=\"1\" stop-color=\"#8C3AAA\" />\n            </radialGradient>\n            <clipPath id=\"clip0_1172:10\">\n              <rect width=\"38\" height=\"37\" fill=\"white\" />\n            </clipPath>\n          </defs>\n        </svg>\n      </div>\n      <div class=\"col-6\">\n        <p style=\"margin:4px;font-size: 15px;color:#5C5C5C;\"> abcstore</p>\n      </div>\n      <div class=\"col-4\">\n        <ion-toggle color=\"danger\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <svg style=\"margin-left: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 40 41\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M0.854827 40.8334C0.629238 40.8334 0.409779 40.7446 0.247024 40.5807C0.0324696 40.3646 -0.0502871 40.0509 0.0303241 39.7576L2.64207 30.2618C1.01605 27.3342 0.15875 24.0225 0.159976 20.6606C0.164574 9.72772 9.10046 0.833374 20.0801 0.833374C25.4057 0.83551 30.4097 2.90094 34.1709 6.6485C37.9314 10.3964 40.0015 15.3784 40 20.6765C39.9951 31.6097 31.0592 40.5047 20.0801 40.5047C20.0801 40.5047 20.0719 40.5047 20.0716 40.5047C16.8646 40.5035 13.6852 39.7253 10.8543 38.2513L1.07153 40.8056C0.999804 40.8242 0.926856 40.8334 0.854827 40.8334Z\"\n            fill=\"#E5E5E5\" />\n          <path\n            d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n            fill=\"white\" />\n          <path\n            d=\"M1.51758 39.3197L4.12871 29.826C2.51771 27.0477 1.67083 23.8955 1.67175 20.6671C1.67574 10.5657 9.9321 2.34766 20.0765 2.34766C25.0003 2.34979 29.6215 4.25775 33.0957 7.72058C36.5709 11.1834 38.4835 15.7864 38.4817 20.6814C38.4774 30.783 30.2207 39.002 20.0775 39.002C20.0765 39.002 20.0778 39.002 20.0775 39.002H20.0692C16.9891 39.0008 13.9624 38.2311 11.2743 36.7724L1.51758 39.3197Z\"\n            fill=\"#64B161\" />\n          <path\n            d=\"M0.85498 39.9823L3.55959 30.1486C1.89128 27.2705 1.01375 24.0057 1.01498 20.661C1.01927 10.1974 9.57141 1.68457 20.0803 1.68457C25.18 1.68671 29.9667 3.66303 33.5663 7.25006C37.1656 10.8371 39.1471 15.6052 39.1453 20.6763C39.1407 31.1395 30.5873 39.6536 20.0803 39.6536C20.0797 39.6536 20.0806 39.6536 20.0803 39.6536H20.072C16.8813 39.6524 13.7463 38.8556 10.9617 37.3434L0.85498 39.9823ZM11.4298 33.9081L12.0088 34.2496C14.4412 35.687 17.2301 36.4471 20.0742 36.4487H20.0803C28.8139 36.4487 35.9224 29.3723 35.9261 20.6751C35.9276 16.4603 34.281 12.4969 31.2892 9.51569C28.2971 6.53442 24.319 4.89166 20.0861 4.88983C11.3455 4.88983 4.23728 11.9653 4.23391 20.6622C4.23268 23.6426 5.07006 26.5448 6.65654 29.0564L7.03354 29.6533L5.43235 35.4736L11.4298 33.9081Z\"\n            fill=\"white\" />\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M15.3154 12.7277C14.9586 11.9379 14.5828 11.922 14.2432 11.9083C13.9655 11.8964 13.6477 11.897 13.3304 11.897C13.0129 11.897 12.4967 12.016 12.0603 12.4905C11.6235 12.9651 10.3926 14.1126 10.3926 16.4462C10.3926 18.7802 12.0998 21.0352 12.338 21.3519C12.5761 21.6684 15.6335 26.6104 20.4754 28.5117C24.4995 30.0919 25.3182 29.7775 26.1918 29.6985C27.0653 29.6195 29.0101 28.551 29.407 27.4435C29.8042 26.3361 29.8042 25.387 29.685 25.1883C29.5658 24.9909 29.2482 24.8721 28.7719 24.635C28.2956 24.3979 25.9536 23.2501 25.5168 23.092C25.0801 22.9337 24.7625 22.8549 24.445 23.3298C24.1271 23.804 23.215 24.8721 22.937 25.1883C22.659 25.5054 22.381 25.545 21.9047 25.3076C21.4283 25.0699 19.894 24.5694 18.0739 22.9535C16.6579 21.6965 15.7016 20.1437 15.4236 19.6689C15.1459 19.1946 15.419 18.9603 15.6329 18.7012C16.0182 18.2346 16.6646 17.3956 16.8234 17.0795C16.9822 16.7627 16.9028 16.4859 16.7839 16.2485C16.6646 16.0114 15.7387 13.6658 15.3154 12.7277Z\"\n            fill=\"white\" />\n        </svg>\n\n      </div>\n      <div class=\"col-6\">\n        <p style=\"margin:4px;font-size: 15px;color:#5C5C5C;\">9876543210</p>\n      </div>\n      <div class=\"col-4\">\n        <ion-toggle checked color=\"danger\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <svg style=\"margin-left: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M36 18C36 18.1847 35.9969 18.3663 35.9906 18.5478C35.9124 21.3393 35.1801 24.0735 33.8525 26.5304C33.6522 26.903 33.4393 27.2692 33.2108 27.6261C31.0424 31.0502 27.7837 33.644 23.9603 34.9889C22.2187 35.6002 20.3929 35.9382 18.5478 35.9906C18.3663 35.9969 18.1847 36 18 36C17.8153 36 17.6337 35.9969 17.4522 35.9906C15.6071 35.9382 13.7813 35.6002 12.0397 34.9889C8.21632 33.644 4.95758 31.0502 2.78922 27.6261C2.5607 27.2692 2.34783 26.903 2.14748 26.5304C0.819938 24.0735 0.0876035 21.3393 0.00939137 18.5478C0.0031305 18.3663 0 18.1847 0 18C0 17.8153 0.0031305 17.6337 0.00939137 17.4522C0.0876035 14.6607 0.819938 11.9265 2.14748 9.46957C2.34783 9.09704 2.5607 8.73078 2.78922 8.37391C4.95758 4.94977 8.21632 2.35601 12.0397 1.01113C13.7813 0.399761 15.6071 0.0618426 17.4522 0.00939137C17.6337 0.0031305 17.8153 0 18 0C18.1847 0 18.3663 0.0031305 18.5478 0.00939137C20.3929 0.0618426 22.2187 0.399761 23.9603 1.01113C27.7837 2.35601 31.0424 4.94977 33.2108 8.37391C33.4393 8.73078 33.6522 9.09704 33.8525 9.46957C35.1801 11.9265 35.9124 14.6607 35.9906 17.4522C35.9969 17.6337 36 17.8153 36 18Z\"\n            fill=\"#85C646\" />\n          <path\n            d=\"M35.9906 18.5478C35.9969 18.3663 36 18.1847 36 18C36 17.8153 35.9969 17.6337 35.9906 17.4522H28.4431C28.4198 14.7653 28.106 12.0889 27.5071 9.46957H33.8525C33.6522 9.09704 33.4393 8.73078 33.2108 8.37391H27.2317C26.5732 5.74963 25.4665 3.25876 23.9603 1.01113C23.3681 0.802708 22.7652 0.626108 22.1541 0.482087C23.8226 2.37913 25.1781 5.09948 26.0953 8.37391H18.5478V0.00939137C18.3663 0.0031305 18.1847 0 18 0C17.8153 0 17.6337 0.0031305 17.4522 0.00939137V8.37391H9.9047C10.8219 5.09948 12.1774 2.37913 13.8459 0.482087C13.2348 0.626108 12.6319 0.802708 12.0397 1.01113C10.5335 3.25876 9.42678 5.74963 8.76835 8.37391H2.78922C2.5607 8.73078 2.34783 9.09704 2.14748 9.46957H8.49287C7.894 12.0889 7.58017 14.7653 7.55687 17.4522H0.00939137C0.0031305 17.6337 0 17.8153 0 18C0 18.1847 0.0031305 18.3663 0.00939137 18.5478H7.55687C7.58017 21.2347 7.894 23.9111 8.49287 26.5304H2.14748C2.34783 26.903 2.5607 27.2692 2.78922 27.6261H8.76835C9.42554 30.2508 10.5323 32.7419 12.0397 34.9889C12.6319 35.1973 13.2348 35.3739 13.8459 35.5179C12.1774 33.6209 10.8219 30.9005 9.9047 27.6261H17.4522V35.9906C17.6337 35.9969 17.8153 36 18 36C18.1847 36 18.3663 35.9969 18.5478 35.9906V27.6261H26.0953C25.1781 30.9005 23.8226 33.6209 22.1541 35.5179C22.7652 35.3739 23.3681 35.1973 23.9603 34.9889C25.4689 32.7426 26.5758 30.2513 27.2317 27.6261H33.2108C33.4393 27.2692 33.6522 26.903 33.8525 26.5304H27.5071C28.106 23.9111 28.4198 21.2347 28.4431 18.5478H35.9906ZM17.4522 26.5304H9.62296C9.00202 23.9142 8.67651 21.2366 8.65252 18.5478H17.4522V26.5304ZM17.4522 17.4522H8.65252C8.6767 14.7634 9.00221 12.0858 9.62296 9.46957H17.4522V17.4522ZM26.377 26.5304H18.5478V18.5478H27.3475C27.3233 21.2366 26.9978 23.9142 26.377 26.5304ZM18.5478 17.4522V9.46957H26.377C26.998 12.0858 27.3235 14.7634 27.3475 17.4522H18.5478Z\"\n            fill=\"#6A9E38\" />\n          <path d=\"M3.52197 13.1478H32.4785V22.8522H3.52197V13.1478Z\" fill=\"#E4E4E4\" />\n          <path\n            d=\"M7.29199 15.6913H8.21265L9.20062 18.998L10.2963 15.6913H11.2104L12.2991 18.998L13.2871 15.6913H14.2077L12.7493 20.3087H11.9094L10.7533 16.8812L9.59067 20.3087H8.75735L7.29199 15.6913Z\"\n            fill=\"#6A9E38\" />\n          <path\n            d=\"M14.542 15.6913H15.4642L16.4522 18.998L17.5478 15.6913H18.4619L19.5507 18.998L20.5355 15.6913H21.4562L19.9977 20.3087H19.1581L18.0033 16.8812L16.8416 20.3087H16.007L14.542 15.6913Z\"\n            fill=\"#6A9E38\" />\n          <path\n            d=\"M21.7925 15.6913H22.7131L23.7011 18.998L24.7968 15.6913H25.7108L26.7996 18.998L27.7876 15.6913H28.7082L27.2498 20.3087H26.4096L25.2535 16.8812L24.0912 20.3087H23.2575L21.7925 15.6913Z\"\n            fill=\"#6A9E38\" />\n        </svg>\n\n      </div>\n      <div class=\"col-6\">\n        <p style=\"margin:4px;font-size: 15px;color:#5C5C5C;\"> www.abc.com</p>\n      </div>\n      <div class=\"col-4\">\n        <ion-toggle checked color=\"danger\"></ion-toggle>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-2\">\n        <svg style=\"margin-left: 10px;\" width=\"30\" height=\"35\" viewBox=\"0 0 36 36\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z\"\n            fill=\"#007CFF\" />\n          <path\n            d=\"M27 21.7215C25.0583 21.7215 23.2065 21.2985 21.4988 20.4638C21.231 20.3355 20.9205 20.3152 20.637 20.412C20.3535 20.511 20.1218 20.718 19.9913 20.9857L19.1812 22.662C16.7512 21.267 14.7352 19.2487 13.338 16.8187L15.0165 16.0087C15.2865 15.8782 15.4912 15.6465 15.5903 15.363C15.687 15.0795 15.669 14.769 15.5385 14.5013C14.7015 12.7958 14.2785 10.944 14.2785 9C14.2785 8.379 13.7745 7.875 13.1535 7.875H9C8.379 7.875 7.875 8.379 7.875 9C7.875 19.5457 16.4543 28.125 27 28.125C27.621 28.125 28.125 27.621 28.125 27V22.8465C28.125 22.2255 27.621 21.7215 27 21.7215Z\"\n            fill=\"white\" />\n        </svg>\n\n      </div>\n      <div class=\"col-6\">\n        <p style=\"margin:4px;font-size: 15px; color:#5C5C5C;\">98765 43210</p>\n      </div>\n      <div class=\"col-4\">\n        <ion-toggle checked color=\"danger\"></ion-toggle>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\" *ngIf=\"PopupModel\"  style=\"margin-top: 20px;\"  id=\"card\">\n    <div class=\"row\"  id=\"modal\">\n\n      <div class=\"hidden\" >\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#FF6000\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n          </svg>\n        </div>\n        <h5 style=\"margin:10px; color: #5C5C5C;\"> <b>Edit Here:</b></h5>\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Mobile number :</p>\n          </div>\n          <div class=\"col-6\">\n            <input type=\"text\" id=\"edit-field\" value=\"9876543210\">\n          </div>\n        </div>\n  \n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Email:</p>\n          </div>\n          <div class=\"col-6\">\n            <input type=\"text\" id=\"edit-field\" value=\"abc@gmail.com\">\n          </div>\n        </div>\n  \n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Password:</p>\n          </div>\n          <div class=\"col-6\">\n            <input type=\"text\" id=\"edit-field\" value=\"abc@123\">\n          </div>\n        </div>\n  \n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Store Location :</p>\n          </div>\n          <div class=\"col-6\">\n            <input type=\"text\" id=\"edit-field\" value=\"Peelamedu\">\n  \n            <svg style=\"margin-left: -5px;margin-top:5px\" width=\"30\" height=\"36\" viewBox=\"0 0 22 28\" fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\">\n              <g filter=\"url(#filter0_d_1176:710)\">\n                <path\n                  d=\"M17 6C17 4.4087 16.3679 2.88254 15.2426 1.75732C14.1174 0.632106 12.5913 0 11 0C9.4087 0 7.88258 0.632106 6.75736 1.75732C5.63214 2.88254 5 4.4087 5 6C5 10.5 11 17 11 17C11 17 17 10.5 17 6ZM9 6C9 5.60444 9.1173 5.21781 9.33706 4.88892C9.55682 4.56002 9.86918 4.3036 10.2346 4.15222C10.6001 4.00085 11.0022 3.96128 11.3902 4.03845C11.7781 4.11562 12.1345 4.30611 12.4142 4.58582C12.6939 4.86552 12.8844 5.2219 12.9616 5.60986C13.0387 5.99783 12.9991 6.39993 12.8478 6.76538C12.6964 7.13083 12.44 7.4432 12.1111 7.66296C11.7822 7.88273 11.3956 8 11 8C10.4701 7.99842 9.96227 7.78721 9.58754 7.41248C9.21281 7.03775 9.00158 6.52995 9 6ZM4 18V20H18V18H4Z\"\n                  fill=\"white\" />\n                <path\n                  d=\"M11 16.2471C10.8514 16.0761 10.6636 15.8562 10.4477 15.5953C9.89187 14.9237 9.15161 13.9828 8.41236 12.9047C7.67214 11.8252 6.93926 10.6173 6.39298 9.41093C5.84386 8.19829 5.5 7.02331 5.5 6C5.5 4.54131 6.07946 3.14233 7.11091 2.11088C8.14236 1.07943 9.5413 0.5 11 0.5C12.4587 0.5 13.8576 1.07943 14.8891 2.11088C15.9205 3.14233 16.5 4.54131 16.5 6C16.5 7.02331 16.1561 8.19829 15.607 9.41093C15.0607 10.6173 14.3279 11.8252 13.5876 12.9047C12.8484 13.9828 12.1081 14.9237 11.5523 15.5953C11.3364 15.8562 11.1486 16.0761 11 16.2471ZM8.5 6L8.5 6.00149C8.50198 6.66353 8.76585 7.29789 9.23398 7.76603C9.70212 8.23417 10.3365 8.49802 10.9985 8.5H11C11.4944 8.5 11.9778 8.35341 12.3889 8.0787C12.8001 7.80399 13.1205 7.41353 13.3097 6.95672C13.4989 6.49991 13.5484 5.99727 13.452 5.51232C13.3555 5.02737 13.1174 4.5819 12.7678 4.23226C12.4181 3.88263 11.9727 3.64452 11.4877 3.54806C11.0028 3.4516 10.5001 3.50105 10.0433 3.69028C9.58643 3.87952 9.196 4.20005 8.92132 4.61113C8.64663 5.02224 8.5 5.50553 8.5 6ZM17.5 19.5H4.5V18.5H17.5V19.5Z\"\n                  stroke=\"black\" />\n              </g>\n              <defs>\n                <filter id=\"filter0_d_1176:710\" x=\"0\" y=\"0\" width=\"22\" height=\"28\" filterUnits=\"userSpaceOnUse\"\n                  color-interpolation-filters=\"sRGB\">\n                  <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n                  <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"\n                    result=\"hardAlpha\" />\n                  <feOffset dy=\"4\" />\n                  <feGaussianBlur stdDeviation=\"2\" />\n                  <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\" />\n                  <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1176:710\" />\n                  <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1176:710\" result=\"shape\" />\n                </filter>\n              </defs>\n            </svg>\n  \n          </div>\n        </div>\n  \n        <div style=\"width: 100%; text-align: center;\">\n          <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n        </div>\n      </div>\n    </div>\n\n    \n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab5_tab5_module_ts-es5.js.map