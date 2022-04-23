(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+MYx":
/*!*************************************************************!*\
  !*** ./modules/GitHubIntegrationModule/parse-commit-url.ts ***!
  \*************************************************************/
/*! exports provided: parseCommitUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCommitUrl", function() { return parseCommitUrl; });
function parseCommitUrl(username, repository, sha) {
    if (username && repository && sha) {
        return `https://github.com/${username}/${repository}/commit/${sha}`;
    }
    return null;
}


/***/ }),

/***/ "+xeL":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-overview/project-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectOverviewComponent", function() { return ProjectOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ProjectOverviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectOverviewComponent.ɵfac = function ProjectOverviewComponent_Factory(t) { return new (t || ProjectOverviewComponent)(); };
ProjectOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectOverviewComponent, selectors: [["app-project-overview"]], decls: 19, vars: 0, consts: [[1, "overview-nav"], ["routerLink", "board"], ["src", "../../../assets/board.png", "width", "20px", "height", "20px", "alt", ""], ["routerLink", "stats"], ["src", "../../../assets/stats.png", "width", "20px", "height", "20px", "alt", ""], ["routerLink", "team"], ["src", "../../../assets/team.png", "width", "20px", "height", "20px", "alt", ""], ["routerLink", "setting"], ["src", "../../../assets/setting.png", "width", "20px", "height", "20px", "alt", ""]], template: function ProjectOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.overview-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\n.overview-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.overview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 25px;\n  color: black;\n  font-size: 125%;\n}\n\n.overview-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active {\n  color: inherit;\n  text-decoration: none;\n}\n\n@media (max-width: 800px) {\n  .overview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoicHJvamVjdC1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5vdmVydmlldy1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ub3ZlcnZpZXctbmF2IHVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm92ZXJ2aWV3LW5hdiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxufVxyXG5cclxuLm92ZXJ2aWV3LW5hdiBhLCBhOmhvdmVyLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiB9XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLm92ZXJ2aWV3LW5hdiBsaSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgfSAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\projectManagementSystem\ClientApp\src\main.ts */"zUnb");


/***/ }),

/***/ "0HKr":
/*!*****************************************************!*\
  !*** ./src/app/components/chart/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ChartComponent_h3_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ChartComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", d_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", d_r3.label, " ");
} }
function ChartComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChartComponent_ul_3_li_1_Template, 3, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
class ChartComponent {
    constructor(element) {
        this.element = element;
        this.useInfoPanel = true;
        this.title = '';
        this.data = [];
        this.limit = 20;
    }
    ngOnInit() {
        this.data = this.data.sort(d => d.percent).slice(0, this.limit);
        const dataSummary = this.data.reduce((val, d) => val + (+d.percent), 0);
        if (dataSummary < 100) {
            const others = 100 - dataSummary;
            this.data.push({
                color: '#000',
                percent: others,
                label: 'Others'
            });
        }
        const canvas = this.element.nativeElement.querySelector('.chart-canvas');
        const dimensions = this.getObjectFitSize(true, canvas.clientWidth, canvas.clientHeight, canvas.width, canvas.height);
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;
        const circleR = canvas.width / 4;
        const centerW = canvas.width / 2;
        const centerH = canvas.height / 2;
        const ctx = canvas.getContext("2d");
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.arc(centerW, centerH, circleR, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#aaeeff";
        ctx.fill();
        let current = -0.5 * Math.PI;
        this.data.forEach(d => {
            ctx.beginPath();
            ctx.moveTo(centerW, centerH);
            ctx.arc(centerW, centerH, circleR, current, current + (2 * Math.PI * d.percent / 100), false);
            ctx.fillStyle = d.color;
            ctx.fill();
            current = current + (2 * Math.PI * d.percent / 100);
        });
        // dark blue percentage circle
        // ctx.beginPath();
        // ctx.moveTo(centerW, centerH);
        // ctx.arc(centerW, centerH, circleR, -0.5 * Math.PI, 0.3 * 2 * Math.PI - 0.5 * Math.PI, false);
        // ctx.fillStyle = "#00aaff";
        // ctx.fill();
        //const current = -0.5 * Math.PI + 0.3 * 2 * Math.PI - 0.5 * Math.PI;
        // ctx.beginPath();
        // ctx.moveTo(centerW, centerH);
        // ctx.arc(centerW, centerH, circleR, current, 0.3 * 2 * Math.PI - 0.5 * Math.PI, false);
        // ctx.fillStyle = "#001244";
        // ctx.fill();
    }
    fillCircle(contextObj, x, y, r, start, end) {
        contextObj.arc(x, y, r, start, end);
        contextObj.fill();
    }
    ;
    getObjectFitSize(contains /* true = contain, false = cover */, containerWidth, containerHeight, width, height) {
        var doRatio = width / height;
        var cRatio = containerWidth / containerHeight;
        var targetWidth = 0;
        var targetHeight = 0;
        var test = contains ? doRatio > cRatio : doRatio < cRatio;
        if (test) {
            targetWidth = containerWidth;
            targetHeight = targetWidth / doRatio;
        }
        else {
            targetHeight = containerHeight;
            targetWidth = targetHeight * doRatio;
        }
        return {
            width: targetWidth,
            height: targetHeight,
            x: (containerWidth - targetWidth) / 2,
            y: (containerHeight - targetHeight) / 2
        };
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], inputs: { useInfoPanel: "useInfoPanel", title: "title", data: "data", limit: "limit" }, decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "chart"], [1, "chart-canvas"], ["class", "chart-info", 4, "ngIf"], [1, "chart-info"], [4, "ngFor", "ngForOf"], [1, "chart-info-square"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChartComponent_h3_0_Template, 2, 1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChartComponent_ul_3_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.useInfoPanel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n  font-weight: 500;\n  font-size: 190%;\n}\n\n.chart[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.chart-canvas[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: contain;\n}\n\n.chart-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.chart-info-square[_ngcontent-%COMP%] {\n  height: 25px;\n  width: 25px;\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n\n.chart-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 100%;\n  list-style-type: none;\n  display: flex;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQURKOztBQUdJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRE47O0FBTUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0IGgzIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTkwJTtcclxufVxyXG5cclxuLmNoYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuXHJcbiAgJi1jYW52YXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxuXHJcbiAgJi1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICYtc3F1YXJlIHtcclxuICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAmLWluZm8gbGkge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "0jRP":
/*!*********************************************************************!*\
  !*** ./modules/GitHubIntegrationModule/search-result-validation.ts ***!
  \*********************************************************************/
/*! exports provided: validSearchResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validSearchResponse", function() { return validSearchResponse; });
function validSearchResponse(data) {
    return data && Array.isArray(data.items);
}


/***/ }),

/***/ "3a7M":
/*!*****************************************************************!*\
  !*** ./src/app/components/main-header/main-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainHeaderComponent.ɵfac = function MainHeaderComponent_Factory(t) { return new (t || MainHeaderComponent)(); };
MainHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainHeaderComponent, selectors: [["app-main-header"]], decls: 17, vars: 0, consts: [[1, "main-header"], ["width", "41", "height", "42", "viewBox", "0 0 41 42", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.5 21.2132L20.6066 0.606598L35.5 21.2132L20.3934 41.6066L5.5 21.2132Z", "fill", "url(#paint0_linear_366_137)"], ["x", "8", "y", "18.4958", "width", "20.8359", "height", "1.68395", "transform", "rotate(-52.3449 8 18.4958)", "fill", "#0C0055"], ["d", "M19 18.6011L26.0509 9.99998L27.0949 11.1313L20.2346 19.6129L19 18.6011Z", "fill", "#796DC1"], ["d", "M15 18.0941L24.3374 7L25.5123 8.23912L16.3125 19.1985L15 18.0941Z", "fill", "#3D3284"], ["d", "M11 18.9492L22.1846 5L23.4273 6.18482L12.3977 20.0697L11 18.9492Z", "fill", "#1D1263"], ["width", "20.8359", "height", "1.54596", "transform", "matrix(-0.639997 0.768378 -0.768369 -0.640007 34.0645 22.4406)", "fill", "#0C0055"], ["d", "M21.8612 21.4438L14.7267 29.9757L13.6221 28.7743L20.5615 20.3572L21.8612 21.4438Z", "fill", "#796DC1"], ["d", "M25.1533 22.466L15.7081 33.4685L14.52 32.1962L23.826 21.3269L25.1533 22.466Z", "fill", "#3D3284"], ["d", "M29.5645 22.4958L17.6825 35.8559L16.5794 34.6781L28.3069 21.3776L29.5645 22.4958Z", "fill", "#1D1263"], ["id", "paint0_linear_366_137", "x1", "5.57291", "y1", "20.9127", "x2", "39.9904", "y2", "18.6097", "gradientUnits", "userSpaceOnUse"], ["offset", "0.0416667", "stop-color", "#B1FDFD"], ["offset", "1", "stop-color", "#AC39A1"]], template: function MainHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "linearGradient", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "stop", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "stop", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "PIMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #F5E9FF;\n  width: 100%;\n  height: 100%;\n}\n\n.main-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-right: 15px;\n}\n\n.main-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #420B50;\n  letter-spacing: 0.12em;\n  font-weight: 400;\n  font-size: 27px;\n  margin: 17px 0 17px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRUYiLCJmaWxlIjoibWFpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvL2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kOiAjRjVFOUZGO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWFpbi1oZWFkZXIgc3Zne1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5tYWluLWhlYWRlciBoMyB7XHJcbiAgY29sb3I6ICM0MjBCNTA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBtYXJnaW46IDE3cHggMCAxN3B4IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "DIGs":
/*!*************************************************!*\
  !*** ./src/app/services/mock-server.service.ts ***!
  \*************************************************/
