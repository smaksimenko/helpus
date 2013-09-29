window.personaModel = Backbone.Model.extend({
    urlRoot: "/persona",
    default: {
        id: 0,
        name: "",
        surname: "",
        dateOfBirth: "",
        livingCountry:"",
        livingPlace: "",
        diagnosis: "",
        treatmentId: "",
        financeStateId: ""
    }
})
window.treatmentModel = Backbone.Model.extend({
    urlRoot: "/treatment",
    default: {
        id: null,
        personaId: null,
        treatmentType: null,
        treatmentCity: "",
        treatmentCountry: "",
        treatmentPlace: "",
        treatmentPrice: 0,
        treatmentCurrency: "",
        treatmentStart: ""
    }
})

window.treatmentCollection = Backbone.Collection.extend({
    model: treatmentModel,
    url: "/treatment"
})
window.financeStateModel = Backbone.Model.extend({
    urlRoot: "/financeState",
    default: {
        id: null,
        personaId: null,
        currency: null,
        total: null,
        collected: null,
        toDate: null
    }
})

window.financeStateCollection = Backbone.Collection.extend({
    model: financeStateModel,
    url: "/financeState"
})

window.finaccauntModel = Backbone.Model.extend({
    urlRoot: "/financeAccount",
    default: {
        id: null,
        name: null,
        organisation: null
       // benifit
    }
})

window.finaccauntCollection = Backbone.Collection.extend({
    model: financeStateCollection,
    url: "/financeAccount"
})