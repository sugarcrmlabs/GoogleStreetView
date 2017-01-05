/*
 * Your installation or use of this SugarCRM file is subject to the applicable
 * terms available at
 * http://support.sugarcrm.com/06_Customer_Center/10_Master_Subscription_Agreements/.
 * If you do not agree to all of the applicable terms or do not have the
 * authority to bind the entity as an authorized representative, then do not
 * install or use this SugarCRM file.
 *
 * Copyright (C) SugarCRM Inc. All rights reserved.
 */
({
    plugins: ['Dashlet'],

    events: _.extend({

    }),

    initialize: function(options) {
        this._super('initialize', [options]);

        this.on("render", this.checkSettings, this);
        this.layout.before('dashletconfig:save', _.bind(this.saveInputData, this));
    },

    render: function() {
        var fieldName = this.settings.get('selectedField');

        var moduleMeta = app.metadata.getModule(this.module);
        var recordMeta = moduleMeta.views.record.meta;
        var selectedField = {};
        _.each(recordMeta.panels, function(panel){
            _.each(panel.fields, function(field){
                if (field.name == fieldName) {
                    selectedField = field;
                }
            });
        }, this);

        var address = '';
        if (selectedField.type == 'fieldset') {
            _.each(selectedField.fields, function(subField, idx){
                address += this.model.get(subField.name);
                if (idx != (selectedField.fields.length - 1)) {
                   address += ', ';
                }
            }, this);
        } else {
            address = this.model.get(fieldName);
        }

        this._super("render");

        var self = this;
        var interval = setInterval(function() {
            if (typeof google != 'undefined') {
                clearInterval(interval);
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode( { 'address': address}, function(results, status) {
                    var panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('street-view-' + self.cid),
                        {
                            position: results[0].geometry.location,
                            pov: {heading: 0, pitch: 0},
                            zoom: 1
                        });
                });
            }
        }, 1000);
    },

    saveInputData: function () {
        var value = "";
        var fields = this.fields;
        var valid = true;
        var self = this;

        _.each(fields, function (field) {
            if (field.type === 'custom-streetview-setup-field') {
                if (self.validateField(field)) {
                    value = field.selectedField
                }
                else {
                    valid = false;
                }
            }
        });
        if (!valid) {
            return false;
        }

        this.settings.set("selectedField", value);
    },

    validateField: function (field) {
        var valid = true;

        if (_.isEmpty(field.selectedField)) {
            valid = false;
        }


        if (!valid) {
            app.alert.show('message-id', {
                level: 'error',
                messages: 'All fields must be filled in',
                autoClose: false
            });
        }

        return valid;
    },

    checkSettings: function () {
        var self = this;
        if (self.meta.config) {
            if (!self.settings.get('selectedField')) {
                self.settings.set('selectedField', '');
            }
        }
    },

    _renderField: function (field) {
        this._super('_renderField', [field]);
        if (this.meta.config) {
            if (!_.isUndefined(field.def.toggle)) {
                var toggle = this.getField(field.def.toggle), dependent = this.getField(field.def.dependent);
                this._toggleDepedent(toggle, dependent);
                this.settings.on('change:' + toggle.name, _.bind(function (event) {
                    this._toggleDepedent(toggle, dependent);
                }, this));
                this.settings.on('change:' + dependent.name, _.bind(function (event) {
                    this._toggleDepedent(toggle, dependent);
                }, this));
            }
        }
    }
})
