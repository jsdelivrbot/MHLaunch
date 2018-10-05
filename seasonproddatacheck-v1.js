try {
    if (parent.frames.document.location.host === "oss.ticketmaster.com" && /cart\/review/.test(parent.frames.document.location.href) === true) {
        var seasontktType = jQuery('#cart-table > tbody > tr td').eq(46).text().trim(); //Half vs Full Season
        var seasonPrice = jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[1].trim(); //$500.00
        var seasonQty = jQuery('#cart-table > tbody > tr td').eq(47).text().split(' ').join('').split('x')[0].trim(); // 1 ticket vs 2 ticktes, etc.
        var seasontktName = jQuery('#cart-table > tbody > tr td').eq(1).find('b').text(); //"2018-19 Half Season Plan B"
        var seasontktDetails = jQuery('#cart-table > tbody > tr td').eq(45).text().split('Row').join(' Row').split('Seat').join(' Seat').split(' - ').join('-'); //"Section 401 Row 2 Seat 3-4"

        console.log('test worked---->' + seasontktType);
        console.log('test worked---->' + seasonPrice);
        console.log('test worked---->' + seasonQty);
        console.log('test worked---->' + seasontktName);
        console.log('test worked---->' + seasontktDetails);
        console.log('test worked---->' +  seasontktType + seasonPrice + seasonQty + seasontktName + seasontktDetails);
    }
} catch(err) {
    console.log('no season ticket product data');
}
