const encode = function(url)
{
    const decode = encodeURIComponent(url);
    return decode;
}


const revEncode = function(url)
{
    const revdecode = decodeURIComponent(url);
    return revdecode;
}

const text = document.querySelector("#encode-url");
const output = document.querySelector("#decode-url");
encoder = document.querySelector("#encoder");
decoder = document.querySelector("#decoder");
encoder.addEventListener('click', event => {
    output.value = encode(text.value);
});

decoder.addEventListener('click', event => {
    output.value = revEncode(text.value);
});