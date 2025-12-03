# Projekti 3
Sofia Sallinen & Erica Levola 

## Verkkolinkit:
Pääset julkaistuun sovellukseen käsiksi osoitteessa [Joululista](https://joululista.netlify.app/)
Linkki projektin videoesittelyyn [Videodemo](https://video.laurea.fi/media/Projekti3/0_r5eh3zk1)

## Työn jakautuminen 
Sofia loi Githubiin repositorion ja kansiot Visual Studio Codeen. Erica suunnitteli ja koodasi sovelluksen ulkoasun. 
Yhdessä teimme videodemon, nettisivun julkaisemisen sekä sovelluksen koodausta. 
Yhteistyö sujui luontevasti, koska teimme myös Projekti 2a yhdessä. 

## Oma arvio työstä ja oman osaamisen kehittymisestä
Onnistuimme jouluisen ulkoasun tekemisessä ja saimme hienoja efektejä ja donitsi diagrammin sivulle.
Parantamista olisi selkeän koodin kirjoittamisessa.
Sovellus olisi voinut toimia vielä paremmin ja olla selkeämpi.
Olemme oppineet käyttämään ulkoisia kirjastoja kuten, jQuery.
Antaisimme meille pisteitä seuraavasti: 10/10 p

## Palaute opettajalle kurssista sekä itse opetuksesta tähän saakka
Kurssi sekä lähiopetus ovat tuntuneet oikein hyvältä pidämme siitä, että on lähiopetusta ja kellonaika 12.30 on ollut hyvä. Opetusmetodit ovat olleet toimivia.
Oppimistamme tukisi vielä jos olisi vaikka jotain pienryhmiä tai tunnilla tehtäisiin yhdessä viikon tehtäviä.

## Tietoja sovelluksesta
Projekti3 on sovellus, jossa voit kirjoittaa jouluisen kauppalistan. Siellä on jquery efektejä ja huolliteltu UI. Se on tehty alunperin Erican kauppalista sovelluksen pohjalta ja sitä on muutettu erilaiseksi mutta rakenne on sama, tämä on vain jouluversio.

## Tunnetut virheet/bugit
Kysyimme Visual Studio Coden Copilotilta, jos koodistamme löytyy virheitä: 
- index.html - ei huomattavia bugeja 
- script.js - new Chart($('#statsChart'), ...) antaa Chart.js:lle jQuery-objektin, ei oikeaa <canvas>-elementtiä eikä sen 2D-piirtokontekstia. Chart.js ei osaa käyttää jQuery-wrapperia, joten se ei löydä canvas-kontekstia ja aiheuttaa ajonaikaisen virheen. 

## Kuvakaappaukset
<img width="867" height="906" alt="image" src="https://github.com/user-attachments/assets/18c20c46-a9d8-4c65-b6c1-4aa1d07613de" />


## Teknologiat
Projektissa käytettiin HTML5:ttä sovelluksen rakenteen määrittelyyn, CSS3:a jouluteemaisen ulkoasun ja animaatioiden toteuttamiseen, JavaScriptiä logiikan ja interaktioiden hallintaan, jQueryä DOM-manipulaation ja tapahtumankäsittelyn yksinkertaistamiseen, jQuery UI:ta visuaalisten efektien kuten shake-, highlight- ja drop-animaatioiden lisäämiseen, Animate.css-kirjastoa valmiiden fadeIn- ja pulse-animaatioiden hyödyntämiseen, Chart.js:ää ostettujen ja ostamattomien tuotteiden määrän visualisointiin doughnut-kaaviona sekä localStoragea tietojen pysyvään tallentamiseen selaimen muistiin, jolloin käyttäjän joululista säilyy sivun uudelleenlatauksen jälkeen.

## Asennus
Sovellus avataan suoraan Netlifyssä julkaistulla linkillä, ja sen käyttö on yksinkertaista: kirjoita tuotteen nimi lomakkeen syötekenttään ja paina Lisää, jolloin tuote ilmestyy listaan. Merkitse tuote ostetuksi valitsemalla sen vieressä oleva checkbox, poista tuote painamalla Poista-nappia, seuraa ostamattomien tuotteiden määrää laskurista sekä kaaviosta, ja muista että lista tallentuu automaattisesti selaimen localStorageen, joten se säilyy myös sivun päivityksen jälkeen.

## Kiitokset 
- Copilot (auttoi meitä korjaamaan koodiamme, kun sovellus ei ensin toiminut. Copilot myös selitti meille erilaisia keinoja toteuttaa sovellusta.) 
- [jQuery](https://jquery.com/)
- Tunnilla opetetut asiat 
- Erican valmis tekemä kauppalista (Projekti1)  

