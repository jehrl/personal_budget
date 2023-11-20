
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

const getCategory = (name) => {
    return envelopes[name];
}

const getSubcategory = (name, subcategory) => {
    return envelopes[name][subcategory];
}

const getAllCategories = () => {
    return envelopes;
}

const getRecordsByValue = (info, value, filter, nameOfFilter) => {
    let records = [];
    if (filter === "category") {
        for (let subcategory in envelopes[nameOfFilter]) {
            for (let record of envelopes[category][subcategory]) {
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
    } for (let category in envelopes) {
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



console.log(getCategory("housing"))
