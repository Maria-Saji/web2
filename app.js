function convertJsonToObject () { 
    const jsonText = document.getElementById('jsonText').value; 
    try { 
    const obj = JSON.parse(jsonText); 
    document.getElementById('jsonObject').textContent = JSON.stringify(obj, null, 2); 
    } catch (e) { 
    
    document.getElementById('jsonObject').textContent = 'Invalid JSON'; 
    } 
    } 
    // Convert JSON date string to Date 
    function convertJsonToDate() { 
    const jsonDate = document.getElementById('jsonDate').value; 
    try { 
    const date = new Date(jsonDate); 
    document.getElementById('dateResult').textContent = date.toString(); 
    } catch (e) { 
    document.getElementById('dateResult').textContent = 'Invalid Date'; 
    } 
    } 
    // Convert JSON to CSV 
    function convertJsonToCsv() { 
    const jsonText = document.getElementById('jsonCsvText').value; 
    try { 
    const data = JSON.parse(jsonText); 
    const csv = Object.keys(data[0]).join(',') + '\n' + 
    data.map(row => Object.values(row).join(',')).join('\n'); 
    document.getElementById('csvResult').textContent = csv; 
    } catch (e) { 
    document.getElementById('csvResult').textContent = 'Invalid JSON'; 
    } 
    } 
    // Convert CSV to JSON 
    function convertCsvToJson() { 
    const csvText = document.getElementById('csvJsonText').value; 
    const rows = csvText.split('\n').map(row => row.split(',')); 
    const headers = rows.shift(); 
    const json = rows.map(row => { 
    let obj = {}; 
    row.forEach((value, index) => obj[headers[index]] = value); 
    return obj; 
    }); 
    document.getElementById('jsonResult').textContent = JSON.stringify(json, null, 2); 
    } 
    // Create hash from string 
    async function createHash() {
    const crypto = window.crypto || window.msCrypto; // For IE11 
    const str = document.getElementById('stringInput').value; 
    const encoder = new TextEncoder(); 
    const data = encoder.encode(str); 
    const hashBuffer = await crypto.subtle.digest('SHA-256', data); 
    
    const hashArray = Array.from(new Uint8Array(hashBuffer)); 
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); 
    document.getElementById('hashResult').textContent = hashHex; 
    }