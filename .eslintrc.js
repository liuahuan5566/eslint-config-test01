module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        // 一个变量从不重新分配，使用const
        'prefer-const': 'warn',
        'no-const-assign': 'warn',
        // 禁止出现var
        'no-var': 'warn',
        // 任何对未声明的变量的引用都会导致警告
        'no-undef': 'warn',
        'no-multi-assign': 'warn',
        'no-new-object': 'warn',
        'object-shorthand': 'warn',
        'quote-props': 'warn',
        'no-array-constructor': 'warn',
        'quotes': 'warn',
        'prefer-template': 'warn',
        'template-curly-spacing': 'warn',
        // 'no-eval': 'warn',
        'no-useless-escape': 'warn',
        'wrap-iife': 'warn',
        'no-loop-func': 'warn',
        'no-new-func': 'warn',
        'space-before-function-paren': 'warn',
        // 'space-before-blocks': 'warn',
        'prefer-spread': 'warn',
        // 'arrow-parens': 'warn',
        'arrow-body-style': 'warn',
        'arrow-parens': 'warn',
        // 'no-useless-constructor': 'warn',
        'import/imports-first': 'warn',
        'no-plusplus': 'warn',
        'operator-linebreak': 'warn',
        'no-unused-vars': 'warn',
        // 'no-case-declarations': 'warn',
        // 'no-mixed-operators': 'warn',
        'nonblock-statement-body-position': 'warn',
        // 'brace-style': 'warn',
        // 'spaced-comment': 'warn',
        // 'indent': 'warn',
        // 'space-before-blocks': 'warn',
        'keyword-spacing': 'warn',
        // 'space-infix-ops': 'warn',
        'eol-last': 'warn',
        'padded-blocks': 'warn',
        // 'space-in-parens': 'warn',
        // 'array-bracket-spacing': 'warn',
        'object-curly-spacing': 'warn',
        'max-len': 'warn',
        'comma-spacing': 'warn',
        'comma-dangle': 'warn',
        // 'semi': 'warn',
        // 'no-new-wrappers': 'warn',
        'radix': 'warn',
        // 'no-new-wrappers': 'warn',
        // 'no-new-wrappers': 'warn',
        // 'camelcase': 'warn',
        'new-cap': 'warn',
        // 禁止出现console
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁用debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止出现重复的 case 标签
        'no-duplicate-case': 'warn',
        // 禁止出现空语句块
        'no-empty': 'warn',
        // 禁止不必要的括号
        'no-extra-parens': 'warn',
        // 禁止对 function 声明重新赋值
        'no-func-assign': 'warn',
        // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unreachable': 'warn',
        // 强制所有控制语句使用一致的括号风格
        curly: 'warn',
        // 要求 switch 语句中有 default 分支
        'default-case': 'warn',
        // 强制尽可能地使用点号
        'dot-notation': 'warn',
        // 要求使用 === 和 !==
        eqeqeq: 'warn',
        // 禁止 if 语句中 return 语句之后有 else 块
        'no-else-return': 'warn',
        // 禁止出现空函数
        'no-empty-function': 'warn',
        // 禁用不必要的嵌套块
        'no-lone-blocks': 'warn',
        // 禁止使用多个空格
        'no-multi-spaces': 'warn',
        // 禁止多次声明同一变量
        'no-redeclare': 'warn',
        // 禁止在 return 语句中使用赋值语句
        'no-return-assign': 'warn',
        // 禁用不必要的 return await
        'no-return-await': 'warn',
        // 禁止自我赋值
        'no-self-assign': 'warn',
        // 禁止自身比较
        'no-self-compare': 'warn',
        // 禁止不必要的 catch 子句
        'no-useless-catch': 'warn',
        // 禁止多余的 return 语句
        'no-useless-return': 'warn',
        // 禁止变量声明与外层作用域的变量同名
        'no-shadow': 'off',
        // 允许delete变量
        'no-delete-var': 'off',
        // 强制数组方括号中使用一致的空格
        'array-bracket-spacing': 'warn',
        // 强制在代码块中使用一致的大括号风格
        'brace-style': 'warn',
        // 强制使用骆驼拼写法命名约定
        camelcase: 'warn',
        // 强制使用一致的缩进
        indent: 'off',
        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': 'warn',
        // 强制可嵌套的块的最大深度4
        'max-depth': 'warn',
        // 文件强制最大行数 1200
        'max-lines': ['warn', { max: 1200 }],
        // 强制函数最大代码行数 50
        'max-lines-per-function': ['warn', { max: 50 }],
        // 强制函数块最多允许的的语句数量100
        'max-statements': ['warn', 100],
        // 强制回调函数最大嵌套深度
        'max-nested-callbacks': ['warn', 3],
        // 强制函数定义中最多允许的参数数量
        'max-params': ['warn', 3],
        // 强制每一行中所允许的最大语句数量
        'max-statements-per-line': ['warn', { max: 1 }],
        // 要求方法链中每个调用都有一个换行符
        'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
        // 禁止 if 作为唯一的语句出现在 else 语句中
        'no-lonely-if': 'warn',
        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 'warn',
        // 禁止出现多行空行
        'no-multiple-empty-lines': 'warn',
        // 关于分号
        semi: ['warn', 'always', { omitLastInOneLineBlock: true }],
        // 强制在块之前使用一致的空格
        'space-before-blocks': 'warn',
        // 强制在圆括号内使用一致的空格
        'space-in-parens': 'warn',
        // 要求操作符周围有空格
        'space-infix-ops': 'warn',
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': 'warn',
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': 'warn',
        // 强制在 switch 的冒号左右有空格
        'switch-colon-spacing': 'warn',
        // 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': 'warn',
        // 标记arguments变量的使用
        'prefer-rest-params': 'warn',
        // 'no-useless-escape': 'warn',
        'no-irregular-whitespace': 'warn',
        // 不允许直接在Object.prototype对象实例上调用某些方法
        'no-prototype-builtins': 'warn',
        // 消除一个案件无意中掉到另一个案件
        'no-fallthrough': 'warn',
        // 禁止不必要的布尔转换
        'no-extra-boolean-cast': 'warn',
        // 防止访问未初始化的词汇绑定以及跨越事例子句访问提升的功能
        'no-case-declarations': 'warn',
        // 禁止使用异步函数作为 Promise executor
        'no-async-promise-executor': 'warn',
        // 强化*发生器功能的间距
        'generator-star-spacing': 'off',
        // 不允许使用制表符
        'no-tabs': 'off',
        // 不允许在行尾添加尾随空白（空格，制表符和其他Unicode空白字符）
        'no-trailing-spaces': 'off',
        // 在表达式中连续使用不含运算符的不同运算符时发出警告
        'no-mixed-operators': 'off',
        // 确保promise只被Error对象拒绝
        'prefer-promise-reject-errors': 'off',
        // 禁止使用eval()函数来防止潜在的危险
        'no-eval': 'warn',
        // 强制每个函数(对于var)或块(对于let和const)作用域同时声明或单独声明变量。
        'one-var': 'off',
        // 在不改变类的工作方式的情况下安全地移除的类构造函数
        'no-useless-constructor': 'off',
        // 不允许括号和括号内的空格
        'computed-property-spacing': 'warn',
        'standard/computed-property-even-spacing': 'off',
        'standard/no-callback-literal': 'off',
        // 该规则检查每个v-model指令是否有效
        'vue/valid-v-model': 'warn',
        // 需要使用指令v-bind:key
        'vue/require-v-for-key': 'warn',
        // v-bind缩写
        'vue/v-bind-style': 'warn',
        // v-on缩写
        'vue/v-on-style': 'warn',
        // 避免 v-if 和 v-for 同时用在一个元素上
        'vue/no-use-v-if-with-v-for': 'warn',
        'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    },
};