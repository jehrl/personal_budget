const { find } = require("@mapbox/node-pre-gyp");

let envelopes = {
    housing: {
      rentOrMortgage: [{id: 1, name: "rent", amount: 1000, date: "2020-01-01", venue: "Venmo", notes: ""}, ],
      utilities: [],
      homeMaintenance: [],
    },
    transportation: {
      carPayment: [],
      gas: [],
      maintenanceRepairs: [],
      publicTransportation: [],
    },
    groceries: {
      food: [],
      toiletries: [],
      cleaningSupplies: [],
    },
    insurance: {
      health: [],
      car: [],
      life: [],
    },
    debtPayments: {
      creditCard1: [],
      creditCard2: [],
      studentLoans: [],
    },
    personalCare: {
      haircuts: [],
      toiletries: [],
      cosmetics: [],
    },
    entertainment: {
      diningOut: [],
      moviesEntertainment: [],
      hobbies: [],
    },
    savings: {
      emergencyFund: [],
      retirement: [],
      generalSavings: [],
    },
    clothing: {
      clothingPurchases: [],
      dryCleaning: [],
    },
    education: {
      tuition: [],
      booksSupplies: [],
    },
    health: {
      doctorVisits: [],
      medications: [],
    },
    miscellaneous: {
      gifts: [],
      donations: [],
    },
};

const getCategory = (category) => {
    return envelopes[category];
}

const getSubcategory = (category, subcategory) => {
    return envelopes[category][subcategory];
}

const getAllCategories = () => {
    return envelopes;
}

const getRecordsByValue = (info, value, filter, nameOfFilter) => {
    let records = [];
    if (filter === "category") {
        for (let subcategory in envelopes[nameOfFilter]) {
            for (let record of envelopes[nameOfFilter][subcategory]) {
                if (record[info] === value) {
                    records.push(record);
                }
            }
        }
        return records;
    }
    if (filter === "subcategory") {
        for (let record of envelopes[nameOfFilter]) {
            if (record[info] === value) {
                records.push(record);
            }
        }
        return records;
    } 
    for (let category in envelopes) {
        for (let subcategory in envelopes[category]) {
            for (let record of envelopes[category][subcategory]) {
                if (record[info] === value) {
                    records.push(record);
                }
            }
        }
    }
    return records;
}

const createNewCategory = (category) => {
    envelopes[category] = {};
}

const createNewSubcategory = (category, subcategory) => {
    envelopes[category][subcategory] = [];
}

let recordCount = 1

const createRecord = (category, subcategory, record) => {
    record.id = recordCount;
    recordCount++;
    envelopes[category][subcategory].push(record);
}

const findIndex = (category, subcategory, id) => {
    return envelopes[category][subcategory].findIndex(record => record.id === id);
}

const updateRecord = (category, subcategory, id, newRecord) => {
    let index = findIndex(category, subcategory, id);
    envelopes[category][subcategory][index] = newRecord;
}

const deleteRecord = (category, subcategory, id) => {
    let index = findIndex(category, subcategory, id);
    envelopes[category][subcategory].splice(index, 1);
}

const deleteRecordsByValue = (info, value, filter, nameOfFilter) => {
    if (filter === "category") {
        envelopes[nameOfFilter] = []
        return envelopes[nameOfFilter];
    }
    if (filter === "subcategory") {
        for (let category in envelopes) {
            for (let subcategory in envelopes[category]) {
                if (subcategory === filter) {
                    envelopes[category][subcategory] = [];
                    return envelopes[category][subcategory];
                }
            }
        }
    }
    for (let category in envelopes) {
        for (let subcategory in envelopes[category]) {
            for (let record of envelopes[category][subcategory]) {
                if (record[info] === value) {
                    deleteRecord(category, subcategory, record.id);
                }
            }
        }
    }
    return;
}

module.exports = {
    getCategory,
    getSubcategory,
    getAllCategories,
    getRecordsByValue,
    createRecord,
    updateRecord,
    deleteRecord,
}