/*! exports provided: MockServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServerService", function() { return MockServerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MockServerService {
    constructor() {
        this.currentUser = null;
        this.projects = [];
        this.users = [];
        this.tickets = [];
        this.comments = [];
        this.statuses = [];
        this.priorities = [];
        this.ticketsSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.tickets$ = this.ticketsSub.asObservable();
        this.ticketsChangedSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.ticketsChanged$ = this.ticketsChangedSub.asObservable();
        this.setUsers();
        this.setPriorities();
        this.setProjects();
        this.setStatuses();
        this.setTickets();
        localStorage.setItem('github_username', 'moment');
        localStorage.setItem('github_repository', 'moment-timezone');
        if (localStorage['debugLoggenIn'] && JSON.parse(localStorage['debugLoggenIn']) === true) {
            this.currentUser = this.users[0];
        }
    }
    signIn(model) {
        if (model) {
            const user = this.users.find(u => u.email === model.email && u.password === model.password);
            if (user) {
                this.currentUser = user;
                return true;
            }
        }
        return false;
    }
    getCurrentUser() {
        return this.currentUser;
    }
    getAllProjects() {
        return this.projects;
    }
    getProjects(userId) {
        return this.projects.filter(proj => proj.members.some(membr => membr.id === userId));
    }
    getTickets() {
        this.ticketsSub.next(this.tickets);
    }
    getStatuses() {
        return this.statuses;
    }
    getPriorities() {
        return this.priorities;
    }
    getUsers() {
        return this.users;
    }
    addNewTicket(ticket) {
        if (ticket) {
            this.tickets.push(ticket);
        }
        this.ticketsSub.next(this.tickets);
        //this.ticketsChangedSub.next();
    }
    updateTicket(updatedTicket) {
        if (updatedTicket) {
            const ticket = this.tickets.find(t => t.id === updatedTicket.id);
            if (ticket) {
                ticket.description = updatedTicket.description;
                ticket.assignedTo = updatedTicket.assignedTo;
                ticket.priority = updatedTicket.priority;
            }
            this.ticketsSub.next(this.tickets);
            return true;
        }
        return false;
    }
    deleteTicket(ticketId) {
        this.tickets = this.tickets.filter(t => t.id !== +ticketId);
        this.ticketsSub.next(this.tickets);
    }
    getNextTicketId() {
        return Math.max(...this.tickets.map(t => t.id)) + 1;
    }
    setUsers() {
        this.users = [
            {
                id: 1,
                name: 'Maxim',
                email: 'admin@admin.com'
            },
            {
                id: 2,
                name: 'Joe',
                email: 'joe@joe.com'
            },
            {
                id: 3,
                name: 'User',
                email: 'user@gmail.com',
                password: 'user'
            },
        ];
    }
    setPriorities() {
        this.priorities = [
            { id: 1, name: 'high priority', headerColor: '#fa7f7f', verticalLibeColor: '#c44341', backgroundColor: '#ffb3b3' },
            { id: 2, name: 'medium priority', headerColor: '#94D4EF', backgroundColor: '#D0F2F6' },
            { id: 3, name: 'low priority', headerColor: '#FFF', backgroundColor: '#FFF' },
        ];
    }
    setProjects() {
        this.projects = [
            {
                id: 1,
                name: 'MyLinuxOS',
                avatar: 'https://sun9-32.userapi.com/impf/AnFKT-gNYUTtwhIU6uVlvAIyYKJKu48qv-jO2w/gKC8CMourvA.jpg?size=789x779&quality=96&sign=8c43b3474d3143f9c1d84291a945cb7d&type=album',
                updatedOn: new Date(),
            },
            {
                id: 2,
                name: 'MyChat',
                avatar: 'https://sun9-53.userapi.com/impf/NH983_S95DXePJBjpBz-FeLI1duM8edBBO82XA/EccHADL3WVY.jpg?size=793x685&quality=96&sign=622b772a4dd303fe5d1c3f07aba55887&type=album',
                updatedOn: new Date(),
            },
            {
                id: 3,
                name: 'Instagram',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png',
                updatedOn: new Date(),
            },
            {
                id: 4,
                name: 'Figma',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
                updatedOn: new Date(),
            },
        ];
    }
    setStatuses() {
        this.statuses = [
            {
                id: 1,
                name: 'New',
            },
            {
                id: 2,
                name: 'Approved',
            },
            {
                id: 3,
                name: 'Develop',
            },
            {
                id: 4,
                name: 'Ready',
            },
            {
                id: 5,
                name: 'QA',
            },
            {
                id: 6,
                name: 'Testing',
            },
            {
                id: 7,
                name: 'Done',
            },
            {
                id: 8,
                name: 'Done2',
            },
        ];
    }
    setTickets() {
        const [high_pr, medium_pr, low_pr] = [...this.priorities];
        const [user1, user2] = [...this.users];
        this.tickets = [
            {
                id: 3001,
                assignedTo: user1,
                statusId: 1,
                type: 'bug',
                priority: low_pr,
                title: 'fix button on sign up form and make it do 10.5 api calls to currency.com',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3002,
                assignedTo: user1,
                statusId: 1,
                type: 'bug',
                priority: low_pr,
                title: 'fix select on sign up form',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3015,
                assignedTo: user1,
                statusId: 1,
                type: 'bug',
                priority: medium_pr,
                title: 'fix 2 buttons on sign up form',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3006,
                assignedTo: user1,
                statusId: 1,
                type: 'bug',
                priority: medium_pr,
                title: 'fix logout',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3018,
                assignedTo: user2,
                statusId: 2,
                type: 'bug',
                priority: medium_pr,
                title: 'fix button on sign up form',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3020,
                assignedTo: user2,
                statusId: 2,
                type: 'bug',
                priority: high_pr,
                title: 'fix everything on sign up form',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3007,
                assignedTo: user2,
                statusId: 3,
                type: 'bug',
                priority: low_pr,
                title: 'fix styles',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3066,
                assignedTo: user2,
                statusId: 4,
                type: 'bug',
                priority: high_pr,
                title: 'fix all buttons',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
            {
                id: 3024,
                assignedTo: user1,
                statusId: 5,
                type: 'bug',
                priority: low_pr,
                title: 'fix button on sign up form',
                description: 'create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.',
            },
        ];
    }
}
MockServerService.ɵfac = function MockServerService_Factory(t) { return new (t || MockServerService)(); };
MockServerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MockServerService, factory: MockServerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "author ya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "https://github.com/QwertyForcee/projectManagementSystem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PIMA 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #1C191D;\n  color: white;\n  flex-wrap: wrap;\n}\n\n.footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  flex-direction: row;\n  justify-content: space-between;\n  display: flex;\n}\n\n.footer[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n@media (max-width: 800px) {\n  .footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .footer[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    overflow: hidden;\n  }\n}\n\n.footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: 100%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQUE7RUFDRjs7RUFFQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMxQzE5MUQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZvb3RlciBzZWN0aW9ue1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC5mb290ZXIgc2VjdGlvbiB7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5mb290ZXIgaDR7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-header/main-header.component */ "3a7M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'ClientApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_1__["MainHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UR1+":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mock-server.service */ "DIGs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class SignInComponent {
    constructor(mockService, router) {
        this.mockService = mockService;
        this.router = router;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
    }
    ngOnInit() {
        if (this.mockService.getCurrentUser()) {
            this.router.navigate(['prj/123']);
        }
    }
    submit() {
        const formValue = this.signUpForm.value;
        if (this.signUpForm.valid) {
            if (this.mockService.signIn(this.signUpForm.value)) {
                this.router.navigate(['prj/123']);
            }
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_2__["MockServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 16, vars: 1, consts: [[1, "about-section"], [1, "auth-section"], [1, "auth-form", 3, "formGroup", "ngSubmit"], [1, "email-control"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "your email..."], [1, "password-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "password..."], ["type", "submit", 1, "submit"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "PIMA is modern project management system, that satisfy all your needs as part of developing large project. Its fully free.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SIGN IN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signUpForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n\n.about-section[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  margin-bottom: 80px;\n  background: white;\n  color: #ACACAC;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.about-section[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #ACACAC;\n  height: 1px;\n  width: 80%;\n}\n\n.about-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-left: 15%;\n  margin-right: 15%;\n  font-weight: 400;\n}\n\n.auth-section[_ngcontent-%COMP%] {\n  height: max-content;\n  background: #BEF2E3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.auth-form[_ngcontent-%COMP%] {\n  margin: 100px 0 100px 0;\n  font-size: 170%;\n  overflow: auto;\n}\n\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 5px;\n  font-size: 75%;\n  background: #D7D7D7;\n  color: #848484;\n}\n\n.auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #848484;\n}\n\n.email-control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #740B6A;\n}\n\n.email-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #740B6A;\n}\n\n.password-control[_ngcontent-%COMP%] {\n  color: #AC39A1;\n}\n\n.password-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  border: 1px solid #AC39A1;\n}\n\n.submit[_ngcontent-%COMP%] {\n  font-size: 85%;\n  padding: 10px;\n  background: #EAEAEA;\n  border: 1px solid #D7D7D7;\n  width: 100%;\n}\n\n.ng-invalid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #af0000 !important;\n}\n\n.ng-invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #b60000;\n}\n\n.invalid-form[_ngcontent-%COMP%] {\n  color: #722b2b !important;\n  border: 1px solid #500808;\n}\n\n@media (max-width: 800px) {\n  .email-control[_ngcontent-%COMP%], .password-control[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .password-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFHQTtFQUVFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0FBREY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0VBRkY7O0VBS0E7SUFDRSxjQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzaWduLWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLmFib3V0LXNlY3Rpb257XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGNvbG9yOiAjQUNBQ0FDO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmFib3V0LXNlY3Rpb24gaHIge1xyXG5cclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0FDQUNBQztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uYWJvdXQtc2VjdGlvbiBoMXtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5hdXRoLXNlY3Rpb257XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBiYWNrZ3JvdW5kOiAjQkVGMkUzO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0ge1xyXG4gIG1hcmdpbjogMTAwcHggMCAxMDBweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTcwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmF1dGgtZm9ybSBpbnB1dCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBiYWNrZ3JvdW5kOiAjRDdEN0Q3O1xyXG4gIGNvbG9yOiAjODQ4NDg0O1xyXG59XHJcblxyXG4uYXV0aC1mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM4NDg0ODQ7XHJcbn1cclxuXHJcbi5lbWFpbC1jb250cm9sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjb2xvcjogIzc0MEI2QTtcclxufVxyXG5cclxuLmVtYWlsLWNvbnRyb2wgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3NDBCNkE7XHJcbn1cclxuXHJcblxyXG4ucGFzc3dvcmQtY29udHJvbCB7XHJcbiAgY29sb3I6ICNBQzM5QTE7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1jb250cm9sIGlucHV0IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUMzOUExO1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBmb250LXNpemU6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNFQUVBRUE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q3RDdENztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5nLWludmFsaWQgbGFiZWx7XHJcbiAgY29sb3I6ICNhZjAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5nLWludmFsaWQgaW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODIsIDAsIDApO1xyXG59XHJcblxyXG4uaW52YWxpZC1mb3JtIHtcclxuICBjb2xvcjogIzcyMmIyYiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig4MCwgOCwgOCk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5lbWFpbC1jb250cm9sLCAucGFzc3dvcmQtY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5wYXNzd29yZC1jb250cm9sIGlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "YqDg":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-stats/project-stats.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectStatsComponent", function() { return ProjectStatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var modules_GitHubIntegrationModule_github_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/GitHubIntegrationModule/github.api */ "zbpv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart/chart.component */ "0HKr");





function ProjectStatsComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-chart", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-chart", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useInfoPanel", true)("data", ctx_r0.contibutorsData)("limit", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("useInfoPanel", true)("data", ctx_r0.mockData2);
} }
class ProjectStatsComponent {
    constructor() {
        this.mockData1 = [
            { color: '#b851e0', percent: 30, label: 'Maxim (15)' },
            { color: '#239fa8', percent: 30, label: 'Joe (15)' },
            { color: '#0a632b', percent: 15, label: 'Nadya (8)' },
            { color: '#e7ff96', percent: 20, label: 'Kirill(10)' },
            { color: '#00ff96', percent: 5, label: 'Kirill2(1)' },
        ];
        this.mockData2 = [
            { color: '#993f3f', percent: 60, label: 'BUG' },
            { color: '#3f9699', percent: 40, label: 'FEATURE' },
        ];
        this.contibutorsData = [];
        this.contributersCount = 0;
        this.loadCharts = false;
    }
    ngOnInit() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const username = localStorage.getItem('github_username');
            const repository = localStorage.getItem('github_repository');
            if (username && repository) {
                const contributers = yield modules_GitHubIntegrationModule_github_api__WEBPACK_IMPORTED_MODULE_1__["GitHubAPI"].getContributors(username, repository);
                console.log(contributers);
                if (Array.isArray(contributers)) {
                    this.contributersCount = (_a = contributers.length) !== null && _a !== void 0 ? _a : 0;
                    const allContributions = contributers.map((count) => count.contributionsCount).reduce((val, count) => val += count, 0);
                    this.contibutorsData = contributers.map((c) => {
                        return {
                            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                            label: `${c.name} (${c.contributionsCount})`,
                            percent: (c.contributionsCount / allContributions * 100).toFixed(2),
                        };
                    });
                    this.loadCharts = true;
                }
                //color: `#${Math.random()}${Math.random()}${Math.random()}`,
            }
        });
    }
}
ProjectStatsComponent.ɵfac = function ProjectStatsComponent_Factory(t) { return new (t || ProjectStatsComponent)(); };
ProjectStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectStatsComponent, selectors: [["app-project-stats"]], decls: 14, vars: 2, consts: [["class", "charts-section", 4, "ngIf"], [1, "info-section"], ["src", "../../../assets/calendar.png", "width", "40px", "alt", ""], ["src", "../../../assets/member.png", "width", "40px", "alt", ""], ["src", "../../../assets/bug.png", "width", "40px", "alt", ""], ["src", "../../../assets/feature2.png", "width", "40px", "alt", ""], [1, "charts-section"], ["title", "Ticket creators", 3, "useInfoPanel", "data", "limit"], ["title", "Type of ticket", 3, "useInfoPanel", "data"]], template: function ProjectStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProjectStatsComponent_section_0_Template, 3, 5, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " 120 days of work on project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " 100 bugs solved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " 150 features added ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadCharts);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.contributersCount, " members ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.charts-section[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.charts-section[_ngcontent-%COMP%]   app-chart[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.info-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 10%;\n  margin-top: 10%;\n}\n\n.info-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 190%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (max-width: 800px) {\n  .info-section[_ngcontent-%COMP%], .charts-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    overflow: scroll;\n  }\n\n  .charts-section[_ngcontent-%COMP%]   app-chart[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LXN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBRUo7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSxzQkFBQTtJQUNBLGdCQUFBO0VBRU47O0VBQ0U7SUFDRSxtQkFBQTtFQUVKO0FBQ0YiLCJmaWxlIjoicHJvamVjdC1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmNoYXJ0cy1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uY2hhcnRzLXNlY3Rpb24gYXBwLWNoYXJ0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4uaW5mby1zZWN0aW9uIHB7XHJcbiAgICBmb250LXNpemU6IDE5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmluZm8tc2VjdGlvbiwgLmNoYXJ0cy1zZWN0aW9uIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0cy1zZWN0aW9uIGFwcC1jaGFydCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main-header/main-header.component */ "3a7M");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "UR1+");
/* harmony import */ var _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-projects/user-projects.component */ "u60W");
/* harmony import */ var _components_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project-overview/project-overview.component */ "+xeL");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/board/board.component */ "qtDB");
/* harmony import */ var _components_project_stats_project_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/project-stats/project-stats.component */ "YqDg");
/* harmony import */ var _components_project_team_project_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/project-team/project-team.component */ "cQGu");
/* harmony import */ var _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ticket/ticket.component */ "jvX9");
/* harmony import */ var _components_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/new-ticket/new-ticket.component */ "mbFw");
/* harmony import */ var _components_view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/view-ticket/view-ticket.component */ "pNcH");
/* harmony import */ var _components_board_settings_board_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/board-settings/board-settings.component */ "yZF2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/base-modal-window/base-modal-window.component */ "byKf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/chart/chart.component */ "0HKr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_3__["MainHeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"],
        _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_6__["UserProjectsComponent"],
        _components_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_7__["ProjectOverviewComponent"],
        _components_board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
        _components_project_stats_project_stats_component__WEBPACK_IMPORTED_MODULE_9__["ProjectStatsComponent"],
        _components_project_team_project_team_component__WEBPACK_IMPORTED_MODULE_10__["ProjectTeamComponent"],
        _components_ticket_ticket_component__WEBPACK_IMPORTED_MODULE_11__["TicketComponent"],
        _components_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_12__["NewTicketComponent"],
        _components_view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_13__["ViewTicketComponent"],
        _components_board_settings_board_settings_component__WEBPACK_IMPORTED_MODULE_14__["BoardSettingsComponent"],
        _components_base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_16__["BaseModalWindowComponent"],
        _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_18__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "byKf":
