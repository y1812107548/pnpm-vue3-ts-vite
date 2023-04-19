// .prettierrc.js
module.exports = {
    printWidth: 100, //一行的字符数，如果超过会进行换行，默认为80
    tabWidth: 2, // 一个 tab 代表几个空格数，默认为 2 个
    useTabs: false, //是否使用 tab 进行缩进，默认为false，表示用空格进行缩减
    singleQuote: true, // 字符串是否使用单引号，默认为 false，使用双引号
    semi: true, // 行尾是否使用分号，默认为true
    trailingComma: "none", // 是否使用尾逗号
    bracketSpacing: true, // 对象大括号直接是否有空格，默认为 true，效果：{ a: 1 }
    quoteProps: 'as-needed',// 对象的 key 仅在必要时用引号
    jsxSingleQuote: false,// jsx 不使用单引号，而使用双引号
    jsxBracketSameLine: false,// jsx 标签的反尖括号需要换行
    arrowParens: 'always',// 箭头函数，只有一个参数的时候，也需要括号
    rangeStart: 0,// 每个文件格式化的范围是文件的全部内容
    rangeEnd: Infinity,
    requirePragma: false,// 不需要写文件开头的 @prettier
    insertPragma: false,// 不需要自动在文件开头插入 @prettier
    proseWrap: 'preserve',// 使用默认的折行标准
    htmlWhitespaceSensitivity: 'css',// 根据显示样式决定 html 要不要折行
    endOfLine: 'auto'// 换行符使用 lf
}; 
