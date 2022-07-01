function domainName(url){
    let pattern = /(https?:\/\/)?(w{3}\.)?/;
    let domain = url.replace(pattern, '');
    let name = domain.replace(/\..+/, '');
    return name;
  }

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("google.com"));