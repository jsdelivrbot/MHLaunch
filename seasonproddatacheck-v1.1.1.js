try {    
        var seasontktType = parent.frames.jQuery('#cart-table > tbody > tr td').eq(46).text().trim(); //Half vs Full Season
        var seasonPrice = typeof parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[1].trim() != "undefined" ? parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[1].trim() : "" || typeof parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().trim() != "undefined" ? parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().trim() : ""; //$500.00;
        var seasonQty = typeof parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[0].trim() != "undefined" ? parent.frames.jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[0].trim() : "";  // 1 ticket vs 2 ticktes, etc.
        var seasontktName = parent.frames.jQuery('#cart-table > tbody > tr td').eq(1).find('b').text(); //"2018-19 Half Season Plan B"
        var seasontktDetails = parent.frames.jQuery('#cart-table > tbody > tr td').eq(45).text().split('Row').join(' Row').split('Seat').join(' Seat').split(' - ').join('-'); //"Section 401 Row 2 Seat 3-4"

        console.log('test worked---->' + seasontktType);
        console.log('test worked---->' + seasonPrice);
        console.log('test worked---->' + seasonQty);
        console.log('test worked---->' + seasontktName);
        console.log('test worked---->' + seasontktDetails);
        console.log('test worked---->' +  seasontktType + seasonPrice + seasonQty + seasontktName + seasontktDetails);
    
} catch(err) {
    console.log('no season ticket product data');
}
