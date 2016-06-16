var generator = require("yeoman-generator");
var path = require("path");

module.exports = generator.Base.extend({
    constructor : function () {
        generator.Base.apply(this,arguments);
        this.option('babel',{
            desc     : "Use babel ",
            type     : Boolean,
            defaults : true
        });
        this.sourceRoot(path.join(__dirname, '../templates/common'));
    },
    configuring:function(){
        this.fs.copyTpl(
            this.templatePath("webpack.config.js"),
            this.destinationPath("webpack.config.js")
        );
        this.fs.copyTpl(
            this.templatePath("gulpfile.js"),
            this.destinationPath("gulpfile.js")
        );
        this.fs.copyTpl(
            this.templatePath(".editorconfig"),
            this.destinationPath(".editorconfig")
        );
        this.fs.copyTpl(
            this.templatePath("_package.json"),
            this.destinationPath("package.json")
        );
        this.fs.copyTpl(
            this.templatePath("bower.json"),
            this.destinationPath("bower.json"),{
                appname:this.appname
            }
        );
    },
    writing : {
        index_js : function(){
            this.fs.copyTpl(
                this.templatePath("index.js"),
                this.destinationPath("src/index.js"),
                {
                    appname: this.appname
                }
            )
        },
        index_html : function(){
            this.fs.copyTpl(
                this.templatePath("index.pug"),
                this.destinationPath("src/index.pug"),
                {
                    appname: this.appname
                }
            )
        },
        statics : function(){
             //images fonts
            this.fs.copy(
                this.templatePath("../styles"),
                this.destinationPath("src/styles"),{
                    //nodir : false
                }
            );
            this.fs.copy(
                this.templatePath("../fonts"),
                this.destinationPath("src/fonts"),{
                    //nodir : false
                }
            );
            this.fs.copyTpl(
                this.templatePath("sidebarCtrl.js"),
                this.destinationPath("src/controllers/sidebarCtrl.js"),
                {
                    appname: this.appname
                }
            );
            this.fs.copyTpl(
                this.templatePath("headerCtrl.js"),
                this.destinationPath("src/controllers/headerCtrl.js"),
                {
                    appname: this.appname
                }
            );
        }
    },
    install : function(){
        this.installDependencies();
    }
});
