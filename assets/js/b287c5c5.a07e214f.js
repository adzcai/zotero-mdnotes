(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(u,o(o({ref:t},d),{},{components:n})):r.a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},169:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/config-editor-f26bfd841dc017df998acebad0af2876.png"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(107)),l={title:"Custom Formatting",sidebar_position:3},o={unversionedId:"advanced/formatting",id:"advanced/formatting",isDocsHomePage:!1,title:"Custom Formatting",description:"Starting with v0.1.0 it's possible to specify custom formatting and to use templates.",source:"@site/docs/advanced/formatting.md",sourceDirName:"advanced",slug:"/advanced/formatting",permalink:"/zotero-mdnotes/docs/next/advanced/formatting",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/docs/advanced/formatting.md",version:"current",sidebarPosition:3,frontMatter:{title:"Custom Formatting",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Placeholders and wildcards",permalink:"/zotero-mdnotes/docs/next/advanced/placeholders"},next:{title:"Notes and Known Limitations",permalink:"/zotero-mdnotes/docs/next/limitations"}},c=[{value:"Internal links",id:"internal-links",children:[]},{value:"Zotero Note formatting",id:"zotero-note-formatting",children:[]},{value:"Placeholders",id:"placeholders",children:[{value:"Default formatting",id:"default-formatting",children:[]},{value:"Adding new formatting rules",id:"adding-new-formatting-rules",children:[]},{value:"Preference name",id:"preference-name",children:[]}]}],d={toc:c};function s(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starting with ",Object(i.b)("strong",{parentName:"p"},"v0.1.0")," it's possible to specify custom formatting and to use templates."),Object(i.b)("h2",{id:"internal-links"},"Internal links"),Object(i.b)("p",null,"The internal link preference influences how file names and therefore how links look."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[[wiki links]]")," can contain spaces and maintain their case"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"[Markdown links](markdown-links.md)")," are all lower case and spaces are replaced with dashes.")),Object(i.b)("h2",{id:"zotero-note-formatting"},"Zotero Note formatting"),Object(i.b)("p",null,"Zotero Notes are formated in HTML. The hidden preference ",Object(i.b)("inlineCode",{parentName:"p"},"extensions.mdnotes.html_to_md")," has a dictionary of how the HTML elements are translated into markdown."),Object(i.b)("h2",{id:"placeholders"},"Placeholders"),Object(i.b)("p",null,"With a few exceptions, you can format any placeholder by adding (or modifying) them in the settings. You can reach the hidden preferences menu from ",Object(i.b)("inlineCode",{parentName:"p"},"Edit > Preferences > Advanced > Config Editor"),". You can use the search to find existing configurations:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Zotero&#39;s Config editor",src:n(169).default})),Object(i.b)("h3",{id:"default-formatting"},"Default formatting"),Object(i.b)("h4",{id:"placeholder-format"},"Placeholder format"),Object(i.b)("p",null,"By default, placeholder contents are replaced with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-markdown"},"{{bullet}} {{field_name}}: {{field_contents}}\n")),Object(i.b)("p",null,"Where:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"{{bullet}}")," - Defined in ",Object(i.b)("inlineCode",{parentName:"li"},"extensions.mdnotes.bullet")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"{{field_name}}")," - The name of the field transformed from camel case into sentence case."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"{{field_contents}}")," - The contents of the field as described below.")),Object(i.b)("h4",{id:"field-format"},"Field format"),Object(i.b)("p",null,"Any placeholder that doesn't have their formatting defined in the hidden preferences has the following defaults:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"link_style"),": As defined by the preference of ",Object(i.b)("a",{parentName:"li",href:"#internal-links"},"Internal links"),". Valid values include ",Object(i.b)("inlineCode",{parentName:"li"},"wiki"),", ",Object(i.b)("inlineCode",{parentName:"li"},"markdown")," and ",Object(i.b)("inlineCode",{parentName:"li"},"no-links"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"list_separator"),": For fields that contain more than one value, the default is ",Object(i.b)("inlineCode",{parentName:"li"},", "),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"change_case"),": How to capitalize the contents of the field: ",Object(i.b)("inlineCode",{parentName:"li"},"title"),", ",Object(i.b)("inlineCode",{parentName:"li"},"sentence"),", ",Object(i.b)("inlineCode",{parentName:"li"},"lower")," or ",Object(i.b)("inlineCode",{parentName:"li"},"upper")," case. The default will return the field content in its original case."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"remove_spaces"),": If this is set to ",Object(i.b)("inlineCode",{parentName:"li"},"true")," spaces will be replaced with dashes.")),Object(i.b)("h3",{id:"adding-new-formatting-rules"},"Adding new formatting rules"),Object(i.b)("p",null,"If you want to add custom formatting for any field not currently there, you can add the format for a placeholder with right-click and ",Object(i.b)("inlineCode",{parentName:"p"},"New > String"),"."),Object(i.b)("h3",{id:"preference-name"},"Preference name"),Object(i.b)("p",null,"The preference name should be ",Object(i.b)("inlineCode",{parentName:"p"},"extensions.mdnotes.placeholder.<yourFieldHere>"),", where ",Object(i.b)("inlineCode",{parentName:"p"},"yourFieldHere")," should match a ",Object(i.b)("a",{parentName:"p",href:"https://www.zotero.org/support/kb/item_types_and_fields"},"supported Zotero field"),". Keep in mind that Zotero fields are usually accessed using camel case, and should be (usually) formatted as ",Object(i.b)("inlineCode",{parentName:"p"},"fieldName"),", e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"seriesTitle"),"."),Object(i.b)("h4",{id:"preference-value"},"Preference value"),Object(i.b)("p",null,"The value of the preference should be enclosed in braces, and defined as key/value pairs, e.g ",Object(i.b)("inlineCode",{parentName:"p"},'{"key": "value"}'),"."),Object(i.b)("p",null,"In addition to the fields described in the ",Object(i.b)("a",{parentName:"p",href:"#field-format"},"default field format"),", the following options can be specified:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"content")," - Formatting the placeholder's content (",Object(i.b)("a",{parentName:"li",href:"#placeholder-format"},"default placeholder format"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"field_contents")," - Formatting the field itself, which defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"{{content}}"))),Object(i.b)("h5",{id:"examples"},"Examples"),Object(i.b)("p",null,"Replacing the field label with custom text and changing the list separator to make a list:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-markdown"},'{"content":"{{bullet}} PDF Attachments\\n\\t- {{field_contents}}", "field_contents": "{{content}}", "list_separator": "\\n\\t- "}\n')),Object(i.b)("p",null,"Making the tags placeholder remove spaces and adding a hash sign before each tag:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-markdown"},'{"content":"{{bullet}} Tags: {{field_contents}}", "field_contents": "#{{content}}", "link_style": "no-links", "list_separator": ", ", "remove_spaces": "true"}\n')))}s.isMDXComponent=!0}}]);