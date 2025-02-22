// This file will parse a csv file and make dummy data available to the app from it

const dummyData = { collections: {} };
const tabIds = {
    "strategyTools": '0',
    "studentAccounts": '1609703130'
};

const SHEET_ID = "1ik_6TgaKqsNULRVBq_PPTj8VZ3BAck8GqeL1iXgqZsI"; // Replace with your Sheet ID

async function populateCollection(collectionName) {
    const sheet_tab_id = tabIds[collectionName];
    dummyData.collections[collectionName] = {}

    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${sheet_tab_id}`;

    function formatQuotes(value) {
        // console.log(value);
        let v = value.trim().replace("\"\"", '$$$');
        // console.log(v);
        v = v.replace("\"", "");
        // console.log(v);
        v = v.replace("$$$", "\"")
        // console.log('final: ', v, "\n\n\n");
        return v;
    }

    const fields = {}

    return fetch(url)
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split("\n").map(row => row.split(","));
            rows.forEach((row, rowIndex) => {
                row.forEach((value, colIndex) => {
                    if (value.includes("*key")) {
                        // add the key to fields lookup
                        let key = value.trim().split("*")[0].slice(1);
                        fields[colIndex] = key;
                    }
                    else if (fields[colIndex] && value !== '\"\"') {
                        const key = fields[colIndex];
                        let currentDoc = dummyData.collections[collectionName][rowIndex];
                        if (!currentDoc) dummyData.collections[collectionName][rowIndex] = {}
                        dummyData.collections[collectionName][rowIndex][key] = value;
                    }
                })
            })
        })
        .catch(error => console.error("Error fetching sheet:", error));
}

populateCollection("strategyTools").then(() => console.log(JSON.stringify(dummyData, null, 3)));
populateCollection("studentAccounts").then(() => console.log(JSON.stringify(dummyData, null, 3)));

export default dummyData;