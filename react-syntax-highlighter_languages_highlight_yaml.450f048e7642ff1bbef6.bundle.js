(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{2917:function(module,exports){module.exports=function(hljs){var keyName="[a-zA-Z_][\\w\\-]*",KEY={className:"attr",variants:[{begin:"^[ \\-]*"+keyName+":"},{begin:'^[ \\-]*"'+keyName+'":'},{begin:"^[ \\-]*'"+keyName+"':"}]},STRING={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[hljs.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[KEY,{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>] *$",returnEnd:!0,contains:STRING.contains,end:KEY.variants[0].begin},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!"+hljs.UNDERSCORE_IDENT_RE},{className:"type",begin:"!!"+hljs.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+hljs.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"^ *-",relevance:0},hljs.HASH_COMMENT_MODE,{beginKeywords:"true false yes no null",keywords:{literal:"true false yes no null"}},hljs.C_NUMBER_MODE,STRING]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_yaml.450f048e7642ff1bbef6.bundle.js.map