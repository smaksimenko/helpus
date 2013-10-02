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

window.financeBankModel = Backbone.Model.extend({
    urlRoot: "/financeAccount",
    default: {
        id: null,
        name: null,
        forCountry: null,
        organisation: null,
        MFO: 0,
        OKPO: 0,
        accountNumber: 0,
        target: null,
        currency: null,
        cardNumber: null,
        preset: null,
        comment: null,
        personaId: null
    }
})

window.financeBanktCollection = Backbone.Collection.extend({
    model: financeBankModel,
    url: "/financeAccount"
})

window.webmoneyModel = Backbone.Model.extend({
    id: null,
    name: null,
    number: null,
    currency: null,
    urlRoot: "/webmoney"
})

window.webMoneyCollection = Backbone.Collection.extend({
    model: webmoneyModel,
    url: "/webmoney"
})

window.contactModel = Backbone.Model.extend({
    urlRoot: "/contact",
    default: {
        id: null,
        personaId: null,
        name: null,
        country: null,
        city: null,
        phone: null,
        relation: null
    }
})
window.contactCollection = Backbone.Collection.extend({
    url: "/contact",
    model: contactModel
})

window.socialModel = Backbone.Model.extend({
    urlRoot: "/social",
    default: {
        id: null,
        personaId: null,
        name: null,
        link: null,
        alias: null
    }
})

window.socialCollection = Backbone.Collection.extend({
    url:"/social",
    model:socialModel
})