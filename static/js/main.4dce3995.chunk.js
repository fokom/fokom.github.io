(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,s,t){},14:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(7),n=t.n(i),r=(t(12),t(2)),l=t(3),o=t(5),j=t(4),d=t(0),h=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.name,t=e.role,c=e.roleDescription,i=e.address.city,n=e.social.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})},e.name)}));return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("header",{id:"home",children:[Object(d.jsxs)("nav",{id:"nav-wrap",children:[Object(d.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(d.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(d.jsxs)("ul",{id:"nav",className:"nav",children:[Object(d.jsx)("li",{className:"current",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(d.jsx)("div",{className:"row banner",children:Object(d.jsxs)("div",{className:"banner-text",children:[Object(d.jsxs)("h1",{className:"responsive-headline",children:["I'm ",s,"."]}),Object(d.jsxs)("h3",{children:["I'm a ",i," based ",Object(d.jsx)("span",{children:t}),". ",c,"."]}),Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{className:"social",children:n})]})}),Object(d.jsx)("p",{className:"scrolldown",children:Object(d.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(d.jsx)("i",{className:"icon-down-circle"})})})]})})}}]),t}(c.Component),m=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.bio,t=e.address;return Object(d.jsxs)(a.a.Fragment,{children:[Object(d.jsxs)("section",{id:"about",className:"s-about target-section",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"column large-3 tab-12",children:Object(d.jsx)("img",{className:"s-about__pic",src:"images/avatars/photo.jpeg",alt:""})}),Object(d.jsxs)("div",{className:"column large-9 tab-12 s-about__content",children:[Object(d.jsx)("h3",{children:"About Me"}),Object(d.jsx)("p",{children:s}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row s-about__content-bottom",children:[Object(d.jsxs)("div",{className:"column w-1000-stack",children:[Object(d.jsx)("h3",{children:"Contact Details"}),Object(d.jsxs)("p",{children:[e.name," ",Object(d.jsx)("br",{}),t.street+" "+t.city," ",Object(d.jsx)("br",{}),t.state," ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"tel:"+e.phone,children:e.phone})," ",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"mailto:"+e.email,children:e.email})]})]}),Object(d.jsx)("div",{className:"columns download",children:Object(d.jsx)("p",{children:Object(d.jsxs)("a",{href:e.resumeDownload,className:"button",children:[Object(d.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})," "]})," "]})}}]),t}(c.Component),b=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.skillmessage,t=e.education.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.school}),Object(d.jsxs)("p",{className:"info",children:[e.degree," ",Object(d.jsx)("span",{children:"\u2022"}),Object(d.jsx)("em",{className:"date",children:e.graduated})]}),Object(d.jsx)("p",{children:e.description})]},e.school)})),c=e.work.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.company}),Object(d.jsxs)("p",{className:"info",children:[e.title,Object(d.jsx)("span",{children:"\u2022"})," ",Object(d.jsx)("em",{className:"date",children:e.years})]}),Object(d.jsx)("p",{children:e.description})]},e.company)})),i=e.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{style:{width:e.level},className:s}),Object(d.jsx)("em",{children:e.name})]},e.name)}));return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("section",{id:"resume",children:[Object(d.jsxs)("div",{className:"row education",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Education"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:Object(d.jsx)("div",{className:"row item",children:Object(d.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(d.jsxs)("div",{className:"row work",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Work"})})}),Object(d.jsx)("div",{className:"nine columns main-col",children:c})]}),Object(d.jsxs)("div",{className:"row skill",children:[Object(d.jsx)("div",{className:"three columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Skills"})})}),Object(d.jsxs)("div",{className:"nine columns main-col",children:[Object(d.jsx)("p",{children:s}),Object(d.jsx)("div",{className:"bars",children:Object(d.jsx)("ul",{className:"skills",children:i})})]})]})]})})}}]),t}(c.Component),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(d.jsx)("div",{className:"columns portfolio-item",children:Object(d.jsx)("div",{className:"item-wrap",children:Object(d.jsxs)("a",{href:e.url,title:e.title,children:[Object(d.jsx)("img",{alt:e.title,src:s}),Object(d.jsx)("div",{className:"overlay",children:Object(d.jsxs)("div",{className:"portfolio-item-meta",children:[Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.category})]})}),Object(d.jsx)("div",{className:"link-icon",children:Object(d.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}));return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsx)("section",{id:"portfolio",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"twelve columns collapsed",children:[Object(d.jsx)("h1",{children:"Check Out Some of My Works."}),Object(d.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:s})]})})})})}}]),t}(c.Component),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.testimonials.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsxs)("blockquote",{children:[Object(d.jsx)("p",{children:e.text}),Object(d.jsx)("cite",{children:e.user})]})},e.user)}));return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsx)("section",{id:"testimonials",children:Object(d.jsx)("div",{className:"text-container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Client Testimonials"})})}),Object(d.jsx)("div",{className:"ten columns flex-container",children:Object(d.jsx)("ul",{className:"slides",children:s})})]})})})})}}]),t}(c.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.name,t=e.address.street,c=e.address.city,i=e.address.state,n=e.address.zip,r=e.phone,l=(e.email,e.contactmessage);return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("section",{id:"contact",children:[Object(d.jsxs)("div",{className:"row section-head",children:[Object(d.jsx)("div",{className:"two columns header-col",children:Object(d.jsx)("h1",{children:Object(d.jsx)("span",{children:"Get In Touch."})})}),Object(d.jsx)("div",{className:"ten columns",children:Object(d.jsx)("p",{className:"lead",children:l})})]}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"eight columns",children:[Object(d.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(d.jsxs)("fieldset",{children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(d.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(d.jsx)("span",{className:"required",children:"*"})]}),Object(d.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"submit",children:"Submit"}),Object(d.jsx)("span",{id:"image-loader",children:Object(d.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(d.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(d.jsxs)("div",{id:"message-success",children:[Object(d.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(d.jsx)("br",{})]})]}),Object(d.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(d.jsxs)("div",{className:"widget widget_contact",children:[Object(d.jsx)("h4",{children:"Address and Phone"}),Object(d.jsxs)("p",{className:"address",children:[s,Object(d.jsx)("br",{}),t," ",Object(d.jsx)("br",{}),c,", ",i," ",n,Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:r})]})]}),Object(d.jsxs)("div",{className:"widget widget_tweets",children:[Object(d.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(d.jsxs)("ul",{id:"twitter",children:[Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{children:["This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(d.jsx)("a",{href:"#"})]}),Object(d.jsx)("b",{children:Object(d.jsx)("a",{href:"#",children:"2 Days Ago"})})]}),Object(d.jsxs)("li",{children:[Object(d.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(d.jsx)("a",{href:"#",children:"http://t.co/CGIrdxIlI3"})]}),Object(d.jsx)("b",{children:Object(d.jsx)("a",{href:"#",children:"3 Days Ago"})})]})]})]})]})]})]})})}}]),t}(c.Component),p=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;if(e)var s=e.social.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:e.url,children:Object(d.jsx)("i",{className:e.className})})},e.name)}));return Object(d.jsx)(a.a.Fragment,{children:Object(d.jsxs)("footer",{className:"s-footer",children:[Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"column large-4 medium-6 w-1000-stack s-footer__social-block",children:Object(d.jsx)("ul",{className:"s-footer__social",children:s})}),Object(d.jsxs)("div",{className:"column large-7 medium-6 w-1000-stack ss-copyright",children:[Object(d.jsx)("span",{children:"\xa9 Copyright Foko Valdes 2021"}),Object(d.jsxs)("span",{children:["Design by ",Object(d.jsx)("a",{href:"https://www.styleshout.com/",children:"StyleShout"})]})]})]}),Object(d.jsx)("div",{className:"ss-go-top",children:Object(d.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#top",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(d.jsx)("path",{d:"M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"})})})})," "]})})}}]),t}(c.Component),v={imagebaseurl:"fokom.github.io",name:"Foko Valdes",role:"Frontend Developer",roleDescription:"Proactive, customer-oriented Software Engineer professional with over 4 years of demonstrated experience in globally scaled businesses. Fast learner and always up for improvement so as to meet business needs.",image:"photo.jpeg",bio:"I am Experienced Information Technology Team Lead and FrondEnd Engineer with a demonstrated history of working in the luxury goods and jewelry industry. Skilled in Search Engine Optimization (SEO), Javascipt , React, Python (Programming Language), PHP, WordPress, and Google Cloud Platform. Strong information technology professional with a Bachelor of Engineering - BE focused in Computer Software Engineering from University of Buea.",contactmessage:"Here is where you should write your message to readers to have them get in contact with you.",email:"fokovaldes1@gmail.com",phone:"+237675467571",address:{street:"Boko",city:"Douala",state:"Cameroon",zip:"157"},website:"fokom.github.io",resumedownload:"https://www.linkedin.com/in/foko-valdes/",social:[{name:"facebook",url:"",className:"fa fa-facebook"},{name:"twitter",url:"https://twitter.com/FokoValdes",className:"fa fa-twitter"},{name:"linkedin",url:"https://www.linkedin.com/in/foko-valdes/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/fokom",className:"fa fa-github"}],resume:{skillmessage:"Here you can create a short write-up of your skills to show off to employers",education:[{school:"Faculty of Engineering and Technology, Buea Cameroon",degree:"BE in Computer software engineering",graduated:"December 2016",description:"Algorithms, Data Structures. Software Engineering"}],work:[{company:"Lonite AG",title:"FrontEnd Engineer",years:"March 2018 - Present",description:""},{company:"Lonite AG",title:"IT Admin",years:"July 2017 - July 2021",description:""}],skills:[{name:"ReactJs",level:"50%"},{name:"Git",level:"50%"},{name:"Javascript",level:"60%"},{name:"CSS",level:"65%"},{name:"HTML5",level:"60%"},{name:"VueJs",level:"50%"},{name:"SEO",level:"65%"}]},portfolio:{projects:[{title:"",category:"",image:"",url:""}]},testimonials:{testimonials:[{text:"",user:""}]}},f=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(r.a)(this,t),s.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{resumeData:v}),Object(d.jsx)(m,{resumeData:v}),Object(d.jsx)(b,{resumeData:v.resume}),Object(d.jsx)(u,{resumeData:v.portfolio}),Object(d.jsx)(O,{resumeData:v.testimonials}),Object(d.jsx)(x,{resumeData:v}),Object(d.jsx)(p,{resumeData:v})]})}}]),t}(c.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.4dce3995.chunk.js.map