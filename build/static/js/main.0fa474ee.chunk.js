(this.webpackJsonpannotation_tool=this.webpackJsonpannotation_tool||[]).push([[0],{116:function(e,t,n){e.exports=n(224)},121:function(e,t,n){},122:function(e,t,n){},194:function(e,t){},195:function(e,t){},196:function(e,t){},224:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(13),i=n.n(o),r=(n(121),n(122),n(39)),c=n.n(r),s=(n(51),n(48),n(11),n(46)),u=n.n(s),d=n(64),h=n(6),b=n(12),g=n(37),f=n(38),m=n(23),v=n(29),p=n(49),y=n(24),w=n(25),E=function(){function e(t){Object(y.a)(this,e),this.objects=t.objects,console.log(this.objects)}return Object(w.a)(e,[{key:"getObjects",value:function(){return this.objects}},{key:"getObjectById",value:function(e){return this.objects[e]}},{key:"getObjectByIdFrame",value:function(e,t){return this.objects[e][t]}},{key:"getAllObjectByFrame",value:function(e){var t,n=[];for(t=0;t<this.objects.length;t++){var a=this.objects[t];if(!(a.frames[a.frames.length-1].frameNumber<e))for(var l=a.frames,o=0;o<l.length;o++)if(l[o].frameNumber===e){n.push(l[o]);break}}return console.log(n),n}}]),e}(),k=n(40),S=n.n(k),j=n(21),O=n.n(j),C=(n(86),[{value:"inactive",label:"Inactive"},{value:"walking",label:"Walking"},{value:"running",label:"Running"},{value:"play_solo",label:"Play Solo"},{value:"play_social",label:"Play Social"},{value:"head_tossing",label:"Head Tossing"},{value:"interacting",label:"Interacting with pen features"},{value:"drinking",label:"Drinking"},{value:"eating",label:"Eating"},{value:"fighting",label:"Fighting"},{value:"defacating",label:"Defacating"},{value:"other_active",label:"Other"},{value:"unknown",label:"Unknown"}]),x=[{value:"Lying sternally",label:"lying_sternally"},{value:"Sitting",label:"sitting"},{value:"Standing",label:"standing"},{value:"Walking ",label:"walking"},{value:"Consumption",label:"consumption"}];j.Type.SELECT,j.Type.SELECT;var T=n(232),_=(n(100),n(53).fabric),A=function(){function e(t,n,a,l,o,i,r){Object(y.a)(this,e),this.top=t,this.left=n,this.id=i,this.behavior=r,this.color=o,this.width=a,this.height=l}return Object(w.a)(e,[{key:"rectangle",value:function(){return new _.Rect({hasRotatingPoint:!1,uniScaleTransform:!0,height:this.height,width:this.width,fill:this.color,borderColor:"#000",opacity:".4",top:this.top,left:this.left})}},{key:"id_text",value:function(){return new _.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1})}},{key:"behavior",value:function(){}},{key:"generate_no_behavior",value:function(e){var t=new _.Group;t.addWithUpdate(this.rectangle()),t.addWithUpdate(this.id_text());var n,a=this.id;return t.toObject=(n=t.toObject,function(e){return _.util.object.extend(n.call(this,e),{local_id:a})}),e.add(t),e.on({"object:scaling":function(e){var t=e.target.item(1),n=e.target,a=n.width/(n.width*n.scaleX),l=n.height/(n.height*n.scaleY);t.set("scaleX",a),t.set("scaleY",l)}}),t}},{key:"generate_mouse_no_behavior",value:function(e){var t,n,a,l;new _.Text(this.id.toString(),{fontSize:20,top:this.top,left:this.left,uniScaleTransform:!1});e.on("mouse:down",(function(o){n=!0;var i=e.getPointer(o.e);a=i.x,l=i.y;i=e.getPointer(o.e);var r=new _.Rect({left:a,top:l,originX:"left",originY:"top",width:i.x-a,height:i.y-l,angle:0,fill:"rgba(255,0,0,0.5)",transparentCorners:!1,uniScaleTransform:!0});t=r,e.add(t)})),e.on("mouse:move",(function(o){if(n){var i=e.getPointer(o.e);a>i.x&&t.set({left:Math.abs(i.x)}),l>i.y&&t.set({top:Math.abs(i.y)}),t.set({width:Math.abs(a-i.x)}),t.set({height:Math.abs(l-i.y)}),e.renderAll()}})),e.on("mouse:up",(function(t){n=!1,e.off("mouse:down"),e.off("mouse:up")}))}},{key:"generate_with_behavior",value:function(){}}]),e}();var F=function(){function e(t,n,a,l,o){Object(y.a)(this,e),this.frame_data=t,this.canvas_width=n,this.canvas_height=a,this.windowWidth=o,this.windowHeight=l}return Object(w.a)(e,[{key:"generate_frame",value:function(){for(var e=[],t=0;t<this.frame_data.length;t++){var n="#"+((1<<24)*Math.random()|0).toString(16);console.log(this.frame_data[t]);var a=new A(this.getTop(this.frame_data[t]),this.getLeft(this.frame_data[t]),this.getWidth(this.frame_data[t]),this.getHeight(this.frame_data[t]),n,t,"TEST").generate_no_behavior();e.push(a)}return e}},{key:"getID",value:function(e){return e.id}},{key:"getWidth",value:function(e){return Math.floor(e.bbox.width/this.windowWidth*this.canvas_width)}},{key:"getHeight",value:function(e){return Math.floor(e.bbox.height/this.windowHeight*this.canvas_height)}},{key:"getTop",value:function(e){return Math.floor(e.bbox.y/this.windowHeight*this.canvas_height)}},{key:"getLeft",value:function(e){return Math.floor(e.bbox.x/this.windowWidth*this.canvas_width)}}]),e}(),D=(n(53).fabric,n(53).fabric),M=n(100),B=function(){function e(){Object(y.a)(this,e)}return Object(w.a)(e,[{key:"generate_polygon",value:function(e,t){var n,a=!0,l=new Array,o=new Array,i=!1;e.forEachObject((function(e){e.selectable=!1}));var r=new function(){e.selection=!1,e.on("mouse:down",(function(e){e.target&&e.target.id===l[0].id&&r.polygon.generatePolygon(l),a&&r.polygon.addPoint(e)})),e.on("mouse:up",(function(e){})),e.on("mouse:move",(function(t){if(n&&"line"==n.class){var a=e.getPointer(t.e);n.set({x2:a.x,y2:a.y});var o=i.get("points");o[l.length]={x:a.x,y:a.y},i.set({points:o}),e.renderAll()}e.renderAll()}))};r.polygon={drawPolygon:function(){a=!0,l=new Array,o=new Array},addPoint:function(t){var a=Math.floor(999901*Math.random())+99,r=(new Date).getTime()+a,c=new D.Circle({radius:5,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:t.e.layerX/e.getZoom(),top:t.e.layerY/e.getZoom(),selectable:!1,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",id:r,objectCaching:!1});0===l.length&&c.set({fill:"red"});var s=[t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom(),t.e.layerX/e.getZoom(),t.e.layerY/e.getZoom()],u=new D.Line(s,{strokeWidth:2,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});if(i){var d=e.getPointer(t.e);(s=i.get("points")).push({x:d.x,y:d.y});var h=new D.Polygon(s,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});e.remove(i),e.add(h),i=h,e.renderAll()}else{var b=[{x:t.e.layerX/e.getZoom(),y:t.e.layerY/e.getZoom()}];h=new D.Polygon(b,{stroke:"#333333",strokeWidth:1,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1});i=h,e.add(h)}n=u,l.push(c),o.push(u),e.add(u),e.add(c),e.selection=!1},generatePolygon:function(l){var r=new Array;M.each(l,(function(t,n){r.push({x:n.left,y:n.top}),e.remove(n)})),M.each(o,(function(t,n){e.remove(n)})),console.log(l),console.log(o);for(var c,s=new D.Group,u=0;u<l.length;u++)s.addWithUpdate(l[u]),s.addWithUpdate(o[u]);return s.toObject=(c=s.toObject,function(e){return D.util.object.extend(c.call(this,e),{local_id:t})}),e.add(s),e.remove(n),e.remove(i),n=null,i=null,a=!1,e.selection=!0,e.forEachObject((function(e){e.selectable=!0})),s}}}}]),e}();function N(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Keybinds:"),"There are preset keybinds setup to make it easier to use the tool without having to click around. If done properly a combination of mouse and keyboard actions speed up the annotation process.",l.a.createElement("br",null),l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"1")," : Mode Switch: Bounding Box",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"2")," : Mode Switch: Key Point",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"3")," : Mode Switch: Segmentation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"a")," : Add annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"r")," : Remove selected annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"q")," : Skip backward frame(s)",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"s")," : Save annotation",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"w")," : Pause/Play",l.a.createElement("br",null),"* ",l.a.createElement("kbd",null,"e")," : Skip forward frame(s)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Uploading Video:"),"Ensure that you know the framerate, vertical and horizontal resolution of the video chosen to be annotated. These values should be entered into the settings tab into their respective fields.",l.a.createElement("br",null),l.a.createElement("br",null),"Click on the right side browse button. All other buttons on the screen shuold be disabled until the video has been uploaded. Currenntly ```.mp4``` format is the best choice and tested for.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"Annotations"),l.a.createElement("br",null),"There are currently three kinds of annotations.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Bounding Box:"),"This forms a square around the desired object. There should be small squares at the edges of the bounding box which can be used to resize the box. The number on the top left of the box is used to identify the placement of the box in the table to the right.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Key Point:"),"This generates an object with multiple points and lines attached to each other. They should be arranged around the obejct where the singular circle with one connecting line is the head and progress to each of the other limbs. ***Note: This feature is currently in development and there will be bugs in using this.***",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h4",null,"Segmentation:"),"Upon generating this each click on the video generates a point which eventually will transform to a set of interconnected points. To complete the polygon click on the original point generated (which is the red colored point) ***Note: Unline the Bounding Box, segmentation cant be edited after generated. To fix a mistake remove the annotation and continue from the start.***")}var P=n(112),R=n.n(P),I=(n(204),[{dataField:"id",text:"ID",headerStyle:function(){return{width:"40px",left:0}}},{dataField:"global_id",text:"Glo",headerStyle:function(){return{width:"50px",left:0}},editCellStyle:function(e,t,n,a){return{backgroundColor:e>2101?"#00BFFF":"#00FFFF"}}},{dataField:"status",text:"Status",editor:{type:j.Type.SELECT,options:[{value:"Stationary",label:"Stationary"},{value:"Minor",label:"Minor"},{value:"Stationary Transition",label:"Stationary Transition"},{value:"Active Transition",label:"Active Transition"},{value:"Active",label:"Active"},{value:"Event",label:"Event"}]}},{dataField:"current",text:"Curr",editor:{type:j.Type.CHECKBOX,value:"Start:Stop"},headerStyle:function(){return{width:"60px",left:0}}},{dataField:"behavior",text:"Behavior",editor:{type:j.Type.SELECT,options:[{value:"Other",label:"Other"},{value:"Lying",label:"Lying"},{value:"Standing",label:"Standing"},{value:"Sitting",label:"Sitting"},{value:"Kneeling",label:"Kneeling"},{value:"Scar",label:"Scar"},{value:"Facial",label:"Facial"},{value:"Skin",label:"Skin"},{value:"Walking",label:"Walking"},{value:"Running",label:"Running"},{value:"Transitioning",label:"Transitioning"},{value:"Exploring",label:"Exploring"},{value:"Selfplay",label:"Selfplay"},{value:"Aggression",label:"Aggression"},{value:"Defecation",label:"Defecation"},{value:"Urination",label:"Urination"},{value:"Drinking",label:"Drinking"},{value:"Feeding",label:"Feeding"}]}},{dataField:"remove",text:"Del",headerStyle:function(){return{width:"50px",left:0}},formatter:function(e,t){return l.a.createElement("button",{className:"btn btn-danger btn-xs",onClick:function(){return e=t.id,G[ee].splice(e,1),void console.log(V.getObjects()[e]);var e},label:"Del"})}}]);var W=n(53).fabric,L=n(110),U=-1,H=1920,J=1080,z=1;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var K=window.screen.height;K>=1440?(H=1920,J=1080):K>=1080?(H=1280,J=720):K>=1024?(H=1152,J=648):K>=768&&(H=1024,J=576);var V=new W.Canvas("c",{uniScaleTransform:!0}),X=0,Y=0,Z=L({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);V.initialize(e,{height:J,width:H,backgroundColor:null}),V.Cursor="crosshair",V.on("mouse:up",(function(){oe(ee)})),V.on("object:added",oe(ee)),V.on("object:removed",oe(ee)),V.on("object:modified",oe(ee)),V.on("saveData",(function(){V.renderAll()}))},render:function(){return l.a.createElement("canvas",null)}}),q=[[]],G=[[]],$=!1,Q=!0,ee=0,te=0,ne="",ae=[],le=[];function oe(e){q[e]=V.toJSON(),console.log("SAVED")}var ie=function(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),n=t[0],o=t[1],i=function(){0!=G[ee].length&&(console.log(0===G[ee].length),console.log("saved annotation"),ae=G[ee],le=q[ee])},r=Object(a.useState)("1"),s=Object(h.a)(r,2),y=s[0],w=s[1],k=Object(a.useState)(0),j=Object(h.a)(k,2),C=j[0],x=j[1],_=function(){var e="#"+((1<<24)*Math.random()|0).toString(16);if(null==G[ee]&&(G[ee]=[]),oe(ee),"2"===y){G[ee].push({id:C+"b",global_id:null,status:"None",current:"Start",behavior:"None"});new A(V.height/2,V.width/2,50,50,e,C+"b","None",V).generate_no_behavior(V)}else if("3"===y)alert("KeyPoint annotation are currently unavailable");else if("4"===y){G[ee].push({id:C+"s",global_id:null,status:"None",current:"Start",behavior:"None"});(new B).generate_polygon(V,C+"s")}else"1"===y&&G[ee].push({id:C+"f",global_id:null,status:"None",current:"Start",behavior:"None"});x(C+1),V.fire("saveData")},D=function(){x(C+1);var e=V.getActiveObject().toJSON().local_id;console.log(V.getActiveObject().toJSON());for(var t=0;t<G[ee].length;t++)if(G[ee][t].id===e){G[ee].splice(t,1);break}V.remove(V.getActiveObject()),V.fire("saveData")},M=Object(a.useState)(null),P=Object(h.a)(M,2),W=P[0],L=P[1],K=Object(a.useState)(null),ie=Object(h.a)(K,2),re=(ie[0],ie[1],Object(a.useState)(null)),ce=Object(h.a)(re,2),se=ce[0],ue=ce[1];Object(a.useEffect)((function(){null!=se&&(console.log(se),console.log(se.getAllObjectByFrame(2)))}),se);var de=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(JSON.parse(e.target.result))},a.readAsText(e.target.files[0])}))},he=Object(a.useState)(!1),be=Object(h.a)(he,2),ge=be[0],fe=be[1],me=function(e){fe(!ge)},ve="ERROR";ve=!0===ge?"Pause":"Play";var pe=Object(a.useState)(!1),ye=Object(h.a)(pe,2),we=(ye[0],ye[1]),Ee=Object(a.useState)(null),ke=Object(h.a)(Ee,2),Se=ke[0],je=ke[1],Oe=Object(a.useState)(0),Ce=Object(h.a)(Oe,2),xe=Ce[0],Te=Ce[1],_e=Object(a.useState)(!0),Ae=Object(h.a)(_e,2),Fe=Ae[0],De=Ae[1],Me=function(e){i(),!1===Fe&&0==G[ee+z].length&&(G[ee+z]=JSON.parse(JSON.stringify(G[ee])),q[ee+z]=q[ee],console.log("Carryover annotation"));var t=15*xe;console.log(Se.getCurrentTime()/xe*t/t+z/t),Se.seekTo(Se.getCurrentTime()/xe*t/t+z/t)},Be=function(e){i();var t=15*xe;Se.seekTo(Se.getCurrentTime()/xe*t/t-z/t)},Ne=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,l,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="generated_annotations",n=JSON.stringify({annotations:q,behavior_data:G}),a=new Blob([n],{type:"application/json"}),e.next=5,URL.createObjectURL(a);case 5:l=e.sent,(o=document.createElement("a")).href=l,o.download=t+".json",document.body.appendChild(o),o.click(),document.body.removeChild(o);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=Object(a.useState)(!1),Re=Object(h.a)(Pe,2),Ie=Re[0],We=Re[1],Le=function(){return We(!1)},Ue=Object(a.useState)(!1),He=Object(h.a)(Ue,2),Je=He[0],ze=He[1],Ke=Object(a.useState)(!0),Ve=Object(h.a)(Ke,2),Xe=Ve[0],Ye=Ve[1],Ze=function(e){if(0!=Xe)if("2"===e.key)ne="Mode Switch: Bounding Box",ze(!0),w("2");else if("3"===e.key)ne="Mode Switch: Key Point",ze(!0),w("3");else if("4"===e.key)ne="Mode Switch: Segmentation",ze(!0),w("4");else if("1"===e.key)ne="Mode Switch: Behavior Annotation",ze(!0),w("1");else if("a"===e.key){"2"===y?"Bounding Box":"1"===y?"Behavior Data":"3"===y?"Keypoint":"4"===y&&"Segmentation",ne="Added Annotation",ze(!0),_()}else"r"===e.key?(ne="Removed Annotation",ze(!0),D()):"q"===e.key?Be():"w"===e.key?me():"e"===e.key?Me():"s"===e.key?(ne="Annotation Saved",ze(!0),q[ee]=V.toJSON()):"f"===e.key?!1===Fe?(ne="Scrubbing Mode Activated",De(!0),ze(!0)):(ne="Scrubbing Mode Deactivated",De(!1),ze(!0)):"c"===e.key&&(ne="Copying previous frame annotation",G[ee]=ae,q[ee]=le,ze(!0))},qe=Object(a.useState)(!1),Ge=Object(h.a)(qe,2);return Ge[0],Ge[1],Object(a.useEffect)((function(){return document.addEventListener("keydown",Ze),function(){return document.removeEventListener("keydown",Ze)}}),[Ze]),V.loadFromJSON(q[ee],(function(){V.renderAll()})),l.a.createElement("div",null,l.a.createElement(g.a,{bg:"dark",variant:"dark",className:"bg-5"},l.a.createElement(g.a.Brand,{href:"#home"},"Annotation Tool"),l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(f.a.Link,{onClick:function(){return We(!0)}},"Instructions"),l.a.createElement(T.a,{disabled:Q,title:"Mode",id:"basic-nav-dropdown"},l.a.createElement(T.a.Item,{onClick:function(){w(0)}},"Square Box"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,{onClick:function(){w(1)}},"Key Point"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,{onClick:function(){w(2)}},"Segmentation")),l.a.createElement(T.a,{disabled:Q,title:"Export",id:"basic-nav-dropdown"},l.a.createElement(T.a.Item,{onClick:Ne},"JSON"),l.a.createElement(T.a.Divider,null),l.a.createElement(T.a.Item,null,"CSV")),l.a.createElement(T.a,{disabled:Q,title:"Settings",id:"basic-nav-dropdown"},l.a.createElement(T.a.Divider,null),"Frame Rate: ",l.a.createElement("input",{type:"number",defaultValue:"15"}),l.a.createElement(T.a.Divider,null),"Horizontal Res: ",l.a.createElement("input",{type:"number",defaultValue:X}),l.a.createElement(T.a.Divider,null),"Vertical Res: ",l.a.createElement("input",{type:"number",defaultValue:Y}),l.a.createElement(T.a.Divider,null),"Skip Value: ",l.a.createElement("input",{type:"number",defaultValue:"1",onChange:function(e){z=parseInt(e.target.value)}}))),l.a.createElement("div",null,l.a.createElement(v.a,{style:{float:"left",width:80}},l.a.createElement(v.a.File,{disabled:Q,id:"file",label:"Annotation Upload",custom:!0,type:"file",onChange:function(e){de(e).then((function(e){null!=e?ue(new E(e)):console.log("ERROR in upload old_annotation")}))}})),l.a.createElement(v.a,{style:{float:"left",width:80}},l.a.createElement(v.a.File,{id:"file",label:"Video Upload",accept:".mp4",custom:!0,type:"file",onChange:function(e){L(URL.createObjectURL(e.target.files[0])),$=!0}})),l.a.createElement(b.a,{variant:"secondary",disabled:!0},"Frame # ",parseInt(ee)+" / "+parseInt(15*xe))," ",l.a.createElement(b.a,{variant:"primary",disabled:Q,onClick:Be},"Prev")," ",l.a.createElement(b.a,{variant:"primary",disabled:Q,onClick:me},ve)," ",l.a.createElement(b.a,{variant:"primary",disabled:Q,onClick:Me},"Next")," ",l.a.createElement(b.a,{variant:"success",disabled:Q,onClick:_,style:{position:"relative"}},"Add")," ",l.a.createElement(b.a,{variant:"danger",onClick:D,disabled:Q,style:{position:"relative"}},"Remove")," ")),l.a.createElement(p.a,{onClose:function(){return ze(!1)},show:Je,delay:500,autohide:!0,style:{position:"absolute",top:"00%",left:"50%",zIndex:100}},l.a.createElement(p.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},ne))),l.a.createElement(m.a,{show:Ie,onHide:Le,size:"lg"},l.a.createElement(m.a.Header,{closeButton:!0},l.a.createElement(m.a.Title,null,"Instructions")),l.a.createElement(m.a.Body,null,l.a.createElement(N,null)),l.a.createElement(m.a.Footer,null,l.a.createElement(b.a,{variant:"secondary",onClick:Le},"Close"))),l.a.createElement("div",{style:{display:"grid"}},l.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",width:H,height:J,top:0,left:0}},l.a.createElement(c.a,{onProgress:function(e){oe(ee);var t=15*xe;if(ee=e.played/t,ee=Math.round(e.played*t),o(!n),null!=se)for(var a=new F(se.getAllObjectByFrame(ee),H,J).generate_frame(),l=0;l<a.length;l++){var i=a[l];console.log(i),V.add(i),V.setActiveObject(i),V.fire("saveData")}},ref:function(e){if(console.log(e),null!=e&&null!=e.player&&null!=e.player.player&&null!=e.player.player){X=e.player.player.player.videoWidth,Y=e.player.player.player.videoHeight;e.player.player.player.duration}je(e)},onDuration:function(e){if(!0===$&&null!=Se){console.log("Initializing..."),U=Math.round(15*e),q=new Array(U),G=new Array(U);for(var t=0;t<U;t++)q[t]=[],G[t]=[];$=!1,Q=!1}Te(parseInt(e)),console.log(e)},url:W,width:"100%",height:"99.999%",playing:ge,controls:!1,style:{position:"absolute",float:"left",top:0,left:0},volume:0,muted:!0,pip:!1})),l.a.createElement("div",{style:{gridColumn:1,gridRow:1,position:"relative",top:0,left:0}},l.a.createElement(Z,null)),l.a.createElement("div",{style:{gridColumn:1,gridRow:2,position:"relative",width:H,top:0,left:0}},l.a.createElement("input",{style:{width:H},type:"range",min:0,max:.999999,step:"any",value:te,onMouseDown:function(e){we(!0)},onChange:function(e){te=parseFloat(e.target.value)},onMouseUp:function(e){we(!1),Se.seekTo(parseFloat(e.target.value))}})),l.a.createElement("div",{style:{gridColumn:2,gridRow:1,position:"relative",width:.4*H,height:J,top:0,left:0}},l.a.createElement(S.a,{keyField:"id",data:G[ee],columns:I,table:!0,noDataIndication:function(){return l.a.createElement("div",null,"No recorded annotations or behaviors for this frame",l.a.createElement("br",null),"Please add an annotation or behavior tag to start.")},cellEdit:O()({mode:"click",blurToSave:!0,afterSaveCell:function(e,t,n,a){console.log(G[ee][n.id]),G[ee][n.id]=n,Ye(!0)},onStartEdit:function(e,t,n,a){Ye(!1)}}),pagination:R()()}))))},re=(n(114),j.Type.SELECT,j.Type.SELECT,n(53).fabric),ce=n(110),se=1080,ue=1920;console.log(window.screen.width),console.log(window.screen.height);window.screen.width;var de=window.screen.height;de>=1440?(se=1080,ue=1920):de<=1024&&(se=648,ue=1152);var he=new re.Canvas("c",{uniScaleTransform:!0});ce({displayName:"Fabric",componentDidMount:function(){var e=i.a.findDOMNode(this);he.initialize(e,{height:se,width:ue,backgroundColor:null}),he.on("mouse:up",(function(){})),he.on("saveData",(function(){he.renderAll()}))},render:function(){return l.a.createElement("canvas",null)}});n(230),n(231);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.0fa474ee.chunk.js.map