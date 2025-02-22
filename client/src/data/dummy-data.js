// This file will parse a csv file and make dummy data available to the app from it

// TODO: parse csv file from our public dummy data sheet file

const SHEET_ID = "1ik_6TgaKqsNULRVBq_PPTj8VZ3BAck8GqeL1iXgqZsI"; // Replace with your Sheet ID
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

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

fetch(url)
    .then(response => response.text())
    .then(csv => {
        const rows = csv.split("\n").map(row => row.split(","));

        const collectionsIndexesToName = {};
        rows.forEach((row) => {
            row.forEach((value, index) => {
                let collectionName = collectionsIndexesToName[index];

                if (value.includes("*collection")) {
                    collectionName = formatQuotes(value.split('*')[0]);
                    dummyData.collections[collectionName] = [];
                    collectionsIndexesToName[index] = collectionName;
                } else {
                    // if it's not a collection label, and it's in a collection column, 
                    // add it to the collection!

                    if (value.trim() !== "\"\"" && dummyData.collections[collectionName]) {

                        dummyData.collections[collectionName].push(value.trim().slice(1, value.length - 1));
                    }
                }
            })
        })
    })
    .catch(error => console.error("Error fetching sheet:", error));


const dummyData = { collections: {} }

export default dummyData;