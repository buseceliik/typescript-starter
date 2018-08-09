var caesarShift = function (text, miktar) {
    if (miktar < 0)
        return caesarShift(text, miktar + 26);
    var encryptedtext = '';
    for (var i = 0; i < text.length; i++) {
        var c = text[i];
        if (c.match(/[a-z]/i)) {
            var code = text.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + miktar) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + miktar) % 26) + 97);
        }
        encryptedtext += c;
    }
    return encryptedtext;
};
console.log(caesarShift("Buse", 3));
