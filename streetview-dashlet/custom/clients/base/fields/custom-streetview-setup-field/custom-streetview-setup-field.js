({
    events: {
        'change select[name="field"]': 'updateField'
    },
    initialize: function (options) {
        this._super('initialize', [options]);

        this.selectedField = this.model.get("selectedField") || '';
    },

    render: function() {
        var module = this.context.get('module');
        var moduleMeta = app.metadata.getModule(module);
        var recordMeta = moduleMeta.views.record.meta;
        var fields = {};
        _.each(recordMeta.panels, function(panel){
            _.each(panel.fields, function(field){
                fields[field.name] = app.lang.get(field.label, module);
            });
        }, this);

        this.fields = fields;
        this._super('render');
    },

    updateField: function() {
        this.selectedField = $("select[name='field']").val();
    }
})