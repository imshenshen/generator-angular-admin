var generator = require("yeoman-generator");
var path = require("path");
var _ = require("lodash");

module.exports = generator.Base.extend({
    constructor: function() {
        generator.Base.apply(this, arguments);
        this.option('babel', {
            desc: "Use babel ",
            type: Boolean,
            defaults: true
        });
        this.argument("controllerName", {
            type: String,
            required: true
        });
        this.sourceRoot(path.join(__dirname, '../templates/controllers'));
    },
    writing: function() {
        if (!_.endsWith(this.controllerName, "controller") || !_.endsWith(this.controllerName, "Ctrl")) {
            this.controllerName += "Ctrl";
        }
        this.fs.copyTpl(
            this.templatePath("controller.js"),
            this.destinationPath("src/controllers/" + this.controllerName + ".js"), {
                appname: this.appname,
                controllerName: this.controllerName
            }
        );
    },
    end: function() {
        this.log("create controller -- done!");
    }
});
