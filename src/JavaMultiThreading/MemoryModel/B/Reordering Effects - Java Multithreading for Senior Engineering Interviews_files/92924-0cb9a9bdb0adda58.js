"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92924],{57683:function(a,b,c){c.d(b,{TD:function(){return k},fd:function(){return j},kr:function(){return i}});var d=c(67952),e=c(94151);function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var g=function(a,b){return"/api/author/".concat(a,"/collection/").concat(b,"/concept")},h=function(a){var b,c,d;if(!(null===(b=a())|| void 0===b?void 0:null===(c=b.author)|| void 0===c?void 0:null===(d=c.concepts)|| void 0===d?void 0:d.data))throw Error("Concepts were not loaded")},i=function(a){var b=a.authorId,c=a.collectionId,f=a.name,i=a.comps;return function(a,j){var k=JSON.stringify(i);return(0,d.Z)({url:g(b,c),type:"POST",data:{name:f,json_data:k}}).then(JSON.parse).then(function(b){var c=b.id,d=b.usage_count;h(j),a(e._.update({id:c,name:f,comps:i,usageCount:d}))})}},j=function(a){var b=a.authorId,c=a.collectionId,i=a.conceptId,j=a.name,k=a.comps;return function(a,l){var m=k&&JSON.stringify(k);return(0,d.Z)({url:g(b,c)+"/".concat(i),type:"PUT",data:function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){f(a,b,c[b])})}return a}({},j&&{name:j},m&&{json_data:m})}).then(JSON.parse).then(function(b){var c=b.usage_count;h(l),a(e._.update({id:i,name:j,comps:k,usageCount:c}))})}},k=function(a){var b=a.authorId,c=a.collectionId,f=a.conceptId;return function(a,i){return(0,d.Z)({url:g(b,c)+"/".concat(f),type:"DELETE"}).then(function(){h(i),a(e._.remove({id:f}))})}}},19318:function(a,b,c){c.r(b),c.d(b,{addNewsletterSubscription:function(){return ac},deleteSingleArticle:function(){return Z},duplicateMarketingPage:function(){return Y},getNewsletterSubscriptions:function(){return ab},prepareToRunPageEditorAction:function(){return R},publishPage:function(){return _},saveCollectionArticle:function(){return aa},savePage:function(){return $},sendClipboardSourceRequest:function(){return ad},uploadArticlePermutationImage:function(){return M},uploadCollectionArticleImage:function(){return L},uploadSingleArticleImage:function(){return N}});var d=c(32176),e=c.n(d),f=c(72392),g=c(20888),h=c(46124),i=c(27080),j=c(30788),k=c(78977),l=c(83090),m=c(32388),n=c(59933),o=c(5764),p=c(47156),q=c(33040),r=c(1655),s=c(4651),t=c(53378),u=c(6169),v=c(67952),w=c(41660),x=c(9016),y=c(15008),z=c(52774),A=c(786),B=c.n(A),C=c(24878),D=c(5080),E=c(95321);function F(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function G(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){F(f,d,e,g,h,"next",a)}function h(a){F(f,d,e,g,h,"throw",a)}g(void 0)})}}function H(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function I(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){H(a,b,c[b])})}return a}var J=function(a){var b,c,d;return(0,E.ME)(null===(b=a.author)|| void 0===b?void 0:null===(c=b.collection)|| void 0===c?void 0:null===(d=c.instance)|| void 0===d?void 0:d.details)},K=function(a,b,c,d){var f;return f=G(e().mark(function f(g){var i,j;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i=JSON.parse(b))){e.next=6;break}return a=B()(a,{content:{image_id:{$set:i.image_id}}}),e.next=5,(0,C.cT)(a.content.file,i.upload_url);case 5:delete a.content.file;case 6:if(!(j=JSON.parse(c))){e.next=12;break}return a=B()(a,{content:{resized:{image_id:{$set:j.image_id}}}}),e.next=11,(0,C.cT)(a.content.resized.file,j.upload_url);case 11:delete a.content.resized.file;case 12:d?(0,x.updateSlateState)(d,a.content.comp_id,(0,C.sG)(i,j)):g(h.oh.updateContentState(a.hash,(0,C.sG)(i,j)));case 13:case"end":return e.stop()}},f)})),function(a){return f.apply(this,arguments)}},L=function(a,b,c,d,g,h){var i;return i=G(e().mark(function i(j){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(){var i=G(e().mark(function i(k,l){var n,o;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(0,C.iM)(g.content)){e.next=14;break}if(d!==m.sLn.ORG_WORKFLOW_DOCUMENT){e.next=8;break}return e.next=5,(0,f.Xs)({page_id:c});case 5:e.t1=e.sent,e.next=11;break;case 8:return e.next=10,(0,f.i1)({author_id:a,collection_id:b,page_id:c});case 10:e.t1=e.sent;case 11:e.t0=e.t1,e.next=15;break;case 14:e.t0=null;case 15:if(n=e.t0,!(0,C.rL)(g.content)){e.next=29;break}if(d!==m.sLn.ORG_WORKFLOW_DOCUMENT){e.next=23;break}return e.next=20,(0,f.Xs)({page_id:c});case 20:e.t3=e.sent,e.next=26;break;case 23:return e.next=25,(0,f.i1)({author_id:a,collection_id:b,page_id:c});case 25:e.t3=e.sent;case 26:e.t2=e.t3,e.next=30;break;case 29:e.t2=null;case 30:return o=e.t2,e.next=33,j(K(g,n,o,h));case 33:k(),e.next=39;break;case 36:e.prev=36,e.t4=e.catch(0),l(e.t4);case 39:case"end":return e.stop()}},i,null,[[0,36]])}));return function(a,b){return i.apply(this,arguments)}}()));case 1:case"end":return i.stop()}},i)})),function(a){return i.apply(this,arguments)}},M=function(a,b,c,d,g){var i;return i=G(e().mark(function i(j){return e().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(){var i=G(e().mark(function i(k,l){var n,o,p,q,r,s,t,u,v,w;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,o=d,p=0;case 4:if(!(p<(null===(n=d.content)|| void 0===n?void 0:n.options.length))){e.next=24;break}if(!((v=null===(q=d.content)|| void 0===q?void 0:q.options[p]).blockType===m.$Wo.IMAGE&&(null===(r=v.content)|| void 0===r?void 0:null===(s=r.data)|| void 0===s?void 0:s.file)&&!(null===(t=v.content)|| void 0===t?void 0:null===(u=t.data)|| void 0===u?void 0:u.image_id))){e.next=21;break}if(!(b&&a)){e.next=14;break}return e.next=11,(0,f.i1)({author_id:a,collection_id:b,page_id:c});case 11:e.t0=e.sent,e.next=17;break;case 14:return e.next=16,(0,f.hv)(c);case 16:e.t0=e.sent;case 17:return w=e.t0,e.next=20,(0,y.k)(o,w,g,p,f.iL,x.updateSlateState,h.oh.updateContentState,j);case 20:o=e.sent;case 21:p++,e.next=4;break;case 24:k(),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(0),l(e.t1);case 30:case"end":return e.stop()}},i,null,[[0,27]])}));return function(a,b){return i.apply(this,arguments)}}()));case 1:case"end":return i.stop()}},i)})),function(a){return i.apply(this,arguments)}},N=function(a,b,c){var d;return d=G(e().mark(function d(g){return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",new Promise(function(){var d=G(e().mark(function d(h,i){var j,k;return e().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(d.prev=0,!(0,C.iM)(a.content)){d.next=7;break}return d.next=4,(0,f.hv)(b);case 4:d.t0=d.sent,d.next=8;break;case 7:d.t0=null;case 8:if(j=d.t0,!(0,C.rL)(a.content)){d.next=15;break}return d.next=12,(0,f.hv)(b);case 12:d.t1=d.sent,d.next=16;break;case 15:d.t1=null;case 16:return k=d.t1,d.next=19,g(K(a,j,k,c));case 19:h(),d.next=25;break;case 22:d.prev=22,d.t2=d.catch(0),i(d.t2);case 25:case"end":return d.stop()}},d,null,[[0,22]])}));return function(a,b){return d.apply(this,arguments)}}()));case 1:case"end":return d.stop()}},d)})),function(a){return d.apply(this,arguments)}},O=function(a,b){var c=0,d=0,e=0,f=a.type;if("RunJS"===f){var g,h,i,j,k=null==a?void 0:null===(g=a.content)|| void 0===g?void 0:null===(h=g.jotted)|| void 0===h?void 0:h.exercise,l=null==a?void 0:null===(i=a.content)|| void 0===i?void 0:null===(j=i.jotted)|| void 0===j?void 0:j.showSolution;k||l?d++:c++}else if("WebpackBin"===f)(null==a?void 0:null===(m=a.content)|| void 0===m?void 0:null===(n=m.codeContents)|| void 0===n?void 0:null===(o=n.judge)|| void 0===o?void 0:o.judgeActive)?d++:c++;else if("Code"===f)a.content.runnable?c++:a.content.judge?d++:e++;else if("CodeTest"===f)d++;else if("Sandpack"===f)a.content.disableExecution?e++:a.content.hideTests?c++:d++;else if("TabbedCode"===f){var m,n,o,p,q=(p=a.content.codeContents).reduce(function(a,b){return b.runnable?a.hasRunnable=!0:b.judge?a.hasJudge=!0:a.hasSnippet=!0,a},{hasRunnable:!1,hasJudge:!1,hasSnippet:!1});q.hasRunnable&&c++,q.hasJudge&&d++,q.hasSnippet&&e++}else if("LiveApp"===f)c++;else if("TerminalWidget"===f)c++;else if("MarkdownEditor"===f){var r=document.createElement("div");r.innerHTML=a.content.mdHtml,e+=Array.from(r.querySelectorAll("pre")).filter(function(a){return a.querySelectorAll("code").length>0}).length}else"EditorCode"===f&&e++;"codeExerciseCount"in b?b.codeExerciseCount+=d:b.codeExerciseCount=d,"codeRunnableCount"in b?b.codeRunnableCount+=c:b.codeRunnableCount=c,"codeSnippetCount"in b?b.codeSnippetCount+=e:b.codeSnippetCount=e},P=function(a,b){var c=0,d=a.type;switch(d){case"Image":case"Chart":case"Graph":case"Matrix":case"LinkedList":case"EducativeArray":case"BinaryTree":case"NaryTree":case"Stack":case"HashTable":case"Graphviz":case"SVGEdit":case"SVG":case"Canvas":case"MxGraphWidget":case"SequenceDiagrams":case"UML":case"Mermaid":case"DrawIOWidget":case"MarkMap":c++}"MarkdownEditor"===d&&(c+=(a.content.mdHtml.match(/img/g)||[]).length),"Columns"===d&&a.content.comps&&a.content.comps.forEach(function(a){P(a,b)}),"CanvasAnimation"===d&&(c+=a.content.canvasObjects.length),"illustrations"in b?b.illustrations+=c:b.illustrations=c},Q=function(a){var b={};return a.forEach(function(a){var c=a.type;c in b?b[c]++:b[c]=1,O(a,b),P(a,b)}),JSON.stringify(b)},R=function(a,b,c,d,h,i,k,l){var n,o=arguments.length>8&& void 0!==arguments[8]?arguments[8]:"",p=arguments.length>9?arguments[9]:void 0;return n=G(e().mark(function n(q,r){var s,t,u;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=J(r()),q(g.n.show(s?j.lu:j.ad,{status:m.oiP.WAIT,text:"Starting to Save"})),!(a.file&&a.updated)){e.next=21;break}return q(g.n.update({status:m.oiP.WAIT,text:"Uploading Files and Images"})),e.prev=4,e.next=7,(0,f.iL)(a);case 7:return(u=JSON.parse(t=e.sent))&&(a.updated=!1,a.file_name=u.file_name,a.image="".concat(b,"/").concat(u.image_id),a.image_id=u.image_id),e.next=12,d(a);case 12:i(c,a,h,k,l,o,p),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(4),q(g.n.update({status:m.oiP.ERROR,text:"Upload Image failed"})),console.error(e.t0);case 19:e.next=22;break;case 21:i(c,a,h,k,l,o,p);case 22:case"end":return e.stop()}},n,null,[[4,15]])})),function(a,b){return n.apply(this,arguments)}},S=function(a,b,c,d,e,f){var g=arguments.length>6&& void 0!==arguments[6]?arguments[6]:"",i=arguments.length>7?arguments[7]:void 0;return function(j,k){var l,m,n=k().widgets.selectedHash,o=i&&(null===(l=i.children[n])|| void 0===l?void 0:null===(m=l.content)|| void 0===m?void 0:m.comp_id);-1!==(i?i.children.findIndex(function(a){var b;return(null===(b=a.content)|| void 0===b?void 0:b.comp_id)===o&&o}):k().widgets.ids.indexOf(n))?(a(function(){return j(b(c,d,e,f,!0,g,i))}),i?(0,x.slateBumpWidgetVersion)(i,o):j(h.oh.bumpVersion())):j(b(c,d,e,f,!0,g,i))}},T=function(a,b,c,d,h,i){var k;return k=G(e().mark(function b(i,k){var l,m,n,o,q,r,v,w,y,z,A,B,C,E,F,G,H,K,L,M,N,O,P,R,S,T,U;return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return o=J(k()),i(g.n.showOrUpdate(o?j.lu:j.ad,{status:"WAIT",text:"Optimizing Article to save"})),w=(v=(r=(q=k()).author).page).data,y=r.collection,z=q.pageSummary,A=q.widgets,B=h?(0,x.compsFromSlateSerializer)(h):A.ids.map(function(a){return A.entities[a]}),C=c.author_id,E=c.collection_id,F=c.page_id,b.next=8,(0,p.generateSlateDocumentTOC)(B);case 8:var e,V,W,X;if(H=(G=b.sent).TOC,K=E&&(null==y?void 0:null===(l=y.instance)|| void 0===l?void 0:null===(m=l.details)|| void 0===m?void 0:null===(n=m.page_titles)|| void 0===n?void 0:n[F]),delete(L=I({},z)).dirty,M=(V=B,W=L,JSON.stringify({components:V,summary:W,cover_image_id:(X=a).image_id,cover_image_metadata:X.metadata})),N=Q(B),O=JSON.stringify((0,s.Dn)(B)),R=(P=(0,D.MO)(B)).userMentions,S=P.pageMentions,i(g.n.showOrUpdate(o?j.lu:j.ad,{status:"WAIT",text:"Saving"})),i(t.I.change({titleUpdated:!0})),T=a.metadata?JSON.stringify(a.metadata):"",U=L.tags?L.tags.toString():"",E){b.next=25;break}if(F){b.next=24;break}return b.abrupt("return",new Promise(function(a){return a()}));case 24:return b.abrupt("return",(0,f.Is)({pageId:F,page_title:L.title,page_summary:L.description,page_table_of_content:H,page_table_of_content_is_enabled:L.pageTocEnabled,price:L.price,is_priced:L.is_priced||"false",version:L.version,tags:U,page_content_encoding:"deflate",page_content:M,cover_image_id:a.image_id,cover_image_metadata:T,widget_stats:N,feedback_email:L.feedback_email,feedback_email_2:L.feedback_email_2,concept_list:O,eTag:d}));case 25:return b.abrupt("return",new Promise(function(b,c){(0,f.EO)({authorId:C,collectionId:E,pageId:F,page_title:K,page_summary:L.description,page_table_of_content:H,price:L.price,is_priced:L.is_priced,version:L.version,tags:U,page_content_encoding:"deflate",page_content:M,cover_image_id:a.image_id,cover_image_metadata:T,widget_stats:N,concept_list:O,user_mentions:JSON.stringify(R),page_mentions:JSON.stringify(S),eTag:d}).then(function(a){"success"===(null==a?void 0:a.status)&&i(u.X5.updateArticleTags({pageId:F,tags:U})),b()}).catch(function(a){c(a)})}));case 26:case"end":return b.stop()}},b)})),function(a,b){return k.apply(this,arguments)}},U=function(a,b,d,l,p,r,s){var t,u=arguments.length>7&& void 0!==arguments[7]?arguments[7]:"",v=arguments.length>8?arguments[8]:void 0;return t=G(e().mark(function b(t,y){return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(){var b=G(e().mark(function b(A,B){var C,D,E,F,H,I,J,K,L,M,N,O,P,Q,R,S,U,V,W,X,Y,Z,$,_,aa,ab;return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(E=(D=y()).widgets,H=!!(null===(C=(F=D.author).collection.instance.details)|| void 0===C?void 0:C.allow_custom_styling_editor_side),M=void 0!==(L=(K=(J=(I=F.collection).instance).details).is_private)&&L,N=K.organization_id,O=void 0===N?null:N,P=M&&!!O,Q=d.author_id,R=d.collection_id,S=d.page_id,U=v?(0,x.compsFromSlateSerializer)(v):E.ids.map(function(a){return E.entities[a]}),!(!H&&(0,n.fg)(U))){b.next=9;break}return b.abrupt("return",t(g.n.update({status:m.oiP.ERROR,text:"Unable to save changes due to custom styles"})));case 9:if(b.prev=9,!(E.markdownDirty&&!P)){b.next=33;break}return b.prev=11,b.prev=12,b.next=15,(0,o.validateHeadings)(U,!1,m.sLn.COLLECTION);case 15:t(h.oh.resetMarkdownDirtyBit()),b.next=28;break;case 18:if(b.prev=18,b.t0=b.catch(12),!("errors"in b.t0&&"headingTree"in b.t0)){b.next=27;break}if(V=b.t0.errors,W=b.t0.headingTree,!(null!=V?V:[]).length){b.next=25;break}return t(g.n.show(j.Xw,{workType:m.sLn.COLLECTION,errors:V,comps:U,dispatch:t,fixHeadings:G(e().mark(function a(){var b;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,o.fixHeadings)(U,V,W);case 2:b=a.sent,v?(0,x.updateSlateMDWidgets)(v,b):((0,n.bc)(t,b),c.g.shotSummaryDispatch({type:"clear"}));case 4:case"end":return a.stop()}},a)}))})),b.abrupt("return");case 25:b.next=28;break;case 27:throw b.t0;case 28:b.next=33;break;case 30:b.prev=30,b.t1=b.catch(11),(0,w.uX)(b.t1);case 33:var B;return X=(B=U).map(function(a){return a.content.image_id}),b.next=36,t(T(a,X,d,p||"",v,s));case 36:if(v&&(0,z.qP)(z.f2.SLATE_EDITOR,z.bt.EDITOR_SAVE_CONTENT),A({selAfterSave:U.length?U[0].hash:-1}),t(q.x.updateLastModified()),!u){b.next=42;break}return b.next=42,(0,f.bU)(u,{author_id:Q,collection_id:R,page_id:S,page_type:m.sLn.COLLECTION},t);case 42:b.next=48;break;case 44:b.prev=44,b.t2=b.catch(9),(0,i.rU)(b.t2,t),b.t2.status===k.Wy.AlreadyExistsException?(t(g.n.close()),t(g.n.show(j.zN,{onConfirm:function(){return t(r(a,d,l,s,!1,u,v))},cancelText:"Cancel",confirmText:"Save",title:"Conflicts",description:"The content you are editing has changed. The previous changes will be overwritten. Are you sure you want to save?"}))):(ab=(null===b.t2|| void 0===b.t2?void 0:null===(Y=b.t2.responseJSON)|| void 0===Y?void 0:null===(Z=Y.errors)|| void 0===Z?void 0:Z.page_title)||(null===b.t2|| void 0===b.t2?void 0:null===($=b.t2.responseJSON)|| void 0===$?void 0:null===(_=$.errors)|| void 0===_?void 0:_.page_summary)||(null===b.t2|| void 0===b.t2?void 0:null===(aa=b.t2.responseJSON)|| void 0===aa?void 0:aa.errorText)||"Unable to Save Changes",t(g.n.update({status:m.oiP.ERROR,text:ab})),(0,w.uX)(b.t2));case 48:l&&l();case 49:case"end":return b.stop()}},b,null,[[9,44],[11,30],[12,18]])}));return function(a,c){return b.apply(this,arguments)}}()));case 1:case"end":return b.stop()}},b)})),function(a,b){return t.apply(this,arguments)}},V=function(a,b,c,d){var f,j=!(arguments.length>4)|| void 0===arguments[4]||arguments[4],k=arguments.length>5?arguments[5]:void 0,n=arguments.length>6?arguments[6]:void 0;return f=G(e().mark(function f(o,p){var q,r,s;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=p().author,s=j?null===(q=r.page.data)|| void 0===q?void 0:q[l.Zq]:m.FhE,e.prev=3,e.next=6,o(U(a,!1,b,c,s,V,d,k,n));case 6:o(g.n.update({status:m.oiP.SUCCESS,text:"Saved"})),o(t.I.change({dirty:!1})),o(h.oh.resetDirtyBit()),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0),(0,i.rU)(e.t0,o),o(g.n.update({status:m.oiP.ERROR,text:"Unable to Save"}));case 16:case"end":return e.stop()}},f,null,[[3,11]])})),function(a,b){return f.apply(this,arguments)}},W=function(a,b,d,h){var j,k=!(arguments.length>4)|| void 0===arguments[4]||arguments[4],n=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0;return j=G(e().mark(function j(p,q){var r,s,t,u,v,w,x,y,z;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x=(w=(v=c.g.userInfoContext).userInfoState).data,y=b.page_id,z=k?null===(r=q())|| void 0===r?void 0:null===(s=r.author)|| void 0===s?void 0:null===(t=s.page)|| void 0===t?void 0:null===(u=t.data)|| void 0===u?void 0:u[l.Zq]:m.FhE,e.next=6,p(U(a,!1,b,d,z,W,h,n,o));case 6:return p(g.n.update({status:m.oiP.WAIT,text:"Publishing Article"})),e.abrupt("return",(0,f.eb)(y).then(function(){p(g.n.update({status:m.oiP.SUCCESS,text:"Article is now Published"})),h.push("/page/".concat(x.user_id,"/").concat(y))}).catch(function(a){console.log(a),(0,i.rU)(a,p),p(g.n.update({status:m.oiP.ERROR,text:"Unable to Publish"}))}));case 8:case"end":return e.stop()}},j)})),function(a,b){return j.apply(this,arguments)}},X=function(a,b,d,f){var j,k=!(arguments.length>4)|| void 0===arguments[4]||arguments[4],n=arguments.length>5&& void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6?arguments[6]:void 0;return j=G(e().mark(function j(p,q){var r,s,u,v;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=q().author,u=k?null===(r=s.collectionArticle.data)|| void 0===r?void 0:r[l.Zq]:m.FhE,v=c.g.loaderContext.loaderActions.set,e.prev=4,v({isLoading:!0,isLoaded:!1}),e.next=8,p(U(a,!0,b,d,u,X,f,n,o));case 8:p(g.n.update({status:m.oiP.SUCCESS,text:"Saved"})),v({isLoading:!1,isLoaded:!0}),p(t.I.change({dirty:!1})),p(h.oh.resetDirtyBit()),e.next=20;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0),(0,i.rU)(e.t0,p),p(g.n.update({status:m.oiP.ERROR,text:"Unable to Save"})),v({isLoading:!1,isLoaded:!0});case 20:case"end":return e.stop()}},j,null,[[4,14]])})),function(a,b){return j.apply(this,arguments)}},Y=function(a){return(0,v.Z)({url:"/api/copy/page/editor/".concat(a),type:"POST"})},Z=function(a,b){var c=!(arguments.length>2)|| void 0===arguments[2]||arguments[2];return function(d,e){var h=J(e());return d(g.n.show(h?j.lu:j.ad,{status:m.oiP.WAIT,text:"Deleting Article"})),(0,f.CT)(a).then(function(){d(g.n.update({status:m.oiP.SUCCESS,text:"Article deleted"})),d(r.B.delete(a)),c&&b.push({pathname:"/teach",query:{isDeleted:!0}},"/teach")}).catch(function(a){(0,i.rU)(a,d),d(g.n.update({status:m.oiP.ERROR,text:"Unable to Delete"})),(0,w.uX)(a)})}},$=function(a,b,c,d,e,f,g){return S(a,V,b,c,d,e,f,g)},_=function(a,b,c,d,e,f,g){return S(a,W,b,c,d,e,f,g)},aa=function(a,b,c,d,e,f,g){return S(a,X,b,c,d,e,f,g)},ab=function(a){return(0,v.Z)({url:"/api/user/newsletter/".concat(a),type:"GET"})},ac=function(a,b,c){var d=void 0;return b&&c&&(d={full_name:b,email:c}),(0,v.Z)({url:"/api/user/newsletter/".concat(a),type:"POST",data:d})},ad=function(a){return(0,v.Z)({url:"/api/clipboard-source-request/email",type:"POST",data:{source_request_msg:a}})}},5080:function(a,b,c){c.d(b,{MO:function(){return z},Tw:function(){return w},Vs:function(){return x},Ws:function(){return B},YE:function(){return A},rJ:function(){return y}});var d=c(32176),e=c.n(d),f=c(17900),g=c(68830),h=c(50887),i=c(67952),j=c(44173),k=c(32388),l=c(57683),m=c(26431),n=c(20888),o=c(30788);function p(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function q(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){p(f,d,e,g,h,"next",a)}function h(a){p(f,d,e,g,h,"throw",a)}g(void 0)})}}function r(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function s(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){r(a,b,c[b])})}return a}function t(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}var u=function(a,b,c){var d=b.name;f.YR.insertNodes(a,{type:"concept",name:d,children:[{text:d}]},{at:c})},v=function(a,b,c,d,e){var g=c.id,i=c.name,j=c.details,l=t(s({type:"mention",category:b,id:g},(h.Q.PAGE||h.Q.CONTENT_BLOCK)&&(null==j?void 0:j.url)?{details:{url:null==j?void 0:j.url,workType:k.Xpq[null==j?void 0:j.workType]||(null==j?void 0:j.workType)}}:{}),{children:[{text:" "}]});(b===h.Q.PAGE||b===h.Q.CONTENT_BLOCK)&&"url"in j?e(r({},g,{title:i,is_draft:null==j?void 0:j.isDraft,work_type:k.Xpq[null==j?void 0:j.workType]||(null==j?void 0:j.workType),is_deleted:!1}),b):"profile_image_url"in j&&"email"in j&&e(r({},g,t(s({name:i},j),{is_deleted:!1})),b),f.YR.insertNodes(a,l,{at:d})},w=function(a,b,c,d,e){"CONCEPT"===b?u(a,c,d):"details"in c&&v(a,b,c,d,e),g.F3.focus(a)},x=function(a,b,c,d){return(0,i.Z)({url:"/api/author/".concat(a,"/collection/").concat(b,"/page/").concat(c,"/get_page_mentions").concat((0,j.N)({work_type:d})),type:"GET"},!1,!1,!1)},y=function(a,b,c){return(0,i.Z)({url:"/api/author/".concat(a,"/collection/").concat(b,"/get_mention_data").concat((0,j.N)(c)),type:"GET"},!1,!1,!1)},z=function(a){var b=a.filter(function(a){return"SlateHTML"===a.type}),c=[],d=[],e=new DOMParser;return e&&b.length&&b.forEach(function(a){var b,f=a.content.html;(null!==(b=Array.from(e.parseFromString(f,"text/html").getElementsByTagName("mention")))&& void 0!==b?b:[]).forEach(function(a){var b=a.getAttribute("category"),e=a.getAttribute("id");if(b===h.Q.PEOPLE)c.push(e);else{var f=a.getAttribute("work_type");d.push({id:e,work_type:f})}})}),{userMentions:c,pageMentions:d}},A=function(a,b,c,d,e){return function(f){f(n.n.show(o.ad,{status:"WAIT",text:"Creating"})),f((0,l.kr)({authorId:a,collectionId:b,name:c,comps:[]})).then(function(){f(n.n.show(o.ad,{status:"SUCCESS",text:"Created"})),u(d,{name:c,category:h.Q.CONCEPT},e)}).catch(function(){f(n.n.show(o.ad,{status:"ERROR",text:"Failed to create ".concat(c)}))})}},B=function(a,b,c,d,f,g){var h;return h=q(e().mark(function h(i,j){var k,l,n,o,p,r,s,t,u,v;return e().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return r=null,s=null,t=null,d.every(function(a){var b=null;return a.pages.every(function(a,d){return a.id!==parseInt(c)||(b=d,!1)}),!(b>=0)||(s=b,r=a.id,!1)}),h.next=5,i((0,m.ms)({author_id:a,collection_id:b},q(e().mark(function c(){return e().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,i((0,m.x3)({author_id:a,collection_id:b,category_id:r,index:s,data:g,collectionType:f}));case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},c)}))));case 5:return(v=null!==(u=null===(k=j().author)|| void 0===k?void 0:null===(l=k.collection)|| void 0===l?void 0:null===(n=l.instance)|| void 0===n?void 0:null===(o=n.details)|| void 0===o?void 0:null===(p=o.toc)|| void 0===p?void 0:p.categories)&& void 0!==u?u:[]).every(function(a){return a.id!==r||(t=a.pages.length>s+1?a.pages[s+1].page_id:null,!1)}),h.abrupt("return",t);case 9:case"end":return h.stop()}},h)})),function(a,b){return h.apply(this,arguments)}}},50887:function(a,b,c){var d,e;c.d(b,{Q:function(){return d}}),(e=d||(d={})).CONCEPT="CONCEPT",e.PEOPLE="PEOPLE",e.PAGE="PAGE",e.CONTENT_BLOCK="CONTENT_BLOCK"},50943:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(20348),e=c(89703),f=c(33691);function g(a){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function h(a,b){return(h=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var i=function(a){!function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&h(a,b)}(i,a);var b,c,e=(b=i,c=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,d,e,f,h=g(b);if(c){var i=g(this).constructor;f=Reflect.construct(h,arguments,i)}else f=h.apply(this,arguments);return d=this,(e=f)&&("object"==(a=e,a&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof e)?e:function(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}(d)});function i(){var a;return!function(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}(this,i),a=e.apply(this,arguments),a.state={timestampString:null},a.convertDateToString=function(){var b=a.props,c=b.timestamp,d=b.format,e=b.relative,g=b.calendarFormat,h=b.filter,i=b.daysToAdd,j=b.advanced,k=(0,f.ZP)(c,d,e,g,h,!1,i,j);a.setState({timestampString:k})},a.render=function(){return(0,d.jsx)("span",{children:"".concat(a.props.preText).concat(a.state.timestampString)})},a}var j=i.prototype;return j.componentDidMount=function(){this.convertDateToString(),this.setRefreshTimer()},j.componentDidUpdate=function(a){(this.props.timestamp!==a.timestamp||this.props.format!==a.format||this.props.calendarFormat!==a.calendarFormat||this.props.relative!==a.relative)&&this.convertDateToString(),this.props.interval!==a.interval&&(a.interval>0&&clearInterval(this.intervalId),this.setRefreshTimer())},j.componentWillUnmount=function(){this.resetRefreshTimer()},j.setRefreshTimer=function(){this.props.interval>0&&(this.intervalId=setInterval(this.convertDateToString,1e3*this.props.interval))},j.resetRefreshTimer=function(){this.props.interval>0&&clearInterval(this.intervalId)},i}(e.Component);i.defaultProps={format:null,interval:0,relative:!1,calendarFormat:{sameDay:"[today at] h:mm a",lastDay:"[yesterday at] h:mm a",lastWeek:"[last] dddd [at] h:mm a",sameElse:"MM/DD/YYYY [at] h:mm a",nextDay:"[tomorrow at] h:mm a"},filter:null,daysToAdd:0,preText:"",advanced:!1}},78920:function(a,b,c){c.d(b,{AI:function(){return l},Ay:function(){return y},Bw:function(){return C},C1:function(){return G},EY:function(){return v},G2:function(){return e},Iq:function(){return o},JP:function(){return A},LZ:function(){return d},MY:function(){return k},"R$":function(){return F},RU:function(){return i},S_:function(){return p},UD:function(){return g},VR:function(){return n},WG:function(){return r},WX:function(){return f},XB:function(){return x},b5:function(){return m},cS:function(){return D},dd:function(){return u},e3:function(){return q},ff:function(){return B},m5:function(){return w},nD:function(){return s},oU:function(){return t},s0:function(){return z},sK:function(){return E},uH:function(){return h},wQ:function(){return j}});var d="Nunito Sans",e="Droid Serif, Georgia, serif",f="331px",g=1400,h=65,i=165,j=1024,k=65,l="Learn in-demand tech skills in half the time",m="Creative Commons-Attribution-ShareAlike 4.0 (CC-BY-SA 4.0)",n="150px",o="300px",p=65,q=16,r=64,s=56,t="375px",u=10874637,v=75,w="128px",x="64px",y=320,z=214,A=372,B=242,C=350,D=228,E=["general","generic","community creator","generate","generator","communitycreator","What","definition","How","create","int","text","problem","vs","collection","collections","get","this","/*","//","0x80240017","18.04","2019","each","Error 1366x768","Fail","fast","fake","menu","right","side","size","smart","some","zero","year","world","without","with","weight","type",],F=["i","me","my","myself","we","our","ours","ourselves","you","you're","you've","you'll","you'd","your","yours","yourself","yourselves","he","him","his","himself","she","she's","her","hers","herself","it","it's","its","itself","they","them","their","theirs","themselves","what","which","who","whom","this","that","that'll","these","those","am","is","are","was","were","be","been","being","have","has","had","having","do","does","did","doing","a","an","the","and","but","if","or","because","as","until","while","of","at","by","for","with","about","against","between","into","through","during","before","after","above","below","to","from","up","down","in","out","on","off","over","under","again","further","then","once","here","there","when","where","why","how","all","any","both","each","few","more","most","other","some","such","no","nor","not","only","own","same","so","than","too","very","s","t","can","will","just","don","don't","should","should've","now","d","ll","m","o","re","ve","y","ain","aren","aren't","couldn","couldn't","didn","didn't","doesn","doesn't","hadn","hadn't","hasn","hasn't","haven","haven't","isn","isn't","ma","mightn","mightn't","mustn","mustn't","needn","needn't","shan","shan't","shouldn","shouldn't","wasn","wasn't","weren","weren't","won","won't","wouldn","wouldn't",],G="1012px"},60855:function(a,b,c){var d=c(20348),e=c(89703),f=c(36018),g=c(34001);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j=function(a){var b=a.label,c=a.forwardedRef,e=a.disabled,h=a.checked,j=a.className,k=a.dimensions,l=void 0===k?"w-4 h-4":k,m=a.border,n=function(a,b){if(null==a)return{};var c,d,e=function a(b,c){if(null==b)return{};var d,e,f={},g=Object.keys(b);for(e=0;e<g.length;e++)d=g[e],c.indexOf(d)>=0||(f[d]=b[d]);return f}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["label","forwardedRef","disabled","checked","className","dimensions","border"]),o=(0,d.jsxs)("div",{id:g.env.REACT_APP_STANDALONE?"selenium-checkbox":null,className:"group relative flex items-end justify-center ".concat(void 0===j?"":j),children:[(0,d.jsx)("input",i({type:"checkbox",ref:c,className:"absolute cursor-pointer opacity-0 ".concat(l),checked:h,disabled:e},n)),(0,d.jsx)(f.Z,{className:"".concat(l," ").concat(void 0===m?"border":m," pointer-events-none rounded-sm border-solid duration-200 ").concat(e?h?"border-none bg-gray-400 text-white dark:bg-gray-A200 dark:text-gray-800 dark:group-hover:text-black":"rounded-sm border-gray-200 bg-gray-buttonHover text-transparent dark:border-gray-A100":h?"border-none bg-primary text-white group-hover:bg-primary-dark dark:group-hover:bg-primary-light dark:group-hover:text-black":"border-gray-900 text-transparent")})]});return b?(0,d.jsxs)("label",{className:"inline-flex items-center rounded-sm border-4 border-solid border-transparent bg-transparent p-2 hover:bg-gray-buttonHover ".concat(e?"cursor-not-allowed":"cursor-pointer"),children:[o,(0,d.jsx)("span",{className:"mx-5 text-sm font-normal leading-normal tracking-normal ".concat(e?"text-gray-800":""),children:b})]}):o},k=e.forwardRef(function(a,b){var c,e;return(0,d.jsx)(j,(c=i({},a),e=(e={forwardedRef:b},e),Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(e)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(e,a))}),c))});k.displayName="CheckboxWithRef",b.Z=k},95321:function(a,b,c){c.d(b,{Fd:function(){return l},ME:function(){return n},Q6:function(){return m},Se:function(){return j},Vm:function(){return k},pi:function(){return o},yl:function(){return d}});var d,e=c(20348);c(89703),c(51425);var f,g=c(32388),h=c(67362),i=c(1633);(f=d||(d={})).MODULE="module",f.PATH="path",f.PLAN="plan";var j="collection_outline",k="trashcan_node",l=function(a){var b=a.editorType,c=void 0===b?g.V4m.CLASSIC:b,d=a.loading,f="Switch to ".concat(c," editor");return(0,e.jsxs)("div",{className:"flex flex-row items-center space-x-4 text-black dark:text-dark-contrastText",children:[(0,e.jsx)(h.Z,{className:"!h-6 !w-6 fill-current dark:text-gray-400"}),(0,e.jsx)("div",{className:"text-sm ".concat(void 0!==d&&d?"dark:text-gray-400":""),children:f}),c===g.V4m.COLLABORATIVE&&(0,e.jsx)("span",{children:(0,e.jsx)(i.Z,{className:"rounded-xl border border-solid border-accent3-lightP1 px-2 dark:border-none",bgFontClass:"bg-accent3-lightP2 dark:bg-gray-A700 text-accent3-darkN1 dark:text-accent3-light",children:"Beta"})})]})},m=function(a){return(null==a?void 0:a.is_parent_plan)||(null==a?void 0:a.is_plan)},n=function(a){var b=a,c=m(b),d=!(null==b?void 0:b.is_global)&&(null==b?void 0:b.is_standalone_module),e=null==b?void 0:b.is_template;return c||d||e},o=function(a){var b,c,d=String(null!==(b=a.query.planAuthorId)&& void 0!==b?b:""),e=String(null!==(c=a.query.planId)&& void 0!==c?c:"");return!!d&&!!e}},36018:function(a,b,c){var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check"},a),d||(d=e.createElement("polyline",{points:"20 6 9 17 4 12"})))};b.Z=g},67362:function(a,b,c){var d,e=c(89703);function f(){return(f=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var g=function(a){return e.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24"},a),d||(d=e.createElement("path",{fill:"currentColor",d:"M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"})))};b.Z=g},49656:function(a,b,c){var d,e,f=c(89703);function g(){return(g=Object.assign?Object.assign.bind():function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var h=function(a){return f.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24},a),d||(d=f.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),e||(e=f.createElement("path",{d:"M15.5 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2a6.5 6.5 0 10-2.3 5l.3.2v.8l5 5 1.5-1.5-5-5zm-6 0a4.5 4.5 0 110-9 4.5 4.5 0 010 9z"})))};b.Z=h}}])
//# sourceMappingURL=92924-0cb9a9bdb0adda58.js.map