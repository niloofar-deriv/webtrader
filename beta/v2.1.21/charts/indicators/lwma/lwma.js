define(["jquery","lodash","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close")}function d(d,f){require(["css!charts/indicators/lwma/lwma.css"]),require(["text!charts/indicators/lwma/lwma.html","text!charts/indicators/indicators.json"],function(g,h){g=a(g),g.appendTo("body"),h=JSON.parse(h);var i=h.lwma;g.attr("title",i.long_display_name),g.find(".lwma-description").html(i.description),g.find("#lwma_stroke_color").each(function(){a(this).colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var j="Solid";a("#lwma_dash_style").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#lwma_dash_style .dd-selected-image").css("max-height","5px").css("max-width","115px"),j=b.selectedData.value}}),a("#lwma_dash_style .dd-option-image").css("max-height","5px").css("max-width","115px");var k={autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"lwma-ui-dialog",buttons:[{text:"OK",click:function(){var d=a(".lwma_input_width_for_period");if(!b.isInteger(b.toNumber(d.val()))||!b.inRange(d.val(),parseInt(d.attr("min")),parseInt(d.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+d.attr("min")+" to "+d.attr("max")+" is allowed for "+d.closest("tr").find("td:first").text()+"!"})}),void d.val(d.prop("defaultValue"));var f={period:parseInt(a("#lwma_period").val()),stroke:a("#lwma_stroke_color").css("background-color"),strokeWidth:parseInt(a("#lwma_stroke_width").val()),dashStyle:j,appliedTo:parseInt(g.find("#lwma_appliedTo").val())};e&&e(),a(a(".lwma").data("refererChartID")).highcharts().series[0].addIndicator("lwma",f),c.call(g)}},{text:"Cancel",click:function(){c.call(this)}}],icons:{close:"custom-icon-close",minimize:"custom-icon-minimize",maximize:"custom-icon-maximize"}};g.dialog(k).dialogExtend(b.extend(k,{maximizable:!1,minimizable:!1,collapsable:!1})),g.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(f)&&f(d)})}var e=null;return{open:function(b,c){e=c||e;var f=function(){a(".lwma").data("refererChartID",b).dialog("open")};0==a(".lwma").length?d(b,this.open):f()}}});