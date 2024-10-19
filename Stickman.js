function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, addressEndsWith3, addressEndsWith4, addressEndsWith5, addressEndsWith6, addressEndsWith7, addressEndsWith8, addressEndsWith9, addressEndsWith10, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2) || result.address.endsWith(addressEndsWith3) || result.address.endsWith(addressEndsWith4) || result.address.endsWith(addressEndsWith5) || result.address.endsWith(addressEndsWith6) ||
            result.address.endsWith(addressEndsWith7) ||
            result.address.endsWith(addressEndsWith8) || result.address.endsWith(addressEndsWith9) || result.address.endsWith(addressEndsWith10)) {
                h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;

            }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}

    function tipfreeall() {
        modifyValue(500, 0, '694', 'D9C')
        modifyValue(400, 0, '554')
        modifyValue(300, 0, '6D4', '454', '47C', '94C', '9BC', 'E8C')
        modifyValue(350, 0, '16C', '63C', 'B7C', 'A9C')

        modifyValue(250, 0, '614', '0FC', '5CC', 'B0C', 'A2C')
        modifyValue(150, 0, '5D4', '3D4', '394')
        modifyValue(20, 0, '814', '514')
        modifyValue(30, 0, '7D4', '494')
        modifyValue(40, 0, '794', '4D4')
        modifyValue(50, 0, '754', '594')
        modifyValue(725, 0, '1DC', '6AC', 'BEC', 'EFC')
        modifyValue(650, 0, '55C', '8DC', 'E1C', '40C')

        modifyValue(750, 0, '414', '24C', '71C', 'C5C', 'F6C')
        modifyValue(850, 0, '01C', '78C', 'CCC')
        modifyValue(1250, 0, '39C', '4EC', '86C', 'DAC')

        modifyValue(500, 0, '694', 'D9C', 'A1C', '69C', '31C', 'C1C', 'F9C')
        modifyValue(1000, 0, '654', 'E1C', 'A9C', '71C', '39C', 'C9C', '01C')
        modifyValue(100, 0, '714', 'C9C', '91C', '49C', '21C', 'B1C', 'E9C')
        modifyValue(3000, 0, '714', 'C1C', '89C', '59C', 'A9C', '19C', '2BC', 'E1C')
        modifyValue(1500, 0, 'D1C', '99C', '61C', '29C', 'B9C', 'F1C', '32C', '08C', '7FC', 'D3C')
        modifyValue(2000, 0, 'B9C', '81C', '51C', '11C', 'A1C', 'D9C')
        modifyValue(2500, 0, 'B1C', '79C', '41C', '99C', 'D1C', '09C')
    }
