"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[280],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,f=c["".concat(d,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9635:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),l=["components"],i={title:"Default Templates",sidebar_position:1},d=void 0,p={unversionedId:"advanced/templates/defaults",id:"advanced/templates/defaults",title:"Default Templates",description:"Templates define how the final Markdown document will look like. Starting on v0.1.0 you can specify a templates directory in the Tools > Mdnote preferences.",source:"@site/docs/advanced/templates/defaults.md",sourceDirName:"advanced/templates",slug:"/advanced/templates/defaults",permalink:"/zotero-mdnotes/docs/next/advanced/templates/defaults",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/docs/advanced/templates/defaults.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Default Templates",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Updates",permalink:"/zotero-mdnotes/docs/next/getting-started/update"},next:{title:"Multi-File Templates",permalink:"/zotero-mdnotes/docs/next/advanced/templates/multi-file"}},s={},m=[{value:"Export to markdown",id:"export-to-markdown",level:2},{value:"Zotero Metadata Template",id:"zotero-metadata-template",level:3},{value:"Zotero Note Template",id:"zotero-note-template",level:3},{value:"Creating files for your notes",id:"creating-files-for-your-notes",level:2},{value:"Mdnotes Default Template",id:"mdnotes-default-template",level:3},{value:"Standalone Note Template",id:"standalone-note-template",level:3}],c={toc:m};function u(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Templates define how the final Markdown document will look like. Starting on ",(0,r.kt)("a",{parentName:"p",href:"/changelog#v010---2020-11-15"},"v0.1.0")," you can specify a templates directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Mdnote preferences"),".\nOnce a directory is specified, ",(0,r.kt)("inlineCode",{parentName:"p"},"Mdnotes")," will look for the following files (they must be named ",(0,r.kt)("strong",{parentName:"p"},"exactly")," like this):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},".\n\u251c\u2500\u2500 Mdnotes Default Template.md\n\u251c\u2500\u2500 Standalone Note Template.md\n\u251c\u2500\u2500 Zotero Metadata Template.md\n\u2514\u2500\u2500 Zotero Note Template.md\n\n")),(0,r.kt)("p",null,"The files must be located at the root of the folder you chose. For now, hidden folders (those whose name starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"."),") are not supported.\nIf there is no path specified or the file doesn't exist, Mdnotes will use the default templates."),(0,r.kt)("p",null,"The default templates can give you an idea of existing ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/placeholders"},"placeholders and wildcards")),(0,r.kt)("h2",{id:"export-to-markdown"},"Export to markdown"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Export to markdown")," will export whatever you have selected. It uses the ",(0,r.kt)("a",{parentName:"p",href:"#zotero-metadata-template"},"zotero metadata template"),", if you have selected an item, and the ",(0,r.kt)("a",{parentName:"p",href:"#zotero-note-template"},"zotero note template")," if there are notes in your selected items."),(0,r.kt)("h3",{id:"zotero-metadata-template"},"Zotero Metadata Template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Which menu?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Export to markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What to select?"),": A Zotero item.")),(0,r.kt)("p",null,"You can add (or remove) any ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/placeholders#item-placeholders"},"item placeholder")," to your template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Zotero Metadata Template.md"',title:'"Zotero',Metadata:!0,'Template.md"':!0},"{{title}}\n\n## Metadata\n\n{{itemType}}\n{{author}}\n{{proceedingsTitle}}\n{{date}}\n{{dateAdded}}\n{{url}}\n{{DOI}}\n{{citekey}}\n{{collections}}\n{{related}}\n{{tags}}, #zotero, #literature-notes, #reference\n{{pdfAttachments}}\n\n{{abstractNote}}\n\n## Zotero links\n\n{{localLibrary}}\n{{cloudLibrary}}\n\n{{notes}}\n")),(0,r.kt)("h3",{id:"zotero-note-template"},"Zotero Note Template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Which menu?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Export to markdown")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What to select?"),": A Zotero note.")),(0,r.kt)("p",null,"You can add (or remove) any ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/placeholders#note-placeholders"},"note placeholders")," to your template."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Zotero Note Template.md"',title:'"Zotero',Note:!0,'Template.md"':!0},"{{tags}}\n{{related}}\n{{mdnotesFileName}}\n\n{{title}}\n\n{{noteContent}}\n")),(0,r.kt)("h2",{id:"creating-files-for-your-notes"},"Creating files for your notes"),(0,r.kt)("h3",{id:"mdnotes-default-template"},"Mdnotes Default Template"),(0,r.kt)("p",null,"This template supports any ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/placeholders#item-placeholders"},"item placeholder"),", which you can add (or remove) from your template.\nRead more about the specifics for ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/templates/single-file"},"single-file")," and ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/templates/multi-file"},"multi-file")," exports."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Mdnotes Default Template.md"',title:'"Mdnotes',Default:!0,'Template.md"':!0},"{{title}}\n\n![[%(metadataFileName)#Metadata]]\n\nOther files:\n{{mdnotesFileName}}\n{{metadataFileName}}\n\n## Zotero links\n\n{{localLibrary}}\n{{cloudLibrary}}\n\n## Notes\n\n-\n")),(0,r.kt)("h3",{id:"standalone-note-template"},"Standalone Note Template"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Which menu?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Create a standalone note"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"What to select?"),": A Zotero item.")),(0,r.kt)("p",null,"It is essentially a duplicate of the ",(0,r.kt)("a",{parentName:"p",href:"#mdnotes-default-template"},"mdnotes default template"),".\nIts purpose is to provide a secondary template that can be used to add notes with ",(0,r.kt)("em",{parentName:"p"},"some")," metadata and automatically adding links to Zotero."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Standalone notes must be activated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mdnotes Preferences"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="Standalone Default Template.md"',title:'"Standalone',Default:!0,'Template.md"':!0},"Related to: [[%(metadataFileName)]]\n\n## Notes\n\n-\n")))}u.isMDXComponent=!0}}]);