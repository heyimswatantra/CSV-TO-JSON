
const csvToJson = (csvFile) => {
    const recordsArr = csvFile.split("\n");
    const headers = recordsArr[0].split(',').map(header => header.trim());
    const jsonObject = [];
    
    for (let i = 1; i < recordsArr.length; i++) {
        const currentLine = recordsArr[i].split(',');
        const record = {};

        for (let j = 0; j < headers.length; j++) {
            const header = headers[j];
            const value = currentLine[j];
            const [mainKey, subKey] = header.split('.');
            
            if (subKey) {
                record[mainKey] = record[mainKey] || {};
                record[mainKey][subKey] = value;
            } else {
                record[header] = value;
            }
        }

        jsonObject.push(record);
    }
    
    return jsonObject.map(record => {
        const additionalInfo = {};
        for (const key in record) {
            if (!['name', 'address', 'age', 'gender'].includes(key)) {
                additionalInfo[key] = record[key];
                delete record[key];
            }
        }
        record.additional_info = additionalInfo;
        return record;
    });
};

export default csvToJson;