/*!*****************************************************************************!*\
  !*** ./src/app/components/base-modal-window/base-modal-window.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BaseModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModalWindowComponent", function() { return BaseModalWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BaseModalWindowComponent {
    constructor() {
        this.closeEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close() {
        this.closeEmitter.emit();
    }
    escapePressed(event) {
        this.closeEmitter.emit();
    }
}
BaseModalWindowComponent.ɵfac = function BaseModalWindowComponent_Factory(t) { return new (t || BaseModalWindowComponent)(); };
BaseModalWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BaseModalWindowComponent, selectors: [["app-base-modal-window"]], hostBindings: function BaseModalWindowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function BaseModalWindowComponent_keydown_escape_HostBindingHandler($event) { return ctx.escapePressed($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, outputs: { closeEmitter: "closeEmitter" }, decls: 2, vars: 0, template: function BaseModalWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "base-modal-window works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLW1vZGFsLXdpbmRvdy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "cQGu":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-team/project-team.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectTeamComponent", function() { return ProjectTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProjectTeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectTeamComponent.ɵfac = function ProjectTeamComponent_Factory(t) { return new (t || ProjectTeamComponent)(); };
ProjectTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectTeamComponent, selectors: [["app-project-team"]], decls: 73, vars: 0, consts: [[1, "project-info"], ["width", "30%", "src", "https://sun9-32.userapi.com/impf/AnFKT-gNYUTtwhIU6uVlvAIyYKJKu48qv-jO2w/gKC8CMourvA.jpg?size=789x779&quality=96&sign=8c43b3474d3143f9c1d84291a945cb7d&type=album", "alt", ""], [1, "project-team"], [1, "members-table"], [1, "members-table-header"], [1, "members-table-row"], ["scope", "col"], ["scope", "row"], [1, "action"]], template: function ProjectTeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My LinusOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "members:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date of joing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Maxim Maxim Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Maxim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "01.01.2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "01.01.2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.project-info[_ngcontent-%COMP%] {\n  padding: 60px 0px 60px 0px;\n  background: #F5ECFF;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.project-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  letter-spacing: 0.12em;\n  font-weight: 500;\n}\n\n.project-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 400;\n  letter-spacing: 0.12em;\n}\n\n.project-team[_ngcontent-%COMP%] {\n  background: #BEF2E3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 70%;\n}\n\n.members-table[_ngcontent-%COMP%] {\n  margin: 0 5% 0 5%;\n  background: #BEF2E3;\n  font-size: 125%;\n  border-collapse: collapse;\n}\n\n.members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 25%;\n}\n\n.members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 20%;\n}\n\n.members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  width: 20%;\n}\n\n.members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  width: 15%;\n}\n\n.members-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n}\n\n.members-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n}\n\n.members-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #BEF2E3;\n}\n\n.members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.members-table[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  display: block;\n  height: 4px;\n  width: 100%;\n  margin: 0;\n  background: #740B6A;\n}\n\n.members-table-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .members-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 3px solid #D1B0DD;\n}\n\n.members-table-header[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 15px;\n  border: #BEF2E3;\n}\n\n.members-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .members-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  color: #740B6A;\n  border: 1px solid #BEF2E3;\n}\n\n.action[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n  }\n\n  .project-team[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: scroll;\n    margin: 0;\n    align-items: flex-start;\n  }\n\n  .members-table[_ngcontent-%COMP%] {\n    font-size: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LXRlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUtBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1FO0VBQ0UsVUFBQTtBQUpKOztBQU9FO0VBQ0UsVUFBQTtBQUxKOztBQVFFO0VBQ0UsVUFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtBQVBKOztBQVVFO0VBQ0UsbUJBQUE7QUFSSjs7QUFXRTtFQUNFLHlCQUFBO0FBVEo7O0FBWUU7RUFDRSxtQkFBQTtBQVZKOztBQWFFO0VBQ0UsYUFBQTtBQVhKOztBQWVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBYko7O0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBZEo7O0FBa0JFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFoQko7O0FBbUJFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBakJKOztBQXNCQTtFQUNFLDBCQUFBO0FBbkJGOztBQXVCQTtFQUVFO0lBQ0Usc0JBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLHVCQUFBO0VBckJGOztFQXdCQTtJQUNFLGNBQUE7RUFyQkY7QUFDRiIsImZpbGUiOiJwcm9qZWN0LXRlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWluZm8ge1xyXG4gIHBhZGRpbmc6IDYwcHggMHB4IDYwcHggMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGNUVDRkY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbmZvIGgyIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbmZvIGgzIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG5cclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0LXRlYW0ge1xyXG4gIGJhY2tncm91bmQ6ICNCRUYyRTM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuXHJcbi5tZW1iZXJzLXRhYmxlIHtcclxuICBtYXJnaW46IDAgNSUgMCA1JTtcclxuXHJcbiAgYmFja2dyb3VuZDogI0JFRjJFMztcclxuICBmb250LXNpemU6IDEyNSU7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHJcblxyXG4gICYgdGhlYWQgdGg6bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAmIHRoZWFkIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxuXHJcbiAgJiB0aGVhZCB0aDpudGgtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICB9XHJcblxyXG4gICYgdGhlYWQgdGg6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG5cclxuICAmIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgfVxyXG5cclxuICAmIHRib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG5cclxuICAmIHRoIHtcclxuICAgIGJhY2tncm91bmQ6ICNCRUYyRTM7XHJcbiAgfVxyXG5cclxuICAmIHRkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgJiBociB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzQwQjZBO1xyXG4gIH1cclxuXHJcbiAgJi1yb3cgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRDFCMEREO1xyXG5cclxuICB9XHJcblxyXG4gICYtaGVhZGVyIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMCAxNXB4O1xyXG4gICAgYm9yZGVyOiAjQkVGMkUzO1xyXG4gIH1cclxuXHJcbiAgJi1oZWFkZXIgdGgsIHRyIHtcclxuICAgIGNvbG9yOiAjNzQwQjZBO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JFRjJFMztcclxuICB9XHJcblxyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cclxuICA6aG9zdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGVhbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5tZW1iZXJzLXRhYmxlIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "jvX9":
/*!*******************************************************!*\
  !*** ./src/app/components/ticket/ticket.component.ts ***!
  \*******************************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TicketComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.deleteTicket(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TicketComponent {
    constructor(element) {
        this.element = element;
        this.ticket = null;
        this.openingTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletingTicket = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showContextMenu = false;
    }
    ngOnInit() {
    }
    get headerColor() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.ticket) === null || _a === void 0 ? void 0 : _a.priority) === null || _b === void 0 ? void 0 : _b.headerColor) !== null && _c !== void 0 ? _c : 'white';
    }
    get backGroundColor() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.ticket) === null || _a === void 0 ? void 0 : _a.priority) === null || _b === void 0 ? void 0 : _b.backgroundColor) !== null && _c !== void 0 ? _c : 'white';
    }
    get verticalLineColor() {
        var _a, _b;
        return (_b = (_a = this.ticket) === null || _a === void 0 ? void 0 : _a.priority) === null || _b === void 0 ? void 0 : _b.verticalLibeColor;
    }
    openTicket() {
        var _a;
        this.openingTicket.emit((_a = this.ticket) === null || _a === void 0 ? void 0 : _a.id);
    }
    deleteTicket() {
        var _a;
        this.deletingTicket.emit((_a = this.ticket) === null || _a === void 0 ? void 0 : _a.id);
    }
    dragStart(event) {
        this.element.nativeElement.classList.add('dragging');
    }
    dragEnd(event) {
        this.element.nativeElement.classList.remove('dragging');
        const header = document.querySelector('.chosen-board-header');
        const columnId = header === null || header === void 0 ? void 0 : header.getAttribute('data-columnId');
        if (this.ticket && columnId) {
            this.ticket.statusId = +columnId;
        }
    }
    click(event) {
        this.showContextMenu = false;
    }
    mouseLeave(event) {
        this.showContextMenu = false;
    }
    onRightClick(event) {
        event.preventDefault();
        this.showContextMenu = true;
        setTimeout(() => {
            const menu = this.element.nativeElement.querySelector('.context-menu');
            menu.style.top = `${event.clientY}px`;
            menu.style.left = `${event.clientX}px`;
        }, 0);
    }
}
TicketComponent.ɵfac = function TicketComponent_Factory(t) { return new (t || TicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TicketComponent, selectors: [["app-ticket"]], hostBindings: function TicketComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function TicketComponent_dragstart_HostBindingHandler($event) { return ctx.dragStart($event); })("dragend", function TicketComponent_dragend_HostBindingHandler($event) { return ctx.dragEnd($event); })("click", function TicketComponent_click_HostBindingHandler($event) { return ctx.click($event); })("mouseleave", function TicketComponent_mouseleave_HostBindingHandler($event) { return ctx.mouseLeave($event); });
    } }, inputs: { ticket: "ticket" }, outputs: { openingTicket: "openingTicket", deletingTicket: "deletingTicket" }, decls: 17, vars: 10, consts: [["draggable", "true", 1, "ticket", 3, "contextmenu"], [1, "vertical-line"], [1, "horizontal-content"], ["width", "19", "height", "18", "viewBox", "0 0 19 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.73344 2.2538L11.398 7.22093L11.5123 7.56205H11.8721H17.2518L12.9008 10.7141L12.6059 10.9277L12.7187 11.2739L14.3814 16.3765L10.0264 13.2215L9.73306 13.009L9.43972 13.2215L5.08469 16.3765L6.74739 11.2739L6.86021 10.9277L6.56533 10.7141L2.21432 7.56205H7.59401H7.95372L8.06807 7.22099L9.73344 2.2538Z", "fill", "#FFF852", "stroke", "#7E8044"], [3, "click"], [1, ""], ["width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "9.73355", "cy", "10", "rx", "9.52749", "ry", "10", "fill", "#40C8F3"], ["d", "M9.161 13.752C9.07433 13.544 8.95733 13.2797 8.81 12.959C8.67133 12.6383 8.51967 12.2917 8.355 11.919C8.19033 11.5463 8.01267 11.165 7.822 10.775C7.64 10.3763 7.46667 10.0037 7.302 9.657C7.13733 9.30167 6.98133 8.98533 6.834 8.708C6.69533 8.43067 6.58267 8.21833 6.496 8.071C6.40067 9.09367 6.32267 10.203 6.262 11.399C6.20133 12.5863 6.14933 13.7867 6.106 15H4.871C4.90567 14.22 4.94467 13.4357 4.988 12.647C5.03133 11.8497 5.079 11.0697 5.131 10.307C5.19167 9.53567 5.25233 8.786 5.313 8.058C5.38233 7.33 5.456 6.641 5.534 5.991H6.639C6.873 6.37233 7.12433 6.823 7.393 7.343C7.66167 7.863 7.93033 8.409 8.199 8.981C8.46767 9.54433 8.72767 10.112 8.979 10.684C9.23033 11.2473 9.46 11.763 9.668 12.231C9.876 11.763 10.1057 11.2473 10.357 10.684C10.6083 10.112 10.8683 9.54433 11.137 8.981C11.4057 8.409 11.6743 7.863 11.943 7.343C12.2117 6.823 12.463 6.37233 12.697 5.991H13.802C14.0967 8.89433 14.3177 11.8973 14.465 15H13.23C13.1867 13.7867 13.1347 12.5863 13.074 11.399C13.0133 10.203 12.9353 9.09367 12.84 8.071C12.7533 8.21833 12.6363 8.43067 12.489 8.708C12.3503 8.98533 12.1987 9.30167 12.034 9.657C11.8693 10.0037 11.6917 10.3763 11.501 10.775C11.319 11.165 11.1457 11.5463 10.981 11.919C10.8163 12.2917 10.6603 12.6383 10.513 12.959C10.3743 13.2797 10.2617 13.544 10.175 13.752H9.161Z", "fill", "white"], ["class", "context-menu", 4, "ngIf"], [1, "context-menu"], ["src", "../../../assets/delete2.png", "width", "15px", "alt", ""]], template: function TicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TicketComponent_Template_div_contextmenu_0_listener($event) { return ctx.onRightClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TicketComponent_Template_a_click_6_listener() { return ctx.openTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ellipse", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TicketComponent_div_16_Template, 4, 0, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.verticalLineColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.headerColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticket == null ? null : ctx.ticket.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.backGroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ticket == null ? null : ctx.ticket.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ticket == null ? null : ctx.ticket.assignedTo == null ? null : ctx.ticket.assignedTo.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showContextMenu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".ticket[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #FFFFFF;\n  border: 1px solid #7E7E7E;\n  border-radius: 5px;\n  position: relative;\n  cursor: move;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);\n}\n\n.horizontal-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.horizontal-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.horizontal-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  border: 0.5px solid #7E7E7E;\n  border-radius: 4px;\n  padding-left: 15px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.horizontal-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 100%;\n  font-weight: 500;\n  margin: 0;\n  padding: 15px;\n}\n\n.horizontal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 15px;\n}\n\n.horizontal-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.context-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 101;\n  background: #F5E9FF;\n  padding: 5px 35px 5px 10px;\n  font-size: 115%;\n  border-radius: 2px;\n  box-shadow: 3px 2px 2px gray;\n}\n\n.context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.context-menu[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #00EFD1;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aWNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsMkNBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNJLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUhGOztBQU9BO0VBQ0ksU0FBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNFLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUhGIiwiZmlsZSI6InRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnRpY2tldCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN0U3RTdFO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhvcml6b250YWwtY29udGVudCBoNCwgaDUge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmhvcml6b250YWwtY29udGVudCBoNCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IC41cHggc29saWQgIzdFN0U3RTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG5cclxufVxyXG5cclxuLmhvcml6b250YWwtY29udGVudCBoNSB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICAvL3RleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmhvcml6b250YWwtY29udGVudCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZXh0LW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDE7XHJcbiAgYmFja2dyb3VuZDogI0Y1RTlGRjtcclxuICBwYWRkaW5nOiA1cHggMzVweCA1cHggMTBweDtcclxuICBmb250LXNpemU6IDExNSU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDNweCAycHggMnB4IGdyYXk7XHJcbn1cclxuXHJcbi5jb250ZXh0LW1lbnUgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRleHQtbWVudSBpbWcge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5jb250ZXh0LW1lbnUgYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogIzAwRUZEMTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "mbFw":
/*!***************************************************************!*\
  !*** ./src/app/components/new-ticket/new-ticket.component.ts ***!
  \***************************************************************/
