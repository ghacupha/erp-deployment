"use strict";(self.webpackChunkerp_system=self.webpackChunkerp_system||[]).push([[425],{6425:(T,U,r)=>{r.r(U),r.d(U,{ErpServicePaymentCalculationModule:()=>mt});var o=r(3105),_=r(6983),d=r(8059),y=r(9112),c=r(4218),t=r(7716),C=r(8531),p=r(7857),g=r(8583),i=r(3679),m=r(486),Z=r(9577);function v(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(n);const l=t.oxw();return l.confirmDelete(l.paymentCalculation.id)}),t._uU(1,"\n  "),t.TgZ(2,"div",2),t._uU(3,"\n    "),t.TgZ(4,"h4",3),t._uU(5,"Confirm delete operation"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"button",4),t.NdJ("click",function(){return t.CHM(n),t.oxw().cancel()}),t._uU(8,"\xd7"),t.qZA(),t._uU(9,"\n  "),t.qZA(),t._uU(10,"\n\n  "),t.TgZ(11,"div",5),t._uU(12,"\n    "),t._UZ(13,"jhi-alert-error"),t._uU(14,"\n\n    "),t.TgZ(15,"p",6),t._uU(16,"Are you sure you want to delete this Payment Calculation?"),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n\n  "),t.TgZ(19,"div",7),t._uU(20,"\n    "),t.TgZ(21,"button",8),t.NdJ("click",function(){return t.CHM(n),t.oxw().cancel()}),t._uU(22,"\n      "),t._UZ(23,"fa-icon",9),t._uU(24,"\xa0"),t.TgZ(25,"span"),t._uU(26,"Cancel"),t.qZA(),t._uU(27,"\n    "),t.qZA(),t._uU(28,"\n\n    "),t.TgZ(29,"button",10),t._uU(30,"\n      "),t._UZ(31,"fa-icon",11),t._uU(32,"\xa0"),t.TgZ(33,"span"),t._uU(34,"Delete"),t.qZA(),t._uU(35,"\n    "),t.qZA(),t._uU(36,"\n  "),t.qZA(),t._uU(37,"\n"),t.qZA()}}let I=(()=>{class a{constructor(n,e){this.paymentCalculationService=n,this.activeModal=e}cancel(){this.activeModal.dismiss()}confirmDelete(n){this.paymentCalculationService.delete(n).subscribe(()=>{this.activeModal.close("deleted")})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(C.w),t.Y36(p.Kz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","paymentCalculationDeleteDialogHeading",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"close",3,"click"],[1,"modal-body"],["id","jhi-delete-paymentCalculation-heading"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["id","jhi-confirm-delete-paymentCalculation","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"]],template:function(n,e){1&n&&(t.YNc(0,v,38,0,"form",0),t._uU(1,"\n")),2&n&&t.Q6J("ngIf",e.paymentCalculation)},directives:[g.O5,i._Y,i.JL,i.F,m.A,Z.BN],encapsulation:2}),a})();var P=r(9003),E=r(1427),w=r(1408),O=r(8133);function J(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().search("")}),t._uU(1,"\n            "),t._UZ(2,"fa-icon",19),t._uU(3,"\n          "),t.qZA()}}function B(a,u){1&a&&(t.TgZ(0,"div",20),t._uU(1,"\n    "),t.TgZ(2,"span"),t._uU(3,"No paymentCalculations found"),t.qZA(),t._uU(4,"\n  "),t.qZA())}const M=function(a){return["/erp/payment-category",a,"view"]};function j(a,u){if(1&a&&(t.TgZ(0,"div"),t._uU(1,"\n              "),t.TgZ(2,"a",34),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.qZA()),2&a){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,M,null==n.paymentCategory?null:n.paymentCategory.id)),t.xp6(1),t.Oqu(null==n.paymentCategory?null:n.paymentCategory.id)}}const q=function(a){return["/erp/payment-calculation",a,"view"]},N=function(a){return["/erp/payment-calculation",a,"edit"]};function Q(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"tr",33),t._uU(1,"\n          "),t.TgZ(2,"td"),t._uU(3,"\n            "),t.TgZ(4,"a",34),t._uU(5),t.qZA(),t._uU(6,"\n          "),t.qZA(),t._uU(7,"\n          "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n          "),t.TgZ(11,"td"),t._uU(12),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"td"),t._uU(15),t.qZA(),t._uU(16,"\n          "),t.TgZ(17,"td"),t._uU(18),t.qZA(),t._uU(19,"\n          "),t.TgZ(20,"td"),t._uU(21,"\n            "),t.YNc(22,j,5,4,"div",17),t._uU(23,"\n          "),t.qZA(),t._uU(24,"\n          "),t.TgZ(25,"td",35),t._uU(26,"\n            "),t.TgZ(27,"div",36),t._uU(28,"\n              "),t.TgZ(29,"button",37),t._uU(30,"\n                "),t._UZ(31,"fa-icon",38),t._uU(32,"\n                "),t.TgZ(33,"span",39),t._uU(34,"View"),t.qZA(),t._uU(35,"\n              "),t.qZA(),t._uU(36,"\n\n              "),t.TgZ(37,"button",40),t._uU(38,"\n                "),t._UZ(39,"fa-icon",41),t._uU(40,"\n                "),t.TgZ(41,"span",39),t._uU(42,"Edit"),t.qZA(),t._uU(43,"\n              "),t.qZA(),t._uU(44,"\n\n              "),t.TgZ(45,"button",42),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).delete(s)}),t._uU(46,"\n                "),t._UZ(47,"fa-icon",43),t._uU(48,"\n                "),t.TgZ(49,"span",39),t._uU(50,"Delete"),t.qZA(),t._uU(51,"\n              "),t.qZA(),t._uU(52,"\n            "),t.qZA(),t._uU(53,"\n          "),t.qZA(),t._uU(54,"\n        "),t.qZA()}if(2&a){const n=u.$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(9,q,n.id)),t.xp6(1),t.Oqu(n.id),t.xp6(4),t.Oqu(n.paymentExpense),t.xp6(3),t.Oqu(n.withholdingVAT),t.xp6(3),t.Oqu(n.withholdingTax),t.xp6(3),t.Oqu(n.paymentAmount),t.xp6(4),t.Q6J("ngIf",n.paymentCategory),t.xp6(7),t.Q6J("routerLink",t.VKq(11,q,n.id)),t.xp6(8),t.Q6J("routerLink",t.VKq(13,N,n.id))}}function R(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"div",21),t._uU(1,"\n    "),t.TgZ(2,"table",22),t._uU(3,"\n      "),t.TgZ(4,"thead"),t._uU(5,"\n        "),t.TgZ(6,"tr",23),t.NdJ("predicateChange",function(l){return t.CHM(n),t.oxw().predicate=l})("ascendingChange",function(l){return t.CHM(n),t.oxw().ascending=l})("sortChange",function(){return t.CHM(n),t.oxw().loadPage()}),t._uU(7,"\n          "),t.TgZ(8,"th",24),t.TgZ(9,"span"),t._uU(10,"ID"),t.qZA(),t._uU(11," "),t._UZ(12,"fa-icon",25),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"th",26),t.TgZ(15,"span"),t._uU(16,"Payment Expense"),t.qZA(),t._uU(17," "),t._UZ(18,"fa-icon",25),t.qZA(),t._uU(19,"\n          "),t.TgZ(20,"th",27),t.TgZ(21,"span"),t._uU(22,"Withholding VAT"),t.qZA(),t._uU(23," "),t._UZ(24,"fa-icon",25),t.qZA(),t._uU(25,"\n          "),t.TgZ(26,"th",28),t.TgZ(27,"span"),t._uU(28,"Withholding Tax"),t.qZA(),t._uU(29," "),t._UZ(30,"fa-icon",25),t.qZA(),t._uU(31,"\n          "),t.TgZ(32,"th",29),t.TgZ(33,"span"),t._uU(34,"Payment Amount"),t.qZA(),t._uU(35," "),t._UZ(36,"fa-icon",25),t.qZA(),t._uU(37,"\n          "),t.TgZ(38,"th",30),t.TgZ(39,"span"),t._uU(40,"Payment Category"),t.qZA(),t._uU(41," "),t._UZ(42,"fa-icon",25),t.qZA(),t._uU(43,"\n          "),t._UZ(44,"th",31),t._uU(45,"\n        "),t.qZA(),t._uU(46,"\n      "),t.qZA(),t._uU(47,"\n      "),t.TgZ(48,"tbody"),t._uU(49,"\n        "),t.YNc(50,Q,55,15,"tr",32),t._uU(51,"\n      "),t.qZA(),t._uU(52,"\n    "),t.qZA(),t._uU(53,"\n  "),t.qZA()}if(2&a){const n=t.oxw();t.xp6(6),t.Q6J("predicate",n.predicate)("ascending",n.ascending),t.xp6(44),t.Q6J("ngForOf",n.paymentCalculations)("ngForTrackBy",n.trackId)}}const k=function(a,u,n){return{page:a,totalItems:u,itemsPerPage:n}};function Y(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n    "),t.TgZ(2,"div",44),t._uU(3,"\n      "),t._UZ(4,"jhi-item-count",45),t._uU(5,"\n    "),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",44),t._uU(8,"\n      "),t.TgZ(9,"ngb-pagination",46),t.NdJ("pageChange",function(l){return t.CHM(n),t.oxw().ngbPaginationPage=l})("pageChange",function(l){return t.CHM(n),t.oxw().loadPage(l)}),t.qZA(),t._uU(10,"\n    "),t.qZA(),t._uU(11,"\n  "),t.qZA()}if(2&a){const n=t.oxw();t.xp6(4),t.Q6J("params",t.kEZ(7,k,n.page,n.totalItems,n.itemsPerPage)),t.xp6(5),t.Q6J("collectionSize",n.totalItems)("page",n.ngbPaginationPage)("pageSize",n.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}const V=function(){return["/erp/payment-calculation/new"]};let H=(()=>{class a{constructor(n,e,l,s){var h;this.paymentCalculationService=n,this.activatedRoute=e,this.router=l,this.modalService=s,this.isLoading=!1,this.totalItems=0,this.itemsPerPage=c.gK,this.ngbPaginationPage=1,this.currentSearch=null!==(h=this.activatedRoute.snapshot.queryParams.search)&&void 0!==h?h:""}loadPage(n,e){var l;this.isLoading=!0;const s=null!==(l=null!=n?n:this.page)&&void 0!==l?l:1;this.currentSearch?this.paymentCalculationService.search({page:s-1,query:this.currentSearch,size:this.itemsPerPage,sort:this.sort()}).subscribe(h=>{this.isLoading=!1,this.onSuccess(h.body,h.headers,s,!e)},()=>{this.isLoading=!1,this.onError()}):this.paymentCalculationService.query({page:s-1,size:this.itemsPerPage,sort:this.sort()}).subscribe(h=>{this.isLoading=!1,this.onSuccess(h.body,h.headers,s,!e)},()=>{this.isLoading=!1,this.onError()})}search(n){this.currentSearch=n,this.loadPage(1)}ngOnInit(){this.handleNavigation()}trackId(n,e){return e.id}delete(n){const e=this.modalService.open(I,{size:"lg",backdrop:"static"});e.componentInstance.paymentCalculation=n,e.closed.subscribe(l=>{"deleted"===l&&this.loadPage()})}sort(){const n=[this.predicate+","+(this.ascending?c.aW:c.jo)];return"id"!==this.predicate&&n.push("id"),n}handleNavigation(){(0,y.aj)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([n,e])=>{var l;const s=e.get("page"),h=+(null!=s?s:1),A=(null!==(l=e.get(c._l))&&void 0!==l?l:n.defaultSort).split(","),F=A[0],L=A[1]===c.aW;(h!==this.page||F!==this.predicate||L!==this.ascending)&&(this.predicate=F,this.ascending=L,this.loadPage(h,!0))})}onSuccess(n,e,l,s){this.totalItems=Number(e.get("X-Total-Count")),this.page=l,this.ngbPaginationPage=this.page,s&&this.router.navigate(["/erp/payment-calculation"],{queryParams:{page:this.page,size:this.itemsPerPage,search:this.currentSearch,sort:this.predicate+","+(this.ascending?c.aW:c.jo)}}),this.paymentCalculations=null!=n?n:[],this.ngbPaginationPage=this.page}onError(){var n;this.ngbPaginationPage=null!==(n=this.page)&&void 0!==n?n:1}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(C.w),t.Y36(_.gz),t.Y36(_.F0),t.Y36(p.FF))},a.\u0275cmp=t.Xpm({type:a,selectors:[["jhi-payment-calculation"]],decls:59,vars:9,consts:[["id","page-heading","data-cy","PaymentCalculationHeading"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","mr-2",3,"disabled","click"],["icon","sync",3,"spin"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-payment-calculation",3,"routerLink"],["icon","plus"],[1,"hidden-sm-down"],[1,"row"],[1,"col-sm-12"],["name","searchForm",1,"form-inline"],[1,"input-group","w-100","mt-3"],["type","text","id","currentSearch","name","currentSearch","placeholder","Query",1,"form-control",3,"ngModel","ngModelChange"],[1,"input-group-append","btn","btn-info",3,"click"],["icon","search"],["class","input-group-append btn btn-danger",3,"click",4,"ngIf"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],[4,"ngIf"],[1,"input-group-append","btn","btn-danger",3,"click"],["icon","trash-alt"],["id","no-result",1,"alert","alert-warning"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["icon","sort"],["scope","col","jhiSortBy","paymentExpense"],["scope","col","jhiSortBy","withholdingVAT"],["scope","col","jhiSortBy","withholdingTax"],["scope","col","jhiSortBy","paymentAmount"],["scope","col","jhiSortBy","paymentCategory.id"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-right"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],[1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],[1,"row","justify-content-center"],[3,"params"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(n,e){1&n&&(t.TgZ(0,"div"),t._uU(1,"\n  "),t.TgZ(2,"h2",0),t._uU(3,"\n    "),t.TgZ(4,"span"),t._uU(5,"Payment Calculations"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",1),t._uU(8,"\n      "),t.TgZ(9,"button",2),t.NdJ("click",function(){return e.loadPage()}),t._uU(10,"\n        "),t._UZ(11,"fa-icon",3),t._uU(12,"\n        "),t.TgZ(13,"span"),t._uU(14,"Refresh List"),t.qZA(),t._uU(15,"\n      "),t.qZA(),t._uU(16,"\n\n      "),t.TgZ(17,"button",4),t._uU(18,"\n        "),t._UZ(19,"fa-icon",5),t._uU(20,"\n        "),t.TgZ(21,"span",6),t._uU(22," Create a new Payment Calculation "),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n    "),t.qZA(),t._uU(25,"\n  "),t.qZA(),t._uU(26,"\n\n  "),t._UZ(27,"jhi-alert-error"),t._uU(28,"\n\n  "),t._UZ(29,"jhi-alert"),t._uU(30,"\n\n  "),t.TgZ(31,"div",7),t._uU(32,"\n    "),t.TgZ(33,"div",8),t._uU(34,"\n      "),t.TgZ(35,"form",9),t._uU(36,"\n        "),t.TgZ(37,"div",10),t._uU(38,"\n          "),t.TgZ(39,"input",11),t.NdJ("ngModelChange",function(s){return e.currentSearch=s}),t.qZA(),t._uU(40,"\n\n          "),t.TgZ(41,"button",12),t.NdJ("click",function(){return e.search(e.currentSearch)}),t._uU(42,"\n            "),t._UZ(43,"fa-icon",13),t._uU(44,"\n          "),t.qZA(),t._uU(45,"\n\n          "),t.YNc(46,J,4,0,"button",14),t._uU(47,"\n        "),t.qZA(),t._uU(48,"\n      "),t.qZA(),t._uU(49,"\n    "),t.qZA(),t._uU(50,"\n  "),t.qZA(),t._uU(51,"\n\n  "),t.YNc(52,B,5,0,"div",15),t._uU(53,"\n\n  "),t.YNc(54,R,54,4,"div",16),t._uU(55,"\n\n  "),t.YNc(56,Y,12,11,"div",17),t._uU(57,"\n"),t.qZA(),t._uU(58,"\n")),2&n&&(t.xp6(9),t.Q6J("disabled",e.isLoading),t.xp6(2),t.Q6J("spin",e.isLoading),t.xp6(6),t.Q6J("routerLink",t.DdM(8,V)),t.xp6(22),t.Q6J("ngModel",e.currentSearch),t.xp6(7),t.Q6J("ngIf",e.currentSearch),t.xp6(6),t.Q6J("ngIf",0===(null==e.paymentCalculations?null:e.paymentCalculations.length)),t.xp6(2),t.Q6J("ngIf",e.paymentCalculations&&e.paymentCalculations.length>0),t.xp6(2),t.Q6J("ngIf",e.paymentCalculations&&e.paymentCalculations.length>0))},directives:[Z.BN,_.rH,m.A,P.w,i._Y,i.JL,i.F,i.Fj,i.JJ,i.On,g.O5,E.b,w.T,g.sg,_.yS,O.N,p.N9],encapsulation:2}),a})();const K=function(a){return["/erp/payment-label",a,"view"]};function z(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1,"\n            "),t.TgZ(2,"a",10),t._uU(3),t.qZA(),t._uU(4),t.qZA()),2&a){const n=u.$implicit,e=u.last;t.xp6(2),t.Q6J("routerLink",t.VKq(3,K,null==n?null:n.id)),t.xp6(1),t.Oqu(n.description),t.xp6(1),t.hij("",e?"":", ","\n          ")}}const W=function(a){return["/erp/payment-category",a,"view"]};function $(a,u){if(1&a&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.TgZ(2,"a",10),t._uU(3),t.qZA(),t._uU(4,"\n          "),t.qZA()),2&a){const n=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(2,W,null==n.paymentCalculation.paymentCategory?null:n.paymentCalculation.paymentCategory.id)),t.xp6(1),t.Oqu(null==n.paymentCalculation.paymentCategory?null:n.paymentCalculation.paymentCategory.id)}}const G=function(a){return["/erp/placeholder",a,"view"]};function X(a,u){if(1&a&&(t.TgZ(0,"span"),t._uU(1,"\n            "),t.TgZ(2,"a",10),t._uU(3),t.qZA(),t._uU(4),t.qZA()),2&a){const n=u.$implicit,e=u.last;t.xp6(2),t.Q6J("routerLink",t.VKq(3,G,null==n?null:n.id)),t.xp6(1),t.Oqu(n.description),t.xp6(1),t.hij("",e?"":", ","\n          ")}}const tt=function(a){return["/erp/payment-calculation",a,"edit"]};function nt(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n      "),t.TgZ(2,"h2",3),t.TgZ(3,"span"),t._uU(4,"Payment Calculation"),t.qZA(),t.qZA(),t._uU(5,"\n\n      "),t._UZ(6,"hr"),t._uU(7,"\n\n      "),t._UZ(8,"jhi-alert-error"),t._uU(9,"\n\n      "),t._UZ(10,"jhi-alert"),t._uU(11,"\n\n      "),t.TgZ(12,"dl",4),t._uU(13,"\n        "),t.TgZ(14,"dt"),t.TgZ(15,"span"),t._uU(16,"ID"),t.qZA(),t.qZA(),t._uU(17,"\n        "),t.TgZ(18,"dd"),t._uU(19,"\n          "),t.TgZ(20,"span"),t._uU(21),t.qZA(),t._uU(22,"\n        "),t.qZA(),t._uU(23,"\n        "),t.TgZ(24,"dt"),t.TgZ(25,"span"),t._uU(26,"Payment Expense"),t.qZA(),t.qZA(),t._uU(27,"\n        "),t.TgZ(28,"dd"),t._uU(29,"\n          "),t.TgZ(30,"span"),t._uU(31),t.qZA(),t._uU(32,"\n        "),t.qZA(),t._uU(33,"\n        "),t.TgZ(34,"dt"),t.TgZ(35,"span"),t._uU(36,"Withholding VAT"),t.qZA(),t.qZA(),t._uU(37,"\n        "),t.TgZ(38,"dd"),t._uU(39,"\n          "),t.TgZ(40,"span"),t._uU(41),t.qZA(),t._uU(42,"\n        "),t.qZA(),t._uU(43,"\n        "),t.TgZ(44,"dt"),t.TgZ(45,"span"),t._uU(46,"Withholding Tax"),t.qZA(),t.qZA(),t._uU(47,"\n        "),t.TgZ(48,"dd"),t._uU(49,"\n          "),t.TgZ(50,"span"),t._uU(51),t.qZA(),t._uU(52,"\n        "),t.qZA(),t._uU(53,"\n        "),t.TgZ(54,"dt"),t.TgZ(55,"span"),t._uU(56,"Payment Amount"),t.qZA(),t.qZA(),t._uU(57,"\n        "),t.TgZ(58,"dd"),t._uU(59,"\n          "),t.TgZ(60,"span"),t._uU(61),t.qZA(),t._uU(62,"\n        "),t.qZA(),t._uU(63,"\n        "),t.TgZ(64,"dt"),t.TgZ(65,"span"),t._uU(66,"Payment Label"),t.qZA(),t.qZA(),t._uU(67,"\n        "),t.TgZ(68,"dd"),t._uU(69,"\n          "),t.YNc(70,z,5,5,"span",5),t._uU(71,"\n        "),t.qZA(),t._uU(72,"\n        "),t.TgZ(73,"dt"),t.TgZ(74,"span"),t._uU(75,"Payment Category"),t.qZA(),t.qZA(),t._uU(76,"\n        "),t.TgZ(77,"dd"),t._uU(78,"\n          "),t.YNc(79,$,5,4,"div",2),t._uU(80,"\n        "),t.qZA(),t._uU(81,"\n        "),t.TgZ(82,"dt"),t.TgZ(83,"span"),t._uU(84,"Placeholder"),t.qZA(),t.qZA(),t._uU(85,"\n        "),t.TgZ(86,"dd"),t._uU(87,"\n          "),t.YNc(88,X,5,5,"span",5),t._uU(89,"\n        "),t.qZA(),t._uU(90,"\n      "),t.qZA(),t._uU(91,"\n\n      "),t.TgZ(92,"button",6),t.NdJ("click",function(){return t.CHM(n),t.oxw().previousState()}),t._uU(93,"\n        "),t._UZ(94,"fa-icon",7),t._uU(95,"\xa0"),t.TgZ(96,"span"),t._uU(97,"Back"),t.qZA(),t._uU(98,"\n      "),t.qZA(),t._uU(99,"\n\n      "),t.TgZ(100,"button",8),t._uU(101,"\n        "),t._UZ(102,"fa-icon",9),t._uU(103,"\xa0"),t.TgZ(104,"span"),t._uU(105,"Edit"),t.qZA(),t._uU(106,"\n      "),t.qZA(),t._uU(107,"\n    "),t.qZA()}if(2&a){const n=t.oxw();t.xp6(21),t.Oqu(n.paymentCalculation.id),t.xp6(10),t.Oqu(n.paymentCalculation.paymentExpense),t.xp6(10),t.Oqu(n.paymentCalculation.withholdingVAT),t.xp6(10),t.Oqu(n.paymentCalculation.withholdingTax),t.xp6(10),t.Oqu(n.paymentCalculation.paymentAmount),t.xp6(9),t.Q6J("ngForOf",n.paymentCalculation.paymentLabels),t.xp6(9),t.Q6J("ngIf",n.paymentCalculation.paymentCategory),t.xp6(9),t.Q6J("ngForOf",n.paymentCalculation.placeholders),t.xp6(12),t.Q6J("routerLink",t.VKq(9,tt,n.paymentCalculation.id))}}let et=(()=>{class a{constructor(n){this.activatedRoute=n,this.paymentCalculation=null}ngOnInit(){this.activatedRoute.data.subscribe(({paymentCalculation:n})=>{this.paymentCalculation=n})}previousState(){window.history.back()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(_.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["jhi-payment-calculation-detail"]],decls:8,vars:1,consts:[[1,"row","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","paymentCalculationDetailsHeading"],[1,"row-md","jh-entity-details"],[4,"ngFor","ngForOf"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],[3,"routerLink"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.YNc(4,nt,108,11,"div",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n"),t.qZA(),t._uU(7,"\n")),2&n&&(t.xp6(4),t.Q6J("ngIf",e.paymentCalculation))},directives:[g.O5,m.A,P.w,g.sg,Z.BN,_.rH,_.yS],encapsulation:2}),a})();var at=r(8939),f=r(8002),x=r(9717),it=r(9351),ot=r(5815),lt=r(2188);function rt(a,u){if(1&a&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&a){const n=u.$implicit,e=t.oxw();t.Q6J("ngValue",e.getSelectedPaymentLabel(n,e.editForm.get("paymentLabels").value)),t.xp6(1),t.hij("\n              ",n.description,"\n            ")}}function ct(a,u){if(1&a&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&a){const n=u.$implicit,e=t.oxw();t.Q6J("ngValue",n.id===(null==e.editForm.get("paymentCategory").value?null:e.editForm.get("paymentCategory").value.id)?e.editForm.get("paymentCategory").value:n),t.xp6(1),t.hij("\n              ",n.id,"\n            ")}}function ut(a,u){if(1&a&&(t.TgZ(0,"option",21),t._uU(1),t.qZA()),2&a){const n=u.$implicit,e=t.oxw();t.Q6J("ngValue",e.getSelectedPlaceholder(n,e.editForm.get("placeholders").value)),t.xp6(1),t.hij("\n              ",n.description,"\n            ")}}let S=(()=>{class a{constructor(n,e,l,s,h,A){this.paymentCalculationService=n,this.paymentLabelService=e,this.paymentCategoryService=l,this.placeholderService=s,this.activatedRoute=h,this.fb=A,this.isSaving=!1,this.paymentLabelsSharedCollection=[],this.paymentCategoriesSharedCollection=[],this.placeholdersSharedCollection=[],this.editForm=this.fb.group({id:[],paymentExpense:[],withholdingVAT:[],withholdingTax:[],paymentAmount:[],paymentLabels:[],paymentCategory:[],placeholders:[]})}ngOnInit(){this.activatedRoute.data.subscribe(({paymentCalculation:n})=>{this.updateForm(n),this.loadRelationshipsOptions()})}previousState(){window.history.back()}save(){this.isSaving=!0;const n=this.createFromForm();this.subscribeToSaveResponse(void 0!==n.id?this.paymentCalculationService.update(n):this.paymentCalculationService.create(n))}trackPaymentLabelById(n,e){return e.id}trackPaymentCategoryById(n,e){return e.id}trackPlaceholderById(n,e){return e.id}getSelectedPaymentLabel(n,e){if(e)for(const l of e)if(n.id===l.id)return l;return n}getSelectedPlaceholder(n,e){if(e)for(const l of e)if(n.id===l.id)return l;return n}subscribeToSaveResponse(n){n.pipe((0,at.x)(()=>this.onSaveFinalize())).subscribe(()=>this.onSaveSuccess(),()=>this.onSaveError())}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(n){var e,l;this.editForm.patchValue({id:n.id,paymentExpense:n.paymentExpense,withholdingVAT:n.withholdingVAT,withholdingTax:n.withholdingTax,paymentAmount:n.paymentAmount,paymentLabels:n.paymentLabels,paymentCategory:n.paymentCategory,placeholders:n.placeholders}),this.paymentLabelsSharedCollection=this.paymentLabelService.addPaymentLabelToCollectionIfMissing(this.paymentLabelsSharedCollection,...null!==(e=n.paymentLabels)&&void 0!==e?e:[]),this.paymentCategoriesSharedCollection=this.paymentCategoryService.addPaymentCategoryToCollectionIfMissing(this.paymentCategoriesSharedCollection,n.paymentCategory),this.placeholdersSharedCollection=this.placeholderService.addPlaceholderToCollectionIfMissing(this.placeholdersSharedCollection,...null!==(l=n.placeholders)&&void 0!==l?l:[])}loadRelationshipsOptions(){this.paymentLabelService.query().pipe((0,f.U)(n=>{var e;return null!==(e=n.body)&&void 0!==e?e:[]})).pipe((0,f.U)(n=>{var e;return this.paymentLabelService.addPaymentLabelToCollectionIfMissing(n,...null!==(e=this.editForm.get("paymentLabels").value)&&void 0!==e?e:[])})).subscribe(n=>this.paymentLabelsSharedCollection=n),this.paymentCategoryService.query().pipe((0,f.U)(n=>{var e;return null!==(e=n.body)&&void 0!==e?e:[]})).pipe((0,f.U)(n=>this.paymentCategoryService.addPaymentCategoryToCollectionIfMissing(n,this.editForm.get("paymentCategory").value))).subscribe(n=>this.paymentCategoriesSharedCollection=n),this.placeholderService.query().pipe((0,f.U)(n=>{var e;return null!==(e=n.body)&&void 0!==e?e:[]})).pipe((0,f.U)(n=>{var e;return this.placeholderService.addPlaceholderToCollectionIfMissing(n,...null!==(e=this.editForm.get("placeholders").value)&&void 0!==e?e:[])})).subscribe(n=>this.placeholdersSharedCollection=n)}createFromForm(){return Object.assign(Object.assign({},new x.y),{id:this.editForm.get(["id"]).value,paymentExpense:this.editForm.get(["paymentExpense"]).value,withholdingVAT:this.editForm.get(["withholdingVAT"]).value,withholdingTax:this.editForm.get(["withholdingTax"]).value,paymentAmount:this.editForm.get(["paymentAmount"]).value,paymentLabels:this.editForm.get(["paymentLabels"]).value,paymentCategory:this.editForm.get(["paymentCategory"]).value,placeholders:this.editForm.get(["placeholders"]).value})}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(C.w),t.Y36(it.A),t.Y36(ot.N),t.Y36(lt.Q),t.Y36(_.gz),t.Y36(i.qu))},a.\u0275cmp=t.Xpm({type:a,selectors:[["jhi-payment-calculation-update"]],decls:111,vars:11,consts:[[1,"row","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-payment-calculation-heading","data-cy","PaymentCalculationCreateUpdateHeading"],[1,"form-group",3,"hidden"],["for","field_id",1,"form-control-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"],[1,"form-group"],["for","field_paymentExpense",1,"form-control-label"],["type","number","name","paymentExpense","id","field_paymentExpense","data-cy","paymentExpense","formControlName","paymentExpense",1,"form-control"],["for","field_withholdingVAT",1,"form-control-label"],["type","number","name","withholdingVAT","id","field_withholdingVAT","data-cy","withholdingVAT","formControlName","withholdingVAT",1,"form-control"],["for","field_withholdingTax",1,"form-control-label"],["type","number","name","withholdingTax","id","field_withholdingTax","data-cy","withholdingTax","formControlName","withholdingTax",1,"form-control"],["for","field_paymentAmount",1,"form-control-label"],["type","number","name","paymentAmount","id","field_paymentAmount","data-cy","paymentAmount","formControlName","paymentAmount",1,"form-control"],["for","field_paymentLabels"],["id","field_paymentLabels","data-cy","paymentLabel","multiple","","name","paymentLabels","formControlName","paymentLabels",1,"form-control"],[3,"ngValue",4,"ngFor","ngForOf","ngForTrackBy"],["for","field_paymentCategory",1,"form-control-label"],["id","field_paymentCategory","data-cy","paymentCategory","name","paymentCategory","formControlName","paymentCategory",1,"form-control"],[3,"ngValue"],["for","field_placeholders"],["id","field_placeholders","data-cy","placeholder","multiple","","name","placeholders","formControlName","placeholders",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return e.save()}),t._uU(5,"\n      "),t.TgZ(6,"h2",3),t._uU(7,"Create or edit a Payment Calculation"),t.qZA(),t._uU(8,"\n\n      "),t.TgZ(9,"div"),t._uU(10,"\n        "),t._UZ(11,"jhi-alert-error"),t._uU(12,"\n\n        "),t.TgZ(13,"div",4),t._uU(14,"\n          "),t.TgZ(15,"label",5),t._uU(16,"ID"),t.qZA(),t._uU(17,"\n          "),t._UZ(18,"input",6),t._uU(19,"\n        "),t.qZA(),t._uU(20,"\n\n        "),t.TgZ(21,"div",7),t._uU(22,"\n          "),t.TgZ(23,"label",8),t._uU(24,"Payment Expense"),t.qZA(),t._uU(25,"\n          "),t._UZ(26,"input",9),t._uU(27,"\n        "),t.qZA(),t._uU(28,"\n\n        "),t.TgZ(29,"div",7),t._uU(30,"\n          "),t.TgZ(31,"label",10),t._uU(32,"Withholding VAT"),t.qZA(),t._uU(33,"\n          "),t._UZ(34,"input",11),t._uU(35,"\n        "),t.qZA(),t._uU(36,"\n\n        "),t.TgZ(37,"div",7),t._uU(38,"\n          "),t.TgZ(39,"label",12),t._uU(40,"Withholding Tax"),t.qZA(),t._uU(41,"\n          "),t._UZ(42,"input",13),t._uU(43,"\n        "),t.qZA(),t._uU(44,"\n\n        "),t.TgZ(45,"div",7),t._uU(46,"\n          "),t.TgZ(47,"label",14),t._uU(48,"Payment Amount"),t.qZA(),t._uU(49,"\n          "),t._UZ(50,"input",15),t._uU(51,"\n        "),t.qZA(),t._uU(52,"\n\n        "),t.TgZ(53,"div",7),t._uU(54,"\n          "),t.TgZ(55,"label",16),t._uU(56,"Payment Label"),t.qZA(),t._uU(57,"\n          "),t.TgZ(58,"select",17),t._uU(59,"\n            "),t.YNc(60,rt,2,2,"option",18),t._uU(61,"\n          "),t.qZA(),t._uU(62,"\n        "),t.qZA(),t._uU(63,"\n\n        "),t.TgZ(64,"div",7),t._uU(65,"\n          "),t.TgZ(66,"label",19),t._uU(67,"Payment Category"),t.qZA(),t._uU(68,"\n          "),t.TgZ(69,"select",20),t._uU(70,"\n            "),t._UZ(71,"option",21),t._uU(72,"\n            "),t.YNc(73,ct,2,2,"option",18),t._uU(74,"\n          "),t.qZA(),t._uU(75,"\n        "),t.qZA(),t._uU(76,"\n\n        "),t.TgZ(77,"div",7),t._uU(78,"\n          "),t.TgZ(79,"label",22),t._uU(80,"Placeholder"),t.qZA(),t._uU(81,"\n          "),t.TgZ(82,"select",23),t._uU(83,"\n            "),t.YNc(84,ut,2,2,"option",18),t._uU(85,"\n          "),t.qZA(),t._uU(86,"\n        "),t.qZA(),t._uU(87,"\n      "),t.qZA(),t._uU(88,"\n\n      "),t.TgZ(89,"div"),t._uU(90,"\n        "),t.TgZ(91,"button",24),t.NdJ("click",function(){return e.previousState()}),t._uU(92,"\n          "),t._UZ(93,"fa-icon",25),t._uU(94,"\xa0"),t.TgZ(95,"span"),t._uU(96,"Cancel"),t.qZA(),t._uU(97,"\n        "),t.qZA(),t._uU(98,"\n\n        "),t.TgZ(99,"button",26),t._uU(100,"\n          "),t._UZ(101,"fa-icon",27),t._uU(102,"\xa0"),t.TgZ(103,"span"),t._uU(104,"Save"),t.qZA(),t._uU(105,"\n        "),t.qZA(),t._uU(106,"\n      "),t.qZA(),t._uU(107,"\n    "),t.qZA(),t._uU(108,"\n  "),t.qZA(),t._uU(109,"\n"),t.qZA(),t._uU(110,"\n")),2&n&&(t.xp6(4),t.Q6J("formGroup",e.editForm),t.xp6(9),t.Q6J("hidden",null==e.editForm.get("id").value),t.xp6(5),t.Q6J("readonly",!0),t.xp6(42),t.Q6J("ngForOf",e.paymentLabelsSharedCollection)("ngForTrackBy",e.trackPaymentLabelById),t.xp6(11),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",e.paymentCategoriesSharedCollection)("ngForTrackBy",e.trackPaymentCategoryById),t.xp6(11),t.Q6J("ngForOf",e.placeholdersSharedCollection)("ngForTrackBy",e.trackPlaceholderById),t.xp6(15),t.Q6J("disabled",e.editForm.invalid||e.isSaving))},directives:[i._Y,i.JL,i.sg,m.A,i.wV,i.Fj,i.JJ,i.u,i.K7,g.sg,i.EJ,i.YN,i.Kr,Z.BN],encapsulation:2}),a})();var D=r(5917),st=r(9193),dt=r(9773);let b=(()=>{class a{constructor(n,e){this.service=n,this.router=e}resolve(n){const e=n.params.id;return e?this.service.find(e).pipe((0,dt.zg)(l=>l.body?(0,D.of)(l.body):(this.router.navigate(["404"]),st.E))):(0,D.of)(new x.y)}}return a.\u0275fac=function(n){return new(n||a)(t.LFG(C.w),t.LFG(_.F0))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();const pt=[{path:"",component:H,data:{defaultSort:"id,asc"},canActivate:[d.Z]},{path:":id/view",component:et,resolve:{paymentCalculation:b},canActivate:[d.Z]},{path:"new",component:S,resolve:{paymentCalculation:b},canActivate:[d.Z]},{path:":id/edit",component:S,resolve:{paymentCalculation:b},canActivate:[d.Z]}];let _t=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[_.Bz.forChild(pt)],_.Bz]}),a})(),mt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[o.m,_t]]}),a})()},9003:(T,U,r)=>{r.d(U,{w:()=>C});var o=r(7716),_=r(4728),d=r(8583),y=r(7857);function c(p,g){if(1&p){const i=o.EpF();o.TgZ(0,"ngb-alert",4),o.NdJ("closed",function(){o.CHM(i);const Z=o.oxw().$implicit;return o.oxw().close(Z)}),o._uU(1,"\n      "),o._UZ(2,"pre",5),o._uU(3,"\n    "),o.qZA()}if(2&p){const i=o.oxw().$implicit;o.Q6J("type",i.type),o.xp6(2),o.Q6J("innerHTML",i.message,o.oJD)}}function t(p,g){if(1&p&&(o.TgZ(0,"div",2),o._uU(1,"\n    "),o.YNc(2,c,4,2,"ngb-alert",3),o._uU(3,"\n  "),o.qZA()),2&p){const i=g.$implicit,m=o.oxw();o.Q6J("ngClass",m.setClasses(i)),o.xp6(2),o.Q6J("ngIf",i.message)}}let C=(()=>{class p{constructor(i){this.alertService=i,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(i){const m={"jhi-toast":Boolean(i.toast)};return i.position?Object.assign(Object.assign({},m),{[i.position]:!0}):m}ngOnDestroy(){this.alertService.clear()}close(i){var m;null===(m=i.close)||void 0===m||m.call(i,this.alerts)}}return p.\u0275fac=function(i){return new(i||p)(o.Y36(_.c))},p.\u0275cmp=o.Xpm({type:p,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(i,m){1&i&&(o.TgZ(0,"div",0),o._uU(1,"\n  "),o.YNc(2,t,4,2,"div",1),o._uU(3,"\n"),o.qZA(),o._uU(4,"\n")),2&i&&(o.xp6(2),o.Q6J("ngForOf",m.alerts))},directives:[d.sg,d.mk,d.O5,y.xm],encapsulation:2}),p})()},8133:(T,U,r)=>{r.d(U,{N:()=>_});var o=r(7716);let _=(()=>{class d{set params(c){c.page&&void 0!==c.totalItems&&c.itemsPerPage?(this.first=(c.page-1)*c.itemsPerPage+1,this.second=c.page*c.itemsPerPage<c.totalItems?c.page*c.itemsPerPage:c.totalItems):(this.first=void 0,this.second=void 0),this.total=c.totalItems}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["jhi-item-count"]],inputs:{params:"params"},decls:4,vars:3,template:function(c,t){1&c&&(o._uU(0," "),o.TgZ(1,"div"),o._uU(2),o.qZA(),o._uU(3," ")),2&c&&(o.xp6(2),o.lnq("Showing ",t.first," - ",t.second," of ",t.total," items."))},encapsulation:2}),d})()},1408:(T,U,r)=>{r.d(U,{T:()=>C});var o=r(9765),_=r(6782),d=r(9577),y=r(9976),c=r(7716),t=r(1427);let C=(()=>{class p{constructor(i){this.sort=i,this.sortIcon=y.CmM,this.sortAscIcon=y.foy,this.sortDescIcon=y.u9C,this.destroy$=new o.xQ,i.predicateChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),i.ascendingChange.pipe((0,_.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let i=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(i=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=i.iconName,this.iconComponent.render()}}}return p.\u0275fac=function(i){return new(i||p)(c.Y36(t.b,1))},p.\u0275dir=c.lG2({type:p,selectors:[["","jhiSortBy",""]],contentQueries:function(i,m,Z){if(1&i&&c.Suo(Z,d.BN,5),2&i){let v;c.iGM(v=c.CRH())&&(m.iconComponent=v.first)}},hostBindings:function(i,m){1&i&&c.NdJ("click",function(){return m.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),p})()},1427:(T,U,r)=>{r.d(U,{b:()=>_});var o=r(7716);let _=(()=>{class d{constructor(){this.predicateChange=new o.vpe,this.ascendingChange=new o.vpe,this.sortChange=new o.vpe}get predicate(){return this._predicate}set predicate(c){this._predicate=c,this.predicateChange.emit(c)}get ascending(){return this._ascending}set ascending(c){this._ascending=c,this.ascendingChange.emit(c)}sort(c){this.ascending=c!==this.predicate||!this.ascending,this.predicate=c,this.predicateChange.emit(c),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return d.\u0275fac=function(c){return new(c||d)},d.\u0275dir=o.lG2({type:d,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),d})()}}]);