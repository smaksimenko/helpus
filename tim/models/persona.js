window.personaModel = Backbone.Model.extend({
    urlRoot: "/persona",
    default: {
        id: 0,
        name: "",
        surname: "",
        dateOfBirth: "",
        livingCountry:"",
        livingPlace: "",
        diagnosis: ""
    }
})
window.treatmentModel = Backbone.Model.extend({
    urlRoot: "/treatment",
    default: {
        id: null,
        persona_id: null,
        treatmentType: null,
        treatmentCountry: "",
        treatmentPlace: "",
        treatmentPrice: 0,
        treatmentCurrency: ""
    }
})

window.treatmentCollection = Backbone.Collection.extend({
    model: treatmentModel,
    url: "/treatment"
})