/*! exports provided: NewTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTicketComponent", function() { return NewTicketComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-modal-window/base-modal-window.component */ "byKf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mock-server.service */ "DIGs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function NewTicketComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", pr_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pr_r2.name);
} }
function NewTicketComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", u_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](u_r3.name);
} }
class NewTicketComponent extends _base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_1__["BaseModalWindowComponent"] {
    constructor(mockService) {
        super();
        this.mockService = mockService;
        this.priorities = [];
        this.users = [];
        this.newTicketForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            "title": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            "type": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            "priority": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            "assignedToId": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            "description": new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](),
        });
    }
    get isValidForm() {
        return this.newTicketForm.valid;
    }
    ngOnInit() {
        this.users = this.mockService.getUsers();
        this.priorities = this.mockService.getPriorities();
    }
    submit() {
        if (this.newTicketForm.valid) {
            const formValues = this.newTicketForm.value;
            const ticket = {
                id: this.mockService.getNextTicketId(),
                title: formValues.title,
                type: formValues.type,
                priority: this.priorities.find(p => p.id === +formValues.priority),
                description: formValues.description,
                assignedTo: this.users.find(u => u.id === +formValues.assignedToId),
                statusId: 1,
            };
            console.log(ticket);
            this.mockService.addNewTicket(ticket);
            this.close();
        }
    }
}
NewTicketComponent.ɵfac = function NewTicketComponent_Factory(t) { return new (t || NewTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_3__["MockServerService"])); };
NewTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NewTicketComponent, selectors: [["app-new-ticket"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 47, vars: 5, consts: [[1, "modal"], [1, "modal-content"], [1, "modal-content-header"], ["src", "../../../assets/invoice.png", "width", "25px", "alt", ""], [3, "click"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "25", "height", "25", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0_388_12", "transform", "scale(0.00195312)"], ["id", "image0_388_12", "width", "512", "height", "512", 0, "xlink", "href", "data:image/png;base64,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"], [1, "modal-content-body"], [3, "formGroup", "ngSubmit"], [1, "controls-container"], ["for", ""], ["formControlName", "title", "type", "text", "placeholder", "your title here..."], [1, "one-line-controls"], ["formControlName", "type", "name", "", "id", ""], ["value", "feature"], ["value", "bug"], ["formControlName", "priority", "name", "", "id", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "assignedTo"], ["formControlName", "assignedToId", "name", "assignedTo", "id", ""], ["formControlName", "description", "id", "", "cols", "30", "rows", "10"], ["type", "submit"], [3, "value"]], template: function NewTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " CREATING NEW TICKET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NewTicketComponent_Template_a_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "pattern", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "image", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function NewTicketComponent_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, NewTicketComponent_option_34_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Assigned to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, NewTicketComponent_option_39_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "CREATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newTicketForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("valid-but", ctx.isValidForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".modal[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  overflow: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 120%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  display: flex;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-right: 15%;\n  margin-left: 15%;\n  background: #FDFBFF;\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%] {\n  background: #D5F7EE;\n  text-decoration: underline;\n  padding: 10px;\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%] {\n  background: #FDFBFF;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  font-size: 150%;\n  display: flex;\n  width: 100%;\n  margin-left: 3%;\n  color: #454448;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 100%;\n  background: unset;\n  border: 0;\n  height: min-content;\n  padding-left: 2%;\n  padding-right: 2%;\n  color: #454448;\n  text-decoration: underline;\n  font-weight: 400;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .valid-but[_ngcontent-%COMP%] {\n  background: #D79EE5 !important;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 2px solid #AFAFAF;\n  font-size: 90%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .one-line-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\r\n\r\n@media (max-width: 800px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .modal-content[_ngcontent-%COMP%]   .one-line-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-content-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9tb2RhbC1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxuZXctdGlja2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTtFQUNOLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQ3hCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBSEo7O0FBTUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFKSjs7QUFPRTtFQUNFLDhCQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBTko7O0FBU0U7OztFQUdFLHlCQUFBO0VBQ0EsY0FBQTtBQVBKOztBQVVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVdFO0VBQ0UsVUFBQTtBQVRKOztBQVlFO0VBQ0UsV0FBQTtBQVZKOztBQWFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFYSjs7QUFjRTtFQUNFO0lBQ0UsU0FBQTtFQVpKO0VBZUU7SUFDRSxzQkFBQTtFQWJKO0VBZ0JFO0lBQ0Usc0JBQUE7RUFkSjtBQUNGIiwiZmlsZSI6Im5ldy10aWNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudC1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudC1ib2R5IHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufSIsIkBpbXBvcnQgdXJsKFwiLi4vLi4vY29tbW9uL21vZGFsLXN0eWxlcy5zY3NzXCIpO1xyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIGJhY2tncm91bmQ6ICNGREZCRkY7XHJcblxyXG4gICYtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNENUY3RUU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmLWhlYWRlciBwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAmLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI0ZERkJGRjtcclxuICB9XHJcblxyXG4gICYtYm9keSBmb3JtIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIGNvbG9yOiAjNDU0NDQ4O1xyXG4gIH1cclxuXHJcbiAgJi1ib2R5IGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMiU7XHJcbiAgICBjb2xvcjogIzQ1NDQ0ODtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcblxyXG4gIC52YWxpZC1idXQge1xyXG4gICAgYmFja2dyb3VuZDogI0Q3OUVFNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2xzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG5cclxuICAuY29udHJvbHMtY29udGFpbmVyIGlucHV0LFxyXG4gIHRleHRhcmVhLFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xyXG4gICAgZm9udC1zaXplOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuY29udHJvbHMtY29udGFpbmVyIHNlbGVjdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2xzLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRyb2xzLWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5vbmUtbGluZS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAmIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5vbmUtbGluZS1jb250cm9scyB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgJi1ib2R5IGZvcm0ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "pNcH":
/*!*****************************************************************!*\
  !*** ./src/app/components/view-ticket/view-ticket.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTicketComponent", function() { return ViewTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var modules_GitHubIntegrationModule_github_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/GitHubIntegrationModule/github.api */ "zbpv");
/* harmony import */ var modules_GitHubIntegrationModule_parse_commit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/GitHubIntegrationModule/parse-commit */ "qI9c");
/* harmony import */ var modules_GitHubIntegrationModule_search_result_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modules/GitHubIntegrationModule/search-result-validation */ "0jRP");
/* harmony import */ var _base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-modal-window/base-modal-window.component */ "byKf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mock-server.service */ "DIGs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ViewTicketComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", u_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", u_r5.id === (ctx_r0.ticket == null ? null : ctx_r0.ticket.assignedTo == null ? null : ctx_r0.ticket.assignedTo.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", u_r5.name, " ");
} }
function ViewTicketComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", pr_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", pr_r6.id === (ctx_r1.ticket == null ? null : ctx_r1.ticket.priority == null ? null : ctx_r1.ticket.priority.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", pr_r6.name, "");
} }
function ViewTicketComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r7.user == null ? null : c_r7.user.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r7.text);
} }
function ViewTicketComponent_button_45_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewTicketComponent_button_45_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.toggleHideBut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.hideButtonState, " ");
} }
function ViewTicketComponent_ul_46_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const commit_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", commit_r11.url, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", commit_r11.message, " ");
} }
function ViewTicketComponent_ul_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewTicketComponent_ul_46_li_1_Template, 4, 2, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r4.searchCommits);
} }
class ViewTicketComponent extends _base_modal_window_base_modal_window_component__WEBPACK_IMPORTED_MODULE_5__["BaseModalWindowComponent"] {
    constructor(mockService) {
        super();
        this.mockService = mockService;
        this.ticket = null;
        this.users = [];
        this.priorities = [];
        this.searchCommits = null;
        this.displayCommits = false;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "message": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.ticketForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            "type": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "priority": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "assignedToId": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            "description": new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    get hideButtonState() {
        return this.displayCommits ? 'Hide' : 'Show';
    }
    get isValidForm() {
        return this.commentForm.valid;
    }
    ngOnInit() {
        var _a, _b, _c, _d;
        this.users = this.mockService.getUsers();
        this.priorities = this.mockService.getPriorities();
        this.ticketForm.setValue({
            "type": (_a = this.ticket) === null || _a === void 0 ? void 0 : _a.type,
            "priority": (_b = this.ticket) === null || _b === void 0 ? void 0 : _b.priority.id,
            "assignedToId": (_c = this.ticket) === null || _c === void 0 ? void 0 : _c.assignedTo.id,
            "description": (_d = this.ticket) === null || _d === void 0 ? void 0 : _d.description
        });
    }
    commentFormSubmit() {
        var _a, _b, _c;
        if (this.commentForm.valid) {
            const comment = { user: this.mockService.getCurrentUser(), text: this.commentForm.value.message };
            if (this.ticket && !((_a = this.ticket) === null || _a === void 0 ? void 0 : _a.comments)) {
                this.ticket.comments = [];
            }
            (_c = (_b = this.ticket) === null || _b === void 0 ? void 0 : _b.comments) === null || _c === void 0 ? void 0 : _c.push(comment);
            this.commentForm.patchValue({
                message: '',
            });
        }
    }
    ticketFormSubmit() {
        var _a, _b;
        if (this.ticketForm.valid) {
            const formValues = this.ticketForm.value;
            const ticket = this.ticket;
            if (ticket) {
                ticket.priority = (_a = this.priorities.find(p => p.id === +formValues.priority)) !== null && _a !== void 0 ? _a : ticket.priority;
                ticket.description = formValues.description;
                ticket.assignedTo = (_b = this.users.find(u => u.id === +formValues.assignedToId)) !== null && _b !== void 0 ? _b : ticket.assignedTo;
                const updateResult = this.mockService.updateTicket(ticket);
                if (updateResult)
                    this.close();
            }
        }
    }
    loadCommits() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const username = localStorage.getItem('github_username');
            const repository = localStorage.getItem('github_repository');
            if (username && repository) {
                const result = yield modules_GitHubIntegrationModule_github_api__WEBPACK_IMPORTED_MODULE_2__["GitHubAPI"].searchCommitsByMessage(username, repository, 'fix');
                if (Object(modules_GitHubIntegrationModule_search_result_validation__WEBPACK_IMPORTED_MODULE_4__["validSearchResponse"])(result)) {
                    this.searchCommits = result.items.map((i) => Object(modules_GitHubIntegrationModule_parse_commit__WEBPACK_IMPORTED_MODULE_3__["parseCommit"])(i, username, repository));
                    this.displayCommits = true;
                }
            }
        });
    }
    toggleHideBut() {
        this.displayCommits = !this.displayCommits;
    }
}
ViewTicketComponent.ɵfac = function ViewTicketComponent_Factory(t) { return new (t || ViewTicketComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_7__["MockServerService"])); };
ViewTicketComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewTicketComponent, selectors: [["app-view-ticket"]], inputs: { ticket: "ticket" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 47, vars: 11, consts: [[1, "modal"], [1, "modal-content"], [1, "modal-content-header"], ["width", "25", "height", "25", "viewBox", "0 0 19 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M9.73344 2.2538L11.398 7.22093L11.5123 7.56205H11.8721H17.2518L12.9008 10.7141L12.6059 10.9277L12.7187 11.2739L14.3814 16.3765L10.0264 13.2215L9.73306 13.009L9.43972 13.2215L5.08469 16.3765L6.74739 11.2739L6.86021 10.9277L6.56533 10.7141L2.21432 7.56205H7.59401H7.95372L8.06807 7.22099L9.73344 2.2538Z", "fill", "#FFF852", "stroke", "#7E8044"], [3, "click"], ["width", "25", "height", "25", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "25", "height", "25", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0_388_12", "transform", "scale(0.00195312)"], ["id", "image0_388_12", "width", "512", "height", "512", 0, "xlink", "href", "data:image/png;base64,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"], [1, "modal-content-body"], [3, "formGroup", "ngSubmit"], [1, "controls-container"], ["for", ""], ["formControlName", "description", "name", "", "cols", "30", "rows", "10"], [1, "one-line-controls"], ["formControlName", "assignedToId"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["formControlName", "priority"], [3, "selected", "value", 4, "ngFor", "ngForOf"], ["type", "submit"], [1, "comment-section"], ["class", "comment-container", 4, "ngFor", "ngForOf"], [1, "commentForm", 3, "formGroup", "ngSubmit"], ["name", "messageInput", "formControlName", "message", "cols", "50", "rows", "3"], [1, "commits-section"], [1, "commits-section-buttons"], ["src", "../../../assets/github-turquoise.png", "width", "30px", "alt", ""], ["class", "hide-button", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "value", "selected"], [3, "selected", "value"], [1, "comment-container"], ["width", "30px", "src", "../../../assets/temp_ava.jpg", "alt", ""], [1, "hide-button", 3, "click"], ["src", "../../../assets/show.png", "width", "15px", "alt", ""], [4, "ngFor", "ngForOf"], [3, "href"], ["src", "../../../assets/link.png", "width", "15px", "alt", ""]], template: function ViewTicketComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewTicketComponent_Template_a_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "rect", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "pattern", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "use", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "image", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ViewTicketComponent_Template_form_ngSubmit_16_listener() { return ctx.ticketFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "              create new user.\nset up required modules.\ngo to main module.\napp throws null reference exception.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ViewTicketComponent_option_26_Template, 2, 3, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ViewTicketComponent_option_31_Template, 2, 3, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "section", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ViewTicketComponent_div_35_Template, 6, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "form", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ViewTicketComponent_Template_form_ngSubmit_36_listener() { return ctx.commentFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Leave a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewTicketComponent_Template_button_click_42_listener() { return ctx.loadCommits(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ViewTicketComponent_button_45_Template, 3, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ViewTicketComponent_ul_46_Template, 2, 1, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.ticket == null ? null : ctx.ticket.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ticketForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ticket == null ? null : ctx.ticket.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.commentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("valid-but", ctx.isValidForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" search commits with id(", ctx.ticket == null ? null : ctx.ticket.id, ") in message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searchCommits);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayCommits);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: [".modal[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  overflow: auto;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 120%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  display: flex;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-right: 15%;\n  margin-left: 15%;\n  margin-bottom: 5%;\n  background: #FDFBFF;\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%] {\n  background: #D5F7EE;\n  text-decoration: underline;\n  padding: 10px;\n}\r\n\r\n.modal-content-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%] {\n  flex-direction: column;\n  background: #FDFBFF;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  font-size: 150%;\n  display: flex;\n  width: 100%;\n  margin-left: 3%;\n  color: #454448;\n}\r\n\r\n.modal-content-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 100%;\n  background: unset;\n  border: 0;\n  height: min-content;\n  padding-left: 5%;\n  padding-right: 5%;\n  color: #454448;\n  background: #D79EE5;\n  text-decoration: underline;\n  font-weight: 400;\n  width: 20%;\n  margin-top: 5%;\n  margin-right: 5%;\n  margin-left: 5%;\n  width: min-content;\n  cursor: pointer;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 2px solid #AFAFAF;\n  font-size: 90%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 70%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .controls-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .one-line-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .comment-section[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  width: 100%;\n  padding-bottom: 50px;\n  background-color: #ffffff;\n  height: min-content;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%] {\n  margin: 15px 5% auto 5%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 3px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commentForm[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commentForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #bbbbbb;\n  margin: 0;\n  margin-left: 15px;\n  padding-left: 2%;\n  padding-right: 2%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .valid-but[_ngcontent-%COMP%] {\n  background: #D79EE5 !important;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%] {\n  background: #665266;\n  display: flex;\n  flex-direction: column;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section-buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  width: min-content;\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  padding: 5px;\n  background: unset;\n  color: #00EFD1;\n  font-size: 110%;\n  padding-bottom: 20px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 5%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n  display: block;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: white;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 80%;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #00EFD1;\n}\r\n\r\n.modal-content[_ngcontent-%COMP%]   .hide-button[_ngcontent-%COMP%] {\n  color: white !important;\n}\r\n\r\n@media (max-width: 800px) {\n  .modal-content[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-bottom: 5%;\n  }\n  .modal-content[_ngcontent-%COMP%]   .one-line-controls[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-content[_ngcontent-%COMP%]   .one-line-controls[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   .commits-section-buttons[_ngcontent-%COMP%], .modal-content-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .modal-content[_ngcontent-%COMP%]   .commits-section[_ngcontent-%COMP%], .modal-content[_ngcontent-%COMP%]   .comment-section[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbW1vbi9tb2RhbC1zdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx2aWV3LXRpY2tldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTixjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUN2QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7QUFGRjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBSko7O0FBT0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5KOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQVRKOztBQVlFOzs7RUFHRSx5QkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFjRTtFQUNFLFVBQUE7QUFaSjs7QUFlRTtFQUNFLFdBQUE7QUFiSjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQWRKOztBQWlCRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBZko7O0FBa0JFO0VBQ0UsdUJBQUE7QUFoQko7O0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFoQk47O0FBbUJJO0VBQ0UsaUJBQUE7QUFqQk47O0FBb0JJOztFQUVFLGdCQUFBO0VBQ0EsV0FBQTtBQWxCTjs7QUFzQkU7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFwQko7O0FBdUJFO0VBQ0UsV0FBQTtBQXJCSjs7QUF3QkU7RUFDRSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsOEJBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUF4Qko7O0FBMEJJO0VBQ0UsYUFBQTtBQXhCTjs7QUEyQkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBekJOOztBQThCSTtFQUNFLGlCQUFBO0FBNUJOOztBQStCSTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBN0JOOztBQWlDSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBL0JOOztBQWtDSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBaENOOztBQW1DSTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtBQWpDTjs7QUFzQ0U7RUFDRSx1QkFBQTtBQXBDSjs7QUF1Q0U7RUFDRTtJQUNFLFNBQUE7SUFDQSxpQkFBQTtFQXJDSjtFQXdDRTtJQUNFLHNCQUFBO0VBdENKO0VBeUNFOztJQUdFLHNCQUFBO0VBeENKO0VBMkNFOztJQUVFLGNBQUE7RUF6Q0o7QUFDRiIsImZpbGUiOiJ2aWV3LXRpY2tldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50LWhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50LWJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59IiwiQGltcG9ydCB1cmwoXCIuLi8uLi9jb21tb24vbW9kYWwtc3R5bGVzLnNjc3NcIik7XHJcblxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjRkRGQkZGO1xyXG5cclxuXHJcbiAgJi1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0Q1RjdFRTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcblxyXG4gICYtaGVhZGVyIHAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAmLWJvZHkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQ6ICNGREZCRkY7XHJcbiAgfVxyXG5cclxuICAmLWJvZHkgZm9ybSB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBjb2xvcjogIzQ1NDQ0ODtcclxuICB9XHJcblxyXG4gICYtYm9keSBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gICAgY29sb3I6ICM0NTQ0NDg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDc5RUU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuICAuY29udHJvbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5jb250cm9scy1jb250YWluZXIgaW5wdXQsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICB9XHJcblxyXG4gIC5jb250cm9scy1jb250YWluZXIgc2VsZWN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuY29udHJvbHMtY29udGFpbmVyIGlucHV0IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG5cclxuICAuY29udHJvbHMtY29udGFpbmVyIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9uZS1saW5lLWNvbnRyb2xzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG5cclxuICAuY29tbWVudC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMTVweCA1JSBhdXRvIDUlO1xyXG5cclxuICAgICYgaDUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJiBpbWcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAmIGg1LFxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbjogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbW1lbnRGb3JtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY29tbWVudEZvcm0gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmJiYmI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICB9XHJcblxyXG4gIC52YWxpZC1idXQge1xyXG4gICAgYmFja2dyb3VuZDogI0Q3OUVFNSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNvbW1pdHMtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY1MjY2O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJi1idXR0b25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAmIGJ1dHRvbiB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgICAgY29sb3I6ICMwMEVGRDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAmIGltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAmIGxpIHtcclxuICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgJiBhOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGNvbG9yOiAjMDBFRkQxO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5oaWRlLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgJiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm9uZS1saW5lLWNvbnRyb2xzIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAub25lLWxpbmUtY29udHJvbHMsXHJcbiAgICAuY29tbWl0cy1zZWN0aW9uLWJ1dHRvbnMsXHJcbiAgICAmLWJvZHkgZm9ybSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbW1pdHMtc2VjdGlvbixcclxuICAgIC5jb21tZW50LXNlY3Rpb24ge1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ "qI9c":
/*!*********************************************************!*\
  !*** ./modules/GitHubIntegrationModule/parse-commit.ts ***!
  \*********************************************************/
/*! exports provided: parseCommit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCommit", function() { return parseCommit; });
/* harmony import */ var _parse_commit_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-commit-url */ "+MYx");

function parseCommit(data, username, repository) {
    return {
        authorName: data.author.login,
        authorId: data.author.id,
        message: data.commit.message,
        sha: data.sha,
        url: username && repository ? Object(_parse_commit_url__WEBPACK_IMPORTED_MODULE_0__["parseCommitUrl"])(username, repository, data.sha) : null,
    };
}


/***/ }),

/***/ "qtDB":
/*!*****************************************************!*\
  !*** ./src/app/components/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mock-server.service */ "DIGs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-ticket/new-ticket.component */ "mbFw");
/* harmony import */ var _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-ticket/view-ticket.component */ "pNcH");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ticket/ticket.component */ "jvX9");







function BoardComponent_app_new_ticket_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-ticket", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEmitter", function BoardComponent_app_new_ticket_0_Template_app_new_ticket_closeEmitter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.closeNewTicketView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_app_view_ticket_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view-ticket", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEmitter", function BoardComponent_app_view_ticket_1_Template_app_view_ticket_closeEmitter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeTicketView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ticket", ctx_r1.getTicketToView());
} }
function BoardComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", u_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r10.name);
} }
function BoardComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pr_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", pr_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pr_r11.name);
} }
function BoardComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r12.name, " ");
} }
function BoardComponent_div_41_app_ticket_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-ticket", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openingTicket", function BoardComponent_div_41_app_ticket_1_Template_app_ticket_openingTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.openTicket($event); })("deletingTicket", function BoardComponent_div_41_app_ticket_1_Template_app_ticket_deletingTicket_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deleteTicket($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ticket_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ticket", ticket_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-ticketId", ticket_r15.id);
} }
function BoardComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_div_41_app_ticket_1_Template, 1, 2, "app-ticket", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r13 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-columnId", status_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.getTicketsByStatusId(status_r13.id));
} }
class BoardComponent {
    constructor(mockService, element) {
        this.mockService = mockService;
        this.element = element;
        this.headersEventsInited = false;
        this.filters = {
            type: [],
            assignedTo: [],
            priority: []
        };
        //tickets$: Observable<Ticket[]>;
        this.tickets = [];
        this.statuses = [];
        this.priorities = [];
        this.users = [];
        this.creatingNewTicket = false;
        this.viewTicket = false;
        this.viewTicketId = 0;
        this.mockService.tickets$.subscribe({
            next: (e) => {
                this.tickets = e;
            }
        });
        this.mockService.getTickets();
    }
    ngAfterViewChecked() {
        if (!this.headersEventsInited) {
            this.headersEventsInited = true;
            const headers = this.element.nativeElement.querySelectorAll('div.board-column');
            headers.forEach((header) => {
                header.addEventListener('dragover', () => {
                    header.classList.add('chosen-board-header');
                });
                header.addEventListener('dragleave', () => {
                    setTimeout(() => {
                        header.classList.remove('chosen-board-header');
                    }, 0);
                });
            });
        }
    }
    ngOnInit() {
        this.statuses = this.mockService.getStatuses();
        this.priorities = this.mockService.getPriorities();
        //this.tickets = this.mockService.getTickets();
        this.users = this.mockService.getUsers();
    }
    getTicketsByStatusId(statusId) {
        return this.tickets.filter(t => t.statusId === statusId && this.applyFilters(t));
    }
    createNewTicket() {
        this.creatingNewTicket = true;
    }
    openTicket(id) {
        this.viewTicket = true;
        this.viewTicketId = +id;
    }
    deleteTicket(id) {
        this.mockService.deleteTicket(id);
    }
    getTicketToView() {
        var _a;
        return (_a = this.tickets.find((t) => t.id === this.viewTicketId)) !== null && _a !== void 0 ? _a : null;
    }
    closeTicketView() {
        this.viewTicket = false;
    }
    closeNewTicketView() {
        this.creatingNewTicket = false;
    }
    applyFilters(ticket) {
        const [type, assignedTo, priority] = [
            this.filters.type.length === 0 ? true : this.filters.type.some(t => t === ticket.type),
            this.filters.assignedTo.length === 0 ? true : this.filters.assignedTo.some(t => +t === ticket.assignedTo.id || +t === 0),
            this.filters.priority.length === 0 ? true : this.filters.priority.some(t => +t === ticket.priority.id || +t === 0)
        ];
        return type && assignedTo && priority;
    }
    filterChange(e, filterName) {
        if (e && filterName && Object.keys(this.filters).includes(filterName)) {
            const v = [e.target.value];
            this.filters[filterName] = v;
        }
        /*if (e) {
          switch (filterName) {
            case 'priority': {
              this.filters.priority = [+(e.target.value)];
              break;
            }
            case 'assignedTo': {
              this.filters.assignedTo = [+(e.target.value)];
              break;
            }
          }
        }*/
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__["MockServerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 42, vars: 8, consts: [[3, "closeEmitter", 4, "ngIf"], [3, "ticket", "closeEmitter", 4, "ngIf"], [1, "board-screen"], [1, "filters-section"], [1, "new-item-but", 3, "click"], ["name", "", "id", "", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["width", "23", "height", "12", "viewBox", "0 0 23 12", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2 2L11.8267 9L22 2", "stroke", "black", "stroke-width", "3.5"], ["value", ""], ["value", "bug"], ["value", "feature"], ["value", "0", "disabled", "", "selected", ""], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "board"], [1, "board-head"], ["class", "board-header", 4, "ngFor", "ngForOf"], [1, "board-body"], ["class", "board-column", "draggable", "false", 4, "ngFor", "ngForOf"], [3, "closeEmitter"], [3, "ticket", "closeEmitter"], [3, "value"], ["value", "", 3, "value"], [1, "board-header"], ["draggable", "false", 1, "board-column"], [3, "ticket", "openingTicket", "deletingTicket", 4, "ngFor", "ngForOf"], [3, "ticket", "openingTicket", "deletingTicket"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BoardComponent_app_new_ticket_0_Template, 1, 0, "app-new-ticket", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_app_view_ticket_1_Template, 1, 1, "app-view-ticket", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_4_listener() { return ctx.createNewTicket(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BoardComponent_Template_select_change_8_listener($event) { return ctx.filterChange($event, "type"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bug");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BoardComponent_Template_select_change_20_listener($event) { return ctx.filterChange($event, "assignedTo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Assigned To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, BoardComponent_option_27_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BoardComponent_Template_select_change_29_listener($event) { return ctx.filterChange($event, "priority"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Priority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BoardComponent_option_36_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, BoardComponent_p_39_Template, 2, 1, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BoardComponent_div_41_Template, 2, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.creatingNewTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blured", ctx.creatingNewTicket || ctx.viewTicket);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_4__["NewTicketComponent"], _view_ticket_view_ticket_component__WEBPACK_IMPORTED_MODULE_5__["ViewTicketComponent"], _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_6__["TicketComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: stretch;\n  background: #F8F7F9;\n}\n\n.board-screen[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 40px;\n  display: flex;\n  flex-direction: row;\n}\n\n.new-item-but[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 125%;\n  padding: 10px;\n  width: 75%;\n  border: 1px solid #C2F9EF;\n  border-radius: 5%;\n  background: #C2F9EF;\n}\n\n.new-item-but[_ngcontent-%COMP%]:focus {\n  outline-color: #6bb7a9;\n}\n\n.filters-section[_ngcontent-%COMP%] {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (max-width: 800px) {\n  .filters-section[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n\n.filters-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  display: flex;\n  flex-flow: wrap column;\n}\n\n.filters-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: right;\n  list-style-type: none;\n  padding: 15px;\n  align-content: right;\n}\n\n.filters-section[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 0px;\n  background: unset;\n  font-size: 110%;\n  text-align: right;\n}\n\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n  min-height: 0;\n}\n\n.board-head[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 1.5px solid #C0BBC7;\n  font-size: 125%;\n  display: flex;\n  border-radius: 5px;\n  min-width: min-content;\n  width: 100%;\n}\n\n.board-header[_ngcontent-%COMP%] {\n  width: 250px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n}\n\n.board-column[_ngcontent-%COMP%] {\n  width: 240px;\n  margin-left: 5px;\n  margin-right: 5px;\n  padding-bottom: 100px;\n  height: 100%;\n  background: #EDEDED;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n\n.board-column[_ngcontent-%COMP%]   app-ticket[_ngcontent-%COMP%] {\n  margin: 4px 5px 4px 5px;\n}\n\n.board-body[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n@media (max-width: 800px) {\n  .board-screen[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .board-header[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .board-column[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFFQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFERjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBTUU7RUFHRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFUSjs7QUFZRTtFQUNFLHVCQUFBO0FBVko7O0FBYUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQVhKOztBQWNFO0VBQ0U7SUFDRSxzQkFBQTtFQVpKO0VBZUU7SUFDRSxZQUFBO0VBYko7RUFnQkU7SUFDRSxZQUFBO0VBZEo7QUFDRiIsImZpbGUiOiJib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBiYWNrZ3JvdW5kOiAjRjhGN0Y5O1xyXG59XHJcblxyXG4uYm9hcmQtc2NyZWVuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5ldy1pdGVtLWJ1dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0MyRjlFRjtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBiYWNrZ3JvdW5kOiAjQzJGOUVGO1xyXG59XHJcblxyXG4ubmV3LWl0ZW0tYnV0OmZvY3VzIHtcclxuICBvdXRsaW5lLWNvbG9yOiAjNmJiN2E5O1xyXG59XHJcblxyXG4uZmlsdGVycy1zZWN0aW9uIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5maWx0ZXJzLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlcnMtc2VjdGlvbiB1bCB7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiB3cmFwIGNvbHVtbjtcclxufVxyXG5cclxuLmZpbHRlcnMtc2VjdGlvbiBsaSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZmlsdGVycy1zZWN0aW9uIHNlbGVjdCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmJvYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMDtcclxuXHJcblxyXG4gICYtaGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjQzBCQkM3O1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAmLWhlYWRlciB7XHJcbiAgICAvL21hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJi1jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNFREVERUQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICAmLWNvbHVtbiBhcHAtdGlja2V0IHtcclxuICAgIG1hcmdpbjogNHB4IDVweCA0cHggNXB4XHJcbiAgfVxyXG5cclxuICAmLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgJi1zY3JlZW4ge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICYtaGVhZGVyIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/mock-server.service */ "DIGs");


class AuthGuard {
    constructor(mockService) {
        this.mockService = mockService;
    }
    canActivate(route, state) {
        return !!this.mockService.currentUser;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__["MockServerService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "u60W":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-projects/user-projects.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsComponent", function() { return UserProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mock-server.service */ "DIGs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserProjectsComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", prj_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", prj_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" updated on: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, prj_r1.updatedOn, "shortDate"), " ");
} }
class UserProjectsComponent {
    constructor(mockService) {
        this.mockService = mockService;
        this.projects = [];
    }
    ngOnInit() {
        this.projects = this.mockService.getAllProjects();
        console.log(this.projects);
    }
}
UserProjectsComponent.ɵfac = function UserProjectsComponent_Factory(t) { return new (t || UserProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mock_server_service__WEBPACK_IMPORTED_MODULE_1__["MockServerService"])); };
UserProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProjectsComponent, selectors: [["app-user-projects"]], decls: 10, vars: 1, consts: [[1, "projects-section"], [1, "projects-table"], [4, "ngFor", "ngForOf"], ["alt", "", 3, "src"], [1, "date"], [1, "action"]], template: function UserProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Maxim Bystrov projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserProjectsComponent_tr_9_Template, 12, 6, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".projects-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.projects-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 150%;\n}\n\n.projects-table[_ngcontent-%COMP%] {\n  margin: 0 15% 0 15%;\n  table-layout: fixed;\n  border-collapse: collapse;\n  width: 55%;\n  font-size: 120%;\n  overflow: auto;\n}\n\n.projects-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\n  width: 5%;\n}\n\n.projects-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  width: 40%;\n}\n\n.projects-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\n  width: 25%;\n}\n\n.projects-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  width: 10%;\n}\n\n.projects-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5) {\n  width: 5%;\n}\n\n.projects-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.projects-table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n}\n\n.date[_ngcontent-%COMP%] {\n  color: #5C5B60;\n}\n\n.action[_ngcontent-%COMP%] {\n  text-align: start;\n  text-decoration: underline;\n}\n\n@media (max-width: 800px) {\n  .projects-table[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n  }\n\n  .projects-section[_ngcontent-%COMP%] {\n    overflow: scroll;\n  }\n\n  .projects-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxVQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBRko7O0FBS0U7RUFDRSxVQUFBO0FBSEo7O0FBTUU7RUFDRSxTQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0FBTEo7O0FBUUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVdBO0VBQ0UsY0FBQTtBQVJGOztBQVdBO0VBQ0UsaUJBQUE7RUFFQSwwQkFBQTtBQVRGOztBQVlBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQVRGOztFQVlBO0lBQ0UsZ0JBQUE7RUFURjs7RUFZQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJ1c2VyLXByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvamVjdHMtc2VjdGlvbiBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcblxyXG4ucHJvamVjdHMtdGFibGUge1xyXG4gIG1hcmdpbjogMCAxNSUgMCAxNSU7XHJcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiA1NSU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAmIHRoZWFkIHRoOm50aC1jaGlsZCgxKSB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgfVxyXG5cclxuICAmIHRoZWFkIHRoOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuXHJcbiAgJiB0aGVhZCB0aDpudGgtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gICYgdGhlYWQgdGg6bnRoLWNoaWxkKDQpIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAmIHRoZWFkIHRoOm50aC1jaGlsZCg1KSB7XHJcbiAgICB3aWR0aDogNSU7XHJcbiAgfVxyXG5cclxuICAmIHRoIHRkIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmIGltZyB7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgY29sb3I6ICM1QzVCNjA7XHJcbn1cclxuXHJcbi5hY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnByb2plY3RzLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0cy10YWJsZSB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _components_board_settings_board_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/board-settings/board-settings.component */ "yZF2");
/* harmony import */ var _components_board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board/board.component */ "qtDB");
/* harmony import */ var _components_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project-overview/project-overview.component */ "+xeL");
/* harmony import */ var _components_project_stats_project_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-stats/project-stats.component */ "YqDg");
/* harmony import */ var _components_project_team_project_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-team/project-team.component */ "cQGu");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "UR1+");
/* harmony import */ var _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-projects/user-projects.component */ "u60W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const projectOverviewRoutes = [
    { path: '', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"] },
    { path: 'board', component: _components_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"] },
    { path: 'stats', component: _components_project_stats_project_stats_component__WEBPACK_IMPORTED_MODULE_5__["ProjectStatsComponent"] },
    { path: 'team', component: _components_project_team_project_team_component__WEBPACK_IMPORTED_MODULE_6__["ProjectTeamComponent"] },
    { path: 'setting', component: _components_board_settings_board_settings_component__WEBPACK_IMPORTED_MODULE_2__["BoardSettingsComponent"] }
];
const routes = [
    { path: '', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: 'projects', component: _components_user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__["UserProjectsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
    { path: 'prj/:id', component: _components_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_4__["ProjectOverviewComponent"], children: projectOverviewRoutes, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yZF2":
/*!***********************************************************************!*\
  !*** ./src/app/components/board-settings/board-settings.component.ts ***!
  \***********************************************************************/
/*! exports provided: BoardSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardSettingsComponent", function() { return BoardSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BoardSettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
BoardSettingsComponent.ɵfac = function BoardSettingsComponent_Factory(t) { return new (t || BoardSettingsComponent)(); };
BoardSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardSettingsComponent, selectors: [["app-board-settings"]], decls: 56, vars: 0, consts: [[1, "board-setting"], ["width", "35", "height", "35", "viewBox", "0 0 25 25", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "25", "height", "25", "fill", "url(#pattern0)"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0_455_8", "transform", "scale(0.00195312)"], ["id", "image0_455_8", "width", "512", "height", "512", 0, "xlink", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4nO3dfaxl1Xnf8e+dYZgZmAG3wUMYXpwomDa2G5qYiJcmhTjCSRwIjWRaJxKV5aZKI1dy3JpajZwit6nV1NTui6XWTpy+oERVcKAEghPTxsRVDZZwEhODE3Dl1DbjAINhXmDe7+0f+4znzp37cs7Za+1nrbW/H2lrIrVmrXPOc579u+vsvfYC0jhsAb4TuAjYPTkuWvHvbmBH1AQ1iIPAHuAbk3+X/98n//0KcCxqgtJQFqInIGW0E/hR4G8BbwFeFTsdVeIl4EHgfwC/CxyInY6UhwFArbkIuJnupP8mYGvsdFS5I8Dv04WB++lWCSRJhdgO/DzwCLAILHl4ZDgW6Wrs5+lqTpIUZBPwDuBrxJ8cPMZ1fI2u9jYhSRrUTcAXiT8ReIz7+CJdLUqSMrsaeJj4xu/hsfx4mK42JUmJXQrcTXyj9/BY77ibrlal4nkXgGpwHXAvsCt6ItIUngN+Evhs9ESk9XgBi0r3duDTePJXPXbR1ezboycirWdz9ASkNWwCPgj8Mtap6rOZbi+KncD/pPt5QCqKPwGoROcB/x34seiJSAl8EngbsD96ItJyBgCV5nLgt4Hvjp6IlNCXgJ8Avhw9EekkA4BKcjnwKPBt0RORMngBuAZDgAphAFApzqM7+fuXv1r2JboQ4M8BCuddACrBJrrf/D35q3XfTVfr9l6F8+pqleCDwN+NnoQ0kNcCO4BPRU9E42YAULS3093qJ43JdcD/A/44eiIaL68BUKTr6DZMOTt6IlKAo8AP4Y6BCmIAUJRLgcdwhz+N23PAVXSPF5YG5YUoivIhPPlLu+i+C9LgXAFQhKvpbvmT1LkG+Fz0JDQurgAoghf9SafzO6HBGQA0tJuA66MnIRXmerrvhjQYfwLQkDYBjwOvj56IVKAngO8BFqMnonFwBUBDejue/KW1vJ7uOyINwhUADWU78BRwSfREpIJ9HbgCOBQ9EbXPFQAN5Wfx5C9t5BK674qUnQFAQ/k70ROQKuF3RYPwJwAN4SLgGaw3aRpLwMXAN6InoradFT0BjcLNlHfyXwQeAe6j25J4z+Q4EDkpZbcT2D05rgJuAa6lrNXQBbrvzMeiJyJJfT1I91dNCcchuscPX5j1FasmF9LVxCHi6/Pk8WDWVyxJA9gJHCa+oS4B9wCX5X25qthldDUSXadLdN+ZnXlfriTldSvxzXQRuIPyfoZQeRboamWR+Lq9NfNrlaSsfp34k/9t2V+lWnMb8SHg17O/SknKZAvwIrFN9I7sr1KtuoPY2n2R7jskSdW5gtgGeg8u+2t+C8RfE3BF9lcpSRncQFzjPIQX/Km/y4i9O+CG/C9RY1XSva9qz0WBY38E+Grg+GrDV+lqKUrkd0iNMwAop91B4y4CdwaNrfbcSdwjeqO+QxoBA4Byivrr5RHg2aCx1Z5n6WoqgisAysYAoJyi/nq5L2hctSuqplwBUDYGAOUU1bweCxpX7YqqKQOAsjEAKKeo5cs9QeOqXVE15U8AysZ7pJXTAWBHwLjn4VP9lNZOYH/AuAfxmQDKxACgnJaCxrWulYP1rKb4E4AkSSNkAJAkaYQMAJIkjZABQJKkETIASJI0QgYASZJGyAAgSdIIGQAkSRohA4AkSSNkAJAkaYQMAJIkjZABQJKkETIASJI0QgYASZJGqNXHTG4CrgXeCOwGLl7xr8/XliQtdwDYAzyz4t/PA48Ai3FTy6OlALADeDNwM3ATcEHsdCRJjdgLPADcD3wKOBg7nTRaCABXA+8DbgS2Bs9FktS2I8BDwC8BnwueSy81B4DLgQ8At0ZPRJI0SncDvwB8OXoi86gxALwa+GfAzwJbguciSRq3Y8BHgX8OPB88l5nUFgDeAvwGcH70RCRJWmYf8NPAg9ETmdbm6AnM4Hbg14Dt0RORJGmFbcBPAYeAzwbPZSo1rABsBX4FuC16IpIkTeEu4O/TXTBYrNIDwC7gPuCa6IlIkjSDR4FbgOeiJ7KWkgPAVuBhPPlLkur0KHADha4ElHwNwH8Gfjx6EpIkzekS4DXAvdETWU2pAeB24D3Rk5AkqacrgVco8MLAEn8CeAvddos+qEiS1IJFum3qi7pFsLQA8GrgabzPX5LUln3Aaylos6DSfgL4ZeBvRk9CkqTEttHtY/PJ6ImcVNIKwOXAk7i9rySpTceA11HIswNK+p39A3jylyS1awvdua4IpawAXE13v6QkSa27hgIeJVzKCsD7oicgSdJAijjnlbACsAPYS7fznyRJrTsCXAAcjJxECSsAb8aTvyRpPLbSnftClRAAbo6egCRJAws/90X/BLAJeJZuKUSSpLHYC1xIt0tgiOgVgGvx5C9JGp8L6M6BYaIDwBuDx5ckKUroOTA6AOwOHl+SpCih58DoAHBx8PiSJEUJPQdGBwBXACRJY+UKgCRJI+QKgCRJIzTqFQBJkhQgOgDsCR5fkqQooefA6ADwTPD4kiRFCT0HRgcAVwAkSWPlCoAkSSPkCoAkSSM06hWAzwePL0lSlNBzoI8DliRpeKN/HPAi8EDwHCRJGtoDBJ78IT4AANwfPQFJkgYWfu6L/gkAYAfdUsjW6IlIkjSAI3Q/fR+MnEQJKwAHgYeiJyFJ0kAeIvjkD2WsAABcDTwaPQlJkgZwDfC56EmUsAIA3Rtxd/QkJEnK7G4KOPlDOSsAAJcDTwJboiciSVIGx4DXAV+OngiUswIA3Rvy0ehJSJKUyUcp5OQPZa0AALwaeBo4P3oikiQltA94LfB89EROKmkFALo35qcJ3hxBkqSEFunObcWc/AE2R09gFU8Dh4AboyciSVIC7wX+a/QkVioxAAB8Fvgu4MroiUiS1MNdwO3Rk1hNadcALLcVeJjufklJkmrzKHAD3c5/xSntGoDljgC34AZBkqT6PEp3Divy5A9lBwCA5+jS013RE5EkaUp30Z27noueyHpKvQZguRPAvcArwA9T9s8WkqTxWqS74O92unNX0Wo7mb4F+A3cJ0CSVJZ9dLf6PRg9kWnVsAKw3NPAx4HtwPdS3/wlSW05BvxH4K3AF4LnMpPaVgCWuxz4AHBr9EQkSaN0N/ALFLS97yxqDgAnXQ28j27joK3Bc5Ekte0I8BDwSxTyVL95tRAATtoBvBm4GbgJuCB2OpKkRuwFHgDuBz4FHIydThotBYDlNgHXAm8EdgMXr/h3Z9zUJEkFOgDsAZ5Z8e/ngUfwGTWSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJK1iIXoCgf4X8KboSUiSQv0+8MPRk4iwKXoCgZ6PnoAkKdxozwVjDgDPRU9AkhRutOeCMQeA0aY+SdK3jPZcYACQJI3ZaM8FBgBJ0piN9lxgAJAkjdlozwVjDgCjvfBDkvQtoz0XjDkAjDb1SZK+ZbTngjFvBLQAHAM2R09EkhTiBLAFWIqeSIQxrwAsAS9ET0KSFOYFRnryh3EHABjx0o8kadzngLEHgNFe/CFJGvc5YOwBYNTpT5JGbtTnAAOAJGmsRn0OMABIksZq1OcAA4AkaaxGfQ4YewAY9QUgkjRyoz4HjD0AjDr9SdLIjfocYACQJI3VqM8BBgBJ0liN+hww5mcBQBeAjmEQkqSxWaR7DsBi9ESijP3Et4jPA5CkMXqBEZ/8wQAAI18CkqSRGn3vNwBYBJI0RqPv/QYAi0CSxmj0vd8AYBFI0hiNvvcbAEa+E5QkjdToe78BwBQoSWM0+t5vALAIJGmMRt/7z4qeQAFGXwTBloCHgU8CTwBP0n0m24CtwEXADwA/CNwInBczzeotAo8A9wGPAXsmB8DuyXEVcAtwLf5x0MeTdDX9aeAp4CVgH/Aq4PWT48eAG3Aztkj2fvEGupOQx7DHAeD9wGs2/oi+5XzgvXQnruj513IcAj4IXDjD+3zh5H9zqID513IsAr8NXDPD+/wauu/AgQLmP8bjDRt/RGrdLuILcWzHvcCl03w4a9gOfLSA11H6cQ9w2ZzvMZP/7T0FvI7SjyeBN875HkP3Xbi3gNcxtmPXNB+O2raZLr1HF+MYjkXgndN9LFN5K3CwgNdV2rEI3EGa5eWFyX/L78jqx0foAmkK78T3eahjka73S+wlviBbP44Bt037gczgRuBIAa+vlGORPO/zbXhyWnn8Yq93dHW30X1Xol9b68feaT8Qte9LxBdk68e7pv40ZvdWPDmdPO7o+V6u544CXl8px7/s+V6u510FvL7Wjy9N/WmoeZ8hviBbPh6c/qOY28cDX18pxz3kvap8Aa8JWKK7uj+nBbrvTPTrbPn4zNSfhpr3CeILstXjAMNcbHMB3eM9o19v1HGIfhf8Tesyxn13wGHgr/R+Fze2C+8OyHl8YvqPol3e69vxftB8PsYwW27uBf7VAOOU6iPAVwcY56uTscbqPwB/NsA4zwG/MsA4Y2XPxwBwksWQxzHgwwOOdxdwYsDxSrEI3DngeHdOxhyjjw041ofovkNKz56PAeAkiyGPPwC+PuB4fwH83oDjleIR4NkBx3t2MubY/AHw9IDjfX0yptKz52MAOMliyON/B4w5xgBw30jGjPY7AWNGfIfGwJ6PAeCk0T8WMpOI5vWnAWNGe2wkY0Z7ImBMA0Ae9nwMACeZBvP484AxxxgA9mz8/6WJMaNFBICI79AY2PMxAJxkMeTxSsCYX6e7zWdMDAD5LQFfCxg34js0BvZ8DAAnndwKWGm9HDDmIt3902MS8XrH+B5H3PkQ8R1q3RJuBQwYAE46TvfMbqV1VtC4fpZKLaqmor5DLXuJruePngHgFC8KSe9VQeMaAJRaVE1FfYdaZq+fMACc4m9C6RkA1AoDQDvs9RMGgFMsivQMAGqFAaAd9voJA8ApFkV6BgC1wgDQDnv9hAHgFIsiPQOAWmEAaIe9fsIAcIoXhqQX1bz2BY2rdkXVlAEgPXv9hAHgFFNheq4AqBWuALTDXj9hADjFokjv/KBxDQBKLaqmor5DLbPXTxgATrEo0nMFQK1wBaAd9voJA8ApFkV6BgC1wgDQDnv9hAHgFIsiPQOAWmEAaIe9fsIAcMoxPHGkZgBQKwwAbXiJrtcLA8BKJsO0vA1QrfA2wDbY45cxAJzO4kjLFQC1whWANtjjlzEAnM7iSOs8YCFg3BPAwYBx1aaDdDU1tAW675DSsccvYwA4nTtEpbUJ2Bk0tqsASiWqlnZij07NHr+MxXU602F6/gyg2rn83w57/DIGgNNZHOkZAFQ7A0A77PHLGABOZ3GkZwBQ7QwA7bDHL2MAOJ3FkZ4BQLUzALTDHr+MAeB0XiCSnnsBqHbuAdAOe/wyBoDTmQ7TcwVAtXMFoB32+GUMAKezONLzkcCqnY8Cboc9fhkDwOmOAvujJ9EYVwBUO1cA2rCfrsdrwgBwJhNiWgYA1c4A0AZ7+woGgDN5kUhaBgDVzgDQBnv7CgaAM5kS0zIAqHYGgDbY21cwAJzJIknL2wBVO28DbIO9fQUDwJkskrRcAVDtXAFog719BQPAmSyStLwNULXzNsA22NtXMACcyQtF0or6K+YY8ErQ2GrHK3S1FMEVgLTs7SsYAM5kSkxrM7AjaGxXAdRXVA3toPvuKB17+woGgDNZJOl5HYBq5e//7bC3r2AAOJNFkp4BQLUyALTD3r6CAeBMFkl6BgDVygDQDnv7CgaAMx0GDkRPojHuBaBauQdAGw7Q9XYtYwBYnUkxLVcAVCtXANpgT1+FAWB1Fkta7gWgWrkHQBvs6aswAKzOYknLFQDVyhWANtjTV2EAWJ3FkpYBQLUyALTBnr4KA8Dq3DEqLQOAamUAaIM9fRUGgNWZFtMyAKhWBoA22NNXYQBYncWSlrcBqlbeBtgGe/oqDACrs1jScgVAtXIFoA329FUYAFZnsaTlbYCqlbcBtsGevgoDwOq8YCQtVwBUK1cA2mBPX8VC9AQKtR2fJZ/SMeDsoLEPAduCxh5K1Pd4KWjcoRym6wURjgJbgsZu0Tl0vUDLuAKwukPAy9GTaMgWui9gBFcBNK+o2jkHT/4pvYwn/1UZANbmb0Zp+TOAauPyfxvs5WswAKzNoknLAKDaGADaYC9fgwFgbV40kpZ7Aag27gHQBnv5GgwAazM1puUKgGrjCkAb7OVrMACszaJJy70AVBv3AGiDvXwNBoC1WTRpuQKg2rgC0AZ7+RoMAGuzaNIyAKg2BoA22MvXYABYmxeOpGUAUG0MAG2wl6/BALA2U2NaBgDVxgDQBnv5GgwAa7No0jIAqDYGgDbYy9dgAFibRZOW+wCoNu4D0AZ7+RoMAGtz/+i0vA1QtfE2wPr5XJd1GADW58Uj6fgTgGrjTwD1s4evwwCwPpeO0jEAqDYGgPrZw9dhAFifxZNOVFM7RPdsdWkWR4n7CdAAkI49fB0GgPVZPOlsBbYFje0qgGYVVTPb6L4rSsMevg4DwPosnrT8GUC1cPm/DfbwdRgA1ucFJGl5K6Bq4S2AbbCHr8MAsD7TY1quAKgWrgC0wR6+DgPA+iyetNwLQLVwD4A22MPXYQBYn8WTlisAqoUrAG2wh6/DALA+iyctA4BqYQBogz18HQaA9XkBSVoGANXCANAGe/g6DADrOwgcjp5EQwwAqoUBoH6H6Xq41mAA2JhLSOkYAFQLA0D97N0bMABszCJKx30AVAv3AaifvXsDBoCNWUTpuAKgWrgCUD979wYMABvzIpJ03AdAtXAfgPrZuzdgANiYKTIdVwBUC1cA6mfv3oABYGMWUToGANXCAFA/e/cGDAAbs4jSiWpuLwPHg8ZWfY7T1UwEA0A69u4NGAA2ZhGlsx04O2hsVwE0rahaOZvuO6I07N0bMABszAtJ0vJWQJXOWwDbYO/egAFgY6bItLwOQKXz9/822Ls3YADYmEWUlrcCqnTeAtgGe/cGDAAb2w8ciZ5EQ1wBUOlcAajfEbrerXUYAKazN3oCDTEAqHQGgPrZs6dgAJiOF5OkYwBQ6QwA9bNnT8EAMB1/S0rHAKDSGQDqZ8+eggFgOhZTOgYAlc4AUD979hQMANOxmNJxHwCVzn0A6mfPnoIBYDoWUzquAKh0rgDUz549BQPAdLygJB33AVDp3AegfvbsKRgApmOaTMcVAJXOFYD62bOnYACYjsWUjgFApTMA1M+ePQUDwHQspnQMACqdAaB+9uwpGACmYzGlE9XkDgIngsZWPU7Q1UoEA0A69uwpGACm8xJwLHoSjTgXOCtg3CXcG1wb209XK0M7i+67of6O4YrfVAwA0zNRpuPPACqVy//1s1dPyQAwPYsqHW8FVKm8BbB+9uopGQCmZ1Gl4wqASuUKQP3s1VMyAEzPokrHAKBSGQDqZ6+ekgFgeu4slY4BQKUyANTPXj0lA8D0TJXpGABUKgNA/ezVUzIATM+iSscAoFIZAOpnr56SAWB6FlU6PhJYpfJRwPWzV0/JADA9iyodVwBUKlcA6mevnpIBYHpeWJKO+wCoVO4DUD979ZQMANMzVabjCoBK5QpA/ezVUzIATO8l4Hj0JBphAFCpDAB1O47f86kZAKa3BOyNnkQjDAAqlQGgbnuJeZhTlQwAs3FpKQ0DgEplAKibPXoGBoDZeHFJGlHNLupRr6pD5COjDQBp2KNnYACYjekyjR3A5oBxIxu8yhcVEDfTfSfUnz16BgaA2VhcaSwA5wWN7c8AWktUbZxH951Qf/boGRgAZmNxpeN1ACqNv//Xzx49AwPAbCyudAwAKo0BoH726BkYAGbjBSbpGABUGgNA/ezRMzAAzMZ0mY4BQKUxANTPHj0DA8BsLK50DAAqjQGgfvboGRgAZmNxpeMjgVUaHwVcP3v0DAwAs/kmcCJ6Eo1wBUClcQWgbifoerSmZACYjc8DSMdHAqs0Pgq4bj4HYEYGgNm5xJSGKwAqjSsAdbM3z8gAMDuLLA0DgEpjAKibvXlGBoDZWWRpGABUGgNA3ezNMzIAzM4iS8MAoNIYAOpmb56RAWB27jSVhgFApTEA1M3ePCMDwOxMmWlENb2oR76qbJGPijYApGFvnpEBYHYWWRpRj0A9ARwMGFdlO0jMHh+Rj8Zujb15RgaA2VlkaUQ2Pn8G0EpRNREVhFtkb56RAWB2Flk6XgegUvj7f/3szTMyAMzOC03SMQCoFAaA+tmbZ2QAmN03gcXoSTTCAKBSGADqtojPAZiZAWB2i8AL0ZNohAFApTAA1O0F/MNsZgaA+fhbUxo+Elil8FHAdbMnz8EAMB+LLQ1XAFQKVwDqZk+egwFgPl5skoaPBFYpfBRw3ezJczAAzMe0mYYrACqFKwB1syfPwQAwH4stDQOASmEAqJs9eQ4GgPlYbGkYAFQKA0Dd7MlzMADMx2JLwwCgUhgA6mZPnoMBYD5ecJKGAUClMADUzZ48BwPAfEybabgPgErhPgB1syfPwQAwH4stDVcAVApXAOpmT56Dj6Gcz2bgKAaovk4AW4ClgLEPAucGjJtD1Pc44nPL4WVgR8C4C8Axun6i+S0CZ9P1E83AE9h8TgAvRk+iAZuJabzgKoBOiaqFHXjyT+FFPPnPxQAwPy86ScOfARTN5f+62YvnZACYn785pWEAUDQDQN3sxXMyAMzPokvDAKBoBoC62YvnZACYn0WXhrcCKpq3ANbNXjwnA8D8LLo0XAFQNFcA6mYvnpMBYH5eeJKGjwRWNB8FXDd78ZwMAPMzdabhCoCiuQJQN3vxnAwA87Po0jAAKJoBoG724jkZAOZn0aVhAFA0A0Dd7MVzMgDMz6JLwwCgaAaAutmL52QAmN9e2tkLPZIBQNEMAPVaouvFmoMBYH7H8XkAKbgPgKK5D0C9XqTrxZqDAaAfl576cwVA0VwBqJc9uAcDQD8WX3/uA6Bo7gNQL3twDwaAfiy+/qL+CjoKHAoaW+U4RFcLEVwB6M8e3IMBoB93oOrvLODcoLFdBVBUDZxLV/vqxx7cgwGgH9NnGl4HoCj+/l83e3APBoB+LL40DACKYgComz24BwNAPxZfGt4KqCjeAlg3e3APBoB+LL40XAFQFFcA6mYP7sEA0I8XoKThrYCK4i2AdbMH92AA6Mf0mYYrAIriCkDd7ME9GAD6cQ/qNAwAimIAqJs9uAcDQD/H8CSSggFAUQwA9XqJrgdrTgaA/lyC6s8AoCgGgHrZe3syAPTnRSj9GQAUxQBQL3tvTwaA/kyh/bkPgKK4D0C97L09GQD6swj7cwVAUVwBqJe9tycDQH8WYX/uA6Ao7gNQL3tvTwaA/izC/lwBUBRXAOpl7+3JANCfF6L0F9UMDwNHgsZWvCN0NRDBANCfvbcnA0B/ptD+zga2B43tKsB4RX322+lqXv3Ye3syAPRnEabhzwAamsv/dbP39mQA6M8iTMMAoKEZAOpm7+3JANCfRZiGewFoaO4BUDd7b08GgP6O4kkkBW8F1NC8BbBe++h6r3owAKRhEu3PnwA0NH8CqJc9NwEDQBoWY38GAA3NAFAve24CBoA0LMb+DAAamgGgXvbcBAwAaViM/RkANDQDQL3suQkYANJwR6r+DAAamgGgXvbcBAwAaZhG+/M2QA3N2wDrZc9NwACQhsXYnysAGporAPWy5yZgAEjDYuzPfQA0NPcBqJc9NwEDQBoWY3+uAGhorgDUy56bgAEgDS9I6c8AoKEZAOplz01gIXoCjdhK3HPFW3GYuEcCHwW2BI2dQtT3eClo3BSOEfdI3kPAtqCxW7ENOBI9idq5ApDGEeBA9CQqt40uSEVwFWB8oj7zrXjy7+sAnvyTMACk429S/fkzgIbi8n+97LWJGADSsSj7cy8ADcU9AOplr03EAJCOF6X05wqAhuIKQL3stYkYANIxlfbnXgAainsA1Mtem4gBIB2Lsj9XADQUVwDqZa9NxACQjkXZnwFAQzEA1Mtem4gBIB2Lsj8DgIZiAKiXvTYRA0A6XpjSnwFAQzEA1Mtem4gBIB1TaX/eBqiheBtgvey1iRgA0rEo+3MFQENxBaBe9tpEDADpWJT9eRughuJtgPWy1yZiAEjnEPBy9CQq5wqAhuIKQJ1epuu1SsAAkJYXp/RjANBQDAB1sscmZABIy6WpfgwAGooBoE722IQMAGlZnP1ENceDwImgsTW8E3SfeQQDQD/22IQMAGlZnP2cA2wJGttVgPGI+qy30NW45mePTcgAkJbF2Z97ASg39wColz02IQNAWl6g0p/XASg3f/+vlz02IQNAWqbT/twLQLm5B0C97LEJGQDSsjj7cwVAubkCUC97bEIGgLQszv4MAMrNAFAve2xCBoC0LM7+DADKzQBQL3tsQgaAtLxApT8DgHIzANTLHpuQASCtVyaH5udtgMrN2wDrZH9NzACQnktU/bgCoNxcAaiTvTUxA0B6Fmk/3gao3LwNsE721sQMAOlZpP24AqDcXAGok701MQNAel6k0o8BQLkZAOpkb03MAJCeKbUfA4ByMwDUyd6amAEgPYu0HwOAcjMA1MnempgBID2LtJ+oJnkAWAwaW8NZpPusIxgA+rG3JmYASM8i7WcHsDlg3CVgf8C4GtZ+us96aJvpalvzs7cmZgBIzwtV+vNnAOXi8n+97K2JGQDSM6X2514AysU9AOplb03MAJCeRdqfKwDKxRWAetlbEzMApHcQOBw9icoZAJSLAaBOh+l6qxIyAORhUu3HAKBcDAB1sqdmYADIw4tV+jEAKBcDQJ3sqRkYAPIwrfZjAFAuBoA62VMzMADkYbH2E9Uso54Tr+FEfcYGgH7sqRkYAPKwWPvxNkDl4m2AdbKnZmAAyMNi7cefAJSLPwHUyZ6agQEgDy9Y6ccAoFwMAHWyp2ZgAMjDtNqPAUC5GADqZE/NwACQh8XajwFAuRgA6mRPzVuPiCQAAAczSURBVMAAkIfF2o8BQLkYAOpkT83AAJCHxdpPVLM8HjSuhhP1GRsA+rGnZmAAyGM/cCR6EhXbSUxtnhMwZgo7RzJmCucGjLmJet+vEhyh66lKzACQj4l1fgvApQHj1hoAdo9kzBQiPuNL6Wpa87GXZmIAyMei7ed1AWNeHDBmCgaA6X1HwJgRtdwSe2kmBoB8LNp+IprmDQFjpnDVSMZM4QcDxjQA9GMvzcQAkI9F289NAWO+KWDMFG4ZyZgpRASAiFpuib00EwNAPu5c1c/1DHsdwG7gBwYcL6VrgQsHHO/CyZg1uh64ZMDxLp2MqfnZSzMxAORjau1nAXjHgOO9Bzh7wPFS2kQ3/6G8h3p7xxbg3QOO9w68ALAve6mq8zPAkkev4yDDrAK8Gng54PWlPA4Bl6V+Y1Zx2WSs6Nfb5zgA7Er9xqziUroajn69tR8/M+sbr+nUmuJrYGrt71zg32UeYwH4Veq9BfCkbcC/Je9fmwuTMbZlHGMIO4D/Qv6/zD9MzL4DrbGXqjrXEZ+cWzneO+N7P4vbC3h9KY870r49p7mjgNeX8nhX2rfnNO8u4PW1clw343svhbuc+C9OK8cicNtsb/9U3gYcK+D11fBe3Tb5b0e/vpTHMfLVVWvvVeRx+WxvvxTvfOK/OC0dJ4B/Srpl2/fSbpNepPtrPcV7tTD5b7X8Xr0zwft08r36x8DRAl5XS8f5s3wIUimOEP/lae24F/j2WT6EFS4DfrOA1zHEcQ/9Lgy8bPLfiH4dQ9VVnwtOLwTuL+B1tHb4TBVV6xniv0AtHq8A/4bZgsBFwL+Y/G+j5z/kcQj4ILPtE3Dh5H9T+9X+sx4HgPcDr5nhvdpNd2Hk2OpqqOOZ6T8Kzcr7U/P6Y+DK6Ek0bBF4hO4vr0eBPcA36Or6kslxJfCTdBvXjLneT75X9wGP0b1Xeyb/b7snx1V0O/xdy7jvEFoCHgY+CTwxOb5Jd/fATrr36nq6nSOvod79I2rwBeCvR0+iVWNuiEP4FHBj9CQkqVIPAW+OnkSrxpzyh+D9q5I0P3toRgaAvCxeSZqfPTQjA0BeFq8kzc8empEBIC+LV5LmZw/NyACQl4+xlKT52UMzMgDkZXqVpPnZQzMyAORl8UrS/OyhGRkA8rJ4JWl+9tCM3AgorwW6B4OcFT0RSarMcbpdFpeiJ9IqVwDyWsIEK0nzeB5P/lkZAPIzAEjS7OydmRkA8rOIJWl29s7MDAD5WcSSNDt7Z2YGgPwsYkmanb0zMwNAfu5kJUmzs3dmZgDIzxQrSbOzd2ZmAMjPIpak2dk7MzMA5OcyliTNzt6ZmQEgvz+LnoAkVcjemZkBIL/ngWejJyFJFXkWfwLIzgAwjMejJyBJFbFnDsAAMAyLWZKmZ88cgAFgGH8SPQFJqog9cwAGgGGYZiVpevbMASxET2AktgIHgbOiJyJJhTsO7ACORE+kda4ADOMI8FT0JCSpAk/hyX8QBoDhPBw9AUmqgL1yIP4EMJzvBf4wehKSVLjvA/4oehJj4ArAcP4Ii1qS1mOfHJABYFi/Gj0BSSqYPXJA/gQwrFcBe4Dt0RORpMIcAnYDL0VPZCxcARjWS8BvRU9Ckgr0W3jyH5QBYHgucUnSmeyNA/MngBhPAa+NnoQkFeJp4IroSYyNKwAxfjF6ApJUEHtiAFcA4vwu8CPRk5CkYL8H/Gj0JMbIABDnu4AvAtuiJyJJQQ4DbwD+b/RExmhz9ARG7EW6APam6IlIUpD3A/dFT2KsXAGIdTbwBeCvRk9Ekgb2p8CVwNHoiYyVFwHGOgr8XPQkJCnAz+HJP5QBIN7DwF3Rk5CkAd2FT/0L508AZdhJ92X4vuiJSFJmfwjcAByInsjYGQDKsQv4P8Dl0RORpEy+DPwN4LnoicgAUJrvBD4LfHv0RCQpsb8ArgO+Ej0RdbwGoCxfodscaF/0RCQpoX10vc2Tf0EMAOV5HPgJug0yJKl2h+l62uPRE9HpDABl+gzwNuBE9EQkqYcTdL3sM9ET0ZkMAOW6D/hxYG/0RCRpDnvpepg7/RXKiwDLdynwm8A10RORpCk9Cvxt4GvRE9HafBZA+fYD/w04H7g6eC6StJF/D/wU3fNOVDBXAOpyK/Bxuo2DJKkkB4C/B9wdPRFNxwBQnyuATwB/LXoikjTxJ8BbgaeiJ6LpeRFgfZ4Cvh94F/Bs8FwkjduzdL3o+/HkXx1XAOp2DvAPgX8CfFvwXCSNxwvAvwY+ArwSPBfNyQDQhp3Au4F/RHexoCTlsA/4EPBhfJhP9QwAbflLwHuAfwD85eC5SGrHN4H/BNyJV/c3wwDQps3AtcBNk+P1sdORVKEngAcmxyO4M2lzDADj8B10O3LdBPwQsDV2OpIKdAT4NN0J/3eAP4+djnIzAIzPucD3ABfRPXZ4tX93AWdFTVBScseB54Bv0D2Wd7V/Hwdejpqghvf/Aakbq+uuJEdMAAAAAElFTkSuQmCC"], [1, "ticket-setting"], [1, "templates-container"]], template: function BoardSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Board + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Develop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Ready ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " QA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Done ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "pattern", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "image", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Priorities types ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 150%;\n  font-weight: 500;\n}\n\n.board-setting[_ngcontent-%COMP%] {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board-setting[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 100%;\n  padding: 0;\n  background-color: #CCCCCC;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.board-setting[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 120%;\n  width: 80%;\n  background-color: #FFFFFF;\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n  margin-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.ticket-setting[_ngcontent-%COMP%] {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.templates-container[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  background-color: #F8F7F9;\n  float: left;\n}\n\n@media (max-width: 800px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .board-setting[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib2FyZC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBS0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBRkY7O0VBS0E7SUFDRSxXQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJib2FyZC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuOmhvc3QgaDMge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYm9hcmQtc2V0dGluZyB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJiB1bCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmIGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRpY2tldC1zZXR0aW5nIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnRlbXBsYXRlcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY3Rjk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLXNldHRpbmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zbpv":
/*!*******************************************************!*\
  !*** ./modules/GitHubIntegrationModule/github.api.ts ***!
  \*******************************************************/
/*! exports provided: GitHubAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubAPI", function() { return GitHubAPI; });
class GitHubAPI {
    static getCommits(username, repository) {
        if (username && repository) {
            return fetch(`https://api.github.com/repos/${username}/${repository}/commits?page=1&per_page=50`)
                .then(response => response.json())
                .then(json => {
                const data = json.map((commit) => {
                    return {
                        authorName: commit.author.login,
                        authorId: commit.author.id,
                        message: commit.commit.message,
                        sha: commit.sha,
                        url: commit.url
                    };
                });
                return data;
            })
                .then(data => {
                return data;
            })
                .catch(error => {
                console.error(error);
            });
        }
        return Promise.resolve([]);
    }
    static getContributors(username, repository) {
        if (username && repository) {
            return fetch(`https://api.github.com/repos/${username}/${repository}/contributors`)
                .then(response => response.json())
                .then(data => {
                return data.map((c) => {
                    return {
                        id: c.id,
                        name: c.login,
                        contributionsCount: c.contributions,
                    };
                });
            })
                .catch(error => {
                console.error(error);
            });
        }
        return Promise.resolve([]);
    }
    static searchCommitsByMessage(username, repository, message) {
        if (username && repository && message) {
            return fetch(`https://api.github.com/search/commits?q=${message} repo:${username}/${repository}`) //q=${message} repo:${username}/${repository}
                .then(response => response.json())
                .then(data => {
                console.log(data);
                return data;
            });
        }
        return Promise.resolve([]);
    }
}
// export function getCommits(username: string, repository: string) {
//     if (username && repository) {
//         return fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
//             .then(response => response.json())
//             .then(data => {
//                 return data;
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     }
//     return []
// }


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map