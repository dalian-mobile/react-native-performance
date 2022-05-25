"use strict";(self.webpackChunkreact_native_performance=self.webpackChunkreact_native_performance||[]).push([[347],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),v=r,N=m["".concat(s,".").concat(v)]||m[v]||d[v]||o;return a?n.createElement(N,i(i({ref:t},c),{},{components:a})):n.createElement(N,i({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},674:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"profiling-navigation",title:"Simplified Navigation Profiling",slug:"/guides/react-native-performance-navigation/profiling-navigation"},s=void 0,p={unversionedId:"guides/react-native-performance-navigation/profiling-navigation",id:"guides/react-native-performance-navigation/profiling-navigation",title:"Simplified Navigation Profiling",description:"useProfiledNavigation",source:"@site/docs/guides/react-native-performance-navigation/profiling-navigation.md",sourceDirName:"guides/react-native-performance-navigation",slug:"/guides/react-native-performance-navigation/profiling-navigation",permalink:"/docs/guides/react-native-performance-navigation/profiling-navigation",editUrl:"https://github.com/shopify/react-native-performance/edit/main/docs/docs/guides/react-native-performance-navigation/profiling-navigation.md",tags:[],version:"current",frontMatter:{id:"profiling-navigation",title:"Simplified Navigation Profiling",slug:"/guides/react-native-performance-navigation/profiling-navigation"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/guides/react-native-performance-navigation/getting-started"},next:{title:"Best practices",permalink:"/docs/guides/react-native-performance-navigation/best-practices"}},c={},d=[{value:"useProfiledNavigation",id:"useprofilednavigation",level:2}],m={toc:d};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"useprofilednavigation"},"useProfiledNavigation"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"../../fundamentals/measuring-render-times"},"react-native-performance docs"),", you can start profiling the render times corresponding to a navigation flow via the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"useStartProfiler")," hook. However, this often means that you need to make two calls to start the navigation process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Notify the library of the flow start via the ",(0,o.kt)("inlineCode",{parentName:"li"},"useStartProfiler")," hook"),(0,o.kt)("li",{parentName:"ol"},"Notify the navigation library of your choice that you're requesting a navigation to a given destination screen")),(0,o.kt)("p",null,"If you use ",(0,o.kt)("a",{parentName:"p",href:"https://reactnavigation.org/"},"react-navigation"),", we provide a simple wrapper API that can combine these two calls into a single call. Using this wrapper ",(0,o.kt)("inlineCode",{parentName:"p"},"useProfiledNavigation")," hook over the raw ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigation")," hook might help you ensure that all the navigation flows in your app have profiler coverage:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"ScreenA"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ({navigation}) "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"profiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"useProfiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"();")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    <>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      {"),(0,o.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* some JSX */"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      <"),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"TouchableWithoutFeedback")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"onPress"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"{uiEvent "),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"profiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},".navigate"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"({source"),(0,o.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'ScreenA'"),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," uiEvent}"),(0,o.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#22863A"}},"'ScreenB'"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"        }}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"      />")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"    </>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  );")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"ScreenA"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"({"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"navigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"})"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"profiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"useProfiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"()"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"return"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," (")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#616E88"}},"/* some JSX */"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"<"),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"TouchableWithoutFeedback")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"onPress"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"={"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"uiEvent"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"=>"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"          "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"profiledNavigation"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"."),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"navigate"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"("),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"source"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ScreenA"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},","),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"uiEvent"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"},"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ScreenB"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"'"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},")"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"        "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"/>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"</>")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  )"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,o.kt)("p",null,"In the above example, the first argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"profiledNavigation.navigate")," is funneled to the ",(0,o.kt)("inlineCode",{parentName:"p"},"startProfiler")," function (returned by the ",(0,o.kt)("inlineCode",{parentName:"p"},"useStartProfiler")," hook), while the rest of the varargs are sent to the internal ",(0,o.kt)("inlineCode",{parentName:"p"},"navigation.navigate")," call."))}v.isMDXComponent=!0}}]);