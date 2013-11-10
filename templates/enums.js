
window.treatmentType = {
    surgery:0,
    prosthesis:1,
    rehabilitation:2,
    spinalTransplantation: 3,
    liverTransplantation: 4
}
window.treatmentNames = {
    0: "Операция",
    1: "Протезирование",
    2: "Ребилитация",
    3: "Пересадка спинного мозга",
    4: "Пересадка печени"
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

window.COLLECTION_STATE  = {
    preOpened: 0,
    opened: 1,
    paused: 2,
    stopped: 3,
    finished: 4,
    reopened: 5
}

window.COLLECTION_STATE_DATA = {};
window.COLLECTION_STATE_DATA[COLLECTION_STATE.preOpened] = {
    message: "Мы собираемся официально открыть сбор на днях, реквизиты и общие данные будут уточнены.",
    messageStyle: "alert-warning",
    accounts: true
},
window.COLLECTION_STATE_DATA[COLLECTION_STATE.opened] = {
    message: "Сбор открыт.",
    messageStyle: "alert-info",
    accounts: true
}
window.COLLECTION_STATE_DATA[COLLECTION_STATE.stopped] = {
    message: "Сбор остановлен. Причиной может быть отсутствие документов, отчетов о сборе или нарушения правил проекта",
    messageStyle: "alert-danger",
    accounts: false
}
window.COLLECTION_STATE_DATA[COLLECTION_STATE.paused] = {
    message: "Сбор временно приостановлен. Причиной может уточнение диагноза, изменение места лечения или других обстоятельств",
    messageStyle: "alert-warning",
    accounts: false
}
window.COLLECTION_STATE_DATA[COLLECTION_STATE.finished] = {
    message: "Сбор успешно завершен, необходимая сумма собрана! Спасибо всем!",
    messageStyle: "alert-success",
    accounts: false
}
window.COLLECTION_STATE_DATA[COLLECTION_STATE.paused] = {
    message: "Сбор открыт повторно. В связи с новыми обстоятельствами сбор снова открыт",
    messageStyle: "alert-danger",
    accounts: false
}