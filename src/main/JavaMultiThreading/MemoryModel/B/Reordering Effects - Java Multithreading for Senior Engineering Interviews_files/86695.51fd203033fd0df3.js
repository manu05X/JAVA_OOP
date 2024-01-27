"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86695],{7415:function(a,b,c){c.d(b,{"$E":function(){return d},X9:function(){return e},Yi:function(){return m},kZ:function(){return g},p3:function(){return l},rS:function(){return f}});var d,e,f,g,h,i,j,k,l=[{day:"Sunday",abbreviation:"Su"},{day:"Monday",abbreviation:"M"},{day:"Tuesday",abbreviation:"Tu"},{day:"Wednesday",abbreviation:"W"},{day:"Thursday",abbreviation:"Th"},{day:"Friday",abbreviation:"F"},{day:"Saturday",abbreviation:"Sa"},],m=["January","February","March","April","May","June","July","August","September","October","November","December",];(h=d||(d={}))[h.ACTIVE=9e3]="ACTIVE",h[h.BROKEN=9001]="BROKEN",h[h.FROZEN=9002]="FROZEN",h[h.FIRST_BREAK_INTACT=9003]="FIRST_BREAK_INTACT",(i=e||(e={}))[i.UNINITIALIZED=-1]="UNINITIALIZED",i[i.FIRST_STREAK=0]="FIRST_STREAK",(j=f||(f={}))[j.NONE=0]="NONE",j[j.NEXT_LESSON=1]="NEXT_LESSON",j[j.CURRENT_LESSON=2]="CURRENT_LESSON",(k=g||(g={}))[k.HEADER=0]="HEADER",k[k.INCREMENT=1]="INCREMENT",k[k.FIRST_BREAK_INTACT=2]="FIRST_BREAK_INTACT",k[k.USER_FEEDBACK=3]="USER_FEEDBACK"},86695:function(a,b,c){c.r(b),c.d(b,{UserGamificationContext:function(){return t},default:function(){return u},userGamificationInitialState:function(){return s}});var d=c(20348),e=c(89703),f=c(27080),g=c(32565),h=c(67952);function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var j=function(a){var b=Intl.DateTimeFormat().resolvedOptions().timeZone;return(0,h.Z)(function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){i(a,b,c[b])})}return a}({url:"/api/user/gamification/streak".concat(a?"":"?timezone=".concat(b)),type:a?"PUT":"GET"},a&&{data:{timezone:b,increment_streak:a}}))},k=c(32388),l=c(7415);function m(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function n(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function o(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){n(a,b,c[b])})}return a}function p(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}function q(a){return function(a){if(Array.isArray(a))return m(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||r(a)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(a,b){if(a){if("string"==typeof a)return m(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return m(a,b)}}var s={data:{},error:"",loading:!1,loaded:!1},t=e.createContext({value:s,clearState:function(){},load:function(a,b){},incrementStreak:function(a){a.userInfo,a.userGamificationFeatureFlag},setStreakTour:function(){arguments.length>0&& void 0!==arguments[0]&&arguments[0]},updateMonthlyStreaks:function(a){a.monthRange,a.monthData,a.endDate,a.clear},updateStreakIncrementedFlag:function(a){},isStreakInfoOutdated:function(){return!1}}),u=function(a){var b,c,i,m=a.children,u=a.initialState,v=(c=e.useState(void 0===u?s:u),i=2,function(a){if(Array.isArray(a))return a}(c)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(c,i)||r(c,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),w=v[0],x=v[1],y=function(a){var b;x(function(c){var d,e,f,g,h,i,j,k,m,p,r,s,t;return{data:{userGamification:{streakRevision:a.user_gamification.streak_revision,viewedStreakTour:a.user_gamification.viewed_streak_tour,viewedIncrementTour:a.user_gamification.viewed_increment_tour,viewedFirstIntactTour:a.user_gamification.viewed_first_intact_tour,viewedUserFeedbackTour:a.user_gamification.viewed_user_feedback_tour,firstIntactUse:new Date(a.user_gamification.first_intact_use),enableStreaks:a.user_gamification.enable_streaks,userStreak:{count:a.user_streak.count||0,status:a.user_streak.status||l.$E.BROKEN,monthsSpan:a.user_streak.months_span||[],lastUpdated:a.user_streak.last_updated,streakIncremented:a.streak_incremented,monthlyData:{data:o({},null===(d=c.data)|| void 0===d?void 0:null===(e=d.userGamification)|| void 0===e?void 0:null===(f=e.userStreak)|| void 0===f?void 0:null===(g=f.monthlyData)|| void 0===g?void 0:g.data,a.streak_incremented?n({},(t=new Date(a.user_streak.last_updated),"".concat(t.toLocaleString("default",{month:"2-digit"}),"-").concat(t.toLocaleString("default",{day:"2-digit"}),"-").concat(t.getFullYear())),l.$E.ACTIVE):{}),endDate:null===(h=c.data)|| void 0===h?void 0:null===(i=h.userGamification)|| void 0===i?void 0:null===(j=i.userStreak)|| void 0===j?void 0:null===(k=j.monthlyData)|| void 0===k?void 0:k.endDate,queriedMonths:new Set(q(Array.from(null!==(b=null===(m=c.data)|| void 0===m?void 0:null===(p=m.userGamification)|| void 0===p?void 0:null===(r=p.userStreak)|| void 0===r?void 0:null===(s=r.monthlyData)|| void 0===s?void 0:s.queriedMonths)&& void 0!==b?b:[])))}},longestStreak:a.user_gamification.longest_streak,lastFetchTime:new Date}},loading:!1,loaded:!0,error:""}})},z=function(a,b){var c,d,e,f,h,i;return null!=a&&!!a.user_id&&(!w.loaded||null!==(c=w.data.userGamification)&& void 0!==c&&!!c.enableStreaks)&&(0,k.nOq)(b,null==a?void 0:null===(d=a.email)|| void 0===d?void 0:d.endsWith("educative.io"),(0,g.s)(a))&&(!(null===(e=w.data.userGamification)|| void 0===e?void 0:null===(f=e.userStreak)|| void 0===f?void 0:f.lastUpdated)||new Date().setHours(1,0,0,0)>new Date(null===(h=w.data.userGamification)|| void 0===h?void 0:null===(i=h.userStreak)|| void 0===i?void 0:i.lastUpdated).setHours(1,0,0,0))},A=function(a,b,c){var d=arguments.length>3&& void 0!==arguments[3]?arguments[3]:function(){};z(a,c)?(x(function(a){return p(o({},a),{loading:!0,loaded:!1})}),j(b).then(function(a){y(JSON.parse(a)),null==d||d()}).catch(function(a){var b;return b=a,x({data:{},loading:!1,loaded:!1,error:(0,f.nU)(b)})})):d&&d(!1)},B=function(a){w.loaded&&x(function(b){return p(o({},b),{data:p(o({},b.data),{userGamification:p(o({},b.data.userGamification),{userStreak:p(o({},b.data.userGamification.userStreak),{streakIncremented:a})})})})})},C=function(){var a,b=arguments.length>0&& void 0!==arguments[0]?arguments[0]:l.kZ.HEADER;a=b,(0,h.Z)({url:"/api/user/gamification/tour?tour_type=".concat(a),type:"PUT"}),w.loaded&&x(function(a){return p(o({},a),{data:{userGamification:o({},a.data.userGamification,b===l.kZ.FIRST_BREAK_INTACT?{viewedFirstIntactTour:!0}:b===l.kZ.HEADER?{viewedStreakTour:1}:{viewedIncrementTour:!0})}})})},D=function(a){var c=a.monthRange,d=a.monthData,e=a.endDate,f=a.clear;return x(function(a){var g,h,i,j,k,l,m,n,r,s,t,u,v,w,x;return p(o({},a),{data:{userGamification:p(o({},null===(g=a.data)|| void 0===g?void 0:g.userGamification),{userStreak:p(o({},null===(h=a.data)|| void 0===h?void 0:null===(i=h.userGamification)|| void 0===i?void 0:i.userStreak),{monthlyData:o({},f?{data:{},endDate:"",queriedMonths:new Set}:{data:o({},null===(j=a.data)|| void 0===j?void 0:null===(k=j.userGamification)|| void 0===k?void 0:null===(l=k.userStreak)|| void 0===l?void 0:null===(m=l.monthlyData)|| void 0===m?void 0:m.data,d),endDate:e||(null===(n=a.data)|| void 0===n?void 0:null===(r=n.userGamification)|| void 0===r?void 0:null===(s=r.userStreak)|| void 0===s?void 0:null===(t=s.monthlyData)|| void 0===t?void 0:t.endDate),queriedMonths:new Set(q(Array.from(null!==(b=null===(u=a.data)|| void 0===u?void 0:null===(v=u.userGamification)|| void 0===v?void 0:null===(w=v.userStreak)|| void 0===w?void 0:null===(x=w.monthlyData)|| void 0===x?void 0:x.queriedMonths)&& void 0!==b?b:[])).concat([c,]))})})})}})})},E=function(){return new Date().setHours(1,0,0,0)>w.data.userGamification.lastFetchTime.setHours(1,0,0,0)};return(0,d.jsx)(t.Provider,{value:{value:w,clearState:function(){x(o({},s))},load:function(a,b){return A(a,!1,b)},incrementStreak:function(a){var b=a.userInfo,c=a.userGamificationFeatureFlag,d=a.callBack;return A(b,!0,c,d)},setStreakTour:C,updateStreakIncrementedFlag:B,updateMonthlyStreaks:D,isStreakInfoOutdated:E},children:m})}}}])
//# sourceMappingURL=86695.51fd203033fd0df3.js.map