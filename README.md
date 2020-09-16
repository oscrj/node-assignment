# Node
Skapa en webbserver som hanterar en publik respektive en privat URL. I den publika delen visas information som hämtas från en textfil, och i den privata delen (som ”skyddas” genom en kodnyckel i querystringen av URLen, exempelvis http://localhost:8080/secret?key=ALBATROSS) ska ”inloggade” kunna ändra innehållet i textfilen via ett formulär.
