(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["blog-precompiled-templates.js"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"wrapper\">\n\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("navbar.html", false, "blog-precompiled-templates.js", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <div class=\"bg-color-light\" style=\"color: inherit;\">\n    <div id=\"content\" class=\"container content-sm\">\n      ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("body"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n    </div>\n  </div>\n\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("footer.html", false, "blog-precompiled-templates.js", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n  <script type=\"text/javascript\">\n    AV.init({\n      appId: \"FQIswyMdEr71JviSArKY0H8H-gzGzoHsz\",\n      appKey: \"gXSRIW5AoGmLhhaTTTLP3t3Q\"\n    });\n  </script>\n</div>\n<div class=\"footer-v1\">\n  <div class=\"copyright\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"text-center\">\n          <p>2018 &copy; yzh.app &nbsp; 版本: 0.0.75</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
env.getTemplate("macro/pagination.html", false, "blog-precompiled-templates.js", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
t_11.getExported(function(t_13,t_11) {
if(t_13) { cb(t_13); return; }
context.setVariable("blogsPager", t_11);
output += "\n\n<div class=\"form-group\" style=\"margin-bottom: 45px;\">\n  <span class=\"input-group pull-left\" style=\"margin-top: 8px;\">过滤条件：</span>\n\n  <div class=\"input-group pull-left m-l-5\" style=\"width: 150px;\">\n    <select id=\"show\" name=\"show\" class=\"chosen-select form-control atlaselect\">\n      <option value=\"\">文章显示状态</option>\n      <option value=\"false\" ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filterOptions")),"show") == "false"?"selected":""), env.opts.autoescape);
output += ">待审核</option>\n      <option value=\"true\" ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filterOptions")),"show") == "true"?"selected":""), env.opts.autoescape);
output += ">已显示</option>\n    </select>\n  </div>\n\n  <div class=\"input-group pull-left m-l-5\" style=\"width: 180px;\">\n    <select id=\"category\" name=\"category\" class=\"chosen-select form-control atlaselect\">\n      <option value=\"\">文章所属分类</option>\n      ";
frame = frame.push();
var t_16 = runtime.contextOrFrameLookup(context, frame, "categories");
if(t_16) {t_16 = runtime.fromIterator(t_16);
var t_15 = t_16.length;
for(var t_14=0; t_14 < t_16.length; t_14++) {
var t_17 = t_16[t_14];
frame.set("category", t_17);
frame.set("loop.index", t_14 + 1);
frame.set("loop.index0", t_14);
frame.set("loop.revindex", t_15 - t_14);
frame.set("loop.revindex0", t_15 - t_14 - 1);
frame.set("loop.first", t_14 === 0);
frame.set("loop.last", t_14 === t_15 - 1);
frame.set("loop.length", t_15);
output += "\n        <option value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_17),"id"), env.opts.autoescape);
output += "\" ";
output += runtime.suppressValue((runtime.memberLookup((t_17),"id") == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filterOptions")),"category")?"selected":""), env.opts.autoescape);
output += ">\n          ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_17),"attributes")),"name"), env.opts.autoescape);
output += "\n        </option>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </select>\n  </div>\n\n  <div class=\"input-group pull-left m-l-5\" style=\"width: 250px;\">\n    <input type=\"text\" class=\"form-control\" id=\"keywords\" name=\"keywords\"\n           value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "filterOptions")),"keywords"), env.opts.autoescape);
output += "\" placeholder=\"搜索标题\" />\n    <span class=\"input-group-btn\">\n      <button class=\"btn btn-danger\" type=\"button\" onclick=\"onSearch();\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </button>\n    </span>\n  </div>\n\n  <a class=\"btn-u btn-brd btn-u-default btn-u pull-left m-l-5\" href=\"#\" onclick=\"onRefresh();\">\n    <i class=\"glyphicon glyphicon-refresh\"></i>\n  </a>\n\n  <a class=\"btn-u btn-brd btn-u-default btn-u pull-left m-l-5\" href=\"new.html?pageNumber=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageNumber"), env.opts.autoescape);
output += "\">\n    <i class=\"glyphicon glyphicon-plus\"></i>\n  </a>\n\n  <span class=\"pull-right\" style=\"margin-top: 10px;\"><b>总数：";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "total"), env.opts.autoescape);
output += "</b></span>\n</div>\n\n<div class=\"panel panel-green margin-bottom-40\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><i class=\"fa fa-tasks\"></i>文章列表</h3>\n  </div>\n  <table class=\"table table-striped table-bordered table-hover\">\n    <thead>\n      <tr>\n        <th>分类图标</th>\n        <th>文章分类</th>\n        <th>文章标题</th>\n        <th>文章序号</th>\n        <th>点击数量</th>\n        <th>更新时间</th>\n        <th>文章状态</th>\n        <th class=\"text-center\">操作</th>\n      </tr>\n    </thead>\n    <tbody>\n      ";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "blogs")) === 0) {
output += "\n        <tr>\n          <td colspan=\"120\" class=\"text-center\">没有数据！</td>\n        </tr>\n      ";
;
}
output += "\n\n      ";
frame = frame.push();
var t_20 = runtime.contextOrFrameLookup(context, frame, "blogs");
if(t_20) {t_20 = runtime.fromIterator(t_20);
var t_19 = t_20.length;
for(var t_18=0; t_18 < t_20.length; t_18++) {
var t_21 = t_20[t_18];
frame.set("blog", t_21);
frame.set("loop.index", t_18 + 1);
frame.set("loop.index0", t_18);
frame.set("loop.revindex", t_19 - t_18);
frame.set("loop.revindex0", t_19 - t_18 - 1);
frame.set("loop.first", t_18 === 0);
frame.set("loop.last", t_18 === t_19 - 1);
frame.set("loop.length", t_19);
output += "\n        <tr>\n          <td>\n            <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"categoryPointer")),"attributes")),"logo"), env.opts.autoescape);
output += "\" target=\"_blank\">\n              <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"categoryPointer")),"attributes")),"logo"), env.opts.autoescape);
output += "\" width=\"30\" height=\"30\" />\n            </a>\n          </td>\n          <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"categoryPointer")),"attributes")),"name"), env.opts.autoescape);
output += "</td>\n          <td>\n            ";
var t_22;
t_22 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"categoryPointer")),"attributes")),"menu")),"attributes")),"nav");
frame.set("nav", t_22, true);
if(frame.topLevel) {
context.setVariable("nav", t_22);
}
if(frame.topLevel) {
context.addExport("nav", t_22);
}
output += "\n            ";
var t_23;
t_23 = runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"categoryPointer")),"attributes")),"name");
frame.set("category", t_23, true);
if(frame.topLevel) {
context.setVariable("category", t_23);
}
if(frame.topLevel) {
context.addExport("category", t_23);
}
output += "\n            <a href=\"/show.html?id=";
output += runtime.suppressValue(runtime.memberLookup((t_21),"id"), env.opts.autoescape);
output += "&nav=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "nav"), env.opts.autoescape);
output += "&category=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "category"), env.opts.autoescape);
output += "\" target=\"_blank\">\n              ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"title"), env.opts.autoescape);
output += "\n            </a>\n          </td>\n          <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"order"), env.opts.autoescape);
output += "</td>\n          <td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"views"), env.opts.autoescape);
output += "</td>\n          <td class=\"date-column\">";
output += runtime.suppressValue((lineno = 116, colno = 66, runtime.callWrap(runtime.memberLookup(((lineno = 116, colno = 43, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "moment"), "moment", context, [runtime.memberLookup((t_21),"updatedAt")]))),"format"), "the return value of (moment)[\"format\"]", context, ["YYYY-MM-DD HH:mm:ss"])), env.opts.autoescape);
output += "</td>\n          <td>\n            ";
output += runtime.suppressValue((runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"show")?env.getFilter("safe").call(context, "<span class=\"badge badge-u\">已显示</span>"):""), env.opts.autoescape);
output += "\n            ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.memberLookup((t_21),"attributes")),"show")?env.getFilter("safe").call(context, "<span class=\"badge badge-red\">待审核</span>"):""), env.opts.autoescape);
output += "\n          </td>\n          <td class=\"text-center\">\n            <a href=\"edit.html?id=";
output += runtime.suppressValue(runtime.memberLookup((t_21),"id"), env.opts.autoescape);
output += "&pageNumber=";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageNumber"), env.opts.autoescape);
output += "\" class=\"btn btn-warning btn-xs\">\n              修改\n            </a>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "isAdmin")) {
output += "\n              <a href=\"#\" class=\"btn btn-danger btn-xs m-l-5 delete\" data-id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_21),"id"), env.opts.autoescape);
output += "\">\n                删除\n              </a>\n            ";
;
}
output += "\n          </td>\n        </tr>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </tbody>\n  </table>\n</div>\n\n";
output += runtime.suppressValue((lineno = 137, colno = 20, runtime.callWrap(runtime.memberLookup((t_11),"paging"), "blogsPager[\"paging\"]", context, [runtime.contextOrFrameLookup(context, frame, "pageNumber"),runtime.contextOrFrameLookup(context, frame, "pageTotal")])), env.opts.autoescape);
output += "\n<div class=\"panel panel-green\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><i class=\"fa fa-tasks\"></i>添加文章</h3>\n  </div>\n\n  <form id=\"blog-form\" class=\"form form-horizontal sky-form\" role=\"form\" action=\"javascript:create();\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("blog/form.html", false, "blog-precompiled-templates.js", false, function(t_25,t_24) {
if(t_25) { cb(t_25); return; }
callback(null,t_24);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_27,t_26) {
if(t_27) { cb(t_27); return; }
callback(null,t_26);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </form>\n</div>\n<div class=\"panel panel-green\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\"><i class=\"fa fa-tasks\"></i>编辑文章</h3>\n  </div>\n\n  <form id=\"blog-form\" class=\"form form-horizontal sky-form\" role=\"form\" action=\"javascript:postEdit();\">\n    <input type=\"hidden\" name=\"id\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\" />\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("blog/form.html", false, "blog-precompiled-templates.js", false, function(t_29,t_28) {
if(t_29) { cb(t_29); return; }
callback(null,t_28);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_31,t_30) {
if(t_31) { cb(t_31); return; }
callback(null,t_30);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </form>\n</div>\n<div class=\"col-md-12\">\n  <div class=\"blog-author margin-bottom-30 news-v3\">\n    <img alt=\"\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"categoryLogo"), env.opts.autoescape);
output += "\">\n    <div class=\"blog-author-desc\">\n      <ul class=\"list-inline posted-info\">\n        <li><small>更新于 ";
output += runtime.suppressValue((lineno = 162, colno = 41, runtime.callWrap(runtime.memberLookup(((lineno = 162, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "moment"), "moment", context, []))),"format"), "the return value of (moment)[\"format\"]", context, ["YYYY-MM-DD HH:mm:ss"])), env.opts.autoescape);
output += "</small></li>\n      </ul>\n      <div class=\"overflow-h\">\n        <h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"title"), env.opts.autoescape);
output += "</h3>\n      </div>\n      <ol>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"content")), env.opts.autoescape);
output += "</ol>\n    </div>\n  </div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_body(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 9;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_body: b_body,
root: root
};

})();
})();
