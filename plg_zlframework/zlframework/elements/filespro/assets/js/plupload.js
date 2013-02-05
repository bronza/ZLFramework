(function(b){var j,k,l,g,n=function(){var a=b(this).find(":ui-button");setTimeout(function(){a.button("refresh")},1)},m=function(a){var d=a.name,c=a.form,e=b([]);d&&(e=c?b(c).find("[name='"+d+"']"):b("[name='"+d+"']",a.ownerDocument).filter(function(){return!this.form}));return e};b.widget("ui.buttonzl",{version:"1.9.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+
this.eventNamespace,n);"boolean"!==typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled);this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var a=this,d=this.options,c="checkbox"===this.type||"radio"===this.type,e="ui-state-hover"+(!c?" ui-state-active":"");null===d.label&&(d.label="input"===this.type?this.buttonElement.val():this.buttonElement.html());this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role",
"button").bind("mouseenter"+this.eventNamespace,function(){d.disabled||(b(this).addClass("ui-state-hover"),this===j&&b(this).addClass("ui-state-active"))}).bind("mouseleave"+this.eventNamespace,function(){d.disabled||b(this).removeClass(e)}).bind("click"+this.eventNamespace,function(a){d.disabled&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.bind("focus"+this.eventNamespace,function(){a.buttonElement.addClass("ui-state-focus")}).bind("blur"+this.eventNamespace,function(){a.buttonElement.removeClass("ui-state-focus")});
c&&(this.element.bind("change"+this.eventNamespace,function(){g||a.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(a){d.disabled||(g=!1,k=a.pageX,l=a.pageY)}).bind("mouseup"+this.eventNamespace,function(a){if(!d.disabled&&(k!==a.pageX||l!==a.pageY))g=!0}));"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled||g)return!1;b(this).toggleClass("ui-state-active");a.buttonElement.attr("aria-pressed",a.element[0].checked)}):"radio"===
this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(d.disabled||g)return!1;b(this).addClass("ui-state-active");a.buttonElement.attr("aria-pressed","true");var c=a.element[0];m(c).not(c).map(function(){return b(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(d.disabled)return!1;b(this).addClass("ui-state-active");j=this;a.document.one("mouseup",function(){j=null})}).bind("mouseup"+
this.eventNamespace,function(){if(d.disabled)return!1;b(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(a){if(d.disabled)return!1;(a.keyCode===b.ui.keyCode.SPACE||a.keyCode===b.ui.keyCode.ENTER)&&b(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace,function(){b(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(a){a.keyCode===b.ui.keyCode.SPACE&&b(this).click()}));this._setOption("disabled",d.disabled);
this._resetButton()},_determineButtonType:function(){var a,b;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button";"checkbox"===this.type||"radio"===this.type?(a=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=a.find(b),this.buttonElement.length||(a=a.length?a.siblings():this.element.siblings(),this.buttonElement=a.filter(b),this.buttonElement.length||(this.buttonElement=
a.find(b))),this.element.addClass("ui-helper-hidden-accessible"),(a=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(a,b){this._super(a,b);"disabled"===a?b?this.element.prop("disabled",!0):this.element.prop("disabled",!1):this._resetButton()},refresh:function(){var a=this.element.is(":disabled")||this.element.hasClass("ui-button-disabled");a!==this.options.disabled&&this._setOption("disabled",a);"radio"===this.type?m(this.element[0]).each(function(){b(this).is(":checked")?b(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
"true"):b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)this.options.label&&this.element.val(this.options.label);else{var a=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
d=b("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),c=this.options.icons,e=c.primary&&c.secondary,f=[];c.primary||c.secondary?(this.options.text&&f.push("ui-button-text-icon"+(e?"s":c.primary?"-primary":"-secondary")),c.primary&&a.prepend("<span class='ui-button-icon-primary ui-icon "+c.primary+"'></span>"),c.secondary&&a.append("<span class='ui-button-icon-secondary ui-icon "+c.secondary+"'></span>"),this.options.text||(f.push(e?"ui-button-icons-only":
"ui-button-icon-only"),this.hasTitle||a.attr("title",b.trim(d)))):f.push("ui-button-text-only");a.addClass(f.join(" "))}}});var f=function(){};b.extend(f.prototype,{name:"Plupload",options:{url:null,title:null,extensions:null,path:null,fileMode:"files",max_file_size:"1024kb",callback:null},initialize:function(a,d){this.options=b.extend({},this.options,d);var c=this,e=b('<div class="plupload" />').appendTo(a).plupload({runtimes:"html5,flash",url:this.options.url+"&method=uploadFiles",flash_swf_url:this.options.flashUrl,
max_file_size:this.options.max_file_size,max_file_count:10,chunk_size:"1mb",resize:!1,rename:!0,sortable:!0,filters:[{title:"Files",extensions:this.options.extensions}],init:{beforeUpload:function(a){a.settings.url=a.settings.url+"&path="+c.options.path;e.find(".plupload_cancel").hide()},UploadProgress:function(a){1<=a.total.uploaded&&100==a.total.percent&&(c.options.callback(),e.find(".plupload_cancel").show())}}}),f=b(".plupload_add",e),g=b(".plupload_start",e),j=b(".plupload_stop",e);f.buttonzl({icons:{primary:"ui-icon-circle-plus"}});
g.buttonzl({icons:{primary:"ui-icon-circle-arrow-e"},disabled:!0});j.buttonzl({icons:{primary:"ui-icon-circle-close"}});var h=e.data("plupload").uploader;h.bind("QueueChanged",function(){h.files.length===h.total.uploaded+h.total.failed?g.buttonzl("disable"):g.buttonzl("enable")});var k=this.options.max_file_size;h.bind("Error",function(a,d){if("-600"==d.code){var c=b(".plupload_message");c.html().replace("max file size: 1024","max file size: "+k);c.html(c.html().replace("max file size: 1024","max file size: "+
k))}a.refresh()});g.click(function(a){b(this).buttonzl("option","disabled")||h.start();a.preventDefault()})}});b.fn[f.prototype.name]=function(){var a=arguments,d=a[0]?a[0]:null;return this.each(function(){var c=b(this);if(f.prototype[d]&&c.data(f.prototype.name)&&"initialize"!=d)c.data(f.prototype.name)[d].apply(c.data(f.prototype.name),Array.prototype.slice.call(a,1));else if(!d||b.isPlainObject(d)){var e=new f;f.prototype.initialize&&e.initialize.apply(e,b.merge([c],a));c.data(f.prototype.name,
e)}else b.error("Method "+d+" does not exist on jQuery."+f.name)})}})(jQuery);