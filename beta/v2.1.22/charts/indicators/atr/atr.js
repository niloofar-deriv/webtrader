define(["jquery","lodash","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,f){require(["css!charts/indicators/atr/atr.css"]);var g=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},h=[new g(30,"red",1,"Dash"),new g(70,"red",1,"Dash")];require(["text!charts/indicators/atr/atr.html","text!charts/indicators/indicators.json"],function(g,i){var j="#cd0a0a";g=a(g),g.appendTo("body"),i=JSON.parse(i);var k=i.atr;g.attr("title",k.long_display_name),g.find(".atr-description").html(k.description),g.find("input[type='button']").button(),g.find("#atr_stroke").colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#atr_stroke").css({background:"#"+c.formatted}).val(""),j="#"+c.formatted},ok:function(b,c){a("#atr_stroke").css({background:"#"+c.formatted}).val(""),j="#"+c.formatted}});var l="Solid";a("#atr_dashStyle").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#atr_dashStyle .dd-selected-image").css("max-height","5px").css("max-width","85px"),l=b.selectedData.value}}),a("#atr_dashStyle .dd-option-image").css("max-height","5px").css("max-width","85px");var m=g.find("#atr_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(h,function(b,c){a(m.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),g.find("#atr_level_delete").click(function(){m.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):m.rows(".selected").remove().draw()}),g.find("#atr_level_add").click(function(){require(["indicator_levels"],function(b){b.open(d,function(b){a.each(b,function(b,c){a(m.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})});var n={autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"atr-ui-dialog",buttons:[{text:"OK",click:function(){var d=a(".atr_input_width_for_period");if(!b.isInteger(b.toNumber(d.val()))||!b.inRange(d.val(),parseInt(d.attr("min")),parseInt(d.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+d.attr("min")+" to "+d.attr("max")+" is allowed for "+d.closest("tr").find("td:first").text()+"!"})}),void d.val(d.prop("defaultValue"));var f=[];a.each(m.rows().nodes(),function(){var b=a(this).data("level");b&&f.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var h={period:parseInt(g.find(".atr_input_width_for_period").val()),stroke:j,strokeWidth:parseInt(g.find("#atr_strokeWidth").val()),dashStyle:l,appliedTo:parseInt(g.find("#atr_appliedTo").val()),levels:f};e&&e(),a(a(".atr").data("refererChartID")).highcharts().series[0].addIndicator("atr",h),c.call(g)}},{text:"Cancel",click:function(){c.call(this)}}],icons:{close:"custom-icon-close",minimize:"custom-icon-minimize",maximize:"custom-icon-maximize"}};g.dialog(n).dialogExtend(b.extend(n,{maximizable:!1,minimizable:!1,collapsable:!1})),g.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),f&&f()})}var e=null;return{open:function(b,c){e=c||e;var f=function(){a(".atr").data("refererChartID",b).dialog("open")};0==a(".atr").length?d(b,f):f()}}});