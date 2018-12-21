(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return m});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),s=n(146),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var c=n(149),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=o.a.createContext({}),m=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},147:function(e,t){e.exports={siteTitle:"frankpigeon.com",siteDescription:"Frank Pigeon's Blog",authorName:"Frank Pigeon Jr.",twitterUsername:"fpigeonjr",authorAvatar:"/images/profile.jpg",multilangPosts:!1,authorDescription:"\n  Frank is a 👨‍💻web developer, 🇺🇸US Army veteran, 🎸bass player, father, husband, artisan, owner.\n  ",siteUrl:"https://frankpigeon.com",disqusSiteUrl:"https://frankpigeon.com",pathPrefix:"/",siteCover:"/images/bg-home.jpg",googleAnalyticsId:"UA-53325305-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"frankpigeon-com",headerLinks:[{label:"🏡",url:"/"},{label:"Blog",url:"/"},{label:"About",url:"/about"},{label:"Portfolio",url:"/portfolio"},{label:"Resume",url:"/resume"},{label:"Uses",url:"/uses"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/"},{label:"About",url:"/about"},{label:"Portfolio",url:"/portfolio"},{label:"Resume",url:"/resume"},{label:"Uses",url:"/uses"}],["Follow the author",{label:"Github",url:"https://github.com/fpigeonjr",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/fpigeonjr",iconClassName:"fa fa-twitter"},{label:"LinkedIn",url:"https://www.linkedin.com/in/fpigeonjr/",iconClassName:"fa fa-linkedin-in"}]]}},148:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return u});var r=n(165),o=n.n(r),i=n(144),a=n(145);function s(){var e=o()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return s=function(){return e},e}var l=Object(i.a)(s()),c=Object(i.b)(a.Link).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1aaxjtz-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),u=i.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1aaxjtz-1"})(["line-height:1.6;margin:1em 0 0 0;"])},149:function(e,t,n){var r;e.exports=(r=n(153))&&r.default||r},150:function(e,t,n){"use strict";var r=n(144).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"xmiwfw-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=r},151:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(166),l=n.n(s),c=n(145),u=n(147),p=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,r=void 0===n?"":n,o=e.lang,i=void 0===o?"en":o,s=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,u=p.a.siteUrl.substring(0,p.a.siteUrl.length-1),d=""+u+(this.props.imageFb||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),m=""+u+(this.props.imageTw||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),f=this.props.description||p.a.siteDescription;return a.a.createElement(l.a,{title:s},a.a.createElement("html",{lang:i}),a.a.createElement("meta",{name:"description",content:f}),a.a.createElement("meta",{property:"og:url",content:u+Object(c.withPrefix)(r)}),a.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),a.a.createElement("meta",{property:"og:title",content:s}),a.a.createElement("meta",{property:"og:description",content:f}),a.a.createElement("meta",{property:"og:image",content:d}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),a.a.createElement("meta",{name:"twitter:title",content:s}),a.a.createElement("meta",{name:"twitter:description",content:f}),a.a.createElement("meta",{name:"twitter:image",content:m}))},t}(a.a.Component);t.a=d},152:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(145),l=n(144),c=l.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1glvhxp-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:rgba(32,35,42,0.85);"]),u=l.b.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1glvhxp-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;"]),p=Object(l.b)(s.Link).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1glvhxp-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return a.a.createElement(c,null,a.a.createElement(u,null,e.map(function(e,t){return a.a.createElement(p,{to:e.url,key:"header-link-"+t},e.label)})))},t}(a.a.Component),m=(n(162),n(163),l.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"t92llg-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,r=e.websiteHost,o=function(e){var t=e.item;return"string"==typeof t?a.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?a.a.createElement("span",{className:"footer-item"},a.a.createElement(s.Link,{className:"footer-link",to:t.url},t.label)):a.a.createElement("span",{className:"footer-item"},a.a.createElement("a",{className:"footer-link",href:t.url},t.label))},i=function(e){var t=e.column;return a.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return a.a.createElement(o,{item:e,key:"footer-column-item-"+t})}))};return a.a.createElement(m,null,a.a.createElement("nav",null,a.a.createElement("div",{className:"footer-col"},a.a.createElement("h5",{className:"footer-title"},t," © 2018"),a.a.createElement("p",{className:"footer-item-text"},"Built with"," ",a.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),a.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",a.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),a.a.createElement("p",{className:"footer-item-text"},"Hosted with ",a.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",a.a.createElement("a",{className:"footer-link",href:r.url},r.name),".")),n.map(function(e,t){return a.a.createElement(i,{column:e,key:"footer-column-"+t})})))},t}(a.a.Component),h=n(147),g=n.n(h),b=(n(164),n(148)),y=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.children;return a.a.createElement(i.Fragment,null,a.a.createElement(b.a,null),a.a.createElement(d,{headerLinks:g.a.headerLinks}),a.a.createElement("div",{style:{margin:"60px 0"}},e),a.a.createElement(f,{siteConfig:g.a}))},t}(a.a.Component);t.a=y},153:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),s=n(50),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=c},157:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(145),l=n(147),c=n.n(l),u=n(144),p=u.b.div.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1wsaguq-0"})(["position:relative;display:table;width:100%;height:400px;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),d=u.b.div.withConfig({displayName:"Hero__TitleContainer",componentId:"sc-1wsaguq-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),m=u.b.h1.withConfig({displayName:"Hero__HeroTitle",componentId:"sc-1wsaguq-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.heroImg||Object(s.withPrefix)(c.a.siteCover),t=this.props.title;return a.a.createElement(p,{style:{backgroundImage:'url("'+e+'")'}},a.a.createElement(d,null,a.a.createElement(m,null,t)))},t}(a.a.Component);t.a=f},158:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(145),l=n(144),c=l.b.div.withConfig({displayName:"TagList__ListContainer",componentId:"tgjq80-0"})(["display:inline;margin:0 0.5rem 0 0;color:#7f7e7e;"]),u=Object(l.b)(s.Link).withConfig({displayName:"TagList__TagListItem",componentId:"tgjq80-1"})(["margin-left:0.3rem;color:#7f7e7e;&:hover{border-bottom:1px dotted #7f7e7e;}&:before{content:'#';}"]),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.tags,n=e.icon;return a.a.createElement(c,null,!0===n&&a.a.createElement(i.Fragment,null,"🏷 "),t.map(function(e,n){return a.a.createElement(i.Fragment,{key:"tag-list-"+n},a.a.createElement(u,{to:"tags/"+e},e),n<t.length-1?", ":"")}))},t}(a.a.Component);t.a=p},178:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(240),l=n.n(s),c=n(147),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=u.a.disqusShortname;if(!e)return null;var t={url:""+u.a.disqusSiteUrl+this.props.slug,title:this.props.title};return a.a.createElement(l.a.DiscussionEmbed,{shortname:e,config:t})},t}(a.a.Component);t.a=p},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),a&&e.apply(o,i)}}},180:function(e,t,n){"use strict";var r=n(7),o=n.n(r),i=n(0),a=n.n(i),s=n(144),l=n(158),c=s.b.header.withConfig({displayName:"ContentHeader__Header",componentId:"sc-1qtxhip-0"})(["margin-bottom:2rem;color:#7f7e7e;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.tags;return a.a.createElement(c,null,t&&a.a.createElement("time",null,t),Array.isArray(n)&&n.length>0&&a.a.createElement(i.Fragment,null,a.a.createElement("span",null," in"),a.a.createElement(l.a,{tags:n})))},t}(a.a.Component),p=s.b.div.withConfig({displayName:"Content__ContentBody",componentId:"p0bolz-0"})(["line-height:1.6;& > h2{padding-top:3rem;margin-top:3rem;border-top:1px solid #ececec;}& > h3{padding-top:3rem;}& > p{margin:1em 0 0 0;}& a{border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}&.anchor,&.gatsby-resp-image-link{border:none;}}& > blockquote{box-sizing:border-box;margin:1.75em 0 1.75em -2.2em;padding:0 0 0 1.75em;border-left:0.4em solid rgba(32,35,42,0.85);}& > blockquote p{margin:0.8em 0;font-style:italic;}& .gatsby-highlight{border-radius:5px;font-size:15px;line-height:1.7;background:#2d2d2d;color:#ffffff;border-radius:10px;overflow:auto;tab-size:1.5em;margin:1.5em 0em 1.5em 0;}& .gatsby-highlight > pre{border:0;margin:0;padding:1;}& .gatsby-highlight-code-line{background-color:#022a4b;display:block;margin-right:-1em;margin-left:-1em;padding-right:1em;padding-left:.75em;border-left:.25em solid #ffa7c4;}& p > code.language-text,& li > code.language-text{background:rgba(255,229,100,0.2);color:#222222cc;padding:0 3px;font-size:0.94em;border-radius:0.3rem;}"]),d=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.content,n=e.date,r=e.tags;return a.a.createElement("section",null,(r||n)&&a.a.createElement(u,{date:n,tags:r}),a.a.createElement(p,{dangerouslySetInnerHTML:{__html:t}}))},t}(a.a.Component);t.a=d},240:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(241),o=n(242),i=n(243);t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(179);var l=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},242:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},243:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=(r=i)&&r.__esModule?r:{default:r},s=n(179);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}()}}]);
//# sourceMappingURL=2-b724c38ff1aa96793612.js.map