function loadBadges () {
    let counter = '<iframe src="//incr.easrng.net/badge?key=changeme" style="background: url(//incr.easrng.net/bg.gif)" title="increment badge" width="88" height="31" frameborder="0"></iframe>\n'
    let badgeSite = '<a href="https://cyber.dabamos.de/88x31"><img src="/badges/88x31.gif" title="go here for badges" alt="88x31"></a>\n'
    let piracy = '<img src="/badges/piracy.gif" title="remember kids: always shit on adobe" alt="piracy now">\n'
    let anarchy = '<img src="/badges/anarchynow.gif" title="anarchy is rad" alt="anarchy now">\n'
    let enby = '<img src="/badges/nonbinary.png" title="funny considering i love computers" alt="nonbinary pride">\n'
    let queer = '<img src="/badges/queer.png" title="i don\'t know if i\'m gay but i am absolutely not straight" alt="queer pride">\n'
    
    let badgeHTML = counter + badgeSite + piracy + anarchy + enby + queer

    document.getElementById('footer').innerHTML += badgeHTML;
}
loadBadges();