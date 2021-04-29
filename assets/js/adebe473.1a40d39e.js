(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,u=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(u,l(l({ref:t},d),{},{components:n})):r.a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(107)),i={title:"Placeholders and wildcards",sidebar_position:2},l={unversionedId:"advanced/placeholders",id:"version-0.1.3/advanced/placeholders",isDocsHomePage:!1,title:"Placeholders and wildcards",description:"Placeholders",source:"@site/versioned_docs/version-0.1.3/advanced/placeholders.md",sourceDirName:"advanced",slug:"/advanced/placeholders",permalink:"/zotero-mdnotes/docs/advanced/placeholders",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.1.3/advanced/placeholders.md",version:"0.1.3",sidebarPosition:2,frontMatter:{title:"Placeholders and wildcards",sidebar_position:2},sidebar:"version-0.1.3/tutorialSidebar",previous:{title:"Single-File Templates",permalink:"/zotero-mdnotes/docs/advanced/templates/single-file"},next:{title:"Custom Formatting",permalink:"/zotero-mdnotes/docs/advanced/formatting"}},c=[{value:"Placeholders",id:"placeholders",children:[{value:"Item placeholders",id:"item-placeholders",children:[]},{value:"Note placeholders",id:"note-placeholders",children:[]}]},{value:"Wildcards",id:"wildcards",children:[]}],d={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"placeholders"},"Placeholders"),Object(o.b)("h3",{id:"item-placeholders"},"Item placeholders"),Object(o.b)("p",null,"You can add a ",Object(o.b)("inlineCode",{parentName:"p"},"{{placeholder}}")," for any ",Object(o.b)("a",{parentName:"p",href:"https://www.zotero.org/support/kb/item_types_and_fields"},"item field")," in your templates. Fields are formatted in camel case, so make sure you find the right ",Object(o.b)("a",{parentName:"p",href:"https://api.zotero.org/itemFields?pprint=1"},"field")," in Zotero's API."),Object(o.b)("p",null,"During export, any placeholder that is not a match for the selected item or that is blank will not be included in the markdown file."),Object(o.b)("p",null,"In addition to Zotero's supported fields, Mdnotes adds a few placeholders for an item:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{itemType}}")," - The Zotero item type."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{citekey}}")," - The citekey (requires the Better Bibtex plugin)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{collections}}")," - A list of collections an item belongs to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{related}}")," - A list of ",Object(o.b)("a",{parentName:"li",href:"https://www.zotero.org/support/related"},"related items"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{tags}}")," - The list of tags for the selected item."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{pdfAttachments}}")," = A list of links to any PDF attachments."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{localLibrary}}")," = The ",Object(o.b)("inlineCode",{parentName:"li"},"zotero://")," link to an item."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{cloudLibrary}}")," = If you use ",Object(o.b)("a",{parentName:"li",href:"https://www.zotero.org/support/sync"},"Zotero sync"),", the link to that item in your cloud library."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{dateAdded}}")," - The date the item was added to your library."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{notes}}")," - A list of all the titles of all the child notes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{mdnotesFileName}}")," - The name of the default mdnotes file (following the naming convention)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{metadataFileName}}")," - The name of the Zotero metadata file (following the naming convention).")),Object(o.b)("p",null,"Note: The setting ",Object(o.b)("inlineCode",{parentName:"p"},"extensions.mdnotes.templates.include_empty_placeholders")," is ",Object(o.b)("em",{parentName:"p"},"NOT")," being used right now and won't have an effect."),Object(o.b)("h3",{id:"note-placeholders"},"Note placeholders"),Object(o.b)("p",null,"Mdnotes supports the following placeholders for Zotero notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{mdnotesFileName}}")," - The filename for the ",Object(o.b)("a",{parentName:"li",href:"/zotero-mdnotes/docs/getting-started/configuration#file-naming-convention"},"mdnotes file")," according to the file naming convention."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{metadataFileName}}")," - The filename for a ",Object(o.b)("a",{parentName:"li",href:"/zotero-mdnotes/docs/getting-started/configuration#file-naming-convention"},"Zotero Item export")," according to the file naming convention."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{title}}")," - The note's title (usually the first line)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{noteContent}}")," - The contents of the note, translated to markdown as defined in the ",Object(o.b)("a",{parentName:"li",href:"/zotero-mdnotes/docs/advanced/formatting#zotero-note-formatting"},"preferences")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{related}}")," - A list of ",Object(o.b)("a",{parentName:"li",href:"https://www.zotero.org/support/related"},"related items"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"{{tags}}")," - The list of tags for the selected note.")),Object(o.b)("h2",{id:"wildcards"},"Wildcards"),Object(o.b)("p",null,"A ",Object(o.b)("inlineCode",{parentName:"p"},"%(wildcard)")," uses the same logic as the placeholder, but only includes the content of a Zotero item without any formatting. Keep in mind that any fields not included in a Zotero item will not be deleted from your file."))}s.isMDXComponent=!0}}]);