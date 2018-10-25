//Checkout Click Function
window.onbeforeunload = function () {
    try {
        //SetCookie
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        //Get Cookie Function
        function getCookieValue(a) {
            var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
            return b ? b.pop() : '';
        }
        if (getCookieValue("chkout").length > 0) {
            setCookie("chkout", "", 365);
        }
        if (/parking/g.test(parent.frames.document.location.href)) {
            var checkoutData = parent.frames.document.querySelectorAll("div[class$='offer-card__detail-sections']")[0].innerText.replace("Decrease quantity of tickets", "").replace("Increase quantity of tickets", "").replace(" ea + Fees", "").replace("$", "").replace(" ea", "").replace(/[\n\r]/g, "-").split("-");
            var setData = checkoutData.join("|").toLowerCase();
            setCookie("chkout", setData, 365);
        }
        else {
            var checkoutData = parent.frames.document.querySelectorAll("div[class$='offer-card__detail-sections']")[0].innerText.replace("Decrease quantity of tickets", "").replace("Increase quantity of tickets", "").replace(" ea + Fees", "").replace("$", "").replace(/[\n\r]/g, "-").split("-");
            var tktinfo = parent.frames.document.querySelectorAll("div[class$='offer-card__content-item']")[0].innerText.replace(",", "-").replace(" ", "-").replace(/[\n\r]/g, "-").split(" ").join("").toLowerCase().replace("sec", "sec-").replace("row", "row-");
            var setData = checkoutData.join("|").toLowerCase();
            setCookie("chkout", setData + "|" + tktinfo, 365);
        }
        console.log("checkout data set---->" + getCookieValue("chkout"));
    }
    catch (err) {
        console.log("checkout data failed");
    }
}
