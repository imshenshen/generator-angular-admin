# generator-angular-admin
快速生成`angular`+ `bootstrap` + `ui-router`的admin后台系统

## Usage
1. `npm link`
2. `npm install -g yo`
2. `mkdir your-module-name && cd your-module-name`
3. `yo angular-admin`
4. `gulp build-dev` or `gulp build`
5. you should open build/index.html in your browser

## Structure
``` 
package.json
bower.json
.eslintignore
eslint.yml
gulpfile
.editorconfig
build
src  ------
	| views
	| fonts
	| styles
	| images
	| directives
	| services
	| controllers
	| filters
	| providers
	| index.js
	| index.html
```
