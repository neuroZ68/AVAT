(this.webpackJsonpannotation_tool=this.webpackJsonpannotation_tool||[]).push([[0],{116:function(e,t,n){e.exports=n(224)},121:function(e,t,n){},122:function(e,t,n){},194:function(e,t){},195:function(e,t){},196:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(13),i=n.n(o),r=(n(121),n(122),n(39)),c=n.n(r),s=(n(51),n(48),n(11),n(46)),u=n.n(s),d=n(64),h=n(6),b=n(12),g=n(37),f=n(38),m=n(23),v=n(29),p=n(49),y=n(24),w=n(25),E=function(){function e(t){Object(y.a)(this,e),this.objects=t.objects,console.log(this.objects)}return Object(w.a)(e,[{key:"getObjects",value:function(){return this.objects}},{key:"getObjectById",value:function(e){return this.objects[e]}},{key:"getObjectByIdFrame",value:function(e,t){return this.objects[e][t]}},{key:"getAllObjectByFrame",value:function(e){var t,n=[];for(t=0;t<this.objects.length;t++){var a=this.objects[t];if(!(a.frames[a.frames.length-1].frameNumber<e))for(var l=a.frames,o=0;o<l.length;o++)if(l[o].frameNumber===e){n.push(l[o]);break}}return console.log(n),n}}]),e}(),k=n(40),S=n.n(k),j=n(21),O=n.n(j),C=(n(86),[{value:"inactive",label:"Inactive"},{value:"walking",label:"Walking"},{value:"running",label:"Running"},{value:"play_solo",label:"Play Solo"},{value:"play_social",label:"Play Social"},{value:"head_tossing",label:"Head Tossing"},{value:"interacting",label:"Interacting with pen features"},{value:"drinking",label:"Drinking"},{value:"eating",label:"Eating"},{value:"fighting",label:"Fighting"},{value:"defacating",label:"Defacating"},{value:"other_active",label:"Other"},{value:"unknown",label:"Unknown"}]),x=[{value:"Lying sternally",label:"lying_sternally"},{value:"Sitting",label:"sitting"},{value:"Standing",label:"standing"},{value:"Walking ",label:"walking"},{value:"Consumption",label:"consumption"}];j.Type.SELECT,j.Type.SELECT;var T=n(232),_=(n(100),n(53).fabric),A=function(){function e(t,n,a,l,o,i,r){Object(y.a)(this,e),this.top=t,this.left=n,this.id=i,this.behavior=r,this.color=o,this.width=a,this.height=l}return Object(w.a)(e,[{key:"rectangle",value:function(){return new _.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:this.height,width:this.width,fill:this.color,borderColor:"#000",opacity:".4",top:this.top,left:this.left})}},{key:"id_text",value:function(){return new _.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1})}},{key:"behavior",value:function(){}},{key:"generate_no_behavior",value:function(e){var t=new _.Group;t.addWithUpdate(this.rectangle()),t.addWithUpdate(this.id_text());var n,a=this.id;return t.toObject=(n=t.toObject,function(e){return _.util.object.extend(n.call(this,e),{local_id:a})}),e.add(t),e.on({"object:scaling":function(e){var t=e.target.item(1),n=e.target,a=n.width/(n.width*n.scaleX),l=n.height/(n.height*n.scaleY);t.set("scaleX",a),t.set("scaleY",l)}}),t}},{key:"generate_mouse_no_behavior",value:function(e){var t,n,a,l;new _.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1});e.on("mouse:down",(function(o){n=!0;var i=e.getPointer(o.e);a=i.x,l=i.y;i=e.getPointer(o.e);var r=new _.Rect({left:a,top:l,originX:"left",originY:"top",width:i.x-a,height:i.y-l,angle:0,fill:"rgba(255,0,0,0.5)",transparentCorners:!1,uniScaleTransform:!0});t=r,e.add(t)})),e.on("mouse:move",(function(o){if(n){var i=e.getPointer(o.e);a>i.x&&t.set({left:Math.abs(i.x)}),l>i.y&&t.set({top:Math.abs(i.y)}),t.set({width:Math.abs(a-i.x)}),t.set({height:Math.abs(l-i.y)}),e.renderAll()}})),e.on("mouse:up",(function(t){n=!1,e.off("mouse:down"),e.off("mouse:up")}))}},{key:"generate_with_behavior",value:function(){}}]),e}();var F=function(){function e(t,n,a,l,o){Object(y.a)(this,e),this.frame_data=t,this.canvas_width=n,this.canvas_height=a,this.windowWidth=o,this.windowHeight=l}return Object(w.a)(e,[{key:"generate_frame",value:function(){for(var e=[],t=0;t<this.frame_data.length;t++){var n="#"+((1<<24)*Math.random()|0).toString(16);console.log(this.frame_data[t]);var a=new A(this.getTop(this.frame_data[t]),this.getLeft(this.frame_data[t]),this.getWidth(this.frame_data[t]),this.getHeight(this.frame_data[t]),n,t,"TEST").generate_no_behavior();e.push(a)}return e}},{key:"getID",value:function(e){return e.id}},{key:"getWidth",value:function(e){return Math.floor(e.bbox.width/this.windowWidth*this.canvas_width)}},{key:"getHeight",value:function(e){return Math.floor(e.bbox.height/this.windowHeight*this.canvas_height)}},{key:"getTop",value:function(e){return Math.floor(e.bbox.y/this.windowHeight*this.canvas_height)}},{key:"getLeft",value:function(e){return Math.floor(e.bbox.x/this.windowWidth*this.canvas_width)}}]),e}(),D=(n(53).fabric,n(53).fabric),M=n(100),N=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"generate_polygon",value:function(e,t){var n,a=!0,l=new Array,o=new Array,i=!1;e.forEachObject((function(e){e.selectable=!1}));var r=new function(){e.selection=!1,e.on("mouse:down",(function(e){e.target&&e.target.id===l[0].id&&r.polygon.generatePolygon(l),a&&r.polygon.addPoint(e)})),e.on("mouse:up",(function(e){})),e.on("mouse:move",(function(t){if(n&&"line"==n.class){var a=e.getPointer(t.e);n.set({x2:a.x,y2:a.y});var o=i.get("points");o[l.length]={x:a.x,y:a.y},i.set({points:o}),e.renderAll()}e.renderAll()}))};r.polygon={drawPolygon:function(){a=!0,l=new Array,o=new Array},addPoint:function(t){var a=Math.floor(999901*Math.random())+99,r=(new Date).getTime()+a,c=new D.Circle({radius:5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:t.e.layerX/e.getZoom(),top:t.e.layerY/e.getZoom(),selectable:!1,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",id:r,objectCaching:!1});0===l.length&&c.set({fill:"red"});var s=[t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom(),t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom()],u=new D.Line(s,{strokeWidth:2,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});if(i){var d=e.getPointer(t.e);(s=i.get("points")).push({x:d.x,y:d.y});var h=new D.Polygon(s,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});e.remove(i),e.add(h),i=h,e.renderAll()}else{var b=[{x:t.e.layerX/e.getZoom(),y:t.e.layerY/e.getZoom()}];h=new D.Polygon(b,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});i=h,e.add(h)}n=u,l.push(c),o.push(u),e.add(u),e.add(c),e.selection=!1},generatePolygon:function(l){var r=new Array;M.each(l,(function(t,n){r.push({x:n.left,y:n.top}),e.remove(n)})),M.each(o,(function(t,n){e.remove(n)})),console.log(l),console.log(o);for(var c,s=new D.Group,u=0;u<l.length;u++)s.addWithUpdate(l[u]),s.addWithUpdate(o[u]);return s.toObject=(c=s.toObject,function(e){return D.util.object.extend(c.call(this,e),{local_id:t})}),e.add(s),e.remove(n),e.remove(i),n=null,i=null,a=!1,e.selection=!0,e.forEachObject((function(e){e.selectable=!0})),s}}}}]),e}();function R(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Keybinds:"),"There are preset keybinds setup to make it easier to use the tool without having to click around. If done properly a combination of mouse and keyboard actions speed up the annotation process.",l.a.createElement("br",null),l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"1")," : Mode Switch: Bounding Box",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"2")," : Mode Switch: Key Point",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"3")," : Mode Switch: Segmentation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"a")," : Add annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"r")," : Remove selected annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"q")," : Skip backward frame(s)",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"s")," : Save annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"w")," : Pause/Play",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"e")," : Skip forward frame(s)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Uploading Video:"),"Ensure that you know the framerate, vertical and horizontal resolution of the video chosen to be annotated. These values should be entered into the settings tab into their respective fields.",l.a.createElement("br",null),l.a.createElement("br",null),"Click on the right side browse button. All other buttons on the screen shuold be disabled until the video has been uploaded. Currenntly ```.mp4``` format is the best choice and tested for.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Annotations"),l.a.createElement("br",null),"There are currently three kinds of annotations.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Bounding Box:"),"This forms a square around the desired object. There should be small squares at the edges of the bounding box which can be used to resize the box. The number on the top left of the box is used to identify the placement of the box in the table to the right.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Key Point:"),"This generates an object with multiple points and lines attached to each other. They should be arranged around the obejct where the singular circle with one connecting line is the head and progress to each of the other limbs. ***Note: This feature is currently in development and there will be bugs in using this.***",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Segmentation:"),"Upon generating this each click on the video generates a point which eventually will transform to a set of interconnected points. To complete the polygon click on the original point generated (which is the red colored point) ***Note: Unline the Bounding Box, segmentation cant be edited after generated. To fix a mistake remove the annotation and continue from the start.***")}var B=n(112),P=n.n(B),I=(n(204),[{dataField:"id",text:"ID",headerStyle:function(){return{width:"40px",left:0}}},{dataField:"global_id",text:"Glo",headerStyle:function(){return{width:"50px",left:0}},editCellStyle:function(e,t,n,a){return{backgroundColor:e>2101?"#00BFFF":"#00FFFF"}}},{dataField:"status",text:"Status",editor:{type:j.Type.SELECT,options:[{value:"Stationary",label:"Stationary"},{value:"Minor",label:"Minor"},{value:"Stationary Transition",label:"Stationary Transition"},{value:"Active Transition",label:"Active Transition"},{value:"Active",label:"Active"},{value:"Event",label:"Event"}]}},{dataField:"is_hidden",text:"Curr",editor:{type:j.Type.CHECKBOX,value:"Start:Stop"}},{dataField:"behavior",text:"Behavior",editor:{type:j.Type.SELECT,options:[{value:"Other",label:"Other"},{value:"Lying",label:"Lying"},{value:"Standing",label:"Standing"},{value:"Sitting",label:"Sitting"},{value:"Kneeling",label:"Kneeling"},{value:"Scar",label:"Scar"},{value:"Facial",label:"Facial"},{value:"Skin",label:"Skin"},{value:"Walking",label:"Walking"},{value:"Running",label:"Running"},{value:"Transitioning",label:"Transitioning"},{value:"Exploring",label:"Exploring"},{value:"Selfplay",label:"Selfplay"},{value:"Aggression",label:"Aggression"},{value:"Defecation",label:"Defecation"},{value:"Urination",label:"Urination"},{value:"Drinking",label:"Drinking"},{value:"Feeding",label:"Feeding"}]}},{dataField:"remove",text:"Del",formatter:function(e,t){return l.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:function(){return e=t.id,Z[$].splice(e,1),console.log(X.getObjects()[e]),X.remove(X.getObjects()[e].remove()),void X.fire("saveData");var e},label:"Del"})}}]);var L=n(53).fabric,W=n(110),U=-1,J=1920,H=1080,z=1;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var V=window.screen.height;V>=1440?(J=1920,H=1080):V>=1080?(J=1280,H=720):V>=1024?(J=1152,H=648):V>=768&&(J=1024,H=576);var X=new L.Canvas("c",{uniScaleTransform:!0}),K=W({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);X.initialize(e,{height:H,width:J,backgroundColor:null}),X.hoverCursor="crosshair",X.on("mouse:up",(function(){ee($)})),X.on("object:added",ee($)),X.on("object:removed",ee($)),X.on("object:modified",ee($)),X.on("saveData",(function(){X.renderAll()}))},render:function(){return l.a.createElement("canvas",null)}}),Y=[[]],Z=[[]],q=!1,G=!0,$=0,Q="";function ee(e){Y[e]=X.toJSON(),console.log("SAVED")}var te=function(){var e=Object(a.useState)(0),t=Object(h.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(0),r=Object(h.a)(i,2),s=r[0],y=r[1],w=function(){var e="#"+((1<<24)*Math.random()|0).toString(16);if(null==Z[Oe]&&(Z[Oe]=[]),ee(Oe),0===n){Z[Oe].push({id:s+"b",global_id:null,status:"None",is_hidden:"Start",behavior:"None"});new A(X.height/2,X.width/2,50,50,e,s,"None",X).generate_no_behavior(X)}else if(1===n)alert("KeyPoint annotation are currently unavailable");else if(2===n){Z[Oe].push({id:s+"s",status:"None",is_hidden:0,posture:"None"});(new N).generate_polygon(X,s)}y(s+1),X.fire("saveData")},k=function(){y(s+1);var e=X.getActiveObject().toJSON().local_id;console.log(X.getActiveObject().toJSON());for(var t=0;t<Z[Oe].length;t++)if(Z[Oe][t].id===e){Z[Oe].splice(t,1);break}X.remove(X.getActiveObject()),X.fire("saveData")},j=Object(a.useState)(null),C=Object(h.a)(j,2),x=C[0],_=C[1],D=Object(a.useState)(null),M=Object(h.a)(D,2),B=(M[0],M[1],Object(a.useState)(null)),L=Object(h.a)(B,2),W=L[0],V=L[1];Object(a.useEffect)((function(){null!=W&&(console.log(W),console.log(W.getAllObjectByFrame(2)))}),W);var te=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(JSON.parse(e.target.result))},a.readAsText(e.target.files[0])}))},ne=Object(a.useState)(!1),ae=Object(h.a)(ne,2),le=ae[0],oe=ae[1],ie=function(e){oe(!le)},re="ERROR";re=!0===le?"Pause":"Play";var ce=Object(a.useState)(!1),se=Object(h.a)(ce,2),ue=(se[0],se[1]),de=Object(a.useState)(0),he=Object(h.a)(de,2),be=he[0],ge=he[1],fe=Object(a.useState)(null),me=Object(h.a)(fe,2),ve=me[0],pe=me[1];null!=ve&&null!=ve.player&&null!=ve.player.player&&null!=ve.player.player&&console.log(ve.player.player.player.videoWidth);var ye=Object(a.useState)(0),we=Object(h.a)(ye,2),Ee=we[0],ke=we[1],Se=Object(a.useState)(0),je=Object(h.a)(Se,2),Oe=je[0],Ce=je[1],xe=Object(a.useState)(!1),Te=Object(h.a)(xe,2),_e=Te[0],Ae=Te[1],Fe=function(e){!1===_e&&0==Z[Oe+z].length&&(Z[Oe+z]=JSON.parse(JSON.stringify(Z[Oe])),Y[Oe+z]=Y[Oe],console.log("Carryover annotation"));var t=15*Ee;ve.seekTo(ve.getCurrentTime()/Ee*t/t+z/t)},De=function(e){var t=15*Ee;ve.seekTo(ve.getCurrentTime()/Ee*t/t-z/t)},Me=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="generated_annotations",n=JSON.stringify(Y),a=new Blob([n],{type:"application/json"}),e.next=5,URL.createObjectURL(a);case 5:return l=e.sent,(o=document.createElement("a")).href=l,o.download=t+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o),t="generated_data",n=JSON.stringify(Z),a=new Blob([n],{type:"application/json"}),e.next=17,URL.createObjectURL(a);case 17:l=e.sent,(o=document.createElement("a")).href=l,o.download=t+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=Object(a.useState)(!1),Re=Object(h.a)(Ne,2),Be=Re[0],Pe=Re[1],Ie=function(){return Pe(!1)},Le=function(){o(0)},We=function(){o(1)},Ue=function(){o(2)},Je=Object(a.useState)(!1),He=Object(h.a)(Je,2),ze=He[0],Ve=He[1],Xe=Object(a.useState)(!0),Ke=Object(h.a)(Xe,2),Ye=Ke[0],Ze=Ke[1],qe=function(e){0!=Ye&&("1"===e.key?(Q="Mode Switch: Bounding Box",Ve(!0),Le()):"2"===e.key?(Q="Mode Switch: Key Point",Ve(!0),We()):"3"===e.key?(Q="Mode Switch: Segmentation",Ve(!0),Ue()):"a"===e.key?(Q="Added Annotation",Ve(!0),w()):"r"===e.key?(Q="Removed Annotation",Ve(!0),k()):"q"===e.key?De():"w"===e.key?ie():"e"===e.key?Fe():"s"===e.key?(Q="Annotation Saved",Ve(!0),Y[Oe]=X.toJSON()):"f"===e.key&&(!1===_e?(Q="Scrubbing Mode Activated",Ae(!0),Ve(!0)):(Q="Scrubbing Mode Deactivated",Ae(!1),Ve(!0))))},Ge=Object(a.useState)(!1),$e=Object(h.a)(Ge,2);return $e[0],$e[1],Object(a.useEffect)((function(){return document.addEventListener("keydown",qe),function(){return document.removeEventListener("keydown",qe)}}),[qe]),Object(a.useEffect)((function(){console.log(Oe),console.log(Y),console.log(Z),X.loadFromJSON(Y[Oe],(function(){X.renderAll()}))}),[Oe]),l.a.createElement("div",null,l.a.createElement(g.a,{bg:"dark",variant:"dark",className:"bg-5"},l.a.createElement(g.a.Brand,{href:"#home"},"Annotation Tool"),l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{onClick:function(){return Pe(!0)}},"Instructions"),l.a.createElement(T.a,{disabled:G,title:"Mode",id:"basic-nav-dropdown"},l.a.createElement(T.a.Item,{onClick:Le},"Square Box"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,{onClick:We},"Key Point"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,{onClick:Ue},"Segmentation")),l.a.createElement(T.a,{disabled:G,title:"Export",id:"basic-nav-dropdown"},l.a.createElement(T.a.Item,{onClick:Me},"JSON"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,null,"CSV")),l.a.createElement(T.a,{disabled:G,title:"Settings",id:"basic-nav-dropdown"},l.a.createElement(T.a.Divider,null),"Frame Rate: ",l.a.createElement("input",{type:"number",defaultValue:"15"}),l.a.createElement(T.a.Divider,null),"Horizontal Res: ",l.a.createElement("input",{type:"number",defaultValue:"3840"}),l.a.createElement(T.a.Divider,null),"Vertical Res: ",l.a.createElement("input",{type:"number",defaultValue:"2178"}),l.a.createElement(T.a.Divider,null),"Skip Value: ",l.a.createElement("input",{type:"number",defaultValue:"1",onChange:function(e){z=parseInt(e.target.value)}}))),l.a.createElement("div",null,l.a.createElement(v.a,{style:{float:"left",width:80}},l.a.createElement(v.a.File,{disabled:G,id:"file",label:"Annotation Upload",custom:!0,type:"file",onChange:function(e){te(e).then((function(e){null!=e?V(new E(e)):console.log("ERROR in upload old_annotation")}))}})),l.a.createElement(v.a,{style:{float:"left",width:80}},l.a.createElement(v.a.File,{id:"file",label:"Video Upload",accept:".mp4",custom:!0,type:"file",onChange:function(e){_(URL.createObjectURL(e.target.files[0])),q=!0}})),l.a.createElement(b.a,{variant:"secondary",disabled:!0},"Frame # ",parseInt(Oe)+" / "+parseInt(15*Ee))," ",l.a.createElement(b.a,{variant:"primary",disabled:G,onClick:De},"Prev")," ",l.a.createElement(b.a,{variant:"primary",disabled:G,onClick:ie},re)," ",l.a.createElement(b.a,{variant:"primary",disabled:G,onClick:Fe},"Next")," ",l.a.createElement(b.a,{variant:"success",disabled:G,onClick:w,style:{position:"relative"}},"Add")," ",l.a.createElement(b.a,{variant:"danger",onClick:k,disabled:G,style:{position:"relative"}},"Remove")," ")),l.a.createElement(p.a,{onClose:function(){return Ve(!1)},show:ze,delay:500,autohide:!0,style:{position:"absolute",top:"00%",left:"50%",zIndex:100}},l.a.createElement(p.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},Q))),l.a.createElement(m.a,{show:Be,onHide:Ie,size:"lg"},l.a.createElement(m.a.Header,{closeButton:!0},l.a.createElement(m.a.Title,null,"Instructions")),l.a.createElement(m.a.Body,null,l.a.createElement(R,null)),l.a.createElement(m.a.Footer,null,l.a.createElement(b.a,{variant:"secondary",onClick:Ie},"Close"))),l.a.createElement("div",{style:{display:"grid"}},l.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},l.a.createElement(c.a,{onProgress:function(e){ee(Oe);var t=15*Ee;if(ge(Oe/t),Ce(Math.round(e.played*t)),$=Math.round(e.played*t),null!=W)for(var n=new F(W.getAllObjectByFrame(Oe),J,H).generate_frame(),a=0;a<n.length;a++){var l=n[a];console.log(l),X.add(l),X.setActiveObject(l),X.fire("saveData")}},ref:function(e){pe(e)},onDuration:function(e){if(!0===q&&null!=ve){console.log("Initializing..."),U=Math.round(15*e),Y=new Array(U),Z=new Array(U);for(var t=0;t<U;t++)Y[t]=[],Z[t]=[];q=!1,G=!1}ke(parseInt(e)),console.log(e)},url:x,width:"100%",height:"99.999%",playing:le,controls:!1,style:{position:"absolute",float:"left",top:0,left:0},volume:0,muted:!0,pip:!1})),l.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},l.a.createElement(K,null)),l.a.createElement("div",{style:{gridColumn:1,gridRow:2,position:"relative",width:J,top:0,left:0}},l.a.createElement("input",{style:{width:J},type:"range",min:0,max:.999999,step:"any",value:be,onMouseDown:function(e){ue(!0)},onChange:function(e){ge(parseFloat(e.target.value))},onMouseUp:function(e){ue(!1),ve.seekTo(parseFloat(e.target.value))}})),l.a.createElement("div",{style:{gridColumn:2,gridRow:1,position:"relative",width:J,height:H,top:0,left:0}},l.a.createElement("div",{style:{width:"40.5%"}},l.a.createElement(S.a,{keyField:"id",data:Z[Oe],columns:I,table:!0,noDataIndication:function(){return l.a.createElement("div",null,"No recorded annotations or behaviors for this frame",l.a.createElement("br",null),"Please add an annotation or behavior tag to start.")},cellEdit:O()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,n,a){console.log(Z[Oe][n.id]),Z[Oe][n.id]=n,Ze(!0)},onStartEdit:function(e,t,n,a){Ze(!1)}}),pagination:P()()})))))},ne=(n(114),j.Type.SELECT,j.Type.SELECT,n(53).fabric),ae=n(110),le=1080,oe=1920;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var ie=window.screen.height;ie>=1440?(le=1080,oe=1920):ie<=1024&&(le=648,oe=1152);var re=new ne.Canvas("c",{uniScaleTransform:!0});ae({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);re.initialize(e,{height:le,width:oe,backgroundColor:null}),re.on("mouse:up",(function(){})),re.on("saveData",(function(){re.renderAll()}))},render:function(){return l.a.createElement("canvas",null)}});n(230),n(231);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.d099db16.chunk.js.map