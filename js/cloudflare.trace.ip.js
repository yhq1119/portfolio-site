async function text(url) {
    return await fetch(url).then(res => res.text());
}

async function fetchIP() {
    let rawText = await text('https://www.cloudflare.com/cdn-cgi/trace');
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
    let ip = await rawText.match(ipRegex)[0];
    console.log(ip);
    return ip;
}

// async function getClientIP() {
//     let ip = await fetchIP();
//     return ip;
// }
