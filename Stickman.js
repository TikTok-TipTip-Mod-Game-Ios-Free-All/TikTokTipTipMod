     function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, addressEndsWith3, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2) || result.address.endsWith(addressEndsWith3)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;

        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}

function tipfreeall(){
    modifyValue(500, 0, '694','D9C')
    modifyValue(400, 0, '554')
    modifyValue(300, 0, '6D4', '454')
    modifyValue(250, 0, '614')
    modifyValue(150, 0, '5D4', '3D4', '394')
    modifyValue(20, 0, '814', '514')
    modifyValue(30, 0, '7D4', '494')
    modifyValue(40, 0, '794', '4D4')
    modifyValue(50, 0, '754', '594')
    modifyValue(750, 0, '414')
    modifyValue(1000, 0, '654','E1C')
    modifyValue(100, 0, '714','C9C')
    modifyValue(3000, 0, '714','C1C')
    modifyValue(1500, 0, 'D1C')
    modifyValue(2000, 0, 'B9C')
    modifyValue(2500, 0, 'B1C')
}
