function getQueryParams(qs) {
    qs = qs.replace(/\+/g, " ");
    var params = {},
        re = /[?&]?([^=]+)=([^&]*)/g,
        tokens;
 
    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])]
            = decodeURIComponent(tokens[2]);
    }
 
    return params;
}

console.log( getQueryParams(parent.document.location.search).artistid );
