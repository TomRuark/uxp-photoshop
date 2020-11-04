(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{sceJ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return i}));var o=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("LHWr"),p=(a("qKvR"),{}),l={_frontmatter:p},s=c.a;function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.mdx)(s,Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"api-extensions"},"API Extensions"),Object(r.mdx)("p",null,"We build the DOM APIs with a lot of intent and carefully to work around many expectations Photoshop has when a command is being ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"./batchplay/"}),"batchPlayed"),". "),Object(r.mdx)("p",null,"There is a lot of functionality in Photoshop, and while we strive to bring all of them into DOM, some may not be ready as you're writing your plug-ins. Or you might have a different way of scripting into Photoshop and want to add more properties and methods to DOM classes."),Object(r.mdx)("p",null,"This is where prototypes come in. In JavaScript, ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes",target:"_blank",rel:"nofollow noopener noreferrer"}),"prototypes")," define what methods and properties are inherited by an object. Properties can be attached to a prototype to ensure that every instance of that object will have those properties. "),Object(r.mdx)("p",null,"You can overload the Document prototype at the beginning of your plugin, either via code you run first, or via a library you wrote that gets loaded before your code."),Object(r.mdx)("p",null,"For example, suppose you want to add a new method to ",Object(r.mdx)("a",Object(o.a)({parentName:"p"},{href:"../../classes/document"}),"Document")," where you rename all layers by prepending '_' to them. "),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"require('photoshop').app.Document.prototype.prependLodash = function () {\n  // `this` will be the instance of Document you're calling the method on\n  this.layers.forEach(l => {\n    l.name = '_' + l.name\n  })\n}\n")),Object(r.mdx)("p",null,"And later on, when you want to call this on any document, you can call it on the instance of that document:"),Object(r.mdx)("pre",null,Object(r.mdx)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"require('photoshop').app.activeDocument.prependLodash() // All layers in the document will be renamed\n")),Object(r.mdx)("p",null,"Right now, you have these prototypes available:"),Object(r.mdx)("ul",null,Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(o.a)({parentName:"li"},{href:"../../classes/photoshop"}),"app.Photoshop")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(o.a)({parentName:"li"},{href:"../../classes/document"}),"app.Document")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(o.a)({parentName:"li"},{href:"../../classes/layer"}),"app.Layer")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(o.a)({parentName:"li"},{href:"../../classes/actionset"}),"app.ActionSet")),Object(r.mdx)("li",{parentName:"ul"},Object(r.mdx)("a",Object(o.a)({parentName:"li"},{href:"../../classes/action"}),"app.Action"))))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ps-reference-media-advanced-prototype-md-0b4aa264509651f30e91.js.map