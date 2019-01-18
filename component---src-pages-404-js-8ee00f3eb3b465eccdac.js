(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(148),s=n(156),c=n(154),m=n(155),p=n(175),u=n(152),d=l.b.h1.withConfig({displayName:"sc-404__MainTitle",componentId:"qxunot-0"})(["line-height:1.5;text-align:center;font-size:3rem;"]),f=l.b.p.withConfig({displayName:"sc-404__Ghost",componentId:"qxunot-1"})(["line-height:1.5;text-align:center;font-size:7rem;"]),g=l.b.h2.withConfig({displayName:"sc-404__SubTitle",componentId:"qxunot-2"})(["padding-top:40px;line-height:1.2;border-top:1px solid #ececec;margin-top:44px;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,noCover:!0},i.a.createElement(m.a,{title:"Page Not Found"}),i.a.createElement(c.a,null,i.a.createElement(d,null,"404 Page Not Found"),i.a.createElement(f,null,"👻"),i.a.createElement(u.c,null,"Looks like you've followed a broken link or entered a URL that doesn't exist on this site."),i.a.createElement(g,null,"Recent Posts"),i.a.createElement(p.a,{posts:e})))},t}(i.a.Component);t.default=h;var b="3287209691"},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(150),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(153),m=n.n(c);n.d(t,"PageRenderer",function(){return m.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var u=r.a.createContext({}),d=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t){e.exports={siteTitle:"frankpigeon.com",siteDescription:"Frank Pigeon's Blog",authorName:"Frank Pigeon Jr.",twitterUsername:"fpigeonjr",authorAvatar:"/images/profile.jpg",multilangPosts:!1,authorDescription:"\n  Frank is a 👨‍💻web developer, 🇺🇸US Army veteran, 🎸bass player, father, husband, artisan, owner.\n  ",siteUrl:"https://frankpigeon.com",disqusSiteUrl:"https://frankpigeon.com",pathPrefix:"/",siteCover:"/images/bg-home.jpg",googleAnalyticsId:"UA-53325305-1",background_color:"#ffffff",theme_color:"#222222",display:"minimal-ui",icon:"src/assets/gatsby-icon.png",postsPerPage:6,disqusShortname:"frankpigeon-com",headerLinks:[{label:"🏡",url:"/"},{label:"Blog",url:"/"},{label:"About",url:"/about"},{label:"Portfolio",url:"/portfolio"},{label:"Resume",url:"/resume"},{label:"Uses",url:"/uses"}],websiteHost:{name:"GitHub",url:"https://github.com"},footerLinks:[["Explore",{label:"Blog",url:"/"},{label:"About",url:"/about"},{label:"Portfolio",url:"/portfolio"},{label:"Resume",url:"/resume"},{label:"Uses",url:"/uses"}],["Follow the author",{label:"Github",url:"https://github.com/fpigeonjr",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/fpigeonjr",iconClassName:"fa fa-twitter"},{label:"LinkedIn",url:"https://www.linkedin.com/in/fpigeonjr/",iconClassName:"fa fa-linkedin-in"}]]}},152:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return m});var a=n(169),r=n.n(a),o=n(148),i=n(149);function l(){var e=r()(['\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n  color: #222222cc;\n  background-color: #e8e8e8;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle;\n  border: 0;\n}\n\na {\n  text-decoration: none;\n  color: rgba(34,34,34,0.8);\n}\n\nul,\nol {\n  padding-left: 2em;\n  margin: 1em 0 0 0;\n}\n']);return l=function(){return e},e}var s=Object(o.a)(l()),c=Object(o.b)(i.Link).withConfig({displayName:"Commons__StyledLink",componentId:"sc-1jruaf7-0"})(["border-bottom:1px dotted rgba(162,162,162,0.8);&:hover{border-bottom-style:solid;}"]),m=o.b.p.withConfig({displayName:"Commons__Text",componentId:"sc-1jruaf7-1"})(["line-height:1.6;margin:1em 0 0 0;"])},153:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t,n){"use strict";var a=n(148).b.main.attrs({role:"main"}).withConfig({displayName:"Wrapper",componentId:"sc-1iqcfdu-0"})(["position:relative;border-radius:3px;width:80%;max-width:770px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:30px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);@media (max-width:780px){width:90%;padding:25px;}"]);t.a=a},155:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(170),s=n.n(l),c=n(149),m=n(151),p=n.n(m),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.isBlogPost,n=e.path,a=void 0===n?"":n,r=e.lang,o=void 0===r?"en":r,l=this.props.title?this.props.title+" | "+p.a.siteTitle:p.a.siteTitle,m=p.a.siteUrl.substring(0,p.a.siteUrl.length),u=""+m+(this.props.imageFb||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),d=""+m+(this.props.imageTw||this.props.cover||Object(c.withPrefix)(p.a.siteCover)),f=this.props.description||p.a.siteDescription;return i.a.createElement(s.a,{title:l},i.a.createElement("html",{lang:o}),i.a.createElement("meta",{name:"description",content:f}),i.a.createElement("meta",{property:"og:url",content:m+Object(c.withPrefix)(a)}),i.a.createElement("meta",{property:"og:type",content:t?"article":"website"}),i.a.createElement("meta",{property:"og:title",content:l}),i.a.createElement("meta",{property:"og:description",content:f}),i.a.createElement("meta",{property:"og:image",content:u}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.twitterUsername}),i.a.createElement("meta",{name:"twitter:title",content:l}),i.a.createElement("meta",{name:"twitter:description",content:f}),i.a.createElement("meta",{name:"twitter:image",content:d}))},t}(i.a.Component);t.a=u},156:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(149),s=n(148),c=s.b.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-1lvfdye-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:rgba(32,35,42,0.85);"]),m=s.b.nav.withConfig({displayName:"Header__HeaderNav",componentId:"sc-1lvfdye-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:1260px;z-index:1000;justify-content:flex-start;overflow-x:auto;overflow-y:hidden;"]),p=Object(s.b)(l.Link).withConfig({displayName:"Header__HeaderLink",componentId:"sc-1lvfdye-2"})(["position:relative;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerLinks;return i.a.createElement(c,null,i.a.createElement(m,null,e.map(function(e,t){return i.a.createElement(p,{to:e.url,key:"header-link-"+t},e.label)})))},t}(i.a.Component),d=(n(166),n(167),s.b.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1yz8fn-0"})(["text-align:left;padding-top:30px;padding-bottom:50px;background-color:rgba(32,35,42,0.85);color:#ffffff;padding-left:20px;padding-right:20px;margin:0 auto;& nav{display:flex;flex-flow:row wrap;align-items:flex-start;max-width:900px;margin:0 auto;.footer-col{flex:1 auto;display:inline-flex;flex-direction:column;margin-bottom:1em;padding-right:1em;}}& a{color:#ffffff;font-weight:bold;&:hover{color:#e8e8e8;border-bottom:1px dotted #e8e8e8;}}.footer-col > p{margin:0;}.footer-title{margin:0 0 1rem;}.footer-item{padding:0.25rem 0;color:#ffffff;}.footer-heart{color:red;}.footer-item-text{padding:0.1rem 0;color:#ffffff;}.footer-header{order:1;margin:0 0.25rem;margin-right:0.25rem;padding:0.25rem;}@media (max-width:564px){.footer-col:first-child{width:100%;}}"])),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.siteConfig,t=e.authorName,n=e.footerLinks,a=e.websiteHost,r=function(e){var t=e.item;return"string"==typeof t?i.a.createElement("h5",{className:"footer-title",key:t},t):t.url.startsWith("/")?i.a.createElement("span",{className:"footer-item"},i.a.createElement(l.Link,{className:"footer-link",to:t.url},t.label)):i.a.createElement("span",{className:"footer-item"},i.a.createElement("a",{className:"footer-link",href:t.url},t.label))},o=function(e){var t=e.column;return i.a.createElement("div",{className:"footer-col"},t.map(function(e,t){return i.a.createElement(r,{item:e,key:"footer-column-item-"+t})}))};return i.a.createElement(d,null,i.a.createElement("nav",null,i.a.createElement("div",{className:"footer-col"},i.a.createElement("h5",{className:"footer-title"},t," © 2018"),i.a.createElement("p",{className:"footer-item-text"},"Built with"," ",i.a.createElement("a",{className:"footer-link",href:"https://www.gatsbyjs.org"},"Gatsby"),"."),i.a.createElement("p",{className:"footer-item-text"},"Theme using"," ",i.a.createElement("a",{className:"footer-link",href:"https://github.com/maxpou/gatsby-starter-morning-dew"},"gatsby-starter-morning-dew"),"."),i.a.createElement("p",{className:"footer-item-text"},"Hosted with ",i.a.createElement("span",{className:"footer-heart"},"❤")," by"," ",i.a.createElement("a",{className:"footer-link",href:a.url},a.name),".")),n.map(function(e,t){return i.a.createElement(o,{column:e,key:"footer-column-"+t})})))},t}(i.a.Component),g=n(151),h=n.n(g),b=(n(168),n(152)),A=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement(o.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(u,{headerLinks:h.a.headerLinks}),i.a.createElement("div",{style:{margin:"60px 0"}},e),i.a.createElement(f,{siteConfig:h.a}))},t}(i.a.Component);t.a=A},157:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(51),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(148),s=n(159),c=n.n(s),m=n(160),p=n.n(m),u=l.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1ipm1yg-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.language,t="en"===e?c.a:p.a,n="en"===e?"english post":"post en francais";return i.a.createElement(u,{src:t,alt:n,className:"flag"})},t}(i.a.Component);t.a=d},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},160:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},175:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(152),s=n(158),c=n(151),m=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.posts;return i.a.createElement("ul",null,e.map(function(e){var t=e.node.frontmatter.title,n=e.node.frontmatter.slug,a=e.node.frontmatter.language||"en";return i.a.createElement("li",{key:n},i.a.createElement(l.b,{to:n},m.a.multilangPosts&&i.a.createElement(s.a,{language:a}),t))}))},t}(i.a.Component);t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-8ee00f3eb3b465eccdac.js.map