# Testovi

    ./tests/run.sh

Podiže lokalni server, pokrene proveru korpe i ugasi server. Izlazni kod 0
znači da je sve prošlo.

## Šta se proverava

`cart.spec.js` — korpa mora da bude ista na sve tri stranice (početna,
stranica vina, stranica paketa). Ona živi u `localStorage` pod jednim ključem,
a čitaju je tri različita fajla; ovi testovi su jedino što ih drži usklađene.

1. Vino dodato na stranici proizvoda vidi se na početnoj (i na „nazad", i na
   svežem učitavanju).
2. I obrnuto: dodato na početnoj, vidi se na stranici proizvoda.
3. Paketi rade isto i zadrže oznaku da su paket.
4. Dodavanje sa sve tri stranice završi u jednoj korpi.
5. Isto vino dva puta je količina 2, ne dva reda.
6. Drugi otvoren tab ne sme da prikazuje stari broj.
7. Korpa preživi osvežavanje; ispražnjena ostaje prazna svuda.
8. **Povratak iz keša stranice (bfcache)** — ono što telefon radi na dugme
   „nazad", bez ponovnog pokretanja skripti. Ovo je greška koja je bila na
   produkciji.
9. Korpa starija od šest sati se briše, na svim stranicama jednako.
10. Pokvaren sadržaj u `localStorage` ne sme da obori stranicu ni da prikaže
    pogrešan broj.
11. Posle uspešne porudžbine korpa je prazna na svim stranicama.
12. Posle neuspele porudžbine korpa **ostaje**, da kupac može da pokuša opet.

`analytics.spec.js` — imena događaja i tagova koje šaljemo Clarity-ju. Na njima
su izgrađeni svi levci i filteri. Ako se ime promeni ili nestane, sajt i dalje
radi i niko se ne žali — samo levak tiho prijavljuje pogrešan broj. Ovi testovi
stoje između jedne slovne greške i mesec dana pogrešnih podataka.

Proverava se: da svako dodavanje (vino, paket, sa bilo koje stranice) okine
zajednički `u_korpu`; da checkout označi vrednost korpe, broj artikala i da li
je prešla prag za besplatnu dostavu; da odustajanje kaže **na kom koraku**; da
odbijena forma kaže **koje polje**; da uspešna porudžbina ne prijavi i
odustajanje; da neuspešna ne prijavi uspeh; i da sajt radi normalno kad je
Clarity potpuno blokiran adblockerom.

## Kad menjaš nešto oko korpe

Pokreni ovo pre nego što pušiš na produkciju. I proveri da test stvarno hvata
grešku: privremeno pokvari kod, vidi da test pukne, pa vrati.
