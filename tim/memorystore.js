// The in-memory Store. Encapsulates logic to access wine data.
window.store = {

    persona: {},
    treatment: {},
    populate: function () {

        this.persona[1] = {
            id: 1,
            name: "Тимофей",
            surname: "Салтановский",
            dateOfBirth: new Date (2012,11,3).getTime(),
            livingCountry: "Украина",
            livingPlace: "Одесса",
            diagnosis: "Диагноз: болезнь Гиршпрунга, тотальной формы (рабочего кишечника всего 50 см). Илеостома. синдром короткой кишки. Носитель кишечных свищей. Белково-энергетическая недостаточность 2 степени. Перитонит. Некроз восходящей ободочной кишки",
            treatmentId: 1
        };
       this.treatment[1] = {
           id: 1,
           persona_id: 1,
           treatmentType: "Операция",
           treatmentCountry: "Германия",
           treatmentPlace: "Университетская Клиника Маннхейма",
           treatmentPrice: 120000,
           treatmentCurrency: "Евро"
       }


        this.lastId = 24;
    },

    find: function (model, table) {
        return this[table][model.id];
    },

    findAll: function (table) {
        return _.values(this[table]);
    },

    create: function (model) {
        this.lastId++;
        model.set('id', this.lastId);
        this.wines[this.lastId] = model;
        return model;
    },

    update: function (model) {
        this.wines[model.id] = model;
        return model;
    },

    destroy: function (model) {
        delete this.wines[model.id];
        return model;
    }

};

store.populate();

// Overriding Backbone's sync method. Replace the default RESTful services-based implementation
// with a simple in-memory approach.
Backbone.sync = function (method, model, options) {

    var resp;
    switch (method) {
        case "read":
            if (model instanceof personaModel){
                resp = model.id ? store.find(model, "persona") : store.findAll("persona");
            }else if (model instanceof treatmentCollection){
                resp = model.id ? store.find(model, "treatment") : store.findAll("treatment");
            }else{
                console.log(model)}
           // resp = model.id ? store.find(model) : store.findAll();
            break;
        case "create":
            resp = store.create(model);
            break;
        case "update":
            resp = store.update(model);
            break;
        case "delete":
            resp = store.destroy(model);
            break;
    }

    if (resp) {
        options.success(resp);
    } else {
        options.error("Record not found");
    }
};