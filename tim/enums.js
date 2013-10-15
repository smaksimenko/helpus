
window.treatmentType = {
    surgery:0,
    prosthesis:1,
    rehabilitation:2
}
window.treatmentNames = {
    0: "Операция",
    1: "Протезирование",
    2: "Ребилитация"
}
window.CURRENCY = {
   USD: 0,
   EUR: 1,
   RUR: 2,
   UAH: 3,
   BYR: 4,
   catalog: {
    0: {shortName:"USD", symbol: "$", name: "Доллар США"},
    1: {shortName:"EUR", symbol: "&euro;", name: "Евро"},
    2: {shortName:"RUR", symbol: "", name: "Росcийский рубль"},
    3: {shortName:"UAH", symbol: "₴", name: "Украинская гривна"},
    4: {shortName:"BYR", symbol: "", name: "Белорусский рубль"}
   }


}
window.ADVERT_TYPES = {
    action: 0,
    news: 1
}
window.ADVERTS_EXPIRED_HOURS = 4;
window.QUANTITY_OF_SHOWN_NEWS = 5;
window.DOCUMENTS_TYPES = {
    mainDocs: 0,
    medicalDocs: 1,
    financeDocs: 2,
    reportDocs: 3
}
window.DOCUMENTS_TABS = {};
DOCUMENTS_TABS[DOCUMENTS_TYPES.mainDocs]={};
DOCUMENTS_TABS[DOCUMENTS_TYPES.mainDocs].tabId = "mainDocs";
DOCUMENTS_TABS[DOCUMENTS_TYPES.medicalDocs]={};
DOCUMENTS_TABS[DOCUMENTS_TYPES.medicalDocs].tabId = "medicalDocs";
DOCUMENTS_TABS[DOCUMENTS_TYPES.financeDocs] = {};
DOCUMENTS_TABS[DOCUMENTS_TYPES.financeDocs].tabId = "financeDocs";
DOCUMENTS_TABS[DOCUMENTS_TYPES.reportDocs] = {};
DOCUMENTS_TABS[DOCUMENTS_TYPES.reportDocs].tabId = "reportDocs";