(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["index-precompiled-templates.js"] = (function() {
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
env.getTemplate("home/navbar.html", false, "index-precompiled-templates.js", false, function(t_2,t_1) {
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
output += "\n\n  <div class=\"bg-color-light\">\n    <div id=\"content\" class=\"container content-sm\">\n      <div class=\"loader text-center\">加载中...</div>\n    </div>\n  </div>\n\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("footer.html", false, "index-precompiled-templates.js", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n\n</div>\n<div class=\"col-md-12\">\n  <div class=\"blog-author margin-bottom-30 news-v3\">\n    <img src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"attributes")),"categoryLogo") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"categoryLogo"), env.opts.autoescape);
output += "\">\n    <div class=\"blog-author-desc\">\n      <ul class=\"list-inline posted-info\">\n        <li><small>更新于 ";
output += runtime.suppressValue((lineno = 18, colno = 55, runtime.callWrap(runtime.memberLookup(((lineno = 18, colno = 32, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "moment"), "moment", context, [runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"updatedAt")]))),"format"), "the return value of (moment)[\"format\"]", context, ["YYYY-MM-DD HH:mm:ss"])), env.opts.autoescape);
output += "</small></li>\n      </ul>\n      <div class=\"overflow-h\">\n        <h3>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"attributes")),"title") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"title"), env.opts.autoescape);
output += "</h3>\n      </div>\n      <ol>";
output += runtime.suppressValue(env.getFilter("safe").call(context, (runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"attributes")),"content") || runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"content"))), env.opts.autoescape);
output += "</ol>\n      <!--<ul class=\"post-shares\">\n          <li>\n            <a href=\"javascript:like();\">\n              <i class=\"rounded-x icon-heart\"></i>\n              <span>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "blog")),"attributes")),"views"), env.opts.autoescape);
output += "</span>\n            </a>\n          </li>\n        </ul>-->\n    </div>\n  </div>\n</div>\n<div class=\"row tag-box tag-box-v5\">\n  <div class=\"col-md-8\">\n    <span>没有找到数据</span>\n  </div>\n  <div class=\"col-md-4\">\n    <p>\n      <a href=\"/index.html\" class=\"btn-u btn-u-lg btn-u-red\">\n        返回首页\n      </a>\n    </p>\n  </div>\n</div>\n<div class=\"tag-box tag-box-v4 m-t-40\">\n  <blockquote class=\"bq-green\">\n    <h2>数据加载异常，请重新再查看。</h2>\n  </blockquote>\n  <div class=\"text-center\">\n    <a href=\"https://yzh.app\" class=\"btn-u btn-u-lg btn-u-blue grow\" rel=\"grow\">\n      <span class=\"glyphicon glyphicon-refresh\"></span> 刷新\n    </a>\n  </div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
