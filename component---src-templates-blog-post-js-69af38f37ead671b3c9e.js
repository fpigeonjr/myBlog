(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{198:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r.n(o),a=r(207),p=r(205),i=r(212),c=r(200),l=r(201),m=r(202),u=r.n(m),s=r(203);var A=c.b.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-18vyb93-0"})(["& .author-image{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;top:-40px;left:50%;margin-left:-40px;width:80px;height:80px;border-radius:100%;overflow:hidden;padding:6px;z-index:2;box-shadow:#e7eef2 0 0 0 1px;}& .author-image .img{position:relative;display:block;width:100%;height:100%;background-size:cover;background-position:center center;border-radius:100%;}& .author-profile .author-image{position:relative;left:auto;top:auto;width:120px;height:120px;padding:3px;margin:-100px auto 0 auto;box-shadow:none;}"]),d=Object(c.b)(s.c).withConfig({displayName:"Bio__BioText",componentId:"sc-18vyb93-1"})(["& a{border-bottom:1px dotted rgba(162,162,162,0.8);}& a:hover{border-bottom-style:solid;}"]),g=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=Object(l.b)(u.a.authorAvatar);return n.a.createElement(A,null,n.a.createElement("figure",{className:"author-image"},n.a.createElement("a",{src:u.a.authorAvatar,alt:u.a.authorName,style:{backgroundImage:'url("'+t+'")'},className:"img"})),n.a.createElement("section",null,n.a.createElement("h4",null,"About the author"),n.a.createElement(d,{dangerouslySetInnerHTML:{__html:u.a.authorDescription}})))},o}(n.a.Component),f=r(235);var b=c.b.article.withConfig({displayName:"Article__ArticleWrapper",componentId:"sc-1q8uwn-0"})(["padding:0 30px 30px;@media only screen and (max-width:500px){padding:0;}"]),h=c.b.footer.withConfig({displayName:"Article__ArticleFooter",componentId:"sc-1q8uwn-1"})(["position:relative;margin:6rem 0 0;padding:3rem 0 0;border-top:1px solid #ebf2f6;"]),y=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.post;return n.a.createElement(b,null,n.a.createElement(f.a,{content:t.html,date:t.frontmatter.date,tags:t.frontmatter.tags}),n.a.createElement(h,null,n.a.createElement(g,null)))},o}(n.a.Component),v=r(225);var x=function(t){var e,r;function a(){return t.apply(this,arguments)||this}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){var t=this.props,e=[t.previous,t.next].filter(function(t){return t}).map(function(t){return{node:t}});return n.a.createElement(o.Fragment,null,n.a.createElement(s.c,null,"Read next:"),n.a.createElement(v.a,{posts:e}))},a}(n.a.Component),E=r(206),w=r(233);r.d(e,"pageQuery",function(){return k});var Q=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.pageContext,r=e.previous,o=e.next;return n.a.createElement(a.a,{location:this.props.location},n.a.createElement(E.a,{title:t.frontmatter.title,description:t.excerpt,cover:t.frontmatter.cover&&t.frontmatter.cover.publicURL,imageFb:t.frontmatter.imageFb&&t.frontmatter.imageFb.publicURL,imageTw:t.frontmatter.imageTw&&t.frontmatter.imageTw.publicURL,lang:t.frontmatter.language,path:t.frontmatter.slug,isBlogPost:!0}),n.a.createElement(i.a,{heroImg:t.frontmatter.cover&&t.frontmatter.cover.publicURL,title:t.frontmatter.title}),n.a.createElement(p.a,null,n.a.createElement(y,{post:t})),n.a.createElement(p.a,null,n.a.createElement(w.a,{slug:t.frontmatter.slug,title:t.frontmatter.title}),n.a.createElement(x,{previous:r,next:o})))},o}(n.a.Component),k=(e.default=Q,"2721612966")},209:function(t,e,r){"use strict";var o=r(0),n=r.n(o),a=r(200),p=r(210),i=r.n(p),c=r(211),l=r.n(c);var m=a.b.img.withConfig({displayName:"Flag__FlagImage",componentId:"sc-1ipm1yg-0"})(["padding-right:0.5rem;padding-bottom:0.2rem;"]),u=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.language,e="en"===t?i.a:l.a,r="en"===t?"english post":"post en francais";return n.a.createElement(m,{src:e,alt:r,className:"flag"})},o}(n.a.Component);e.a=u},210:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAPASURBVDhPrZT7TxxVFMc/d/Y1wA60gEXwgSU1ViJiJSZqahpqm2jQNlRSHyhRa6wG2kTSpK3v2BptoyRorJi2IaLlF/qyoTU0sRAClDaKRqQ0qShElkJBdpd9z+7seGfQ+A9wkjvn3jnn3Pu93/PNFaY0lsiUf/2SmNATuqm4XYyPTRMOJ3C7nXbAMNLkF2STEw+RXAjjyvYSVDXmZhZwOBYx6HoKrWA5N4dmEZoXMflFi1m4YT2B4jtp2ncKny9IVpZKPK5TXfswlROXmb84RO5DFXQXP8CpYwOoqptoTOeWu4p4uUQn9/pfOJ7dgjJcupZIbz/qd8fZv7+aqk33EgpF5bkmQsivIqwZpviPWpNQIsnjm8p5S7tGocckZ8d2Bn6ZRLnUe5U9v+cSy9QI7H2Xmur7adxbJRHOEgrrSAikg0GIxQlHdK4vJNi5tZSNF9pQn6jC/WQV9fXfcrFvDCUm4fZ3DbPxkxEGVz2C75k6ykWAr1q3k6llkAyESM3NkwyG8OZnc2BdFsUnW1nW/CndvjQVFR/QNzBBTKJlzh8wdcM0o3raDOiWUEzTiEQWJ9Imd71njq5Zb3vbov/H/OGEXWfVW/uI0Z17TPObE5DhwVKcrTqLq/QiR44cDeGRsUQCQ6ITiiJzFhMVyafFq4SFeOEpFKtG98trzAdJ+YMYATmkTwcX7JGamSXpm7K9tTb8AdIyx47JPKvOqk/LzcVky1Ezs6cP0+0mlTSIRHWE1J1wyWEYhAd/InVjDueKfLwPVmDEJQrVIxEpqMLA5XJYgiNWuRZx4tzP5pU/YkQjCQqLNHY8Lwtm5zC+78JdV8vE1m3Mdxwnt6aG4o6j9tXDXd14VAfHnKu52j+CV+qytCQDh4uy95sPHGFqPETrkTpibe0kG17jHXMNpy/N8ljoCoHh31hx3z00/qhwvvMymxs246t/g1u7z/LZjTy+bjqMW3hQIpEYr7xey9i1j1l4cRuJM508V9ZIU8sZ8papiLSFRfIhuc3P1/i8uZ11lQe5/exJbpOkn5s4xJu7X0J3ulD2HXyaw4dqmVp5N9Ml5awaKaWz7bzcIFMOgWIRS8r2dpvJprfnV8nVq/y5YQvZPT/Q0L6btx/NQ8mYGmew4A4u7PqQso+GiYyNoWkSkXBgJPxMy3q/c7ntrbX1X5NiVpQUqwtr+bJjiKzRIcyZScTfwYDpTybxJBPkZMkOWofbJuQrEifqVFFk99Kyi5mpOF6vKmOLGrTABoOyefEkNxUVSipsBS6NLeHjCP8AHa/ubr0bcvgAAAAASUVORK5CYII="},211:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKnRFWHRDcmVhdGlvbiBUaW1lAEZyIDkgTm92IDIwMDcgMTY6Mjc6MDYgKzAxMDAM3ZqdAAAAB3RJTUUH1wsJDxwzm8yD2gAAAAlwSFlzAAALEgAACxIB0t1+/AAAAARnQU1BAACxjwv8YQUAAAHdSURBVHjaxVO7btRAFD3zsNdxQIqQqBYk6ghR0tLxDXwCn8HX0BGlo6JCKAqCIlVCkCjQLgkgxbDB67XnlXPHRvsJGWs04/F53ZkxcNtNvXj5arG7uzf3KfJNIUSFh/dn2H9Qc564pABj0Z98hPt6CsVHyzoCrv6tl/bO3Xvzx0+fw0cveugp8ORRjWf7e1lAmi5naKuAHh2QSI4RpQbeHBzOrSfIBQ/vAzWRE8jcDQNCQk4g3TtinMtkEUHfIaxW0OIqa55rMTEYu3xXWm/r1AYZ5AYolqoJ6D4dU1jDCjFkMrskoFukKG2ys56EFEkyC38abE4+w1z/heU3K0Q/OUchp0zNxCCuU+sX37F69xZYt9CmQDHKUYDwQMPIONpo9A5o2gH9ZoPBjwKm5h78/glcs+ayylQtpyOjQFLS2fnovMHrDz9wftEixTACJKY1HFUmZbIk5GM4WkWyI/bg+AJD0CjKAmVhMlFPpchmaWUm4v8+HrElAu/Pmnz+RWmReGmU2QoYmRsRQHYdE2CbYMOaF51HOWNt1iJSoODFqeSd9YlAUe2g4+gVpjI0ZmoUspe/Lpfdqpk7cWH0QN0zVeOwqxnSjJtYVWi/fEO/DlDWZ2chX4W0vO1/EbgBHTnbxGOMU+UAAAAASUVORK5CYII="},225:function(t,e,r){"use strict";var o=r(0),n=r.n(o),a=r(203),p=r(209),i=r(202),c=r.n(i);var l=function(t){var e,r;function o(){return t.apply(this,arguments)||this}return r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.prototype.render=function(){var t=this.props.posts;return n.a.createElement("ul",null,t.map(function(t){var e=t.node.frontmatter.title,r=t.node.frontmatter.slug,o=t.node.frontmatter.language||"en";return n.a.createElement("li",{key:r},n.a.createElement(a.b,{to:r},c.a.multilangPosts&&n.a.createElement(p.a,{language:o}),e))}))},o}(n.a.Component);e.a=l}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-69af38f37ead671b3c9e.js.map