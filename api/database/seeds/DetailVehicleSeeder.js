'use strict'

/*
|--------------------------------------------------------------------------
| DetailVehicleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const data = [
  {
    Marca: "Abarth",
    Tipo: "Coupe",
    Modelo: "595 Scorpione Oro",
    Nox: 0.019,
    Rendimiento: 11.6
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 1,4 Lts. Hatch Back 3P. T/M",
    Nox: 0.0049,
    Rendimiento: 12.7
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 Competizione",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 Competizione",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 Competizione",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 ESSEESE",
    Nox: 0.0163,
    Rendimiento: 12.2
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 ESSEESE",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "595 Turismo 1,4 Lts. Hatch Back 3P. T/M",
    Nox: 0.0074,
    Rendimiento: 12.7
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "695 70 Anniversario",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatch Back",
    Modelo: "695 Rivale",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Abarth",
    Tipo: "Hatchback",
    Modelo: "695 70 Anniversario",
    Nox: 0.016,
    Rendimiento: 11.5
  },
  {
    Marca: "Acura",
    Tipo: "Coupe",
    Modelo: "NSX 3,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0063,
    Rendimiento: 9.7
  },
  {
    Marca: "Acura",
    Tipo: "Sedan",
    Modelo: "ILX 2,4 T/A",
    Nox: 0.0024,
    Rendimiento: 9.2
  },
  {
    Marca: "Acura",
    Tipo: "Sedan",
    Modelo: "RLX 3,5 T/A",
    Nox: 0.0085,
    Rendimiento: 6.4
  },
  {
    Marca: "Acura",
    Tipo: "Sedan",
    Modelo: "TLX 3,5 Lts. Sedan 4P. T/A 4x4",
    Nox: 0.016,
    Rendimiento: 7.1
  },
  {
    Marca: "Acura",
    Tipo: "Sedan",
    Modelo: "TLX 3.5 Lts. Sedan T/A Otto",
    Nox: 0.01444,
    Rendimiento: 7.4
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "MDX 3,5",
    Nox: 0.0027,
    Rendimiento: 7
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "MDX 3,5 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.0027,
    Rendimiento: 7
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "MDX 3,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0027,
    Rendimiento: 7
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "MDX 3,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0027,
    Rendimiento: 7
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "MDX 3,5 Lts. T/A",
    Nox: 0.0027,
    Rendimiento: 7
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "RDX 3,5 Lts. Station Wagon T/A Otto",
    Nox: 0.0032,
    Rendimiento: 6
  },
  {
    Marca: "Acura",
    Tipo: "Station Wagon",
    Modelo: "RDX 3,5 Lts. T/A",
    Nox: 0.0032,
    Rendimiento: 6
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Coupe",
    Modelo: "4C 1,7 Lts. Coupe 2P. T/A",
    Nox: 0.038,
    Rendimiento: 10.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Coupe",
    Modelo: "4C 1,7 Lts. Coupe 2P. T/A",
    Nox: 0.038,
    Rendimiento: 10.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Coupe",
    Modelo: "4C 1,7 Lts. Coupe 2P. T/A Otto",
    Nox: 0.038,
    Rendimiento: 10.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta 1,4 Lts. 16v SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.018,
    Rendimiento: 12.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta 1,6 Lts. JTD DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.153,
    Rendimiento: 18.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta Distinctive 1,4 Lts. SOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01842,
    Rendimiento: 14.7
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta Progression 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.016,
    Rendimiento: 11.4
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta Quadrifoglio Verdi 1,7 Lts. Hatch Back TCT T/A",
    Nox: 0.02035,
    Rendimiento: 8.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Giulietta Quadrifoglio Verdi 1,7 Lts.DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.014,
    Rendimiento: 9.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito 1,4 Lts. 135 CV DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02,
    Rendimiento: 13.3
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito 1,4 Lts. 78 CV SOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02331,
    Rendimiento: 13.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito 1,4 Lts. Quadrifoglio SOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.015,
    Rendimiento: 12.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito 1,4 Lts. SOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 13.7
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito JTD 85 CV 1,2 Lts. DOHC Hatch Back 3P. T/M Motor Diesel",
    Nox: 0.14884,
    Rendimiento: 22.7
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Hatch Back",
    Modelo: "Mito SE 1,4 Lts. 78 CV Hatch Back 3P. T/M Otto",
    Nox: 0.01,
    Rendimiento: 13.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia 2.0 200cv",
    Nox: 0.01656,
    Rendimiento: 11.7
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Quadrifoglio",
    Nox: 0.03598,
    Rendimiento: 8.4
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Quadrifoglio 2,9 Lts. Sedan 4P. T/A",
    Nox: 0.0253,
    Rendimiento: 8.1
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Quadrifoglio 2,9 Lts. Sedan 4P. T/A",
    Nox: 0.0253,
    Rendimiento: 8.1
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Quadrifoglio 2,9 Lts. Sedan 4P. T/A",
    Nox: 0.03598,
    Rendimiento: 8.4
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Quadrifoglio Verdi",
    Nox: 0.01582,
    Rendimiento: 8.1
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Veloce 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0265,
    Rendimiento: 11.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Veloce 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0265,
    Rendimiento: 11.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Sedan",
    Modelo: "Giulia Veloce 280cv AT AWD",
    Nox: 0.01656,
    Rendimiento: 11.1
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Station Wagon",
    Modelo: "Stelvio 2.0 200 cv AT AWD",
    Nox: 0.02247,
    Rendimiento: 11.2
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Station Wagon",
    Modelo: "Stelvio 2.9T V6 510hp ATX AWD QV",
    Nox: 0.01982,
    Rendimiento: 8.5
  },
  {
    Marca: "Alfa Romeo",
    Tipo: "Station Wagon",
    Modelo: "Stelvio Super 280cv AT AWD",
    Nox: 0.02507,
    Rendimiento: 11.2
  },
  {
    Marca: "Aston Martin",
    Tipo: "Cabriolet",
    Modelo: "Vanquish 5,9 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.02279,
    Rendimiento: 4.7
  },
  {
    Marca: "Aston Martin",
    Tipo: "Cabriolet",
    Modelo: "Vantage 4,7 Lts. V8 DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 5.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Cabriolet",
    Modelo: "Vantage S 4,7 Lts. V8 DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 5.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Convertible",
    Modelo: "DB11 Volante 4,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.0086,
    Rendimiento: 5.6
  },
  {
    Marca: "Aston Martin",
    Tipo: "Convertible",
    Modelo: "DB9 5,9 Lts. V12 DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.01831,
    Rendimiento: 4.7
  },
  {
    Marca: "Aston Martin",
    Tipo: "Convertible",
    Modelo: "V12 Vantage S 6,0 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.01427,
    Rendimiento: 4.4
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "DB11 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0086,
    Rendimiento: 5.6
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "DB11 5,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0152,
    Rendimiento: 5
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "DB9 5,9 Lts. V12 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01831,
    Rendimiento: 4.7
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "DBS Superleggera 5,2 Coupe TA Otto",
    Nox: 0.01045,
    Rendimiento: 5.2
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "V12 Vantage S 6,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01427,
    Rendimiento: 4.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "Vanquish 5,9 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.02279,
    Rendimiento: 4.7
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "Vanquish S 5,9 Lts. Coupe 2P. T/A Otto",
    Nox: 0.02279,
    Rendimiento: 4.7
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "Vanquish S Zagato 6,0 Lts. Coupe 2P. T/A",
    Nox: 0.01943,
    Rendimiento: 5.1
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "Vantage 4,7 Lts. V8 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 5.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Coupe",
    Modelo: "Vantage S 4,7 Lts. V8 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 5.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Hatch Back",
    Modelo: "Vantage 4,0 Lts. Hatch Back 2P. T/A Otto",
    Nox: 0.00885,
    Rendimiento: 5.5
  },
  {
    Marca: "Aston Martin",
    Tipo: "Hatchback",
    Modelo: "Rapide 5,9 Lts. DOHC Hatchback 2P. T/A Motor Otto",
    Nox: 0.0115,
    Rendimiento: 5.1
  },
  {
    Marca: "Aston Martin",
    Tipo: "Hatchback",
    Modelo: "Rapide 5,9 Lts. DOHC Hatchback 4P. T/A Motor Otto",
    Nox: 0.0115,
    Rendimiento: 5.1
  },
  {
    Marca: "Aston Martin",
    Tipo: "Hatchback",
    Modelo: "Rapide S 5,9 Lts. DOHC Hatchback 4P. T/A Motor Otto",
    Nox: 0.0115,
    Rendimiento: 5.1
  },
  {
    Marca: "Aston Martin",
    Tipo: "Hatchback",
    Modelo: "Vantage 4,7 Lts. V8 DOHC Hatchback 2P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 5.3
  },
  {
    Marca: "Aston Martin",
    Tipo: "Station Wagon",
    Modelo: "Aston Martin DBX",
    Nox: 0.01189,
    Rendimiento: 6.1
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Cabriolet 2P. T/A Motor CZCA Otto",
    Nox: 0.02666,
    Rendimiento: 15.6
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "A5 1,8 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.04661,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "A5 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01748,
    Rendimiento: 11.6
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "A5 2,0 Lts. Convertible 2P. T/A 4x4 Otto",
    Nox: 0.03606,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "A5 Sportback 1,8 Lts. T-FSI DOHC Cabio 2P. T/A Motor CJEB Otto",
    Nox: 0.02142,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "R8 Spyder 4,2 Lts. FSI V8 Quattro Sonic DOHC Convertible 2P. T/A Motor CNDA Otto",
    Nox: 0.03093,
    Rendimiento: 5.1
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "R8 Spyder 5,2 Lts. FSI V10 Quattro Stronic DOHC Convertible 2P. T/A 4x4 Motor CTYA Otto",
    Nox: 0.02187,
    Rendimiento: 4.9
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "RS5 Cabrio 4,2 Lts. FSI DOHC Cabriolet 2P. T/A 4x4 Motor Otto",
    Nox: 0.01966,
    Rendimiento: 6.7
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "S5 3,0 Lts. T-FSI DOHC Cabrio 2P. T/A 4x4 Motor CGWC Otto",
    Nox: 0.00969,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "S5 V6 T Quattro Stronic 3,0 Lts. TFSI DOHC Cabriolet 2P. T/A 4x4 Motor CREC Otto",
    Nox: 0.00391,
    Rendimiento: 9.5
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "TT 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01433,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "TT 2,0 Lts. TFSI DOHC Cabriolet (Roadster) 2P. T/A Motor CESA Otto",
    Nox: 0.02385,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "TTS 2,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.01991,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Cabriolet",
    Modelo: "TTS Quattro Stronic 2,0 Lts. TFSI DOHC Roadster 2P. T/A 4x4 Motor CDLB Otto",
    Nox: 0.03085,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A3 1,4 Lts. Convertible 2P. T/A Otto",
    Nox: 0.0269,
    Rendimiento: 13
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A3 1,4 Lts. Convertible 2P. T/M Otto",
    Nox: 0.0222,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A3 2,0 Lts. Convertible 2P. T/A Diesel",
    Nox: 0.0334,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A3 2,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.0088,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A5 2,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.00905,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A5 Cabrio 40 TFSI MHEV",
    Nox: 0.00276,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A5 Cabrio 45 TFSI",
    Nox: 0.01815,
    Rendimiento: 11.1
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A5 Cabrio 45 TFSI MHEV",
    Nox: 0.00979,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "A5 Quattro 2,0 Lts., TFSI DOHC Convertible 2P. Stronic 4x4 Motor CNCD Otto",
    Nox: 0.03166,
    Rendimiento: 11.6
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "R8 5,2 Lts. Convertible 2P. T/A 4x4",
    Nox: 0.0246,
    Rendimiento: 5.9
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "S3 2,0 Lts. Convertible 2P. T/A 4x4 Otto",
    Nox: 0.01356,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "S5 3,0 Lts. Convertible 2P. T/A 4x4 Otto",
    Nox: 0.00889,
    Rendimiento: 9.5
  },
  {
    Marca: "Audi",
    Tipo: "Convertible",
    Modelo: "TTRS 2,5 Lts. Convertible 2P. T/A 4x4 Otto",
    Nox: 0.02491,
    Rendimiento: 8.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 1,8 Lts. Coupe 2P T/A Otto",
    Nox: 0.04661,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 2,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.03606,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01748,
    Rendimiento: 11.5
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00905,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Coupe 40 TFSI MHEV",
    Nox: 0.00276,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Coupe 45 TFSI",
    Nox: 0.01815,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Coupe 45 TFSI MHEV",
    Nox: 0.00979,
    Rendimiento: 12.7
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Quattro 2,0 Lts., TFSI DOHC Coupe 2P. Stronic 4x4 Motor CNCD Otto",
    Nox: 0.03166,
    Rendimiento: 11.8
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Quattro Stronic 3,0 Lts. TFSI DOHC Coupe 2P. T/A 4x4 Motor CMUA Otto",
    Nox: 0.00746,
    Rendimiento: 9.1
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 Sportback 1,8 Lts. T-FSI DOHC Coupe 3P. T/A Motor CJEB Otto",
    Nox: 0.02142,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "A5 TFSI 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.04898,
    Rendimiento: 13.3
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "R8 5,2 Lts. Coupe 2P. T/A 4x4",
    Nox: 0.0246,
    Rendimiento: 6
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "R8 5,2 Lts. FSI V10 Quattro Stronic DOHC Coupe 2P. T/A 4x4 Motor CTYA Otto",
    Nox: 0.02187,
    Rendimiento: 4.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "R8 Coupe 4,2 Lts. FSI V8 Quattro Sonic DOHC Coupe 2P. T/A Motor CNDA Otto",
    Nox: 0.03093,
    Rendimiento: 5.2
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "R8 Plus 5,2 Lts. Coupe 2P. T/A 4x4",
    Nox: 0.0246,
    Rendimiento: 5.7
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "RS5 2,9 Lts. Coupe 2P. 4x4 T/A Otto",
    Nox: 0.02552,
    Rendimiento: 8.7
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "RS5 2.9 TFSI Coupe",
    Nox: 0.00857,
    Rendimiento: 7.8
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "RS5 4,2 Lts. FSI DOHC Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.01966,
    Rendimiento: 6.7
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "S5 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.00889,
    Rendimiento: 9.8
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "S5 3,0 Lts. T-FSI DOHC Coupe 2P. T/A 4x4 Motor CGWC Otto",
    Nox: 0.00969,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "S5 V6 T Quattro Stronic 3,0 Lts. TFSI DOHC Coupe 2P. T/A 4x4 Motor CREC Otto",
    Nox: 0.00391,
    Rendimiento: 9.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TT 1,8 Lts. DOHC Coupe 3P. T/A Motor CDAA Otto",
    Nox: 0.00696,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TT 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01433,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TT 2,0 Lts. TFSI DOHC Coupe 3P. T/A Motor CESA Otto",
    Nox: 0.02385,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TTRS 2,5 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.02491,
    Rendimiento: 8.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TTRS 2,5 Lts. T-FSI Quattro DOHC Coupe 3P. 4x4 T/A Motor Otto",
    Nox: 0.00384,
    Rendimiento: 8.1
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TTS 2,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01991,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Coupe",
    Modelo: "TTS Quattro Stronic 2,0 Lts. TFSI DOHC Coupe 2P. T/A 4x4 Motor CDLB Otto",
    Nox: 0.03085,
    Rendimiento: 9.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,2 Lts. T-FSI SOHC Hatch Back 3P. T/M Motor CBZA Otto",
    Nox: 0.02094,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,2 Lts. T-FSI SOHC Hatch Back 5P. T/M Motor CBZA Otto",
    Nox: 0.02094,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,4 Lts. DOHC TFSI Hatch Back 3P. T/A 4x2 Motor CTHG Otto",
    Nox: 0.02095,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,4 Lts. DOHC TFSI Hatch Back 5P. T/A 4x2 Motor CTHG Otto",
    Nox: 0.02095,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,4 Lts. TFSI DOHC Hatch Back 3P. T/M Motor CAXA Otto",
    Nox: 0.01915,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 1,4 Lts. TFSI DOHC Hatch Back 5P. T/M Motor CAXA Otto",
    Nox: 0.01915,
    Rendimiento: 14.5
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 Sportback 30 TFSI",
    Nox: 0.01679,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 Sportback 35 TFSI",
    Nox: 0.01812,
    Rendimiento: 14.3
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 TFSI 1,4 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.02778,
    Rendimiento: 14.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A1 TFSI 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.02778,
    Rendimiento: 14.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. TFSI DOHC Hatch Back 3P. T/A Motor CJZA Otto",
    Nox: 0.01755,
    Rendimiento: 16.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. TFSI DOHC Hatch Back 3P. T/M Motor CJZA Otto",
    Nox: 0.01907,
    Rendimiento: 16.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. TFSI DOHC Hatch Back 5P. T/A Motor CJZA Otto",
    Nox: 0.01755,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. TFSI DOHC Hatch Back 5P. T/M Motor CJZA Otto",
    Nox: 0.01907,
    Rendimiento: 16.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. Turbo TFSI Hatch Back 3P. T/A Motor CYVB Otto",
    Nox: 0.01666,
    Rendimiento: 16.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. Turbo TFSI Hatch Back 3P. T/M Motor CYVB Otto",
    Nox: 0.01605,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. Turbo TFSI Hatch Back 5P. T/A Motor CYVB Otto",
    Nox: 0.01666,
    Rendimiento: 16.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,2 Lts. Turbo TFSI Hatch Back 5P. T/M Motor CYVB Otto",
    Nox: 0.01605,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0269,
    Rendimiento: 13
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0222,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0269,
    Rendimiento: 13
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0222,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. TFSI DOHC Hatch Back 3P. T/A Motor CXSA Otto",
    Nox: 0.01726,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. TFSI DOHC Hatch Back 3P. T/M Motor CXSA Otto",
    Nox: 0.02655,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. TFSI DOHC Hatch Back 5P. T/A Motor CXSA Otto",
    Nox: 0.01726,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. TFSI DOHC Hatch Back 5P. T/M Motor CXSA Otto",
    Nox: 0.02655,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. TFSI DOHC Sportback 4P. T/A DSG Motor CMBA Otto",
    Nox: 0.01726,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Hatch Back 3P. T/A Motor CZCA Otto",
    Nox: 0.02666,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Hatch Back 3P. T/M Motor CZCA Otto",
    Nox: 0.02175,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Hatch Back 5P. T/A Motor CZCA Otto",
    Nox: 0.02666,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Hatch Back 5P. T/M Motor CZCA Otto",
    Nox: 0.02175,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,8 Lts. TFSI DOHC Hatch Back 3P. T/M Motor CJSA Otto",
    Nox: 0.00985,
    Rendimiento: 10.3
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,8 Lts. TFSI DOHC Hatch Back 5P. T/M Motor CJSA Otto",
    Nox: 0.00985,
    Rendimiento: 10.3
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 1,8 Lts. TFSI DOHC Sportback 4P. T/A DSG Motor CJSA Otto",
    Nox: 0.0161,
    Rendimiento: 10.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 Lts. Hatch Back 3P. T/A Diesel",
    Nox: 0.0334,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0088,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 Lts. Hatch Back 5P. T/A Diesel",
    Nox: 0.0334,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0088,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 LTS. TDI DOHC HatchBack 3P. T/A Motor CRBC Diesel",
    Nox: 0.141,
    Rendimiento: 18.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A3 2,0 LTS. TDI DOHC SportBack 5P. T/A Motor CRBC Diesel",
    Nox: 0.141,
    Rendimiento: 18.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 1,8 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.04661,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.03606,
    Rendimiento: 12.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00905,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.01748,
    Rendimiento: 12
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 Quattro 2,0 Lts., TFSI DOHC HatchBack 5P. Stronic 4x4 Motor CNCD Otto",
    Nox: 0.03166,
    Rendimiento: 11.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 Quattro Stronic 3,0 Lts. TFSI DOHC Hatch Back 5P. T/A 4x4 Motor CMUA Otto",
    Nox: 0.00746,
    Rendimiento: 9.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 Sportback 1,8 Lts. T-FSI DOHC Hatch Back 5P. T/A Motor CJEB Otto",
    Nox: 0.02142,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A5 Sportback 40 TFSI MHEV",
    Nox: 0.00276,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A7 3,0 Lts. TDI DOHC Hatch Back 5 T/A 4x4 Motor CDUD Diesel",
    Nox: 0.1272,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "A7 3,0T Lts. FSI DOHC Sportback 5P. T/A 4x4 Motor CGWD Otto",
    Nox: 0.0138,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "RS3 2,5 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.02416,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "RS7 Sportback 4,0 Lts. TFSI DOHC Hatch Back 5P. T/A 4x4 Motor CRDB Otto",
    Nox: 0.00926,
    Rendimiento: 7.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S1 2,0 Lts. Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01794,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S1 2,0 Lts. Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01794,
    Rendimiento: 10.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S3 2,0 Lts. Hatch Back 3P. T/A 4x4 Otto",
    Nox: 0.01356,
    Rendimiento: 12.3
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S3 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.01356,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S3 2,0 Lts. TFSI Quattro Stronic DOHC Hatch Back 3P. T/A Motor CJXC Otto",
    Nox: 0.01023,
    Rendimiento: 11.2
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S3 2,0 Lts. TFSI Quattro Stronic DOHC Hatch Back 5P. T/A Motor CJXC Otto",
    Nox: 0.01023,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S5 3,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.00889,
    Rendimiento: 9.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S5 Sportback 3,0 Lts. T-FSI DOHC Hatch Back 5P. T/A 4x4 Motor CGWC Otto",
    Nox: 0.00969,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatch Back",
    Modelo: "S7 4,0 Lts. T-FSI DOHC Hatch Back 5P. 4x4 T/A Motor CEUC Otto",
    Nox: 0.01665,
    Rendimiento: 7.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A1 1,4 Lts. TFSI DOHC Hatchback 3P. T/A Motor CAXA Otto",
    Nox: 0.01495,
    Rendimiento: 12.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A1 Sportback 1,4 Lts. TFSI DOHC Hatchback 5P. T/A Motor Caxa Otto",
    Nox: 0.01495,
    Rendimiento: 12.4
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A1 TFSI 1,4 Lts. Hatchback 3P. T/A Otto",
    Nox: 0.02181,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A1 TFSI 1,4 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.02181,
    Rendimiento: 15.6
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A5 Sportback TFSI 2,0 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.04898,
    Rendimiento: 12.7
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "A7 Quattro Sportback 3,0 Lts. T DOHC Hatchback 5P. T/A 4x4 Motor CREC Otto",
    Nox: 0.0052,
    Rendimiento: 9.9
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "RS5 2.9 TFSI Sportback",
    Nox: 0.00857,
    Rendimiento: 7.8
  },
  {
    Marca: "Audi",
    Tipo: "Hatchback",
    Modelo: "S5 V6 T Sportback 3,0 Lts. TFSI DOHC Hatchback 5P. T/A  4x4 Motor CREC Otto",
    Nox: 0.00391,
    Rendimiento: 9.8
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01605,
    Rendimiento: 15.9
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,2 Lts. TFSI DOHC Sedan 4P. T/A Motor CJZA Otto",
    Nox: 0.01755,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0269,
    Rendimiento: 13
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0222,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,4 Lts. TFSI DOHC Sedan 4P. T/A Motor CXSA Otto",
    Nox: 0.01726,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,4 Lts. Turbo TFSI DOHC Sedan 4P. T/A Motor CZCA Otto",
    Nox: 0.02666,
    Rendimiento: 16.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 1,8 Lts. TFSI DOHC Sedan 4P. T/A ASG Motor CJSA Otto",
    Nox: 0.0161,
    Rendimiento: 10.7
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0334,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0088,
    Rendimiento: 12.9
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A3 2,0 LTS. TDI DOHC Sedan 4P. T/A Motor CRBC Diesel",
    Nox: 0.141,
    Rendimiento: 18.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.03171,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 1,8 Lts. T-FSI DOHC Sedan 4P. T/A Motor CDHA Otto",
    Nox: 0.01467,
    Rendimiento: 13
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 1,8 Lts. T-FSI DOHC Sedan 4P. T/A Motor CJEB Otto",
    Nox: 0.02142,
    Rendimiento: 14.3
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.1274,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00352,
    Rendimiento: 15.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 2,0 Lts. TDI DOHC Sedan 4P. T/A Motor CAGA Diesel",
    Nox: 0.10788,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 2,0 Lts. TDI DOHC Sedan 4P. T/A Motor CJCA Diesel",
    Nox: 0.1788,
    Rendimiento: 12.3
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 2,0 Lts. TFSI DOHC Sedan 4P. T/A Motor CNDC Otto",
    Nox: 0.04898,
    Rendimiento: 13.3
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 35 TFSI",
    Nox: 0.00396,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 40 TFSI",
    Nox: 0.00431,
    Rendimiento: 12.8
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A4 Allroad Quattro Stronic 2,0 Lts., TFSI DOHC Sedan 4P. T/A Motor CNCD Otto",
    Nox: 0.03166,
    Rendimiento: 11.8
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A5 Sportback 45 TFSI",
    Nox: 0.01815,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A5 Sportback 45 TFSI MHEV",
    Nox: 0.00979,
    Rendimiento: 12.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.1241,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 2,0 Lts. T-FSI DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01648,
    Rendimiento: 12.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 2,0 Lts. TDI DOHC Sedan 4P. T/A Motor CGLC Diesel",
    Nox: 0.1398,
    Rendimiento: 16.7
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 3,0 Lts. T-FSI DOHC Sedan 4P. 4x4 T/A Motor CGWD Otto",
    Nox: 0.0138,
    Rendimiento: 9.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 3,0 Lts. TDI DOHC Sedan 4P. 4x4 T/A Motor CDUC Diesel",
    Nox: 0.12216,
    Rendimiento: 13.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 40 TDI",
    Nox: 0.10072,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 40 TFSI",
    Nox: 0.00558,
    Rendimiento: 13.3
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 45 TFSI",
    Nox: 0.01066,
    Rendimiento: 11.9
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 T Quattro 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00672,
    Rendimiento: 10.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A6 Ultra 1,8 Lts. T DOHC Sedan 4P. T/A Motor CYGA Otto",
    Nox: 0.01127,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A8 3,0 Lts. T-FSi DOHC Sedan 4P. T/A 4x4 Motor CGWA Otto",
    Nox: 0.01438,
    Rendimiento: 8.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "A8 Quattro 3,0 Lts. TFSI DOHC Sedan 4P. T/A 4x4 Motor CREA Otto",
    Nox: 0.01109,
    Rendimiento: 9.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "RS3 2,5 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.02416,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "RS7 4,0 Lts. Sedan 5P. T/A 4x4 Otto",
    Nox: 0.01171,
    Rendimiento: 7.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S3 2,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01356,
    Rendimiento: 12
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S3 2,0 Lts. TFSI Quattro Stronic DOHC Sedan 4P. T/A Motor CJXC Otto",
    Nox: 0.01023,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S4 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00889,
    Rendimiento: 10.2
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S4 3,0 Lts. TFSI DOHC Sedan 4P. T/A 4x4 Motor CGWC Otto",
    Nox: 0.00746,
    Rendimiento: 9.1
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S6 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01488,
    Rendimiento: 7.6
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S6 4,0 Lts. T-FSI DOHC Sedan 4P. 4x4 T/A Motor CEUC Otto",
    Nox: 0.01665,
    Rendimiento: 7.4
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S7 4,0 Lts. Sedan 5P. T/A 4x4 Otto",
    Nox: 0.01488,
    Rendimiento: 7.6
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S8 4,0 Lts. Sedan 4P. T/A",
    Nox: 0.02263,
    Rendimiento: 7.3
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S8 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0171,
    Rendimiento: 7.5
  },
  {
    Marca: "Audi",
    Tipo: "Sedan",
    Modelo: "S8 4,0 Lts. T-FSI DOHC Sedan 4P. 4x4 T/A Motor CGTA Otto",
    Nox: 0.01754,
    Rendimiento: 6.9
  },
  {
    Marca: "Audi",
    Tipo: "Sportback",
    Modelo: "Q5 45 TFSI Sportback",
    Nox: 0.01456,
    Rendimiento: 10.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 Quattro T 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor CNCD Otto",
    Nox: 0.02979,
    Rendimiento: 10.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A3 1,4 Lts. TFSI DOHC Station Wagon 2P. T/A DSG Motor CMBA Otto",
    Nox: 0.01726,
    Rendimiento: 16.1
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A3 1,8 Lts. TFSI DOHC Station Wagon 2P. T/A DSG Motor CJSA Otto",
    Nox: 0.0161,
    Rendimiento: 10.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 1,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.03171,
    Rendimiento: 14.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.1274,
    Rendimiento: 14.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00352,
    Rendimiento: 14.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 2,0 Lts. TFSI DOHC Station Wagon 5P. T/A Motor CNDC Otto",
    Nox: 0.04898,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 35 TFSI Avant",
    Nox: 0.00396,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 40 TFSI Avant",
    Nox: 0.00431,
    Rendimiento: 12.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 Allroad Quattro Stronic 2,0 Lts., TFSI DOHC Station Wagon 4P. T/A Motor CNCD Otto",
    Nox: 0.03166,
    Rendimiento: 11.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 Avant 1,8 Lts. T-FSI DOHC Station Wagon 5P. T/A Motor CJEB Otto",
    Nox: 0.02142,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A4 Avant 2,0 Lts. TDI DOHC Station Wagon 5P. T/A Motor CAGA Diesel",
    Nox: 0.10788,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.1241,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 3,0 Lts. T-FSI DOHC Station Wagon (Allroad) 5P. 4x4 T/A Motor CGWD Otto",
    Nox: 0.0138,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 40 TDI Avant",
    Nox: 0.10072,
    Rendimiento: 15.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 40 TFSI Avant",
    Nox: 0.00558,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 45 TFSI Avant",
    Nox: 0.01066,
    Rendimiento: 11.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 Allroad 3,0 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CDUC Diesel",
    Nox: 0.12216,
    Rendimiento: 13.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "A6 Avant 3,0 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CDUC Diesel",
    Nox: 0.12216,
    Rendimiento: 13.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q2 1,4 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0227,
    Rendimiento: 13.4
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q2 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00924,
    Rendimiento: 12.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q2 35 TFSI",
    Nox: 0.0197,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 1,4 Lts. TFSI DOHC Station Wagon 5P. T/A Motor CHPB Otto",
    Nox: 0.02388,
    Rendimiento: 12.8
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.1422,
    Rendimiento: 13.2
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.13806,
    Rendimiento: 13.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 2,0 Lts. T-FSI DOHC Station Wagon T/A 4x4 Motor CPSA Otto",
    Nox: 0.02157,
    Rendimiento: 9.8
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 2,0 Lts. TDI DOHC Station Wagon T/A 4x4 Motor CFGC Diesel",
    Nox: 0.12733,
    Rendimiento: 14.1
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 35 TFSI",
    Nox: 0.02326,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 35 TFSI Sportback",
    Nox: 0.02326,
    Rendimiento: 10.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 40 TFSI",
    Nox: 0.01857,
    Rendimiento: 10
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 40 TFSI Sportback",
    Nox: 0.01857,
    Rendimiento: 9.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 T 1,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0284,
    Rendimiento: 10.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q3 T 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00579,
    Rendimiento: 12.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 2,0 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.01813,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01816,
    Rendimiento: 11.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 2,0 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CGLB Diesel",
    Nox: 0.04684,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 2,0 Lts. Tdi DOHC Station Wagon 5P. 4x4 T/A Motor CGLC Diesel",
    Nox: 0.05876,
    Rendimiento: 13.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 3,0 Lts. DOHC TDI Quattro Stronic Station Wagon 5P. T/A 4x4 Motor CDUC Diesel",
    Nox: 0.14175,
    Rendimiento: 13.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 3,0 Lts. T-FSI DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.01013,
    Rendimiento: 8.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 3,0 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CCWA Diesel",
    Nox: 0.15817,
    Rendimiento: 10.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 40 TDI",
    Nox: 0.0423,
    Rendimiento: 18.2
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 45 TFSI",
    Nox: 0.01456,
    Rendimiento: 10.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q5 Quattro 3,0 T/A Station Wagon",
    Nox: 0.01013,
    Rendimiento: 8.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 2,0 Lts. Station Wagon 5P. 4x4 T/A Otto",
    Nox: 0.02142,
    Rendimiento: 11
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 3,0 Lts. DOHC TDI Station Wagon 5P. 4x4 T/A Motor CRCA Diesel",
    Nox: 0.12356,
    Rendimiento: 11.4
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 3,0 Lts. Station Wagon 5 Asientos 5P. T/A Otto",
    Nox: 0.01078,
    Rendimiento: 10.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.12591,
    Rendimiento: 13.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 3,0 Lts. Station Wagon 7 Asientos 5P. T/A Otto",
    Nox: 0.01078,
    Rendimiento: 10.4
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 55 TFSI",
    Nox: 0.00513,
    Rendimiento: 8.8
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 55 TFSI (7P)",
    Nox: 0.00513,
    Rendimiento: 8.7
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 Quattro 3,0 Lt. Station Wagon T/A 4x4",
    Nox: 0.03042,
    Rendimiento: 6.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 V6 T Quattro 3,0 Lts. TFSI DOHC Station Wagon 5P. T/A 4x4 Motor CJTB Otto",
    Nox: 0.03042,
    Rendimiento: 6.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q7 V6 T Quattro 3,0 Lts. TFSI DOHC Station Wagon 5P. T/A 4x4 Motor CJTC Otto",
    Nox: 0.03042,
    Rendimiento: 6.9
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q8 3,0 Aut.",
    Nox: 0.02929,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q8 3,0T AWD",
    Nox: 0.0191,
    Rendimiento: 6.1
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q8 45 TDI",
    Nox: 0.11524,
    Rendimiento: 10.8
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "Q8 55 TFSI",
    Nox: 0.02929,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS Q3 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01841,
    Rendimiento: 8.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS Q3 2,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01841,
    Rendimiento: 8.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS Q3 Quattro Stronic 2,5 Lts. TFSI DOHC Station Wagon 5P. T/A 4x4 Motor CTSA Otto",
    Nox: 0.02119,
    Rendimiento: 8.1
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS4 2,9 Lts. Station Wagon 5P. T/A",
    Nox: 0.0408,
    Rendimiento: 8.6
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS4 4,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00816,
    Rendimiento: 6.8
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "RS6 4,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01171,
    Rendimiento: 7.5
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "S4 3,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00889,
    Rendimiento: 10
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "SQ5 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01476,
    Rendimiento: 9.3
  },
  {
    Marca: "Audi",
    Tipo: "Station Wagon",
    Modelo: "SQ5 Quattro 3,0 Lts. TFSI DOHC Station Wagon 5P. T/A 4x4 Motor CTXA Otto",
    Nox: 0.01013,
    Rendimiento: 8.7
  },
  {
    Marca: "Baic",
    Tipo: "Furgon Cerrado",
    Modelo: "Grand Plus 1,2 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0121,
    Rendimiento: 11
  },
  {
    Marca: "Baic",
    Tipo: "Furgon cerrado",
    Modelo: "Plus 1,2 Lts. DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00835,
    Rendimiento: 12.5
  },
  {
    Marca: "Baic",
    Tipo: "Hatch Back",
    Modelo: "UP (D20) 1,3 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0039,
    Rendimiento: 12.3
  },
  {
    Marca: "Baic",
    Tipo: "Hatch Back",
    Modelo: "UP 1,3 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.007,
    Rendimiento: 12.5
  },
  {
    Marca: "Baic",
    Tipo: "Hatch Back",
    Modelo: "UP 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0168,
    Rendimiento: 12
  },
  {
    Marca: "Baic",
    Tipo: "Jeep",
    Modelo: "Zoom 2,4 Lts. Tipo Jeep 3P. T/M Otto",
    Nox: 0.02005,
    Rendimiento: 6.6
  },
  {
    Marca: "Baic",
    Tipo: "Sedan",
    Modelo: "Advance 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0174,
    Rendimiento: 11.8
  },
  {
    Marca: "Baic",
    Tipo: "Sedan",
    Modelo: "UP (D20) 1,3 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0039,
    Rendimiento: 12.3
  },
  {
    Marca: "Baic",
    Tipo: "Sedan",
    Modelo: "UP 1,3 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.007,
    Rendimiento: 12.5
  },
  {
    Marca: "Baic",
    Tipo: "Sedan",
    Modelo: "UP 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0168,
    Rendimiento: 12
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X25 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0038,
    Rendimiento: 11
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X25 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0055,
    Rendimiento: 11.6
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X35 (BJ7150U3BAB) 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01095,
    Rendimiento: 10.6
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X35 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.00545,
    Rendimiento: 11.4
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X35 1.5 MPI MT",
    Nox: 0.026,
    Rendimiento: 11.5
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X55 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0237,
    Rendimiento: 10.6
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X55 1.5T AT",
    Nox: 0.0267,
    Rendimiento: 10.5
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X55 1.5T MT",
    Nox: 0.01955,
    Rendimiento: 10.5
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X55 T 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01865,
    Rendimiento: 11.3
  },
  {
    Marca: "Baic",
    Tipo: "Station Wagon",
    Modelo: "X65 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0168,
    Rendimiento: 8.1
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT 6,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.01792,
    Rendimiento: 4.6
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT Speed 6,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.01792,
    Rendimiento: 4.5
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT V8 4,0 Lts. Convertible 2P. T/A Motor Otto",
    Nox: 0.01974,
    Rendimiento: 6.3
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT Convertible",
    Nox: 0.01468,
    Rendimiento: 5.8
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT V8 Convertible",
    Nox: 0.01631,
    Rendimiento: 6.6
  },
  {
    Marca: "Bentley",
    Tipo: "Convertible",
    Modelo: "Continental GT V8 S 4.0 T/A",
    Nox: 0.01974,
    Rendimiento: 6.2
  },
  {
    Marca: "Bentley",
    Tipo: "Coupe",
    Modelo: "Continental GT 6,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01792,
    Rendimiento: 4.6
  },
  {
    Marca: "Bentley",
    Tipo: "Coupe",
    Modelo: "Continental GT Speed 6,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01792,
    Rendimiento: 4.6
  },
  {
    Marca: "Bentley",
    Tipo: "Coupe",
    Modelo: "Continental GT V8 S 4,0 Lts. Coupe 2P. T/A Motor Otto",
    Nox: 0.01974,
    Rendimiento: 6.5
  },
  {
    Marca: "Bentley",
    Tipo: "Coupe",
    Modelo: "Continental GT W12",
    Nox: 0.01608,
    Rendimiento: 6
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur",
    Nox: 0.0176,
    Rendimiento: 5.4
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01974,
    Rendimiento: 6.3
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur 6,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01792,
    Rendimiento: 4.5
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur 6,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01792,
    Rendimiento: 4.5
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur 6,0 Lts. Sedan T/A",
    Nox: 0.01765,
    Rendimiento: 4.5
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Flying Spur W12 6,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01792,
    Rendimiento: 4.5
  },
  {
    Marca: "Bentley",
    Tipo: "Sedan",
    Modelo: "Mulsanne 6,8 Lts. Sedan T/A",
    Nox: 0.02126,
    Rendimiento: 4.4
  },
  {
    Marca: "Bentley",
    Tipo: "Station Wagon",
    Modelo: "Bentayga 6,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01938,
    Rendimiento: 5.3
  },
  {
    Marca: "Bentley",
    Tipo: "Station Wagon",
    Modelo: "Bentayga V8 4,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0229,
    Rendimiento: 6.4
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "220i 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0222,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "220i 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01405,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "325i 2,5 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0231,
    Rendimiento: 7.9
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "420i 2,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.0121,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "420i 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0121,
    Rendimiento: 11.6
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "420i Cabrio",
    Nox: 0.01956,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "428i 2,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "430i 2,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.0178,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "430i Cabrio",
    Nox: 0.01371,
    Rendimiento: 12.5
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "435i 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0093,
    Rendimiento: 9.8
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "440i 3,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.0049,
    Rendimiento: 9.9
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "640I 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0094,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "650I 4,4 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0232,
    Rendimiento: 7.8
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "M235i 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0124,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "M4 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0224,
    Rendimiento: 8.7
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "M440i xDrive Cabrio",
    Nox: 0.01002,
    Rendimiento: 9.4
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "M6 4,4 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0075,
    Rendimiento: 7
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "M850i xDrive 4,4 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.01346,
    Rendimiento: 6.7
  },
  {
    Marca: "BMW",
    Tipo: "Cabriolet",
    Modelo: "Z4 sDrive20i 2,0 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.0106,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Convertible",
    Modelo: "M 240i Cabrio 3,0 Lts. Convertible 2P. T/A",
    Nox: 0.0087,
    Rendimiento: 9.1
  },
  {
    Marca: "BMW",
    Tipo: "Convertible",
    Modelo: "M8 Cabrio",
    Nox: 0.01563,
    Rendimiento: 6.7
  },
  {
    Marca: "BMW",
    Tipo: "Convertible",
    Modelo: "M8 Cabrio Competition",
    Nox: 0.01563,
    Rendimiento: 6.7
  },
  {
    Marca: "BMW",
    Tipo: "Convertible",
    Modelo: "Z4 M40i",
    Nox: 0.01921,
    Rendimiento: 10.2
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "320i 2,0 Lts. Coupe T/A",
    Nox: 0.0117,
    Rendimiento: 8.7
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "220i 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01405,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "220i 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0222,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "325i 2,5 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0231,
    Rendimiento: 8.3
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "420i 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.0121,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "420i 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "420i Coupe",
    Nox: 0.01956,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "428i 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "430i 2,0 Lts Coupe 2P. T/A",
    Nox: 0.0178,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "430i Coupe",
    Nox: 0.01371,
    Rendimiento: 12.5
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "435i 3,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0093,
    Rendimiento: 9.8
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "440i 3,0 Lts. Coupe 2P. T/A",
    Nox: 0.0049,
    Rendimiento: 9.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "640I 3,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0094,
    Rendimiento: 9.7
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "650I 4,4 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0232,
    Rendimiento: 8.1
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "I8 1,5 Lts. Coupe 3P. T/A 4x4 Hibrido",
    Nox: 0.00527,
    Rendimiento: 23.8
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "i8 PHEV 1,5 Lts. DOHC Coupe 2P. T/A Motor Otto, Vehiculo Hibrido Electrico",
    Nox: 0.0069,
    Rendimiento: 0
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M 240i 3,0 Lts. Coupe 2P. T/A",
    Nox: 0.0087,
    Rendimiento: 9.1
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M2 3,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0095,
    Rendimiento: 9.5
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M2 Competition 3,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01864,
    Rendimiento: 8.1
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M2 CS Coupe",
    Nox: 0.0226,
    Rendimiento: 7.5
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M235i 3,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0124,
    Rendimiento: 9.7
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4 3,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0224,
    Rendimiento: 9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4 Competition",
    Nox: 0.01385,
    Rendimiento: 7.6
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4 CS 3,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01165,
    Rendimiento: 7.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4 GTS 3,0 Lts. Coupe 2P. T/A",
    Nox: 0.0218,
    Rendimiento: 8.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4 GTS Coupe T/A",
    Nox: 0.0218,
    Rendimiento: 8.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M440i xDrive Coupe",
    Nox: 0.01002,
    Rendimiento: 9.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M4GTS 3,0 Lts. Coupe T/A Otto",
    Nox: 0.0218,
    Rendimiento: 8.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M6 4,4 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0075,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M8 Coupe",
    Nox: 0.01563,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M8 Coupe Competition",
    Nox: 0.01563,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M850i xDrive 4,4 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01346,
    Rendimiento: 6.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "M850i xDrive Gran Coupe",
    Nox: 0.01346,
    Rendimiento: 6.9
  },
  {
    Marca: "BMW",
    Tipo: "Coupe",
    Modelo: "Z4 sDrive 35i 3,0 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.0119,
    Rendimiento: 7
  },
  {
    Marca: "BMW",
    Tipo: "Electrico",
    Modelo: "i3 Hatch Back 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "114i 1,6 Lts. DOHC Hacth Back 3P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "114i 1,6 Lts. DOHC Hacth Back 5P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116d 1,5 Lts. Hatch Back 5P. T/A Diesel",
    Nox: 0.01567,
    Rendimiento: 24.4
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116d 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1618,
    Rendimiento: 16.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116d 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1122,
    Rendimiento: 18.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116i 1,5 Lts. TM",
    Nox: 0.0101,
    Rendimiento: 15.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116i 1,6 Lts. DOHC Hacth Back 3P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116i 1,6 Lts. DOHC Hacth Back 5P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116i 1,6 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0086,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "116i 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0086,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d 2,0 Lts. DOHC Hatch Back 3P. T/A Motor Diesel",
    Nox: 0.1661,
    Rendimiento: 11.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d 2,0 Lts. DOHC Hatch Back 3P. T/M Motor Diesel",
    Nox: 0.12755,
    Rendimiento: 18.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d 2,0 Lts. Hatch Back 3P. T/A Diesel",
    Nox: 0.1471,
    Rendimiento: 18.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d 2,0 Lts. Hatch Back 5P T/A Diesel",
    Nox: 0.1471,
    Rendimiento: 18.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d HatchBack",
    Nox: 0.1454,
    Rendimiento: 17.2
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118d Hatchback",
    Nox: 0.00663,
    Rendimiento: 21.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,5 Lts. Hatch Back 3P. T/A",
    Nox: 0.004,
    Rendimiento: 11.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,5 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 13.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,5 Lts. Hatch Back 5P. T/A",
    Nox: 0.004,
    Rendimiento: 11.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 13.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,6 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0096,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0096,
    Rendimiento: 14.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "118i Hatchback",
    Nox: 0.0072,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120d 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1185,
    Rendimiento: 19.2
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120d 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1649,
    Rendimiento: 12.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120d Hatchback",
    Nox: 0.00779,
    Rendimiento: 20.6
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120i 1.6 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0193,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120i 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0161,
    Rendimiento: 11.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "120i 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0161,
    Rendimiento: 11.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "125i 2,0 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "i3 120Ah",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "i3 94Ah Hatch Back 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "I3s 120Ah",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M 135i / F21 3,0 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.00104,
    Rendimiento: 9.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M 140i 3,0 Lts. Hatch Back 3P. T/A",
    Nox: 0.0087,
    Rendimiento: 9.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M 140i 3,0 Lts. Hatch Back 5P. T/A",
    Nox: 0.0087,
    Rendimiento: 9.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M135i 3,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0093,
    Rendimiento: 9
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M135i xDrive",
    Nox: 0.01,
    Rendimiento: 10.8
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "M235i xDrive Gran Coupe",
    Nox: 0.01,
    Rendimiento: 10.8
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "Mini Cooper F56",
    Nox: 0.0067,
    Rendimiento: 16.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatch Back",
    Modelo: "Mini Cooper F56",
    Nox: 0.0067,
    Rendimiento: 16.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatchback",
    Modelo: "120i 1,6 Lts. Hatchback 3P. T/A Otto",
    Nox: 0.0096,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Hatchback",
    Modelo: "120i 1,6 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.0096,
    Rendimiento: 14.1
  },
  {
    Marca: "BMW",
    Tipo: "Hatchback",
    Modelo: "120i Hatchback",
    Nox: 0.01039,
    Rendimiento: 12.7
  },
  {
    Marca: "BMW",
    Tipo: "Hatchback",
    Modelo: "128ti Hatchback",
    Nox: 0.00639,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Hatchback",
    Modelo: "BMW 125d 2,0 Lts. Hatchback 5P. T/A Diesel",
    Nox: 0.1497,
    Rendimiento: 13.1
  },
  {
    Marca: "BMW",
    Tipo: "Limusina",
    Modelo: "730d 3,0 Lts. Limusina 4P. T/A Diesel",
    Nox: 0.13728,
    Rendimiento: 17
  },
  {
    Marca: "BMW",
    Tipo: "Limusina",
    Modelo: "740i 3,0 Lts. Limusina 4P. T/A Otto",
    Nox: 0.0222,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Limusina",
    Modelo: "750Li 4,4 Lts. Limusina 4P. T/A Otto",
    Nox: 0.022,
    Rendimiento: 8.4
  },
  {
    Marca: "BMW",
    Tipo: "Roadster",
    Modelo: "I8 1,5 Lts. Roadster 3P. T/A 4x4 Hibrido",
    Nox: 0.00527,
    Rendimiento: 23.8
  },
  {
    Marca: "BMW",
    Tipo: "Roadster",
    Modelo: "Z4 M40i",
    Nox: 0.02048,
    Rendimiento: 7.9
  },
  {
    Marca: "BMW",
    Tipo: "Roadster",
    Modelo: "Z4 sDrive20i",
    Nox: 0.01391,
    Rendimiento: 9.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "218i Gran Coupe",
    Nox: 0.01635,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "220d Gran Coupe",
    Nox: 0.00779,
    Rendimiento: 20.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "220i Gran Coupe",
    Nox: 0.01039,
    Rendimiento: 12.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "316i 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0086,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "318i 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0109,
    Rendimiento: 16.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d 2,0 DOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.1536,
    Rendimiento: 13.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d 2,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.154,
    Rendimiento: 18.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d 2,0 Lts. Sedan 4P T/A Diesel",
    Nox: 0.1531,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0144,
    Rendimiento: 20.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d EDE 2,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1488,
    Rendimiento: 18.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320d Sedan",
    Nox: 0.0075,
    Rendimiento: 21.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320i 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0072,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320i 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0114,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320i 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0124,
    Rendimiento: 11.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "320i Sedan",
    Nox: 0.0146,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "328i 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "330e Iperformance 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.0102,
    Rendimiento: 29
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "330e Sedan",
    Nox: 0.00795,
    Rendimiento: 14.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "330e Sedan",
    Nox: 0.03175,
    Rendimiento: 11.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "330i 2,0 Lts. Sedan 4P T/A Otto",
    Nox: 0.01219,
    Rendimiento: 9.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "330i 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.011,
    Rendimiento: 11.2
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "335i 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0093,
    Rendimiento: 9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "340i 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0223,
    Rendimiento: 11.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "418i Gran Coupe 1,5 Lts. Sedan 4P T/A Otto",
    Nox: 0.005,
    Rendimiento: 12.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "420i GC 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "420i Grand Coupe 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0121,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "428i GC 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "430i Grand Coupe 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0178,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "435i GC 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0093,
    Rendimiento: 9.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "440i Grand Coupe 3,0 Lts. Sedan 4P. T/A",
    Nox: 0.0049,
    Rendimiento: 9.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520d 2,0 DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1153,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520d 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.1419,
    Rendimiento: 17.2
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520d 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.1604,
    Rendimiento: 17.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520d Sedan",
    Nox: 0.00773,
    Rendimiento: 20.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520i 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0086,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520i 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0223,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520i Sedan",
    Nox: 0.01499,
    Rendimiento: 11.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "520i Sedan",
    Nox: 0.0144,
    Rendimiento: 11.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "528i 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0086,
    Rendimiento: 12
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530d 3,0 DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.117,
    Rendimiento: 12.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530d 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1516,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530d 3,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.1561,
    Rendimiento: 15.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530d Sedan",
    Nox: 0.0085,
    Rendimiento: 16.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530e iPerformance 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.009,
    Rendimiento: 28.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530e Sedan",
    Nox: 0.00722,
    Rendimiento: 19.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530i 2,0 Lts. Sedan 4P T/A Otto",
    Nox: 0.02216,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530i 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0147,
    Rendimiento: 10.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "530i Sedan",
    Nox: 0.01225,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "535I 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0082,
    Rendimiento: 8.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "540i 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00945,
    Rendimiento: 9.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "540i Sedan",
    Nox: 0.01562,
    Rendimiento: 10.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "540i Sedan TA",
    Nox: 0.01562,
    Rendimiento: 10.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "550i 4,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0137,
    Rendimiento: 6.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "640I GC 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0094,
    Rendimiento: 9.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "650I GC 4,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0232,
    Rendimiento: 8.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730-d.",
    Nox: 0.1598,
    Rendimiento: 12.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730-Ld.",
    Nox: 0.1598,
    Rendimiento: 12.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730d 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.14783,
    Rendimiento: 11.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730d 3,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.13728,
    Rendimiento: 17
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730d Sedan",
    Nox: 0.00945,
    Rendimiento: 16.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730I 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "730Ld Sedan",
    Nox: 0.00945,
    Rendimiento: 16.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740e iPerformance 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.0092,
    Rendimiento: 17.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740e iPerformance 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.0092,
    Rendimiento: 17.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740i 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0077,
    Rendimiento: 9.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740i 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0222,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740i Sedan",
    Nox: 0.02075,
    Rendimiento: 7.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740le iPerformance 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.0092,
    Rendimiento: 16.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "740Li Sedan",
    Nox: 0.02075,
    Rendimiento: 7.3
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "745e Sedan",
    Nox: 0.01921,
    Rendimiento: 19.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "745Le Sedan",
    Nox: 0.01921,
    Rendimiento: 19.5
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "750i 4,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0175,
    Rendimiento: 8.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "750i 4,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.022,
    Rendimiento: 8.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "750i xDrive",
    Nox: 0.01715,
    Rendimiento: 6.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "750Li 4,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.022,
    Rendimiento: 8.4
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "750Li xDrive",
    Nox: 0.01715,
    Rendimiento: 7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "ActiveHybrid 7 4,4 Lts. DOHC Sedan 4P. T/A, Vehiculo Electrico Hibrido",
    Nox: 0.0258,
    Rendimiento: 7.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M3 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0224,
    Rendimiento: 9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M3 Competition",
    Nox: 0.01385,
    Rendimiento: 7.6
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M3 CS 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01165,
    Rendimiento: 7.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M340i xDrive",
    Nox: 0.01474,
    Rendimiento: 10
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M5 4,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0075,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M5 4,4 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.0229,
    Rendimiento: 6.9
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M5 Competition",
    Nox: 0.01289,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M5 Sedan",
    Nox: 0.01289,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M550i xDrive",
    Nox: 0.01797,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M550i xDrive 4,4 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.0209,
    Rendimiento: 7.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M6 4,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0075,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M8 Gran Coupe",
    Nox: 0.01563,
    Rendimiento: 6.7
  },
  {
    Marca: "BMW",
    Tipo: "Sedan",
    Modelo: "M8 Gran Coupe Competition",
    Nox: 0.01563,
    Rendimiento: 6.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "218d Active Tourer 2,0 Lts. Station Wagon 5P. T/A  Diesel",
    Nox: 0.157,
    Rendimiento: 18
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "218i Active Tourer 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0146,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "320d GT 2,0 Lts. Station Wagon T/A Otto",
    Nox: 0.14713,
    Rendimiento: 17.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "320d GT 2,0 Lts. Station Wagon T/A Otto",
    Nox: 0.14713,
    Rendimiento: 17.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "320i Gran Turismo",
    Nox: 0.0261,
    Rendimiento: 13.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "320i GT 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0072,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "328i GT 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0201,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "335i xDrive GT 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0081,
    Rendimiento: 8.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "528i xDrive 2,0 Lts. Station Wagon T/A Otto",
    Nox: 0.0264,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "535i xDrive GT 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0074,
    Rendimiento: 9.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive 18d 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.1033,
    Rendimiento: 18.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive 20i 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0122,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive18d",
    Nox: 0.02142,
    Rendimiento: 19
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive18d LCI",
    Nox: 0.1547,
    Rendimiento: 16.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive18i",
    Nox: 0.0203,
    Rendimiento: 12.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive18i LCI",
    Nox: 0.0203,
    Rendimiento: 12.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20d 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1219,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20d 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.107,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20i",
    Nox: 0.00899,
    Rendimiento: 12.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20i 2,0 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0207,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20i 2,0i Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 sDrive20i LCI",
    Nox: 0.00899,
    Rendimiento: 12.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive18d 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1219,
    Rendimiento: 14.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive18d 2,0 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.13435,
    Rendimiento: 18.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20d",
    Nox: 0.1478,
    Rendimiento: 17.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20d 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1219,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20d 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.107,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20d 2,0 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.13435,
    Rendimiento: 17
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20i 2,0 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0207,
    Rendimiento: 13
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20i 2,0i Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive20i LCI",
    Nox: 0.01154,
    Rendimiento: 11.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X1 xDrive28i 2,0i Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 M35i",
    Nox: 0.01268,
    Rendimiento: 10.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 sDrive 18i",
    Nox: 0.0203,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 sDrive18d",
    Nox: 0.1547,
    Rendimiento: 16.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 sDrive18d",
    Nox: 0.02142,
    Rendimiento: 19
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 sDrive20i 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0157,
    Rendimiento: 12.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 xDrive20d 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.1525,
    Rendimiento: 17.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X2 xDrive20i",
    Nox: 0.0171,
    Rendimiento: 12.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 3,5i DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0058,
    Rendimiento: 8.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 M Station Wagon",
    Nox: 0.00349,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 M40d",
    Nox: 0.13061,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 M40i",
    Nox: 0.01219,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 M40i 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0125,
    Rendimiento: 8.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 sDrive 20i",
    Nox: 0.01345,
    Rendimiento: 11.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 sDrive18d 2,0 Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Diesel",
    Nox: 0.1409,
    Rendimiento: 17.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 sDrive20i 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0203,
    Rendimiento: 10.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 sDrive20i 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0141,
    Rendimiento: 11.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive 2,0dA DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.1435,
    Rendimiento: 16.4
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive 20d 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.14143,
    Rendimiento: 17.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 XDRIVE 28i 2,0 T/A",
    Nox: 0.0173,
    Rendimiento: 11.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive20d",
    Nox: 0.00584,
    Rendimiento: 16.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive20d 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.1409,
    Rendimiento: 18.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 Xdrive20d 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Diesel",
    Nox: 0.1185,
    Rendimiento: 14.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive20d 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01409,
    Rendimiento: 11.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive20i 2,0i Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive28i 2,0i Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30d",
    Nox: 0.00675,
    Rendimiento: 14.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30d 3,0 Lts. DOHC Sation Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.14357,
    Rendimiento: 14.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30d 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.11758,
    Rendimiento: 14.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30e",
    Nox: 0.01599,
    Rendimiento: 19
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30i",
    Nox: 0.01824,
    Rendimiento: 11.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X3 xDrive30i 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0128,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 M Station Wagon",
    Nox: 0.00349,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 M40d",
    Nox: 0.13061,
    Rendimiento: 13.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 M40i",
    Nox: 0.01219,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 M40i 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0123,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 M40i 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0125,
    Rendimiento: 8.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive 20i",
    Nox: 0.01437,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive 20i 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive 28i 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive 30d 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.14357,
    Rendimiento: 16.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive20d",
    Nox: 0.00584,
    Rendimiento: 16.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive20d 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.1409,
    Rendimiento: 18.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive20d 2,0 Lts. Station Wagon 4P. T/A Diesel",
    Nox: 0.13269,
    Rendimiento: 17.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive20i 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01409,
    Rendimiento: 11.4
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive30d",
    Nox: 0.00675,
    Rendimiento: 14.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive30i",
    Nox: 0.01824,
    Rendimiento: 11.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive30i 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0134,
    Rendimiento: 11
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X4 xDrive35i 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0123,
    Rendimiento: 9.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M 4,4, Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0139,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M Competition",
    Nox: 0.01547,
    Rendimiento: 5.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M Station Wagon",
    Nox: 0.01547,
    Rendimiento: 5.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M50d 3.0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0417,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M50i",
    Nox: 0.01757,
    Rendimiento: 6.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 M50i 7 Asientos",
    Nox: 0.01757,
    Rendimiento: 6.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 sDrive 25d 2,0 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.0255,
    Rendimiento: 12.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 sDrive 25d 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.1021,
    Rendimiento: 14.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 sDrive 30d 3,0 DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.1313,
    Rendimiento: 11.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive 30d 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.14807,
    Rendimiento: 14.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive 50i 5,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0135,
    Rendimiento: 7.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive25d",
    Nox: 0.01234,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive25d",
    Nox: 0.04053,
    Rendimiento: 14.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive25d 3rd Row",
    Nox: 0.01234,
    Rendimiento: 15.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive25d 7 asientos",
    Nox: 0.04053,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive30d",
    Nox: 0.02098,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive30d",
    Nox: 0.01205,
    Rendimiento: 13.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive30d 3row",
    Nox: 0.01205,
    Rendimiento: 13.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive30d, 7 Asientos",
    Nox: 0.02098,
    Rendimiento: 12.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive35i 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0107,
    Rendimiento: 7.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive35i 3,0 Lts. Station Wagon 5P. 7 Asientos T/A 4x4 Otto",
    Nox: 0.0126,
    Rendimiento: 8.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive40d 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.11985,
    Rendimiento: 14.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive40e iPerformance 2,0 Lts. Station Wagon 5P. T/A Hibrido 4x4",
    Nox: 0.00951,
    Rendimiento: 13.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive40i 3,0 Lts. Station Wagon 5P. 5 asientos T/A 4x4 Otto",
    Nox: 0.01559,
    Rendimiento: 8.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 XDrive40i 3,0 Lts. Station Wagon 5P. 7 asientos T/A 4x4 Otto",
    Nox: 0.01559,
    Rendimiento: 8.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X5 xDrive45e",
    Nox: 0.0132,
    Rendimiento: 21.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 M 4,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0139,
    Rendimiento: 6.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 M Competition",
    Nox: 0.01547,
    Rendimiento: 5.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 M Station Wagon",
    Nox: 0.01547,
    Rendimiento: 5.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 M50d 3,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0417,
    Rendimiento: 13.9
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 M50i",
    Nox: 0.01757,
    Rendimiento: 6.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive 30d 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.0525,
    Rendimiento: 14.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive 35i 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0126,
    Rendimiento: 8.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive 50i 4,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02725,
    Rendimiento: 7.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive30d",
    Nox: 0.01366,
    Rendimiento: 13.3
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive30d",
    Nox: 0.01205,
    Rendimiento: 13.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive30d 3,0 Lts. DOHC Station Wagon 5P. T/A",
    Nox: 0.1327,
    Rendimiento: 11.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive35i 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0107,
    Rendimiento: 7.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive40d 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.11985,
    Rendimiento: 14.1
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive40i.",
    Nox: 0.01913,
    Rendimiento: 9.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6 xDrive50i 4,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0111,
    Rendimiento: 5.7
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X6M 4,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0147,
    Rendimiento: 5.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 M50i 7 Asientos",
    Nox: 0.0144,
    Rendimiento: 6.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 M50i.",
    Nox: 0.0144,
    Rendimiento: 6.5
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDdrive40i (6 asientos)",
    Nox: 0.02508,
    Rendimiento: 8.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDdrive40i (7 asientos)",
    Nox: 0.02508,
    Rendimiento: 8.8
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDrive30d",
    Nox: 0.00973,
    Rendimiento: 13.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDrive30d 6 Asientos",
    Nox: 0.00973,
    Rendimiento: 13.6
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDrive30d 6 Asientos",
    Nox: 0.03253,
    Rendimiento: 13.2
  },
  {
    Marca: "BMW",
    Tipo: "Station Wagon",
    Modelo: "X7 xDrive30d 7 Asientos",
    Nox: 0.03253,
    Rendimiento: 13.2
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX5 1,8 Lts. Station Wagon 4P. T/A 4x2 Otto",
    Nox: 0.01635,
    Rendimiento: 7.7
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX5 1,8 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.012,
    Rendimiento: 8.2
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX7 2,0 Lts. Station Wagon 5P. 5 pasajeros T/A Otto",
    Nox: 0.01355,
    Rendimiento: 7.9
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX7 2,0 Lts. Station Wagon 5P. 7 pasajeros T/A Otto",
    Nox: 0.01355,
    Rendimiento: 7.9
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX7 2,0 Lts. Station Wagon 5P., 5 Pasajeros T/A 4x4 Otto",
    Nox: 0.017,
    Rendimiento: 7.6
  },
  {
    Marca: "Borgward",
    Tipo: "Station Wagon",
    Modelo: "BX7 2,0 Lts. Station Wagon 5P., 7 Pasajeros T/A 4x4 Otto",
    Nox: 0.017,
    Rendimiento: 7.6
  },
  {
    Marca: "Brilliance",
    Tipo: "Camioneta",
    Modelo: "T30 1.5 Camioneta C/S 2P",
    Nox: 0.021,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Camioneta",
    Modelo: "T32 (SY1020LC4AP) 1,3 Lts. Camioneta Doble Cabina 4P. T/M Otto",
    Nox: 0.0205,
    Rendimiento: 8.3
  },
  {
    Marca: "Brilliance",
    Tipo: "Camioneta",
    Modelo: "T32 1.5 Camioneta D/C 4P",
    Nox: 0.021,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Camioneta",
    Modelo: "T50 1.5 Camioneta C/S 2P",
    Nox: 0.0235,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Camioneta",
    Modelo: "T52 1.5 Camioneta D/C 4P",
    Nox: 0.0235,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Furgon",
    Modelo: "H2L 2,8 Lts. CRDi Furgon 4P. TM Diesel",
    Nox: 0.1929,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Furgon",
    Modelo: "X30 1.5 Furgon 2P",
    Nox: 0.021,
    Rendimiento: 9.4
  },
  {
    Marca: "Brilliance",
    Tipo: "Hatch Back",
    Modelo: "H220 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.011,
    Rendimiento: 11.2
  },
  {
    Marca: "Brilliance",
    Tipo: "Hatch Back",
    Modelo: "H320 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0161,
    Rendimiento: 11.6
  },
  {
    Marca: "Brilliance",
    Tipo: "Minibus",
    Modelo: "H2L 2,8 Lts. CRDi Escolar Minibus 23 Asientos 4P. TM Diesel",
    Nox: 0.1929,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Minibus",
    Modelo: "H2L 2,8 Lts. CRDi Minibus 13 Asientos 4P. TM Diesel",
    Nox: 0.1929,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Minibus",
    Modelo: "H2L 2,8 Lts. CRDi Minibus 14 Asientos 4P. TM Diesel",
    Nox: 0.1929,
    Rendimiento: 7.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Sedan",
    Modelo: "Euphoria T 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0213,
    Rendimiento: 10.9
  },
  {
    Marca: "Brilliance",
    Tipo: "Sedan",
    Modelo: "H230 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.011,
    Rendimiento: 11.2
  },
  {
    Marca: "Brilliance",
    Tipo: "Sedan",
    Modelo: "H330 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0161,
    Rendimiento: 11.6
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "Brilliance V3 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0074,
    Rendimiento: 10.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "Konect",
    Nox: 0.0192,
    Rendimiento: 10.3
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "Konect",
    Nox: 0.03487,
    Rendimiento: 10.4
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "V3 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.03395,
    Rendimiento: 9.8
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "V3S 1,5T Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0226,
    Rendimiento: 9
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "V3S Turbo 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.02345,
    Rendimiento: 11.1
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "V5 T 1,5 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0213,
    Rendimiento: 10.9
  },
  {
    Marca: "Brilliance",
    Tipo: "Station Wagon",
    Modelo: "V7 1.6T T/A",
    Nox: 0.0231,
    Rendimiento: 10.6
  },
  {
    Marca: "Buick",
    Tipo: "Sedan",
    Modelo: "Regal 2.0 AUT",
    Nox: 0.01007,
    Rendimiento: 7.8
  },
  {
    Marca: "Buick",
    Tipo: "Station Wagon",
    Modelo: "Envision AWD",
    Nox: 0.01255,
    Rendimiento: 7.4
  },
  {
    Marca: "BYD",
    Tipo: "Electrico",
    Modelo: "E6 Automovil  4P. TA Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Furgon Cerrado",
    Modelo: "BYD T3",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Hatch Back",
    Modelo: "e6 Hatch Back 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Hatch Back",
    Modelo: "F0 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0136,
    Rendimiento: 13
  },
  {
    Marca: "BYD",
    Tipo: "Hatch Back",
    Modelo: "S1 1,5 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0174,
    Rendimiento: 10.7
  },
  {
    Marca: "BYD",
    Tipo: "Hatch Back",
    Modelo: "S1 1,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0145,
    Rendimiento: 10.6
  },
  {
    Marca: "BYD",
    Tipo: "Sedan",
    Modelo: "e5 Sedan 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Sedan",
    Modelo: "F3 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0215,
    Rendimiento: 11.2
  },
  {
    Marca: "BYD",
    Tipo: "Sedan",
    Modelo: "F3 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0145,
    Rendimiento: 10.6
  },
  {
    Marca: "BYD",
    Tipo: "Sedan",
    Modelo: "New F3 1,5 Lts DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.02385,
    Rendimiento: 11.3
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "BYD M3",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "BYD S5 1,5 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0247,
    Rendimiento: 8.1
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "BYD Tang EV",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "BYD Tang EV STE",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "S5 1,5 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.0286,
    Rendimiento: 9
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "S6 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0032,
    Rendimiento: 8.6
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "S6 2,4 Lts. DOHC Station Wagon 5P. T/A DCT Motor Otto",
    Nox: 0.01495,
    Rendimiento: 7.3
  },
  {
    Marca: "BYD",
    Tipo: "Station Wagon",
    Modelo: "S6 2,4 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.03375,
    Rendimiento: 8.4
  },
  {
    Marca: "Cadillac",
    Tipo: "Sedan",
    Modelo: "CT6 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.01007,
    Rendimiento: 7.8
  },
  {
    Marca: "Cadillac",
    Tipo: "Sedan",
    Modelo: "CT6 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 6.5
  },
  {
    Marca: "Cadillac",
    Tipo: "Sedan",
    Modelo: "CTS V 6,2 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0137,
    Rendimiento: 5.1
  },
  {
    Marca: "Cadillac",
    Tipo: "Sedan",
    Modelo: "XTS-L Limousine 3,6 Lts. Sedan 4P. T/A",
    Nox: 0.0147,
    Rendimiento: 5.5
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade 6,2 Lts. Station Wagon 5P. T/A",
    Nox: 0.00684,
    Rendimiento: 5.5
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade 6,2 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0102,
    Rendimiento: 5.6
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade 6,2 Lts. Station Wagon TA Otto",
    Nox: 0.00687,
    Rendimiento: 5.5
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade 6,2 Lts. T/A",
    Nox: 0.0175,
    Rendimiento: 5.1
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade 6.2 TA",
    Nox: 0.00375,
    Rendimiento: 5.2
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade ESV 4WD Platinum 6,2 Lts. T/A",
    Nox: 0.00687,
    Rendimiento: 5.5
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "Escalade ESV 6,2 T/A",
    Nox: 0.0175,
    Rendimiento: 5.1
  },
  {
    Marca: "Cadillac",
    Tipo: "Station Wagon",
    Modelo: "XT5 3,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.0035,
    Rendimiento: 6.5
  },
  {
    Marca: "Caterham",
    Tipo: "Roadster",
    Modelo: "Seven 485 Sport 2,0 T/M",
    Nox: 0.019,
    Rendimiento: 9.8
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "Hunter 1.9 T/M 4x2",
    Nox: 0.1881,
    Rendimiento: 8.8
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "Hunter 1.9 T/M 4x4",
    Nox: 0.1881,
    Rendimiento: 8.8
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MD 201 1,2 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.00865,
    Rendimiento: 11.1
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MD 201 Cargo Box 1,2 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.00865,
    Rendimiento: 11.1
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MD201 1,2 Lts. DOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01045,
    Rendimiento: 11.6
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MD201 1,5 Lts. Camioneta Cabina Simple 2P. T/M Otto",
    Nox: 0.0163,
    Rendimiento: 10
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MS 201 1,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.00865,
    Rendimiento: 11.1
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "MS 201 Cargo Box 1,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.00865,
    Rendimiento: 11.1
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "S100 1,0 Lts. DOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.0087,
    Rendimiento: 10.8
  },
  {
    Marca: "Changan",
    Tipo: "Camioneta",
    Modelo: "S200 1,0 Lts. DOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.0087,
    Rendimiento: 10.8
  },
  {
    Marca: "Changan",
    Tipo: "Furgon Cerrado",
    Modelo: "G10 1,5 Lts. Furgon Techo Alto 4P. T/M Otto",
    Nox: 0.03935,
    Rendimiento: 9.5
  },
  {
    Marca: "Changan",
    Tipo: "Furgon Cerrado",
    Modelo: "G10 1,5 Lts. Furgon Techo Bajo 5P. T/M Otto",
    Nox: 0.03935,
    Rendimiento: 9.5
  },
  {
    Marca: "Changan",
    Tipo: "Furgon cerrado",
    Modelo: "M201 1,2 Lts. DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.01045,
    Rendimiento: 11.6
  },
  {
    Marca: "Changan",
    Tipo: "Hatch Back",
    Modelo: "CS1 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0087,
    Rendimiento: 11.5
  },
  {
    Marca: "Changan",
    Tipo: "Hatch Back",
    Modelo: "CS15 1,5 Lts. Hatch Back 5P. T/M",
    Nox: 0.0078,
    Rendimiento: 11.2
  },
  {
    Marca: "Changan",
    Tipo: "Hatch Back",
    Modelo: "CS15 1.5 T/A",
    Nox: 0.0019,
    Rendimiento: 10.1
  },
  {
    Marca: "Changan",
    Tipo: "Hatch Back",
    Modelo: "CS15 1.5 T/M",
    Nox: 0.00325,
    Rendimiento: 11.2
  },
  {
    Marca: "Changan",
    Tipo: "Hatch Back",
    Modelo: "CV1 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0062,
    Rendimiento: 13.6
  },
  {
    Marca: "Changan",
    Tipo: "Hatchback",
    Modelo: "EADO XT 1,6 Lts. DOHC Hatchback 5P T/M Motor Otto",
    Nox: 0.01515,
    Rendimiento: 9.6
  },
  {
    Marca: "Changan",
    Tipo: "Minivan",
    Modelo: "M 201 1,2 Lts. Minivan 7 Asientos 4P. T/M Otto",
    Nox: 0.01065,
    Rendimiento: 11.6
  },
  {
    Marca: "Changan",
    Tipo: "Sedan",
    Modelo: "Alsvin 1.4 T/M",
    Nox: 0.0115,
    Rendimiento: 12.2
  },
  {
    Marca: "Changan",
    Tipo: "Sedan",
    Modelo: "Alsvin 1.5 T/A",
    Nox: 0.0113,
    Rendimiento: 10.7
  },
  {
    Marca: "Changan",
    Tipo: "Sedan",
    Modelo: "CV2 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01305,
    Rendimiento: 10.1
  },
  {
    Marca: "Changan",
    Tipo: "Sedan",
    Modelo: "EADO 1,6 Lts. DOHC Sedan 4P T/M Motor Otto",
    Nox: 0.01515,
    Rendimiento: 9.6
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "A500 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.03335,
    Rendimiento: 10.8
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0145,
    Rendimiento: 10.1
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.02045,
    Rendimiento: 10.9
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0236,
    Rendimiento: 9.1
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0173,
    Rendimiento: 10.2
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 Plus 1,6 Lts. Station Wagon 5P T/A Otto",
    Nox: 0.0236,
    Rendimiento: 10.4
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 Plus 1,6 Lts. Station Wagon 5P T/M Otto",
    Nox: 0.0091,
    Rendimiento: 11.1
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS35 Plus 1.4 Turbo T/A",
    Nox: 0.0103,
    Rendimiento: 9.3
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS55 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0181,
    Rendimiento: 9.4
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS55 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01095,
    Rendimiento: 9.4
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS75 1,8 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0118,
    Rendimiento: 7.7
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CS75 2,0 Lts. DOHC Station Wagon 5P T/M Motor Otto",
    Nox: 0.02385,
    Rendimiento: 8.1
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CX70 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01055,
    Rendimiento: 9.6
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CX70T 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0228,
    Rendimiento: 9
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "CX70T 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01975,
    Rendimiento: 9.3
  },
  {
    Marca: "Changan",
    Tipo: "Station Wagon",
    Modelo: "X70 A 1,5 T/M",
    Nox: 0.01645,
    Rendimiento: 10.3
  },
  {
    Marca: "Changhe",
    Tipo: "Hatch Back",
    Modelo: "Spla 1,4 Lts. VVT DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0181,
    Rendimiento: 13.4
  },
  {
    Marca: "Chery",
    Tipo: "Hatch Back",
    Modelo: "Fulwin 2 1,5 Lts., SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0081,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Hatch Back",
    Modelo: "New IQ 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0043,
    Rendimiento: 13.1
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 3 1,5 Lts. Sedan 4P. T/M Motor Otto",
    Nox: 0.01185,
    Rendimiento: 9.8
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 5 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.02125,
    Rendimiento: 9.9
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 5 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0026,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 6 CVT",
    Nox: 0.01385,
    Rendimiento: 10.2
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 6 MT",
    Nox: 0.02423,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 7 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0063,
    Rendimiento: 10.3
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Arrizo 7 1,6 Lts. DOHC Sedan 4P. T/A CVT Motor Otto",
    Nox: 0.00585,
    Rendimiento: 9.7
  },
  {
    Marca: "Chery",
    Tipo: "Sedan",
    Modelo: "Fulwin 2 1,5 Lts., SOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0081,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Beat 1,3 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0103,
    Rendimiento: 12.2
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Grand Tiggo 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0138,
    Rendimiento: 10.2
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Grand Tiggo 2,0 Lts. DOHC Station Wagon 5P. T/A tipo CVT Motor Otto",
    Nox: 0.01855,
    Rendimiento: 8.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Grand Tiggo 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.02065,
    Rendimiento: 9.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "K60 MT",
    Nox: 0.0165,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 1,6 Lts. DOHC Station Wagon 5P. 4x2 T/M Motor Otto",
    Nox: 0.01175,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0116,
    Rendimiento: 10.3
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GL MT",
    Nox: 0.00207,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GL MT PRO",
    Nox: 0.00207,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GLS CVT",
    Nox: 0.00999,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GLS CVT PRO",
    Nox: 0.00999,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GLS MT",
    Nox: 0.00207,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GLS MT PRO",
    Nox: 0.00207,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 GLX MT PRO",
    Nox: 0.00207,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 PRO 1.0T GLS CVT",
    Nox: 0.026,
    Rendimiento: 13.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 PRO 1.0T GLS MT",
    Nox: 0.02612,
    Rendimiento: 12.2
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 PRO 1.0T GLX CVT",
    Nox: 0.026,
    Rendimiento: 13.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2 PRO 1.0T GLX MT",
    Nox: 0.02612,
    Rendimiento: 12.2
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 2,0 Lts. DOHC Station Wagon 4P. AWD 4x4 T/M Motor Otto",
    Nox: 0.01825,
    Rendimiento: 8.5
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1,5L MT",
    Nox: 0.01235,
    Rendimiento: 11
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1,6 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.01175,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1,6 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.01235,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1.5L CVT",
    Nox: 0.0094,
    Rendimiento: 9.9
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1.5L GLS CVT",
    Nox: 0.00813,
    Rendimiento: 10.6
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 3 1.5L GLX CVT",
    Nox: 0.00813,
    Rendimiento: 10.6
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 1,5 Lts. Turbo Station Wagon 5P. T/A DCT",
    Nox: 0.0146,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 1,5 Lts. Turbo Station Wagon 5P. T/M Otto",
    Nox: 0.00995,
    Rendimiento: 10.8
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 1.5T 1,5 Lts. Station Wagon 5P. T/M",
    Nox: 0.00995,
    Rendimiento: 10.8
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 2,0 Lts. Station Wagon 5P. T/A CVT",
    Nox: 0.0115,
    Rendimiento: 9
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 2,0 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0115,
    Rendimiento: 9
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 2,0 Lts. Station Wagon 5P. T/M",
    Nox: 0.01415,
    Rendimiento: 8.8
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 4 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01415,
    Rendimiento: 8.8
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 5X 1,5 Lts. Turbo Station Wagon 5P. T/A DCT Otto",
    Nox: 0.0146,
    Rendimiento: 10.4
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 7 1,5 Lts. Turbo Station Wagon 5P. T/A DCT Otto",
    Nox: 0.0148,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 7 1,5 Lts. Turbo Station Wagon 5P. T/M Otto",
    Nox: 0.0223,
    Rendimiento: 10
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 7 GLS CVT Pro",
    Nox: 0.01185,
    Rendimiento: 8.9
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 7 GLX CVT Pro",
    Nox: 0.01185,
    Rendimiento: 8.9
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 8 DCT",
    Nox: 0.01343,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 8 MT",
    Nox: 0.01005,
    Rendimiento: 10.1
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo 8 Pro GLX DCT",
    Nox: 0.00977,
    Rendimiento: 11.3
  },
  {
    Marca: "Chery",
    Tipo: "Station Wagon",
    Modelo: "Tiggo AT 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01435,
    Rendimiento: 8.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Cabriolet",
    Modelo: "Camaro RS 2,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.0101,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Cabriolet",
    Modelo: "Camaro SS 6,2 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.02812,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Cabriolet",
    Modelo: "Corvette 6,2 Lts. Cabriolet T/A Otto",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,5 Lts. 4P. T/A Otto",
    Nox: 0.0052,
    Rendimiento: 7.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Cabina Simple 2P. T/A 4x2 Diesel",
    Nox: 0.2097,
    Rendimiento: 8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Cabina Simple 2P. T/A 4x4 Diesel",
    Nox: 0.2097,
    Rendimiento: 8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Cabina Simple 2P. T/M 4x2 Diesel",
    Nox: 0.197,
    Rendimiento: 9.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Cabina Simple 2P. T/M 4x4 Diesel",
    Nox: 0.197,
    Rendimiento: 9.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Diesel",
    Nox: 0.2097,
    Rendimiento: 8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.2097,
    Rendimiento: 8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.197,
    Rendimiento: 9.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 2,8 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.197,
    Rendimiento: 9.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Colorado 3,6 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0078,
    Rendimiento: 6.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "D-Max 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/A 4x2 Motor Diesel",
    Nox: 0.1671,
    Rendimiento: 9.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "D-Max 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/A 4x4 Motor Diesel",
    Nox: 0.1671,
    Rendimiento: 9.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "D-Max E5 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.2195,
    Rendimiento: 11.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "D-Max E5 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2195,
    Rendimiento: 11.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Montana 1,8 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.00545,
    Rendimiento: 9.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "S10 3,6 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Otto",
    Nox: 0.0034,
    Rendimiento: 6.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "S10 3,6 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0034,
    Rendimiento: 6.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado 1500 6,2 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0037,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado 3.0L AT10 4x2",
    Nox: 0.04585,
    Rendimiento: 9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado 3.0L AT10 4x4",
    Nox: 0.04585,
    Rendimiento: 9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado 4,3 Lts. Camioneta T/A",
    Nox: 0.0043,
    Rendimiento: 5.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado Cabina Simple 5,3 Lts. Pick Up 4P. T/A 4x4",
    Nox: 0.01373,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC 5,3 Lts. Camioneta Doble Cabina 4P. AT10 4x4",
    Nox: 0.01381,
    Rendimiento: 6.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC 5,3 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.01381,
    Rendimiento: 7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC 5,3 Lts. Pick Up 4P. T/A 4x4 Otto",
    Nox: 0.00625,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC 5,3 Lts. SOHC Pick Up Cabina Extendida 4P. 4x4 T/A Motor Otto",
    Nox: 0.0083,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC 5,3 Lts. SOHC Pick Up Doble Cabina 4P. 4x4 T/A Motor Otto",
    Nox: 0.0083,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC LTZ 3.0 T/A 4x2",
    Nox: 0.03535,
    Rendimiento: 9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado CC LTZ 3.0 TD A/T 4x4",
    Nox: 0.03535,
    Rendimiento: 9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado EC 5,3 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.01381,
    Rendimiento: 7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado EC 5,3 Lts. Pick Up 4P. T/A 4x4 Otto",
    Nox: 0.00625,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado LTZ CC 6,2 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.0034,
    Rendimiento: 5.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 4,3 Lts. Camioneta Cabina Regular 2P. T/A 4x2 Otto",
    Nox: 0.00319,
    Rendimiento: 5.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 4,3 Lts. Camioneta Cabina Simple 2P. T/A 4x4 Otto",
    Nox: 0.00319,
    Rendimiento: 5.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. Camioneta Cabina Simple 2P. T/A 4x2 Otto",
    Nox: 0.01381,
    Rendimiento: 7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. Camioneta Cabina Simple 2P. T/A 4x4 Otto",
    Nox: 0.01381,
    Rendimiento: 7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. Pick Up 2P. T/A 4x2",
    Nox: 0.01373,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. Pick Up 2P. T/A 4x2 Otto",
    Nox: 0.00625,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. Pick Up 2P. T/A 4x4 Otto",
    Nox: 0.00625,
    Rendimiento: 5.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. SOHC Pick Up Cabina Simple 2P. 4x2 T/A Motor Otto",
    Nox: 0.0083,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Camioneta",
    Modelo: "Silverado RC 5,3 Lts. SOHC Pick Up Cabina Simple 2P. 4x4 T/A Motor Otto",
    Nox: 0.0083,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Convertible",
    Modelo: "Camaro 3,6 Lts. Convertible T/A",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Convertible",
    Modelo: "Camaro SS 6,2 Lts. Convertible 2P. T/A Otto",
    Nox: 0.00437,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Convertible",
    Modelo: "Camaro SS 6,2 Lts. Convertible 2P. T/A Otto",
    Nox: 0.01687,
    Rendimiento: 5.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Convertible",
    Modelo: "Corvette Z06 6,2 T/A",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 1LT 2,0 Lts. Coupe T/A",
    Nox: 0.0068,
    Rendimiento: 8.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 2,0 Coupe 2P. T/A Otto",
    Nox: 0.0051,
    Rendimiento: 8.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.01007,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.01013,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 2,0 Lts. Coupe 2P. T/M",
    Nox: 0.01013,
    Rendimiento: 7.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 2,0 Lts. Coupe 2P. T/M",
    Nox: 0.01013,
    Rendimiento: 7.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro 3,6 Lts. Coupe 2P. T/A",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro LT 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.0051,
    Rendimiento: 8.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.0051,
    Rendimiento: 8.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.01007,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 3,6 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 3.6 Lts. Coupe T/A",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 3.6 Lts. T/A Coupe Otto",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro RS 3.6 Lts. T/A Coupe Otto",
    Nox: 0.00875,
    Rendimiento: 6.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro SS 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01687,
    Rendimiento: 5.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro SS 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00437,
    Rendimiento: 5.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro SS 6,2 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.02812,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro SS 6,2 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.02812,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro ZL1 6,2 Lts. Coupe 2P. T/A",
    Nox: 0.025,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro ZL1 6,2 Lts. OHV Coupe 2P. T/A Motor Otto",
    Nox: 0.025,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Camaro ZL1 6,2 Lts. OHV Coupe 2P. T/M Motor Otto",
    Nox: 0.025,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette",
    Nox: 0.00463,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe 2P. T/A",
    Nox: 0.0126,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe 2P. T/A",
    Nox: 0.01688,
    Rendimiento: 5.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe T/A",
    Nox: 0.0056,
    Rendimiento: 5.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe T/A",
    Nox: 0.0056,
    Rendimiento: 5.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe T/A",
    Nox: 0.0056,
    Rendimiento: 5.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe T/A Otto",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6,2 Lts. Coupe T/A Otto",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette 6.2 Lts. Coupe T/A Otto",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A",
    Nox: 0.00119,
    Rendimiento: 5.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A",
    Nox: 0.0126,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0126,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0119,
    Rendimiento: 5.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0126,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0126,
    Rendimiento: 5.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0119,
    Rendimiento: 5.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. Coupe T/A",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. T/A",
    Nox: 0.0038,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 Lts. T/A",
    Nox: 0.01875,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 T/A",
    Nox: 0.01875,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6,2 T/A",
    Nox: 0.01875,
    Rendimiento: 4.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Stingray 6.2",
    Nox: 0.01025,
    Rendimiento: 5.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Z06 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0141,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Z06 6,2 Lts. Coupe 2P. T/A Otto",
    Nox: 0.02,
    Rendimiento: 4.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Coupe",
    Modelo: "Corvette Z06 6,2 Lts. Coupe T/M",
    Nox: 0.0056,
    Rendimiento: 5.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Electrico",
    Modelo: "Bolt EV",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Chevrolet",
    Tipo: "Furgon Cerrado",
    Modelo: "N300 Max 1,2 Lts. DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.02063,
    Rendimiento: 11.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Furgon Cerrado",
    Modelo: "N400 Max 1,5 Lts. T/M, 2 asientos",
    Nox: 0.0108,
    Rendimiento: 11.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Aveo LS HB 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01545,
    Rendimiento: 10.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Aveo LS HB 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01545,
    Rendimiento: 10.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 1,4 Lts. T MT Hatch Back 5P. T/M Otto",
    Nox: 0.02105,
    Rendimiento: 11.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 1,4 Lts. Turbo Hatch Back 5P. T/A Otto",
    Nox: 0.00195,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 1,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0044,
    Rendimiento: 10.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00855,
    Rendimiento: 8.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 1,8 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01455,
    Rendimiento: 9.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze 2,0D Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1616,
    Rendimiento: 11.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Cruze HB 2,0D Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1415,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix 1,4 Lts. Hatch Back 5P. T/A",
    Nox: 0.00875,
    Rendimiento: 10.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix 1,4 Lts. Hatch Back 5P. T/M",
    Nox: 0.00685,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix 1,4 Lts. Hatch Back 5P. T/M",
    Nox: 0.0051,
    Rendimiento: 10.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix HB LS 1.2 MT",
    Nox: 0.02,
    Rendimiento: 12.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix HB Premier 1.0T AT",
    Nox: 0.01615,
    Rendimiento: 11.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Onix HB RS 1.0T MT",
    Nox: 0.0129,
    Rendimiento: 13.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Sail NB 1,4 Lts., DOHC HatchBack 5P.T/M Motor Otto",
    Nox: 0.0266,
    Rendimiento: 12
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Sonic 1,6 AT Lts. DOHCHatch Back 5P. T/A Motor Otto",
    Nox: 0.00455,
    Rendimiento: 9.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Sonic 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00555,
    Rendimiento: 10.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Spark GT 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 12.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Spark GT 1,2 Lts. DOHC Hatch Back 5P. T/M Otto",
    Nox: 0.0215,
    Rendimiento: 13.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Spark GT Activ 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0215,
    Rendimiento: 13.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Spark LT HB 1,0 Lts. SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0068,
    Rendimiento: 11.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatch Back",
    Modelo: "Spark SE 0,8 Lts. SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.026,
    Rendimiento: 12.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Hatchback",
    Modelo: "Onix Joy 1.4L HB MT5",
    Nox: 0.005,
    Rendimiento: 10.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Aveo LS NB AC 1,4 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01545,
    Rendimiento: 10.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Aveo LT NB AC 1,4 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01545,
    Rendimiento: 10.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cavalier 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0066,
    Rendimiento: 12
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cavalier 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01165,
    Rendimiento: 12.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cobalt 1,8 Lts. Sedan 4P. T/A",
    Nox: 0.004,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cobalt 1,8 Lts. Sedan 4P. T/M",
    Nox: 0.00585,
    Rendimiento: 9.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 1,4 Lts. T MT Sedan 4P. T/M Otto",
    Nox: 0.02105,
    Rendimiento: 11.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 1,4 Lts. Turbo Sedan 4P. T/A Otto",
    Nox: 0.00195,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0044,
    Rendimiento: 10.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00855,
    Rendimiento: 8.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01455,
    Rendimiento: 9.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze 2,0D Lts. DOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.1616,
    Rendimiento: 11.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Cruze NB 2,0D Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1415,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Impala LTZ 2,5 Lts. Sedan T/A",
    Nox: 0.0044,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Malibu 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00405,
    Rendimiento: 7.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Malibu LTZ NB 2,0 Lts. T/A Otto",
    Nox: 0.00508,
    Rendimiento: 8.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Onix Joy 1.4L NB MT5",
    Nox: 0.005,
    Rendimiento: 10.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Onix NB LS 1.2 MT",
    Nox: 0.02,
    Rendimiento: 12.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Onix NB LT 1.0T AT",
    Nox: 0.01615,
    Rendimiento: 11.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Onix NB LT 1.0T MT",
    Nox: 0.0129,
    Rendimiento: 13.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Onix NB Premier 1.0T AT",
    Nox: 0.01615,
    Rendimiento: 11.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Prisma 1,4 Lts. Sedan 4P. T/A",
    Nox: 0.00875,
    Rendimiento: 10.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Prisma 1,4 Lts. Sedan 4P. T/M",
    Nox: 0.00685,
    Rendimiento: 11
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Prisma 1,4 Lts. Sedan 4P. T/M",
    Nox: 0.0051,
    Rendimiento: 10.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Sail 1,5 Lts. Sedan 4P. T/A",
    Nox: 0.01025,
    Rendimiento: 12.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Sail 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.02165,
    Rendimiento: 11.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Sail NB 1,4 Lts., DOHC Sedan 4P.T/M Motor Otto",
    Nox: 0.0266,
    Rendimiento: 12
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Sonic 1,6 AT Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00455,
    Rendimiento: 9.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Sonic 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00555,
    Rendimiento: 10.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Spark 1,2 Lts. DOHC Sedan 4P. T/M Otto",
    Nox: 0.0215,
    Rendimiento: 13.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Sedan",
    Modelo: "Volt 1,5 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.0017,
    Rendimiento: 14.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Blazer 3,6 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0035,
    Rendimiento: 7.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Blazer 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0035,
    Rendimiento: 7.1
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1,5 Ltrs. Station Wagon 5 Asientos 5P A/T",
    Nox: 0.0279,
    Rendimiento: 8.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1,5 Ltrs. Station Wagon 7 Asientos 5P A/T",
    Nox: 0.0279,
    Rendimiento: 8.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1,5 Lts. Station Wagon 5 Asientos 5P. T/M Otto",
    Nox: 0.02005,
    Rendimiento: 10
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1,5 Lts. Station Wagon 7 Asientos 5P. T/M Otto",
    Nox: 0.02005,
    Rendimiento: 10
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1.5L MT6 5 Asientos",
    Nox: 0.023,
    Rendimiento: 10.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 1.5L MT6 7 Asientos",
    Nox: 0.023,
    Rendimiento: 10.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,2D Lts. DOHC Station Wagon 5P. AWD T/A Motor Diesel",
    Nox: 0.1446,
    Rendimiento: 9.3
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,2D Lts. DOHC Station Wagon 5P. AWD T/M Motor Diesel",
    Nox: 0.1414,
    Rendimiento: 10.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,2D Lts. DOHC Station Wagon 5P. FWD T/A Motor Diesel",
    Nox: 0.1446,
    Rendimiento: 9.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,2D Lts. DOHC Station Wagon 5P. FWD T/M Motor Diesel",
    Nox: 0.1414,
    Rendimiento: 10.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,4 Lts. DOHC Station Wagon 5P. 4x2 T/M Motor Otto",
    Nox: 0.0117,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,4 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Otto",
    Nox: 0.0117,
    Rendimiento: 7.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,4 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.00771,
    Rendimiento: 7.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Captiva 2,4 Lts. DOHC Station Wagon 5P. FWD T/A Motor Otto",
    Nox: 0.00771,
    Rendimiento: 7.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Equinox AWD 1,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0035,
    Rendimiento: 9.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Equinox FWD 1,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0035,
    Rendimiento: 9.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Groove 1.5 6MT",
    Nox: 0.01233,
    Rendimiento: 10.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Groove 1.5L CVT",
    Nox: 0.00772,
    Rendimiento: 10.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "NG Traverse 3,6 Lts. Station Wagon 5P. 7 Asientos T/A AWD Otto",
    Nox: 0.0035,
    Rendimiento: 6.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "NG Traverse 3,6 Lts. Station Wagon 5P. 7 Asientos T/A FWD Otto",
    Nox: 0.0035,
    Rendimiento: 6.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Orlando 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.13726,
    Rendimiento: 10.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Orlando 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.11764,
    Rendimiento: 12.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Orlando AT 2,4 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0044,
    Rendimiento: 7.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 AT 5 Asientos",
    Nox: 0.006,
    Rendimiento: 9.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 AT 7 Asientos",
    Nox: 0.006,
    Rendimiento: 9.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 Lts. Station Wagon, 7 Asientos 5P. T/A",
    Nox: 0.00845,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 Lts. Station Wagon, 7 Asientos 5P. T/M",
    Nox: 0.00745,
    Rendimiento: 9.2
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 MT 5 Asientos",
    Nox: 0.012,
    Rendimiento: 9.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin 1,8 MT 7 Asientos",
    Nox: 0.012,
    Rendimiento: 9.5
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin Activ 7 1,8 Lts. Station Wagon 5P. 7 Asientos T/A Otto",
    Nox: 0.00845,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Spin Activ 7 1,8 Lts. Station Wagon 5P. 7 Asientos T/A Otto",
    Nox: 0.00845,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5,3 Lts. AWD DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00375,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5,3 Lts. AWD DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00375,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5,3 Lts. Otto",
    Nox: 0.0053,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5,3 Station Wagon T/A",
    Nox: 0.0053,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5.3L AT10 7 Asientos",
    Nox: 0.00484,
    Rendimiento: 6.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Suburban 5.3L AT10 8 Asientos",
    Nox: 0.00484,
    Rendimiento: 6.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tahoe 5,3 Lts. AWD DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00375,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tahoe 5,3 Lts. AWD DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00375,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tahoe 5,3 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0053,
    Rendimiento: 6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tahoe 5.3L AT10 7 Asientos",
    Nox: 0.00484,
    Rendimiento: 6.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tahoe 5.3L AT10 8 Asientos",
    Nox: 0.00484,
    Rendimiento: 6.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker 1.2T 5MT",
    Nox: 0.007,
    Rendimiento: 12.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker 1.2T 6AT",
    Nox: 0.02967,
    Rendimiento: 10.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker 1.2T 6AT",
    Nox: 0.02967,
    Rendimiento: 10.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker AWD 1,8 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.0082,
    Rendimiento: 9.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker AWD 1,8 Lts.,  DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0062,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker AWD 1,8 Lts.,  DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00565,
    Rendimiento: 9.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker FWD 1,8 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0082,
    Rendimiento: 9.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker FWD 1,8 Lts.,  DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0062,
    Rendimiento: 8.8
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Tracker FWD 1,8 Lts.,  DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00565,
    Rendimiento: 9.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Trailblazer 2,8 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.1779,
    Rendimiento: 7.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Trailblazer 3,6 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0059,
    Rendimiento: 6.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Trailblazer 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0059,
    Rendimiento: 6.6
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse 3,6 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 5.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse 3,6 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0046,
    Rendimiento: 5.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse 3,6 Lts. DOHC Station Wagon 5P. FWD T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 5.7
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse 3,6 Lts. DOHC Station Wagon 5P. FWD T/A Motor Otto",
    Nox: 0.0046,
    Rendimiento: 5.4
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse 3,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.0051,
    Rendimiento: 6.9
  },
  {
    Marca: "Chevrolet",
    Tipo: "Station Wagon",
    Modelo: "Traverse LS 3.6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01,
    Rendimiento: 5.7
  },
  {
    Marca: "Chrysler",
    Tipo: "Minibus",
    Modelo: "Town & Country Touring 3,6 Lts. V6 DOHC Tipo Van (7 asientos) 5P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Minibus",
    Modelo: "Town & Country Touring LX 3,6 Lts. V6 DOHC Tipo Van (7 asientos) 5P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Minibus",
    Modelo: "Town & Country Touring LX SE 3,6 Lts. V6 DOHC Tipo Van (7 asientos) 5P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Minibus",
    Modelo: "Town & Country Touring SE 3,6 Lts. V6 DOHC Tipo Van (7 asientos) 5P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "200C 2,4 Lts. Sedan T/A Otto",
    Nox: 0.0132,
    Rendimiento: 8
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "300 3,6 T/A Sedan",
    Nox: 0.0065,
    Rendimiento: 6.4
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "300 3,6 T/A Sedan",
    Nox: 0.0065,
    Rendimiento: 6.4
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "300 C 3,6 Lts. Sedan T/A Otto",
    Nox: 0.0083,
    Rendimiento: 7
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "300 C 3,6 Lts. Sedan T/A Otto",
    Nox: 0.0083,
    Rendimiento: 7
  },
  {
    Marca: "Chrysler",
    Tipo: "Sedan",
    Modelo: "300C 3,6 V6 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01,
    Rendimiento: 6.4
  },
  {
    Marca: "Chrysler",
    Tipo: "Station Wagon",
    Modelo: "Pacifica Touring L 3,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.0272,
    Rendimiento: 6.5
  },
  {
    Marca: "Chrysler",
    Tipo: "Station Wagon",
    Modelo: "Town  Country Station Wagon",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Station Wagon",
    Modelo: "Town Country",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Station Wagon",
    Modelo: "Town Country 3,6 T/A",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Chrysler",
    Tipo: "Station Wagon",
    Modelo: "Town Country 3.6 Lts. T/A Otto",
    Nox: 0.004,
    Rendimiento: 6.3
  },
  {
    Marca: "Citecar",
    Tipo: "Camion",
    Modelo: "Citecar 1.5T Camion 2P. T/M Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Citroen",
    Tipo: "Bus",
    Modelo: "Jumper L4H2 Turismo 2.0 Lts. 19 Asientos 4P. T/M",
    Nox: 0.2504,
    Rendimiento: 11
  },
  {
    Marca: "Citroen",
    Tipo: "Cabriolet",
    Modelo: "DS3 1,6 Lts. DOHC Cabriolet 3P. T/M Motor Otto",
    Nox: 0.00814,
    Rendimiento: 12.2
  },
  {
    Marca: "Citroen",
    Tipo: "Camioneta",
    Modelo: "Jumper III 2.0 HDI Camioneta Doble Cabina",
    Nox: 0.06778,
    Rendimiento: 14.7
  },
  {
    Marca: "Citroen",
    Tipo: "Camioneta",
    Modelo: "Jumper III L3 2,0 Lts. Camioneta Cabina Simple 2P. T/M Diesel",
    Nox: 0.2513,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon",
    Modelo: "Berlingo K9 1,6 Lts. Furgon 2P. T/M Diesel",
    Nox: 0.1486,
    Rendimiento: 16.9
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Berlingo 1,6 Lts. HDi SOHC Furgon Corto 5P. T/M Motor Diesel",
    Nox: 0.1631,
    Rendimiento: 16
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Berlingo 1,6 Lts. HDi SOHC Furgon Largo 5P. T/M Motor Diesel",
    Nox: 0.1631,
    Rendimiento: 16
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Berlingo Furgon 2P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Berlingo K9 C 1,6 Lts. Blue HDi 100 Furgon 2P. T/M Diesel",
    Nox: 0.0229,
    Rendimiento: 17
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Berlingo K9 L 1,6 Lts. Blue HDi 100 Furgon 4P. T/M Diesel",
    Nox: 0.0229,
    Rendimiento: 17
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Berlingo K9 Largo",
    Nox: 0.1486,
    Rendimiento: 16.9
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Jumper III 33 L2H2 2,2 HDI DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.2634,
    Rendimiento: 8.1
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III L1H1 2,0 Lt. Furgon 5P. T/M Diesel",
    Nox: 0.2513,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III L2H2 2,0 Lt. Furgon 5P. T/M Diesel",
    Nox: 0.2513,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III L3H2 2,0 Lt. Furgon 5P. T/M Diesel",
    Nox: 0.2513,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III L4H2 2,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.2513,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III Largo H2 2,2 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2686,
    Rendimiento: 8.8
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumper III Largo L4H2 2,2 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2686,
    Rendimiento: 8.8
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Jumpy 1,6 Lts. HDI SOHC Furgon 2P. T/M Motor Diesel",
    Nox: 0.1991,
    Rendimiento: 13
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumpy L1 2,0 Lts. Furgon 3P. T/M Diesel",
    Nox: 0.0807,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumpy L2 2,0 Lts. Furgon 3P. T/M Diesel",
    Nox: 0.0807,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumpy L3 2,0 Lts. Furgon 2P. T/M Diesel",
    Nox: 0.0807,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon Cerrado",
    Modelo: "Jumpy L3 2,0 Lts. Furgon 2P. T/M Diesel",
    Nox: 0.2519,
    Rendimiento: 13.9
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon cerrado",
    Modelo: "Nemo 1,3 Lts. HDI DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.1395,
    Rendimiento: 17.1
  },
  {
    Marca: "Citroen",
    Tipo: "Furgon",
    Modelo: "Hobby Optima On Tour T65HKM",
    Nox: 0.1788,
    Rendimiento: 14.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C1 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00332,
    Rendimiento: 18.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01655,
    Rendimiento: 15.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0117,
    Rendimiento: 15.1
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0049,
    Rendimiento: 17.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0207,
    Rendimiento: 14.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,2 Lts. STT Hatch Back 5P. T/M Otto",
    Nox: 0.01118,
    Rendimiento: 16.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,4 Lts. HDI DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.144,
    Rendimiento: 19.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,4 Lts. HDI SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1744,
    Rendimiento: 20.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,5 Hdi T/M",
    Nox: 0.0361,
    Rendimiento: 22.1
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,5 Lts. HDI Hatch Back 4P. T/M Diesel",
    Nox: 0.04667,
    Rendimiento: 19.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0161,
    Rendimiento: 10.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.03058,
    Rendimiento: 12.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,6 Lts. HDi Hatch Back 5P. T/M",
    Nox: 0.135,
    Rendimiento: 20.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,6 Lts. HDI Hatch Back 5P. T/M Diesel",
    Nox: 0.0907,
    Rendimiento: 21.1
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 1,6 Lts. HDI SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.14175,
    Rendimiento: 22.7
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 Aircross 1,2 Lts. Hatch Back 4P T/A Otto",
    Nox: 0.0281,
    Rendimiento: 10.8
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 Aircross 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.01085,
    Rendimiento: 13.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 Aircross 1,5 Lts. HDi Hatch Back 4P. T/M Diesel",
    Nox: 0.028,
    Rendimiento: 18.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 Aircross 1,6 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.02715,
    Rendimiento: 20.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C3 HDI 1,6 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.036,
    Rendimiento: 21
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.02112,
    Rendimiento: 12.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01688,
    Rendimiento: 9.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.02027,
    Rendimiento: 11.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 1,6 Lts. HDi Hatch Back 5P. T/A STT",
    Nox: 0.0964,
    Rendimiento: 20.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 1,6 Lts. Hdi SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1536,
    Rendimiento: 16.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus 1,2 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.01045,
    Rendimiento: 13.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus 1,2 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.01685,
    Rendimiento: 14.7
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus 1,2 Lts. VTi Hatch Back 5P. T/M",
    Nox: 0.0109,
    Rendimiento: 15.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus 1,5 Lts. Hatch Back 4P. T/A Diesel",
    Nox: 0.03134,
    Rendimiento: 19.1
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus 1.5 HDI",
    Nox: 0.03772,
    Rendimiento: 20.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus HDI 1,6 Lts. Hatch Back 4P. T/M Diesel",
    Nox: 0.0266,
    Rendimiento: 20.8
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus HDi STT 1,6 Lts. Hatchback 5P. T/M Diesel",
    Nox: 0.1362,
    Rendimiento: 24.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Cactus STT 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01118,
    Rendimiento: 16.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 Stop&Start 1,6 Lts. HDI SOHC Hatch Back 5P T/M Motor Diesel",
    Nox: 0.1277,
    Rendimiento: 19.2
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 STT 1,2 Lts. Hatch Back 5P. T/A",
    Nox: 0.013,
    Rendimiento: 13.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "C4 STT 1,2 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.01661,
    Rendimiento: 15.6
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01136,
    Rendimiento: 10.6
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.03058,
    Rendimiento: 12.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,6 Lts. DOHC Hatchback 3P. T/A Motor Otto",
    Nox: 0.0161,
    Rendimiento: 10.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS3 Racing 1,6 Lts. DOHC Hatch back 3P. T/M Motor Otto",
    Nox: 0.01685,
    Rendimiento: 10.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS3 Racing 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.00775,
    Rendimiento: 11.3
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS4 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0113,
    Rendimiento: 10.6
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS4 1,6 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.1533,
    Rendimiento: 20.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS4 200HP 1,6 Lts.DOHC Hatch Back 5P T/M Motor Otto",
    Nox: 0.00681,
    Rendimiento: 11.9
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS5 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01427,
    Rendimiento: 9.7
  },
  {
    Marca: "Citroen",
    Tipo: "Hatch Back",
    Modelo: "DS5 2,0 Lts. HDI DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1334,
    Rendimiento: 12.7
  },
  {
    Marca: "Citroen",
    Tipo: "Hatchback",
    Modelo: "C3 1.2 CVA6 STT",
    Nox: 0.00984,
    Rendimiento: 17.4
  },
  {
    Marca: "Citroen",
    Tipo: "Hatchback",
    Modelo: "C3 1.5 Diesel  CVM6 STT",
    Nox: 0.04821,
    Rendimiento: 21.5
  },
  {
    Marca: "Citroen",
    Tipo: "Hatchback",
    Modelo: "C3 AIRCROSS 1.5 DIESEL CVM6 STT",
    Nox: 0.03765,
    Rendimiento: 24.8
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumper L3H2 Escolar 2,0 Lts. Minibus 25 Asientos 4P. T/M Diesel",
    Nox: 0.2153,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumper L3H2 Turismo 2,0 Lts. Minibus 13 asientos 4P. T/M Diesel",
    Nox: 0.2504,
    Rendimiento: 11
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumpy 2,0 Lts. HDI DOHC Minibus 5P. (9 asientos) T/M Motor Diesel",
    Nox: 0.21,
    Rendimiento: 13.2
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumpy 2,0 Lts. HDI DOHC Minibus 6P. (9 asientos) T/M Motor Diesel",
    Nox: 0.21,
    Rendimiento: 13.2
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumpy Combispace 2,0 Lts. Minibus 8 Pasajeros 3P. T/M Diesel",
    Nox: 0.0771,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumpy Furgon Escolar 2,0 Lts. HDI 3P. 21 Asientos T/M Diesel",
    Nox: 0.0723,
    Rendimiento: 15.4
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Jumpy Navette 2,0 Lts. Minibus 9 Pasajeros 4P. T/M Diesel",
    Nox: 0.0771,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Spacetourer Business 2,0 Lts. HDI 150 HP Minibus 9 Pasajeros 4P. T/M Diesel",
    Nox: 0.0771,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Spacetourer Combi L2 H1 HDI 2,0 Lts. Minibus 8 Asientos 5P. T/A Diesel",
    Nox: 0.0328,
    Rendimiento: 14.4
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Spacetourer L3 2,0 Lts. 150 HP Minibus 8 Pasajeros 3P. T/M Diesel",
    Nox: 0.0771,
    Rendimiento: 14
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Spacetourer L3H1",
    Nox: 0.02116,
    Rendimiento: 15.5
  },
  {
    Marca: "Citroen",
    Tipo: "Minibus",
    Modelo: "Spacetourer XL150 S S BVM6",
    Nox: 0.02887,
    Rendimiento: 12.5
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C-Elycee 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0065,
    Rendimiento: 11.4
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C-Elysee 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0262,
    Rendimiento: 10
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C-Elysee 1,6 Lts. Sedan 4P. T/A",
    Nox: 0.0132,
    Rendimiento: 9.9
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C-Elysee 1,6 Lts.HDI SOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.1438,
    Rendimiento: 19.1
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C-Elysee VTI 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 15
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C5 2,0 Lts. HDI DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.13697,
    Rendimiento: 11.3
  },
  {
    Marca: "Citroen",
    Tipo: "Sedan",
    Modelo: "C5 2,0 Lts. HDi SOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.15483,
    Rendimiento: 14.1
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo de Pasajeros M",
    Nox: 0.03873,
    Rendimiento: 16.8
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo de Pasajeros XL",
    Nox: 0.03873,
    Rendimiento: 16.8
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo K9 Pasajeros M 1,6 Lts. Station Wagon 4P. T/M Diesel",
    Nox: 0.0175,
    Rendimiento: 17.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo K9 Pasajeros XL",
    Nox: 0.0175,
    Rendimiento: 17.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo K9 Pasajeros XL 1,6 Lts. Station Wagon 4P T/M Diesel",
    Nox: 0.0175,
    Rendimiento: 17.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Berlingo Multispace 1,6 Lts. HDi Station Wagon 5P. T/M",
    Nox: 0.1343,
    Rendimiento: 15.8
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C3 Picasso 1,6 Lts. HDI DOHC Station 5P. T/M Motor Diesel",
    Nox: 0.1649,
    Rendimiento: 17.5
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 1,6 Lts. CVA DOHC Stop Start Station Wagon 5P. (5 asientos) T/A Motor Otto",
    Nox: 0.0334,
    Rendimiento: 13.1
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 1,6 Lts. CVA DOHC Stop Start Station Wagon 5P. (7 asientos) T/A Motor Otto",
    Nox: 0.0334,
    Rendimiento: 13.1
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 1,6 Lts. Hdi SOHC Station Wagon 5P. (5 Pasajeros) T/M Motor Diesel",
    Nox: 0.1504,
    Rendimiento: 16.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 1,6 Lts. Hdi SOHC Station Wagon 5P. (7 Pasajeros) T/M Motor Diesel",
    Nox: 0.1504,
    Rendimiento: 16.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 2,0 Lts. DOHC Station Wagon 5P. (5 Asientos) HDI T/M Motor Diesel",
    Nox: 0.16508,
    Rendimiento: 15.2
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 2,0 Lts. DOHC Station Wagon 5P. (7 Asientos) HDI T/M Motor Diesel",
    Nox: 0.16508,
    Rendimiento: 15.2
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 5 plazas CVA 1,6 Lts. Station Wagon 5P. 4x2 T/A",
    Nox: 0.0953,
    Rendimiento: 17.8
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso 7 plazas CVA 1,6 Lts. Station Wagon 5P. 4x2 T/A",
    Nox: 0.0953,
    Rendimiento: 17.8
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso Stop & Start 1,6 Lts. HDI SOHC Satation Wagon 5P. 5 Pasajeros T/M Motor Diesel",
    Nox: 0.1617,
    Rendimiento: 19
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C4 Picasso Stop & Start 1,6 Lts. HDI SOHC Satation Wagon 5P. 7 Pasajeros T/M Motor Diesel",
    Nox: 0.1617,
    Rendimiento: 19
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 1,5 Lts. Hdi Station Wagon 4P. T/A Diesel",
    Nox: 0.01413,
    Rendimiento: 16.7
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 1,5 Lts. Hdi Station Wagon 4P. T/M Diesel",
    Nox: 0.04511,
    Rendimiento: 18.3
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 1,6 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0212,
    Rendimiento: 9.7
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 1.5 Diesel CVA8 STT",
    Nox: 0.02508,
    Rendimiento: 21.5
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 AIRCROSS 1.5 DIESEL CVM6 STT",
    Nox: 0.03948,
    Rendimiento: 21.2
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 1.5 HDI 130 CVA6",
    Nox: 0.01745,
    Rendimiento: 21.3
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Aircross 2,0 Lts. Station Wagon 4P. T/A Diesel",
    Nox: 0.02798,
    Rendimiento: 15.4
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Break 2,0 Lts. HDI DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.13697,
    Rendimiento: 11.1
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "C5 Break 2,0 Lts. HDi SOHC Station 5P. T/M Motor Diesel",
    Nox: 0.15483,
    Rendimiento: 14.1
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Grand C4 Picasso",
    Nox: 0.02243,
    Rendimiento: 13.9
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Multispace 1,6 Lts. HDI SOHC Station 5P. (5Plazas) T/M Motor Diesel",
    Nox: 0.1652,
    Rendimiento: 16.5
  },
  {
    Marca: "Citroen",
    Tipo: "Station Wagon",
    Modelo: "Multispace 1,6 Lts. HDI SOHC Station 5P. (7Plazas) T/M Motor Diesel",
    Nox: 0.1652,
    Rendimiento: 16.5
  },
  {
    Marca: "Citroen",
    Tipo: "Transporte de Pasajeros",
    Modelo: "Jumper L2H2 Escolar 2,0 Lts. 25 Asientos",
    Nox: 0.2153,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Transporte de Pasajeros",
    Modelo: "Jumper L4H2 Escolar 2,0 Lts. 25 Asientos 4P. T/M",
    Nox: 0.2153,
    Rendimiento: 11.5
  },
  {
    Marca: "Citroen",
    Tipo: "Transporte de Pasajeros",
    Modelo: "Spacetourer Combi L2H1 HDI 2.0 Lts. Minibus 9 Asientos 5P. T/A",
    Nox: 0.0328,
    Rendimiento: 14.4
  },
  {
    Marca: "Cupra",
    Tipo: "Station Wagon",
    Modelo: "Formentor 2.0 AT 4Drive",
    Nox: 0.00741,
    Rendimiento: 9.1
  },
  {
    Marca: "Daihatsu",
    Tipo: "Station Wagon",
    Modelo: "Terios 1,5 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00613,
    Rendimiento: 10.3
  },
  {
    Marca: "Daihatsu",
    Tipo: "Station Wagon",
    Modelo: "Terios 1,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00613,
    Rendimiento: 10.3
  },
  {
    Marca: "Daihatsu",
    Tipo: "Station Wagon",
    Modelo: "Terios 1,5 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.0046,
    Rendimiento: 11.1
  },
  {
    Marca: "Daihatsu",
    Tipo: "Station Wagon",
    Modelo: "Terios 1,5 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.0046,
    Rendimiento: 11.1
  },
  {
    Marca: "DFLM",
    Tipo: "Furgon cerrado",
    Modelo: "LZ6510MQ20MN M5 Cargo 2,0 Lts., SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.01365,
    Rendimiento: 8
  },
  {
    Marca: "DFLM",
    Tipo: "Furgon cerrado",
    Modelo: "M3 (LZ6470MQ16M) Cargo 1,6 Lts. Furgon 4P. T/M Otto",
    Nox: 0.01655,
    Rendimiento: 9
  },
  {
    Marca: "DFLM",
    Tipo: "Hatch Back",
    Modelo: "Joyear S50 1,5 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.00835,
    Rendimiento: 11.1
  },
  {
    Marca: "DFLM",
    Tipo: "Minibus",
    Modelo: "M3 (LZ6470MQ16M) 1,6 Lts. Minibus 7 Asientos 4P. T/M Otto",
    Nox: 0.01655,
    Rendimiento: 9
  },
  {
    Marca: "DFLM",
    Tipo: "Minivan",
    Modelo: "LZ6510MQ20MN M5 2,0 Lts., SOHC (11 asientos) 4P. T/M Motor Otto",
    Nox: 0.01365,
    Rendimiento: 8
  },
  {
    Marca: "DFLM",
    Tipo: "Sedan",
    Modelo: "Joyear S50 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00835,
    Rendimiento: 11.1
  },
  {
    Marca: "DFLM",
    Tipo: "Sedan",
    Modelo: "Joyear S50 GL 1,5 Sedan 4P. T/M Otto",
    Nox: 0.00835,
    Rendimiento: 11.1
  },
  {
    Marca: "DFLM",
    Tipo: "Sedan",
    Modelo: "S50EV",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear LV/LZ6430BQBE 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0186,
    Rendimiento: 11
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX5 (LZ6452XQ16AM) 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01415,
    Rendimiento: 11.1
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX5 2,0 Lts. Station Wagon 4P T/M Otto",
    Nox: 0.0088,
    Rendimiento: 8.9
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX5 2,0 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.00745,
    Rendimiento: 9.3
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX6 (LZ6470XQ16AM) 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01965,
    Rendimiento: 11.2
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX6 2,0 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.0088,
    Rendimiento: 8.9
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear SX6 2,0 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.00745,
    Rendimiento: 9.3
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "Joyear X3 CVT 1,6 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.01095,
    Rendimiento: 11.5
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "S500 5 Asientos",
    Nox: 0.01275,
    Rendimiento: 10.9
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "S500 7 Asientos",
    Nox: 0.01275,
    Rendimiento: 10.9
  },
  {
    Marca: "DFLM",
    Tipo: "Station Wagon",
    Modelo: "X3 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0118,
    Rendimiento: 12
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "A30 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0247,
    Rendimiento: 10.5
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "A30 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01325,
    Rendimiento: 10.4
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "AX 7 2,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0063,
    Rendimiento: 9
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "AX3 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.02635,
    Rendimiento: 10.5
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "AX5 Turbo 1,4 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.02153,
    Rendimiento: 9.3
  },
  {
    Marca: "DFM",
    Tipo: "Hatch Back",
    Modelo: "AX5 Turbo 1,4 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.0319,
    Rendimiento: 9.7
  },
  {
    Marca: "DFM",
    Tipo: "Hatchback",
    Modelo: "AX4 1,6 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.01233,
    Rendimiento: 9.7
  },
  {
    Marca: "DFM",
    Tipo: "Hatchback",
    Modelo: "AX4 1,6 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.01765,
    Rendimiento: 11.1
  },
  {
    Marca: "DFM",
    Tipo: "Sedan",
    Modelo: "A30 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0247,
    Rendimiento: 10.5
  },
  {
    Marca: "DFM",
    Tipo: "Sedan",
    Modelo: "A30 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01325,
    Rendimiento: 10.4
  },
  {
    Marca: "DFM",
    Tipo: "Sedan",
    Modelo: "S30A 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.02825,
    Rendimiento: 10
  },
  {
    Marca: "DFM",
    Tipo: "Station Wagon",
    Modelo: "AX 7 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01005,
    Rendimiento: 8.3
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Cargo Box CS C21 1.2",
    Nox: 0.01785,
    Rendimiento: 10.1
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Cargo Box DC 1,3 Lts. SOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Cargo Box DC Serie C 1,5 Lts. Camioneta 4P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Cargo Box SC 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Cargo Box Serie C 1,5 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Refri Truck 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Refritruck C21 1.2",
    Nox: 0.01785,
    Rendimiento: 10.1
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Refritruck Serie C 1,5 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck CD C22 1.2",
    Nox: 0.01785,
    Rendimiento: 10.1
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck CS 21 1.2",
    Nox: 0.01785,
    Rendimiento: 10.1
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck CS C21 1.0",
    Nox: 0.0098,
    Rendimiento: 10.2
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck DC 1,0 Lts. SOHC Camioneta 4P. T/M Otto",
    Nox: 0.0059,
    Rendimiento: 10.7
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck DC C22 1.0",
    Nox: 0.0098,
    Rendimiento: 10.2
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck DC Serie C 1,5 Lts. Camioneta 4P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck DC XXL 1,3 Lts. SOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck S/C XL 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck SC Serie C 1,5 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "Truck SC XL 1,0 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.0059,
    Rendimiento: 10.7
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V21 Cargo Box CS 1,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01255,
    Rendimiento: 11.5
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V21 Cargo Box CS 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V21 CS 1,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01255,
    Rendimiento: 11.5
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V21 Refritruck 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V21 Truck SC 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V22 Cargo Box 1,3 Lts. SOHC Pick Up Cabina Doble 4P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V22 DC 1,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01255,
    Rendimiento: 11.5
  },
  {
    Marca: "DFSK",
    Tipo: "Camioneta",
    Modelo: "V22 Truck 1,3 Lts. SOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Electrico",
    Modelo: "Cargo Van Electrica Furgon 5P. T/M Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "DFSK",
    Tipo: "Electrico",
    Modelo: "Truck Electric SC Furgon Pick Up 2P. T/M",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon",
    Modelo: "Cargo Van 1,2 Lts. Furgon 4P. T/M Otto",
    Nox: 0.01255,
    Rendimiento: 11.5
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon Cerrado",
    Modelo: "Cargo Van C25 1.2",
    Nox: 0.01785,
    Rendimiento: 10.1
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon cerrado",
    Modelo: "Cargo Van C35 1,5 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0149,
    Rendimiento: 9.8
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon cerrado",
    Modelo: "Cargo Van XL 1,0 Lts. SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.0059,
    Rendimiento: 10.7
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon cerrado",
    Modelo: "Gargo Van XL 1,3 Lts. SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 9.9
  },
  {
    Marca: "DFSK",
    Tipo: "Furgon cerrado",
    Modelo: "V25 Cargo Van 1,3 Lts. SOHC Furgon 4P. T/M Motor Otto",
    Nox: 0.00235,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Microvan",
    Modelo: "Passanger Van 1,3 Lts. SOHC Microvan 5P. (7 asientos) T/M Motor Otto",
    Nox: 0.009,
    Rendimiento: 9.4
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "IX5 220T",
    Nox: 0.02492,
    Rendimiento: 7.9
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV 500 1,5 MT",
    Nox: 0.005,
    Rendimiento: 10.4
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV 560 1,8 Lts. Station Wagon 5 asientos 5P. T/M Otto",
    Nox: 0.0157,
    Rendimiento: 9.7
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV 560 1,8 Lts. Station Wagon 7 asientos 5P. T/M Otto",
    Nox: 0.0157,
    Rendimiento: 9.7
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV 580 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0276,
    Rendimiento: 9.3
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV Glory 580 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.03365,
    Rendimiento: 9.7
  },
  {
    Marca: "DFSK",
    Tipo: "Station Wagon",
    Modelo: "SUV Glory 580 1,8 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01095,
    Rendimiento: 9.7
  },
  {
    Marca: "Dodge",
    Tipo: "Camioneta",
    Modelo: "Ram 1500 3,0 Lts. T/A Otto",
    Nox: 0.015,
    Rendimiento: 6.8
  },
  {
    Marca: "Dodge",
    Tipo: "Coupe",
    Modelo: "Challenger 3,6 Lts. Coupe T/A",
    Nox: 0.0099,
    Rendimiento: 6.8
  },
  {
    Marca: "Dodge",
    Tipo: "Coupe",
    Modelo: "Challenger SXT 3,6 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0154,
    Rendimiento: 6.8
  },
  {
    Marca: "Dodge",
    Tipo: "Coupe",
    Modelo: "Viper SRT GTS 8,4 Lts. Coupe 2P. T/M",
    Nox: 0.0009,
    Rendimiento: 3.4
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Challenger SRT8 6,4 Hemi V8 OHV Sedan 2P. T/A Motor Otto",
    Nox: 0.01375,
    Rendimiento: 4.3
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger 3,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.007,
    Rendimiento: 6
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger 5,7 Lts. Sedan 4P. T/A 4x2 Otto",
    Nox: 0.0074,
    Rendimiento: 5.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger 5,7 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.0074,
    Rendimiento: 5.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger AWD 3,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.007,
    Rendimiento: 6
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger R/T 5,7 Lts. Sedan 4P. T/A 4x2 Otto",
    Nox: 0.0074,
    Rendimiento: 5.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Charger R/T 5,7 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.0074,
    Rendimiento: 5.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Dart Limited 2,0 Lts. I4 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.007,
    Rendimiento: 8.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Dart SE 2,0 Lts. I4 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.007,
    Rendimiento: 8.2
  },
  {
    Marca: "Dodge",
    Tipo: "Sedan",
    Modelo: "Dart SXT 2,0 Lts. I4 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.007,
    Rendimiento: 8.2
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Citadel 3,6 V6 DOHC Station Wagon 5P. AWD 5/8 Veloc. T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Citadel 3,6 V6 DOHC Station Wagon 5P. RWD 5/8 Veloc. T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Crew 3,6 V6 DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Crew 3,6 V6 DOHC Station Wagon 5P. RWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Express 3,6 V6 DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Express 3,6 V6 DOHC Station Wagon 5P. RWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango GT 3,6 Lt. Station Wagon 5P. T/A",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Heat 3,6 V6 DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Heat 3,6 V6 DOHC Station Wagon 5P. RWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Limited 3,6 V6 DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango Limited 3,6 V6 DOHC Station Wagon 5P. RWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango R/T 5,7 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01531,
    Rendimiento: 5.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango SXT 3,6 V6 DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Durango SXT 3,6 V6 DOHC Station Wagon 5P. RWD T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 7.1
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan 3,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan 3,6 Lts. Station Wagon T/A Otto",
    Nox: 0.025,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan 3,6 T/A",
    Nox: 0.032,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan 3,6 T/A",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan 3.6 Lts. Station Wagon T/A",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan Crew 3,6 Lts. V6 VVT DOHC Station Wagon Tipo Van 5P. T/A Motor Otto",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan R/T 3,6 Lts. V6 VVT DOHC Station Wagon Tipo Van 5P. T/A Motor Otto",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan SE 3,6 Lts. V6 VVT DOHC Station Wagon Tipo Van 5P. T/A Motor Otto",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Grand Caravan SXT 3,6 Lts. V6 VVT DOHC Station Wagon Tipo Van 5P. T/A Motor Otto",
    Nox: 0.02,
    Rendimiento: 6.3
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey R/T 2,4 Lts. Station Wagon 5P. 5 Asientos T/A Otto",
    Nox: 0.00923,
    Rendimiento: 8
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey R/T 2,4 Lts. Station Wagon 5P. 7 Asientos T/A Otto",
    Nox: 0.00923,
    Rendimiento: 8
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SE 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.13342,
    Rendimiento: 11.6
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SE 2,4 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.06875,
    Rendimiento: 7.5
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SE 2,4 Lts. Station Wagon 5P. 5 Asientos T/A Otto",
    Nox: 0.00923,
    Rendimiento: 8
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SE 2,4 Lts. Station Wagon 5P. 7 Asientos T/A Otto",
    Nox: 0.00923,
    Rendimiento: 8
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SXT 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.13342,
    Rendimiento: 11.6
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SXT 2,4 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.06875,
    Rendimiento: 7.5
  },
  {
    Marca: "Dodge",
    Tipo: "Station Wagon",
    Modelo: "Journey SXT 2,4 Lts. Station Wagon T/A",
    Nox: 0.06875,
    Rendimiento: 7.5
  },
  {
    Marca: "Dongfeng",
    Tipo: "Furgon cerrado",
    Modelo: "Succe 1,6 Lts., DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 10.5
  },
  {
    Marca: "Dongfeng",
    Tipo: "Hatch Back",
    Modelo: "H30 1,6 Lts. DOHC Hatch Back 4P.+ 1 Portalon T/M Motor Otto",
    Nox: 0.0278,
    Rendimiento: 10.2
  },
  {
    Marca: "Dongfeng",
    Tipo: "Hatch Back",
    Modelo: "H30 Cross 1,6 Lts. DOHC Hatch Back 4P.+ 1 Portalon T/M Motor Otto",
    Nox: 0.0278,
    Rendimiento: 10.2
  },
  {
    Marca: "Dongfeng",
    Tipo: "Minivan",
    Modelo: "Succe 1,6 Lts., DOHC Mini Van (5 asientos) 5P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 10.5
  },
  {
    Marca: "Dongfeng",
    Tipo: "Minivan",
    Modelo: "Succe 1,6 Lts., DOHC Mini Van (7 asientos) 5P. T/M Motor Otto",
    Nox: 0.00845,
    Rendimiento: 10.5
  },
  {
    Marca: "Dongfeng",
    Tipo: "Sedan",
    Modelo: "S30 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0278,
    Rendimiento: 10.2
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,2 Lts. STT Hatch Back 2P. T/A",
    Nox: 0.0097,
    Rendimiento: 14.5
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,2 Lts. STT Hatch Back 2P. T/M",
    Nox: 0.008,
    Rendimiento: 14.4
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS3 1,6 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0141,
    Rendimiento: 11.1
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS3 Cabriolet 1,6 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0141,
    Rendimiento: 11.1
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS4 1,6 Lts. HDI CVA6 STT Hatch Back 4P. T/A",
    Nox: 0.0764,
    Rendimiento: 15.9
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS4 1,6 Lts. HDI STT Hatch Back 4P. T/M Diesel",
    Nox: 0.1019,
    Rendimiento: 20.9
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS4 2,0 Lts. HDi Hatch Back 5P. T/A",
    Nox: 0.0523,
    Rendimiento: 17.8
  },
  {
    Marca: "DS",
    Tipo: "Hatch Back",
    Modelo: "DS5 2,0 Lts. HDi Hatch Back 5P. T/A",
    Nox: 0.0943,
    Rendimiento: 17.9
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS3 Crossback 1.2 T/A",
    Nox: 0.02142,
    Rendimiento: 12.6
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS3 Crossback 1.5 Diesel STT",
    Nox: 0.04306,
    Rendimiento: 22.8
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS3 Crossback 1.5 HDI 100 T/M",
    Nox: 0.0579,
    Rendimiento: 18.3
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS3 Crossback 1.5 HDI 130 T/A",
    Nox: 0.02582,
    Rendimiento: 17.4
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS3 Crossback Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 1,6 Lts. THP 16V 163 CVA Station Wagon 5P. T/A Otto",
    Nox: 0.0096,
    Rendimiento: 9.8
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 1,6 Lts. THP 16V 163 CVA Station Wagon 5P. T/A Otto",
    Nox: 0.0096,
    Rendimiento: 9.8
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 1.6 THP 4x4 Automatico Hibrido",
    Nox: 0.01179,
    Rendimiento: 17.5
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 1.6 THP CV A8",
    Nox: 0.01899,
    Rendimiento: 10.4
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 1.6 THP CVA8",
    Nox: 0.01899,
    Rendimiento: 10.4
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.03434,
    Rendimiento: 15.1
  },
  {
    Marca: "DS",
    Tipo: "Station Wagon",
    Modelo: "DS7 Crossback THP 16V 220 CVA 1,6 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0219,
    Rendimiento: 9.7
  },
  {
    Marca: "Eagle",
    Tipo: "Camion",
    Modelo: "Spitecar 1.5T Camion 2P. T/M Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Faw",
    Tipo: "Camioneta",
    Modelo: "T80 1,5 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0156,
    Rendimiento: 11.3
  },
  {
    Marca: "Faw",
    Tipo: "Camioneta",
    Modelo: "T80 Box 1,5 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0156,
    Rendimiento: 11.3
  },
  {
    Marca: "Faw",
    Tipo: "Camioneta",
    Modelo: "T80 DC 1,5 Lts. Camioneta 4P. T/M Otto",
    Nox: 0.018,
    Rendimiento: 10.1
  },
  {
    Marca: "Faw",
    Tipo: "Furgon cerrado",
    Modelo: "V80 1,5 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0156,
    Rendimiento: 11.3
  },
  {
    Marca: "Faw",
    Tipo: "Hatch Back",
    Modelo: "D60 1,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.014,
    Rendimiento: 11.8
  },
  {
    Marca: "Faw",
    Tipo: "Hatch Back",
    Modelo: "Oley 1,5 Lts., DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0268,
    Rendimiento: 11.3
  },
  {
    Marca: "Faw",
    Tipo: "Hatchback",
    Modelo: "Oley 1,5 Lts. DOHC Hatchback 5P. T/A Motor Otto",
    Nox: 0.0323,
    Rendimiento: 10.9
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "B50 Noble 1,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.019,
    Rendimiento: 8.3
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "Besturn B70 2,0 Lts. T/A",
    Nox: 0.018,
    Rendimiento: 8.2
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "Besturn B70 2,0 Sedan T/M",
    Nox: 0.016,
    Rendimiento: 8.8
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "Oley 1,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0323,
    Rendimiento: 10.9
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "Oley 1,5 Lts., DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0268,
    Rendimiento: 11.3
  },
  {
    Marca: "Faw",
    Tipo: "Sedan",
    Modelo: "V5 1,5 Lts.DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0185,
    Rendimiento: 13.1
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "FAW R7 1.6 AT",
    Nox: 0.01085,
    Rendimiento: 9.6
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "FAW R7 1.6 MT",
    Nox: 0.0171,
    Rendimiento: 11
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "New D60 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0117,
    Rendimiento: 12.3
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "R7 1,6 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0145,
    Rendimiento: 9.7
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "R7 1,6 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.0133,
    Rendimiento: 11.6
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "X80 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0142,
    Rendimiento: 8.3
  },
  {
    Marca: "Faw",
    Tipo: "Station Wagon",
    Modelo: "X80 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0127,
    Rendimiento: 8.9
  },
  {
    Marca: "Ferrari",
    Tipo: "Cabriolet",
    Modelo: "458 Speciale A 4,5 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.018,
    Rendimiento: 5.1
  },
  {
    Marca: "Ferrari",
    Tipo: "Cabriolet",
    Modelo: "458 Spider 4,5 Lts. V8 DOHC Convertible 2P. T/DCM Motor Otto",
    Nox: 0.016,
    Rendimiento: 5.1
  },
  {
    Marca: "Ferrari",
    Tipo: "Cabriolet",
    Modelo: "488 Spider 3,9 Lts. Cabriolet 2P. T/A",
    Nox: 0.01418,
    Rendimiento: 5.4
  },
  {
    Marca: "Ferrari",
    Tipo: "Convertible",
    Modelo: "488 GTB 3,9 Lts. Convertible 2P. T/A Otto",
    Nox: 0.01418,
    Rendimiento: 5.4
  },
  {
    Marca: "Ferrari",
    Tipo: "Convertible",
    Modelo: "California T 3,9 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.01772,
    Rendimiento: 5.6
  },
  {
    Marca: "Ferrari",
    Tipo: "Convertible",
    Modelo: "488 Pista Spider",
    Nox: 0.01418,
    Rendimiento: 6.3
  },
  {
    Marca: "Ferrari",
    Tipo: "Convertible",
    Modelo: "California 3,9 T/A",
    Nox: 0.01772,
    Rendimiento: 5.6
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "458 Italia 4,5 Lts. V8 DOHC Coupe 2P. T/DCM Motor Otto",
    Nox: 0.016,
    Rendimiento: 5.1
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "458 Speciale 4,5 Lts. V8 DOHC Coupe 2P. T/DTC Motor Otto",
    Nox: 0.016,
    Rendimiento: 5.1
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "488 GTB 3,9 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01418,
    Rendimiento: 5.4
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "488 Pista 3,9 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01418,
    Rendimiento: 5.4
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "812 GTS",
    Nox: 0.01163,
    Rendimiento: 4.7
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "812 Superfast 6,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.02823,
    Rendimiento: 4.7
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "California 4,3 Lts. V8 32v DOHC Coupe 2P. T/SA Motor Otto",
    Nox: 0.00687,
    Rendimiento: 5.2
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "F12 Berlinetta 6,3 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.02159,
    Rendimiento: 4
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "F12 TDF 6,3 T/A",
    Nox: 0.02151,
    Rendimiento: 4.5
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "F8 Spider",
    Nox: 0.01174,
    Rendimiento: 5.9
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "F8 Tributo",
    Nox: 0.01174,
    Rendimiento: 5.9
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "Ferrari Roma",
    Nox: 0.00418,
    Rendimiento: 6.6
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "GTC4Lusso T 3,9 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01561,
    Rendimiento: 5.7
  },
  {
    Marca: "Ferrari",
    Tipo: "Coupe",
    Modelo: "SF90 Stradale Coupe",
    Nox: 0.00665,
    Rendimiento: 7.7
  },
  {
    Marca: "Ferrari",
    Tipo: "Covertible",
    Modelo: "Portofino 3,9 Lts. Convertible 2P T/A Otto",
    Nox: 0.01174,
    Rendimiento: 4.7
  },
  {
    Marca: "Ferrari",
    Tipo: "Hatch Back",
    Modelo: "FF 6,3 Lts. V12 48v DOHC Hatch back 3P. T/DCT",
    Nox: 0.0118,
    Rendimiento: 3.9
  },
  {
    Marca: "Ferrari",
    Tipo: "Hatch Back",
    Modelo: "GTC4Lusso 6,3 Lts. Hatch Back 2P. T/A 4x4 Otto",
    Nox: 0.01359,
    Rendimiento: 4.3
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Abarth 595 Turismo 1,4 Lts. DOHC Cabriolet 2P. T/M (Robotizada) Motor Otto",
    Nox: 0.012,
    Rendimiento: 11.8
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Abarth T-Jet 1,4 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0138,
    Rendimiento: 11.8
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Lounge 1,4 Lts. DOHC Cabriolet 2P. T/M Motor Otto",
    Nox: 0.0102,
    Rendimiento: 11.6
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Pop 1,2 Lts. Cabriolet 2P. T/M Otto",
    Nox: 0.00515,
    Rendimiento: 13.1
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Pop 1,2 Lts. DOHC Cabriolet 2P. T/M Dualogic Motor Otto",
    Nox: 0.01515,
    Rendimiento: 13.9
  },
  {
    Marca: "Fiat",
    Tipo: "Cabriolet",
    Modelo: "500 Pop 1,2 Lts. DOHC Cabriolet 2P. T/M Motor Otto",
    Nox: 0.01515,
    Rendimiento: 13.9
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Fullback 2,4 Lts. TD 152 HP Pick Up 4P. 4WD 6MT",
    Nox: 0.1583,
    Rendimiento: 10.8
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Fullback 2,4 Lts. TD 152 HP Pick Up 4P. 6MT",
    Nox: 0.1583,
    Rendimiento: 10.8
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Fullback 2,4 Lts. TD 178 HP Pick Up 4P. 4WD T/A",
    Nox: 0.1854,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Fullback 2,4 Lts. TD 178 HP Pick Up 4P. T/A",
    Nox: 0.1854,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Adventure 1,6 SOHC Pick Up Cabina Doble 3P. T/M Motor Otto",
    Nox: 0.0241,
    Rendimiento: 9.6
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Adventure 1,6 SOHC Pick Up Cabina Extendida 2P. T/M Motor Otto",
    Nox: 0.0241,
    Rendimiento: 9.6
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Trekking 1,4 Lts. SOHC Camioneta Doble Cabina 3P. T/M Motor Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Working 1,4 Lts. SOHC Camioneta Cabina Extendida 2P. T/M Motor Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Working 1,4 Lts. SOHC Camioneta Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Fiat",
    Tipo: "Camioneta",
    Modelo: "Strada Working 1,4 Lts. SOHC Camioneta Doble Cabina 3P. T/M Motor Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Fiat",
    Tipo: "Casa Rodante",
    Modelo: "Ducato (T69L) 2,3 Lts. Furgon 3P. T/M",
    Nox: 0.0722,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Casa Rodante",
    Modelo: "Ducato 2,3 Furgon T/M",
    Nox: 0.19961,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Casa Rodante",
    Modelo: "Ducato Hobby Vantana 65",
    Nox: 0.0722,
    Rendimiento: 12.7
  },
  {
    Marca: "Fiat",
    Tipo: "Casa Rodante",
    Modelo: "Ducato Hobby Vantana 65",
    Nox: 0.0603,
    Rendimiento: 12.7
  },
  {
    Marca: "Fiat",
    Tipo: "Casa Rodante",
    Modelo: "Furgon Cerrado (Casa Rodante)",
    Nox: 0.0722,
    Rendimiento: 11.8
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Doblo Maxi Cargo Corto 1,3 Lts. DOHC Multijet 90CV Furgon 5P. T/M Motor Diesel",
    Nox: 0.1776,
    Rendimiento: 13.5
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Doblo Maxi Cargo Corto 1,3 Lts. Multijet 90CV Furgon 5P. T/M",
    Nox: 0.1844,
    Rendimiento: 13.7
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Doblo Maxi Cargo Largo 1,3 Lts. DOHC Multijet 90CV Furgon 5P. T/M Motor Diesel",
    Nox: 0.1776,
    Rendimiento: 13.5
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Doblo Maxi Cargo Largo 1,3 Lts. Multijet 90CV Furgon 5P. T/M",
    Nox: 0.1844,
    Rendimiento: 13.7
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Ducato 130CV Multijet Maxi Cargo Corta 2,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.208,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Ducato 130CV Multijet Maxi Cargo Larga 2,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.208,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Ducato Cargo Techo Alto/Paso Largo 2,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.208,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Ducato Multijet Cargo 8m3  2,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.208,
    Rendimiento: 11.2
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Fiorino Cargo City 1,2 Lts. DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1438,
    Rendimiento: 14.6
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Fiorino Cargo City 1,4 Lts. DOHC Furgon 4P. T/M Motor Otto",
    Nox: 0.0075,
    Rendimiento: 10.5
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Fiorino Cargo City 1,4 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.4
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Fiorino JTD 1,2 DOHC Furgon 5P. (95 CV) T/M Motor Diesel",
    Nox: 0.1421,
    Rendimiento: 18.9
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon cerrado",
    Modelo: "Nueva Fiorino Fire 1,4 Lts. SOHC Furgon 4P. T/M Motor Otto",
    Nox: 0.01105,
    Rendimiento: 10.2
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon",
    Modelo: "Doblo Cargo Maxi 1,6 Lts. DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.2018,
    Rendimiento: 13.7
  },
  {
    Marca: "Fiat",
    Tipo: "Furgon",
    Modelo: "Doblo Cargo Maxi XL 1,6 Lts. DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.2018,
    Rendimiento: 13.7
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 Abarth 595 Competizione T-Jet 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02284,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 L 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0228,
    Rendimiento: 12
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 L Lounge 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0228,
    Rendimiento: 12
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 L Trekking JTD 1,3 Lts. DOHC Hatch Back 4P. T/M (Robotizada) Motor Diesel",
    Nox: 0.13948,
    Rendimiento: 21.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 L Trekking JTD 1,3 Lts. DOHC Hatch Back 4P. T/M Motor Diesel",
    Nox: 0.15349,
    Rendimiento: 19.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 Lounge 1,4 Lts. DOHC Hatch Back 5P. T/M Dualogic Motor Otto",
    Nox: 0.0102,
    Rendimiento: 11.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 Lounge 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0102,
    Rendimiento: 11.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 Pop 1,2 Lts. DOHC Hatch Back 2P. T/M Motor Otto",
    Nox: 0.01515,
    Rendimiento: 13.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500 Pop 1,2 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.00515,
    Rendimiento: 13.1
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500C Spiaggina",
    Nox: 0.0404,
    Rendimiento: 15.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X 110 CV 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.02141,
    Rendimiento: 12.7
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X AWD 2,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00325,
    Rendimiento: 7.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X City Cross 1,4T MT 140cv",
    Nox: 0.02515,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X City Cross 1.6L M/T 110cv",
    Nox: 0.02141,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Cross 1.4T DDCT 140cv",
    Nox: 0.0256,
    Rendimiento: 9.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Cross AWD AT9 Turbo 170 CV 1,4 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.0124,
    Rendimiento: 11.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Cross MT 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.02515,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Cross TCT Turbo 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0256,
    Rendimiento: 9.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Pop 1,4 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.02515,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "500X Urban 1.6L M/T 110cv",
    Nox: 0.02141,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo 1,3 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00705,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo HGT 1,8 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0142,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo HGT 1,8 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.0113,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo Precision 1,8 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0142,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo Precision 1,8 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.0113,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Argo Trekking 1.3",
    Nox: 0.0094,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Bravo 1,4 Lts. DOHC 90 CV Hatch Back 5P. T/M Motor Otto",
    Nox: 0.014,
    Rendimiento: 11.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Bravo 1,4 Lts. DOHC TJET 120 CV Hatch Back 5P. T/M Motor Otto",
    Nox: 0.018,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Bravo 1,6 Lts. DOHC JTD Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.14738,
    Rendimiento: 18.2
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Grande Punto Active E5 1,4 Lts. SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.018,
    Rendimiento: 12.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Grande Punto Dynamic JTD 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.147,
    Rendimiento: 19.2
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Grande Punto Pop 1,2 Lts. SOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01115,
    Rendimiento: 12.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Mobi Easy",
    Nox: 0.0062,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Mobi Way",
    Nox: 0.0062,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Palio Attractive E5 1,4 Lts. SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00595,
    Rendimiento: 10.6
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Punto Pop E6 1,2 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.008,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Punto Pop E6 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.008,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Qubo Active 1.4 (300.4PB) Hatch Back 4P. T/M Otto",
    Nox: 0.01825,
    Rendimiento: 9.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatch Back",
    Modelo: "Qubo Dynamic 1.4 (300.5PB) Hatch Back 4P. T/M Otto",
    Nox: 0.01825,
    Rendimiento: 9.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "500 Pop 1,2 Lts. Hatchback 3P. T/M Dualogic Motor Otto",
    Nox: 0.01515,
    Rendimiento: 13.9
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Mobi Like",
    Nox: 0.0062,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Mobi Trekking",
    Nox: 0.0062,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Punto E6 1,4 Lts. Hatchback 3P. T/M Otto",
    Nox: 0.01307,
    Rendimiento: 13.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Punto E6 1,4 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.01307,
    Rendimiento: 13.3
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Uno Attractive 1,4 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.0109,
    Rendimiento: 11.1
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Uno Sporting 1,4 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.0109,
    Rendimiento: 11.1
  },
  {
    Marca: "Fiat",
    Tipo: "Hatchback",
    Modelo: "Uno Way 1,4 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.0109,
    Rendimiento: 11.1
  },
  {
    Marca: "Fiat",
    Tipo: "Minibus",
    Modelo: "Ducato FL 2,3 Lts. Minibus (17 asientos) T/M Diesel",
    Nox: 0.2437,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Minibus",
    Modelo: "Ducato L2-H3 Pasajeros 2,3 Lts. DOHC Minibus 4P. (17 asientos) T/M Motor Diesel",
    Nox: 0.2437,
    Rendimiento: 11.5
  },
  {
    Marca: "Fiat",
    Tipo: "Minivan",
    Modelo: "Qubo Dynamic 1,4 Lts. SOHC Mini Van 5P. (5 asientos) T/M Motor Otto",
    Nox: 0.0143,
    Rendimiento: 12.2
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Cronos 1,3 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00705,
    Rendimiento: 12.3
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Cronos Drive 1,8 Lts. Sedan 4P. T/A",
    Nox: 0.0142,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Cronos Precision 1,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0142,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Cronos Precision 1,8 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0113,
    Rendimiento: 9.5
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Linea Active JTD 1,2 Lts. DOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.14402,
    Rendimiento: 15.4
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Linea E5 1,4 Lts. SOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0255,
    Rendimiento: 11
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Tipo Easy 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.013,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Tipo Lounge 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.013,
    Rendimiento: 10.4
  },
  {
    Marca: "Fiat",
    Tipo: "Sedan",
    Modelo: "Tipo Pop 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.013,
    Rendimiento: 10.4
  },
  {
    Marca: "Ford",
    Tipo: "Cabriolet",
    Modelo: "Mustang 2,3 Lts. Cabriolet",
    Nox: 0.01299,
    Rendimiento: 7.1
  },
  {
    Marca: "Ford",
    Tipo: "Cabriolet",
    Modelo: "Mustang 2,3 Lts. Cabriolet 2P. T/A",
    Nox: 0.01299,
    Rendimiento: 9.6
  },
  {
    Marca: "Ford",
    Tipo: "Cabriolet",
    Modelo: "Mustang 3,7 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0025,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F - 150.",
    Nox: 0.01444,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 Lariat Luxury 3.0 Diesel",
    Nox: 0.05455,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 Platinium",
    Nox: 0.00708,
    Rendimiento: 6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 Platinum 3,5 Lts. Ecoboost Pick Up 4P. T/A",
    Nox: 0.005,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 Platinum 3,5 Lts. Ecoboost Pick Up 4P. T/A Otto",
    Nox: 0.013,
    Rendimiento: 5.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT 3,5 Lts. TIVCT Pick Up 2P. T/A 4x2 Otto",
    Nox: 0.01,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT 3,5 Lts. TIVCT Pick Up 2P. T/A 4x4 Otto",
    Nox: 0.01,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT 3,5 Lts. TIVCT Pick Up 4P. T/A 4x2 Otto",
    Nox: 0.01,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT 3.0 Diesel",
    Nox: 0.05455,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT CC",
    Nox: 0.00329,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F 150 XLT RC",
    Nox: 0.00329,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 Lariat 5,0 DOHC Pick Up Doble Cabina  4P. 4x4 T/A Motor Otto",
    Nox: 0.01187,
    Rendimiento: 5.1
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 Raptor 3,5 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0128,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 Raptor Crew CAB 3,5 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 Shelby 4.7 T/A",
    Nox: 0.0122,
    Rendimiento: 4.5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 Shelby 5.0 T/A",
    Nox: 0.0152,
    Rendimiento: 5.5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 STX",
    Nox: 0.00313,
    Rendimiento: 6.5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 XLT 3,7 DOHC Pick Up Cabina Doble 4P. 4x2 T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 XLT 3,7 DOHC Pick Up Cabina Simple 2P. 4x2 T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 XLT 3,7 DOHC Pick Up Cabina Simple 2P. 4x4 T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F-150 XLT 5,0 DOHC Pick Up Doble Cabina  4P. 4x4 T/A Motor Otto",
    Nox: 0.01187,
    Rendimiento: 5.1
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat 5,0 Lts. Camioneta 4P. T/A 4x4 Otto",
    Nox: 0.0153,
    Rendimiento: 5.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Luxury",
    Nox: 0.00534,
    Rendimiento: 5.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Luxury 5,0 Lts. Camioneta 4P. T/A 4x4 Motor Otto",
    Nox: 0.005,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Shelby 5.0 Camioneta 4P. T/A Otto",
    Nox: 0.0061,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Sport",
    Nox: 0.00534,
    Rendimiento: 5.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Sport 5,0 Lts. Camioneta 4P. T/A 4x4 Motor Otto",
    Nox: 0.005,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Lariat Sport 5,0 Lts. Camioneta 4P. T/A 4x4 Otto",
    Nox: 0.0153,
    Rendimiento: 5.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Limited Ecoboost 3,5 Lts. Pick Up 4P. T/A 4x4 Otto",
    Nox: 0.0144,
    Rendimiento: 6.1
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Platinum 3,5 Lts. DOHC Pick Up Doble Cabina 4P. 4x4 T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 5.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Platinum Ecoboost 3,5 Lts. Pick Up 4P. T/A 4x4 Otto",
    Nox: 0.0144,
    Rendimiento: 6.1
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Camioneta 4P. T/A",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Camioneta 4P. T/A 4x4 Otto",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.015,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 3,5 Lts. Crew D/Cab 4x4 Aut Otto",
    Nox: 0.01,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 Raptor 6,2 SOHC Pick Up Cabina y Media 4P. 4x4 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 4.3
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT",
    Nox: 0.00534,
    Rendimiento: 5.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 3,3 Lts. Pick Up 2P. T/A 4x2 Otto",
    Nox: 0.00267,
    Rendimiento: 6.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 3,3 Lts. Pick Up 2P. T/A 4x4 Otto",
    Nox: 0.00267,
    Rendimiento: 6.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 3,3 Lts. Pick Up 4P. T/A 4x2 Otto",
    Nox: 0.00267,
    Rendimiento: 6.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 3,5 Lts. Camioneta 4P. T/A",
    Nox: 0.01,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 5,0 Lts. Camioneta 4P. T/A 4x4 Otto",
    Nox: 0.0153,
    Rendimiento: 5.4
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "F150 XLT 5,0 Lts. Camioneta 4P. T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger",
    Nox: 0.0302,
    Rendimiento: 6.7
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 2,2 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.2682,
    Rendimiento: 10
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 2,2 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.2682,
    Rendimiento: 10
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 2,5 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Otto",
    Nox: 0.04905,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 3,2 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.2553,
    Rendimiento: 8.7
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 4x2",
    Nox: 0.2445,
    Rendimiento: 12.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger 4x4",
    Nox: 0.2445,
    Rendimiento: 12.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger Limited 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Otto",
    Nox: 0.02455,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger Limited 3,2. Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger Raptor",
    Nox: 0.236,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger Storm",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XL 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Otto",
    Nox: 0.02455,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XL 3,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.2377,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XL 3,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2377,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XL 3,2. Lts. Pick Up 4P. T/M 4x2 Diesel",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XL 3,2. Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLS",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLT 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Otto",
    Nox: 0.02455,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLT 3,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.2377,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLT 3,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2377,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLT 3,2. Lts. Pick Up 4P. T/M 4x2 Diesel",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Ranger XLT 3,2. Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.244,
    Rendimiento: 10.6
  },
  {
    Marca: "Ford",
    Tipo: "Camioneta",
    Modelo: "Transit 2,2L Chasis Cabina T/M",
    Nox: 0.2626,
    Rendimiento: 9.6
  },
  {
    Marca: "Ford",
    Tipo: "Convertible",
    Modelo: "Mustang GT 5,0 Lts. Convertible 2P. T/A Otto",
    Nox: 0.00603,
    Rendimiento: 5.2
  },
  {
    Marca: "Ford",
    Tipo: "Convertible",
    Modelo: "Mustang GT 5,0 Lts. T/A",
    Nox: 0.01118,
    Rendimiento: 5.8
  },
  {
    Marca: "Ford",
    Tipo: "Convertible",
    Modelo: "Mustang GT 5,0 T/A",
    Nox: 0.0059,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang",
    Nox: 0.00603,
    Rendimiento: 5.3
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 2,3 Coupe 2P TA",
    Nox: 0.01299,
    Rendimiento: 7.5
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 2,3 Lts. Coupe 2P. T/A",
    Nox: 0.01298,
    Rendimiento: 7.1
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 2,3 Lts. Coupe T/A",
    Nox: 0.0081,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 2,3 TA",
    Nox: 0.01299,
    Rendimiento: 7.5
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Coupe T/A",
    Nox: 0.0025,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Coupe T/A",
    Nox: 0.0025,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0095,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Lts. Coupe T/A",
    Nox: 0.0025,
    Rendimiento: 6.8
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Lts. Coupe T/A",
    Nox: 0.0025,
    Rendimiento: 6.8
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 3,7 Lts. Coupe T/A",
    Nox: 0.0025,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 5,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0059,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 5,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01375,
    Rendimiento: 6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang 5,0 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0079,
    Rendimiento: 4.9
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang Ecoboost",
    Nox: 0.01206,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang Ecoboost 2.3 Lts. Coupe 2P. T/M Otto",
    Nox: 0.01299,
    Rendimiento: 9.6
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang Ecoboost 2.3 Lts. Coupe T/A",
    Nox: 0.0081,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang GT 5,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00603,
    Rendimiento: 5.2
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang GT 5,0 Lts. Coupe 2P. T/M Otto",
    Nox: 0.00603,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Coupe",
    Modelo: "Mustang Shelby GT350 5,2 Lts. Coupe 2P. T/M Otto",
    Nox: 0.0212,
    Rendimiento: 4.6
  },
  {
    Marca: "Ford",
    Tipo: "Covertible",
    Modelo: "Mustang 5,0 Lts. Convertible 2P. T/A Motor Otto",
    Nox: 0.0059,
    Rendimiento: 5
  },
  {
    Marca: "Ford",
    Tipo: "Furgon cerrado",
    Modelo: "Transit 2,2 Lts. SOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.20296,
    Rendimiento: 10
  },
  {
    Marca: "Ford",
    Tipo: "Furgon cerrado",
    Modelo: "Transit 2,2 Lts. SOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.20296,
    Rendimiento: 10
  },
  {
    Marca: "Ford",
    Tipo: "Furgon Cerrado",
    Modelo: "Transit 2,2L Furgon (10,7 m3) T/M",
    Nox: 0.2626,
    Rendimiento: 9.6
  },
  {
    Marca: "Ford",
    Tipo: "Furgon",
    Modelo: "Transit Custom Furgon",
    Nox: 0.26064,
    Rendimiento: 14.1
  },
  {
    Marca: "Ford",
    Tipo: "Furgon",
    Modelo: "Transit Custom Furgon 3,035",
    Nox: 0.26064,
    Rendimiento: 14.1
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Fiesta 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0023,
    Rendimiento: 11.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Fiesta 1,6 Lts. Hatch Back 5P T/A Otto",
    Nox: 0.0219,
    Rendimiento: 10.5
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Fiesta 1,6 Lts. Hatch Back 5P. T/M 4x2 Otto",
    Nox: 0.01645,
    Rendimiento: 11.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Fiesta Titanium1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0023,
    Rendimiento: 11.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0052,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0101,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0102,
    Rendimiento: 9.5
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00329,
    Rendimiento: 9
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus RS 2,3 Lts. Hatch Back 5P. T/M 4x4 Otto",
    Nox: 0.022,
    Rendimiento: 7.7
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Focus SE 2,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00329,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatch Back",
    Modelo: "Ka 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.03495,
    Rendimiento: 12.4
  },
  {
    Marca: "Ford",
    Tipo: "Hatchback",
    Modelo: "Focus 2,0 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 9.5
  },
  {
    Marca: "Ford",
    Tipo: "Hatchback",
    Modelo: "Focus 2,0 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.0073,
    Rendimiento: 10.1
  },
  {
    Marca: "Ford",
    Tipo: "Hatchback",
    Modelo: "Focus Titanium 2,0 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 9.5
  },
  {
    Marca: "Ford",
    Tipo: "Minibus",
    Modelo: "Transit 16 Asientos",
    Nox: 0.2626,
    Rendimiento: 9.6
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fiesta 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0023,
    Rendimiento: 11.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0052,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0101,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00329,
    Rendimiento: 9
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 9.5
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0073,
    Rendimiento: 10.1
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Focus SE 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00329,
    Rendimiento: 9.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,0 Lts. Sedan 4P. T/A CVT Hibrido",
    Nox: 0.00269,
    Rendimiento: 18.6
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.00269,
    Rendimiento: 14.7
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00404,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,0 Lts., DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0025,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,5 Lts. Sedan 4P. T/A",
    Nox: 0.00118,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Fusion 2,5 Lts., DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0019,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Ka 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.03495,
    Rendimiento: 12.4
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Taurus Limited 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0305,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Taurus Limited 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0305,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Sedan",
    Modelo: "Taurus SEL 3,5 Lts. Sedan 4P. T/A",
    Nox: 0.0305,
    Rendimiento: 6.6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Bronco Sport",
    Nox: 0.00311,
    Rendimiento: 11.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Bronco Sport Wildtrak",
    Nox: 0.00808,
    Rendimiento: 8.5
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport 1,5 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.162,
    Rendimiento: 17.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport 1,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0183,
    Rendimiento: 10.7
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport 1,5 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.1565,
    Rendimiento: 18.8
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport 1,5 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0139,
    Rendimiento: 11.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Ecosport 1,6 Lts. DOHC Station Wagon (Tipo SUV) 5P. T/M Motor Otto",
    Nox: 0.0221,
    Rendimiento: 10.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Ecosport 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0156,
    Rendimiento: 10.1
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.02295,
    Rendimiento: 8.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "EcoSport Storm 2,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.01153,
    Rendimiento: 8.5
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 2,0 Lts. Station Wagon 4P. T/A 4x2 Otto",
    Nox: 0.0103,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 2,0 Lts. Station Wagon 4P. T/A AWD Otto",
    Nox: 0.0103,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 2,0 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.02754,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 2,7 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02438,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 3,5 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.00437,
    Rendimiento: 6.7
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Edge 3,5 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.00627,
    Rendimiento: 6.3
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape (R9MB) 6F35 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0165,
    Rendimiento: 7.6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape (R9MB) 6F35 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0165,
    Rendimiento: 7.6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 1.5L",
    Nox: 0.01306,
    Rendimiento: 12.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01064,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.03819,
    Rendimiento: 16.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01064,
    Rendimiento: 7.8
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2,0 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.04229,
    Rendimiento: 19.8
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2.0L",
    Nox: 0.01099,
    Rendimiento: 7.7
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape 2.0L AWD",
    Nox: 0.01099,
    Rendimiento: 7.7
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Escape FHEV",
    Nox: 0.00273,
    Rendimiento: 24.4
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Expedition Limited 3,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0073,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Expedition Limited 3,5 Lts. Station Wagon 5P. 8 asientos T/A 4x4 Otto",
    Nox: 0.0041,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Expedition XLT 3,5 Lts. Station Wagon 5P. 8 asientos T/A 4x2 Otto",
    Nox: 0.0041,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Expedition XLT 3,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0073,
    Rendimiento: 5.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer",
    Nox: 0.00932,
    Rendimiento: 7.5
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer 2,0 DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0045,
    Rendimiento: 7.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer 3,5 Lts. Station Wagon 5P. T/A",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer 3,5 Lts. Station Wagon 5P. T/A",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer 3,5 Lts. T/A Otto",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer 4X2",
    Nox: 0.01124,
    Rendimiento: 7.1
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer ADW",
    Nox: 0.01124,
    Rendimiento: 7.1
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Ecoboost 2,3 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01745,
    Rendimiento: 6.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Ecoboost Limited 2,3 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01745,
    Rendimiento: 6.9
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Limited 2,3 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01834,
    Rendimiento: 7
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Limited 3,5 DOHC Station Wagon 5P. T/A 4WD Motor Otto",
    Nox: 0.005,
    Rendimiento: 6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Limited 3,5 Lts. Station Wagon 4 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Limited 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer Platinum 3,5 Lts. T/A",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer RXL 3,5 Lts. Station Wagon 5P. T/A",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer XLT 3,5 DOHC Station Wagon 5P. T/A 2WD Motor Otto",
    Nox: 0.005,
    Rendimiento: 6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer XLT 3,5 DOHC Station Wagon 5P. T/A 4WD Motor Otto",
    Nox: 0.005,
    Rendimiento: 6
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer XLT 3,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Explorer XLT 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02092,
    Rendimiento: 6.2
  },
  {
    Marca: "Ford",
    Tipo: "Station Wagon",
    Modelo: "Territory",
    Nox: 0.003,
    Rendimiento: 9.5
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Edge 2,0 Lts. DOHC SUV 5P. T/A Motor Otto",
    Nox: 0.01437,
    Rendimiento: 7.3
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape 2,0 Lts. DOHC SUV 5P. T/A 4x2 Motor Otto",
    Nox: 0.006,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape 2,0 Lts. DOHC SUV 5P. T/A 4x2 Motor Otto",
    Nox: 0.01336,
    Rendimiento: 8.3
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape 2,0 Lts. DOHC SUV 5P. T/A 4x4 Motor Otto",
    Nox: 0.006,
    Rendimiento: 7.4
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape 2,0 Lts. DOHC SUV 5P. T/A 4x4 Motor Otto",
    Nox: 0.01336,
    Rendimiento: 8.3
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape 2,5 Lts. DOHC SUV 5P. T/A Motor Otto",
    Nox: 0.0103,
    Rendimiento: 8.3
  },
  {
    Marca: "Ford",
    Tipo: "SUV",
    Modelo: "Escape S 2,5 Lts. DOHC SUV 5P. T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 8.5
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT 500 2,8 Lts. Camioneta 2P. T/M 4x4 Diesel",
    Nox: 0.2052,
    Rendimiento: 8.3
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Foton G7 (4x2)",
    Nox: 0.1555,
    Rendimiento: 11.6
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Foton G7 (4x4)",
    Nox: 0.1555,
    Rendimiento: 11.6
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT 500 2,8 Lts. Camioneta 2P. T/M 4x2 Diesel",
    Nox: 0.2052,
    Rendimiento: 8.3
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT 500 2,8 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.2052,
    Rendimiento: 8.3
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT 500 2,8 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.2052,
    Rendimiento: 8.3
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT-500 2,8 Lts. Camioneta 4P. T/A 4x2 Diesel",
    Nox: 0.2116,
    Rendimiento: 9.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT-500 2,8 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.2116,
    Rendimiento: 9.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Cabina Extendida 4x2 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Cabina Extendida 4x4 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Cabina Simple 4x2 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Cabina Simple 4x4 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Doble Cabina 4x2 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FT500 2,8 Camioneta Doble Cabina 4x4 T/M",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FU500 (4x2)",
    Nox: 0.1555,
    Rendimiento: 11.6
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "FU500 (4x4)",
    Nox: 0.1555,
    Rendimiento: 11.6
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Cargobox 1,3 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 10.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Cargobox 1,5 Lts. Cabina Simple Caja 2P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Cargobox frio 1,5 Lts. Cabina Simple Caja Refrigerada 2P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Doble Cabina 1,3 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 10.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Pick Up CS 1,3 Lts. 2P. T/M 4x2 Otto",
    Nox: 0.0363,
    Rendimiento: 10.4
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Pick Up DC 1,3 Lts. 4P. T/M 4x2 Otto",
    Nox: 0.0363,
    Rendimiento: 10.4
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Refritruck 1,3 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 10.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Truck 1,3 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 10.2
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Truck 1,5 Lts. Pick Up Cabina Simple 2P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Midi Truck 1,5 Lts. Pick Up Doble Cabina 4P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "New FT 500 (4x2)",
    Nox: 0.1553,
    Rendimiento: 11.4
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "New FT 500 (4x4)",
    Nox: 0.1553,
    Rendimiento: 11.4
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta cabina extendida 2P. 4x2 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta cabina extendida 2P. 4x4 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta cabina simple 2P. 4x2 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta cabina simple 2P. 4x4 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. Camioneta Cabina y Media 2P. T/M 4x4 Diesel",
    Nox: 0.2069,
    Rendimiento: 8.8
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta doble cabina 4P. 4x2 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. camioneta doble cabina 4P. 4x4 T/M Diesel",
    Nox: 0.2382,
    Rendimiento: 9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.3885,
    Rendimiento: 8.9
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. SOHC Camioneta Cabina Simple 2P. T/M 4x4 Motor Diesel",
    Nox: 0.2069,
    Rendimiento: 8.8
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. SOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.2069,
    Rendimiento: 8.8
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota 2,8 Lts. SOHC Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2069,
    Rendimiento: 8.8
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota GX ST 2,4 Lts. Pick Up Cabina doble 4P. T/M Otto",
    Nox: 0.01095,
    Rendimiento: 7.5
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Terracota GX ST 2,4 Lts. Pick Up Cabina simple 2P. T/M Otto",
    Nox: 0.01095,
    Rendimiento: 7.5
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "TM3 MAS C/S",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "TM3 MAS Cargo Box",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "TM3 MAS D/C",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "TM3 MAS Refritruck",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Urban Truck C/S",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Camioneta",
    Modelo: "Urban Truck D/C",
    Nox: 0.02673,
    Rendimiento: 8.7
  },
  {
    Marca: "Foton",
    Tipo: "Furgn",
    Modelo: "Midi Plus Cargo Van 1,5 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0196,
    Rendimiento: 11.1
  },
  {
    Marca: "Foton",
    Tipo: "Furgon Cerrado",
    Modelo: "JHW5030XSHB5 Food Truck 1,3 Lts. Furgon 3P. T/M",
    Nox: 0.01245,
    Rendimiento: 10.2
  },
  {
    Marca: "Foton",
    Tipo: "Furgon cerrado",
    Modelo: "K1 Cargo 2,0 Lts. Furgon 2P. T/M",
    Nox: 0.0108,
    Rendimiento: 7.1
  },
  {
    Marca: "Foton",
    Tipo: "Furgon Cerrado",
    Modelo: "K1 Cargo 2,8 Lts. Furgon 2P. 3 Asientos T/M 4x2 Diesel",
    Nox: 0.1799,
    Rendimiento: 8.9
  },
  {
    Marca: "Foton",
    Tipo: "Furgon cerrado",
    Modelo: "Midi Cargo 1,2 Lts. Furgon 5P. T/M",
    Nox: 0.01155,
    Rendimiento: 10.6
  },
  {
    Marca: "Foton",
    Tipo: "Furgon cerrado",
    Modelo: "Midi Cargo Box 1,3 Lts. 2P. T/M 4x2 Otto",
    Nox: 0.0363,
    Rendimiento: 10.4
  },
  {
    Marca: "Foton",
    Tipo: "Furgon cerrado",
    Modelo: "Midi Cargo L 1,2 Lts. Furgon 5P. T/M",
    Nox: 0.01155,
    Rendimiento: 10.6
  },
  {
    Marca: "Foton",
    Tipo: "Furgon",
    Modelo: "K1 2,0 Lts. SOHC Furgon 4P. T/M Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1 2,0 Lts. Minibus 10 asientos 3P. T/M",
    Nox: 0.0108,
    Rendimiento: 7.1
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1 2,0 Lts. Minibus 14 asientos 3P. T/M",
    Nox: 0.0108,
    Rendimiento: 7.1
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1 2,0 Lts. Minibus 15 asientos 3P. T/M",
    Nox: 0.0108,
    Rendimiento: 7.1
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1 2,0 Lts. SOHC Minibus 4P. (10 asientos) T/M Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1 D 2,8 Lts. Minibus 3P. 14 Asientos T/M 4x2 Diesel",
    Nox: 0.1799,
    Rendimiento: 8.9
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1D Escolar 2,8 Lts. Minibus 23 Asientos 3P. T/M Diesel",
    Nox: 0.1799,
    Rendimiento: 8.9
  },
  {
    Marca: "Foton",
    Tipo: "Minibus",
    Modelo: "K1D Escolar 2,8 Lts. Minibus 24 Asientos 3P. T/M Diesel",
    Nox: 0.1799,
    Rendimiento: 8.9
  },
  {
    Marca: "Foton",
    Tipo: "Station Wagon",
    Modelo: "Sauvana 2,0 Lts. Station Wagon, 5 asientos 5P. T/M 4x2 Otto",
    Nox: 0.03135,
    Rendimiento: 8
  },
  {
    Marca: "Foton",
    Tipo: "Station Wagon",
    Modelo: "Sauvana 2,0 Lts. Station Wagon, 5 asientos 5P. T/M 4x4 Otto",
    Nox: 0.03135,
    Rendimiento: 8
  },
  {
    Marca: "Foton",
    Tipo: "Station Wagon",
    Modelo: "Sauvana 2,0 Lts. Station Wagon, 7 asientos 5P. T/M 4x2 Otto",
    Nox: 0.03135,
    Rendimiento: 8
  },
  {
    Marca: "Foton",
    Tipo: "Station Wagon",
    Modelo: "Sauvana 2,0 Lts. Station Wagon, 7 asientos 5P. T/M 4x4 Otto",
    Nox: 0.03135,
    Rendimiento: 8
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "Cargo Box Frio 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01845,
    Rendimiento: 10.1
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA 1020 Way M1 1,0 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01425,
    Rendimiento: 10.9
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA 1020 Way M1 Cargo Box 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01845,
    Rendimiento: 10.1
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA 1020 Way M2 1,0 Lts. SOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.01425,
    Rendimiento: 10.9
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA 5020 Cargo Box 1,0 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01425,
    Rendimiento: 10.9
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA 5020 Cargo Box Frio 1,0 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01425,
    Rendimiento: 10.9
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA1020 Way M1 1,3 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01845,
    Rendimiento: 10.1
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Camioneta",
    Modelo: "GA1020 Way M2 1,3 Lts. SOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.01845,
    Rendimiento: 10.1
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Furgon cerrado",
    Modelo: "GA 6381 Way 1,0 Lts., SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00945,
    Rendimiento: 11.2
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Furgon cerrado",
    Modelo: "Starry Cargo (GA6441SE4) 1,5 Lts. Furgon 4P. T/M Otto",
    Nox: 0.01115,
    Rendimiento: 10.4
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Furgon cerrado",
    Modelo: "Way Cargo 1,3 Lts. SOHC Furgon 3P. T/M Motor Otto",
    Nox: 0.01935,
    Rendimiento: 11.1
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Minivan",
    Modelo: "GA 6381 Way 1,0 Lts., SOHC  Minivan 5P. (7 asientos) T/M Motor Otto",
    Nox: 0.00945,
    Rendimiento: 11.2
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Minivan",
    Modelo: "Starry (GA6441SE4) 1,5 Lts. Minivan 7 asientos 4P. T/M Otto",
    Nox: 0.01115,
    Rendimiento: 10.4
  },
  {
    Marca: "Gac Gonow",
    Tipo: "Minivan",
    Modelo: "Way 1,3 Lts. SOHC Minivan 5P. (7 Asientos) T/M Motor Otto",
    Nox: 0.01935,
    Rendimiento: 11.1
  },
  {
    Marca: "Gac",
    Tipo: "Sedan",
    Modelo: "GA-5 Trumpchi 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0143,
    Rendimiento: 7.8
  },
  {
    Marca: "GAC",
    Tipo: "Sedan",
    Modelo: "GA4 AT",
    Nox: 0.019,
    Rendimiento: 11.8
  },
  {
    Marca: "Gac",
    Tipo: "Sedan",
    Modelo: "GA4 MT",
    Nox: 0.02,
    Rendimiento: 11.4
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS-5 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01163,
    Rendimiento: 7.3
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS-5 Trumpchi 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.02,
    Rendimiento: 8.2
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS3 1,5 AT",
    Nox: 0.0086,
    Rendimiento: 11.8
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS3 AT",
    Nox: 0.024,
    Rendimiento: 12.3
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS3 MT",
    Nox: 0.017,
    Rendimiento: 12.8
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS4 1,3 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.03605,
    Rendimiento: 10.2
  },
  {
    Marca: "Gac",
    Tipo: "Station Wagon",
    Modelo: "GS4 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01113,
    Rendimiento: 9.4
  },
  {
    Marca: "Geely",
    Tipo: "Hatch Back",
    Modelo: "EC7 RV 1,8 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0099,
    Rendimiento: 9.2
  },
  {
    Marca: "Geely",
    Tipo: "Hatch Back",
    Modelo: "GS (X) 1,8 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0136,
    Rendimiento: 9.7
  },
  {
    Marca: "Geely",
    Tipo: "Hatch Back",
    Modelo: "GS 1,8 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01245,
    Rendimiento: 9.2
  },
  {
    Marca: "Geely",
    Tipo: "Hatch Back",
    Modelo: "LC 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0256,
    Rendimiento: 14.8
  },
  {
    Marca: "Geely",
    Tipo: "Hatch Back",
    Modelo: "LC 1,3 Lts.DOHC Hatch Back 4P. T/M Motor Otto",
    Nox: 0.0226,
    Rendimiento: 11.2
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "BINRAY 1.0T T/A",
    Nox: 0.02775,
    Rendimiento: 11.9
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "Binray 1.0T T/M",
    Nox: 0.0167,
    Rendimiento: 12.2
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "CK 1,3 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0216,
    Rendimiento: 10.1
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "EC7 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0099,
    Rendimiento: 9.2
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "Emgrand 7 (3JC) 1,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0141,
    Rendimiento: 9.6
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "Emgrand 7 (3JC) 1,8 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0084,
    Rendimiento: 9.1
  },
  {
    Marca: "Geely",
    Tipo: "Sedan",
    Modelo: "GC7 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0065,
    Rendimiento: 10.9
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "EX7 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.02225,
    Rendimiento: 9.2
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "EX7 2,4 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0068,
    Rendimiento: 7.3
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "SX11, 1.5T",
    Nox: 0.02115,
    Rendimiento: 10.1
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "X7 Sport (3J) 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.006,
    Rendimiento: 8.4
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "X7 Sport (3Y) 2,4 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0135,
    Rendimiento: 6.8
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "X7 Sport (3Y) 2,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0135,
    Rendimiento: 6.8
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "X7 Sport 1.5T 6AT",
    Nox: 0.01035,
    Rendimiento: 9.3
  },
  {
    Marca: "Geely",
    Tipo: "Station Wagon",
    Modelo: "X7 Sport 1.5T 7DCT AWD",
    Nox: 0.0141,
    Rendimiento: 9.5
  },
  {
    Marca: "Genesis",
    Tipo: "Sedan",
    Modelo: "G90 HI GDI 5,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0064,
    Rendimiento: 5.9
  },
  {
    Marca: "GMC",
    Tipo: "Camioneta",
    Modelo: "Canyon SLE 3,6 Lts. Camioneta 4x4 T/A",
    Nox: 0.0044,
    Rendimiento: 6.2
  },
  {
    Marca: "GMC",
    Tipo: "Camioneta",
    Modelo: "Canyon SLT EWD 2,5 T/A",
    Nox: 0.0095,
    Rendimiento: 7.3
  },
  {
    Marca: "GMC",
    Tipo: "Camioneta",
    Modelo: "Sierra Denali 1500 4WD Crew Cab",
    Nox: 0.0098,
    Rendimiento: 5.5
  },
  {
    Marca: "GMC",
    Tipo: "Station Wagon",
    Modelo: "SLT YUKON",
    Nox: 0.00422,
    Rendimiento: 5.8
  },
  {
    Marca: "GMC",
    Tipo: "Station Wagon",
    Modelo: "Terrain 2,4 Lts. 4x4 T/A",
    Nox: 0.0056,
    Rendimiento: 7
  },
  {
    Marca: "GMC",
    Tipo: "Station Wagon",
    Modelo: "Yukon XL Denali 6,2 Lts. Station Wagon 5P. T/A",
    Nox: 0.00731,
    Rendimiento: 5.2
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Poer 2.0 T/A 4x4",
    Nox: 0.07675,
    Rendimiento: 9.3
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Poer 2.0 T/M 4x2",
    Nox: 0.1508,
    Rendimiento: 8.9
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Poer 2.0 T/M 4x4",
    Nox: 0.1508,
    Rendimiento: 8.9
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 2,2 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01675,
    Rendimiento: 7.4
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Camioneta 2P. T/M Diesel",
    Nox: 0.2243,
    Rendimiento: 10.4
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Camioneta 4P. T/M Diesel",
    Nox: 0.2243,
    Rendimiento: 10.4
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 CC5031XLJPZ6A T/M",
    Nox: 0.18783,
    Rendimiento: 10.3
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 CC5031XLJPZ6A T/M",
    Nox: 0.18783,
    Rendimiento: 10.3
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 CC5031XLJPZ6A T/M",
    Nox: 0.18783,
    Rendimiento: 10.3
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. Camioneta 2P. T/M 4x4",
    Nox: 0.2033,
    Rendimiento: 9.9
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. Camioneta 4P. T/M 4x4",
    Nox: 0.2033,
    Rendimiento: 9.9
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. SOHC Pick Up Cabina Simple 2P. 4x2 T/M Motor Diesel",
    Nox: 0.2538,
    Rendimiento: 9.7
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. SOHC Pick Up Cabina Simple 2P. 4x4 T/M Motor Diesel",
    Nox: 0.2538,
    Rendimiento: 9.7
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. SOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2538,
    Rendimiento: 9.7
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 5 2,0 Lts. SOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.2538,
    Rendimiento: 9.7
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 6 2,0 Lts. Pick Up 4P. T/M 4x2 Diesel",
    Nox: 0.2085,
    Rendimiento: 10.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 6 2,0 Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.2059,
    Rendimiento: 9.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 6 2,4 Lts. Pick Up 4P. T/M 4x2 Otto",
    Nox: 0.0253,
    Rendimiento: 7.3
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle 6 2,4 Lts. Pick Up 4P. T/M 4x4 Otto",
    Nox: 0.0178,
    Rendimiento: 7.2
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle7 2.0 T/M",
    Nox: 0.2255,
    Rendimiento: 8.8
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle7 2.0 T/M 4x4",
    Nox: 0.234,
    Rendimiento: 9.2
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle7 2.4 T/M 4x2",
    Nox: 0.01106,
    Rendimiento: 6.6
  },
  {
    Marca: "Great Wall",
    Tipo: "Camioneta",
    Modelo: "Wingle7 2.4 T/M 4x4",
    Nox: 0.01106,
    Rendimiento: 6.6
  },
  {
    Marca: "Great Wall",
    Tipo: "Hatch Back",
    Modelo: "M4 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0043,
    Rendimiento: 11.7
  },
  {
    Marca: "Great Wall",
    Tipo: "Sedan",
    Modelo: "C30 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0061,
    Rendimiento: 11.2
  },
  {
    Marca: "Great Wall",
    Tipo: "Sedan",
    Modelo: "C30 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00225,
    Rendimiento: 10.8
  },
  {
    Marca: "Great Wall",
    Tipo: "Sedan",
    Modelo: "Voleex C30 1,5 Lts. DOHC Sedan 4P. T/M Motro Otto",
    Nox: 0.00725,
    Rendimiento: 11.5
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Great Wall 3 2,0 Lts. Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Great Wall 3 2,0 Lts. Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "H6 1,5 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.02135,
    Rendimiento: 9.5
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H3 2,0 Lts. SOHC Station Wagon (Tipo Jeep) 5P. 4x2 T/M Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H3 2,0 Lts. SOHC Station Wagon (Tipo Jeep) 5P. 4x4 T/M Motor Otto",
    Nox: 0.0149,
    Rendimiento: 8.1
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H5 2,4 Lts. SOHC Station Wagon (Tipo Jeep) 5P. 4x2 T/M Motor Otto",
    Nox: 0.02265,
    Rendimiento: 7.4
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H5 2,4 Lts. SOHC Station Wagon (Tipo Jeep) 5P. 4x4 T/M Motor Otto",
    Nox: 0.02265,
    Rendimiento: 7.4
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H6 2,0 Lts. SOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.1625,
    Rendimiento: 10.2
  },
  {
    Marca: "Great Wall",
    Tipo: "Station Wagon",
    Modelo: "Haval H6 2,0 Lts. SOHC Station Wagon 5P. T/M 4x4 Motor Diesel",
    Nox: 0.1625,
    Rendimiento: 10.2
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H2 1,5 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00975,
    Rendimiento: 9.7
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H2 1,5 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00975,
    Rendimiento: 9.7
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H8 2.0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.02825,
    Rendimiento: 6.1
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H8 2.0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.02825,
    Rendimiento: 6.1
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H2 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01775,
    Rendimiento: 8.8
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01885,
    Rendimiento: 8.5
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 1,5 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0281,
    Rendimiento: 9.5
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 1,5 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.01165,
    Rendimiento: 9.9
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 1,5 Turbo T/A",
    Nox: 0.0219,
    Rendimiento: 10.1
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0072,
    Rendimiento: 8.4
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 2.0 Turbo DCT 4x2",
    Nox: 0.00993,
    Rendimiento: 10.4
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 2.0 Turbo DCT 4x4",
    Nox: 0.00993,
    Rendimiento: 9.4
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 Coupe 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.0171,
    Rendimiento: 7.2
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 Sport 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01885,
    Rendimiento: 8.5
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 Sport 1,5 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0281,
    Rendimiento: 9.5
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H6 Sport 1,5 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.01165,
    Rendimiento: 9.9
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H7L 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0126,
    Rendimiento: 7.7
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "H9 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.007,
    Rendimiento: 6.3
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "Jolion 1.5 Turbo DCT",
    Nox: 0.01128,
    Rendimiento: 9.4
  },
  {
    Marca: "Haval",
    Tipo: "Station Wagon",
    Modelo: "Jolion 1.5 Turbo TM",
    Nox: 0.00816,
    Rendimiento: 10.1
  },
  {
    Marca: "Honda",
    Tipo: "Camioneta",
    Modelo: "Ridgeline 3,5 Lts. Camioneta T/A Otto",
    Nox: 0.011,
    Rendimiento: 6.3
  },
  {
    Marca: "Honda",
    Tipo: "Camioneta",
    Modelo: "Ridgeline RT 3,5 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.0065,
    Rendimiento: 6.8
  },
  {
    Marca: "Honda",
    Tipo: "Camioneta",
    Modelo: "Ridgeline RTL 3,5 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.0065,
    Rendimiento: 6.8
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Accord  3,5 Lts. Coupe T/A",
    Nox: 0.00485,
    Rendimiento: 6.6
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Accord Coupe 2,4 Lts. T/A Otto",
    Nox: 0.00225,
    Rendimiento: 8.5
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Accord Coupe Touring 3,5 T/A",
    Nox: 0.00485,
    Rendimiento: 6.6
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Accord EX 2,4 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00246,
    Rendimiento: 8.6
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic 1,8 Lts. SOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 9.8
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic 1,8 Lts. SOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.00255,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic EXT 2 Door 1,5 Lt. Coupe T/A",
    Nox: 0.0021,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic EXTL 2 Door 1,5 Lt. Coupe T/A",
    Nox: 0.0021,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic Si 1,5 Lts. Coupe 2P. T/M Otto",
    Nox: 0.0015,
    Rendimiento: 12.1
  },
  {
    Marca: "Honda",
    Tipo: "Coupe",
    Modelo: "Civic Si 2,4 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0113,
    Rendimiento: 8.6
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Civic 1,5 Lts. Hatch Back T/A Otto",
    Nox: 0.0021,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V EX 2,4 Lts. DOHC Hatch Back 5P. 4x2 T/A Tipo CVT Motor Otto",
    Nox: 0.0011,
    Rendimiento: 9.9
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V EX 2,4 Lts. DOHC Hatch Back 5P. 4x4 T/A Motor Otto",
    Nox: 0.0158,
    Rendimiento: 8.1
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V EXL 2,4 Lts. DOHC Hatch Back 5P. 4x4 T/A Motor Otto",
    Nox: 0.0158,
    Rendimiento: 8.1
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V EXL 2,4 Lts. DOHC Hatch Back 5P. 4x42 T/A Tipo CVT Motor Otto",
    Nox: 0.0011,
    Rendimiento: 9.9
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V EXR 2,4 Lts. DOHC Hatch Back 5P. 4x4 T/A Motor Otto",
    Nox: 0.0158,
    Rendimiento: 8.1
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V LX 2,4 Lts. DOHC Hatch Back 5P. 4x2 T/A Motor Otto",
    Nox: 0.0158,
    Rendimiento: 8.1
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V LX 2,4 Lts. DOHC Hatch Back 5P. 4x2 T/A Tipo CVT Motor Otto",
    Nox: 0.0011,
    Rendimiento: 9.9
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "CR-V LXS 2,4 Lts. DOHC Hatch Back 5P. 4x2 T/A Motor Otto",
    Nox: 0.0158,
    Rendimiento: 8.1
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Fit 1,5 Lts. DOHC Hatch Back 5P. T/A Tipo CVT Motor Otto",
    Nox: 0.00065,
    Rendimiento: 13.8
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Fit 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00055,
    Rendimiento: 12.6
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Pilot 3,5 SOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00405,
    Rendimiento: 6.3
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Pilot EXL 3,5 SOHC Hatch Back 5P. 4x4 T/A Motor Otto",
    Nox: 0.00838,
    Rendimiento: 6.3
  },
  {
    Marca: "Honda",
    Tipo: "Hatch Back",
    Modelo: "Pilot Touring EXL 3,5 SOHC Hatch Back 5P. 4x4 T/A Motor Otto",
    Nox: 0.00838,
    Rendimiento: 6.3
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Accord 2,0 Lts. T Sedan 4P. T/A Otto",
    Nox: 0.0009,
    Rendimiento: 8.4
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Accord 2,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00225,
    Rendimiento: 8.5
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Accord 3,5 Lts. V6 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00485,
    Rendimiento: 6.6
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Accord EXT 1,5 Lts. Sedan 4P. T/A CVT Otto",
    Nox: 0.0003,
    Rendimiento: 11.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City EX 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00207,
    Rendimiento: 13
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City EX 1,5 Lts. SOHC Sedan 4P. T/A (CVT) Motor Otto",
    Nox: 0.0026,
    Rendimiento: 12.9
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City EX Sedan 1.5 Lts. 4P CVT",
    Nox: 0.00422,
    Rendimiento: 13.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City EX Sedan 1.5lts 4P TM",
    Nox: 0.00184,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City EXL Sedan 1.5 Lts. 4P. CVT (Aut)",
    Nox: 0.00422,
    Rendimiento: 13.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City LX 1,5 Lts. SOHC Sedan 4P. T/A (CVT) Motor Otto",
    Nox: 0.0026,
    Rendimiento: 12.9
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City LX 1,5 Lts. SOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00207,
    Rendimiento: 13
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City LX Sedan 1.5 Lts. 4P CVT",
    Nox: 0.00422,
    Rendimiento: 13.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "City LX Sedan 1.5lts 4P TM",
    Nox: 0.00184,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic EX 1,8 Lts. SOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 9.8
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic EX 1,8 Lts. SOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00255,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic EX 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0024,
    Rendimiento: 11.3
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic EXL 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0024,
    Rendimiento: 11.3
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic LX 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0024,
    Rendimiento: 11.3
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Civic LX 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0057,
    Rendimiento: 10.2
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Honda Civic EXLT 1,5 Lts. Sedan 4P. T/A CVT Otto",
    Nox: 0.03085,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Honda Civic EXT 1,5 Lts. Sedan 4P. T/A CVT Otto",
    Nox: 0.03085,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Sedan",
    Modelo: "Honda Civic LX 1,5 Lts. Sedan 4P. T/A CVT Otto",
    Nox: 0.03085,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Civic 1,5 Lts. Station Wagon 5P. T/A",
    Nox: 0.0021,
    Rendimiento: 12.7
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "CR-V EX 2,4 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0002,
    Rendimiento: 9.5
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "CR-V EXL-T 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0106,
    Rendimiento: 10.7
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "CR-V TOURING 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0106,
    Rendimiento: 10.7
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "CR-V Touring EXL-A 1,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0106,
    Rendimiento: 10.7
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V EX 1,8 Lts. Station Wagon 5P. T/A CVT 4x2 Otto",
    Nox: 0.0025,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V EX-L 1,8 Lts. Station Wagon 5P. T/A CVT 4x2 Otto",
    Nox: 0.0025,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V EX-L 1,8 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.0025,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V EXS 1.8 Aut. 4x2",
    Nox: 0.00433,
    Rendimiento: 12.2
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V LX 1,8 Lts. Station Wagon 5P. T/A CVT 4x2 Otto",
    Nox: 0.0025,
    Rendimiento: 11.1
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V LX 1,8 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0029,
    Rendimiento: 10.6
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "HR-V LXS 1.8 Aut. 4x2",
    Nox: 0.00433,
    Rendimiento: 12.2
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Odyssey Elite 3,5 Station Wagon T/A Otto",
    Nox: 0.0153,
    Rendimiento: 6.3
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Pilot Elite 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00439,
    Rendimiento: 6.9
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Pilot EX 3,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00439,
    Rendimiento: 6.9
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Pilot EX 3,5 Lts. Station Wagon T/A Otto",
    Nox: 0.0167,
    Rendimiento: 6.5
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Pilot EXL 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00439,
    Rendimiento: 6.9
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "Pilot Touring 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00439,
    Rendimiento: 6.9
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX Limited 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX Limited 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX Smart 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EX Smart 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V EXL 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX Limited 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX Limited 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX Smart 1,5 Lts. Station Wagon 5P. T/A CVT Otto",
    Nox: 0.0044,
    Rendimiento: 12.8
  },
  {
    Marca: "Honda",
    Tipo: "Station Wagon",
    Modelo: "WR-V LX Smart 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0014,
    Rendimiento: 12
  },
  {
    Marca: "Hyundai",
    Tipo: "Automovil",
    Modelo: "Ioniq AE 1,6 Lts. GDI Automovil 4P. Hibrido T/A",
    Nox: 0.001,
    Rendimiento: 21.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "H350 (LWB) 2,5 Lts. Pick Up 2P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "H350 (SWB) 2,5 Lts. Pick Up 2P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (LWB) 2,5 Lts. Camioneta 2P. T/M Diesel",
    Nox: 0.2003,
    Rendimiento: 6.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (LWB) 2,5 Lts. Camioneta 2P. T/M Diesel",
    Nox: 0.2324,
    Rendimiento: 6.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (LWB) 2,5 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.2324,
    Rendimiento: 6.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (LWB) 2,5 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.2003,
    Rendimiento: 6.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (SWB) 2,5 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.2003,
    Rendimiento: 6.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 (SWB) 2,5 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.2324,
    Rendimiento: 6.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "HD35 SWB 2,5 Lts. Camioneta 2P. T/M Diesel",
    Nox: 0.2267,
    Rendimiento: 7.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Porter II Hi-Super 2,5 Lts. DOHC Camioneta Cabina Extendida Doble Rodado 2P. T/M Motor Diesel",
    Nox: 0.1667,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Porter II Hi-Super 2,5 Lts. DOHC Camioneta Cabina Simple Doble Rodado 2P. T/M Motor Diesel",
    Nox: 0.1667,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Porter II Hi-Super 2,5 Lts. DOHC Camioneta Doble Cabina Doble Rodado 4P. T/M Motor Diesel",
    Nox: 0.1667,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Porter II Hi-Super 2,5 Lts. DOHC Chasis Cabina Simple Doble Rodado 2P. T/M Motor Diesel",
    Nox: 0.1667,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Solati Pick Up (LWB), 2P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Camioneta",
    Modelo: "Solati Pick Up (SWB), 2P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Coupe",
    Modelo: "Elantra JK FL 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00365,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Coupe",
    Modelo: "Elantra JK FL 1,6 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.00475,
    Rendimiento: 11.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Coupe",
    Modelo: "Elantra JK FL 1,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00285,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Coupe",
    Modelo: "Elantra JK FL 1,8 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.00188,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "H350 (SWB) 2,5 Lts. Furgon 5P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "H350 2,5 Lts. Furgon 5P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC 3 Pasajeros Furgon 5P. T/M Motor Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC 3 Pasajeros Furgon 6P. T/M Motor Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "Solati Cargo Van (SWB), Furgon 5P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon cerrado",
    Modelo: "Solati Cargo Van, Furgon 5P. T/M",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon",
    Modelo: "Solati Cargo Van 2 asientos",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Furgon",
    Modelo: "Solati Cargo Van Ambulancia 2,5 Lts. Furgon 5 Asientos 5P. T/M Diesel",
    Nox: 0.2428,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent HC 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00735,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent HC 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0059,
    Rendimiento: 13.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent HC 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.007,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent HC 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00605,
    Rendimiento: 11.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent RB 1,4 Lts. DOHC Hatch Back 5P. T/A Tipo CVT Motor Otto",
    Nox: 0.0047,
    Rendimiento: 12.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent RB 1,4 Lts. DOHC Hatch Back 5P. T/M 6 Velocidades Motor Otto",
    Nox: 0.01058,
    Rendimiento: 13.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent RB 1,6 Lts. CRDi Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1415,
    Rendimiento: 15.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent RB 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0042,
    Rendimiento: 11.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Accent RB 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.003,
    Rendimiento: 11.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Atos AH2",
    Nox: 0.00795,
    Rendimiento: 14.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Eon HA 0,8 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0033,
    Rendimiento: 15.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0192,
    Rendimiento: 13.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA 1,2 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01698,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0057,
    Rendimiento: 13.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA PE 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0321,
    Rendimiento: 12.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA PE 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0364,
    Rendimiento: 12
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand i10 BA PE 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0146,
    Rendimiento: 13.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand-i10 (AI3) 1.2 HB 5P. AT",
    Nox: 0.0072,
    Rendimiento: 12.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Grand-i10 (AI3) 1.2 HB 5P. MT",
    Nox: 0.0314,
    Rendimiento: 14.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i20 IB 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01615,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i20 IB 1,4 Lts. Active Hatch Back 5P. T/M Otto",
    Nox: 0.0074,
    Rendimiento: 12.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i20 IB 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0053,
    Rendimiento: 10.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 GD 1,6 Lts. CRDi DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.12627,
    Rendimiento: 18.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 GD 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00645,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 GD 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00545,
    Rendimiento: 12.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 GD 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00157,
    Rendimiento: 9.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 GD 1,8 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0035,
    Rendimiento: 10.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 PD PE 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0048,
    Rendimiento: 10.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 PD PE 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0045,
    Rendimiento: 11.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 PD PE 2,0 Lts. GDI Hatch Back 5P. T/A Otto",
    Nox: 0.0064,
    Rendimiento: 9.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30 PD PE CRDI 1,6 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.0355,
    Rendimiento: 16.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "i30N PDE GDI 2,0T Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01485,
    Rendimiento: 9.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Ioniq AE Automovil 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Ioniq AE PE",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster FS 1,6 Lts. DOHC Hatch Back 4P. T/A Motor Otto",
    Nox: 0.00885,
    Rendimiento: 10.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster FS 1,6 Lts. DOHC Hatch Back 4P. T/M Motor Otto",
    Nox: 0.01195,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster FS 1,6 Lts. GDi Turbo Hatch Back 4P. T/A",
    Nox: 0.00815,
    Rendimiento: 10.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster FS 1,6 Lts. GDi Turbo Hatch Back 4P. T/M",
    Nox: 0.01195,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster JS 2,0 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0029,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster JS 2,0 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.00175,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster JS GDI 1,6T Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.00625,
    Rendimiento: 11.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatch Back",
    Modelo: "Veloster N 2,0 T GDI Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.0135,
    Rendimiento: 8.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatchback",
    Modelo: "I20 Bi3 1.4 6AT",
    Nox: 0.0085,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Hatchback",
    Modelo: "i20 Bi3 1.4 6MT E6",
    Nox: 0.0045,
    Rendimiento: 12.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "H350 2,5 Lts. Minibus 16 Asientos 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "H350 2,5 Lts. Minibus 17 Asientos (2 Asientos Delanteros) 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "H350 2,5 Lts. Minibus 17 Asientos (3 Asientos Delanteros) 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "Liumousine H350 2,5 Lts. Minibus 10 Asientos 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC (12 asientos) Minibus 5P. T/M Motor Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC (9 asientos) Minibus 5P. T/M Motor Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC E5 Minibus (12 asientos) 5P. T/A Motor Diesel",
    Nox: 0.16032,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC E5 Minibus (9 asientos) 5P. T/A Motor Diesel",
    Nox: 0.16032,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "Solati H350 Escolar 2,5 Lts. 24 Asientos 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "Solati H350 Escolar 2,5 Lts. Minibus (25 Asientos) 5P. T/M Diesel",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "Solati H350 Minibus Executive (14 Asientos)",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Minibus",
    Modelo: "Solati H350 Minibus Executive (15 Asientos)",
    Nox: 0.2236,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HC 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00735,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HC 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0059,
    Rendimiento: 13.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HC 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.007,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HC 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00605,
    Rendimiento: 11.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HC 1,6 Lts. T/A",
    Nox: 0.00464,
    Rendimiento: 11.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HCi 1.4 Sedan 6MT E6",
    Nox: 0.0045,
    Rendimiento: 12.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent HCi 1.6 Sedan 6AT E6",
    Nox: 0.02369,
    Rendimiento: 10.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent RB 1,4 Lts. DOHC Sedan 4P. T/A Tipo CVT Motor Otto",
    Nox: 0.0047,
    Rendimiento: 12.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent RB 1,4 Lts. DOHC Sedan 4P. T/M 6 Velocidades Motor Otto",
    Nox: 0.01058,
    Rendimiento: 13.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent RB 1,6 Lts. CRDi Sedan 4P. T/M Motor Diesel",
    Nox: 0.1415,
    Rendimiento: 15.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent RB 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0042,
    Rendimiento: 11.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Accent RB 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.003,
    Rendimiento: 11.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Azera HG 2,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00295,
    Rendimiento: 8.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Azera HG 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00575,
    Rendimiento: 7.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Azera HG 3,3 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0028,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Azera IG GDI 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0025,
    Rendimiento: 7.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra 4DR GLS",
    Nox: 0.0069,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra AD 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00325,
    Rendimiento: 11.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra AD 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0055,
    Rendimiento: 11.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra AD 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0069,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra AD 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.004,
    Rendimiento: 10.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra CN7 1.6 6MT E6",
    Nox: 0.00412,
    Rendimiento: 11.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra CN7 2.0 6AT E6",
    Nox: 0.00279,
    Rendimiento: 9.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra CN7 2.0 6MT E6",
    Nox: 0.00489,
    Rendimiento: 10.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra MD FL 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00365,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra MD FL 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00475,
    Rendimiento: 11.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra MD FL 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00285,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Elantra MD FL 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00188,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Equus VI 5,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00575,
    Rendimiento: 5.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis DH 3,3 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0018,
    Rendimiento: 6.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis DH 3,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0044,
    Rendimiento: 6.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis DH 5,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0033,
    Rendimiento: 5.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis G80 DH 3.3T -GDI Sedan 4P. T/A Otto",
    Nox: 0.0212,
    Rendimiento: 6.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis G80 DH GDI 3,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01005,
    Rendimiento: 6.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Genesis G90 5,0 Lts. Sedan 4P. T/A",
    Nox: 0.00223,
    Rendimiento: 5.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Grand i10 BA 1,2 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00956,
    Rendimiento: 13.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Grand i10 BA PE 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0139,
    Rendimiento: 13.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Grand-i10 (AI3) 1.2 SDN 4P. AT",
    Nox: 0.0072,
    Rendimiento: 12.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Grand-i10 (AI3) 1.2 SDN 4P. MT",
    Nox: 0.0314,
    Rendimiento: 14.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Sonata DN8 2.5 T/A Otto",
    Nox: 0.0045,
    Rendimiento: 8.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Sonata LF 2,0 Lts. DOHC Sedan 4P. T/A Mottor Otto",
    Nox: 0.00215,
    Rendimiento: 9.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Sonata LF 2,0 Lts. DOHC Sedan 4P. T/M Mottor Otto",
    Nox: 0.0052,
    Rendimiento: 9.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Sonata LF 2,0 Lts. GDI Sedan 4P. T/A Hibrido",
    Nox: 0.0016,
    Rendimiento: 22.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Sonata YF HEV 2,4 Lts. DOHC Sedan 4P. T/A Vehiculo Hibrido Electrico",
    Nox: 0.00604,
    Rendimiento: 15.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Verna CB 1.4 Sedan AT Otto",
    Nox: 0.02435,
    Rendimiento: 12.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Sedan",
    Modelo: "Verna CB 1.4 Sedan MT Otto",
    Nox: 0.01245,
    Rendimiento: 13.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta GS 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00875,
    Rendimiento: 10.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta GS 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.00535,
    Rendimiento: 11.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta GS PE 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.014,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta GS PE 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0163,
    Rendimiento: 10.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta SU2i 1.4T-GDI 7DCT E6",
    Nox: 0.00484,
    Rendimiento: 12.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta SU2i 1.5 6MT E6",
    Nox: 0.01057,
    Rendimiento: 11.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Creta SU2i 1.5 CVT E6",
    Nox: 0.00656,
    Rendimiento: 12.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Grand Santa Fe 2,2 Lts. CRDi DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.139,
    Rendimiento: 10.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Grand Santa Fe NC 3,3 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.002,
    Rendimiento: 6.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Grand Santa Fe NC 3,3 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.002,
    Rendimiento: 6.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Grand Santa Fe NC CRDI E6 2,2 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.01746,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Grand Santa Fe NC CRDI E6 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.01746,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New H-1 MB 2,5 Lts. CRDi DOHC 6 Pasajeros Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL 2,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0023,
    Rendimiento: 8.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00496,
    Rendimiento: 8.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL 4WD 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0023,
    Rendimiento: 8.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL 4WD 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00496,
    Rendimiento: 8.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL Limited 2WD 2,4 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00328,
    Rendimiento: 7.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "New Tucson LM FL Limited 4WD 2,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00328,
    Rendimiento: 7.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade (LX2) 3,8 Lts. Station Wagon 5P. T/A 2WD Otto",
    Nox: 0.0031,
    Rendimiento: 7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade (LX2) 3,8 Lts. Station Wagon 5P. T/A 4WD Otto",
    Nox: 0.0031,
    Rendimiento: 7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade LX2 2.2 CRDI E6 AT 2WD",
    Nox: 0.01806,
    Rendimiento: 10.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade LX2 2.2 CRDI E6 AT 4WD",
    Nox: 0.01806,
    Rendimiento: 10.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade LX2 3.5 8AT 2WD E6",
    Nox: 0.00348,
    Rendimiento: 6.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Palisade LX2 3.5 8AT 4WD E6",
    Nox: 0.00348,
    Rendimiento: 6.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,2 Lts. CRDi GLS DOHC Station Wagon 5P. 2WD T/A Motor Diesel",
    Nox: 0.12019,
    Rendimiento: 11.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,2 Lts. CRDi GLS DOHC Station Wagon 5P. 4WD T/A Motor Diesel",
    Nox: 0.12019,
    Rendimiento: 11.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,4 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00199,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,4 Lts. DOHC Station Wagon 5P. T/A AWD Motor Otto",
    Nox: 0.00199,
    Rendimiento: 7.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,4 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00481,
    Rendimiento: 7.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 2,4 Lts. DOHC Station Wagon 5P. T/M AWD Motor Otto",
    Nox: 0.00481,
    Rendimiento: 7.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 3,3 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.002,
    Rendimiento: 6.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM 3,3 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.002,
    Rendimiento: 6.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM CRDI 2,2 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.02385,
    Rendimiento: 12.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM CRDI 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.02385,
    Rendimiento: 12.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM CRDI E6 2,2 Lts. Station Wagon 7 Asientos 5P. T/M 4x2 Diesel",
    Nox: 0.03425,
    Rendimiento: 14.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM CRDI E6 2,2 Lts. Station Wagon 7 Asientos 5P. T/M 4x4 Diesel",
    Nox: 0.03425,
    Rendimiento: 14.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM GLS 2,2 Lts. CRDi DOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.14635,
    Rendimiento: 13.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe DM GLS 2,2 Lts. CRDi DOHC Station Wagon 5P. T/M 4x4 Motor Diesel",
    Nox: 0.14635,
    Rendimiento: 13.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 CRDI E6 8DCT 2WD",
    Nox: 0.00018,
    Rendimiento: 13
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 CRDI E6 8DCT 4WD",
    Nox: 0.00018,
    Rendimiento: 12.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 Lts. CRDI E6 Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 Lts. CRDI E6 Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 Lts. CRDI E6 Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,2 Lts. CRDI E6 Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,4 Lts. MPI Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00472,
    Rendimiento: 7.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,4 Lts. MPI Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00472,
    Rendimiento: 7.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,4 Lts. MPI Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.00381,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,4 Lts. MPI Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00381,
    Rendimiento: 7.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,5 MPI 6AT 2WD",
    Nox: 0.00476,
    Rendimiento: 8.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Santa Fe TM 2,5 MPI 6AT 4WD",
    Nox: 0.00476,
    Rendimiento: 8.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM 2,0 Lts. CRDi DOHC Station Wagon 5P. T/A 2WD Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM 2,0 Lts. CRDi DOHC Station Wagon 5P. T/A 4WD Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM 2,0 Lts. CRDi DOHC Station Wagon 5P. T/M 2WD Motor Diesel",
    Nox: 0.1445,
    Rendimiento: 14.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM 2,0 Lts. CRDi DOHC Station Wagon 5P. T/M 4WD Motor Diesel",
    Nox: 0.1445,
    Rendimiento: 14.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM FL 2,0 Lts. CRDi DOHC Station Wagon 5P. T/A 2WD Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM FL 2,0 Lts. CRDi DOHC Station Wagon 5P. T/A 4WD Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM FL 2,0 Lts. CRDi DOHC Station Wagon 5P. T/M 2WD Motor Diesel",
    Nox: 0.1445,
    Rendimiento: 14.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson LM FL 2,0 Lts. CRDi DOHC Station Wagon 5P. T/M 4WD Motor Diesel",
    Nox: 0.1445,
    Rendimiento: 14.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 1.6T-GDI 7DCT 2WD E6",
    Nox: 0.00957,
    Rendimiento: 12.3
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 1.6T-GDI 7DCT 4WD E6",
    Nox: 0.00957,
    Rendimiento: 11.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 CRDI 8AT 2WD E6",
    Nox: 0.00441,
    Rendimiento: 12.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 CRDI 8AT 4WD E6",
    Nox: 0.00441,
    Rendimiento: 11.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 MPI 6AT 2WD E6",
    Nox: 0.0074,
    Rendimiento: 9.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 MPI 6AT 4WD E6",
    Nox: 0.0074,
    Rendimiento: 8.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 MPI 6MT 2WD E6",
    Nox: 0.0061,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson NX4 2.0 MPI 6MT 4WD E6",
    Nox: 0.0061,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 1,6 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.0084,
    Rendimiento: 10
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 1,6 Lts. T GDI Station Wagon 5P T/A 2WD Otto",
    Nox: 0.01395,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 1,6 Lts. T GDI Station Wagon 5P T/A 4WD Otto",
    Nox: 0.01395,
    Rendimiento: 10.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2,0 Lts. CRDI Station Wagon 5P. T/A 2WD Diesel",
    Nox: 0.11282,
    Rendimiento: 12.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2,0 Lts. CRDI Station Wagon 5P. T/A 4WD Diesel",
    Nox: 0.11282,
    Rendimiento: 12.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2,0 Lts. CRDI Station Wagon 5P. T/M Diesel",
    Nox: 0.154,
    Rendimiento: 13.9
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00255,
    Rendimiento: 8.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00255,
    Rendimiento: 8.6
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2.0 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.00469,
    Rendimiento: 9.2
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL 2.0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00469,
    Rendimiento: 9.1
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL CRDI E6 2,0 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.0343,
    Rendimiento: 11.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL CRDI E6 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.0343,
    Rendimiento: 11.7
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL CRDI E6 2,0 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.0462,
    Rendimiento: 14.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Tucson TL CRDI E6 2,0 Lts. Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.0462,
    Rendimiento: 14.5
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "VENUE QX AT",
    Nox: 0.0106,
    Rendimiento: 10.4
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Venue QX MT",
    Nox: 0.007,
    Rendimiento: 10.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Station Wagon",
    Modelo: "Veracruz EN 3,0 Lts. CRDi DOHC Station Wagon 5P. T/A 4WD Motor Diesel",
    Nox: 0.19529,
    Rendimiento: 9.8
  },
  {
    Marca: "Hyundai",
    Tipo: "Transporte de Pasajeros",
    Modelo: "New H-1 MB 2.5 CRDI 20 mas 1 Escolar T/M Diesel",
    Nox: 0.1888,
    Rendimiento: 9
  },
  {
    Marca: "Infiniti",
    Tipo: "Cabriolet",
    Modelo: "Q60 C 3,7 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.0145,
    Rendimiento: 6.6
  },
  {
    Marca: "Infiniti",
    Tipo: "Cabriolet",
    Modelo: "Q60 C 3,7 Lts. V6 DOHC Convertible 2P. T/A 4x4 Motor Otto",
    Nox: 0.0249,
    Rendimiento: 6.3
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 2.0T",
    Nox: 0.0067,
    Rendimiento: 9.5
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 3,0 Lts. Coupe 2P. T/A",
    Nox: 0.0085,
    Rendimiento: 7.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 COUPE 3.0 AUT",
    Nox: 0.00845,
    Rendimiento: 7.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 S 3,7 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01075,
    Rendimiento: 6.6
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 S 3,7 Lts. V6 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0213,
    Rendimiento: 6.4
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60 SD 3.0T",
    Nox: 0.00845,
    Rendimiento: 7.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Coupe",
    Modelo: "Q60S 3.0T",
    Nox: 0.00845,
    Rendimiento: 7.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "G37 X 3,7 Lts. V6 DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.0249,
    Rendimiento: 6.3
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 2,0T Lts. DOHC Sedan 4P. T/A (7 Velocidades) Motor Otto",
    Nox: 0.0103,
    Rendimiento: 9.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 2.0T",
    Nox: 0.0091,
    Rendimiento: 9.3
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 3,0 T",
    Nox: 0.0057,
    Rendimiento: 7.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 3,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0184,
    Rendimiento: 7
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 3.0T",
    Nox: 0.0162,
    Rendimiento: 7.5
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50 HEV",
    Nox: 0.02585,
    Rendimiento: 10.5
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q50S HYBRID 3.5 AUT",
    Nox: 0.02585,
    Rendimiento: 10.5
  },
  {
    Marca: "Infiniti",
    Tipo: "Sedan",
    Modelo: "Q70 3,7 Lts. V6 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01771,
    Rendimiento: 6.4
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX-50 3,7 Lts. Station Wagon 5P. T/A",
    Nox: 0.01242,
    Rendimiento: 6.4
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 1.6 AUT",
    Nox: 0.0199,
    Rendimiento: 10
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 1.6T",
    Nox: 0.0199,
    Rendimiento: 10
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 2,0 Station Wagon 5P. 4x4 T/A",
    Nox: 0.0117,
    Rendimiento: 11.5
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 2.0 AUT",
    Nox: 0.0117,
    Rendimiento: 11.9
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 2.0T",
    Nox: 0.0117,
    Rendimiento: 11.9
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 2.0T AWD",
    Nox: 0.0136,
    Rendimiento: 11.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX30 4X4 2.0 AUT",
    Nox: 0.0136,
    Rendimiento: 11.1
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 2.0 AUT",
    Nox: 0.01201,
    Rendimiento: 8.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 3,7 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0135,
    Rendimiento: 6.6
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 3,7 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.01242,
    Rendimiento: 6.4
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 3,7 Lts. Station Wagon 5P. T/A",
    Nox: 0.01242,
    Rendimiento: 6.4
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 ESSENTIAL",
    Nox: 0.01201,
    Rendimiento: 8.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 LUXE",
    Nox: 0.01201,
    Rendimiento: 8.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX50 SENSORY",
    Nox: 0.01201,
    Rendimiento: 8.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX60 PREM",
    Nox: 0.0043,
    Rendimiento: 6.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX60 TECH",
    Nox: 0.0043,
    Rendimiento: 6.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX60 TECH 4X4 3.5 AUT",
    Nox: 0.0043,
    Rendimiento: 6.8
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX70 3,7 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.01575,
    Rendimiento: 6
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX80 4WD",
    Nox: 0.0146,
    Rendimiento: 5
  },
  {
    Marca: "Infiniti",
    Tipo: "Station Wagon",
    Modelo: "QX80 4X4 5,6 AUT",
    Nox: 0.02,
    Rendimiento: 5
  },
  {
    Marca: "Iveco",
    Tipo: "Furgon Cerrado",
    Modelo: "Daily 35S12 2,3 Lts. Furgon 4P. T/M",
    Nox: 0.08456,
    Rendimiento: 12
  },
  {
    Marca: "Iveco",
    Tipo: "Furgon Cerrado",
    Modelo: "Daily 35S15V H3 3,0 Lts. Furgon 2P. T/M Diesel",
    Nox: 0.2141,
    Rendimiento: 9.4
  },
  {
    Marca: "Iveco",
    Tipo: "Transporte de Pasajeros",
    Modelo: "Daily 35S15V H3 26 Asientos",
    Nox: 0.2141,
    Rendimiento: 9.4
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "Sunray Class B",
    Nox: 0.1395,
    Rendimiento: 10.2
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T6 2,0 Lts. Pick Up 4P. T/M 4x2 Diesel",
    Nox: 0.1829,
    Rendimiento: 11.2
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T6 2,0 Lts. Pick Up 4P. T/M 4x2 Otto",
    Nox: 0.0198,
    Rendimiento: 7.3
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T6 2,0 Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.2365,
    Rendimiento: 11
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T8 2,0 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.2059,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T8 2,0 Lts. Camioneta Doble Cabina 4P. T/M Diesel",
    Nox: 0.2082,
    Rendimiento: 11.1
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T8 Plus 2,0 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.2059,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "T8 Plus 2,0 Lts. Camioneta Doble Cabina 4P. T/M Diesel",
    Nox: 0.2082,
    Rendimiento: 11.1
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "X100 1.6 T/M",
    Nox: 0.0372,
    Rendimiento: 9.4
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "X200 2,0 Lts. Pick Up 2P. T/M",
    Nox: 0.1911,
    Rendimiento: 10.8
  },
  {
    Marca: "Jac",
    Tipo: "Camioneta",
    Modelo: "X200 2,0 Lts. Pick Up Doble Cabina 4P. T/M Diesel",
    Nox: 0.2147,
    Rendimiento: 10.5
  },
  {
    Marca: "Jac",
    Tipo: "Furgon Cerrado",
    Modelo: "Refine 1,9 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2306,
    Rendimiento: 9.8
  },
  {
    Marca: "Jac",
    Tipo: "Furgon",
    Modelo: "Sunray 1,9 Lts. Furgon 5P. T/M 4x2 Diesel",
    Nox: 0.2082,
    Rendimiento: 10.8
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "e-S2 TA",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "Grand S3 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0136,
    Rendimiento: 11.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "Grand S3 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0191,
    Rendimiento: 10.4
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "J2 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.02675,
    Rendimiento: 12.9
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "J3 VVT 1,3 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0177,
    Rendimiento: 11.2
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S1 1,3 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01095,
    Rendimiento: 11.8
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S2 1,5 Lts. Hatch Back 5P. T/A 4x2 Otto",
    Nox: 0.0129,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S2 1,5 Lts. Hatch Back 5P. T/M 4x2 Otto",
    Nox: 0.0083,
    Rendimiento: 11.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S3 1,5 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0293,
    Rendimiento: 10.6
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S3 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0136,
    Rendimiento: 11.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S3 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0191,
    Rendimiento: 10.4
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S4 1,5 Turbo T/A",
    Nox: 0.0291,
    Rendimiento: 9.9
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S4 1,6 T/M",
    Nox: 0.01105,
    Rendimiento: 10.2
  },
  {
    Marca: "Jac",
    Tipo: "Hatch Back",
    Modelo: "S4 1.5 Turbo T/M",
    Nox: 0.0274,
    Rendimiento: 9.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS2 1.5 CVT",
    Nox: 0.0129,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS2 1.5 T/M",
    Nox: 0.0083,
    Rendimiento: 11.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS3 1.6 CVT",
    Nox: 0.0136,
    Rendimiento: 11.5
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS3 1.6 T/M",
    Nox: 0.0191,
    Rendimiento: 10.4
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS4 1.5 Turbo CVT.",
    Nox: 0.0235,
    Rendimiento: 9.8
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS4 1.5 Turbo M/T.",
    Nox: 0.026,
    Rendimiento: 9.8
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "JS4 1.6 T/M",
    Nox: 0.01105,
    Rendimiento: 10.2
  },
  {
    Marca: "Jac",
    Tipo: "Hatchback",
    Modelo: "S3 1,5 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.01195,
    Rendimiento: 11.4
  },
  {
    Marca: "Jac",
    Tipo: "Minibus",
    Modelo: "Refine 1,9 Lts. Minibus 11 Asientos 4P. T/M 4x2 Diesel",
    Nox: 0.18,
    Rendimiento: 10.7
  },
  {
    Marca: "Jac",
    Tipo: "Minibus",
    Modelo: "Refine 1,9 Lts. Minibus 9 Asientos 4P. T/M Diesel",
    Nox: 0.18,
    Rendimiento: 10.7
  },
  {
    Marca: "Jac",
    Tipo: "Minibus",
    Modelo: "Sunray 1,9 Lts. Minibus 12 Asientos 5P. T/M 4x2 Diesel",
    Nox: 0.2239,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Minibus",
    Modelo: "Sunray 1,9 Lts. Minibus 22 Asientos 5P. T/M Diesel",
    Nox: 0.2133,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Minibus",
    Modelo: "Sunray 1,9 Minibus 9 Asientos T/M",
    Nox: 0.2239,
    Rendimiento: 10.9
  },
  {
    Marca: "Jac",
    Tipo: "Sedan",
    Modelo: "iEV2 Sedan 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Jac",
    Tipo: "Sedan",
    Modelo: "J3 Turin VVT 1,3 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0177,
    Rendimiento: 11.2
  },
  {
    Marca: "Jac",
    Tipo: "Sedan",
    Modelo: "J4 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0105,
    Rendimiento: 11.7
  },
  {
    Marca: "Jac",
    Tipo: "Sedan",
    Modelo: "J5 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01635,
    Rendimiento: 8
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "J6 (B-Cross) 1,8 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0133,
    Rendimiento: 8.9
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "JS8 1.5 Turbo DCT 6a",
    Nox: 0.007,
    Rendimiento: 7.8
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "JS8 1.5 Turbo DCT 7a",
    Nox: 0.007,
    Rendimiento: 7.8
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "JS8 1.5 Turbo M/T 6a",
    Nox: 0.008,
    Rendimiento: 9.8
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "JS8 1.5 Turbo M/T 7a",
    Nox: 0.008,
    Rendimiento: 9.8
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S5 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0235,
    Rendimiento: 9.1
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S5 2,0 Lts. Turbo DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.0158,
    Rendimiento: 7.6
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S7 1,5 Lts. Station Wagon 5 Asientos 5P. T/A Otto",
    Nox: 0.02415,
    Rendimiento: 9.6
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S7 1,5 Lts. Station Wagon 5 Asientos 5P. T/M Otto",
    Nox: 0.01785,
    Rendimiento: 10.2
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S7 1,5 Lts. Station Wagon 7 Asientos 5P. T/A Otto",
    Nox: 0.02415,
    Rendimiento: 9.6
  },
  {
    Marca: "Jac",
    Tipo: "Station Wagon",
    Modelo: "S7 1,5 Lts. Station Wagon 7 Asientos 5P. T/M Otto",
    Nox: 0.01785,
    Rendimiento: 10.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.00325,
    Rendimiento: 8.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type 3,0 Lts. S/C R-Dynamic Cabriolet 2P. T/A Otto",
    Nox: 0.0034,
    Rendimiento: 7
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-TYPE 3.0 Lts. Cabriolet T/M",
    Nox: 0.0078,
    Rendimiento: 8.1
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type 5,0 Lts. S/C R AWD Cabriolet 2P. T/A Otto",
    Nox: 0.00623,
    Rendimiento: 6.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type S/C 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0078,
    Rendimiento: 7.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type S/C 5,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0114,
    Rendimiento: 6.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "F-Type S/C S 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0078,
    Rendimiento: 7.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "XK 5,0 Lts. V8 DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.01205,
    Rendimiento: 5.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Cabriolet",
    Modelo: "XK R 5,0 Lts. V8 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01354,
    Rendimiento: 5.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00325,
    Rendimiento: 8.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type 3,0 Lts. S/C R-Dynamic Coupe 2P. T/A Otto",
    Nox: 0.0034,
    Rendimiento: 7
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type 5,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0114,
    Rendimiento: 6.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type 5,0 Lts. S/C R AWD Coupe 2P. T/A Otto",
    Nox: 0.00623,
    Rendimiento: 6.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type S/C 3,0 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.0078,
    Rendimiento: 8.1
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "F-Type S/CS 3,0 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.0078,
    Rendimiento: 7.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "XK 5,0 Lts. V8 DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01205,
    Rendimiento: 5.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "XK R 5,0 Lts. V8 DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.01354,
    Rendimiento: 5.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Coupe",
    Modelo: "XKR-S 5,0 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.01354,
    Rendimiento: 5.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "Jaguar XE 2,0 Lts. Sedan 4P. T/A Motor Otto",
    Nox: 0.00647,
    Rendimiento: 9.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XE 2,0 Lts. D Sedan 4P. T/A Diesel",
    Nox: 0.1298,
    Rendimiento: 18.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XE 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00365,
    Rendimiento: 9.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XE 2.0i R",
    Nox: 0.0035,
    Rendimiento: 8.7
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XE 3,0 S/C 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00336,
    Rendimiento: 8.6
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XE S/C S (X760) 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00295,
    Rendimiento: 7.4
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0049,
    Rendimiento: 9.4
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2,0T Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0079,
    Rendimiento: 7.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2,2 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.14982,
    Rendimiento: 16.1
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2.0i",
    Nox: 0.02423,
    Rendimiento: 12
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2.0i S",
    Nox: 0.02423,
    Rendimiento: 12.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2.0i SE",
    Nox: 0.00546,
    Rendimiento: 11.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 2.0T 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00473,
    Rendimiento: 9.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 3,0 Lts. Diesel S V6 DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.152,
    Rendimiento: 11.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 3,0 Lts. DOHC Sedan 4P T/A Motor Otto",
    Nox: 0.0063,
    Rendimiento: 6.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF 5,0 Lts. V8 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01041,
    Rendimiento: 5.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF R 5,0 Lts. SV8 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01726,
    Rendimiento: 5.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF R-S 5,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0067,
    Rendimiento: 5.9
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XF S/C 3,0 Lts. Sedan 4P. T/A",
    Nox: 0.00436,
    Rendimiento: 7.6
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XJ 3,0 S/C",
    Nox: 0.0055,
    Rendimiento: 7.6
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XJ 5,0 Lts. V8 SC DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01429,
    Rendimiento: 5.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XJ 5,0 SC LWB DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01429,
    Rendimiento: 5.5
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XJ S/C 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0066,
    Rendimiento: 6.8
  },
  {
    Marca: "Jaguar",
    Tipo: "Sedan",
    Modelo: "XL 5,0 Lts. V8 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.03173,
    Rendimiento: 5.9
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace (DF) 2,0i Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00799,
    Rendimiento: 10.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace 2.0i",
    Nox: 0.0093,
    Rendimiento: 9.4
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace 2.0i R",
    Nox: 0.01913,
    Rendimiento: 8.9
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace 2.0i S",
    Nox: 0.0093,
    Rendimiento: 9.4
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace 2.0iD S",
    Nox: 0.0374,
    Rendimiento: 15.4
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "E-Pace iD (DF) 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.12713,
    Rendimiento: 13.7
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace 2,0 D Station Wagon 5P. T/A",
    Nox: 0.13291,
    Rendimiento: 15.7
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0057,
    Rendimiento: 11
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace 2.0i",
    Nox: 0.0073,
    Rendimiento: 11.6
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace 2.0iD S",
    Nox: 0.02203,
    Rendimiento: 16.7
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace R-Sport 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01505,
    Rendimiento: 10.3
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace S/C 3,0 Station Wagon 5P. 4x4 T/A",
    Nox: 0.00195,
    Rendimiento: 8.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "F-Pace S/C Firts Edition 3,0 Station Wagon 5P. 4x4 T/A",
    Nox: 0.00195,
    Rendimiento: 8.2
  },
  {
    Marca: "Jaguar",
    Tipo: "Station Wagon",
    Modelo: "XF 2.0i SportBrake",
    Nox: 0.02423,
    Rendimiento: 12.2
  },
  {
    Marca: "Jeep",
    Tipo: "Camioneta",
    Modelo: "Gladiator Overland 3.6L V6 AT8 AWD",
    Nox: 0.0036,
    Rendimiento: 6.7
  },
  {
    Marca: "Jeep",
    Tipo: "Camioneta",
    Modelo: "Gladiator Rubicon",
    Nox: 0.0036,
    Rendimiento: 6.7
  },
  {
    Marca: "Jeep",
    Tipo: "Camioneta",
    Modelo: "Gladiator Sport 3.6L V6 AT8 AWD",
    Nox: 0.0036,
    Rendimiento: 6.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Cherokee 4x4 T/A",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Rubicon 2,8 Lts. DOHC Tipo Jeep 3P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Sahara 2,8 Lts. DOHC Tipo Jeep 3P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Sport 2,8 Lts. DOHC Tipo Jeep 3P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Unlimited Rubicon 2,8 Lts. DOHC Tipo Jeep 5P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Unlimited Sahara 2,8 Lts. DOHC Tipo Jeep 5P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Jeep Wrangler Unlimited Sport 2,8 Lts. DOHC Tipo Jeep 5P. T/A 4x4 Motor Diesel",
    Nox: 0.15542,
    Rendimiento: 9.7
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Sport 3,6 Lts. Jeep 3P. T/M 4x4",
    Nox: 0.00733,
    Rendimiento: 6.5
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Rubicon 3,6 Lts. Jeep 5P. T/A",
    Nox: 0.00733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Rubicon 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 3P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Rubicon 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 5P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Sahara 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 3P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.5
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Sahara 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 5P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Sport 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 3P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.5
  },
  {
    Marca: "Jeep",
    Tipo: "Jeep",
    Modelo: "Wrangler Unlimited Sport 3,6 Lts. V6 24v VVT DOHC Tipo Jeep 5P. 4x4 T/A Motor Otto",
    Nox: 0.00733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee 2,4 Lts. SOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00621,
    Rendimiento: 8.6
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee 2,4 Lts. SOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00621,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee 2,4 Lts. SOHC Station Wagon 5P. T/A AWD Motor Otto",
    Nox: 0.00621,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee 3,2 Lts. Limited Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee 4x4 3,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee AWD 3,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee FWD 3,2 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00595,
    Rendimiento: 7.4
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Latitude 2,4 Lts. Station Wagon 5P T/A",
    Nox: 0.0325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Latitude Plus 4x4",
    Nox: 0.00325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Limited 2,4 Lts. Station Wagon 5P. T/A",
    Nox: 0.00621,
    Rendimiento: 8.6
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Limited 2,4 Lts. Station Wagon 5P. T/A FWD Otto",
    Nox: 0.00325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Limited 3,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02215,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Longitude 2,4 Lts. Station Wagon 5P. T/A AWD Otto",
    Nox: 0.00325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Longitude 2,4 Lts. Station Wagon 5P. T/A FWD Otto",
    Nox: 0.00325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Longitude 3,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02215,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Overland 3,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02215,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Sport 2,4 Lts. Station Wagon 5P. T/A FWD Otto",
    Nox: 0.00325,
    Rendimiento: 8.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Trailhawk",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Trailhawk 3,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00595,
    Rendimiento: 7.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Cherokee Trailhawk 3,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02215,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Limited 1.3",
    Nox: 0.018,
    Rendimiento: 11.7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Limited 2,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Limited 2,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0084,
    Rendimiento: 8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Longitude 1.3",
    Nox: 0.018,
    Rendimiento: 11.7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Longitude 2,4 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0084,
    Rendimiento: 8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Longitude 2,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0084,
    Rendimiento: 8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Sport 1.3",
    Nox: 0.018,
    Rendimiento: 11.7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Sport 2,4 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Sport 2,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Compass Sport 2,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.00495,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee 3,6 Lt. Limited 4x4 T/A",
    Nox: 0.00416,
    Rendimiento: 7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00416,
    Rendimiento: 7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 3,6 V6 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 3,6 V6 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 3.6 4x2",
    Nox: 0.00835,
    Rendimiento: 6.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 3.6L 4x4",
    Nox: 0.00835,
    Rendimiento: 6.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 5,7 V8 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo 5,7 V8 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Laredo CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited 3,6 V6 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited 3,6 V6 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited 3.6L 4x4",
    Nox: 0.00835,
    Rendimiento: 6.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited 5,7 V8 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited 5,7 V8 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Limited CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland 3,6 V6 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland 3,6 V6 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00687,
    Rendimiento: 7
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland 3.6L 4x4",
    Nox: 0.00835,
    Rendimiento: 6.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland 5,7 V8 DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland 5,7 V8 DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 5.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Overland CRD 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.13307,
    Rendimiento: 10.5
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee SRT8 6,4 Lts. V8 OHV Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0225,
    Rendimiento: 4.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Trackhawk",
    Nox: 0.01026,
    Rendimiento: 3.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Grand Cherokee Upland 3.6 4x4",
    Nox: 0.00835,
    Rendimiento: 6.9
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Compass Limited 2,4 Lts. AT6 Station Wagon 4P. T/A Otto",
    Nox: 0.0301,
    Rendimiento: 7.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Compass Longitude 2,4 Lts. AT6 Station Wagon 4P. T/A Otto",
    Nox: 0.0301,
    Rendimiento: 7.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Compass Sport 2,4 Lts. AT6 Station Wagon 4P. T/A Otto",
    Nox: 0.0301,
    Rendimiento: 7.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Patriot Limited 2,4 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Patriot Sport 2,4 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Patriot Sport 2,4 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Renegade 1,8 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0065,
    Rendimiento: 9.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Renegade Longitude 1,8 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0065,
    Rendimiento: 9.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Renegade Night Eagle 1,8 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0065,
    Rendimiento: 9.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Jeep Renegade Sport 1,8 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0065,
    Rendimiento: 9.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Patriot  Sport 2,4 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Patriot  Sport 2,4 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Patriot Latitude 2,4 T/A",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Patriot Latitude 2,4 T/A",
    Nox: 0.00629,
    Rendimiento: 8.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade 1,8 Lts, Station Wagon 5P. T/M Otto",
    Nox: 0.012,
    Rendimiento: 9.4
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade Limited 1,6 T/M Diesel",
    Nox: 0.1688,
    Rendimiento: 18.2
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade Limited 2,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01657,
    Rendimiento: 10.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade Longitude 2,4 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01657,
    Rendimiento: 10.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade Longitude 2,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01657,
    Rendimiento: 10.1
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Renegade Sport 1,8 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.012,
    Rendimiento: 9.4
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Rubicon 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Rubicon 3,6 Lts. Station Wagon 3P. Tipo Jeep T/A 4x4 Otto",
    Nox: 0.00645,
    Rendimiento: 6.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Rubicon Unlimited 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Rubicon Unlimited 3,6 Lts. Station Wagon 5P. Tipo Jeep T/A 4x4 Otto",
    Nox: 0.00645,
    Rendimiento: 6.8
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sahara 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sahara 3,6 Lts. Station Wagon 3P. T/A 4x4 Otto",
    Nox: 0.0051,
    Rendimiento: 7.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sahara Unlimited 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sahara Unlimited 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0051,
    Rendimiento: 7.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sport 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sport 3,6 Lts. Station Wagon 3P. T/A",
    Nox: 0.0051,
    Rendimiento: 7.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sport 3,6 Lts. Station Wagon 3P. T/A 4x4 Otto",
    Nox: 0.0051,
    Rendimiento: 7.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sport Unlimited 2.2",
    Nox: 0.0835,
    Rendimiento: 10
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Sport Unlimited 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0051,
    Rendimiento: 7.3
  },
  {
    Marca: "Jeep",
    Tipo: "Station Wagon",
    Modelo: "Wrangler Unlimited 3,6 Lts. Tipo Jeep 4P. T/A 4x4 Otto",
    Nox: 0.0733,
    Rendimiento: 6.3
  },
  {
    Marca: "Jetour",
    Tipo: "Station Wagon",
    Modelo: "X70 AT",
    Nox: 0.0084,
    Rendimiento: 8.5
  },
  {
    Marca: "Jetour",
    Tipo: "Station Wagon",
    Modelo: "X70 MT",
    Nox: 0.0129,
    Rendimiento: 9.9
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus (JX1032TSE5) 2,4 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.251,
    Rendimiento: 9.9
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus (JX1033TSE5) 2,4 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.251,
    Rendimiento: 9.9
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus Work 5.4m 4x2",
    Nox: 0.2219,
    Rendimiento: 8.8
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus Work 5.4m 4x4",
    Nox: 0.2219,
    Rendimiento: 8.8
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus Work 5.7m 4x2",
    Nox: 0.2219,
    Rendimiento: 8.8
  },
  {
    Marca: "JMC",
    Tipo: "Camioneta",
    Modelo: "Vigus Work 5.7m 4x4",
    Nox: 0.2219,
    Rendimiento: 8.8
  },
  {
    Marca: "JMC",
    Tipo: "Station Wagon",
    Modelo: "N351 2,0 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.01395,
    Rendimiento: 7.4
  },
  {
    Marca: "JMC",
    Tipo: "Station Wagon",
    Modelo: "N351 2,0 Lts. Station Wagon 5P. T/M 4x2 Otto 7 pasajeros",
    Nox: 0.01395,
    Rendimiento: 7.4
  },
  {
    Marca: "JMC",
    Tipo: "Station Wagon",
    Modelo: "N351 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.01395,
    Rendimiento: 7.4
  },
  {
    Marca: "JMC",
    Tipo: "Station Wagon",
    Modelo: "N351 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.01395,
    Rendimiento: 7.4
  },
  {
    Marca: "Karma",
    Tipo: "Sedan",
    Modelo: "Revero 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.02527,
    Rendimiento: 8.5
  },
  {
    Marca: "Karry",
    Tipo: "Camioneta",
    Modelo: "Q22 1.3",
    Nox: 0.009,
    Rendimiento: 10.9
  },
  {
    Marca: "Kenbo",
    Tipo: "Camioneta",
    Modelo: "T205-D BOX 1,3 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0155,
    Rendimiento: 8.3
  },
  {
    Marca: "Kenbo",
    Tipo: "Camioneta",
    Modelo: "T205-D Mini Truck 1,3 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.0155,
    Rendimiento: 8.3
  },
  {
    Marca: "Kenbo",
    Tipo: "Camioneta",
    Modelo: "T205-D Minitruck 1,0 Lts Camioneta 2P. T/M Otto",
    Nox: 0.0338,
    Rendimiento: 10.6
  },
  {
    Marca: "Kenbo",
    Tipo: "Camioneta",
    Modelo: "T205-D Refri 1,3 Lts. Camioneta 2P. T/M Otto",
    Nox: 0.01745,
    Rendimiento: 8.3
  },
  {
    Marca: "Kenbo",
    Tipo: "Furgon cerrado",
    Modelo: "206-C Cargo Van 1,0 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0338,
    Rendimiento: 10.6
  },
  {
    Marca: "Kenbo",
    Tipo: "Furgon cerrado",
    Modelo: "206C Cargo Van 1,3 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0155,
    Rendimiento: 8.3
  },
  {
    Marca: "Kenbo",
    Tipo: "Station Wagon",
    Modelo: "M20 1,5 Lts. Station Wagon 5P. T/M",
    Nox: 0.018,
    Rendimiento: 11.6
  },
  {
    Marca: "Kenbo",
    Tipo: "Station Wagon",
    Modelo: "S2 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0051,
    Rendimiento: 9.6
  },
  {
    Marca: "Kenbo",
    Tipo: "Station Wagon",
    Modelo: "S3 1,8 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0126,
    Rendimiento: 8.9
  },
  {
    Marca: "Kia",
    Tipo: "Camioneta",
    Modelo: "Frontier 2,5 Lts. (K2500) SOHC Camioneta Cabina Simple 2P. T/M Motor Diesel",
    Nox: 0.2157,
    Rendimiento: 7.6
  },
  {
    Marca: "Kia",
    Tipo: "Camioneta",
    Modelo: "Frontier 2,5 Lts. (K2500) SOHC Camioneta Cabina y Media 2P. T/M Motor Diesel",
    Nox: 0.2157,
    Rendimiento: 7.6
  },
  {
    Marca: "Kia",
    Tipo: "Camioneta",
    Modelo: "Frontier 2,5 Lts. (K2500) SOHC Camioneta Doble Cabina 4P. T/M Motor Diesel",
    Nox: 0.2157,
    Rendimiento: 7.6
  },
  {
    Marca: "Kia",
    Tipo: "Coupe",
    Modelo: "Koup (YD) 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00695,
    Rendimiento: 8.8
  },
  {
    Marca: "Kia",
    Tipo: "Coupe",
    Modelo: "Koup (YD) 2,0 Lts. Coupe 2P. T/M Otto",
    Nox: 0.00425,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Coupe",
    Modelo: "Koup 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0018,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Coupe",
    Modelo: "Koup 2,0 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0052,
    Rendimiento: 9.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 (BD) 1,6 Lts. Hatch Back 4P. T-GDI T/A DCT Otto",
    Nox: 0.012,
    Rendimiento: 10.5
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 (BD) 1,6 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0035,
    Rendimiento: 10.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 (BD) 1,6 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.00525,
    Rendimiento: 10.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00685,
    Rendimiento: 11
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0076,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0018,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0052,
    Rendimiento: 9.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5(YD) 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00695,
    Rendimiento: 8.8
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Cerato 5(YD) 2,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00425,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA PE) 1.0 MPI MT",
    Nox: 0.00591,
    Rendimiento: 15.2
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA PE) 1.2 MPI AT",
    Nox: 0.00751,
    Rendimiento: 12.7
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA PE) 1.2 MPI MT",
    Nox: 0.00742,
    Rendimiento: 14.6
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA) 1,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0061,
    Rendimiento: 14.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA) 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.005,
    Rendimiento: 14.6
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA) 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0116,
    Rendimiento: 12.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning (JA) 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0103,
    Rendimiento: 14.1
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0057,
    Rendimiento: 16.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning 1,2 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00785,
    Rendimiento: 13
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Morning 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0186,
    Rendimiento: 15
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 (SC) 1,4 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0045,
    Rendimiento: 12.1
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 (SC) 1,4 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0069,
    Rendimiento: 13.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 (SC) 1,6 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0036,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 (SC) 1,6 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.00335,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 1,2 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0093,
    Rendimiento: 13.8
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 1,4 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.00705,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 3 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0147,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 (SC) 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0045,
    Rendimiento: 12.1
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 (SC) 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0069,
    Rendimiento: 13.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 (SC) 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0036,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 (SC) 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00335,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0093,
    Rendimiento: 13.8
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 1,4 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00705,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Rio 5 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0147,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Soul (SK3) 6AT 1,6 Lts. MPI Hatch Back 4P. T/A Otto",
    Nox: 0.0089,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Soul (SK3) 6MT 1,6 Lts. MPI Hatch Back 4P. T/M Otto",
    Nox: 0.0062,
    Rendimiento: 10.5
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Soul Electrico (SK3 EV)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Stinger 3,3 Lts. T-GDI Hatch Back 4P. T/A 4x2 Otto",
    Nox: 0.00192,
    Rendimiento: 6.7
  },
  {
    Marca: "Kia",
    Tipo: "Hatch Back",
    Modelo: "Stinger 3,3 Lts. T-GDI Hatch Back 4P. T/A 4x4 Otto",
    Nox: 0.00192,
    Rendimiento: 6.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Cerato 5 EX 1.6L 6AT",
    Nox: 0.0142,
    Rendimiento: 10.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Cerato 5 GT 1.6L Turbo-GDI 7DCT",
    Nox: 0.0017,
    Rendimiento: 10.4
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Rio 5 1.4L 6AT",
    Nox: 0.00417,
    Rendimiento: 12.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Rio 5 1.4L 6MT",
    Nox: 0.006,
    Rendimiento: 13.6
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Rio 5 Sport (SC PE) 1.6L 6MT",
    Nox: 0.00003,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Stinger GT 3.3 8AT T-GDI 2WD",
    Nox: 0.00192,
    Rendimiento: 6.3
  },
  {
    Marca: "Kia",
    Tipo: "Hatchback",
    Modelo: "Stinger GT 3.3 8AT T-GDI AWD",
    Nox: 0.00192,
    Rendimiento: 6.3
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cadenza YG 3,3 Lts. AT GDI Sedan 4P. T/A",
    Nox: 0.0061,
    Rendimiento: 7.4
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato (BDm) MPI 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00615,
    Rendimiento: 10.5
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato (BDm) MPI 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00665,
    Rendimiento: 10.7
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato (BDm) MPI 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00675,
    Rendimiento: 9.4
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato (YD) 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00695,
    Rendimiento: 8.8
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato (YD) 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00425,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00685,
    Rendimiento: 11
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0076,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0018,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0052,
    Rendimiento: 9.4
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato SX 1,6 Lts. Sedan 4P. T/A",
    Nox: 0.00343,
    Rendimiento: 10.5
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Cerato SX 1,6 Lts. Sedan 4P. T/M",
    Nox: 0.00277,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "K5 (DL3) 2,0 MPI 6AT",
    Nox: 0.00007,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "K5 (DL3) 2,5 GDI 8AT",
    Nox: 0.00505,
    Rendimiento: 9.7
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "K5 Hibrido (DL3 HEV) 2.0 GDI 6AT",
    Nox: 0.00119,
    Rendimiento: 20.2
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima (JF) TGDI 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00945,
    Rendimiento: 8
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0035,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0045,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima 6AT 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00375,
    Rendimiento: 9.7
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima Hibrido 2,0 Lts. DOHC Sedan 4P. T/A, Vehiculo Electrico Hibrido",
    Nox: 0.00117,
    Rendimiento: 17
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima JF 2,0 Lts. 6AT Hibrido GDI Sedan 4P. T/A",
    Nox: 0.00119,
    Rendimiento: 18.9
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Optima JF 6AT 2,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0203,
    Rendimiento: 9.3
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Quoris 3,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00655,
    Rendimiento: 6.4
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 (SC PE) 1.6L 6MT",
    Nox: 0.00003,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 (SC) 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0045,
    Rendimiento: 12.1
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 (SC) 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0069,
    Rendimiento: 13.3
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 (SC) 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0036,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 (SC) 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00335,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 1,2 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0093,
    Rendimiento: 13.8
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 1,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00705,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 1,4 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0147,
    Rendimiento: 11.9
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 1.4L 6AT",
    Nox: 0.00417,
    Rendimiento: 12.3
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Rio 4 1.4L 6MT",
    Nox: 0.006,
    Rendimiento: 13.6
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Soluto (AB) 1.4 4AT",
    Nox: 0.0142,
    Rendimiento: 12.7
  },
  {
    Marca: "Kia",
    Tipo: "Sedan",
    Modelo: "Soluto 1,4 MPI MT",
    Nox: 0.02645,
    Rendimiento: 12.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. (5 asientos) T/M 4x2 Motor Otto",
    Nox: 0.00317,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. (5 asientos) T/M 4x4 Motor Otto",
    Nox: 0.00317,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. (7 asientos) T/M 4x2 Motor Otto",
    Nox: 0.00317,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. (7 asientos) T/M 4x4 Motor Otto",
    Nox: 0.00317,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 1,7 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/A Motor Diesel",
    Nox: 0.157,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 1,7 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/M Motor Diesel",
    Nox: 0.1365,
    Rendimiento: 13.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 1,7 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/A Motor Diesel",
    Nox: 0.157,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 1,7 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/M Motor Diesel",
    Nox: 0.1365,
    Rendimiento: 13.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 2,0 Lts. DOHC Station Wagon 5P. (5 Pasajeros) T/A Motor Otto",
    Nox: 0.00255,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 2,0 Lts. DOHC Station Wagon 5P. (5 Pasajeros) T/M Motor Otto",
    Nox: 0.0039,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 2,0 Lts. DOHC Station Wagon 5P. (7 Pasajeros) T/A Motor Otto",
    Nox: 0.00255,
    Rendimiento: 9.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens 2,0 Lts. DOHC Station Wagon 5P. (7 Pasajeros) T/M Motor Otto",
    Nox: 0.0039,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens RP 1,7 Lts. DCT Station Wagon 5 asientos 5P. T/A Diesel",
    Nox: 0.0993,
    Rendimiento: 15.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens RP 1,7 Lts. DCT Station Wagon 7 asientos 5P. T/A Diesel",
    Nox: 0.0993,
    Rendimiento: 15.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens RP 1,7 Lts. MT Station Wagon 5 Asientos 5P. T/M",
    Nox: 0.0826,
    Rendimiento: 14.4
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carens RP 1,7 Lts. MT Station Wagon 7 Asientos 5P. T/M",
    Nox: 0.0826,
    Rendimiento: 14.4
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carnival EX 2,2L DSL 8AT",
    Nox: 0.02685,
    Rendimiento: 10.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carnival EX 3,5L GSL 8AT",
    Nox: 0.00461,
    Rendimiento: 7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carnival YP 2,2 Lts. DOHC Station Wagon 5P. (11 asientos) T/A Motor Diesel",
    Nox: 0.1919,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Carnival YP 2,2 Lts. DOHC Station Wagon 5P. (7 asientos) T/A Motor Diesel",
    Nox: 0.1919,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Gran Carnival VQ 2,2 Lts. DOHC Station Wagon Mini Van (11 asientos) 5P. T/A Motor Diesel",
    Nox: 0.2524,
    Rendimiento: 9.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Gran Carnival VQ 2,2 Lts. DOHC Station Wagon Mini Van (11 asientos) 5P. T/M Motor Diesel",
    Nox: 0.2515,
    Rendimiento: 9.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Gran Carnival VQ 2,2 Lts. DOHC Station Wagon Mini Van (8 asientos) 5P. T/A Motor Diesel",
    Nox: 0.2524,
    Rendimiento: 9.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Gran Carnival VQ 2,2 Lts. DOHC Station Wagon Mini Van (8 asientos) 5P. T/M Motor Diesel",
    Nox: 0.2515,
    Rendimiento: 9.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival (YP) 2,2 Lts. Station Wagon 7 Asientos 4P. T/A Diesel",
    Nox: 0.073,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival (YP) 2,2 Lts. Station Wagon 8 Asientos 4P. T/A Diesel",
    Nox: 0.073,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival 2,2 Lts. DLS Station Wagon 5P. (8 asientos) T/A Diesel",
    Nox: 0.1919,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival GSL 3,3 Lts. Station Wagon 5P. 11 Asientos T/A Otto.",
    Nox: 0.00195,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival GSL 3,3 Lts. Station Wagon 5P. 7 Asientos T/A Otto.",
    Nox: 0.00195,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Grand Carnival GSL 3,3 Lts. Station Wagon 5P. 8 Asientos T/A Otto.",
    Nox: 0.00195,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Mohave HM 3,0 Lts. V6 DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.2113,
    Rendimiento: 8.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Niro (DE) 1,6 Lts. Station Wagon 5P. T/A (DCT) Hibrido",
    Nox: 0.0009,
    Rendimiento: 18.4
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Niro GDI 6DCT 1,6 Lts. Station Wagon 5P. T/A Hibrido",
    Nox: 0.00236,
    Rendimiento: 22.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Seltos 1.6 MPI 6AT",
    Nox: 0.0049,
    Rendimiento: 10.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Seltos 1.6 MPI 6MT",
    Nox: 0.0057,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sonet EX 1.5L IVT",
    Nox: 0.00629,
    Rendimiento: 13
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sonet EX 1.5L MT",
    Nox: 0.00896,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Sation Wagon 7 Asientos 5P. T/M 4x2 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 4P. 5 Asientos T/A 4x2 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 4P. 5 Asientos T/A 4x4 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 4P. 7 Asientos T/A 4x2 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 4P. 7 Asientos T/A 4x4 Diesel",
    Nox: 0.01402,
    Rendimiento: 12
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 5 Asientos 5P. T/M 4x2 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 5 Asientos 5P. T/M 4x4 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 2,2 Lts. Station Wagon 7 Asientos 5P. T/M 4x4 Diesel",
    Nox: 0.03057,
    Rendimiento: 13.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 3,5 Lts. Station Wagon 5 asientos 5P. T/A 4x2 Otto",
    Nox: 0.0028,
    Rendimiento: 6.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 3,5 Lts. Station Wagon 5 asientos 5P. T/A 4x4 Otto",
    Nox: 0.0028,
    Rendimiento: 6.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 3,5 Lts. Station Wagon 7 asientos 5P. T/A 4x2 Otto",
    Nox: 0.0028,
    Rendimiento: 6.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento (UM) 3,5 Lts. Station Wagon 7 asientos 5P. T/A 4x4 Otto",
    Nox: 0.0028,
    Rendimiento: 6.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.01181,
    Rendimiento: 12.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/A 4x2 Motor Diesel",
    Nox: 0.1686,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/A 4x4 Motor Diesel",
    Nox: 0.1686,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/M 4x4 Motor Diesel",
    Nox: 0.1528,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 5 Pasajeros T/M 4x4 Motor Diesel",
    Nox: 0.1528,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/A 4x2 Motor Diesel",
    Nox: 0.1686,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/A 4x4 Motor Diesel",
    Nox: 0.1686,
    Rendimiento: 10
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/M 4x2 Motor Diesel",
    Nox: 0.1528,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,2 Lts. DOHC Station Wagon 5P. 7 Pasajeros T/M 4x4 Motor Diesel",
    Nox: 0.1528,
    Rendimiento: 11.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. 5 Asientos 4x2 T/A Motor Otto",
    Nox: 0.00382,
    Rendimiento: 7.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. 5 Asientos 4x4 T/A Motor Otto",
    Nox: 0.00382,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. 7 Asientos 4x2 T/A Motor Otto",
    Nox: 0.00382,
    Rendimiento: 7.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2,4 Lts. DOHC Station Wagon 5P. 7 Asientos 4x4 T/A Motor Otto",
    Nox: 0.00382,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2.2 8DCT 2WD 7pas",
    Nox: 0.02874,
    Rendimiento: 13.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2.2 8DCT 4WD 7pas",
    Nox: 0.02874,
    Rendimiento: 13.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2.5 6AT 2WD 7pas",
    Nox: 0.00839,
    Rendimiento: 8.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 2.5 6AT AWD 7pas",
    Nox: 0.00839,
    Rendimiento: 8.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 3.5 8AT 2WD 7pas",
    Nox: 0.0082,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento 3.5 8AT AWD 7pas",
    Nox: 0.0082,
    Rendimiento: 7.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (5 Asientos) T/M 4x2 Motor Diesel",
    Nox: 0.12544,
    Rendimiento: 11.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (5 Asientos) T/M 4x4 Motor Diesel",
    Nox: 0.12544,
    Rendimiento: 11.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (5 Pasajeros) T/A 4x2 Motor Diesel",
    Nox: 0.13491,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (5 Pasajeros) T/A 4x4 Motor Diesel",
    Nox: 0.13491,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (7 Asientos) T/M 4x2 Motor Diesel",
    Nox: 0.12544,
    Rendimiento: 11.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (7 asientos) T/M 4x4 Motor Diesel",
    Nox: 0.12544,
    Rendimiento: 11.6
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (7 Pasajeros) T/A 4x2 Motor Diesel",
    Nox: 0.13491,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 2,2 Lts. DOHC Station Wagon 5P. (7 Pasajeros) T/A 4x4 Motor Diesel",
    Nox: 0.13491,
    Rendimiento: 9.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 3,3 Lts. Station Wagon 5 asientos 5P. T/A 4x2 Otto",
    Nox: 0.0042,
    Rendimiento: 7.4
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 3,3 Lts. Station Wagon 5 asientos 5P. T/A 4x4 Otto",
    Nox: 0.0042,
    Rendimiento: 6.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 3,3 Lts. Station Wagon 7 asientos 5P. T/A 4x2 Otto",
    Nox: 0.0042,
    Rendimiento: 7.4
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sorento UM 3,3 Lts. Station Wagon 7 asientos 5P. T/A 4x4 Otto",
    Nox: 0.0042,
    Rendimiento: 6.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Soul (PS) 1,6 Lts. 7DCT DSL Station Wagon 5P. T/A Diesel",
    Nox: 0.0698,
    Rendimiento: 15.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Soul (PS) 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.0315,
    Rendimiento: 14.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Soul 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0111,
    Rendimiento: 9.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Soul 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0057,
    Rendimiento: 11
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Soul PS 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.127,
    Rendimiento: 14.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage (QL PE) 2,0 Lts. Station Wagon 4P. T/A 4WD Diesel",
    Nox: 0.01181,
    Rendimiento: 12.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage (QL PE) 2,0 Lts. Station Wagon 4P. T/A 4x2 Diesel",
    Nox: 0.01181,
    Rendimiento: 13
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage (QL PE) 2,0 Lts. Station Wagon 4P. T/M 4WD Diesel",
    Nox: 0.03238,
    Rendimiento: 14.1
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage (QL PE) 2,0 Lts. Station Wagon 4P. T/M 4x2 Diesel",
    Nox: 0.03238,
    Rendimiento: 14.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0023,
    Rendimiento: 8.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 11
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0023,
    Rendimiento: 8.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.116,
    Rendimiento: 13.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00496,
    Rendimiento: 8.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Diesel",
    Nox: 0.116,
    Rendimiento: 13.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00496,
    Rendimiento: 8.8
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 4x2 5P. T/A Otto",
    Nox: 0.00277,
    Rendimiento: 8.7
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 4x4 5P. T/A Otto",
    Nox: 0.00277,
    Rendimiento: 8.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.11282,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.11282,
    Rendimiento: 11.2
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.11243,
    Rendimiento: 14.9
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL 2,0 Lts. Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.11243,
    Rendimiento: 14.5
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL MT 2,0 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0048,
    Rendimiento: 9.3
  },
  {
    Marca: "Kia",
    Tipo: "Station Wagon",
    Modelo: "Sportage QL MT 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.0048,
    Rendimiento: 9.2
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "T3 Cargo Box",
    Nox: 0.01855,
    Rendimiento: 9.1
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "T3 D/C Pick Up",
    Nox: 0.01855,
    Rendimiento: 9.1
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "T3 Pick Up",
    Nox: 0.01855,
    Rendimiento: 9.1
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 1.5 D/C Pick Up",
    Nox: 0.02663,
    Rendimiento: 8.2
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 1.5 Pick Up",
    Nox: 0.02663,
    Rendimiento: 8.2
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 Plus Cargo Box",
    Nox: 0.01143,
    Rendimiento: 6.4
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 Plus Cargo Frio",
    Nox: 0.01143,
    Rendimiento: 6.4
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 Plus D/C Pick Up",
    Nox: 0.03647,
    Rendimiento: 6.7
  },
  {
    Marca: "KYC",
    Tipo: "Camioneta",
    Modelo: "X5 Plus Pick Up",
    Nox: 0.03647,
    Rendimiento: 6.7
  },
  {
    Marca: "KYC",
    Tipo: "Furgon Cerrado",
    Modelo: "X5 1.5 Cargo Box",
    Nox: 0.02663,
    Rendimiento: 8.2
  },
  {
    Marca: "Lada",
    Tipo: "Furgon Cerrado",
    Modelo: "Largus 1,6 Lts. Furgon 6P. T/M Otto",
    Nox: 0.01195,
    Rendimiento: 8.9
  },
  {
    Marca: "Lada",
    Tipo: "Jeep",
    Modelo: "4x4 E5 1,7 Lts. SOHC Tipo Jeep 3P. T/M 4x4 Motor Otto",
    Nox: 0.01429,
    Rendimiento: 8.2
  },
  {
    Marca: "Lada",
    Tipo: "Sedan",
    Modelo: "Granta 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0181,
    Rendimiento: 11.2
  },
  {
    Marca: "Lada",
    Tipo: "Station Wagon",
    Modelo: "Kalina Cross 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0121,
    Rendimiento: 10.8
  },
  {
    Marca: "Lada",
    Tipo: "Station Wagon",
    Modelo: "Kalina Cross AT 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0167,
    Rendimiento: 11.3
  },
  {
    Marca: "Lada",
    Tipo: "Station Wagon",
    Modelo: "Kalina Luxe 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0121,
    Rendimiento: 10.8
  },
  {
    Marca: "Lamborghini",
    Tipo: "Convertible",
    Modelo: "Aventador LP 700-4 Roadster 6,5 Lts. Convertible 2P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 4
  },
  {
    Marca: "Lamborghini",
    Tipo: "Convertible",
    Modelo: "Huracan LP580-2 5,2 Lts. Convertible 2P. T/A 4x2 Otto",
    Nox: 0.02983,
    Rendimiento: 5.7
  },
  {
    Marca: "Lamborghini",
    Tipo: "Convertible",
    Modelo: "Huracan LP610-4 5,2 Lts. Convertible 2P. T/A 4x4",
    Nox: 0.02983,
    Rendimiento: 5.7
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Aventador LP 700-4 6,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 4
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Aventador LP700-4 6,5 Lts. Coupe 2P. T/A",
    Nox: 0.0124,
    Rendimiento: 4.1
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Aventador LP700-4 6.5 Lts. Coupe T/A Motor Otto",
    Nox: 0.032,
    Rendimiento: 4.1
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Aventador S 6,5 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.02,
    Rendimiento: 4.1
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Huracan LP580-2 5,2 Lts. Coupe 2P. T/A 4x2 Otto",
    Nox: 0.02983,
    Rendimiento: 5.8
  },
  {
    Marca: "Lamborghini",
    Tipo: "Coupe",
    Modelo: "Huracan LP610-4 5,2 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01973,
    Rendimiento: 5.4
  },
  {
    Marca: "Lamborghini",
    Tipo: "Station Wagon",
    Modelo: "Urus 4.0",
    Nox: 0.01541,
    Rendimiento: 5.9
  },
  {
    Marca: "Lamborghini",
    Tipo: "Station Wagon",
    Modelo: "Urus 4.0L 4x4",
    Nox: 0.01541,
    Rendimiento: 6
  },
  {
    Marca: "Lamborghini",
    Tipo: "Station Wagon",
    Modelo: "Urus 4.0L AWD",
    Nox: 0.0169,
    Rendimiento: 4.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Cabriolet",
    Modelo: "Range Rover Evoque 2,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.00659,
    Rendimiento: 9.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Cabriolet",
    Modelo: "Range Rover Evoque T 2,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.00816,
    Rendimiento: 8.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Camioneta",
    Modelo: "Defender 110 TD4 2,2 Lts. DOHC Pick Up Cabina Simple 2P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Camioneta",
    Modelo: "Defender 110 TD4 2,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Camioneta",
    Modelo: "Defender 130 TD4 2,2 Lts. DOHC Pick Up Cabina Simple 2P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Camioneta",
    Modelo: "Defender 130 TD4 2,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Coupe",
    Modelo: "Range Rover Evoque 2,0T Lts. Dynamic DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.0159,
    Rendimiento: 7.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Hatch Back",
    Modelo: "Evoque 2,0 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.00375,
    Rendimiento: 9.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Hatch Back",
    Modelo: "Evoque 2,2 Lts. DOHC Hatch Back 3P. T/A Motor Diesel",
    Nox: 0.15709,
    Rendimiento: 14.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Jeep",
    Modelo: "Defender 90 Puma 2,2 Lts. DOHC Jeep 3P. T/M 4x4 Motor Diesel",
    Nox: 0.18653,
    Rendimiento: 8.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Jeep",
    Modelo: "Range Rover Evoque 2.0T Lts. Tipo Jeep 3P. T/A 4x4 Otto",
    Nox: 0.00375,
    Rendimiento: 9.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "All New Range Rover 3,0 Lts TDV6 DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.14219,
    Rendimiento: 11.8
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i 5 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i 6 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i 7 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i First Edition 5 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i First Edition 7 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i HSE 5 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i HSE 6 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i HSE 7 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i S 5 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i S 6 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i S 7 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i SE 5 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i SE 6 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 2.0i SE 7 Asientos",
    Nox: 0.011,
    Rendimiento: 8.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 5 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 6 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 First Edition 5 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 First Edition 6 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 First Edition 7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 HSE 5 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 HSE 6 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 HSE 7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 S 5 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 S 6 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 S 7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 SE 5 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 SE 6 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 SE P400 7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0 X  7 Asientos",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0iD 5 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0iD 6 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0iD 6 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0iD 7 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 3.0iD 7 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 TD4 2,2 Lts. DOHC Station Wagon (Hard Top) 5P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 110 TD4 2,2 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 130 TD4 2,2 Lts. DOHC Station Wagon (Hard Top) 5P. T/M Motor Diesel",
    Nox: 0.2605,
    Rendimiento: 7.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 90 3.0iD 5 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 90 3.0iD 6 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Defender 90 3.0iD 6 pas.",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.008,
    Rendimiento: 8.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.008,
    Rendimiento: 8.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery 4 S/C 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0074,
    Rendimiento: 6.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery 4 V6 HSE 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.16114,
    Rendimiento: 8.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery 4 V6 SE 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.16114,
    Rendimiento: 8.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery IV 3,0 Lts. DOHC Station Wagon 5 Asientos 5P T/A Motor Diesel",
    Nox: 0.13738,
    Rendimiento: 11.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery IV 3,0 Lts. DOHC Station Wagon 7 Asientos 5P T/A Motor Diesel",
    Nox: 0.13738,
    Rendimiento: 11.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport (LC) 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.00528,
    Rendimiento: 10.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport (LC) 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.00528,
    Rendimiento: 10.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,0 Lts. Station Wagon 5P. 5 Asientos T/A 4x4 Otto",
    Nox: 0.00528,
    Rendimiento: 10.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,0 Lts. Station Wagon 5P. 7 Asientos T/A 4x4 Otto",
    Nox: 0.00528,
    Rendimiento: 10.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.14564,
    Rendimiento: 14.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,0T Lts. Station Wagon 5P. (5 asientos) 4x4 T/A Otto",
    Nox: 0.00737,
    Rendimiento: 9.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,0T Lts. Station Wagon 5P. (7 asientos) 4x4 T/A Otto",
    Nox: 0.00737,
    Rendimiento: 9.2
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,2 Lts. Station Wagon (5 asientos) 4x4 T/A Diesel",
    Nox: 0.14736,
    Rendimiento: 14.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2,2 Lts. Station Wagon (7 asientos) 4x4 T/A Diesel",
    Nox: 0.14736,
    Rendimiento: 13.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0i R (5 asientos)",
    Nox: 0.02257,
    Rendimiento: 10.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0i R (7 asientos)",
    Nox: 0.02257,
    Rendimiento: 10.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0i R-Dynamic S",
    Nox: 0.02785,
    Rendimiento: 9.8
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0i S",
    Nox: 0.0058,
    Rendimiento: 10
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0i S (7 Pasajeros)",
    Nox: 0.0058,
    Rendimiento: 9.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Discovery Sport 2.0iD",
    Nox: 0.0374,
    Rendimiento: 15.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Evoque 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00375,
    Rendimiento: 9.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Evoque 2,0i S",
    Nox: 0.00447,
    Rendimiento: 9.8
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Evoque 2,2 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.15709,
    Rendimiento: 13.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Evoque 2.0i Lts. SE",
    Nox: 0.00448,
    Rendimiento: 9.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Freelander 2 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0052,
    Rendimiento: 7.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Freelander 2 TD4 HSE 2,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.12558,
    Rendimiento: 11.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Freelander 2 TD4 S 2,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.12558,
    Rendimiento: 11.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Freelander 2 TD4 SE 2,2 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.12558,
    Rendimiento: 11.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Defender 110 3.0iD",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Defender 90 3.0i",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Defender 90 3.0i Firts Edition",
    Nox: 0.01193,
    Rendimiento: 8.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Defender 90 3.0iD S",
    Nox: 0.0127,
    Rendimiento: 10.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Discovery 3.0iD SE",
    Nox: 0.01438,
    Rendimiento: 11.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Discovery S/C 3,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01365,
    Rendimiento: 7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Discovery TDV6 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.15492,
    Rendimiento: 11.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Evoque 2.0i R",
    Nox: 0.00583,
    Rendimiento: 10.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Range Rover Sport 5,0 Lts. S/C DOHC Station Wagon 5P. 4x4 (5 Astos.) T/A Motor Otto",
    Nox: 0.0102,
    Rendimiento: 5.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "New Range Rover Sport 5,0 Lts. S/C DOHC Station Wagon 5P. 4x4 (7 Astos.) T/A Motor Otto",
    Nox: 0.0102,
    Rendimiento: 5.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover 2.0L Petrol Phev Vogue",
    Nox: 0.0089,
    Rendimiento: 14.2
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover 3.0 iD Vogue",
    Nox: 0.00634,
    Rendimiento: 8.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover 3.0 iD Vogue SE",
    Nox: 0.00634,
    Rendimiento: 8.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover 5,0 Lts. S/C AB Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0093,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover 5,0 Lts. V8 SC DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0102,
    Rendimiento: 4.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque",
    Nox: 0.15741,
    Rendimiento: 13.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,0 Lts. Station Wagon 3P. T/A 4x4 Otto",
    Nox: 0.00659,
    Rendimiento: 10.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00659,
    Rendimiento: 10.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,0T Lts. Prestige DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0159,
    Rendimiento: 7.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,0T Lts. Pure DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0159,
    Rendimiento: 7.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,0T Lts. Pure SE DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0159,
    Rendimiento: 7.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,2 Lts. Dynamic DOHC Station Wagon 3P. 4x4 T/A Motor Diesel",
    Nox: 0.13159,
    Rendimiento: 11.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,2 Lts. Prestige DOHC Station Wagon 3P. 4x4 T/A Motor Diesel",
    Nox: 0.13159,
    Rendimiento: 11.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,2 Lts. Pure DOHC Station Wagon 3P. 4x4 T/A Motor Diesel",
    Nox: 0.13159,
    Rendimiento: 11.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque 2,2 Lts. Pure SE DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.13159,
    Rendimiento: 11.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Evoque iD 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.04879,
    Rendimiento: 16.4
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover SC 5,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.0139,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover SDV8 4,4 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.13646,
    Rendimiento: 8.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3,0 Lts. S/C Station Wagon 5 Asientos 5P T/A 4x4 Otto",
    Nox: 0.00505,
    Rendimiento: 7.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0 SDV6 3,0 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.1518,
    Rendimiento: 12.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0 SDV6 7 asientos 3,0 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.1518,
    Rendimiento: 12.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0i",
    Nox: 0.0091,
    Rendimiento: 8.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0i SE",
    Nox: 0.0091,
    Rendimiento: 8.3
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0iD",
    Nox: 0.00634,
    Rendimiento: 8.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0iD HSE Dynamic",
    Nox: 0.00634,
    Rendimiento: 8.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 3.0iD SE",
    Nox: 0.00634,
    Rendimiento: 8.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 5.0 S/C SVR (5 Asientos)",
    Nox: 0.01367,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport 5.0 S/C SVR (7 Asientos)",
    Nox: 0.01367,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport S/C 3,0 Lts. DOHC Station Wagon 5P. 4x4 (5 Astos.) T/A Motor Otto",
    Nox: 0.00691,
    Rendimiento: 7.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport S/C 3,0 Lts. DOHC Station Wagon 5P. 4x4 (7 Astos.) T/A Motor Otto",
    Nox: 0.00691,
    Rendimiento: 7.1
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport S/C AB 5,0 Lts. Station Wagon 5P. 5 Asientos T/A 4x4 Otto",
    Nox: 0.0093,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport S/C AB 5,0 Lts. Station Wagon 5P. 7 Asientos T/A 4x4 Otto",
    Nox: 0.0093,
    Rendimiento: 5.6
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport SDV6 3,0 Lts. DOHC Station Wagon 5P. 4x4 5 Asientos T/A Motor Diesel",
    Nox: 0.16032,
    Rendimiento: 12
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport SDV6 3,0 Lts. DOHC Station Wagon 5P. 4x4 7 Asientos T/A Motor Diesel",
    Nox: 0.16032,
    Rendimiento: 12
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport SDV8 4,4 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.13646,
    Rendimiento: 8.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport SVR 5,0 Lts. Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00761,
    Rendimiento: 5.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Sport TDV6 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.15393,
    Rendimiento: 10.2
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar (LY) 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0043,
    Rendimiento: 11
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2,0 Lts. iD Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.1442,
    Rendimiento: 15.2
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.1592,
    Rendimiento: 14.9
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2.0i",
    Nox: 0.03017,
    Rendimiento: 10.5
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2.0iD R-Dynamic",
    Nox: 0.02203,
    Rendimiento: 16.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2.0iD R-Dynamic HSE",
    Nox: 0.02203,
    Rendimiento: 16.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2.0iD R-Dynamic S",
    Nox: 0.02203,
    Rendimiento: 16.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 2.0iD R-Dynamic SE",
    Nox: 0.02203,
    Rendimiento: 16.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar 3.0i",
    Nox: 0.00739,
    Rendimiento: 8.7
  },
  {
    Marca: "Land Rover",
    Tipo: "Station Wagon",
    Modelo: "Range Rover Velar S/C 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02332,
    Rendimiento: 7.9
  },
  {
    Marca: "Landwind",
    Tipo: "Station Wagon",
    Modelo: "X5 (JX6461L) 2,0 Lts. SOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0175,
    Rendimiento: 8.1
  },
  {
    Marca: "Lexus",
    Tipo: "Convertible",
    Modelo: "IS250 C 2,5 Lts. T/A",
    Nox: 0.00497,
    Rendimiento: 7.8
  },
  {
    Marca: "Lexus",
    Tipo: "Coupe",
    Modelo: "RC 350 3,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0082,
    Rendimiento: 7.5
  },
  {
    Marca: "Lexus",
    Tipo: "Coupe",
    Modelo: "RC 350 3,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00775,
    Rendimiento: 7.6
  },
  {
    Marca: "Lexus",
    Tipo: "Coupe",
    Modelo: "RC-F 5,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0006,
    Rendimiento: 6.1
  },
  {
    Marca: "Lexus",
    Tipo: "Coupe",
    Modelo: "RC350 3,5 Lts. Coupe T/A",
    Nox: 0.0148,
    Rendimiento: 7.2
  },
  {
    Marca: "Lexus",
    Tipo: "Coupe",
    Modelo: "RCF 5.0L V8",
    Nox: 0.00585,
    Rendimiento: 5.9
  },
  {
    Marca: "Lexus",
    Tipo: "Hatch Back",
    Modelo: "CT200h 1,8 Lts. Hibrido DOHC Hatch Back 5P. T/A, Vehiculo Electrico Hibrido",
    Nox: 0.00207,
    Rendimiento: 39
  },
  {
    Marca: "Lexus",
    Tipo: "Hatch Back",
    Modelo: "UX200 2,0 Lts. Hatch Back 5P. T/A CVT Otto",
    Nox: 0.0043,
    Rendimiento: 10.8
  },
  {
    Marca: "Lexus",
    Tipo: "Hatch Back",
    Modelo: "UX250H 2,0 Lts. Hatch Back 5P. T/A 4x2 Hibrido",
    Nox: 0.00163,
    Rendimiento: 23.3
  },
  {
    Marca: "Lexus",
    Tipo: "Hatch Back",
    Modelo: "UX250H 2,0 Lts. Hatch Back 5P. T/A 4x4 Hibrido",
    Nox: 0.00163,
    Rendimiento: 21.7
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "ES 250 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0086,
    Rendimiento: 8.8
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "ES 350 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00245,
    Rendimiento: 7.7
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "ES 350 3,5 Lts. Sedan 4P. T/A",
    Nox: 0.00245,
    Rendimiento: 7.7
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "ES250 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0037,
    Rendimiento: 10.2
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "ES300H 2,5 CVT",
    Nox: 0.00363,
    Rendimiento: 19.6
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS 200T 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0212,
    Rendimiento: 8.7
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS 250 2,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01581,
    Rendimiento: 7.7
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS 350 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.009,
    Rendimiento: 7.1
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS 350 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0048,
    Rendimiento: 7.4
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS 450h Hibrido 3,5 Lts. DOHC Sedan 4P. T/SA (CVT), Vehiculo Electrico Hibrido",
    Nox: 0.00409,
    Rendimiento: 14.5
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "GS-F 5,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0029,
    Rendimiento: 6
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS 250 2,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01625,
    Rendimiento: 8.3
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS 300 h 2,5 Lts. DOHC Hibrido Sedan 4P. T/A Tipo CVT, Vehiculo Electrico Hibrido",
    Nox: 0.00216,
    Rendimiento: 19.2
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS 350 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00775,
    Rendimiento: 7.4
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS 350 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00655,
    Rendimiento: 7.6
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS200T 2,0 Lts. Sedan 4P. 4x2 T/A Otto",
    Nox: 0.0157,
    Rendimiento: 8.6
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS300",
    Nox: 0.00917,
    Rendimiento: 8.4
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "IS300 2,0 Lts. Sedan 4P. 4x2 T/A Otto",
    Nox: 0.0157,
    Rendimiento: 8.6
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "LS 460 4,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00462,
    Rendimiento: 5.9
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "LS500 3,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00505,
    Rendimiento: 6.3
  },
  {
    Marca: "Lexus",
    Tipo: "Sedan",
    Modelo: "LS500H 3,5 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.00096,
    Rendimiento: 12.5
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "LX 570 5,7 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01448,
    Rendimiento: 4.9
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX 200T 2,0 Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0321,
    Rendimiento: 9.3
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX 200T 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0321,
    Rendimiento: 9.3
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX 300 H 2,5 Lts. DOHC Station Wagon 5P. T/A Tipo CVT 4x2, Vehiculo Hibrido Electrico",
    Nox: 0.01613,
    Rendimiento: 15.9
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX 300 H 2,5 Lts. DOHC Station Wagon 5P. T/A Tipo CVT 4x4, Vehiculo Hibrido Electrico",
    Nox: 0.01613,
    Rendimiento: 15.9
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX300 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0321,
    Rendimiento: 9.3
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "NX300 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0321,
    Rendimiento: 9.3
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX 350 3,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00507,
    Rendimiento: 6.9
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX 350 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00843,
    Rendimiento: 7.2
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX 350L 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00621,
    Rendimiento: 7
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX 450hL 3,5 Lts. Station Wagon 5P. T/A Hibrido 4x4",
    Nox: 0.00733,
    Rendimiento: 16.1
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX450h 3,5 Lts. Hibrido DOHC Station Wagon 5P. T/A, Vehiculo Electrico Hibrido",
    Nox: 0.00457,
    Rendimiento: 15.4
  },
  {
    Marca: "Lexus",
    Tipo: "Station Wagon",
    Modelo: "RX450H 3,5 Lts. Station Wagon 5P. T/A Hibrido Electrico",
    Nox: 0.01077,
    Rendimiento: 17.2
  },
  {
    Marca: "Lifan",
    Tipo: "Camioneta",
    Modelo: "Refri Box 1,2 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Camioneta",
    Modelo: "Truck 1,2 Lts. DOHC Pick Up 2P. T/M Motor Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Camioneta",
    Modelo: "Truck Box 1,2 Lts. Pick Up 2P. T/M Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Camioneta",
    Modelo: "Truck D/C 1,2 Lts. DOHC Pick Up Doble Cabina  4P. T/M Motor Otto",
    Nox: 0.00955,
    Rendimiento: 11.2
  },
  {
    Marca: "Lifan",
    Tipo: "Camioneta",
    Modelo: "Truck D/C Box 1,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.00955,
    Rendimiento: 11.2
  },
  {
    Marca: "Lifan",
    Tipo: "Furgon cerrado",
    Modelo: "Cargo 1,2 Lts. DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Furgon cerrado",
    Modelo: "Cargo XL 1,2 Lts. DOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Hatch Back",
    Modelo: "330 1,3 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0188,
    Rendimiento: 10.8
  },
  {
    Marca: "Lifan",
    Tipo: "Sedan",
    Modelo: "530 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0046,
    Rendimiento: 9.8
  },
  {
    Marca: "Lifan",
    Tipo: "Sedan",
    Modelo: "630 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01555,
    Rendimiento: 9.9
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "M7 CVT SX 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.00761,
    Rendimiento: 7.6
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "Van 1,2 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "Van XL 1,2 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00957,
    Rendimiento: 10.9
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X50 1,5 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0206,
    Rendimiento: 10
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X60 1,8 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.0078,
    Rendimiento: 9.9
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X7 AT 1,8 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.022,
    Rendimiento: 7.9
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X7 My Way 1,8 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.021,
    Rendimiento: 8.6
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X70 2,0 Lts. Station Wagon 4P. T/A CVT Otto",
    Nox: 0.0159,
    Rendimiento: 8.8
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X70 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01905,
    Rendimiento: 9.2
  },
  {
    Marca: "Lifan",
    Tipo: "Station Wagon",
    Modelo: "X80 EX 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.01869,
    Rendimiento: 6.8
  },
  {
    Marca: "Lincoln",
    Tipo: "Station Wagon",
    Modelo: "J6LG/112 MKX 3,7 Lts. Station Wagon 5P. T/A",
    Nox: 0.00269,
    Rendimiento: 7.1
  },
  {
    Marca: "Lincoln",
    Tipo: "Station Wagon",
    Modelo: "Nautilus 2,0 lt. Station Wagon 5P T/A",
    Nox: 0.00881,
    Rendimiento: 7.4
  },
  {
    Marca: "Lincoln",
    Tipo: "Station Wagon",
    Modelo: "Navigator 3,5 Lts. Sattion Wagon 5P. T/M Otto",
    Nox: 0.01144,
    Rendimiento: 5.8
  },
  {
    Marca: "Lotus",
    Tipo: "Cabriolet",
    Modelo: "Elise S 1,8 Lts. T/M",
    Nox: 0.0335,
    Rendimiento: 9.7
  },
  {
    Marca: "Lotus",
    Tipo: "Convertible",
    Modelo: "Elise CUP 250 1,8 Lts. Convertible 2P. TM Otto",
    Nox: 0.0335,
    Rendimiento: 9.7
  },
  {
    Marca: "Lotus",
    Tipo: "Convertible",
    Modelo: "Elise Sport 220 1,8 Lts. Convertible 2P. TM Otto",
    Nox: 0.0301,
    Rendimiento: 9.9
  },
  {
    Marca: "Lotus",
    Tipo: "Convertible",
    Modelo: "Exige Cup 430 3,5 Lts. Convertible 2P. T/M",
    Nox: 0.0175,
    Rendimiento: 6.4
  },
  {
    Marca: "Lotus",
    Tipo: "Coupe",
    Modelo: "Evora S Sport",
    Nox: 0.01503,
    Rendimiento: 6.9
  },
  {
    Marca: "Lotus",
    Tipo: "Coupe",
    Modelo: "Exige S 3,5 Lts. Coupe T/A Otto",
    Nox: 0.02215,
    Rendimiento: 6.7
  },
  {
    Marca: "Lotus",
    Tipo: "Coupe",
    Modelo: "Exige S 3,5 Lts. Coupe T/A Otto",
    Nox: 0.02215,
    Rendimiento: 6.7
  },
  {
    Marca: "Lotus",
    Tipo: "Coupe",
    Modelo: "Exige S 3,5 Lts. Coupe T/M",
    Nox: 0.02215,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 200 1,5 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.019,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 200 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0179,
    Rendimiento: 10.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 200 Cabriolet",
    Nox: 0.0088,
    Rendimiento: 10.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 220 d 2,1 Lts. Cabriolet 2P. T/A 4x2 Diesel",
    Nox: 0.039,
    Rendimiento: 17.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 300 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0118,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 300 2,0 Lts. Cabriolet 4P. T/A Otto",
    Nox: 0.0074,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 43 AMG 3,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.01072,
    Rendimiento: 7.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 43 AMG 4Matic 3,0 Lts. Cabriolet 2P. 4x4 T/A Otto",
    Nox: 0.00924,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 63 AMG 4,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 63 AMG Cabrio S 4,0 Lts. 2P. T/A Otto",
    Nox: 0.0119,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "C 63 S AMG 4,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 200 Cabrio",
    Nox: 0.01575,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 200 Cabrio",
    Nox: 0.0101,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 200 Cabrio 2,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.00969,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 250 Cabrio 2,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0207,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 300 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0068,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 300 Cabriolet",
    Nox: 0.0117,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 350 3,5 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.00465,
    Rendimiento: 7.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 350 Cabrio",
    Nox: 0.01257,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 350 CDI 3,0 Lts. V6 DOHC Cabrio 2P. T/A Motor Diesel",
    Nox: 0.1566,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 400 3,0 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.03376,
    Rendimiento: 9.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 400 4Matic 3,0 Lts. Cabriolet 2P. 4x4 T/A Otto",
    Nox: 0.01168,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 450 4Matic 3,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.0098,
    Rendimiento: 8.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 500 CGI 4,7 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.01748,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E 53 AMG 4Matic 3,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.02102,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "E53 AMG 4MAtic Plus Cabrio",
    Nox: 0.02003,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "GT AMG 4,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 6.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "GT-C AMG 4,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.011,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S 560 4,0 Lts. Cabriolet 2P. T/A 4x2 Otto",
    Nox: 0.01956,
    Rendimiento: 7.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S 63 AMG 4Matic 4,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.01221,
    Rendimiento: 7.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S500 4,7 Lts. Cabriolet T/A Otto",
    Nox: 0.02005,
    Rendimiento: 8.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S63 AMG Cabrio 5,5 Lts. T/A Otto",
    Nox: 0.02059,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S63 AMG Cabrio 5,5 Lts. T/A Otto",
    Nox: 0.02059,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "S65 AMG 6,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01495,
    Rendimiento: 4.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SL 350 3,5 Lts. Cabriolet T/A",
    Nox: 0.00566,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SL 350 3,5 Lts. Cabriolet T/A",
    Nox: 0.00566,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SL 400 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0147,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SL 500 4,7 Lts. V8 DOHC Roadster Descapotable 2P. T/A Motor Otto",
    Nox: 0.01977,
    Rendimiento: 7.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SL 63 AMG 5,5 Lts. DOHC Roadster Descapotable 2P. T/A Motor Otto",
    Nox: 0.03359,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLC 200 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01259,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLC 300 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.004,
    Rendimiento: 11
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLC 43 AMG 4Matic 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0156,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLK 200 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01259,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLS 6,3 AMG 6,2 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.02026,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLS 6,3 AMG 6,2 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.02026,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Cabriolet",
    Modelo: "SLS 6,3 AMG GT 6,2 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.02026,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 213 CDI 2,1 Lts. Chasis Cabina 2P. T/M 4x2 Diesel",
    Nox: 0.2125,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 213 CDI 2,1 Lts. DOHC Chasis Cabina 2P. T/M 4x2 Motor Diesel",
    Nox: 0.2125,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 313 CDI 2,1 Lts. Camioneta Cabina Doble 4P. T/M 4x2 Diesel",
    Nox: 0.1701,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 313 CDI 2,1 Lts. Camioneta Cabina Simple 2P. T/M 4x2 Diesel",
    Nox: 0.1701,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 314 CDI Camioneta Corta",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 314 CDI Camioneta Doble Cabina Corta",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 314 CDI Camioneta Doble Cabina Larga",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 314 CDI Camioneta Larga",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Corta",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Corta",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Doble Cabina Corta",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Doble Cabina Corta",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Doble Cabina Larga",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Doble Cabina Larga",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Larga",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "Sprinter 316 CDI Camioneta Larga",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "X 250d 4Matic 2,3 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.2421,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Camioneta",
    Modelo: "X 350d 4Matic 3,0 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.20619,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "AMG GT S 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01493,
    Rendimiento: 8.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 180 1,6 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00735,
    Rendimiento: 13.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 180 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01408,
    Rendimiento: 12.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 200 1,5 Lts. Coupe 2P. T/A Otto",
    Nox: 0.019,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 200 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 200 Coupe",
    Nox: 0.0088,
    Rendimiento: 10.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 220 CDI 2,1 Lts. DOHC Coupe 2P. T/A Motor Diesel",
    Nox: 0.1294,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 220 d 2,1 Lts.Coupe 2P. T/A 4x2 Diesel",
    Nox: 0.039,
    Rendimiento: 17.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 300 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0118,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 300 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0074,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 350 BlueEfficiency 3,5 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00465,
    Rendimiento: 7.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 43 AMG 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01072,
    Rendimiento: 7.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 43 AMG 4Matic 3,0 Lts. Coupe 2P. 4x4 T/A Otto",
    Nox: 0.00924,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 63 AMG 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 63 AMG 6,2 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.02136,
    Rendimiento: 5.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 63 AMG Coupe 4,0 Lts. 2P. T/A Otto",
    Nox: 0.0119,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 63 AMG S Coupe 4,0 Lts. 2P. T/A Otto",
    Nox: 0.0119,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C 63 S AMG 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C200 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.0117,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "C300 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.00896,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 200 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0184,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 200 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00969,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 200 Coupe",
    Nox: 0.01575,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 200 Coupe",
    Nox: 0.0101,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 250 CGI 1,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 250 Coupe 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0207,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 300 2,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0068,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 300 Coupe",
    Nox: 0.0117,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 350 3,5 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00465,
    Rendimiento: 7.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 350 CDI 3,0 Lts. V6 DOHC Coupe 2P. T/A Motor Diesel",
    Nox: 0.1566,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 350 Coupe",
    Nox: 0.01257,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 400 3,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.03376,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 400 4Matic 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01168,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 450 4Matic 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.0098,
    Rendimiento: 8.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 500 CGI 4,7 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01748,
    Rendimiento: 6.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E 53 AMG 4Matic 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.02102,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "E53 AMG 4Matic Plus Coupe",
    Nox: 0.02003,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "GT-R AMG 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.011,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "GT-S AMG 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 6.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S 500 4,7 Lts. Coupe T/A",
    Nox: 0.02005,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S 560 4,0 Lts. Coupe 2P. T/A 4x2 Otto",
    Nox: 0.01956,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S 63 AMG 4 Matic L 5,5 Lts. DOHC Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.01899,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S 63 AMG 4Matic 4,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01221,
    Rendimiento: 8.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S500 4,7 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0353,
    Rendimiento: 5.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S65 AMG 4Matic L 6,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 5.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "S65 AMG 6,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01495,
    Rendimiento: 4.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "SL 400 3,0 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.01649,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "SLK 200 1,8 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.01749,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "SLK 350 3,5 Lts. DOHC Roadster 2P. T/A Motor Otto",
    Nox: 0.00569,
    Rendimiento: 8.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "SLK 55 AMG 5,5 Lts. DOHC Roadster (Convertible) 2P. T/A Motor Otto",
    Nox: 0.00613,
    Rendimiento: 8.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Coupe",
    Modelo: "SLS 6,3 AMG GT 6,2 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.02026,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Citan 108 CDI 1,5 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.14735,
    Rendimiento: 21.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Citan 109 CDI 1,5 Lts. SOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.14735,
    Rendimiento: 21.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Citan 109 CDI Corto 1,5 Lts. SOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.14735,
    Rendimiento: 21.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Citan 109 CDI Largo 1,5 Lts. SOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.14735,
    Rendimiento: 21.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Citan 111 CDi 1,5 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.12324,
    Rendimiento: 19.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 213 CDI 2,1 Lts. DOHC Furgon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.2125,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 313 CDI 2,1 Lts. DOHC Furgon 5P. (Corto) T/M Motor Diesel",
    Nox: 0.20602,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 313 CDI 2,1 Lts. DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.20602,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 313 CDI 2,1 Lts. Furgon 5P. T/M 4x2 Diesel",
    Nox: 0.20602,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 313 CDI 2,1 Lts. Furgon 5P. T/M 4x4 Diesel",
    Nox: 0.20602,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 314 CDI 10,5 m3",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 314 CDI 14 m3",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 314 CDI 15,5 m3",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 314 CDI 7,5 m3",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 316 2,1 Lts. CDi Furgon 10m3, 4P. T/M",
    Nox: 0.2178,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Sprinter 316 2,1 Lts. CDi Furgon 14 m3. 4P. T/M",
    Nox: 0.2178,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 10,5 m3",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 10,5 M3",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 14 m3",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 14 m3",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 15,5 m3",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Sprinter 316 CDI 15,5 m3",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 109 CDI 1,6 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.20233,
    Rendimiento: 12.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 110 CDI 2,1 Lts. DOHC Furgon 5,2 4P. T/M Motor (70 kw) Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 110 CDI 2,1 Lts. DOHC Furgon 5,7 4P. T/M Motor (70 kw) Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 111 1,6 Lts. Furgon T/M Diesel",
    Nox: 0.20233,
    Rendimiento: 12.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Vito 111 CDI 1,6 Lts. 6m3 Furgon 4P. 3 Pasajeros T/M Diesel",
    Nox: 0.2416,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 111 CDI 1,6 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2416,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Vito 111 CDI 1,6 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.2116,
    Rendimiento: 12
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 113 CDI 2,1 Lts. DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 114 CDI 2,1 Lts. Furgon 2P. T/M",
    Nox: 0.16347,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 114 CDI 2,1 Lts. Furgon 4P. T/A Diesel",
    Nox: 0.2246,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vito 114 CDI 2,1 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Vito 114 Cdi 2,1 Lts. Furgon 6,3 m3 4P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon Cerrado",
    Modelo: "Vito 114 Cdi 2,1 Lts. Furgon 6,9 m3 4P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon cerrado",
    Modelo: "Vitto 114 CDI 2,1 Lts. Furgon T/A Diesel",
    Nox: 0.14267,
    Rendimiento: 14.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon",
    Modelo: "Sprinter 313 CDI 2,1 Lts. Furgon 7,5 m3 5P. T/M 4x2 Diesel",
    Nox: 0.1701,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon",
    Modelo: "Sprinter 314 CDI 10,5 m3",
    Nox: 0.07359,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon",
    Modelo: "Sprinter 314 CDI 14 m3",
    Nox: 0.07359,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Furgon",
    Modelo: "Vito 111 CDI 1,6 Furgon 3 Asientos 2P. T/M Diesel",
    Nox: 0.2116,
    Rendimiento: 12
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 180 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.008,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 180 CDI 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1513,
    Rendimiento: 13.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 1,3 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.01305,
    Rendimiento: 12.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 1,3 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.01795,
    Rendimiento: 12
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.008,
    Rendimiento: 12.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 1,6 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.00778,
    Rendimiento: 13.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 CDI 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1541,
    Rendimiento: 14.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 CDI 2,1 Lts., DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.0773,
    Rendimiento: 16.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 d",
    Nox: 0.03027,
    Rendimiento: 16
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 200 d 2,1 Lts. Hatch Back 4P. T/A Diesel",
    Nox: 0.06276,
    Rendimiento: 20.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 220 CDI 2,1 Lts., DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.0773,
    Rendimiento: 16.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 250 2,0 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0097,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 250 CGI 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01832,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 250 Sport 2,0 Lts. Hatch Back 4P. T/A",
    Nox: 0.0122,
    Rendimiento: 10.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 250 Sport 2,0 Lts. Hatch Back 5P. T/M",
    Nox: 0.0106,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 35 AMG 4Matic Hatch Back",
    Nox: 0.00947,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 45 AMG 4 Matic 2,0 Lts. DOHC Hatch Back 5P. T/A 4x4 Motor Otto",
    Nox: 0.02077,
    Rendimiento: 10.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 45 AMG 4Matic Plus",
    Nox: 0.02604,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A 45 S AMG 4Matic Plus",
    Nox: 0.02604,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A200 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.008,
    Rendimiento: 12.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "A45 AMG 2,0 Lts. Hatch Back 5P. 4x4 T/A",
    Nox: 0.01884,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 180 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 12.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 180 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.008,
    Rendimiento: 12.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 180 CDI 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1513,
    Rendimiento: 13.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 180 d 1,5 Lts. DOHC Hatch Back 5P. T/A Diesel",
    Nox: 0.1131,
    Rendimiento: 15
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 200 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 200 1,6 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0166,
    Rendimiento: 11.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 200 CDI 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1513,
    Rendimiento: 13.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 200d 2,1 Lts. Hatch Back 5P. T/A",
    Nox: 0.06276,
    Rendimiento: 20.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "B 220 2,0 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.0076,
    Rendimiento: 11
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 200 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01514,
    Rendimiento: 13.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 200 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00995,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 200d 2,1 Lts. Hatch Back 5P. T/A 4x2 Diesel",
    Nox: 0.0566,
    Rendimiento: 15.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 220 d 4 Matic 2,1 Lts. Turbo DOHC Hatch Back 5P. T/A Diesel",
    Nox: 0.05982,
    Rendimiento: 16.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 220d 2,1 Lts. Hatch Back 5P. T/A 4x2 Diesel",
    Nox: 0.0566,
    Rendimiento: 19.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 220d 4Matic 2,1 Lts. Hatch Back 5P. T/A 4x4 Diesel",
    Nox: 0.0566,
    Rendimiento: 17.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 250 4Matic 2,0 Lts. DOHC Hatch Back 5P. T/A 4x4 Motor Otto",
    Nox: 0.01679,
    Rendimiento: 12
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 250 4Matic 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.01679,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatch Back",
    Modelo: "GLA 45 AMG 4Matic 2,0 Lts. DOHC Hatch Back 5P. T/A 4x4 Motor Otto",
    Nox: 0.02207,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Hatchback",
    Modelo: "GLA 220d 4Matic",
    Nox: 0.02089,
    Rendimiento: 15.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Jeep",
    Modelo: "G 350 Bluetec 3,0 Lts. DOHC Jeep (Todo Terreno) 5P. 4x4 T/A Motor Diesel",
    Nox: 0.10971,
    Rendimiento: 7.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 213 CDI 2,1 Lts. DOHC Minibus 5P. (13 asientos), T/M 4x2 Motor Diesel",
    Nox: 0.2125,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 313 CDI 2,1 Lts. DOHC Minibus 5P. 16 asientos T/M Motor Diesel",
    Nox: 0.20602,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 314 CDI 14 mas 1",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 314 CDI 15 mas 1",
    Nox: 0.08104,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 2,1 Lts. Minibus 13 Asientos 3P. T/M Diesel",
    Nox: 0.2178,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 2,1 Lts. Minibus 16 Asientos 3P. T/M Diesel",
    Nox: 0.2178,
    Rendimiento: 9.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1 Extra Largo",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1 Extra Largo",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1 Largo",
    Nox: 0.08211,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Sprinter 316 CDI 12 mas 1 Largo",
    Nox: 0.08039,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "V-200 CDI 2,1 Lts. DOHC Minibus 4P. (8 asientos) T/A Motor Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "V-220 CDI 2.0 Lts. Minibus (8 Asientos) T/A Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Viano Ambient CDI 2,1 Lts. DOHC (8 asientos) 4P. T/M Motor Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Viano Trend  CDI 2,1 Lts. DOHC (8 asientos) 4P. T/M Motor Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 109 CDI Tourer 1,6 Lts. Minibus 10 asientos 5P. T/M Diesel",
    Nox: 0.20233,
    Rendimiento: 12.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 109 CDI Tourer 1,6 Lts. Minibus 8 asientos 4P. T/M Diesel",
    Nox: 0.20233,
    Rendimiento: 12.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 110 CDI 2,1 Lts. DOHC (10 asientos) 4P. T/M Motor (70 kw) Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 110 CDI 2,1 Lts. DOHC (8 asientos) 4P. T/M Motor (70 kw) Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 110 CDi Escolar Corto 2,1 Lts. DOHC Minibus 5P. (21 pasajeros) T/M Motor Diesel",
    Nox: 0.2513,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 110 CDi Escolar Largo 2,1 Lts. DOHC Minibus 5P. (21 pasajeros) T/M Motor Diesel",
    Nox: 0.2513,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 111 CDI Tourer 1,6 Lts. 8 Asientos Minibus 4P. T/M",
    Nox: 0.2416,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 111 CDI Tourer 1,6 Lts. Minibus 11 asientos 3P. T/M Diesel",
    Nox: 0.2416,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 111 CDI Tourer 1,6 Lts. Minibus 8 asientos 5P. T/M Diesel",
    Nox: 0.2116,
    Rendimiento: 12
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 113 CDI 2,1 Lts. DOHC Minibus (8 asientos) 4P. T/M Motor Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 114 CDI 2,1 Lts. Minibus 10 asientos 5P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 12.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 114 CDI 2,1 Lts. Minibus 11 Asientos 4P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 12.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito 114 CDI 2,1 Lts. Minibus 8 Asientos 4P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 12.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito Tourer 114 CDI 10 Asientos 2,1 Lts. Minibus 4/5P. T/A Diesel",
    Nox: 0.2246,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Minibus",
    Modelo: "Vito Tourer 114 CDI 8 Asientos 2,1 Lts. Minibus 5P. T/A Diesel",
    Nox: 0.2246,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Roadster",
    Modelo: "GT-R AMG Roadster",
    Nox: 0.011,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "A 200 1,3 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01305,
    Rendimiento: 12.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "A 35 AMG 4Matic Sedan",
    Nox: 0.00947,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "A250 Sedan",
    Nox: 0.0097,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "AMG GT 63 4 Matic 4Door Coupe 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.00718,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "AMG GT 63 S 4 Matic 4Door Coupe 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.00718,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 180 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00811,
    Rendimiento: 14.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 180 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01408,
    Rendimiento: 12.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 180 1,6 Lts. Sedan 4P. T/A 4x2 Otto",
    Nox: 0.032,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 180 Sedan",
    Nox: 0.00975,
    Rendimiento: 10.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.019,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01368,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01025,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0125,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 CGI 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 200 Sedan",
    Nox: 0.0088,
    Rendimiento: 10.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 220 CDI 2,1 Lts. DOHC SEDAN 4P. T/A Motor Diesel",
    Nox: 0.1294,
    Rendimiento: 12.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 220 CDI 2,1 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.13016,
    Rendimiento: 15.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 220 d 2,1 Lts. DOHC Sedan 4P. T/A Diesel",
    Nox: 0.0379,
    Rendimiento: 13.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 220 d 2,1 Lts. Sedan 4P. T/A 4x2 Diesel",
    Nox: 0.039,
    Rendimiento: 17.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 220d 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0317,
    Rendimiento: 17.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 250 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01025,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 250 CGI 1,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 250 CGI 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 300 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0118,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 300 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0074,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 350 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00465,
    Rendimiento: 7.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 350 CDI BlueEfficiency 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.14139,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 350e 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.01361,
    Rendimiento: 18.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 43 AMG 3,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01072,
    Rendimiento: 7.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 43 AMG 4Matic 3,0 Lts. Sedan 4P. 4x4 T/A Otto",
    Nox: 0.00924,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 450 AMG 4Matic 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01965,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 63 AMG 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 63 AMG 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0373,
    Rendimiento: 6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 63 AMG 6,2 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0139,
    Rendimiento: 4.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 63 AMG S 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0373,
    Rendimiento: 6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C 63 S AMG 4,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.006,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C-300e",
    Nox: 0.01617,
    Rendimiento: 16.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C200 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0117,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C300 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00896,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "C400 4Matic 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01965,
    Rendimiento: 9.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 180 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 14.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 180 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00944,
    Rendimiento: 13
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 200",
    Nox: 0.01228,
    Rendimiento: 12.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 200 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 14.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 200 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 14.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 200 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00944,
    Rendimiento: 13
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 200d 2,1 Lts. Sedan 4P. T/A",
    Nox: 0.0646,
    Rendimiento: 15.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 220 d  2,1 Lts. DOHC Sedan 4P. T/A Diesel",
    Nox: 0.06276,
    Rendimiento: 17.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 220d 2,1 Lts. Sedan 4P. T/A",
    Nox: 0.0646,
    Rendimiento: 15.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 250 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01832,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 250 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0148,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 250 Sport 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0148,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLA 45 AMG 4 Matic 2,0 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.02077,
    Rendimiento: 10.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 350 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00622,
    Rendimiento: 8.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 350 CDI 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.14139,
    Rendimiento: 12.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 350 CGI 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00314,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 400 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.02868,
    Rendimiento: 9.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 500 4,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.02425,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 500 CGI 4,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01748,
    Rendimiento: 6.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 63 AMG 5,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.02318,
    Rendimiento: 7.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "CLS 63 AMG S4 Matic 5,5 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.02407,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E - 200",
    Nox: 0.0101,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 200 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00969,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 200 CGI 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 200 Sedan",
    Nox: 0.01575,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 220 CDI 2,1 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.13016,
    Rendimiento: 14.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 220 CDI 2,1 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1556,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 220 d 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0505,
    Rendimiento: 17.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 220d Sedan",
    Nox: 0.03748,
    Rendimiento: 17.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 250 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0207,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 250 CGI 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 300 3,0 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.024,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 300 Sedan",
    Nox: 0.0117,
    Rendimiento: 9.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350 3,0 Lts. CDI DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.13421,
    Rendimiento: 10.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350 Bluetec 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.0396,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350 CDI Bluetec 3,0 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.0803,
    Rendimiento: 10.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350 CGI 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00314,
    Rendimiento: 10.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350 Sedan",
    Nox: 0.01257,
    Rendimiento: 9.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350d 4Matic 3,0 Lts. Sedan 4P. T/A 4x4 Diesel",
    Nox: 0.0479,
    Rendimiento: 13.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 350e 2,0 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.01034,
    Rendimiento: 16.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 400 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.03376,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 400 4Matic 3,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01168,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 450 4Matic 3,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.0098,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 500 CGI 4,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01748,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 53 AMG 4Matic 3,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.02102,
    Rendimiento: 8.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 63 AMG 4Matic 5,5 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.02407,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 63 AMG 5,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.02318,
    Rendimiento: 7.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 63 AMG S 4Matic 5,5 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.02407,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E 63 S AMG 4MaticPlus",
    Nox: 0.00735,
    Rendimiento: 5.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E200 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0112,
    Rendimiento: 10.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E220 Bluetec 2,1 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.03911,
    Rendimiento: 18.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E300 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00965,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E350 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01125,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E400 4Matic 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.03376,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E43 AMG 4 Matic 3,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.00719,
    Rendimiento: 9.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E53 AMG 4Matic Plus",
    Nox: 0.02003,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "E63 AMG S 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.00848,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 350 Bluetec 3,0 Lts. Turbo DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.0587,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 350 Bluetec Largo 3,0 Lts. Turbo DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.0587,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 350 d 3,0 Lts. Sedan 4P. T/A",
    Nox: 0.0627,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 400d 4Matic 2,9 Lts. Sedan 4P. T/A 4x2 Diesel",
    Nox: 0.05706,
    Rendimiento: 15.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 400d 4Matic 2,9 Lts. Sedan 4P. T/A 4x4 Diesel",
    Nox: 0.05706,
    Rendimiento: 14.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 500 4,7 Lts. Sedan 4P T/A Otto",
    Nox: 0.0327,
    Rendimiento: 5.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 560 4Matic 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01956,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 560 4Matic L 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01956,
    Rendimiento: 8.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 560 4Matic Maybach 4,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01956,
    Rendimiento: 8.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 560 L 4,0 Lts. Sedan 4P. T/A 4x2 Otto",
    Nox: 0.01956,
    Rendimiento: 9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S 63 AMG 4 Matic L 5,5 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.01899,
    Rendimiento: 7.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S400 Hybrid 3,5 Lts. Sedan 4P. T/A Hibrido Electrico",
    Nox: 0.00446,
    Rendimiento: 13.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S500 4,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.03416,
    Rendimiento: 8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S500 L 4,7 Lts. Sedan 4P. T/A",
    Nox: 0.02005,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S500 Largo 4,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.03416,
    Rendimiento: 7.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S600 Largo 6,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01872,
    Rendimiento: 6.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S600 Maybach 6,0 Sedan T/A Otto",
    Nox: 0.01251,
    Rendimiento: 6
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S65 AMG 4Matic L 6,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 5.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Sedan",
    Modelo: "S65 AMG 6,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01495,
    Rendimiento: 4.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "AMG GLE 43 4Matic Coupe 3,0 Lts. Station Wagon 4P. 4x4 T/A Otto",
    Nox: 0.02432,
    Rendimiento: 8.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "AMG GLE 43 4Matic Coupe 3,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02432,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 200 CGI 1,8 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01834,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 200 Estate 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01025,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 220 d Estate 2,1 Lts. DOHC Station Wagon 5P. T/A Diesel",
    Nox: 0.0379,
    Rendimiento: 13.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 250 Estate 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01025,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 350 CDI Estate 3,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.14139,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "C 63 AMG State 4,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0373,
    Rendimiento: 6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Citan 109 CDI Combi 1,5 Lts. SOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.14735,
    Rendimiento: 21.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Citan 109 CDI Combi Extra Larga 1,5 Lts. SOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.14735,
    Rendimiento: 21.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Citan 111 CDi 1,5 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.12324,
    Rendimiento: 19.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLA 180 Shooting Brake 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLA 200 Shooting Brake 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00778,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLS 350 CDI Shooting Brake 3,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.14139,
    Rendimiento: 13.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLS 350 Shooting Brake 3,5 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00622,
    Rendimiento: 8.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLS 400 Shooting Brake 3,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.02868,
    Rendimiento: 9.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "CLS 500 Shooting Brake 4,7 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.02425,
    Rendimiento: 8.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 200 Estate 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00969,
    Rendimiento: 11.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 220 CDI Estate 2,1 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1556,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 220d 4Matic All Terrain",
    Nox: 0.03748,
    Rendimiento: 15.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 220d 4Matic All-Terrain 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0505,
    Rendimiento: 17.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 250 Estate 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0207,
    Rendimiento: 9.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 350 CDI Bluetec Estate 3,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.0803,
    Rendimiento: 10.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 350d 4Matic All Terrain 3,0 Lts. Station Wagon 4P. T/A 4x4 Diesel",
    Nox: 0.0479,
    Rendimiento: 12.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 350d 4Matic All Terrain 3,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0479,
    Rendimiento: 12.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E 63 AMG S Estate 4Matic 5,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.02407,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "E220 Bluetec Estate 2,1 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.03911,
    Rendimiento: 17.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 350 D 4Matic 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.0578,
    Rendimiento: 9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 350d",
    Nox: 0.02198,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 400d",
    Nox: 0.02198,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 500 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02477,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 500 L 4 Matic 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.01592,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 63 AMG 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.0155,
    Rendimiento: 6.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G 63 AMG 5,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.01832,
    Rendimiento: 5.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G-500 5,5 Lts. Station Wagon T/A",
    Nox: 0.03487,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G350 Bluetec 3,0 Lts. T/A Diesel",
    Nox: 0.10971,
    Rendimiento: 7.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G500 4Matic 5,5 Lts. Station Wagon T/A Otto",
    Nox: 0.03326,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "G500 4Matic 5,5 Lts. Station Wagon T/A Otto",
    Nox: 0.03326,
    Rendimiento: 5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GL 350 Bluetec 4matic 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.06423,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GL 500 4Matic Blueefficiency 4,7 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.02198,
    Rendimiento: 5.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GL 63 AMG 4Matic 5,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.02964,
    Rendimiento: 6.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLB 200",
    Nox: 0.01656,
    Rendimiento: 11.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLB 200d",
    Nox: 0.02089,
    Rendimiento: 16.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLB 220d 4Matic",
    Nox: 0.02089,
    Rendimiento: 15.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 200",
    Nox: 0.01393,
    Rendimiento: 10.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 200 Coupe",
    Nox: 0.01393,
    Rendimiento: 10
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 200d 4Matic",
    Nox: 0.02681,
    Rendimiento: 15.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 200d Coupe 4Matic",
    Nox: 0.02681,
    Rendimiento: 15.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 220d 4Matic",
    Nox: 0.02681,
    Rendimiento: 15.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 220d 4Matic 2,1 Lts. Station Wagon 4P. T/A Diesel",
    Nox: 0.04822,
    Rendimiento: 15.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 220d 4Matic Coupe 2,1 Lts. Station Wagon 4P. 4x4 T/A Diesel",
    Nox: 0.04822,
    Rendimiento: 15.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 220d Coupe 4Matic",
    Nox: 0.02681,
    Rendimiento: 15.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 250 4Matic 2,0 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0118,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 250 d 4Matic 2,1 Lts. Station Wagon 4P. T/A Diesel",
    Nox: 0.04822,
    Rendimiento: 15.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 250d 4Matic Coupe 2,1 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.04822,
    Rendimiento: 15.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 300 4Matic 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0071,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 300 4Matic Coupe 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0071,
    Rendimiento: 10.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 300d 4Matic",
    Nox: 0.02681,
    Rendimiento: 14.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 300d Coupe 4Matic",
    Nox: 0.02681,
    Rendimiento: 14.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 350d 4Matic 3,0 Lts. Station Wagon 4P. T/A 4x4 Diesel",
    Nox: 0.05088,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 350d 4Matic Coupe 3,0 Lts. Station Wagon 4P. T/A 4x4 Diesel",
    Nox: 0.05088,
    Rendimiento: 11.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 350e 4Matic 2,0 Lts. Station Wagon 5P. T/A 4x4 Hibrido",
    Nox: 0.0126,
    Rendimiento: 17.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 350e Coupe 4Matic 2,0 Lts. Station Wagon 4P. T/A 4x4 Hibrido",
    Nox: 0.0126,
    Rendimiento: 17.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 43 AMG 4Matic",
    Nox: 0.01338,
    Rendimiento: 7.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 43 AMG 4Matic 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01338,
    Rendimiento: 8.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 43 AMG 4Matic Coupe",
    Nox: 0.01338,
    Rendimiento: 7.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 43 AMG 4Matic Coupe 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01338,
    Rendimiento: 8.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 AMG 4MATIC 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.00975,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 AMG 4MaticPlus",
    Nox: 0.01144,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 AMG 4MaticPlus Coupe",
    Nox: 0.01144,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 AMG Coupe 4MATIC 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.00975,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 S AMG 4MATIC 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.00975,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 S AMG 4MaticPlus",
    Nox: 0.01144,
    Rendimiento: 5.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 S AMG 4MaticPlus Coupe",
    Nox: 0.01144,
    Rendimiento: 5.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLC 63 S AMG Coupe 4MATIC 4,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.00975,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 250d 4 Matic 2,1 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.07159,
    Rendimiento: 15.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 300d 4Matic",
    Nox: 0.02786,
    Rendimiento: 12.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 300d 4Matic 7 Asientos",
    Nox: 0.02786,
    Rendimiento: 12.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 350d 4 Matic 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.06415,
    Rendimiento: 13.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 350d 4 Matic Coupe 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.06415,
    Rendimiento: 13.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 350d 4Matic Coupe",
    Nox: 0.02858,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400 4 Matic Coupe 3,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02432,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400 4Matic 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02432,
    Rendimiento: 9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400 4Matic 3,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01649,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400d 4Matic",
    Nox: 0.02858,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400d 4Matic 7 Asientos",
    Nox: 0.02858,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 400d 4Matic Coupe",
    Nox: 0.02858,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 43 3.0 Lts. Coupe, Station Wagon 5P. T/A Otto",
    Nox: 0.02432,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 450 4Matic",
    Nox: 0.01826,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 450 4Matic 7 Asientos",
    Nox: 0.01826,
    Rendimiento: 9.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 450 AMG Coupe 3,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02432,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 500 4 Matic 4,7 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.02198,
    Rendimiento: 6.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 500 4Matic 4,7 Lts. Station Wagon 5 asientos 5P. 4x4 T/A",
    Nox: 0.03705,
    Rendimiento: 7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 500 Coupe 4,7 Lts. Station Wagon 5 asientos 4P. 4x4 T/A",
    Nox: 0.03705,
    Rendimiento: 6.9
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 500e 4 Matic 3,0 Lts. Station Wagon 5P. T/A 4x4 Hibrido",
    Nox: 0.02325,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 53 AMG 4Matic plus",
    Nox: 0.01347,
    Rendimiento: 8.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 53 AMG 4Matic plus Coupe",
    Nox: 0.01347,
    Rendimiento: 8.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 AMG 4 Matic 5,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.03621,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 AMG 4Matic Plus",
    Nox: 0.01737,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 AMG 4Matic Plus Coupe",
    Nox: 0.01737,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 AMG S 4Matic 5,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.03621,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 S AMG 4Matic Plus",
    Nox: 0.01737,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 S AMG 4Matic Plus Coupe",
    Nox: 0.01737,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLE 63 S AMG Coupe 4 Matic 5,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.03621,
    Rendimiento: 6.3
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLK 220 CDI 2,1 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1551,
    Rendimiento: 10.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLK 220 CDI 4Matic 2,1 DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.12428,
    Rendimiento: 11.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLK 350 4Matic 3,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00717,
    Rendimiento: 8.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 350d 4Matic",
    Nox: 0.02858,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 350d 4Matic 3,0 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.06773,
    Rendimiento: 12.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 400d 4Matic",
    Nox: 0.02858,
    Rendimiento: 10.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 450",
    Nox: 0.00381,
    Rendimiento: 6.8
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 500 4Matic 4,7 Lts. Station Wagon 7 asientos 5P. 4x4 T/A",
    Nox: 0.03705,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "GLS 580 4Matic",
    Nox: 0.02328,
    Rendimiento: 6.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 250 Bluetec 2,1 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.05028,
    Rendimiento: 13.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 350 Bluetec 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.06972,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 350 Sport 3,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00961,
    Rendimiento: 9.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 400 4Matic 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.01649,
    Rendimiento: 8.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 500 4matic 4,7 Lts. DOHC Station Wagon 4P. 4x4 T/A Motor Otto",
    Nox: 0.01745,
    Rendimiento: 5.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "ML 63 AMG 5,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.02964,
    Rendimiento: 6.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "V-200 CDI 2,1 Lts. Station Wagon (8 asientos) 4P. T/A Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "V-220 CDI 2,1 Lts. DOHC Station Wagon 4P. (7 asientos) T/A Motor Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "V-220 CDI 2.0 Lts. Station Wagon (8 Asientos) T/A Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "V-220d CDI 2,1 Lts. Station Wagon 3P. 6 Asientos T/A Diesel",
    Nox: 0.1737,
    Rendimiento: 11.5
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito 109 CDI Tourer 1,6 Lts. Station Wagon 8 asientos 4P. T/M Diesel",
    Nox: 0.20233,
    Rendimiento: 12.6
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito 111 CDI Tourer 1,6 Lts. 8 Asientos Station Wagon 4P. T/M",
    Nox: 0.2416,
    Rendimiento: 12.1
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito 113 CDI 2,1 Lts. DOHC Station Wagon (8 asientos) 4P. T/M Motor Diesel",
    Nox: 0.2371,
    Rendimiento: 10.2
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito 114 CDI 2,1 Lts. Station Wagon 10 Asientos 5P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 12.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito 114 CDI Tourer 2,1 Lts. Station Wagon 8 asientos 5P. T/M Diesel",
    Nox: 0.16347,
    Rendimiento: 12.7
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito Tourer 114 CDI 10 Asientos 2,1 Lts. Station Wagon 4/5P. T/A Diesel",
    Nox: 0.2246,
    Rendimiento: 11.4
  },
  {
    Marca: "M. Benz",
    Tipo: "Station Wagon",
    Modelo: "Vito Tourer 114 CDI 8 Asientos 2,1 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.2246,
    Rendimiento: 11.4
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Chasis Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Chasis Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Pick Up Cabina Doble 4P. T/M 4x2 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Pick Up Cabina Doble 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Pick Up Cabina Simple 2P. T/M 4x2 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "2,2 Lts. DOHC CRDe Powered By m Hawk Pick Up Cabina Simple 2P. T/M 4x4 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Chaleco E5 Limited 2,2 Lts. DOHC CRDe Powered By m Hawk Pick Up Cabina Doble 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Genio 2,2 Lts. CRDe DOHC Pick Up Cabina Simple 2P. 2WD Powered by m Hawk T/M Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.8
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Genio 2,2 Lts. CRDe DOHC Pick Up Cabina Simple 2P. 4WD Powered by m Hawk T/M Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.8
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Genio 2,2 Lts. CRDe DOHC Pick Up Doble Cabina 4P. 2WD Powered by m Hawk T/M Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.8
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Genio 2,2 Lts. CRDe DOHC Pick Up Doble Cabina 4P. 4WD Powered by m Hawk T/M Motor Diesel",
    Nox: 0.1775,
    Rendimiento: 8.8
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Pik Up 2,2 Lts. CRDe Camioneta Cabina Simple 2P. 2WD T/M Diesel",
    Nox: 0.1703,
    Rendimiento: 9.4
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Pik Up 2,2 Lts. CRDe Camioneta Cabina Simple 2P. 4WD T/M Diesel",
    Nox: 0.1703,
    Rendimiento: 9.4
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Pik Up 2,2 Lts. CRDe Camioneta Doble Cabina 4P. 2WD T/M Diesel",
    Nox: 0.1703,
    Rendimiento: 9.4
  },
  {
    Marca: "Mahindra",
    Tipo: "Camioneta",
    Modelo: "Pik Up 2,2 Lts. CRDe Camioneta Doble Cabina 4P. 4WD T/M Diesel",
    Nox: 0.1703,
    Rendimiento: 9.4
  },
  {
    Marca: "Mahindra",
    Tipo: "Hatch Back",
    Modelo: "KUV 100 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01585,
    Rendimiento: 12.9
  },
  {
    Marca: "Mahindra",
    Tipo: "Jeep",
    Modelo: "Quanto C8 2,2 Lts. DOHC Tipo Jeep 5P. T/M 4x2 Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 10.9
  },
  {
    Marca: "Mahindra",
    Tipo: "Jeep",
    Modelo: "Quanto C8 2,2 Lts. DOHC Tipo Jeep 5P. T/M 4x4 Motor Diesel",
    Nox: 0.1295,
    Rendimiento: 10.9
  },
  {
    Marca: "Mahindra",
    Tipo: "Jeep",
    Modelo: "Scorpio 2,2 Lts. DOHC Powered By M Hawk Tipo Jeep 5P. T/M 4x2 Motor Diesel",
    Nox: 0.1984,
    Rendimiento: 8.9
  },
  {
    Marca: "Mahindra",
    Tipo: "Jeep",
    Modelo: "Scorpio 2,2 Lts. DOHC Powered By M Hawk Tipo Jeep 5P. T/M 4x4 Motor Diesel",
    Nox: 0.1984,
    Rendimiento: 8.9
  },
  {
    Marca: "Mahindra",
    Tipo: "Station Wagon",
    Modelo: "XUV 500 2,2 Lts. DOHC Station Wagon  5P. 4x2 T/M Motor Diesel",
    Nox: 0.132,
    Rendimiento: 12.7
  },
  {
    Marca: "Mahindra",
    Tipo: "Station Wagon",
    Modelo: "XUV 500 2,2 Lts. DOHC Station Wagon 5P. AWD T/M Motor Diesel",
    Nox: 0.132,
    Rendimiento: 12.3
  },
  {
    Marca: "Mahindra",
    Tipo: "Station Wagon",
    Modelo: "XUV 500 2,2 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.02107,
    Rendimiento: 6.5
  },
  {
    Marca: "Mahindra",
    Tipo: "Station Wagon",
    Modelo: "XUV 500 2,2 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02107,
    Rendimiento: 6.5
  },
  {
    Marca: "Mahindra",
    Tipo: "Station Wagon",
    Modelo: "XUV300 1.2T MPI 5P 6MT",
    Nox: 0.023,
    Rendimiento: 12.4
  },
  {
    Marca: "Maserati",
    Tipo: "Cabriolet",
    Modelo: "Grancabrio 4,7 Lts. V8 DOHC Coupe (Convertible) 2P. T/A Motor Otto",
    Nox: 0.022,
    Rendimiento: 4.5
  },
  {
    Marca: "Maserati",
    Tipo: "Cabriolet",
    Modelo: "Grancabrio Sport 4,7 Lts. V8 DOHC Coupe (Convertible) 2P. T/A Motor Otto",
    Nox: 0.022,
    Rendimiento: 4.5
  },
  {
    Marca: "Maserati",
    Tipo: "Coupe",
    Modelo: "Granturismo MC Stradale 4,7 Lts. DOHC 32v Coupe 2P. T/M Secuencial Motor Otto",
    Nox: 0.016,
    Rendimiento: 4.4
  },
  {
    Marca: "Maserati",
    Tipo: "Coupe",
    Modelo: "Granturismo S 4,7 Lts. DOHC 32v Coupe 2P. T/M Secuencial Motor Otto",
    Nox: 0.016,
    Rendimiento: 4.2
  },
  {
    Marca: "Maserati",
    Tipo: "Coupe",
    Modelo: "Granturismo S Automatico 4,7 Lts. V8 DOHC 32v Coupe 2P. T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 4.3
  },
  {
    Marca: "Maserati",
    Tipo: "Coupe",
    Modelo: "Granturismo Sport 4,7 Lts. DOHC 32v Coupe 2P. T/M Secuencial Motor Otto",
    Nox: 0.016,
    Rendimiento: 4.4
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli 3,0 Lts. V6 330 CV DOHC Sedan 4P. T/A 4x2 Motor Otto",
    Nox: 0.01738,
    Rendimiento: 7.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli 3,0 Lts. V6 330 CV DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.01738,
    Rendimiento: 7.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli 3,0 Lts. V6 349 CV Sedan 4P. T/A 4x2 Otto",
    Nox: 0.02514,
    Rendimiento: 7.7
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli GT",
    Nox: 0.02091,
    Rendimiento: 10.1
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli S 3,0 Lts. 430 CV Sedan 4P. T/A 4x2 Otto",
    Nox: 0.0221,
    Rendimiento: 7.2
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli S 3,0 Lts. DOHC Sedan 4P. T/A 4x2 Motor Diesel",
    Nox: 0.13087,
    Rendimiento: 12.7
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli S 3,0 Lts. DOHC Sedan 4P. T/A AWD 4x4 Motor Otto",
    Nox: 0.01738,
    Rendimiento: 7.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Ghibli S 3,0 Lts. DOHC Sedan 4P. T/A RWD 4x2 Motor Otto",
    Nox: 0.01738,
    Rendimiento: 7.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Quattroporte 3,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.02164,
    Rendimiento: 5.7
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Quattroporte GTS Automatico 4,7 Lts. V8 DOHC 32v Sedan 4P. T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 4.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Quattroporte S 3,0 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.0254,
    Rendimiento: 5.5
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Quattroporte S Automatico 4,7 Lts. V8 DOHC 32v Sedan 4P. T/A Motor Otto",
    Nox: 0.015,
    Rendimiento: 4.3
  },
  {
    Marca: "Maserati",
    Tipo: "Sedan",
    Modelo: "Quattroporte S Q4 3,0 Lts. DOHC Sedan 4P. T/A 4x4 Motor Otto",
    Nox: 0.0254,
    Rendimiento: 5.5
  },
  {
    Marca: "Maserati",
    Tipo: "Station Wagon",
    Modelo: "Levante 3,0 Lts. Station Wagon 4P. 4x4 T/A Diesel",
    Nox: 0.05134,
    Rendimiento: 12.2
  },
  {
    Marca: "Maserati",
    Tipo: "Station Wagon",
    Modelo: "Levante 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02437,
    Rendimiento: 6.7
  },
  {
    Marca: "Maserati",
    Tipo: "Station Wagon",
    Modelo: "Levante S 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01503,
    Rendimiento: 6.6
  },
  {
    Marca: "Maserati",
    Tipo: "Station Wagon",
    Modelo: "Levante Trofeo",
    Nox: 0.02637,
    Rendimiento: 5.3
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "C35 Camioneta",
    Nox: 0.2148,
    Rendimiento: 11.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "C35L Camioneta",
    Nox: 0.2148,
    Rendimiento: 11.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "EV80 Chasis Cabina",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "New V80 2,5 Lts. Pick Up Cabina Simple 2P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "New V80 2,5 Lts. Pick Up Chasis Cabina 2P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Cabina Simple 2P. T/M 4x2 Diesel",
    Nox: 0.1729,
    Rendimiento: 8.5
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Cabina Simple 2P. T/M 4x4 Diesel",
    Nox: 0.1729,
    Rendimiento: 8.5
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Diesel",
    Nox: 0.1432,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.1432,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.1729,
    Rendimiento: 8.5
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2,8 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.1729,
    Rendimiento: 8.5
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Cabina Simple 2P 4x2",
    Nox: 0.187,
    Rendimiento: 10
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Cabina Simple 2P 4x4",
    Nox: 0.187,
    Rendimiento: 10
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Doble Cabina 4P 4x2",
    Nox: 0.187,
    Rendimiento: 10
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Doble Cabina 4P 4x2",
    Nox: 0.2356,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Doble Cabina 4P 4x4",
    Nox: 0.187,
    Rendimiento: 10
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "T60 2.0 Lts., Camioneta Doble Cabina 4P 4x4",
    Nox: 0.2356,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "V80 2,5 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Camioneta",
    Modelo: "V80 2,5 Lts. Pick Up 2P. T/M Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon Cerrado",
    Modelo: "EV80 Cargo",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon Cerrado",
    Modelo: "G10 Cargo Van 1,9 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon Cerrado",
    Modelo: "New V80 Cargo 2,5 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon cerrado",
    Modelo: "V80 Cargo L 2,5 Lts. DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV30 (3800-0002000)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV30 L (3810-2002002)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV30 L Plus (3810-31020)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV30 Plus (3800-1102001)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV90 L2H2",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "EV90 L3H2",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "G10 2.0 CRDI Furgon AT",
    Nox: 0.087,
    Rendimiento: 9.4
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "V90 cargo L2H2",
    Nox: 0.0969,
    Rendimiento: 9.2
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "V90 cargo L3H3",
    Nox: 0.0969,
    Rendimiento: 9.2
  },
  {
    Marca: "Maxus",
    Tipo: "Furgon",
    Modelo: "V90 cargo L3H3 RWR",
    Nox: 0.0969,
    Rendimiento: 9.2
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "EV80 Minibus (16 Pasajeros)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "EV80 Minibus (8 Pasajeros)",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "G10 1,9 Lts. Minibus 4P. 10 pasajeros T/M Diesel",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "G10 2.0 CRDI 7 Pasajeros AT",
    Nox: 0.087,
    Rendimiento: 9.4
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "G10 2.0 CRDI, 10 pasajeros AT",
    Nox: 0.087,
    Rendimiento: 9.4
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "G10 Escolar 1,9 Lts. Minibus 19 asientos 4P. T/M Diesel",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "G10 Minibus",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "New V80 2,5 Lts. Minibus 13 Asientos 5P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "New V80 2,5 Lts. Minibus 16 Asientos 5P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "New V80 Escolar 2,5 Lts. Bus 29 Asientos 3P. T/M Diesel",
    Nox: 0.2533,
    Rendimiento: 8.4
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC (5 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC (6 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC (7 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC Minibus (13 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC Minibus (16 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 2,5 Lts. DOHC Minibus (9 asientos) 6P. T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 Escolar 2,5 Lts. DOHC Minibus 6P. (29 asientos) T/M Motor Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Minibus",
    Modelo: "V80 Escolar 2,5 Lts. Minibus 5P. (29 asientos) T/M Diesel",
    Nox: 0.1399,
    Rendimiento: 8.1
  },
  {
    Marca: "Maxus",
    Tipo: "Station Wagon",
    Modelo: "EG50 AT EV",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Station Wagon",
    Modelo: "EG50 AT EV 5 Pasajeros",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Maxus",
    Tipo: "Station Wagon",
    Modelo: "G10 2.0 CRDI 7 Pasajeros AT",
    Nox: 0.087,
    Rendimiento: 9.4
  },
  {
    Marca: "Maxus",
    Tipo: "Station Wagon",
    Modelo: "G107 1,9 Lts. Station Wagon 5P. 7 pasajeros T/M Diesel",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Maxus",
    Tipo: "Station Wagon",
    Modelo: "G109 1,9 Lts. Station Wagon 4P. 9 pasajeros T/M Diesel",
    Nox: 0.1765,
    Rendimiento: 8.9
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "Mazda MX-5 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.00295,
    Rendimiento: 9.6
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "MX-5 2,0 Lts. Cabriolet (Techo duro) 2P. T/A Otto",
    Nox: 0.0053,
    Rendimiento: 9.3
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "MX-5 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0053,
    Rendimiento: 9.3
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "MX-5 2,0 Lts. Cabriolet 2P. T/M Otto",
    Nox: 0.0072,
    Rendimiento: 10.9
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "MX-5 Miata",
    Nox: 0.01888,
    Rendimiento: 9.1
  },
  {
    Marca: "Mazda",
    Tipo: "Cabriolet",
    Modelo: "MX5 2,0 Lts. Cabriolet 2P. T/M Otto",
    Nox: 0.00695,
    Rendimiento: 11.1
  },
  {
    Marca: "Mazda",
    Tipo: "Camioneta",
    Modelo: "BT-50 2,2 Lts. DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2457,
    Rendimiento: 9.5
  },
  {
    Marca: "Mazda",
    Tipo: "Camioneta",
    Modelo: "BT-50 2,2 Lts. DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.2457,
    Rendimiento: 9.5
  },
  {
    Marca: "Mazda",
    Tipo: "Camioneta",
    Modelo: "BT-50 3,2 Lts. DOHC Pick Up Doble Cabina 4P. 4x4 T/A Motor Diesel",
    Nox: 0.1765,
    Rendimiento: 7.6
  },
  {
    Marca: "Mazda",
    Tipo: "Coupe",
    Modelo: "MX-5 2,0 Lts. DOHC Coupe Deportivo 2P. T/M Motor Otto",
    Nox: 0.00437,
    Rendimiento: 8.2
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "3 Sport 2,0 Lts. Hatch Back 5P. T/A",
    Nox: 0.00347,
    Rendimiento: 11.6
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda 3 2,5 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0064,
    Rendimiento: 10
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda 3 2.0 Hatch Back T/A",
    Nox: 0.00255,
    Rendimiento: 10.5
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda 3 2.0 Hatch Back T/M",
    Nox: 0.0043,
    Rendimiento: 11.1
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda 3 2.5 Hatch Back T/A",
    Nox: 0.0019,
    Rendimiento: 9.5
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda 3 2.5 Hatch Back T/M",
    Nox: 0.00245,
    Rendimiento: 10.4
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda2 1,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0124,
    Rendimiento: 11
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda2 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00925,
    Rendimiento: 11.7
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda2 Sport 1,5 Lts. Hatch Back 5P. Otto",
    Nox: 0.0021,
    Rendimiento: 12.9
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda3 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00347,
    Rendimiento: 11.6
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda3 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0029,
    Rendimiento: 11.4
  },
  {
    Marca: "Mazda",
    Tipo: "Hatch Back",
    Modelo: "Mazda3 2,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00835,
    Rendimiento: 10.4
  },
  {
    Marca: "Mazda",
    Tipo: "Hatchback",
    Modelo: "Mazda2 Sport 1,5 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.00535,
    Rendimiento: 13.7
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 3 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0064,
    Rendimiento: 10
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 3 2.0 Sedan T/A",
    Nox: 0.00255,
    Rendimiento: 10.5
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 3 2.0 Sedan T/M",
    Nox: 0.0043,
    Rendimiento: 11.1
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 3 2.5 Sedan T/A",
    Nox: 0.0019,
    Rendimiento: 9.5
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 10.9
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,0 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0045,
    Rendimiento: 11.4
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,2 Lts. DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.0825,
    Rendimiento: 12.1
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,5 Lts. Sedan 4P. T/A",
    Nox: 0.0055,
    Rendimiento: 10.4
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.003,
    Rendimiento: 10.6
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 2,5T Lts. Sedan 4P. T/A Otto",
    Nox: 0.0031,
    Rendimiento: 8.7
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda 6 GT 2,5 Lts. Sedan 4P. T/A",
    Nox: 0.0055,
    Rendimiento: 10.4
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda2 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0017,
    Rendimiento: 13
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda2 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0065,
    Rendimiento: 13.3
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda3 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01492,
    Rendimiento: 10.9
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda3 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0043,
    Rendimiento: 12.2
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda3 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00347,
    Rendimiento: 11.6
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda3 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0029,
    Rendimiento: 11.4
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda6 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0027,
    Rendimiento: 11.2
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda6 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0026,
    Rendimiento: 11.1
  },
  {
    Marca: "Mazda",
    Tipo: "Sedan",
    Modelo: "Mazda6 2,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0055,
    Rendimiento: 10.4
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-3 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.004,
    Rendimiento: 11.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-3 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00472,
    Rendimiento: 12.4
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-3 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00877,
    Rendimiento: 12.1
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-3 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0048,
    Rendimiento: 12.1
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5  I-Stop 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.00787,
    Rendimiento: 12.2
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5  I-Stop 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00373,
    Rendimiento: 12.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5 i-Stop 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00403,
    Rendimiento: 12.5
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5 i-Stop 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00373,
    Rendimiento: 12.5
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5 I-Stop 2,2 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.06151,
    Rendimiento: 14.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX-5 I-Stop 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00557,
    Rendimiento: 10.6
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX3 1,8 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.06065,
    Rendimiento: 17.5
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX30 2,0 TA 2WD",
    Nox: 0.0041,
    Rendimiento: 10.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX30 2,0 TA 4WD",
    Nox: 0.0041,
    Rendimiento: 10.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX30 2,0 TM 2WD",
    Nox: 0.00605,
    Rendimiento: 11.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX30 2,5 TA 4WD",
    Nox: 0.00792,
    Rendimiento: 11.2
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0025,
    Rendimiento: 10.6
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00511,
    Rendimiento: 12
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0025,
    Rendimiento: 10.6
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00405,
    Rendimiento: 10.2
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0089,
    Rendimiento: 11
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.00735,
    Rendimiento: 11.5
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00573,
    Rendimiento: 12.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00735,
    Rendimiento: 11.5
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.05024,
    Rendimiento: 14.3
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.06807,
    Rendimiento: 15
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00669,
    Rendimiento: 10.8
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00841,
    Rendimiento: 10.7
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX5 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00981,
    Rendimiento: 10.2
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX9 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01175,
    Rendimiento: 7.8
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX9 2.5 TA 2WD",
    Nox: 0.01317,
    Rendimiento: 8
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "CX9 2.5 TA 4WD",
    Nox: 0.01317,
    Rendimiento: 8
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "Mazda 6 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.05819,
    Rendimiento: 14.7
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "Mazda CX-9 3,7 DOHC Wagon 5P. T/A Motor Otto",
    Nox: 0.0076,
    Rendimiento: 6.6
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "Mazda5 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0034,
    Rendimiento: 9.1
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "Mazda5 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0025,
    Rendimiento: 8.8
  },
  {
    Marca: "Mazda",
    Tipo: "Station Wagon",
    Modelo: "Mazda6 2,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 10.4
  },
  {
    Marca: "McLaren",
    Tipo: "Cabriolet",
    Modelo: "MP4-12C Spyder 3,8 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.01703,
    Rendimiento: 5.8
  },
  {
    Marca: "McLaren",
    Tipo: "Convertible",
    Modelo: "570S Spider 3,8 Lts. Convertible 2P. T/A Otto",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Convertible",
    Modelo: "720S Spider",
    Nox: 0.02358,
    Rendimiento: 6.3
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "570S Coupe 3,8 T/A",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "540C 3,8 Lts. Coupe 2P. T/A Otto",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "570 S 3,8 Lts. Coupe T/A Otto",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "570GT 3,8 Coupe 2P. T/A Otto",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "570S 3,8 Lts. Coupe 2P. T/A",
    Nox: 0.02325,
    Rendimiento: 6.1
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "650S 3,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01703,
    Rendimiento: 5.8
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "650S Spyder 3,8 Lts. DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.01703,
    Rendimiento: 5.8
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "675LT 3,8 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01703,
    Rendimiento: 5.6
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "720S 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.02358,
    Rendimiento: 6.3
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "765LT Coupe",
    Nox: 0.0275,
    Rendimiento: 5.2
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "McLaren GT",
    Nox: 0.01125,
    Rendimiento: 6.9
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "MP4-12C Spyder 3,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01703,
    Rendimiento: 5.8
  },
  {
    Marca: "McLaren",
    Tipo: "Coupe",
    Modelo: "Senna",
    Nox: 0.01678,
    Rendimiento: 6.2
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG3 1,5 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.00845,
    Rendimiento: 10.8
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG3 1,5 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.006,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG3 Cross 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0114,
    Rendimiento: 11.5
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG3 VTI 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0114,
    Rendimiento: 11.5
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG5 1,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01205,
    Rendimiento: 10
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG5 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0181,
    Rendimiento: 10.3
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG6 DVVT 1,8 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01105,
    Rendimiento: 8.7
  },
  {
    Marca: "MG",
    Tipo: "Hatch Back",
    Modelo: "MG6 DVVT 1,8 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00895,
    Rendimiento: 8.7
  },
  {
    Marca: "MG",
    Tipo: "Hatchback",
    Modelo: "MG 5 Turbo 1,5 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.0286,
    Rendimiento: 10.4
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG 350 1,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01205,
    Rendimiento: 10
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG 360 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0079,
    Rendimiento: 10.5
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG 360 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01055,
    Rendimiento: 11.7
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,4 Lts. Turbo Sedan 4P. T/A 4x2",
    Nox: 0.0097,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,4 Lts. Turbo Sedan 4P. T/A 4x2 Otto",
    Nox: 0.0103,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,4 Lts. Turbo Sedan 4P. T/M 4x2",
    Nox: 0.0142,
    Rendimiento: 10.9
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,4 Lts. Turbo Sedan 4P. T/M 4x2 Otto",
    Nox: 0.0233,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/A 4x2",
    Nox: 0.01225,
    Rendimiento: 10.5
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/A 4x2 Otto",
    Nox: 0.00865,
    Rendimiento: 10.4
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/A 4x2 Otto",
    Nox: 0.0113,
    Rendimiento: 10.4
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/M 4x2",
    Nox: 0.00765,
    Rendimiento: 11.7
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/M 4x2 Otto",
    Nox: 0.00915,
    Rendimiento: 11.4
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1,5 Lts. VCT Sedan 4P. T/M 4x2 Otto",
    Nox: 0.0107,
    Rendimiento: 11
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1.5L CVT",
    Nox: 0.00378,
    Rendimiento: 10.5
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1.5L MT",
    Nox: 0.01695,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG GT 1.5T DCT",
    Nox: 0.00618,
    Rendimiento: 11.8
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG350 S/C 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0181,
    Rendimiento: 10.3
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG5 AT",
    Nox: 0.0341,
    Rendimiento: 10.3
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG5 MT",
    Nox: 0.0049,
    Rendimiento: 10.9
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG6 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0207,
    Rendimiento: 11.2
  },
  {
    Marca: "MG",
    Tipo: "Sedan",
    Modelo: "MG6 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0105,
    Rendimiento: 11.3
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "HS 1,5T MT",
    Nox: 0.01143,
    Rendimiento: 10.5
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "HS 1.5T DCT",
    Nox: 0.01641,
    Rendimiento: 10.9
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "HS 2.0T DCT",
    Nox: 0.00761,
    Rendimiento: 7.6
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG GS Turbo 1,5 Lts. Station Wagon 5P. T/A DCT 4x4 Otto",
    Nox: 0.0161,
    Rendimiento: 10
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG GS Turbo 1,5 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0172,
    Rendimiento: 10.6
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG GS Turbo 2,0 Lts. Station Wagon 5P. T/A DCT 4x4 Otto",
    Nox: 0.01831,
    Rendimiento: 8.9
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG RX8",
    Nox: 0.01681,
    Rendimiento: 7
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG SG Turbo 1,5 Lts. Station Wagon 5P. T/A DCT 4x2 Otto",
    Nox: 0.0161,
    Rendimiento: 10
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG ZS 1,5 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.0145,
    Rendimiento: 11.3
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG ZS 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.00515,
    Rendimiento: 11
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "MG ZS EV",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "RX5 1,5 Lts. Station Wagon 4P. T/A Otto",
    Nox: 0.02285,
    Rendimiento: 9.7
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "RX5 1,5 Lts. Station Wagon 5 Asientos 4P. T/M Otto",
    Nox: 0.01285,
    Rendimiento: 10.6
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "RX5 2,0 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.0123,
    Rendimiento: 7.8
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "ZX 1.3T AT",
    Nox: 0.01399,
    Rendimiento: 10.4
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "ZX 1.5L CVT",
    Nox: 0.00605,
    Rendimiento: 11.3
  },
  {
    Marca: "MG",
    Tipo: "Station Wagon",
    Modelo: "ZX 1.5L MT",
    Nox: 0.00555,
    Rendimiento: 11.1
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper 1,6 Lts. DOHC Cabrio 2P. T/A Motor Otto",
    Nox: 0.0152,
    Rendimiento: 11
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper 1,6 Lts. DOHC Cabrio 2P. T/M Motor Otto",
    Nox: 0.0153,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper Cabrio MT",
    Nox: 0.01026,
    Rendimiento: 13.9
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper S 1,6 Lts. DOHC Cabrio 2P. T/A Motor Otto",
    Nox: 0.0108,
    Rendimiento: 11.2
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper S 1,6 Lts. DOHC Cabrio 2P. T/M Motor Otto",
    Nox: 0.0257,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper S 1,6 Lts. DOHC Roadster (Cabriolet) 2P. T/M Motor Otto",
    Nox: 0.0257,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "Cooper S Roadster 1,6 Lts. 16v DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0108,
    Rendimiento: 11.2
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "F57 Cooper 1,5 Lts. Cabriolet 2P. T/M Otto",
    Nox: 0.0172,
    Rendimiento: 16.9
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "F57 Cooper Cabrio 1,5 Lts. Convertible 2P. T/A",
    Nox: 0.02995,
    Rendimiento: 16.4
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "F57 Cooper S Cabrio 2,0 Lts. Convertible 2P. T/A",
    Nox: 0.0188,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "F57 John Cooper Works Cabrio 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.015,
    Rendimiento: 12.4
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "F57 John Cooper Works Cabrio 2,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0292,
    Rendimiento: 11
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works 1,6 Lts. DOHC Cabrio 2P. T/M Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Cabrio",
    Nox: 0.01768,
    Rendimiento: 12.3
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Convertible 1,6 Lts. DOHC Convertible 3P. T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 9.9
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Convertible 1,6 Lts. DOHC Convertible 3P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Roadster 1,6 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 9.9
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Roadster 1,6 Lts. DOHC Cabriolet 2P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "Mini",
    Tipo: "Cabriolet",
    Modelo: "John Cooper Works Roadster 1,6 Lts. DOHC Convertible 2P. T/M Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Camioneta",
    Modelo: "Cooper F56 1,5 Lt. Camioneta 2P. T/A",
    Nox: 0.0106,
    Rendimiento: 16.1
  },
  {
    Marca: "Mini",
    Tipo: "Camioneta",
    Modelo: "Cooper F56 1,5 Lt. Camioneta 2P. T/A",
    Nox: 0.0106,
    Rendimiento: 16.1
  },
  {
    Marca: "Mini",
    Tipo: "Camioneta",
    Modelo: "Cooper F56 1,5 Lts. Camioneta 2P. T/A Otto",
    Nox: 0.0144,
    Rendimiento: 16.4
  },
  {
    Marca: "Mini",
    Tipo: "Convertible",
    Modelo: "Cooper Cabrio",
    Nox: 0.01284,
    Rendimiento: 14.1
  },
  {
    Marca: "Mini",
    Tipo: "Convertible",
    Modelo: "Cooper S Cabrio",
    Nox: 0.0063,
    Rendimiento: 13.7
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Cooper D 2,0 Lts. DOHC Coupe 3P. T/A 4x2 Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13.9
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Cooper S (SX31) 1,6 Lts. DOHC Coupe 3P. 2WD T/M Motor Otto",
    Nox: 0.0246,
    Rendimiento: 13.6
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Cooper S (SX31) 1,6 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.0139,
    Rendimiento: 9.2
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "F56 JCW GP",
    Nox: 0.0106,
    Rendimiento: 10.2
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "John Cooper Works (SX51) 1,6 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "John Cooper Works Coupe 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 9.9
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "John Cooper Works Coupe 1,6 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman 1,6 Lts. DOHC Coupe 3P. 4x4 T/A Motor Otto",
    Nox: 0.0097,
    Rendimiento: 9.3
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman 1,6 Lts. DOHC Coupe 3P. 4x4 T/M Motor Otto",
    Nox: 0.0185,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper 1,6 Lts. DOHC Coupe 2P. 2WD T/M Motor Otto",
    Nox: 0.0097,
    Rendimiento: 12
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0311,
    Rendimiento: 10.1
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper D 2.0 Lts. Coupe 3P. T/A 4x2 Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13.9
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper D ALL4 2,0 Lts. Coupe 3P. T/A 4x4 Motor Diesle",
    Nox: 0.1364,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper S 1,6 Lts. ALL 4 DOHC Coupe 2P. 4x4 T/M Motor Otto",
    Nox: 0.0246,
    Rendimiento: 12.1
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper S 1,6 Lts. DOHC Coupe 2P. 4x2 T/M Motor Otto",
    Nox: 0.0246,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper S All 4 1,6 Lts. DOHC Coupe 2P 4x2 T/A Motor Otto",
    Nox: 0.0139,
    Rendimiento: 9.2
  },
  {
    Marca: "Mini",
    Tipo: "Coupe",
    Modelo: "Paceman Cooper S All 4 1,6 Lts. DOHC Coupe 2P 4x4 T/A Motor Otto",
    Nox: 0.0139,
    Rendimiento: 9.2
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,5 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.02995,
    Rendimiento: 16.4
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,5 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0172,
    Rendimiento: 16.9
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.02995,
    Rendimiento: 16.4
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0172,
    Rendimiento: 16.9
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,6 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0152,
    Rendimiento: 11
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0153,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 1,5 Lts. DOHC Hatch Back 3P. T/A Motor Diesel",
    Nox: 0.1557,
    Rendimiento: 17.1
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 1,5 Lts. DOHC Hatch Back 3P. T/M Motor Diesel",
    Nox: 0.1585,
    Rendimiento: 17.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 1,5 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.1557,
    Rendimiento: 17.1
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1585,
    Rendimiento: 17.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 1,6 Lts. DOHC Hatch Back 3P. 4x2 T/M Motor Diesel",
    Nox: 0.15363,
    Rendimiento: 23.8
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper D 2,0 Lts. DOHC Hatch Back 3P. T/A Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 14.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 1,6 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0108,
    Rendimiento: 11.2
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0257,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 2,0 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 2,0 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0163,
    Rendimiento: 12.8
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0188,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0163,
    Rendimiento: 12.8
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "Cooper S Clubman 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0257,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "F56 John Cooper Works 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0292,
    Rendimiento: 11
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "F56 John Cooper Works 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.015,
    Rendimiento: 12.4
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "F56 John Cooper Works 2,0 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.02645,
    Rendimiento: 10.3
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "John Cooper Works 1,6 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 9.9
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "John Cooper Works 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "John Cooper Works 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "Mini",
    Tipo: "Hatch Back",
    Modelo: "John Cooper Works GP II 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 10.5
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper 3P",
    Nox: 0.01284,
    Rendimiento: 14.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper 3P MT",
    Nox: 0.01026,
    Rendimiento: 14.5
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper 5P",
    Nox: 0.01284,
    Rendimiento: 14.5
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper 5P. MT",
    Nox: 0.01026,
    Rendimiento: 14.5
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper S 3P",
    Nox: 0.0063,
    Rendimiento: 13.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper S 5P",
    Nox: 0.0063,
    Rendimiento: 13.7
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "Cooper SE",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Mini",
    Tipo: "Hatchback",
    Modelo: "John Cooper Works",
    Nox: 0.01768,
    Rendimiento: 12.8
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Clubman Cooper S",
    Nox: 0.00867,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Clubman Cooper S ALL4",
    Nox: 0.00867,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Clubman JCW ALL4",
    Nox: 0.00915,
    Rendimiento: 10.4
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper Clubman 1,6 Lts. 16v DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0152,
    Rendimiento: 11
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper Clubman 1,6 Lts. 16v DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0153,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper D Countryman 1,6 Lts. All 4 DOHC Station Wagon 5P. 4WD T/M Motor Diesel",
    Nox: 0.15363,
    Rendimiento: 18.9
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper D Countryman 1,6 Lts. DOHC Station Wagon 5P. 2WD T/M Motor Diesel",
    Nox: 0.15363,
    Rendimiento: 18.9
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper D Countryman 2,0 Lts. All 4 DOHC Station Wagon 5P. 4WD T/A Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper D Countryman 2,0 Lts. DOHC Station Wagon 5P. 2WD T/A Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper S Clubman 1,6 Lts. 16v DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0108,
    Rendimiento: 11.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper SD Countryman 2,0 Lts. All 4 DOHC Station Wagon 5P. 4WD T/A Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper SD Countryman 2,0 Lts. All 4 DOHC Station Wagon 5P. 4WD T/M Motor Diesel",
    Nox: 0.14577,
    Rendimiento: 18.9
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper SD Countryman 2,0 Lts. DOHC Station Wagon 5P. 2WD T/A Motor Diesel",
    Nox: 0.1364,
    Rendimiento: 13
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Cooper SD Countryman 2,0 Lts. DOHC Station Wagon 5P. 2WD T/M Motor Diesel",
    Nox: 0.14577,
    Rendimiento: 18.9
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman (ZB31) 1,6 Lts. DOHC Station Wagon 5P. 2WD T/M Motor Otto",
    Nox: 0.0097,
    Rendimiento: 12.1
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper",
    Nox: 0.00832,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0311,
    Rendimiento: 10.1
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S",
    Nox: 0.00895,
    Rendimiento: 12.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S (ZC51) 1,6 Lts. DOHC Station Wagon 5P. 2WD T/A Motor Otto",
    Nox: 0.0139,
    Rendimiento: 10.5
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S (ZC51) 1,6 Lts. DOHC Station Wagon 5P. 4WD T/A Motor Otto",
    Nox: 0.0139,
    Rendimiento: 9.7
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S 1,6 Lts. DOHC Station Wagon 5P. 2WD T/M Motor Otto",
    Nox: 0.0246,
    Rendimiento: 13.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S 1,6 Lts. DOHC Station Wagon 5P. AWD T/M Motor Otto",
    Nox: 0.0246,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "Countryman Cooper S ALL4",
    Nox: 0.00895,
    Rendimiento: 11.5
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F54 Clubman Cooper 1,5 Lts. Station Wagon 6P. T/A Otto",
    Nox: 0.01605,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F54 Clubman Cooper 1,5 Lts. Station Wagon 6P. T/M Otto",
    Nox: 0.01425,
    Rendimiento: 13.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F54 Clubman Cooper S 2,0 Lts. Station Wagon 6P. T/A Otto",
    Nox: 0.0177,
    Rendimiento: 12.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F54 Clubman Cooper S 2,0 Lts. Station Wagon 6P. T/M Otto",
    Nox: 0.0335,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0127,
    Rendimiento: 12.5
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper 1,5 Lts. Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00595,
    Rendimiento: 12.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper All4 1,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0059,
    Rendimiento: 12.8
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper D 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.005,
    Rendimiento: 17.7
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper S 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0105,
    Rendimiento: 11.8
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman Cooper S All4 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0223,
    Rendimiento: 12
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman JCW ALL4",
    Nox: 0.0106,
    Rendimiento: 10.2
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "F60 Countryman JCW All4 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0223,
    Rendimiento: 12
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Clubman 1,6 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0275,
    Rendimiento: 9.9
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Clubman 1,6 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0094,
    Rendimiento: 11.4
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Countryman 1,6 Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.0097,
    Rendimiento: 9.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Countryman 1,6 Lts. DOHC Station Wagon 5P. 4x2 T/M Motor Otto",
    Nox: 0.0185,
    Rendimiento: 10.6
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Countryman 1,6 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0097,
    Rendimiento: 9.3
  },
  {
    Marca: "Mini",
    Tipo: "Station Wagon",
    Modelo: "John Cooper Works Countryman 1,6 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Otto",
    Nox: 0.0185,
    Rendimiento: 10.6
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L 200 Dakar HP 2,4 Lts. Pick Up 4P. 4x4 T/A Diesel",
    Nox: 0.1748,
    Rendimiento: 10.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L 200 Dakar HP 2,4 Lts. Pick Up 4P. 4x4 T/M Diesel",
    Nox: 0.1949,
    Rendimiento: 10.6
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar 2,4 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.2237,
    Rendimiento: 10.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar 2,4 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.1662,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar 2,4 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.1992,
    Rendimiento: 9.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar CRS 2,5 Lts. CRDi DOHC 16v Pick Up Cabina y Media 2P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar CRS 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/A 4x4 Motor Diesel",
    Nox: 0.2533,
    Rendimiento: 8.6
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar CRS 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar CRS HP 2,5 Lts. CRDi 16v DOHC Pick Up Doble Cabina 4P. 4x4 T/A Motor Diesel",
    Nox: 0.1891,
    Rendimiento: 8.8
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar CRS HP 2,5 Lts. CRDi 16v DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.1822,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Dakar HP 2,4 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.2122,
    Rendimiento: 10
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CR 2,4 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.1662,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CRL 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CRM 2,4 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.1662,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CRM 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CRT 2,4 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.1662,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CRT 2,5 Lts. CRDi DOHC 16v Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Katana CS 2,5 Lts. CRDi DOHC 16v Pick Up Cabina Simple 2P. T/M 4x4 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Work CR 2,4 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.1662,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Camioneta",
    Modelo: "L200 Work CR 2,5 Lts. CRDI 16V DOHC Camioneta Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.1694,
    Rendimiento: 9.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Electrico",
    Modelo: "IMIEV Hatch Back 5P. T/M Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Mitsubishi Fuso",
    Tipo: "Camioneta",
    Modelo: "Canter 413 3,0 Lts. Camioneta 2P. T/M Diesel",
    Nox: 0.1923,
    Rendimiento: 10
  },
  {
    Marca: "Mitsubishi Fuso",
    Tipo: "Camioneta",
    Modelo: "Canter 413 3,0 Lts. Chasis Cabina 2P. T/M Diesel",
    Nox: 0.1923,
    Rendimiento: 10
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatch Back",
    Modelo: "Mirage 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0116,
    Rendimiento: 17.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GL",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GL AB",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GLS",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GLS AB",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GLX",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Hatchback",
    Modelo: "Mirage 1,2 MT GLX AB",
    Nox: 0.00411,
    Rendimiento: 16.1
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Jeep",
    Modelo: "Montero 3,2 Lts. Tipo Jeep 3P. T/A 4x4 Diesel",
    Nox: 0.2341,
    Rendimiento: 8.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Sedan",
    Modelo: "Lancer 1,8 Lts. Sedan 4P. T/A",
    Nox: 0.00545,
    Rendimiento: 9.4
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Sedan",
    Modelo: "Lancer Evolution X 2,0 T/M",
    Nox: 0.0146,
    Rendimiento: 7.4
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Sedan",
    Modelo: "Lancer GT 2,4",
    Nox: 0.0128,
    Rendimiento: 9.2
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Sedan",
    Modelo: "Lancer R 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0102,
    Rendimiento: 10.4
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Sedan",
    Modelo: "Lancer R 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0105,
    Rendimiento: 12.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "ASX 1,6 GL 4x2 MT",
    Nox: 0.01268,
    Rendimiento: 12
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "ASX 1,6 GLS 4x2 MT",
    Nox: 0.01268,
    Rendimiento: 12
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "ASX 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01355,
    Rendimiento: 12
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "ASX 2,0 4x2 TA",
    Nox: 0.00841,
    Rendimiento: 9.2
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "ASX 2,0 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.0103,
    Rendimiento: 8.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Eclipse Cross RS 1,5 Lts. Station Wagon 4P. T/A 4x2 Otto",
    Nox: 0.01445,
    Rendimiento: 10.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Eclipse Cross RS 1,5 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.01445,
    Rendimiento: 10.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Eclipse Cross RX 1,5 Lts. Station Wagon 4P. T/A 4x2 Otto",
    Nox: 0.01445,
    Rendimiento: 10.5
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Eclipse Cross RX 1,5 Lts. Station Wagon 4P. T/M Otto",
    Nox: 0.0059,
    Rendimiento: 11.7
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero 3,2 Lts. CRDI DOHC Station Wagon 3P. 4x4 T/A Motor Diesel",
    Nox: 0.2086,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero 3,2 Lts. CRDI DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.2086,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 2,4 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.2395,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 2,4 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.2395,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 2,4 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.2025,
    Rendimiento: 10.6
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 2,4 Lts. Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.2025,
    Rendimiento: 10.6
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 3,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.02515,
    Rendimiento: 7.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02515,
    Rendimiento: 7.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport G2 2,5 Lts. DOHC 16v Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1894,
    Rendimiento: 8.8
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport G2 2,5 Lts. DOHC 16v Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1714,
    Rendimiento: 9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport G2 2,5 Lts. DOHC 16v Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1396,
    Rendimiento: 9.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Montero Sport G2 2,5 Lts. DOHC 16v Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.192,
    Rendimiento: 9.3
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Outlander 2,0 Lts. SOHC Station Wagon 5P. 4x2 T/A CVT Motor Otto",
    Nox: 0.00365,
    Rendimiento: 10.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Outlander 2,0 Lts. SOHC Station Wagon 5P. 4x2 T/M Motor Otto",
    Nox: 0.0054,
    Rendimiento: 11
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Outlander 2,4 Lts. SOHC Station Wagon 5P. 4x4 T/A Tipo CVT Motor Otto",
    Nox: 0.00535,
    Rendimiento: 9.7
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Outlander PHEV",
    Nox: 0.00223,
    Rendimiento: 90.9
  },
  {
    Marca: "Mitsubishi",
    Tipo: "Station Wagon",
    Modelo: "Outlander PHEV 2,0 Lts. DOHC Station Wagon 5P. T/A, Vehiculo Hibrido Electrico",
    Nox: 0.005,
    Rendimiento: 0
  },
  {
    Marca: "Morgan",
    Tipo: "Cabriolet",
    Modelo: "Aero 8 4,8 Lts. Cabriolet 2P. T/M",
    Nox: 0.013,
    Rendimiento: 5.5
  },
  {
    Marca: "Morgan",
    Tipo: "Cabriolet",
    Modelo: "Aero 8 4,8 Lts. Cabriolet 2P. T/M",
    Nox: 0.013,
    Rendimiento: 5.5
  },
  {
    Marca: "Morgan",
    Tipo: "Cabriolet",
    Modelo: "Roadster 3,7 Lts. Cabriolet 2P. T/M Otto",
    Nox: 0.013,
    Rendimiento: 6.5
  },
  {
    Marca: "Morgan",
    Tipo: "Coupe",
    Modelo: "Aero Coupe 4.8 Lts. T/M Otto",
    Nox: 0.0179,
    Rendimiento: 6.1
  },
  {
    Marca: "Nissan",
    Tipo: "Bus",
    Modelo: "URVAN (E26) 2.5 MT 4x2 MBE 24",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.3 HO AT 4x4",
    Nox: 0.2152,
    Rendimiento: 10.1
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.3 HO MT 4x4",
    Nox: 0.18033,
    Rendimiento: 12.8
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.3 MO MT 4x2",
    Nox: 0.20281,
    Rendimiento: 12.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.3 MO MT 4x2 RC",
    Nox: 0.20281,
    Rendimiento: 12.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.3 MO MT 4x4",
    Nox: 0.20281,
    Rendimiento: 12.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) DC 2.5 MT 4x2",
    Nox: 0.024,
    Rendimiento: 7.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) SC 2.3 MO MT 4x2",
    Nox: 0.20281,
    Rendimiento: 12.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D23) SC 2.3 MO MT 4x4",
    Nox: 0.20281,
    Rendimiento: 12.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D40) 2,5 Lts. DOHC Pick Up Cabina Simple 2P. T/M 4x4 Motor Diesel",
    Nox: 0.2414,
    Rendimiento: 8.2
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D40) 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x2 Motor Diesel",
    Nox: 0.2414,
    Rendimiento: 8.2
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D40) 2,5 Lts. DOHC Pick Up Doble Cabina 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2414,
    Rendimiento: 8.2
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D40) 2,5 Lts. DOHC Pick Up Doble Cabina Wide 4P. T/A 4x4 Motor Diesel",
    Nox: 0.23,
    Rendimiento: 8.6
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara (D40) 2,5 Lts. DOHC Pick Up Doble Cabina Wide 4P. T/M 4x4 Motor Diesel",
    Nox: 0.2215,
    Rendimiento: 8.3
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara 2,5 Lts. Camioneta 4P. T/M 4x4",
    Nox: 0.0096,
    Rendimiento: 7.9
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara D40 Decontent 2,5 Lts. DOHC Pick Up Doble Cabina 4P T/M 4x2 Motor Diesel",
    Nox: 0.2505,
    Rendimiento: 8.9
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Navara D40 Decontent 2,5 Lts. DOHC Pick Up Doble Cabina 4P T/M 4x4 Motor Diesel",
    Nox: 0.2505,
    Rendimiento: 8.9
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) DC 2.3 AT 4x4",
    Nox: 0.2399,
    Rendimiento: 11
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) DC 2.3 MT 4x2",
    Nox: 0.1725,
    Rendimiento: 13.4
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) DC 2.3 MT 4x4",
    Nox: 0.1725,
    Rendimiento: 13.4
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) DC 2.5 MT 4x2",
    Nox: 0.0096,
    Rendimiento: 7.9
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) SC 2.3 MT 4x2",
    Nox: 0.1725,
    Rendimiento: 13.4
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 (D23) SC 2.3 MT 4x4",
    Nox: 0.1725,
    Rendimiento: 13.4
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) DC 2.3 AT 4x4",
    Nox: 0.2296,
    Rendimiento: 10.6
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) DC 2.3 MT 4x2",
    Nox: 0.2481,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) DC 2.3 MT 4x2",
    Nox: 0.2481,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) DC 2.3 MT 4x4",
    Nox: 0.2481,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) DC 2.5 MT 4x2",
    Nox: 0.0096,
    Rendimiento: 7.9
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) SC 2.3 MT 4x2",
    Nox: 0.2481,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "NP300 NAVARA (D23) SC 2.3 MT 4x4",
    Nox: 0.2481,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Titan 4x4",
    Nox: 0.02538,
    Rendimiento: 4.5
  },
  {
    Marca: "Nissan",
    Tipo: "Camioneta",
    Modelo: "Titan 4x4",
    Nox: 0.02538,
    Rendimiento: 4.5
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "370Z (Z34) 3,7 Lts. Coupe 3P. T/A Otto",
    Nox: 0.01365,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "370Z 3,7 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.0175,
    Rendimiento: 6.4
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "370Z Z34 3,7 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.1075,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "GT-R 3,8 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0263,
    Rendimiento: 5.9
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "GT-R 3,8 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0263,
    Rendimiento: 5.9
  },
  {
    Marca: "Nissan",
    Tipo: "Coupe",
    Modelo: "GT-R 3,8 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0263,
    Rendimiento: 5.9
  },
  {
    Marca: "Nissan",
    Tipo: "Electrico",
    Modelo: "Leaf (ZE0) Hatch Back 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon cerrado",
    Modelo: "NV350 (E26) 2,5 Lts. DOHC Furgon 4P. 3 Asientos T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon cerrado",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC Furgon 4P. 3 Asientos T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon cerrado",
    Modelo: "NV350 Wide Super Long Hi Roof 2,5 Lts. DOHC Furgon 4P. 3 Asientos T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon",
    Modelo: "NV350 (E26) 2.5 MT 4x2 FURGON",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon",
    Modelo: "NV350 (E26) Narrow 2,5 Lts. DOHC Furgon 5P 3 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon",
    Modelo: "NV350 (E26) Narrow Hi Roof 2,5 Lts. DOHC Furgon 4P 3 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Furgon",
    Modelo: "URVAN (E26) 2.5 MT 4x2 Furgon",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Juke (F15) Turbo 1,6 Lts. Hatch Back 5P. T/A 4WD Otto",
    Nox: 0.002,
    Rendimiento: 10.2
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Juke 1,6 Lts. DOHC Hatch Back 5P. T/A CVT Motor Otto",
    Nox: 0.01355,
    Rendimiento: 13.7
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Juke Upper AWD Turbo 1,6 Lts. DOHC Hatch Back 5P. T/A CVT 4x4 Motor Otto",
    Nox: 0.002,
    Rendimiento: 10.5
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Juke Upper Turbo 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0016,
    Rendimiento: 10.5
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Leaf (ZE0) Hatch Back 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "LEAF (ZE1) AT 4x2",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "March (K13) 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0026,
    Rendimiento: 11.6
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "MARCH (K13) 1.6 AT 4x2",
    Nox: 0.0039,
    Rendimiento: 10.5
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "MARCH (K13) 1.6 MT 4x2",
    Nox: 0.0042,
    Rendimiento: 11.6
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "March 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00685,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "March 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0026,
    Rendimiento: 11.6
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "March 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0045,
    Rendimiento: 11.7
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "March Active (K13) 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00215,
    Rendimiento: 11.4
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Note 1,6 Lts. DOHC Hatch Back 5P. T/A Tipo CVT Motor Otto",
    Nox: 0.00745,
    Rendimiento: 11.2
  },
  {
    Marca: "Nissan",
    Tipo: "Hatch Back",
    Modelo: "Note 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0065,
    Rendimiento: 11.1
  },
  {
    Marca: "Nissan",
    Tipo: "Hatchback",
    Modelo: "Juke (F15) 1,6 Lts. DOHC Hatchback 5P. T/A CVT Motor Otto",
    Nox: 0.009,
    Rendimiento: 13
  },
  {
    Marca: "Nissan",
    Tipo: "Hatchback",
    Modelo: "Juke (F15) Turbo 1,6 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.00165,
    Rendimiento: 10.5
  },
  {
    Marca: "Nissan",
    Tipo: "Hatchback",
    Modelo: "March (K13) 1,6 Lts. DOHC Hatchback 5P. T/A Motor Otto",
    Nox: 0.0047,
    Rendimiento: 11.1
  },
  {
    Marca: "Nissan",
    Tipo: "Hatchback",
    Modelo: "Note (E12) 1,6 Lts. DOHC Hatchback 5P T/A CVT Motor Otto",
    Nox: 0.0074,
    Rendimiento: 12.1
  },
  {
    Marca: "Nissan",
    Tipo: "Hatchback",
    Modelo: "Note (E12) 1,6 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.00275,
    Rendimiento: 11.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) 2.5 MT 4x2 ESCOLAR",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) 2.5 MT 4x2 MINIBUS",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Narrow 2,5 Lts. DOHC Minibus 4P 15 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Narrow Long 2,5 Lts. DOHC Minibus 4P 12 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Narrow Long 2,5 Lts. DOHC Minibus 4P 15 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Narrow S-Long Escolar 2,5 Lts. Minibus 4P. 20 Asientos T/M Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Narrow S-Long Escolar 2,5 Lts. Minibus 4P. 24 Asientos T/M Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Wide S-Long 2,5 Lts. DOHC Minibus 4P 15 Asientos T/M Motor Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Wide S-Long Escolar 2,5 Lts. Minibus 4P. 20 Asientos T/M Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 (E26) Wide S-Long Escolar 2,5 Lts. Minibus 4P. 24 Asientos T/M Diesel",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Std 2,5 Lts. DOHC 5P. (15 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC 4P. (12 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC 4P. (15 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC 4P. (20 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC 4P. (24 asientos) Escolar T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Narrow Super Long Hi Roof 2,5 Lts. DOHC 4P. (9 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "NV350 Wide Super Long Hi Roof 2,5 Lts. DOHC 4P. (15 asientos) T/M Motor Diesel",
    Nox: 0.2411,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Minibus",
    Modelo: "URVAN (E26) 2.5 MT 4x2 Minibus",
    Nox: 0.2209,
    Rendimiento: 10.8
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima (L33) 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00295,
    Rendimiento: 6
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima (L33) 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0059,
    Rendimiento: 7.9
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "ALTIMA (L34) 2.0T CVT 4x2",
    Nox: 0.01545,
    Rendimiento: 10.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "ALTIMA (L34) 2.5 CVT 4x2",
    Nox: 0.0047,
    Rendimiento: 10.5
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima 2,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00625,
    Rendimiento: 9.5
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima 2,5 Lts. DOHC Sedan 4P. T/A Tipo CVT Motor Otto",
    Nox: 0.00555,
    Rendimiento: 9.8
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.004,
    Rendimiento: 7.8
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Altima 3,5 Lts. DOHC Sedan 4P. T/A Tipo CVT Motor Otto",
    Nox: 0.00165,
    Rendimiento: 8.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Maxima 3,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0028,
    Rendimiento: 7.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "SENTRA (B17) 1.8 CVT 4x2",
    Nox: 0.0182,
    Rendimiento: 11
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "SENTRA (B17) 1.8 MT 4x2",
    Nox: 0.0144,
    Rendimiento: 10.3
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "SENTRA (B18) 2.0 CVT 4x2",
    Nox: 0.00478,
    Rendimiento: 10.9
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "SENTRA (B18) 2.0 MT 4x2",
    Nox: 0.00248,
    Rendimiento: 9.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Sentra 1,8 Lts. DOHC Sedan 4P. T/A Tipo CVT Motor Otto",
    Nox: 0.0126,
    Rendimiento: 11.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Sentra 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0129,
    Rendimiento: 11
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Tiida (C11) 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00395,
    Rendimiento: 11.5
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Tiida Elongation 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0063,
    Rendimiento: 11.8
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "V-DRIVE (N17) 1.6 AT 4x2",
    Nox: 0.0043,
    Rendimiento: 10.7
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "V-DRIVE (N17) 1.6 MT 4x2",
    Nox: 0.00465,
    Rendimiento: 11.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Versa (N17) 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0022,
    Rendimiento: 10.9
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "VERSA (N17) 1.6 AT 4x2",
    Nox: 0.0043,
    Rendimiento: 10.7
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "VERSA (N17) 1.6 MT 4x2",
    Nox: 0.00225,
    Rendimiento: 12
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "VERSA (N17) 1.6 MT 4x2",
    Nox: 0.00465,
    Rendimiento: 11.4
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "VERSA (N18) 1.6 CVT 4x2",
    Nox: 0.0051,
    Rendimiento: 12.3
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "VERSA (N18) 1.6 MT 4x2",
    Nox: 0.0037,
    Rendimiento: 11
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Versa 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00225,
    Rendimiento: 11
  },
  {
    Marca: "Nissan",
    Tipo: "Sedan",
    Modelo: "Versa 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0024,
    Rendimiento: 11.6
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Armada 5,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.0254,
    Rendimiento: 4.8
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Armada 5,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0254,
    Rendimiento: 4.8
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "KICKS (P15) 1.6 CVT 4x2",
    Nox: 0.0042,
    Rendimiento: 11.9
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Kicks (P15) 1.6 CVT 4x2",
    Nox: 0.0056,
    Rendimiento: 12.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "KICKS (P15) 1.6 MT 4x2",
    Nox: 0.003,
    Rendimiento: 11.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Murano (Z51) 3,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00335,
    Rendimiento: 5.7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "MURANO (Z52) 3.5 CVT 4x4",
    Nox: 0.00228,
    Rendimiento: 7.8
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "MURANO (Z52) 3.5 CVT 4x4",
    Nox: 0.00211,
    Rendimiento: 7.6
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Murano 3,5 Lts. DOHC Station Wagon 5P. T/A CVT MotorOtto",
    Nox: 0.0085,
    Rendimiento: 6.5
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Murano 3,5 Lts. Station Wagon 5P. T/A",
    Nox: 0.00211,
    Rendimiento: 7.6
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Pathfinder R52 3,5 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0006,
    Rendimiento: 6.8
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Pathfinder R52 3,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0006,
    Rendimiento: 6.8
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Qashqai 2,0 Lts. DOHC Station Wagon 5P. T/A CVT 2WD Motor Otto",
    Nox: 0.0074,
    Rendimiento: 10.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Qashqai 2,0 Lts. DOHC Station Wagon 5P. T/A CVT AWD Motor Otto",
    Nox: 0.0074,
    Rendimiento: 10.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Qashqai 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0075,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Xtrail (T31) 2,5Lts. DOHC Station Wagon 5 Pasajeros 5P. T/A 4x2 Motor Otto",
    Nox: 0.005,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Xtrail (T31) 2,5Lts. DOHC Station Wagon 5 Pasajeros 5P. T/A 4x2 Motor Otto",
    Nox: 0.005,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Xtrail (T31) 2,5Lts. DOHC Station Wagon 7 Pasajeros 5P. T/A 4x2 Motor Otto",
    Nox: 0.005,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "New Xtrail (T31) 2,5Lts. DOHC Station Wagon 7 Pasajeros 5P. T/A 4x2 Motor Otto",
    Nox: 0.005,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "PATHFINDER (R52) 3.5 CVT 4x2",
    Nox: 0.0056,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "PATHFINDER (R52) 3.5 CVT 4x4",
    Nox: 0.0056,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Pathfinder (R53) 3.5 AT 4x2",
    Nox: 0.0034,
    Rendimiento: 7.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Pathfinder (R53) 3.5 AT 4x4",
    Nox: 0.003,
    Rendimiento: 7.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Pathfinder 3,5 Lts. DOHC Station Wagon 5P. T/A CVT 4x2 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Pathfinder 3,5 Lts. DOHC Station Wagon 5P. T/A CVT 4x4 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "QASHQAI (J11) 2.0 CVT 4x2",
    Nox: 0.0074,
    Rendimiento: 10.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "QASHQAI (J11) 2.0 CVT 4x4",
    Nox: 0.0074,
    Rendimiento: 10.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "QASHQAI (J11) 2.0 MT 4x2",
    Nox: 0.00685,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Qashqai 1,6 Lts. DOHC Station Wagon 5P. 4x2 T/M 5/7 Asientos Motor Otto",
    Nox: 0.01234,
    Rendimiento: 13.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Qashqai 2,0 DOHC Station Wagon 5P. 4x2 T/M 5/7 Asientos Motor Otto",
    Nox: 0.00603,
    Rendimiento: 9.5
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Qashqai 2,0 Lts. DOHC Station Wagon 5P. 4x2 T/A (CVT) 5/7 Asientos Motor Otto",
    Nox: 0.00635,
    Rendimiento: 9.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Qashqai 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A (CVT) 5/7 Asientos Motor Otto",
    Nox: 0.00635,
    Rendimiento: 9.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Qashqai 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/M 5/7 Asientos Motor Otto",
    Nox: 0.00603,
    Rendimiento: 9.5
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "Rogue SV",
    Nox: 0.00162,
    Rendimiento: 9.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail (T32) 2,5 Lts. DOHC Station Wagon 5P. 4x2 T/A (CVT) 5 asientos Motor Otto",
    Nox: 0.00435,
    Rendimiento: 9.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail (T32) 2,5 Lts. DOHC Station Wagon 5P. 4x2 T/A (CVT) 7 asientos Motor Otto",
    Nox: 0.00435,
    Rendimiento: 9.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail (T32) 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A (CVT) 5 asientos Motor Otto",
    Nox: 0.00435,
    Rendimiento: 9.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail (T32) 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A (CVT) 7 asientos Motor Otto",
    Nox: 0.00435,
    Rendimiento: 9.1
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-TRAIL (T32) 2.5 CVT 4x2 5P",
    Nox: 0.0088,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-TRAIL (T32) 2.5 CVT 4x2 7P",
    Nox: 0.0088,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-TRAIL (T32) 2.5 CVT 4x4 5P",
    Nox: 0.0088,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-TRAIL (T32) 2.5 CVT 4x4 7P",
    Nox: 0.0088,
    Rendimiento: 9.3
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail Hybrid 2,0 Lts. Station Wagon 5P. T/A Hibrido Electrico",
    Nox: 0.007,
    Rendimiento: 12.4
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail T-31 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Otto",
    Nox: 0.00955,
    Rendimiento: 8.7
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail T31 2,5 Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Otto",
    Nox: 0.00545,
    Rendimiento: 8.5
  },
  {
    Marca: "Nissan",
    Tipo: "Station Wagon",
    Modelo: "X-Trail T31 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00545,
    Rendimiento: 8.5
  },
  {
    Marca: "Opel",
    Tipo: "Cabriolet",
    Modelo: "Cascada 1,6 Lts. Turbo DOHC Convertible 2P. T/A Motor Otto",
    Nox: 0.01409,
    Rendimiento: 10.5
  },
  {
    Marca: "Opel",
    Tipo: "Furgon Cerrado",
    Modelo: "Vivaro 2.0 Lts. TD 150 HP T/M",
    Nox: 0.2286,
    Rendimiento: 13.5
  },
  {
    Marca: "Opel",
    Tipo: "Furgon",
    Modelo: "Combo HDi 92 L1 1,6 Lts. Furgon 4P T/M Diesel",
    Nox: 0.174,
    Rendimiento: 15.8
  },
  {
    Marca: "Opel",
    Tipo: "Furgon",
    Modelo: "Combo HDi 92 L1 1,6 Lts. Furgon 5P T/M Diesel",
    Nox: 0.174,
    Rendimiento: 15.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Adam 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01668,
    Rendimiento: 13.5
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra 1,6 DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00406,
    Rendimiento: 10.1
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra 1,6 DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00906,
    Rendimiento: 11.5
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra GTC 1,6 Lts. Turbo DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01642,
    Rendimiento: 11
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra HB 5 1,4 Lts. Turbo DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00607,
    Rendimiento: 12.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra K 1,6 Lts. Turbo MT HB5 Hatch Back 5P. T/M",
    Nox: 0.0169,
    Rendimiento: 10.6
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra K HB 1,4 Lts. Turbo Hatch Back 5P. T/A",
    Nox: 0.00195,
    Rendimiento: 11.1
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra NB5 1,4 Lts. Turbo DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00839,
    Rendimiento: 11.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra OPC 2,0 Lts. DOHC Turbo Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01205,
    Rendimiento: 9.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra Sport Tourer 1,6 Lts. Turbo DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01642,
    Rendimiento: 11
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra ST 1,6 Lts. Turbo DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0128,
    Rendimiento: 9.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Astra T HB5 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0117,
    Rendimiento: 13.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02809,
    Rendimiento: 13.7
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.02809,
    Rendimiento: 13.7
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1,4 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.0089,
    Rendimiento: 13.5
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1.2 Lts. 100 5 Puertas T/A Motor Otto Euro 6d Full",
    Nox: 0.01255,
    Rendimiento: 19.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1.2 Lts. 100 5 Puertas T/M Motor Otto Euro 6d Full",
    Nox: 0.01042,
    Rendimiento: 18.7
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa 1.5 Lts. Blue Hdi 100 5 Puertas T/M Motor Diesel Euro 6c",
    Nox: 0.03027,
    Rendimiento: 19.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa HB 1,4 Lts. DOHC Hatch Back 3P. T/A Motor Otto",
    Nox: 0.01023,
    Rendimiento: 12.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa HB 1,4 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01023,
    Rendimiento: 12.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa OPC 1,6T Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02585,
    Rendimiento: 10.3
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa OPC Nurburgring Edition 1,6 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.02601,
    Rendimiento: 9.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa OPC Turbo 1,6 Lts. Hatch Back 3P. T/M",
    Nox: 0.01435,
    Rendimiento: 9.3
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa-D Turbo 1,4 Lts. DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.01256,
    Rendimiento: 13.9
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Corsa-D Turbo 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01256,
    Rendimiento: 13.9
  },
  {
    Marca: "Opel",
    Tipo: "Hatch Back",
    Modelo: "Opel Corsa 1.2 MT5",
    Nox: 0.00818,
    Rendimiento: 13.5
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa 1.5 TD 100",
    Nox: 0.05199,
    Rendimiento: 25.4
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB3 1,4 Lts. Hatchback 3P. T/A Otto",
    Nox: 0.00752,
    Rendimiento: 13
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB3 1,4 Lts. Hatchback 3P. T/M Otto",
    Nox: 0.01623,
    Rendimiento: 15.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB3 T 1,4 Lts. Hatchback 3P. T/M Otto",
    Nox: 0.00826,
    Rendimiento: 15.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB5 1,4 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.00752,
    Rendimiento: 12.8
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB5 1,4 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.01623,
    Rendimiento: 15.2
  },
  {
    Marca: "Opel",
    Tipo: "Hatchback",
    Modelo: "Corsa HB5 T 1,4 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.00826,
    Rendimiento: 15.4
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Astra NB 1,4 Lts. Turbo DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00839,
    Rendimiento: 11.2
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Astra NB 1,6 Lts. Turbo DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0128,
    Rendimiento: 9.8
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Astra NB 1,6 Lts. Turbo DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01642,
    Rendimiento: 11
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Astra NB 5 1,4 Lts. Turbo DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00607,
    Rendimiento: 12.7
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0066,
    Rendimiento: 11.9
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia 1,6T Lts., DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00962,
    Rendimiento: 11
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia 2,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01199,
    Rendimiento: 8.9
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia NB 2,0 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0131,
    Rendimiento: 7.9
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia NB 2,0 Lts. Turbo DOHC Sedan 4P. AWD T/A Motor Otto",
    Nox: 0.00858,
    Rendimiento: 7.4
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia NB 2,0 Lts. Turbo DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.01405,
    Rendimiento: 8.4
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia NB 2,0 Lts. Turbo DOHC Sesdan 4P. T/A Motor Otto",
    Nox: 0.00864,
    Rendimiento: 7.6
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia NB 2,0 Lts., DOHC Sedan 4P. AWD T/A Motor Otto",
    Nox: 0.01114,
    Rendimiento: 8.5
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia OPC Sport Tourer 2,8 Lts. DOHC Sedan 4P. 4x4 T/A Motor Otto",
    Nox: 0.03749,
    Rendimiento: 6
  },
  {
    Marca: "Opel",
    Tipo: "Sedan",
    Modelo: "Insignia OPC Sport Tourer 2,8 Lts. DOHC Sedan 4P. 4x4 T/M Motor Otto",
    Nox: 0.03934,
    Rendimiento: 6.3
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Antara 2,2 Lts. DOHC Station Wagon 5P. AWD T/A Motor Diesel",
    Nox: 0.15444,
    Rendimiento: 9.3
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Antara 2,2 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1271,
    Rendimiento: 8.7
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Antara 2,2 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1554,
    Rendimiento: 10.6
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Astra 1,6 DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00406,
    Rendimiento: 10.1
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Astra 1,6 DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00906,
    Rendimiento: 11.5
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Astra ST 1,6 Lts. Turbo DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0128,
    Rendimiento: 9.8
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Astra T ST 1,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0117,
    Rendimiento: 13.2
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland",
    Nox: 0.02156,
    Rendimiento: 16.8
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland 1,5 Lts. Blue Hdi 100 Station Wagon 5P. T/M Diesel",
    Nox: 0.028,
    Rendimiento: 17.6
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland 1.2T 130 MT6",
    Nox: 0.00952,
    Rendimiento: 17.6
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland 1.5 TD MT6 110HP",
    Nox: 0.04593,
    Rendimiento: 23.1
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland X 1,2 Lts. Turbo Station Wagon 5P. T/A Otto",
    Nox: 0.0207,
    Rendimiento: 10.8
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Crossland X 1,2 Lts. Turbo Station Wagon 5P. T/M Otto",
    Nox: 0.0119,
    Rendimiento: 14.9
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01165,
    Rendimiento: 9.2
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland 1.2L T/M",
    Nox: 0.02501,
    Rendimiento: 15.5
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland 1.5 TD 130 AT8",
    Nox: 0.02365,
    Rendimiento: 23.1
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland 1.5TD AT8",
    Nox: 0.02755,
    Rendimiento: 24.2
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland 2.0 Lts. Blue Hdi 5P. T/A Motor Diesel",
    Nox: 0.02798,
    Rendimiento: 15.8
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Grandland Blue HDi 120 1,6 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0179,
    Rendimiento: 14
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Insignia OPC Sport Tourer 2,8 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.03749,
    Rendimiento: 6
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Insignia OPC Sport Tourer 2,8 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Otto",
    Nox: 0.03934,
    Rendimiento: 6.3
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Insignia ST 2,0 Lts. Turbo DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.00858,
    Rendimiento: 7.4
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Insignia ST 2,0 Lts. Turbo DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.00864,
    Rendimiento: 7.6
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Insignia ST 2,0 Lts., DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.01114,
    Rendimiento: 8.3
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Meriva 1,4 Lts. Turbo DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00594,
    Rendimiento: 11.4
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Meriva Enjoy 1,4 Lts. Turbo DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01532,
    Rendimiento: 10.4
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Meriva Enjoy 1,4 Lts. Turbo DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.00295,
    Rendimiento: 12.5
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Mokka 1,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00829,
    Rendimiento: 11
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Mokka 1,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0035,
    Rendimiento: 11.5
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Mokka 1.2T 130 AT8",
    Nox: 0.01618,
    Rendimiento: 16.9
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Mokka 1.2T 130 MT6",
    Nox: 0.00911,
    Rendimiento: 18.4
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Mokka 1.5TD 110 MT6",
    Nox: 0.04306,
    Rendimiento: 22.8
  },
  {
    Marca: "Opel",
    Tipo: "Station Wagon",
    Modelo: "Zafira 1,8 DOHC Station Wagon 5P. MTA Motor Otto",
    Nox: 0.01042,
    Rendimiento: 10.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Cabriolet",
    Modelo: "308 CC (Roland Garros) 2,0 Lts. HDI DOHC Coupe Cabriolet 2P. T/A Motor Diesel",
    Nox: 0.1353,
    Rendimiento: 11.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer 3 L2 2,2 Lts. Hdi 150 HP DOHC Pick Up Cabina Simple 2P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer 3 L2 Camioneta Cabina Simple 2,2 Lts. Hdi 110HP DOHC 2P. 4x2 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer 3 L3 2,2 Lts. Hdi 150 HP DOHC Pick Up Cabina Doble 4P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer 3 L3 Camioneta Cabina Doble 2,2 Lts. Hdi 110HP DOHC 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer Blue HDi 160HP 2,0 Lts. Camioneta Doble Cabina 4P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer HDi 160HP L3 2,0 Lts. Camioneta Cabina Simple 2P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Boxer L3 2,2 Lts. Camioneta 2P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Landtrek 1.9 Diesel Mec 4x2",
    Nox: 0.23317,
    Rendimiento: 10.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Landtrek 1.9 Diesel Mec 4x4",
    Nox: 0.23317,
    Rendimiento: 10.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Camioneta",
    Modelo: "Landtrek 2.4 Gasolina Aut 4x4",
    Nox: 0.03064,
    Rendimiento: 7
  },
  {
    Marca: "Peugeot",
    Tipo: "Chasis Cabina",
    Modelo: "Boxer 3 L2 Chasis Cabina Simple 2,2 Lts. Hdi 110HP DOHC 2P. 4x2 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Chasis Cabina",
    Modelo: "Boxer 3 L2 Chasis Cabina Simple 2,2 Lts. Hdi 110HP DOHC 2P. 4x4 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Chasis Cabina",
    Modelo: "Boxer 3 L3 Chasis Cabina Doble 2,2 Lts. Hdi 110HP DOHC 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Chasis Cabina",
    Modelo: "Boxer 3 L3 Chasis Cabina Doble 2,2 Lts. Hdi 110HP DOHC 4P. 4x4 T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Coupe",
    Modelo: "RCZ 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01459,
    Rendimiento: 9.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Coupe",
    Modelo: "RCZ 1,6 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0181,
    Rendimiento: 11
  },
  {
    Marca: "Peugeot",
    Tipo: "Coupe",
    Modelo: "RCZ Premier 1,6 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01459,
    Rendimiento: 9.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Coupe",
    Modelo: "RCZ Premier 1,6 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.0181,
    Rendimiento: 11
  },
  {
    Marca: "Peugeot",
    Tipo: "Coupe",
    Modelo: "RCZ-R 1,6 Lts. THP 270HP DOHC Coupe 2P T/M Motor Otto",
    Nox: 0.01534,
    Rendimiento: 11.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgn Cerrado",
    Modelo: "Partner Furgon 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Bipper 1,3 Lts. Hdi 75 HP DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.1369,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Bipper 1,3 Lts. Hdi 75 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1369,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Bipper 1,4 SOHC Furgon 4P. T/M Motor Otto",
    Nox: 0.0143,
    Rendimiento: 12.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 Furgon L1H1 2,2 Lts. Hdi 110HP DOHC 5P. T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 Furgon L2H2 2,2 Lts. Hdi 110HP DOHC 5P. T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 Furgon L3H2 2,2 Lts. Hdi 110HP DOHC 5P. T/M 4x2 Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 Furgon L3H2 2,2 Lts. Hdi 110HP DOHC 5P. T/M 4x4 Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 Furgon L3H3 2,2 Lts. Hdi 110HP DOHC 5P. T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 L1H1 2,2 Lts. Hdi 150 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 L2H2 2,2 Lts. Hdi 150 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 L3H2 2,2 Lts. Hdi 150 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 L4H2 2,2 Lts. Hdi 150 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Boxer 3 L4H3 2,2 Lts. Hdi 130 HP DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.21348,
    Rendimiento: 9.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon Cerrado",
    Modelo: "Boxer HDi 160HP L1H1 2,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon Cerrado",
    Modelo: "Boxer HDi 160HP L2H2 2,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon Cerrado",
    Modelo: "Boxer HDi 160HP L3H2 2,0 Lts. Furgon 2P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon Cerrado",
    Modelo: "Boxer HDi 160HP L4H2 2,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Expert L2H1 1,6 Lts. HDI DOHC 90HP Furgon 5P. T/M Motor Diesel",
    Nox: 0.1834,
    Rendimiento: 13.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Expert L2H1 2,0 Lts. HDI DOHC 163 HP Furgon 5P. T/M Motor Diesel",
    Nox: 0.2119,
    Rendimiento: 12.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Nueva Partner 1,6 Lts. Hdi 90HP Furgon 5P. T/M Diesel",
    Nox: 0.1373,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Nueva Partner Maxi 1,6 Lts. Hdi 90HP Furgon 5P. T/M Diesel",
    Nox: 0.1373,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner 1,6 Lts. e-Hdi 90HP SOHC Furgon 5P. T/M (piloteada) Motor Diesel",
    Nox: 0.1944,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner 1,6 Lts.Hdi 90HP Pack SOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1953,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner Hdi 92 L1 1,6 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.148,
    Rendimiento: 16.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner Hdi 92 L1 1,6 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.148,
    Rendimiento: 16.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner Hdi 92 L2 1,6 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.148,
    Rendimiento: 16.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon cerrado",
    Modelo: "Partner Maxi 1,6 Lts.Hdi 90HP Pack SOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1953,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Furgon",
    Modelo: "Expert 2,0 Lts. HDI 150 HP Furgon 5P. T/M Diesel",
    Nox: 0.1683,
    Rendimiento: 15.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "108 Active Pack Puretech 82 HP 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "108 Top Allure 1,2 Lts. Puretech 82 HP Hatch Back 5P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "108 Top Allure Dressy 1,2 Lts. Puretech 82 HP Hatch Back 5P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "108 Top Allure Kilt 1,2 Lts. Puretech 82 HP Hatch Back 5P. T/M Otto",
    Nox: 0.0058,
    Rendimiento: 17.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "207 Compact X Line 1,4 Lts. HDI SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.14953,
    Rendimiento: 20.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "207 Premium 1,6 Lts. HDI 92 HP SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.11602,
    Rendimiento: 18.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 1,5 Lts. Blue HDi 100 hp Hatch Back 5P. T/M Diesel",
    Nox: 0.0436,
    Rendimiento: 20
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 1,6 Lts. Blue HDi 100hp Hatch Back 5P. T/M Diesel",
    Nox: 0.0228,
    Rendimiento: 20.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 1,6 Lts. DOHC 120HP Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00895,
    Rendimiento: 10.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 1,6 Lts. e-Hdi 92 HP SOHC CMP Hatch Back 3P. T/M Motor Diesel",
    Nox: 0.1533,
    Rendimiento: 21.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 1.5 Lts. Blue Hdi 100 5 Puertas T/M Diesel Euro 6c",
    Nox: 0.03955,
    Rendimiento: 18.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Active 1,2 Lts. 82 HP DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00635,
    Rendimiento: 16
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Active 1,4 Lts. 68 HP HDI SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1179,
    Rendimiento: 20.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Active Pack 1,2 Lts. Pure Tech 110HP Hatch Back 5P. T/A Otto",
    Nox: 0.0126,
    Rendimiento: 13.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Active Pack Puretech 110 HP 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 GT Line PureTech 110 HP 1,2 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 GT Line PureTech 110 HP 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 GT-Line 1,2 Lts. Pure Tech 110HP Hatch Back 5P. T/A Otto",
    Nox: 0.0126,
    Rendimiento: 13.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Gti 1,6 Lts. THP 200 HP DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.00615,
    Rendimiento: 11.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Gti 1,6 Lts. THP 208 hp Hatch Back 3P. T/M Otto",
    Nox: 0.01827,
    Rendimiento: 14.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Limited 1,6 Lts. e-Hdi 92 HP SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1751,
    Rendimiento: 20.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Limited 1,6 Lts. Vti 120 HP DOHC Hatch Back 3P. T/M Motor Otto",
    Nox: 0.007,
    Rendimiento: 13.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Limited 1,6 Lts. Vti 120 HP DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.007,
    Rendimiento: 13.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Premier 1,2 Lts. 82 HP DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00635,
    Rendimiento: 16
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Pure Tech 110 HP 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "208 Roland Garros Puretech 110 HP 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1,2 Lts. Pure Tech 110HP Hatch Back 5P. T/M Otto",
    Nox: 0.0073,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1,5 Lts. Blue HDi 130 HP Hatch Back 5P. T/A Diesel",
    Nox: 0.03,
    Rendimiento: 19.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1,5 Lts. Blue HDi 130 hp Hatch Back 5P. T/M Diesel",
    Nox: 0.0413,
    Rendimiento: 18.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1,6 Lts. E-HDI SOHC 115 hp Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1372,
    Rendimiento: 22.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1,6 Lts. THP 165 Hatch Back 5P T/A Otto",
    Nox: 0.0203,
    Rendimiento: 9.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1.2 Lt., Puretech 130 HP 5 Puertas T/M Motor Otto Euro 6b",
    Nox: 0.0317,
    Rendimiento: 13.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 1.5 Lts. BlueHdi 130 5 Ptas. T/A Motor Disel Euro 6c",
    Nox: 0.01446,
    Rendimiento: 19.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 2,0 Lts. Bleu-Hdi DOHC 150 hp Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.04776,
    Rendimiento: 20.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 225 HP 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0157,
    Rendimiento: 13
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Active 1,6 Lts. eHdi SOHC Hatch Back 5P. T/M Pilotada Motor Diesel",
    Nox: 0.1721,
    Rendimiento: 18.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Active 1,6 Lts. Hdi 92 HP SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1469,
    Rendimiento: 17.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Blue HDi 180 HP 2,0 Lts. Hatch Back 5P. T/A 4x2 Diesel",
    Nox: 0.02036,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Confort Pack 1,6 Lts. Hdi SOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.1721,
    Rendimiento: 18.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 GT-Line 1,2 Lts. Pure Tech 130HP SYS Hatch Back 5P. T/A Otto",
    Nox: 0.0136,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 GTi 1,6 Lts., THP 271 HP Hatch Back 5P. T/M Otto",
    Nox: 0.00488,
    Rendimiento: 12.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Pure Tech S&S 130HP 1,2 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0136,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatch Back",
    Modelo: "308 Puretech 130 HP 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00735,
    Rendimiento: 14.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 1.2 Puretech 100 EAT8",
    Nox: 0.01431,
    Rendimiento: 20.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 1.2 Puretech 75",
    Nox: 0.00818,
    Rendimiento: 13.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Blue Hdi 100",
    Nox: 0.05199,
    Rendimiento: 25.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Gti 30 th 1,6 Lts. THP 208 hp Hatchback 3P. T/M Otto.",
    Nox: 0.01827,
    Rendimiento: 14.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Limited 1,6 Lts. e-HDI 92HP SOHC Hatchback 5P. T/M tipo CMP Motor Diesel",
    Nox: 0.1595,
    Rendimiento: 22.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Pure Tech 82HP 1,2 Lts. Hatchback 3P. T/M Otto",
    Nox: 0.01655,
    Rendimiento: 18.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Pure Tech 82HP 1,2 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.01655,
    Rendimiento: 18.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Puretech 100",
    Nox: 0.00885,
    Rendimiento: 18.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "208 Puretech 130 EAT8",
    Nox: 0.01624,
    Rendimiento: 18.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "308 1,6 Lts. Blue-HDi 120HP Hatchback 5P. T/A Diesel",
    Nox: 0.0355,
    Rendimiento: 21.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "308 1,6 Lts. Blue-Hdi 120HP Hatchback 5P. T/M Diesel",
    Nox: 0.0819,
    Rendimiento: 19.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "308 1.5 Blue Hdi 130",
    Nox: 0.05105,
    Rendimiento: 23.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "308 Blue HDi 130 EAT8",
    Nox: 0.03123,
    Rendimiento: 25
  },
  {
    Marca: "Peugeot",
    Tipo: "Hatchback",
    Modelo: "308 GT 2,0 Lts. Blue-Hdi DOHC 180 HP Hatchback 5P. T/A Motor Diesel",
    Nox: 0.04266,
    Rendimiento: 20.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Boxer 3 L3H2 2,2 Lts. Hdi 110HP DOHC Minibus 12 Pasajeros T/M 4x4 Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Boxer 3 L3H2 2,2 Lts. Hdi 110HP DOHC Minibus 17 Pasajeros T/M Motor Diesel",
    Nox: 0.2723,
    Rendimiento: 7.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Boxer 3 L3H2 2,2 Lts. Hdi 150HP DOHC Minibus (15 asientos) 5P. T/M Motor Diesel",
    Nox: 0.2787,
    Rendimiento: 8.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Boxer Escolar Blue HDI 160HP L2H2 2,0 Lts. Minibus 25 Asientos 5P. T/M Diesel",
    Nox: 0.1309,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Expert 2,0 Lts. HDI DOHC 163 HP Minibus (8 asientos) 5P. T/M Motor Diesel",
    Nox: 0.2119,
    Rendimiento: 12.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Expert 2,0 Lts. HDI DOHC 163 HP Minibus (9 asientos) 5P. T/M Motor Diesel",
    Nox: 0.2119,
    Rendimiento: 12.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Expert L2H1 Minibus Escolar 1,6 Lts. HDI DOHC 90HP Minibus 5P. (20 asientos) T/M Motor Diesel",
    Nox: 0.1834,
    Rendimiento: 13.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Gran Tepee 2,0 Lts Hdi DOHC 163 hp Minibus 5P. (8 asientos) T/A Motor Diesel",
    Nox: 0.2454,
    Rendimiento: 10.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller Blue Hdi 115 HP 1,6 Lts. Minibus 8 Asientos 5P. T/M Diesel",
    Nox: 0.0402,
    Rendimiento: 15.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller Blue HDi 180HP 2,0 Lts. Minibus 7 Pasajeros 5P. T/A Diesel",
    Nox: 0.0717,
    Rendimiento: 11.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller Blue HDi 180HP 2,0 Lts. Minibus 8 Pasajeros 5P. T/A Diesel",
    Nox: 0.0717,
    Rendimiento: 11.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller L2H1 Blue Hdi 150HP 2,0 Lts. Minibus 9 Pasajeros 5P. T/M Diesel",
    Nox: 0.0869,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller L3 2,0 Lts. Blue Hdi 150",
    Nox: 0.02887,
    Rendimiento: 13.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller L3 2,0 Lts. Blue HDi 150 5P. T/M Diesel",
    Nox: 0.02887,
    Rendimiento: 13.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller L3 Minibus 2.0 Lts., Blue HDi 180 5P T/A Motor Diesel Euro 6c",
    Nox: 0.02116,
    Rendimiento: 15.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Minibus",
    Modelo: "Traveller L3H1 Blue Hdi 150HP 2,0 Lts. Minibus 9 Pasajeros 5P. T/M Diesel",
    Nox: 0.0869,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 2,0 Lts. Blue-Hdi 180 HP Sedan 4P. T/A Diesel",
    Nox: 0.04025,
    Rendimiento: 19.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 1,6 Lts. VTi 120 HP DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0065,
    Rendimiento: 11.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 Active Pack 1,6 Lts. VTi 115HP Sedan 4P. T/A",
    Nox: 0.02195,
    Rendimiento: 10.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 Allure 1,6 Lts. VTi 115HP Sedan 4P. T/A",
    Nox: 0.02195,
    Rendimiento: 10.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 Allure o Active 1,6 Lts. Hdi 92 HP Sedan 4P. T/M Motor Diesel",
    Nox: 0.1382,
    Rendimiento: 18.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 HDi 92 Hp 1,6 Lts. Sedan 4P. T/M Diesel",
    Nox: 0.15065,
    Rendimiento: 19
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "301 VTi 115 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00545,
    Rendimiento: 10.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "407 Confort Pack Plus 2,0 HDI DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.12,
    Rendimiento: 11.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 1,6 Lts. HDi 112HP Access SOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.14938,
    Rendimiento: 17
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 1,6 Lts. Puretech 225 Sedan 5P. T/A Otto",
    Nox: 0.01503,
    Rendimiento: 10.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 2,0 Lts. HDi 163HP Active DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.12925,
    Rendimiento: 13.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 Blue Hdi 180 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.02525,
    Rendimiento: 14.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 Confort 1,6 Lts. HDi 112HP SOHC CMP Sedan 4P. T/M Motor Diesel",
    Nox: 0.14938,
    Rendimiento: 17
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 GT 2,2 Lts. Hdi 204 HP DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.1698,
    Rendimiento: 12
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 GT Puretech 225 EAT8",
    Nox: 0.02009,
    Rendimiento: 15
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 Puretech 180 EAT8",
    Nox: 0.0193,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Sedan",
    Modelo: "508 THP 165HP 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00775,
    Rendimiento: 12.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,2 Lts. DOHC 82HP Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0261,
    Rendimiento: 16.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,2 Lts. PureTech 110 HP Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01054,
    Rendimiento: 16.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,2 Puretech 130 EAT8",
    Nox: 0.01503,
    Rendimiento: 16.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,4 Lts. HDI SOHC 68 hp Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1401,
    Rendimiento: 22
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,5 Lts. Blue HDi 120 Hp Station Wagon 5P. T/A Diesel",
    Nox: 0.0361,
    Rendimiento: 19.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,6 Lts. DOHC 120HP Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0066,
    Rendimiento: 12.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,6 Lts. E-HDI SOHC Station Wagon 5P. T/M (Pilotada) Motor Diesel",
    Nox: 0.1237,
    Rendimiento: 22.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,6 Lts. E-HDI SOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1237,
    Rendimiento: 20.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1,6 Lts. SOHC e-Hdi 115 hp Station Wagon 5P T/M Motor Diesel",
    Nox: 0.1372,
    Rendimiento: 18
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1.5 Lts. Blue Hdi 100 5 Puertas T/M Motor Diesel Euro 6c",
    Nox: 0.05714,
    Rendimiento: 23.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 1.5 Lts. Blue HDi 130 5 Puertas T/A Motor Diesel Euro 6c",
    Nox: 0.01979,
    Rendimiento: 24
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Allure Pack 1,2 Lts. Puretech 110HP Station Wagon 5P. T/A",
    Nox: 0.018,
    Rendimiento: 13.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Blue HDi 100",
    Nox: 0.04306,
    Rendimiento: 22.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Blue HDi 100 1,5 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.03955,
    Rendimiento: 19.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Blue HDi 100 Hp 1,5 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.04367,
    Rendimiento: 23.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Blue HDi 120HP 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.04305,
    Rendimiento: 20.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Blue HDi 130 EAT8",
    Nox: 0.02705,
    Rendimiento: 24.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "2008 Puretech 130",
    Nox: 0.00911,
    Rendimiento: 18.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,2 Lts. Puretech 130 HP Station Wagon 5P T/M Otto",
    Nox: 0.023,
    Rendimiento: 13.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,5 Lts. Blue HDi 130 HP Station Wagon 5P. T/A Diesel",
    Nox: 0.0398,
    Rendimiento: 19.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,5 Lts. Blue HDi 130 HP Station Wagon 5P. T/M Diesel",
    Nox: 0.0404,
    Rendimiento: 17.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,5 Lts. Blue HDi 130 HP Station Wagon 5P. T/M Diesel",
    Nox: 0.0404,
    Rendimiento: 17.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,6 Lts. Blue Hdi 120HP. Station Wagon 5P. T/A Diesel",
    Nox: 0.0444,
    Rendimiento: 14.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,6 Lts. Blue Hdi 120HP. Station Wagon 5P. T/M Diesel",
    Nox: 0.0518,
    Rendimiento: 17.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,6 Lts. BlueHDi 120 HP Station Wagon 5P. T/A Diesel",
    Nox: 0.0321,
    Rendimiento: 19.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,6 Lts. THP 165 hp Station Wagon 5P. T/A Otto",
    Nox: 0.0079,
    Rendimiento: 9.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1,6 Lts. THP 165 HP Station Wagon 5P. T/A Otto",
    Nox: 0.0055,
    Rendimiento: 10.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1.2L Puretech T/M",
    Nox: 0.02501,
    Rendimiento: 15.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1.5 Blue HDi 130",
    Nox: 0.03647,
    Rendimiento: 22.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1.5 Blue HDi 130 EAT8",
    Nox: 0.02365,
    Rendimiento: 23.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1.5 Blue HDi 130 TA",
    Nox: 0.01745,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 1.6 Hybrid 300 4x4",
    Nox: 0.01179,
    Rendimiento: 17.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 2,0 Lts. Blue HDi 180HP Station Wagon 5P. T/A Diesel",
    Nox: 0.0738,
    Rendimiento: 17.7
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 2,0 Lts. HDI DOHC 165 HP Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.122,
    Rendimiento: 12.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 Blue Hdi 180 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.02706,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 BlueHDi 120 Hp 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.0298,
    Rendimiento: 18.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 Puretech 180 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.02243,
    Rendimiento: 12.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "3008 Puretech 180 EAT8",
    Nox: 0.01944,
    Rendimiento: 15.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "308 1,6 Lts. Blue-HDi 120HP Station Wagon 5P. T/A Diesel",
    Nox: 0.0355,
    Rendimiento: 21.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "4008 1,6 Lts. e-Hdi 115 hp Station Wagon 5P. T/M 4WD Diesel",
    Nox: 0.0709,
    Rendimiento: 18.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "4008 2,0 Lts. 150HP DOHC Station Wagon 5P. T/A CVT 4WD Motor Otto",
    Nox: 0.02279,
    Rendimiento: 10.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1,6 Lts. Blue-HDI 120 HP Station Wagon (5 plazas) 5P. T/A Diesel",
    Nox: 0.0875,
    Rendimiento: 15.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1,6 Lts. Blue-HDI 120 HP Station Wagon (7 plazas) 5P. T/A Diesel",
    Nox: 0.0875,
    Rendimiento: 15.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1,6 Lts. Puretech 180 Station Wagon 5P. T/A Otto",
    Nox: 0.02243,
    Rendimiento: 12.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1,6 Lts. THP 165 hp Station Wagon 5P. T/A Otto",
    Nox: 0.02945,
    Rendimiento: 11.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1.5 Blue HDi 130 EAT6",
    Nox: 0.01745,
    Rendimiento: 17.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 1.5 Blue HDi 130 EAT8",
    Nox: 0.02508,
    Rendimiento: 21.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 2,0 Lts. Blue Hdi 180 HP Station Wagon 5P. T/A Diesel",
    Nox: 0.02798,
    Rendimiento: 15.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 2,0 Lts. HDI DOHC 165 HP Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1298,
    Rendimiento: 11.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Active 1,6 Lts. e-Hdi SOHC (110 hp) Sation Wagon 5P. T/M Motor Diesel",
    Nox: 0.13934,
    Rendimiento: 15.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Active 1,6 Lts. e-Hdi SOHC (112 hp) Sation Wagon 5P. T/M Motor Diesel",
    Nox: 0.1365,
    Rendimiento: 16.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Blue HDi 120 HP 1,6 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0255,
    Rendimiento: 17.8
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Blue HDi 130 Hp 1,5 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.01413,
    Rendimiento: 18.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Blue HDi 180 hp 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.055,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 BlueHDi 150HP 2,0 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.0685,
    Rendimiento: 14.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 Puretech 180 EAT8",
    Nox: 0.01944,
    Rendimiento: 15.5
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "5008 THP 165 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0191,
    Rendimiento: 9.6
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "508 RXH 2,0 Lts. Blue-Hdi 180 HP Station Wagon 5P. T/A Diesel",
    Nox: 0.04025,
    Rendimiento: 19.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Active Pack 2008 1,6 Lts. Blue-HDi 100hp Station Wagon 5P. T/M",
    Nox: 0.0416,
    Rendimiento: 20.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Allure 2008 1,6 Lts. Blue-HDi 100hp Station Wagon 5P. T/M",
    Nox: 0.0416,
    Rendimiento: 20.9
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "e-2008 ELECTRIC 5 Puertas T/A",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Nueva Tepee Outdoor Allure 1,6 Lts. HDi 92 HP Station Wagon 5P. 7 Asientos T/M Motor Diesel",
    Nox: 0.16427,
    Rendimiento: 16.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Rifter 1,5 Lts. Blue Hdi 130 Station Wagon 5P. T/A Diesel",
    Nox: 0.03873,
    Rendimiento: 17.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Rifter 1.2 Lts. Puretech 130 T/A",
    Nox: 0.02202,
    Rendimiento: 12.1
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Rifter Blue HDi 100 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.0132,
    Rendimiento: 17.3
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Tepee Outdoor 1,6 Lts. HDi SWOHC 92 HP Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1589,
    Rendimiento: 15.2
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Tepee Outdoor Electric Station Wagon 6P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Peugeot",
    Tipo: "Station Wagon",
    Modelo: "Tepee Outdoor Full 1,6 Lts. HDi SWOHC 92 HP Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1589,
    Rendimiento: 15.2
  },
  {
    Marca: "Peugeot",
    Tipo: "SUV",
    Modelo: "3008 Active 1,6 Lts. e-Hdi 110hp SOHC Station Wagon Tipo SUV 5P. T/M Motor Diesel",
    Nox: 0.14529,
    Rendimiento: 15.4
  },
  {
    Marca: "Peugeot",
    Tipo: "SUV",
    Modelo: "3008 Premium 1,6 Lts. Hdi SOHC Station Wagon Tipo SUV 5P. T/M Motor Diesel",
    Nox: 0.14529,
    Rendimiento: 15.4
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Electric Power Chasis Cabina 2P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Electric Power Pick Up 2P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Electric Power Tolva 2P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxi 1,3 Lts. Chasis Cabina 2P. T/M Dual (Gasolina/GLP)",
    Nox: 0.0109,
    Rendimiento: 9.1
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxi Short Tipper 1,3 Lts. Pick Up 2P. T/M Dual (Gasolina/GLP)",
    Nox: 0.0109,
    Rendimiento: 9.1
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxi Tipper Long Deck 1,3 Lts. Pick Up 2P. T/M Dual (Gasolina/GLP)",
    Nox: 0.0109,
    Rendimiento: 9.1
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi Bifuel",
    Nox: 0.02103,
    Rendimiento: 9.2
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi Chasis Cabina 1,3 Lts. DOHC Pick Up 2P. T/M Motor Otto",
    Nox: 0.019,
    Rendimiento: 7.4
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi D 120 1,2 Lts. SOHC Chasis Cabina 2P. T/M Motor Diesel",
    Nox: 0.1073,
    Rendimiento: 14.5
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi Pick Up 1,3 Lts. DOHC Pick Up 2P. T/M Motor Otto",
    Nox: 0.019,
    Rendimiento: 7.4
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi Short Tipper 1,3 Lts. DOHC Pick Up 2P. T/M Motor Otto",
    Nox: 0.019,
    Rendimiento: 7.4
  },
  {
    Marca: "Piaggio",
    Tipo: "Camioneta",
    Modelo: "Porter Maxxi Tipper Long Deck 1,3 Lts. DOHC Pick Up 2P. T/M Motor Otto",
    Nox: 0.019,
    Rendimiento: 7.4
  },
  {
    Marca: "Piaggio",
    Tipo: "Electrico",
    Modelo: "Porter Electric Power Van Glass 5P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Piaggio",
    Tipo: "Furgon cerrado",
    Modelo: "Porter Electric Power Furgon 5P. Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "718 Boxster 2,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.03213,
    Rendimiento: 11.2
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "718 Boxster 2,0 Lts. Cabriolet 2P. T/M",
    Nox: 0.02664,
    Rendimiento: 10.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "718 Boxster GTS 2,5 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.04193,
    Rendimiento: 9.2
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "718 Boxster Spyder",
    Nox: 0.0283,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "718 Boxter S 2,5 Lts. Cabriolet 2P. T/A",
    Nox: 0.03655,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 3,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.02036,
    Rendimiento: 10.4
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4 992 Cabriolet",
    Nox: 0.00395,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4 GTS 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01185,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4 GTS Cabrio 3,8 Lts. Cabriolet 2P. 4x4 T/A Otto",
    Nox: 0.01576,
    Rendimiento: 8
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4S 3,0 Lts. Cabriolet 2P. T/A 4x4 Motor Otto",
    Nox: 0.01927,
    Rendimiento: 9.8
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4S 3,8 Lts. DOHC Cabriolet 2P. T/A 4x4 Motor Otto",
    Nox: 0.02335,
    Rendimiento: 7.8
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 4S 992 3,0 Lts. Cabriolet 2P. T/A 4x4 Otto",
    Nox: 0.01085,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera 992 Cabriolet",
    Nox: 0.00395,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera GTS 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01185,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera GTS Cabrio 3,8 Lts. Cabriolet 2P. 4x2 T/A Otto",
    Nox: 0.01576,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera S 3,0 Lts. Cabriolet 2P T/A Motor Otto",
    Nox: 0.01927,
    Rendimiento: 10.2
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera S 3,8 Lts. DOHC Cabriolet 2P. T/A 4x2 Motor Otto",
    Nox: 0.02335,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Carrera S 992 3,0 Lts. Cabriolet 2P. T/A 4x2 Otto",
    Nox: 0.01085,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Targa 4 GTS 3,0 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.01185,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Targa 4S 3,0 Lts. Cabriolet 2P. T/A",
    Nox: 0.01927,
    Rendimiento: 9.8
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Targa 4S 3,8 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.01268,
    Rendimiento: 7.9
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Turbo 3,8 Cabriolet 2P. 4x4 T/A",
    Nox: 0.02297,
    Rendimiento: 8.3
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Turbo 3,8 Lts. DOHC Cabriolet 2P. T/A 4x4 Motor Otto",
    Nox: 0.0135,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Turbo S 3,8 Lts. Cabriolet 2P. T/A",
    Nox: 0.02297,
    Rendimiento: 8.3
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Turbo S 3.8 Lts., DOHC Cabriolet 2P. T/A 4x4 Motor Otto",
    Nox: 0.0135,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "911 Turbo S Cabriolet 992",
    Nox: 0.00683,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "918 Spyder 4,6 Lts. DOHC Cabriolet 2P. T/A Vehiculo Hibrido Electrico",
    Nox: 0.01181,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "Boxster 981 2,7 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.01252,
    Rendimiento: 9.4
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "Boxster GTS 3,4 Lts. DOHC Cabriolet 2P T/A Motor Otto",
    Nox: 0.02105,
    Rendimiento: 8.8
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "Boxster S 3,4 Lts. DOHC Cabriolet 2P T/A Motor Otto",
    Nox: 0.02225,
    Rendimiento: 8.9
  },
  {
    Marca: "Porsche",
    Tipo: "Cabriolet",
    Modelo: "Boxter Spyder 3,8 Lts. Cabriolet 2P. T/M Motor Otto",
    Nox: 0.00647,
    Rendimiento: 6.8
  },
  {
    Marca: "Porsche",
    Tipo: "Convertible",
    Modelo: "718 Boxster GTS 4.0",
    Nox: 0.00722,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Convertible",
    Modelo: "911 Speedster 991 II",
    Nox: 0.01552,
    Rendimiento: 4.9
  },
  {
    Marca: "Porsche",
    Tipo: "Convertible",
    Modelo: "911 Turbo 992",
    Nox: 0.0139,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "718 Cayman 2,0 Lts. Coupe 2P. T/A",
    Nox: 0.03213,
    Rendimiento: 11.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "718 Cayman GT4",
    Nox: 0.0283,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "718 Cayman GTS 2,5 Lts. Coupe 3P. T/A Otto",
    Nox: 0.04193,
    Rendimiento: 9.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "718 Cayman GTS 4.0",
    Nox: 0.00722,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "718 Cayman S 2,5 Lts. Coupe 2P. T/A",
    Nox: 0.03655,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 3,0 Lts. Coupe 2P. T/A",
    Nox: 0.02036,
    Rendimiento: 10.6
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4 992",
    Nox: 0.00395,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4 GTS 3,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01185,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4 GTS 3,8 Lts. Coupe 2P. 4x4 T/A Otto",
    Nox: 0.01576,
    Rendimiento: 8
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4S 3,0 Lts. Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.01927,
    Rendimiento: 10.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4S 3,8 Lts. DOHC Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.02335,
    Rendimiento: 7.9
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4S 992 3,0 Lts. Coupe 2P. T/A 4x4 Otto",
    Nox: 0.01085,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 4S Coupe 3,8 Lts. 2P. T/M Otto",
    Nox: 0.01398,
    Rendimiento: 7
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera 992",
    Nox: 0.00395,
    Rendimiento: 6.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera GTS 3,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01185,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera GTS 3,8 Lts. Coupe 2P. 4x2 T/A Otto",
    Nox: 0.01576,
    Rendimiento: 8.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera S 3,0 Lts. Coupe 2P. T/A Motor Otto",
    Nox: 0.01927,
    Rendimiento: 10.3
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera S 3,8 Lts. DOHC Coupe 2P. T/A 4x2 Motor Otto",
    Nox: 0.02335,
    Rendimiento: 8.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera S 992 3,0 Lts. Coupe 2P. T/A 4x2 Otto",
    Nox: 0.01085,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Carrera S Coupe 3,8 Lts. 2P. T/M Otto",
    Nox: 0.01398,
    Rendimiento: 7.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT2 RS 991 II 3,8 Lts. Coupe 2P. T/A Motor Otto",
    Nox: 0.0288,
    Rendimiento: 5.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 3,8 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.01737,
    Rendimiento: 5.3
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.01571,
    Rendimiento: 5.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 4,0 Lts. Coupe 2P. T/M",
    Nox: 0.01701,
    Rendimiento: 5.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 MT 911 II 4,0 Lts. Coupe 2P.",
    Nox: 0.01701,
    Rendimiento: 5.1
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 MT 991 II 4,0 Lts. Coupe 2P T/M Otto",
    Nox: 0.01701,
    Rendimiento: 5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 RS 4,0 Lts. Coupe 2P. T/A Motor Otto",
    Nox: 0.02065,
    Rendimiento: 5.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 RS 991 II 4,0 Lts. Coupe 2P. T/A Otto",
    Nox: 0.0178,
    Rendimiento: 4.4
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 GT3 Touring 4,0 Lts. Coupe 2P. T/M",
    Nox: 0.01701,
    Rendimiento: 5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 R 4,0 Lts. Coupe 2P. T/M Otto",
    Nox: 0.02201,
    Rendimiento: 5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo 3,8 Coupe 2P. 4x4 T/A",
    Nox: 0.02297,
    Rendimiento: 8.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo 3,8 Lts. DOHC Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.0135,
    Rendimiento: 7.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo Coupe 992",
    Nox: 0.0139,
    Rendimiento: 6.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo S 3,8 Lts. Coupe 2P. T/A",
    Nox: 0.02297,
    Rendimiento: 8.5
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo S 3.8 Lts., DOHC Coupe 2P. T/A 4x4 Motor Otto",
    Nox: 0.0135,
    Rendimiento: 7.6
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "911 Turbo S 992",
    Nox: 0.00683,
    Rendimiento: 6.2
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "Cayman GT4 3,8 Lts. Coupe 3P. T/M Motor Otto",
    Nox: 0.00647,
    Rendimiento: 6.8
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "Cayman GTS 3,5 Lts. DOHC Coupe 3P. T/A MotorOtto",
    Nox: 0.02105,
    Rendimiento: 8.8
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "Cayman PDK 2,7 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.01252,
    Rendimiento: 9.4
  },
  {
    Marca: "Porsche",
    Tipo: "Coupe",
    Modelo: "Cayman S PDK 3,4 Lts. DOHC Coupe 3P. T/A Motor Otto",
    Nox: 0.02225,
    Rendimiento: 8.9
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera 3,0 Lts. V6 DOHC Sedan 4P. T/A Motor Diesel",
    Nox: 0.12863,
    Rendimiento: 12.3
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera 4 E-Hybrid G2 2,9 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01793,
    Rendimiento: 14.1
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera 4 E-Hybrid G2 II",
    Nox: 0.01465,
    Rendimiento: 11.7
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera 4S 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01593,
    Rendimiento: 8.2
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera 4S G2 2,9 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01053,
    Rendimiento: 9.9
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera G2 3,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00585,
    Rendimiento: 7.8
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera GTS 4,8 Lts. DOHC Sedan 5P. T/A Motor Otto",
    Nox: 0.03959,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera S 3,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01593,
    Rendimiento: 8.4
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera S E-Hybrid 3,0 Lts. DOHC Sedan 5P. T/A Vehiculo Hibrido Electrico",
    Nox: 0.0182,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera Turbo 4,8 Lts. DOHC Sedan 4P. 4x4 T/A Motor Otto",
    Nox: 0.03267,
    Rendimiento: 6.7
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera Turbo G2 4,0 Lts. Sedan 5P. T/A Otto",
    Nox: 0.04313,
    Rendimiento: 7.8
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera Turbo S G2 II",
    Nox: 0.01228,
    Rendimiento: 6
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Panamera V6 3,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00774,
    Rendimiento: 8.9
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Taycan",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Taycan 4S",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Taycan Turbo",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Sedan",
    Modelo: "Taycan Turbo S",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "971 Panamera 4 Sport Turismo G2 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01035,
    Rendimiento: 10.1
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne (9YA) 3,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0129,
    Rendimiento: 9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne 3,6 Lts. DOHC Station Wagon 5P. T/A 4x4 Mottor Otto",
    Nox: 0.018,
    Rendimiento: 7.6
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Coupe E3",
    Nox: 0.0129,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne E-Hibrid E3 3,0 Lts. Station Wagon 5P. T/A Hibrido",
    Nox: 0.01956,
    Rendimiento: 13.6
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne E-Hybrid Coupe E3",
    Nox: 0.01507,
    Rendimiento: 11
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne E2 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.128,
    Rendimiento: 11.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne E2 3,0 Lts. V6 DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.128,
    Rendimiento: 11.6
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne GTS Coupe E3",
    Nox: 0.01231,
    Rendimiento: 5.5
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne GTS E2 3,6 Lts. Station Wagon 5P. 4x4 T/A Otto",
    Nox: 0.01079,
    Rendimiento: 7.8
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne GTS E3",
    Nox: 0.01231,
    Rendimiento: 5.5
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S (9YAS) 2,9 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0135,
    Rendimiento: 8.5
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S 4,1 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.14691,
    Rendimiento: 9.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S 4,8 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.01283,
    Rendimiento: 6.8
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S Coupe E3",
    Nox: 0.0135,
    Rendimiento: 8.5
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S E-Hybrid 3,0 Lts. Station Wagon 4x4 5P. T/A Hibrido Electrico",
    Nox: 0.01391,
    Rendimiento: 0
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne S E2 3,6 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.01936,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo (9YAT) 4,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02817,
    Rendimiento: 6.2
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo 4,8 Lts. DOHC Station Wagon 5P. T/A 4x4 Mottor Otto",
    Nox: 0.02146,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo Coupe E3",
    Nox: 0.02817,
    Rendimiento: 6.2
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo E2 4,8 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.02967,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo S 4,8 Lts. DOHC Station Wagon 5P. T/A Mottor Otto",
    Nox: 0.01949,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo S E-Hybrid E3",
    Nox: 0.01208,
    Rendimiento: 9.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne Turbo S E2 4,8 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02907,
    Rendimiento: 6.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Cayenne V6 E2 3,6 Lts. Station Wagon 5P. 4x4 T/A Otto",
    Nox: 0.00544,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan GTS",
    Nox: 0.01214,
    Rendimiento: 7.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan GTS 3,0 Station Wagon 5P. 4x4 T/A",
    Nox: 0.00724,
    Rendimiento: 8.8
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan R4 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.03984,
    Rendimiento: 11.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan R4 2,0 Lts. Station Wagon 5P T/A 4x4 Otto",
    Nox: 0.01021,
    Rendimiento: 9.3
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan R4 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01557,
    Rendimiento: 11.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan S 3,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00345,
    Rendimiento: 8.8
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan S 3,0 Lts. Station Wagon 5P T/A 4x4 Otto",
    Nox: 0.01197,
    Rendimiento: 8.6
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan S 3,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.14597,
    Rendimiento: 14.9
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan Turbo",
    Nox: 0.00982,
    Rendimiento: 8.2
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan Turbo 3,6 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.00416,
    Rendimiento: 8.7
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Macan Turbo Performance Package 3,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0088,
    Rendimiento: 8.1
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Panamera G2 Turbo Sport Turismo 4,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.04313,
    Rendimiento: 7.8
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Panamera GTS G2",
    Nox: 0.01157,
    Rendimiento: 6.4
  },
  {
    Marca: "Porsche",
    Tipo: "Station Wagon",
    Modelo: "Panamera Turbo S E-Hybrid Sport Turismo 4,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02187,
    Rendimiento: 11.7
  },
  {
    Marca: "Proton",
    Tipo: "Hatch Back",
    Modelo: "Preve 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0058,
    Rendimiento: 8.4
  },
  {
    Marca: "Proton",
    Tipo: "Sedan",
    Modelo: "Preve 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0058,
    Rendimiento: 8.4
  },
  {
    Marca: "Proton",
    Tipo: "Sedan",
    Modelo: "Preve 1,6 Lts. Sedan 4P. T/M",
    Nox: 0.0066,
    Rendimiento: 9.8
  },
  {
    Marca: "Proton",
    Tipo: "Station Wagon",
    Modelo: "Exora 1,6 Lts. Station Wagon 5P. T/A",
    Nox: 0.00945,
    Rendimiento: 6.9
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "1000 Rebel",
    Nox: 0.1577,
    Rendimiento: 9.8
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "1500 Big Horn Crew Cab 4x4",
    Nox: 0.02168,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab 3,6 Lts. Camioneta 4P. T/A",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab 3,6 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab Laramie 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab Laramie 3,0 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab Laramie 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab SLT 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab SLT 3,0 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab SLT 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab Sport 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab ST 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab ST 3,0 Lts. Pick Up. 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab ST 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Doble Cabina 4P. T/A 4x2 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Crew Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "1500 Limited Crew Cab 4x4",
    Nox: 0.02168,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab Laramie 3,0 Lts. 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab Laramie 3,0 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab Laramie 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab SLT 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab SLT 3,0 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab SLT 3,6 Lts. Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab SLT 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab Sport 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab ST 3,0 Lts. Pick Up 4P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab ST 3,0 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab ST 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Doble Cabina 4P. T/A 4x2 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Quad Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Rebel 3,6 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Rebel Crew Cab 5,7 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0031,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Rebel Crew Cab 5,7 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0031,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Rebel Crew Cab. 5,7 Lts. Camioneta Doble Cab. T/A 4x4",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Rebelblack Edition 5.7L.",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab Laramie 3,0 Lts. Pick Up 2P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab Laramie 3,0 Lts. Pick Up 2P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab Laramie 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab SLT 3,0 Lts. Pick Up 2P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab SLT 3,0 Lts. Pick Up 2P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab SLT 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab Sport 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab ST 3,0 Lts. Pick Up 2P. T/A 4x2 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab ST 3,0 Lts. Pick Up 2P. T/A 4x4 Diesel",
    Nox: 0.0233,
    Rendimiento: 7.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab ST 5,7 Lts. OHV Pick Up Doble Cabina 4P. T/A 4x4 Motor Otto",
    Nox: 0.0109,
    Rendimiento: 5.2
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Cabina Simple 2P. T/A 4x2 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "1500 Reg Cab ST/Sport/SLT/ Laramie 3,6 Lts. Pick Up Cabina Simple 2P. T/A 4x4 Motor Otto",
    Nox: 0.0087,
    Rendimiento: 6.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "700 Bighorn CD 1.4",
    Nox: 0.0075,
    Rendimiento: 10.5
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "700 Laramie CD 1,3",
    Nox: 0.0056,
    Rendimiento: 10.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "700 SLT CD 1.4",
    Nox: 0.0075,
    Rendimiento: 10.5
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "700 SLT CS 1.4",
    Nox: 0.0075,
    Rendimiento: 10.5
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "RAM 1000",
    Nox: 0.1577,
    Rendimiento: 9.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1000 1,8 Lts. Camioneta Doble Cabina 4P. T/A Otto",
    Nox: 0.0103,
    Rendimiento: 9.3
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1000 Big Horn 1,8 Lts. Camioneta Doble Cabina 4P. T/A Otto",
    Nox: 0.0103,
    Rendimiento: 9.3
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "RAM 1000 Laramie",
    Nox: 0.1577,
    Rendimiento: 9.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1200 GLS 2,4 Lts. Camioneta 4P. T/A 4x2 Diesel",
    Nox: 0.1854,
    Rendimiento: 10.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1200 GLS 2,4 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.1854,
    Rendimiento: 10.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1200 GLS 2,4 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.1583,
    Rendimiento: 10.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1200 GLS 2,4 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.1583,
    Rendimiento: 10.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab , 4x4",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab 5,7 Lts. Camioneta 4P T/A 4x2 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab 5,7 Lts. Camioneta 4P T/A 4x4 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Crew Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Quad Cab",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Quad Cab 5,7 Lts. Camioneta 4P T/A 4x4 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Quad Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Big Horn Quad Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Crew Cab",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Crew Cab 5,7 Lts. Camioneta 4P T/A 4x4 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Crew Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Quad Cab",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Quad Cab 5,7 Lts. Camioneta 4P T/A 4x4 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Laramie Quad Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Limited",
    Nox: 0.00708,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Limited 5,7 Lts. Camioneta 4P. T/A 4x4 Otto",
    Nox: 0.00584,
    Rendimiento: 4.8
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Limited Crew Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 1500 Rebel Crew Cab 5,7 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Otto",
    Nox: 0.0075,
    Rendimiento: 4.7
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 700 Express CC 8v 1,4 Lts. Camioneta Cabina Simple 2P. T/M Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 700 Express CD 1,4 Lts. Camioneta Doble Cabina 3P. T/M Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM 700 Express CE 1,4 Lts. Camioneta Cabina Extendida 2P. T/M Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "Ram 700 SLT CD 1,4 Lts. Camioneta Doble Cabina 3P. T/M Otto",
    Nox: 0.017,
    Rendimiento: 10
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM Club Cab CD 1,6 Lts. Camioneta Cabina Doble 3P. T/M Otto",
    Nox: 0.0241,
    Rendimiento: 9.6
  },
  {
    Marca: "Ram",
    Tipo: "Camioneta",
    Modelo: "RAM Club Cab CE 1,6 Lts. Camioneta Cabina Extendida 2P. T/M Otto",
    Nox: 0.0241,
    Rendimiento: 9.6
  },
  {
    Marca: "RAM",
    Tipo: "Camioneta",
    Modelo: "Rebel 1500 4WD",
    Nox: 0.02381,
    Rendimiento: 7.4
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO 1,6 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2018,
    Rendimiento: 13.7
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO CORTO 1,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1776,
    Rendimiento: 13.5
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO CORTO TECHO ALTO 1,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1844,
    Rendimiento: 13.7
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO LARGE  1,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1776,
    Rendimiento: 13.5
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO LARGE TECHO ALTO 1,3 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1844,
    Rendimiento: 13.7
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 1000 CARGO XL 1,6 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.2018,
    Rendimiento: 13.7
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 700 CITY 1,2 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1438,
    Rendimiento: 14.6
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 700 CITY 1,4 Lts. Furgon 5P. T/M Otto",
    Nox: 0.0131,
    Rendimiento: 9.4
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 700 CITY 95 CV 1,2 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1421,
    Rendimiento: 18.9
  },
  {
    Marca: "Ram",
    Tipo: "Furgon Cerrado",
    Modelo: "RAM VAN 700 RAPID 1,4 Lts. Furgon 4P. T/M Otto",
    Nox: 0.01105,
    Rendimiento: 10.2
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Alaskan 2,3 Lts. Pick Up Doble Cabina 4P. T/A 4x2 Diesel",
    Nox: 0.2007,
    Rendimiento: 10.8
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Alaskan 2,3 Lts. Pick Up Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.2007,
    Rendimiento: 10.8
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Alaskan 2,3 Lts. Pick Up Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.2031,
    Rendimiento: 13.1
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Alaskan 2,3 Lts. Pick Up Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.2031,
    Rendimiento: 13.1
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Oroch 1,6 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.0167,
    Rendimiento: 9.2
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Oroch 1.6 T/M",
    Nox: 0.02147,
    Rendimiento: 10.3
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Oroch 2,0 Lts. Pick Up 4P. T/M 4x4 Otto",
    Nox: 0.019,
    Rendimiento: 7.4
  },
  {
    Marca: "Renault",
    Tipo: "Camioneta",
    Modelo: "Oroch 2,0 Lts. Pick Up 4P. T/M Otto",
    Nox: 0.01655,
    Rendimiento: 8.9
  },
  {
    Marca: "Renault",
    Tipo: "Coupe",
    Modelo: "Megane III RS 2,0 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.03161,
    Rendimiento: 8.7
  },
  {
    Marca: "Renault",
    Tipo: "Coupe",
    Modelo: "Megane III RS Trophy 2,0 Lts. DOHC Coupe 3P. T/M Motor Otto",
    Nox: 0.01755,
    Rendimiento: 8.8
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "Fluence ZE Sedan 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "Kangoo ZE Furgon 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "Kangoo ZE Furgon Chasis Largo 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "Kangoo ZE Station Wagon 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "Kangoo ZE Station Wagon Chasis Largo 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Electrico",
    Modelo: "ZOE ZE Hatch Back 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Furgon",
    Modelo: "Kangoo 1,5 dCi SOHC T/M",
    Nox: 0.12206,
    Rendimiento: 17
  },
  {
    Marca: "Renault",
    Tipo: "Furgon cerrado",
    Modelo: "Dokker 1,5 Lts. SOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.1372,
    Rendimiento: 18
  },
  {
    Marca: "Renault",
    Tipo: "Furgon cerrado",
    Modelo: "Dokker 1,6 Lts. SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.00921,
    Rendimiento: 9.9
  },
  {
    Marca: "Renault",
    Tipo: "Furgon cerrado",
    Modelo: "Kangoo 1,5 dCi SOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.12206,
    Rendimiento: 16.9
  },
  {
    Marca: "Renault",
    Tipo: "Furgon Cerrado",
    Modelo: "Kangoo ZE Furgon 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Furgon Cerrado",
    Modelo: "Kangoo ZE Furgon Largo 5P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Furgon cerrado",
    Modelo: "Master 2,3 Lts. DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.232,
    Rendimiento: 10.4
  },
  {
    Marca: "Renault",
    Tipo: "Furgon cerrado",
    Modelo: "Master L2H2 2,3 Lts. DOHC Furgon 5P. T/M Motor Diesel",
    Nox: 0.232,
    Rendimiento: 10.4
  },
  {
    Marca: "Renault",
    Tipo: "Furgon",
    Modelo: "Express 1.5 T/M",
    Nox: 0.12159,
    Rendimiento: 17.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Captur 0,9 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0298,
    Rendimiento: 11.9
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Clio 1.0 Turbo T/M",
    Nox: 0.00987,
    Rendimiento: 13
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Clio IV 0,9 Lts., Turbo DOHC HatchBack 5P. T/M Motor Otto",
    Nox: 0.01595,
    Rendimiento: 15.1
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Clio IV 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0099,
    Rendimiento: 13
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Clio IV RS 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0195,
    Rendimiento: 12.5
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Clio RS Sport 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01574,
    Rendimiento: 11.6
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0073,
    Rendimiento: 9.3
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane III 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.02519,
    Rendimiento: 11.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane III 2,0 Lts. DOHC Hatch Back 5P. T/A CVT Motor Otto",
    Nox: 0.007,
    Rendimiento: 9.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane III 2,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0044,
    Rendimiento: 9.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane RS 1,8 Lts. Hatch Back 4P. T/A Otto",
    Nox: 0.02185,
    Rendimiento: 9.1
  },
  {
    Marca: "Renault",
    Tipo: "Hatch Back",
    Modelo: "Megane RS 1,8 Lts. Hatch Back 4P. T/M Otto",
    Nox: 0.0166,
    Rendimiento: 8.8
  },
  {
    Marca: "Renault",
    Tipo: "Hatchback",
    Modelo: "Clio IV 0,9 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.0177,
    Rendimiento: 13.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatchback",
    Modelo: "Clio IV 1,2 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.00987,
    Rendimiento: 13.9
  },
  {
    Marca: "Renault",
    Tipo: "Hatchback",
    Modelo: "Kwid 1.0 T/M",
    Nox: 0.01355,
    Rendimiento: 14.2
  },
  {
    Marca: "Renault",
    Tipo: "Hatchback",
    Modelo: "Megane RS 1.8 T/A",
    Nox: 0.01285,
    Rendimiento: 8.8
  },
  {
    Marca: "Renault",
    Tipo: "Hatchback",
    Modelo: "Zoe Neo T/A",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Fluence 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.02519,
    Rendimiento: 11.2
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Fluence 2,0 Lts. DOHC Sedan 4P. T/A CVT Motor Otto",
    Nox: 0.007,
    Rendimiento: 9.2
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Fluence 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0073,
    Rendimiento: 9.3
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Fluence 2,0 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0044,
    Rendimiento: 9.2
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Latitud 3,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0037,
    Rendimiento: 6.7
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "New Symbol GLP 1,6 Lts. Sedan 4P. T/M Dual (Gasolina/GLP)",
    Nox: 0.0184,
    Rendimiento: 9.9
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Symbol 1,6 Lts. SOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0131,
    Rendimiento: 10.2
  },
  {
    Marca: "Renault",
    Tipo: "Sedan",
    Modelo: "Symbol 1.6 T/M",
    Nox: 0.0255,
    Rendimiento: 9.6
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Arkana 1.3 Turbo T/A",
    Nox: 0.01,
    Rendimiento: 12.8
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Captur 1,2 Lts., Turbo DOHC Station 5P. T/A Motor Otto",
    Nox: 0.00685,
    Rendimiento: 13.2
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Captur 1,5 Lts. SOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1102,
    Rendimiento: 23.7
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Duster 1,6 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.019,
    Rendimiento: 9.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Duster 1,6 Lts. Station Wagon 5P. T/M Motor Otto",
    Nox: 0.01765,
    Rendimiento: 9.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Duster 1.6 T/M",
    Nox: 0.0265,
    Rendimiento: 11.8
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Duster 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.0186,
    Rendimiento: 8.8
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Duster 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.0179,
    Rendimiento: 7.2
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.10967,
    Rendimiento: 11.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,0 Lts. DOHC Station Wagon 5P. T/A Tipo CVT Motor Otto",
    Nox: 0.00605,
    Rendimiento: 8.9
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Diesel",
    Nox: 0.12,
    Rendimiento: 14.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,0 Lts. Station Wagon 5P. T/M",
    Nox: 0.0065,
    Rendimiento: 8.9
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts. DOHC Station 5P. T/M Motor Otto",
    Nox: 0.0053,
    Rendimiento: 8.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.002,
    Rendimiento: 8.7
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00265,
    Rendimiento: 9.3
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00265,
    Rendimiento: 9.3
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts., DOHC Station 5P, T/M 4x4 Motor Otto",
    Nox: 0.00795,
    Rendimiento: 8.1
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2,5 Lts., DOHC Station Wagon 5P, T/A 4x4 Motor Otto",
    Nox: 0.00195,
    Rendimiento: 7.8
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2.5 TA 4x2",
    Nox: 0.00635,
    Rendimiento: 9
  },
  {
    Marca: "Renault",
    Tipo: "Station Wagon",
    Modelo: "Koleos 2.5 TA 4x4",
    Nox: 0.00635,
    Rendimiento: 9
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Cabriolet",
    Modelo: "Dawn 6,6 Lts. Cabriolet 2P. T/A Otto",
    Nox: 0.0283,
    Rendimiento: 4.4
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Cabriolet",
    Modelo: "Phantom 6,7 Lts. DOHC Cabriolet 2P. T/A Motor Otto",
    Nox: 0.0187,
    Rendimiento: 4.4
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Coupe",
    Modelo: "Phantom 6,7 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.0187,
    Rendimiento: 4.4
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Sedan",
    Modelo: "Ghost 6,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0099,
    Rendimiento: 4.9
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Sedan",
    Modelo: "Ghost II EWB 6,6 Lts. Sedan T/A",
    Nox: 0.0309,
    Rendimiento: 4.5
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Sedan",
    Modelo: "Phantom 6,7 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0187,
    Rendimiento: 4.4
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Sedan",
    Modelo: "Wraith 6,6 Lts DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0228,
    Rendimiento: 4.6
  },
  {
    Marca: "Rolls-Royce",
    Tipo: "Station Wagon",
    Modelo: "Cullinan",
    Nox: 0.00976,
    Rendimiento: 4.4
  },
  {
    Marca: "Seat",
    Tipo: "Hatch Back",
    Modelo: "Ibiza 1,6 Lts. Hatch Back 5P T/A Otto",
    Nox: 0.0069,
    Rendimiento: 10.3
  },
  {
    Marca: "Seat",
    Tipo: "Hatch Back",
    Modelo: "Ibiza 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0043,
    Rendimiento: 12
  },
  {
    Marca: "Seat",
    Tipo: "Hatch Back",
    Modelo: "Leon 1,4 Lts. Hatch Back 5P T/M Otto",
    Nox: 0.0144,
    Rendimiento: 13.3
  },
  {
    Marca: "Seat",
    Tipo: "Hatch Back",
    Modelo: "Leon Cupra 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0108,
    Rendimiento: 9.4
  },
  {
    Marca: "Seat",
    Tipo: "Hatchback",
    Modelo: "Leon 1.4 TSI AT8 150 CV",
    Nox: 0.03194,
    Rendimiento: 14.5
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Arona 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00425,
    Rendimiento: 11.1
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Ateca 1,4 Lts. Station Wagon 5P T/A 4x4 Otto",
    Nox: 0.01392,
    Rendimiento: 13.5
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Ateca 1.4 TSI AT 4x2",
    Nox: 0.0294,
    Rendimiento: 13.3
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Cupra Ateca 2.0 AT 4x4",
    Nox: 0.01805,
    Rendimiento: 11.5
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Cupra Ateca FL 2.0 AT 4x4",
    Nox: 0.00812,
    Rendimiento: 11
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Leon 1,4 Lts. Station Wagon 5P T/M Otto",
    Nox: 0.0144,
    Rendimiento: 13.3
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Leon Cupra 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0108,
    Rendimiento: 9.4
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Tarraco 1.4 TSI AT 4x2 (5 asientos)",
    Nox: 0.0289,
    Rendimiento: 10.4
  },
  {
    Marca: "Seat",
    Tipo: "Station Wagon",
    Modelo: "Tarraco 1.4 TSI AT 4x2 (7 asientos)",
    Nox: 0.0289,
    Rendimiento: 10.4
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Citigo 1,0 Lts. DOHC Hatch Back 3P. T/M Motor CHYB Otto",
    Nox: 0.00771,
    Rendimiento: 18.9
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.01685,
    Rendimiento: 14.7
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0161,
    Rendimiento: 15.3
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01285,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0116,
    Rendimiento: 14
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0113,
    Rendimiento: 13.5
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,2 Lts. TDI DOHC Hatch Back 5P. T/M Motor CFWA Diesel",
    Nox: 0.12449,
    Rendimiento: 19.6
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,2 Lts. TFS SOHC Hatch Back 5P. T/M Motor CBZA Otto",
    Nox: 0.01024,
    Rendimiento: 14.7
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,4 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.0595,
    Rendimiento: 17.7
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,4 Lts. T-FSI DOHC Hatch Back 5P. T/A Motor CTHE Otto",
    Nox: 0.0185,
    Rendimiento: 11.7
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia 1,6 Lts. TDI DOHC Hatch Back 5P. T/M Motor CAYC Diesel",
    Nox: 0.1264,
    Rendimiento: 15.8
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia Montecarlo 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0271,
    Rendimiento: 16.4
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Fabia MSI 55 KW  Hatchback",
    Nox: 0.0126,
    Rendimiento: 15.3
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0167,
    Rendimiento: 14.3
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0196,
    Rendimiento: 14.6
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid 1,2 Lts. TSI SOHC Hatch Back 5P. T/M Motor CVZB Otto",
    Nox: 0.02163,
    Rendimiento: 14.5
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0138,
    Rendimiento: 14.9
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid Spaceback 1,4 Lts. TSI DOHC Hatch Back 5P. T/A Motor CAXA Otto",
    Nox: 0.01791,
    Rendimiento: 13.2
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid Spaceback 1,6 Lts. TDI DOHC Hatch Back 5P. T/A Motor CAYB Diesel",
    Nox: 0.11132,
    Rendimiento: 17.2
  },
  {
    Marca: "Skoda",
    Tipo: "Hatch Back",
    Modelo: "Rapid Spaceback 1,6 Lts. TDI DOHC Hatch Back 5P. T/M Motor CAYB Diesel",
    Nox: 0.13399,
    Rendimiento: 17.2
  },
  {
    Marca: "Skoda",
    Tipo: "Hatchback",
    Modelo: "Kamiq 1.5 TSI AT",
    Nox: 0.02123,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Hatchback",
    Modelo: "Scala 1.5 TSI AT",
    Nox: 0.02123,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,4 Lts. Sedan 5P. T/A Otto",
    Nox: 0.0302,
    Rendimiento: 14.8
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,4 Lts. Sedan 5P. T/M Otto",
    Nox: 0.0165,
    Rendimiento: 13.5
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,4 Lts. TSI DOHC Sedan 4P. T/A 4x2 Motor CHPA Otto",
    Nox: 0.01338,
    Rendimiento: 15.9
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,4 Lts. TSI DOHC Sedan 4P. T/M 4x2 Motor CHPA Otto",
    Nox: 0.01594,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0228,
    Rendimiento: 17.4
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. Sedan 5P. T/A Diesel",
    Nox: 0.0466,
    Rendimiento: 19.7
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Sedan 4P. T/A Motor CAYC Diesel",
    Nox: 0.1182,
    Rendimiento: 15.4
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Sedan 4P. T/M Motor CAYC Diesel",
    Nox: 0.0926,
    Rendimiento: 14.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Sedan 5P. T/A 4x2 Motor CLHA Diesel",
    Nox: 0.1423,
    Rendimiento: 20.8
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Sedan 5P. T/M 4x2 Motor CLHA Diesel",
    Nox: 0.12266,
    Rendimiento: 21.7
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1.4 TSI AT",
    Nox: 0.03194,
    Rendimiento: 14.5
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 1.4 TSI MT",
    Nox: 0.02259,
    Rendimiento: 13.5
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 2,0 Lts. Sedan 4P. Diesel",
    Nox: 0.0632,
    Rendimiento: 19.6
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia 2,0 Lts. TDI DOHC Sedan 5P. T/A Motor CKFC Diesel",
    Nox: 0.1307,
    Rendimiento: 18.9
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia RS 2,0 Lts Sedan 4P. T/A Otto",
    Nox: 0.01215,
    Rendimiento: 9.8
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Octavia RS 2,0 Lts. TSI DOHC Sedan 5P. T/A Motor CHHB Otto",
    Nox: 0.02385,
    Rendimiento: 9.8
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,0 Lts. Sedan 5P. T/M Otto",
    Nox: 0.0167,
    Rendimiento: 14.3
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0196,
    Rendimiento: 14.6
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,2 Lts. TSI SOHC Sedan 4P. T/M Motor CVZB Otto",
    Nox: 0.02163,
    Rendimiento: 14.5
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0138,
    Rendimiento: 14.9
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,4 Lts. TSI DOHC Sedan 5P. T/A Motor CAXA Otto",
    Nox: 0.01791,
    Rendimiento: 13.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,6 Lts. TDI DOHC Sedan 4P. T/A Motor CAYB Diesel",
    Nox: 0.11132,
    Rendimiento: 17.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,6 Lts. TDI DOHC Sedan 4P. T/M Motor CAYB Diesel",
    Nox: 0.13399,
    Rendimiento: 17.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Rapid 1,6 Lts. TDI DOHC Sedan 5P. T/M Motor CAYC Diesel",
    Nox: 0.13399,
    Rendimiento: 17.2
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Superb 1,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0215,
    Rendimiento: 12.4
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "SuperB 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0343,
    Rendimiento: 16.5
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "SuperB 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0296,
    Rendimiento: 14.6
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "SuperB 2,0 Lts. TDI DOHC Sedan 4P. T/A Motor CFFB Diesel",
    Nox: 0.1747,
    Rendimiento: 12.3
  },
  {
    Marca: "Skoda",
    Tipo: "Sedan",
    Modelo: "Superb 3,6 Lts. V6 FSI 4Motion DOHC Sedan 4P. T/A Motor CDVA Otto",
    Nox: 0.01517,
    Rendimiento: 7.6
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Fabia 1,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01685,
    Rendimiento: 14.7
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Fabia 1,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01285,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Fabia 1,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0161,
    Rendimiento: 15.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Fabia MSI 55 KW  Station Wagon",
    Nox: 0.0126,
    Rendimiento: 15.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Karoq 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01709,
    Rendimiento: 12.7
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Karoq 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.02145,
    Rendimiento: 16.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Karoq 1.4 TSI AT",
    Nox: 0.02679,
    Rendimiento: 12.8
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Karoq 2,0 Lts. Station Wagon 4P. T/M Diesel",
    Nox: 0.03161,
    Rendimiento: 15.4
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 1,4 Lts. Station Wagon 5 Asientos 5P. T/A Otto",
    Nox: 0.01715,
    Rendimiento: 11.6
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 1,4 Lts. Station Wagon 7 Asientos 5P. T/A Otto",
    Nox: 0.01715,
    Rendimiento: 11.6
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 1,4 TSI DSG6",
    Nox: 0.02165,
    Rendimiento: 10.7
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 1,4 TSI DSG6 5Pas",
    Nox: 0.02165,
    Rendimiento: 10.7
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.03265,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 2,0 Lts. Station Wagon 5 asientos 5P. T/A 4x4 Otto",
    Nox: 0.01834,
    Rendimiento: 11
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.03265,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 2,0 Lts. Station Wagon 7 asientos 5P. T/A 4x4 Otto",
    Nox: 0.01834,
    Rendimiento: 11
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Kodiaq 2.0 TDI 200hp 4x4 AT",
    Nox: 0.01787,
    Rendimiento: 15.9
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0302,
    Rendimiento: 14.8
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0165,
    Rendimiento: 13.5
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,4 Lts. TSI DOHC Station Wagon 4P. T/A 4x2 Motor CHPA Otto",
    Nox: 0.01338,
    Rendimiento: 16.4
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,4 Lts. TSI DOHC Station Wagon 4P. T/M 4x2 Motor CHPA Otto",
    Nox: 0.01594,
    Rendimiento: 15.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,6 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0228,
    Rendimiento: 17.4
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,6 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0466,
    Rendimiento: 19.7
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Station Wagon 5P. T/A 4x2 Motor CLHA Diesel",
    Nox: 0.1423,
    Rendimiento: 19.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 1,6 Lts. TDI DOHC Station Wagon 5P. T/M 4x2 Motor CLHA Diesel",
    Nox: 0.12266,
    Rendimiento: 20.8
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia 2,0 Lts. TDI DOHC Station Wagon 5P. T/A Motor CKFC Diesel",
    Nox: 0.1307,
    Rendimiento: 18.9
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia Combi 1.4 TSI AT",
    Nox: 0.03194,
    Rendimiento: 14.5
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia Combi 1.4 TSI MT",
    Nox: 0.02259,
    Rendimiento: 13.5
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia RS 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01215,
    Rendimiento: 9.8
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia Scout 1,8 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.01178,
    Rendimiento: 12.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Octavia Scout 2,0 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.05156,
    Rendimiento: 17.9
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Superb 1,8 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0215,
    Rendimiento: 12.4
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "SuperB 2,0 Lts Station Wagon 5P. T/A Diesel",
    Nox: 0.0296,
    Rendimiento: 14.6
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "SuperB 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0343,
    Rendimiento: 16.5
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 1,2 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0115,
    Rendimiento: 14.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 1,2 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.012,
    Rendimiento: 14.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 1,2 Lts. TSI SOHC Station Wagon 5P. T/A Motor CBZB Otto",
    Nox: 0.02375,
    Rendimiento: 13.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 1,2 Lts. TSI SOHC Station Wagon 5P. T/M Motor CBZB Otto",
    Nox: 0.009,
    Rendimiento: 12.3
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 2,0 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.06435,
    Rendimiento: 15.9
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 2,0 Lts. TDI DOHC Station Wagon 5P. T/A 4x4 Motor CFHC Diesel",
    Nox: 0.11408,
    Rendimiento: 13.2
  },
  {
    Marca: "Skoda",
    Tipo: "Station Wagon",
    Modelo: "Yeti 2,0 Lts. TDI DOHC Station Wagon 5P. T/M Motor CFHA Diesel",
    Nox: 0.1423,
    Rendimiento: 13.9
  },
  {
    Marca: "Smart",
    Tipo: "Cabriolet",
    Modelo: "Fortwo Electric Drive Cabrio 2P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Smart",
    Tipo: "Hatch Back",
    Modelo: "ForFour 0,9 Lts. Hatch Back 5P. T/A",
    Nox: 0.01069,
    Rendimiento: 18.9
  },
  {
    Marca: "Smart",
    Tipo: "Hatch Back",
    Modelo: "Fortwo Brabus 0,9 Lts. Hatch Back 3P. T/A",
    Nox: 0.01957,
    Rendimiento: 19.2
  },
  {
    Marca: "Smart",
    Tipo: "Hatch Back",
    Modelo: "Fortwo Coupe 0,9 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.01871,
    Rendimiento: 19.6
  },
  {
    Marca: "Smart",
    Tipo: "Hatchback",
    Modelo: "EQ Fortwo",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Actyon Sport 2,2 Lts. Camioneta 4P. T/A 4x2 Diesel",
    Nox: 0.0441,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Actyon Sport 2,2 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.0809,
    Rendimiento: 9.7
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Actyon Sport 2,2 Lts. Camioneta 4P. T/M",
    Nox: 0.0414,
    Rendimiento: 11.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso 2,2 Lts. Camioneta Doble Cabina 4P. T/A 4x2 Diesel",
    Nox: 0.05111,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso 2,2 Lts. Camioneta Doble Cabina 4P. T/A 4x4 Diesel",
    Nox: 0.05111,
    Rendimiento: 9.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso 2,2 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.04823,
    Rendimiento: 10.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso 2,2 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.04823,
    Rendimiento: 10.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso Grand 4x2",
    Nox: 0.05395,
    Rendimiento: 10.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso Grand 4x2 AT",
    Nox: 0.05111,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Musso Grand 4x4",
    Nox: 0.05395,
    Rendimiento: 10.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "New Actyon Sport 2,0 Lts. XDI 16v DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2263,
    Rendimiento: 9.3
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "New Actyon Sport 2,0 Lts. XDI 16v DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.2263,
    Rendimiento: 9.3
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "New Actyon Sport XDI 2,0 Lts. 16v DOHC Pick Up Doble Cabina 4P. T/A 4x2 6 Velocidades Motor Diesel",
    Nox: 0.2245,
    Rendimiento: 8.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "New Actyon Sport XDI 2,0 Lts. 16v DOHC Pick Up Doble Cabina 4P. T/A 4x4 6 Velocidades Motor Diesel",
    Nox: 0.2245,
    Rendimiento: 8.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Camioneta",
    Modelo: "Ssangyong Actyon Sport 2,2 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.04,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Minibus",
    Modelo: "Stavic 2,0 Lts. DOHC (11 asientos) 5P. 4x2 T/A Motor Diesel",
    Nox: 0.2231,
    Rendimiento: 9.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Minibus",
    Modelo: "Stavic 2,0 Lts. DOHC (11 asientos) 5P. T/M Motor Diesel",
    Nox: 0.1835,
    Rendimiento: 9.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Minibus",
    Modelo: "Stavic 2,0 Lts. DOHC (9 asientos) 5P. 4x4 T/A Motor Diesel",
    Nox: 0.2231,
    Rendimiento: 9.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC 16v Station Wagon (Tipo Jeep) 5P. 4x2 T/A Motor Diesel",
    Nox: 0.13587,
    Rendimiento: 10.3
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC 16v Station Wagon (Tipo Jeep) 5P. 4x4 T/A Motor Diesel",
    Nox: 0.13587,
    Rendimiento: 10.3
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC Station Wagon (Tipo Jeep) 5P. 4x2 T/M Motor Diesel",
    Nox: 0.13283,
    Rendimiento: 12.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC Station Wagon (Tipo Jeep) 5P. 4x4 T/M Motor Diesel",
    Nox: 0.13283,
    Rendimiento: 12.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.0085,
    Rendimiento: 7.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00675,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00675,
    Rendimiento: 9.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,2 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.04322,
    Rendimiento: 11.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.04462,
    Rendimiento: 11.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,2 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.04587,
    Rendimiento: 14.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 2,2 Lts. Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.04587,
    Rendimiento: 13.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 4x2",
    Nox: 0.01165,
    Rendimiento: 12
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 4x2",
    Nox: 0.01179,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 4x4",
    Nox: 0.01165,
    Rendimiento: 12
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Korando 4x4",
    Nox: 0.01179,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando 4x2",
    Nox: 0.00934,
    Rendimiento: 12.7
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando 4x2",
    Nox: 0.01941,
    Rendimiento: 14.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando 4x4",
    Nox: 0.00934,
    Rendimiento: 12.7
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando 4x4",
    Nox: 0.01941,
    Rendimiento: 14.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando GLX 1,5T 6AT 2WD 6AB",
    Nox: 0.01165,
    Rendimiento: 12
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando GLX 1,5T 6MT 2WD 6AB",
    Nox: 0.01179,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando GLX 1,6TD 6AT 2WD 6AB",
    Nox: 0.00934,
    Rendimiento: 12.7
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando GLX 1.6TD 6MT 2WD 6AB",
    Nox: 0.01941,
    Rendimiento: 14.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando GLX FULL 1,6TD 6AT 2WD 6AB",
    Nox: 0.00934,
    Rendimiento: 12.7
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando Limited 1,5T 6AT 2WD 6AB",
    Nox: 0.01165,
    Rendimiento: 12
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Korando LX 1,5T 6MT 2WD",
    Nox: 0.01179,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,0 Lts. Station Wagon 4P. 7 Asientos T/A 4x2 Otto",
    Nox: 0.03115,
    Rendimiento: 6.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,0 Lts. Station Wagon 4P. 7 Asientos T/A 4x4 Otto",
    Nox: 0.03115,
    Rendimiento: 6.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,0 Lts. Station Wagon 4P. 7 Asientos T/M 4x2 Otto",
    Nox: 0.00975,
    Rendimiento: 7.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 4P. 5 Asientos T/M 4x2 Diesel",
    Nox: 0.01015,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 4P. 5 Asientos T/M 4x4 Diesel",
    Nox: 0.01015,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 4P. 7 Asientos T/M 4x2 Diesel",
    Nox: 0.01015,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 4P. 7 Asientos T/M 4x4 Diesel",
    Nox: 0.01015,
    Rendimiento: 9.4
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 5 Asientos 5P. T/A 4x2 Diesel",
    Nox: 0.0172,
    Rendimiento: 9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.0172,
    Rendimiento: 9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 7 Asientos 5P. T/A 4x2 Diesel",
    Nox: 0.0172,
    Rendimiento: 9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton 2,2 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.0172,
    Rendimiento: 9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton GLX 2.2 TD 8AT 2WD 6AB",
    Nox: 0.02484,
    Rendimiento: 8.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton Limited Plus 2.2 TD 8AT 4WD 9AB",
    Nox: 0.02484,
    Rendimiento: 8.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton LX 2.0T 6AT 2WD 6AB",
    Nox: 0.03115,
    Rendimiento: 6.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton LX 2.0T 6AT 4WD 6AB",
    Nox: 0.03115,
    Rendimiento: 6.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "New Rexton LX 2.0T 6MT 2WD 6AB",
    Nox: 0.00975,
    Rendimiento: 7.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,0 Lts. 16v DOHC Station Wagon 5P. 4x2 T/A Motor Diesel",
    Nox: 0.21258,
    Rendimiento: 9.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,0 Lts. 16v DOHC Station Wagon 5P. 4x2 T/M Motor Diesel",
    Nox: 0.21062,
    Rendimiento: 10.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,0 Lts. 16v DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.21258,
    Rendimiento: 9.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,0 Lts. 16v DOHC Station Wagon 5P. 4x4 T/M Motor Diesel",
    Nox: 0.21062,
    Rendimiento: 10.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,2 Lts. Station Wagon 4P. T/A 4x2 Diesel",
    Nox: 0.04284,
    Rendimiento: 10.6
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.049,
    Rendimiento: 10.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,2 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.04277,
    Rendimiento: 11.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Rexton W 2,2 Lts. Station Wagon 5P. T/M 4x4 Diesel",
    Nox: 0.04224,
    Rendimiento: 11.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,0 Lts. DOHC Station Wagon (9 asientos) 5P. T/M Motor Diesel",
    Nox: 0.1835,
    Rendimiento: 9.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,0 Lts. DOHC Station Wagon 5P. 4x2 T/A Motor Diesel",
    Nox: 0.2231,
    Rendimiento: 9.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Diesel",
    Nox: 0.2231,
    Rendimiento: 9.2
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,0 Lts. DOHC Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.1835,
    Rendimiento: 9.1
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,2 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.0432,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,2 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.0432,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Stavic 2,2 Lts. Station Wagon 5P. T/M 4x2 Diesel",
    Nox: 0.0362,
    Rendimiento: 10.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 4P. T/A 4x2 Otto",
    Nox: 0.01193,
    Rendimiento: 9.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 4P. T/A 4x4 Otto",
    Nox: 0.01193,
    Rendimiento: 9.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 4P. T/M 4x2 Diesel",
    Nox: 0.0282,
    Rendimiento: 15.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 4P. T/M 4x4 Diesel",
    Nox: 0.0282,
    Rendimiento: 15.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 5P T/M",
    Nox: 0.00355,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 5P. T/A 4x2 Diesel",
    Nox: 0.0253,
    Rendimiento: 12.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.0253,
    Rendimiento: 12.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01105,
    Rendimiento: 9.8
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli 1,6 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0071,
    Rendimiento: 10.3
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli Diesel 6AT 2WD",
    Nox: 0.0253,
    Rendimiento: 12.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli GLX 1.6 6MT 2WD",
    Nox: 0.00355,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli Limited 1.6 6AT 2WD 6AB",
    Nox: 0.01193,
    Rendimiento: 9.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "Tivoli LX 1.6 6MT 2WD",
    Nox: 0.00355,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 4P T/M",
    Nox: 0.00355,
    Rendimiento: 9.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x2 T/A",
    Nox: 0.01193,
    Rendimiento: 9.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x2 T/A Diesel",
    Nox: 0.0253,
    Rendimiento: 12.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x2 T/M",
    Nox: 0.0282,
    Rendimiento: 15.9
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.01193,
    Rendimiento: 9.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x4 T/A Diesel",
    Nox: 0.0253,
    Rendimiento: 12.5
  },
  {
    Marca: "Ssangyong",
    Tipo: "Station Wagon",
    Modelo: "XLV 1,6 Lts. Station Wagon 5P. 4x4 T/M",
    Nox: 0.0282,
    Rendimiento: 15.9
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza 1,6 Lts. DOHC Sedan 4P. T/M 4x4 Motor Otto",
    Nox: 0.02071,
    Rendimiento: 12.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza 1,6 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.02486,
    Rendimiento: 12.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza 2,0 Lts. CVT Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01926,
    Rendimiento: 12
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza 2,0 Lts. R DOHC Sedan 4P. T/A CVT 4x4 Motor Otto",
    Nox: 0.02103,
    Rendimiento: 11.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza 2,0 Lts. R DOHC Sedan 4P. T/M 4x4 Motor Otto",
    Nox: 0.01232,
    Rendimiento: 10.9
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza WRX 2,0 Lts. DOHC Sedan 4P. T/A Tipo CVT 4x4 Motor Otto",
    Nox: 0.00542,
    Rendimiento: 8.4
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Impreza WRX 2,0 Lts. DOHC Sedan 4P. T/M 4x4 Motor Otto",
    Nox: 0.00735,
    Rendimiento: 7.8
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2,5 Lts. DOHC Sedan 4P. 4x4 (3,7:1) T/A CVT Motor Otto",
    Nox: 0.00323,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2,5 Lts. DOHC Sedan 4P. 4x4 (3,9:1) T/A CVT Motor Otto",
    Nox: 0.00323,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2,5 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.00727,
    Rendimiento: 10.3
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2.5i 2,5 Lts. DOHC Sedan 4P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2.5i 2,5Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2.5i-S 2,5 Lts. DOHC Sedan 4P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 2.5i-S 2,5 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 3.6R 3,6 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.01216,
    Rendimiento: 7.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy 3.6R-S 3,6 Lts. DOHC Sedan 4P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.01216,
    Rendimiento: 7.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "Legacy NA 2,5 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.00519,
    Rendimiento: 11.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX 2,0 Lts. Sedan 4P. T/A CVT 4x4 Otto",
    Nox: 0.01022,
    Rendimiento: 8.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX 2,0 Lts. Sedan 4P. T/M 4x4 Otto",
    Nox: 0.01265,
    Rendimiento: 7.9
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX 2.0 CVT",
    Nox: 0.01022,
    Rendimiento: 8.6
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX 2.0 MT",
    Nox: 0.01265,
    Rendimiento: 7.9
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX STI",
    Nox: 0.02126,
    Rendimiento: 6.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX STI 2,5 Lts. Sedan 4P. T/M 4x4 Otto",
    Nox: 0.02126,
    Rendimiento: 6.5
  },
  {
    Marca: "Subaru",
    Tipo: "Sedan",
    Modelo: "WRX STI 2,5 Lts. Turbo DOHC Sedan 4P. T/M 4x4 Motor Otto",
    Nox: 0.01606,
    Rendimiento: 7.1
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Ascent 2,4 Lt. Station Wagon 5P. T/A",
    Nox: 0.01225,
    Rendimiento: 7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Ascent 2,4 Lt. Station Wagon 5P. T/A",
    Nox: 0.01225,
    Rendimiento: 7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Evoltis Limited",
    Nox: 0.0085,
    Rendimiento: 7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Evoltis Touring",
    Nox: 0.0085,
    Rendimiento: 7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D Satation Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D Satation Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D Station Wagon 5P. T/M Diesel",
    Nox: 0.07076,
    Rendimiento: 14.1
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D Station Wagon 5P. T/M Diesel",
    Nox: 0.07076,
    Rendimiento: 14.1
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D-L Station Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.3
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D-L Station Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.3
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D-S Station Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. D-S Station Wagon 5P. AWD T/A Diesel",
    Nox: 0.06867,
    Rendimiento: 13.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. DI-NA Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.01117,
    Rendimiento: 11.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. DOHC Station Wagon 5P. AWD T/M Motor Diesel",
    Nox: 0.14284,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.00243,
    Rendimiento: 9.4
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i DOHC Station Wagon 5P.  T/M AWD Motor Otto",
    Nox: 0.0028,
    Rendimiento: 9.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i Station Wagon 5P. T/A tipo CVT Otto",
    Nox: 0.00289,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-L DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.00243,
    Rendimiento: 9.4
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-L DOHC Station Wagon 5P.  T/M AWD Motor Otto",
    Nox: 0.0028,
    Rendimiento: 9.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-L Station Wagon 5P. T/A tipo CVT Otto",
    Nox: 0.00289,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-S DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.00243,
    Rendimiento: 9.4
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-S DOHC Station Wagon 5P.  T/M AWD Motor Otto",
    Nox: 0.0028,
    Rendimiento: 9.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. i-S Station Wagon 5P. T/A tipo CVT Otto",
    Nox: 0.00289,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. L Station Wagon 5P. T/M Diesel",
    Nox: 0.07076,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. L Station Wagon 5P. T/M Diesel",
    Nox: 0.07076,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. XT Turbo DOHC Station Wagon 5P. 4x4 T/A (CVT) Motor Otto",
    Nox: 0.00541,
    Rendimiento: 8.9
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,0 Lts. XT Turbo DOHC Station Wagon 5P. 4x4 T/A (CVT) Motor Otto",
    Nox: 0.00486,
    Rendimiento: 9
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5 Lts. DI-NA Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.00442,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5 Lts. i DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.0032,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5 Lts. i-L DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.0032,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5 Lts. i-S DOHC Station Wagon 5P.  T/A Tipo CVT AWD Motor Otto",
    Nox: 0.0032,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5i Lts. DOHC Station Wagon 5P. AWD T/A CVT Otto",
    Nox: 0.00962,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5i-L Lts. Station Wagon 5P.  AWD T/A CVT Otto",
    Nox: 0.00962,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2,5i-S Lts. Station Wagon 5P. AWD T/A CVT Otto",
    Nox: 0.00962,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Forester 2.0 HEV",
    Nox: 0.01531,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Impreza 1,6 Lts. DOHC Station Wagon 5P. T/A Tipo CVT 4x4 Motor Otto",
    Nox: 0.01225,
    Rendimiento: 13
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Impreza 1,6 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.02486,
    Rendimiento: 12.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Impreza 2,0 Lts. CVT Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01926,
    Rendimiento: 11.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Impreza 2,0 Lts. R DOHC Station Wagon 5P. T/A CVT 4x4 Motor Otto",
    Nox: 0.02103,
    Rendimiento: 11.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Impreza 2,0 Lts. R DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.01232,
    Rendimiento: 10.9
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,0 Lts. DOHC Station Wagon 5P. 4x4 CVT Motor Diesel",
    Nox: 0.1428,
    Rendimiento: 12.8
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,0 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Diesel",
    Nox: 0.14695,
    Rendimiento: 13.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A CVT Motor Otto",
    Nox: 0.00323,
    Rendimiento: 9.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,5 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.00727,
    Rendimiento: 10.3
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,5 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.00519,
    Rendimiento: 11.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2,5 Lts. Station Wagon Otto",
    Nox: 0.00519,
    Rendimiento: 11.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.0D CVT 2,0 Lts. Station Wagon 4P. T/A Diesel",
    Nox: 0.07142,
    Rendimiento: 13.3
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.0D MT 2,0 Lts Station Wagon 4P. T/M Diesel",
    Nox: 0.06619,
    Rendimiento: 14.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.5 CVT",
    Nox: 0.00383,
    Rendimiento: 10.8
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.5i 2,5 Lts. DOHC Station Wagon 5P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.5i 2,5 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.5i-S 2,5 Lts. DOHC Station Wagon 5P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 2.5i-S 2,5 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.00523,
    Rendimiento: 10.6
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 3,6 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.02356,
    Rendimiento: 6.7
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 3.6R 3,6 Lts. Station Wagon 5P. T/A CVT 4x4 Otto",
    Nox: 0.01216,
    Rendimiento: 7.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "Outback 3.6R-S 3,6 Lts. DOHC Station Wagon 5P. T/A tipo CVT 4x4 Motor Otto",
    Nox: 0.01216,
    Rendimiento: 7.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 1,6 Lts. CVT Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02885,
    Rendimiento: 12.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 1,6 Lts. DOHC Station Wagon 5P. T/A Tipo CVT 4x4 Motor Otto",
    Nox: 0.01225,
    Rendimiento: 13
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 1,6 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.02071,
    Rendimiento: 12.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2,0 CVT",
    Nox: 0.01272,
    Rendimiento: 11.4
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2,0 Lts. CVT Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01546,
    Rendimiento: 11.1
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2,0 Lts. R DOHC Station Wagon 5P. T/A CVT 4x4 Motor Otto",
    Nox: 0.01703,
    Rendimiento: 11.5
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2,0 Lts. R DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.01232,
    Rendimiento: 11.2
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2.0 HEV",
    Nox: 0.00757,
    Rendimiento: 15.1
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2.0D 2,0 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.07103,
    Rendimiento: 14.9
  },
  {
    Marca: "Subaru",
    Tipo: "Station Wagon",
    Modelo: "XV 2.0D 2,0 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.07103,
    Rendimiento: 14.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Camioneta",
    Modelo: "APV 1,6 Lts. SOHC Pick Up Cabina Simple 2P. T/M Motor Otto",
    Nox: 0.01385,
    Rendimiento: 9.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Camioneta",
    Modelo: "APV 1,6 SOHC PickUp 2P. T/M Motor Otto",
    Nox: 0.0143,
    Rendimiento: 9.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Camioneta",
    Modelo: "Carry 1.5 T/M",
    Nox: 0.00925,
    Rendimiento: 10.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Furgon cerrado",
    Modelo: "APV 1,6 Lts. SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.01385,
    Rendimiento: 9.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Furgon cerrado",
    Modelo: "APV 1,6 SOHC Furgon 5P. T/M Motor Otto",
    Nox: 0.0143,
    Rendimiento: 9.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Alto 800 0,8 Lts. Hatch Back 5P. T/M",
    Nox: 0.0193,
    Rendimiento: 17.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Alto K10 1,0 Lts. DOHC Hatch Back 5P. T/M motor Otto",
    Nox: 0.0072,
    Rendimiento: 15.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Alto K10 1,0 Lts. DOHC Hatch Back 5P. T/M motor Otto",
    Nox: 0.0142,
    Rendimiento: 17.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Baleno 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00195,
    Rendimiento: 13.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Baleno 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0026,
    Rendimiento: 14.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Celerio 1,0 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.0066,
    Rendimiento: 12.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Celerio 1,0 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0105,
    Rendimiento: 14.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Ignis 1,2 Lts. Hatch Back 5P. T/A",
    Nox: 0.00265,
    Rendimiento: 14.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Ignis 1,2 Lts. Hatch Back 5P. T/M",
    Nox: 0.0026,
    Rendimiento: 16.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Alto 800 0,8 Lts. SOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.01185,
    Rendimiento: 15.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Swift 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00285,
    Rendimiento: 15.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Swift 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00295,
    Rendimiento: 16.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Swift DIT 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00595,
    Rendimiento: 16.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Swift Sport 1,4 Lts. Hatch Back 4P. 2WD T/A Otto",
    Nox: 0.00175,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "New Swift Sport 1,4 Lts. Hatch Back 4P. 2WD T/M Otto",
    Nox: 0.0057,
    Rendimiento: 12.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "S-Presso 1.0 T/M",
    Nox: 0.0084,
    Rendimiento: 16.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,2 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.00225,
    Rendimiento: 13.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00595,
    Rendimiento: 15.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,2 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00505,
    Rendimiento: 14.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,2 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00285,
    Rendimiento: 15.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,2 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00295,
    Rendimiento: 16.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1,4 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0168,
    Rendimiento: 14.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1.2 AMT 2WD",
    Nox: 0.0038,
    Rendimiento: 15.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift 1.2 T/M 2WD",
    Nox: 0.022,
    Rendimiento: 15.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift DIT 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00595,
    Rendimiento: 16.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift Dzire 1,2 Lts. DOHC Hatch Back 5. T/A Motor Otto",
    Nox: 0.003,
    Rendimiento: 12.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift Sport 1,4 Lts. Hatch Back 5P. 2WD T/A Otto",
    Nox: 0.00175,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift Sport 1,4 Lts. Hatch Back 5P. 2WD T/M Otto",
    Nox: 0.0057,
    Rendimiento: 12.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift Sport 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0062,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "Swift Sport 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00775,
    Rendimiento: 11.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0091,
    Rendimiento: 12
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,4 Lts. DIT Hatch Back 5P. T/A",
    Nox: 0.0063,
    Rendimiento: 10.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,4 Lts. DIT Hatch Back 5P. T/M",
    Nox: 0.01055,
    Rendimiento: 12.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,6 Lts. DOHC Hatch Back 5P. T/A CVT 4WD Motor Otto",
    Nox: 0.0042,
    Rendimiento: 13
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,6 Lts. DOHC Hatch Back 5P. T/A CVT 4x2 Motor Otto",
    Nox: 0.0042,
    Rendimiento: 13
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,6 Lts. DOHC Hatch Back 5P. T/M 4WD Motor Otto",
    Nox: 0.00385,
    Rendimiento: 12.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatch Back",
    Modelo: "SX4 S-Cross 1,6 Lts. DOHC Hatch Back 5P. T/M 4x2 Motor Otto",
    Nox: 0.00385,
    Rendimiento: 12.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Celerio 1,0 Lts. DOHC Hatchback 5P. T/A Motor Otto",
    Nox: 0.00715,
    Rendimiento: 16.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Celerio 1,0 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.01095,
    Rendimiento: 17
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Celerio 1.0 AMT",
    Nox: 0.0058,
    Rendimiento: 21.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Celerio 1.0 MT",
    Nox: 0.00836,
    Rendimiento: 19.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Ciaz 1,4 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.0031,
    Rendimiento: 14.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Swift 1,2 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.00175,
    Rendimiento: 14.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Swift 1,2 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.00265,
    Rendimiento: 13.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Hatchback",
    Modelo: "Swift ISG Hybrid",
    Nox: 0.0021,
    Rendimiento: 21.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "Grand Vitara 2,4 Lts. Tipo Jeep 3P. T/M 4WD Otto",
    Nox: 0.0061,
    Rendimiento: 8.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "JB416 Grand Vitara 1,6 Lts. DOHC Station Wagon 4WD 3P. T/M Motor Otto",
    Nox: 0.017,
    Rendimiento: 9
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "Jimny 1,3 Lts. DOHC Station Wagon Tipo Jeep 3P. 4WD T/M Motor Otto",
    Nox: 0.00505,
    Rendimiento: 11.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "Jimny 1,3 Lts. DOHC Tipo Jeep 3P. T/M 4x4 Motor Otto",
    Nox: 0.00225,
    Rendimiento: 11.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "Jimny 1,5 Lts. Tipo Jeep 3P. 4x4 T/A Otto",
    Nox: 0.0055,
    Rendimiento: 12.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Jeep",
    Modelo: "Jimny 1,5 Lts. Tipo Jeep 3P. 4x4 T/M Otto",
    Nox: 0.01335,
    Rendimiento: 13.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Minivan",
    Modelo: "APV 1,6 Lts. Minivan 5P. (8 asientos) T/M Otto",
    Nox: 0.01385,
    Rendimiento: 9.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Minivan",
    Modelo: "APV 1,6 Lts. SOHC Van 5P. (8 asientos) T/M Motor Otto",
    Nox: 0.0143,
    Rendimiento: 9.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Ciaz 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0031,
    Rendimiento: 14.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Ciaz 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00185,
    Rendimiento: 12.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Ciaz 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0033,
    Rendimiento: 14
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Ciaz 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00235,
    Rendimiento: 13.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Dzire 1,2 Lts. Sedan 4P. T/A Otto",
    Nox: 0.003,
    Rendimiento: 15.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Dzire 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0019,
    Rendimiento: 15.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Kizashi 2,4 Lts. DOHC Sedan 4P. T/A CVT 4x2 Motor Otto",
    Nox: 0.00245,
    Rendimiento: 8.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Kizashi 2,4 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00685,
    Rendimiento: 8.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Kizashi 2,4 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00705,
    Rendimiento: 9.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Kizashi 2,4 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0069,
    Rendimiento: 8.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "New Swift Dzire 1,2 Lts. Sedan 4P. T/A Otto",
    Nox: 0.003,
    Rendimiento: 15.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "New Swift Dzire 1,2 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0019,
    Rendimiento: 15.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Swift (Dzire) 1,2 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0145,
    Rendimiento: 13.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Swift Dzire 1,2 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.003,
    Rendimiento: 12.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Swift Dzire 1,2 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00505,
    Rendimiento: 14.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Swift Dzire 1,2 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00175,
    Rendimiento: 14.6
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "Swift Dzire 1,2 Lts. Sedan 4P. T/A Otto",
    Nox: 0.00265,
    Rendimiento: 13.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "SX4 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0026,
    Rendimiento: 11.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Sedan",
    Modelo: "SX4 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.0091,
    Rendimiento: 12
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Ertiga 1,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0168,
    Rendimiento: 13.1
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Ertiga 1,4 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.01085,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Ertiga 1,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0064,
    Rendimiento: 12.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Ertiga 1,5 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0047,
    Rendimiento: 13
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. 4x2 T/M Motor Otto",
    Nox: 0.012,
    Rendimiento: 8.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. 4x4 T/M Motor Otto",
    Nox: 0.012,
    Rendimiento: 8.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. T/A 2WD Motor Otto",
    Nox: 0.00895,
    Rendimiento: 7.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. T/A 4WD Motor Otto",
    Nox: 0.00895,
    Rendimiento: 7.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. T/M 2WD Motor Otto",
    Nox: 0.0061,
    Rendimiento: 8.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Nomade 2,4 Lts. DOHC Station Wagon 5P. T/M 4WD Motor Otto",
    Nox: 0.0061,
    Rendimiento: 8.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Vitara 1,6 Lts. DOHC Station Wagon 3P. T/M 4x4 Motor Otto",
    Nox: 0.00815,
    Rendimiento: 8.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Vitara 2,4 Lts. DOHC Station Wagon 3P. 4x4 T/M Motor Otto",
    Nox: 0.012,
    Rendimiento: 8.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Vitara 2,4 Lts. DOHC Station Wagon 3P. T/A 4WD Motor Otto",
    Nox: 0.00895,
    Rendimiento: 7.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Grand Vitara 2,4 Lts. DOHC Station Wagon 3P. T/M 4WD Motor Otto",
    Nox: 0.0061,
    Rendimiento: 8.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Jimny 1,5 Lts. Station Wagon 3P. 4x4 T/A Otto",
    Nox: 0.0055,
    Rendimiento: 12.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Jimny 1,5 Lts. Station Wagon 3P. 4x4 T/M Otto",
    Nox: 0.01335,
    Rendimiento: 13.2
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "SX4 S-Cross 1,6 Lts. Station Wagon 5P. T/A 4x2",
    Nox: 0.0016,
    Rendimiento: 11.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "SX4 S-Cross 1,6 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.0016,
    Rendimiento: 11.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "SX4 S-Cross 1,6 Lts. Station Wagon 5P. T/M 4x2",
    Nox: 0.00325,
    Rendimiento: 12.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "SX4 S-Cross 1,6 Lts. Station Wagon 5P. T/M 4x4",
    Nox: 0.00325,
    Rendimiento: 12.7
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,4 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00607,
    Rendimiento: 12.8
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,4 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.013,
    Rendimiento: 13.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,4 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.013,
    Rendimiento: 13.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,6 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0033,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.0033,
    Rendimiento: 12.4
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,6 Lts. Station Wagon 5P. T/M 4x2 Otto",
    Nox: 0.0068,
    Rendimiento: 13.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1,6 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.0068,
    Rendimiento: 13.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1.6 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00345,
    Rendimiento: 12.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1.6 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00345,
    Rendimiento: 12.3
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1.6 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00545,
    Rendimiento: 12.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara 1.6 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.00545,
    Rendimiento: 12.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara DIT 1,4 Lts. Station Wagon 5P. 4x2 T/M",
    Nox: 0.00405,
    Rendimiento: 11.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara DIT 1,4 Lts. Station Wagon 5P. 4x4 T/A",
    Nox: 0.0056,
    Rendimiento: 11.5
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "Vitara DIT 1,4 Lts. Station Wagon 5P. 4x4 T/M",
    Nox: 0.00405,
    Rendimiento: 11.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "XL7 1.5 TA",
    Nox: 0.0064,
    Rendimiento: 12.9
  },
  {
    Marca: "Suzuki",
    Tipo: "Station Wagon",
    Modelo: "XL7 1.5 TM",
    Nox: 0.0047,
    Rendimiento: 13
  },
  {
    Marca: "Tata",
    Tipo: "Camioneta",
    Modelo: "Xenon 2,2 Lts. Dicor DOHC 16v Pick Up Cabina Doble 4P. 4x2 T/M Motor Diesel",
    Nox: 0.1989,
    Rendimiento: 9.6
  },
  {
    Marca: "Tata",
    Tipo: "Camioneta",
    Modelo: "Xenon 2,2 Lts. Dicor DOHC 16v Pick Up Cabina Doble 4P. 4x4 T/M Motor Diesel",
    Nox: 0.1989,
    Rendimiento: 9.6
  },
  {
    Marca: "Tata",
    Tipo: "Camioneta",
    Modelo: "Xenon 2,2 Lts. Dicor DOHC 16v Pick Up Cabina Simple 2P. 4x2 T/M Motor Diesel",
    Nox: 0.1989,
    Rendimiento: 9.6
  },
  {
    Marca: "Tata",
    Tipo: "Camioneta",
    Modelo: "Xenon 2,2 Lts. Dicor DOHC 16v Pick Up Cabina Simple 2P. 4x4 T/M Motor Diesel",
    Nox: 0.1989,
    Rendimiento: 9.6
  },
  {
    Marca: "Tesla",
    Tipo: "Hatchback",
    Modelo: "Model 3 Long Range AWD",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Tesla",
    Tipo: "Sedan",
    Modelo: 3,
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Tesla",
    Tipo: "Sedan",
    Modelo: "3 Sedan 4P. T/A Motor Electrico",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Tesla",
    Tipo: "Sedan",
    Modelo: "Model Y",
    Nox: 0,
    Rendimiento: 0
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma 3,5 Lts. T/M",
    Nox: 0.0079,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta 2P. T/M 4x4",
    Nox: 0.1619,
    Rendimiento: 11.6
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta 4P. T/M 4x2",
    Nox: 0.1619,
    Rendimiento: 11.6
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta 4P. T/M 4x4",
    Nox: 0.1619,
    Rendimiento: 11.6
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta Cabina Simple 2P. T/M 4x4 Diesel",
    Nox: 0.193,
    Rendimiento: 11.7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.193,
    Rendimiento: 11.7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.193,
    Rendimiento: 11.7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Pick Up 2P. T/M 4x4 Diesel",
    Nox: 0.2292,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Pick Up 4P. T/M 4x2 Diesel",
    Nox: 0.2292,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,4 Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.2292,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,5 Lts. DOHC Pick Up Cabina Simple 2P. 4x2 T/M Motor Diesel",
    Nox: 0.1915,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,5 Lts. DOHC Pick Up Cabina Simple 2P. 4x4 T/M Motor Diesel",
    Nox: 0.1915,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,5 Lts. DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.1915,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,5 Lts. DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.1915,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,7 Lts. Pick Up 4P. T/M 4x2",
    Nox: 0.01023,
    Rendimiento: 6.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,7 Lts. Pick Up 4P. T/M 4x2 Otto",
    Nox: 0.00845,
    Rendimiento: 7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Camioneta 4P. T/A 4x4",
    Nox: 0.1874,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Camioneta 4P. T/A 4x4 Diesel",
    Nox: 0.1677,
    Rendimiento: 9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Camioneta 4P. T/M 4x4",
    Nox: 0.1601,
    Rendimiento: 10.7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.1565,
    Rendimiento: 10.7
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Pick Up 4P. T/A 4x4 Diesel",
    Nox: 0.2029,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2,8 Lts. Pick Up 4P. T/M 4x4 Diesel",
    Nox: 0.1524,
    Rendimiento: 10.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2.4 Lts. Pick Up 2P. 4x4 T/M Motor Diesel",
    Nox: 0.1619,
    Rendimiento: 11.8
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2.4 Lts. Pick Up 4P. 4x2 T/M Motor Diesel",
    Nox: 0.1619,
    Rendimiento: 11.8
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2.4 Lts. Pick Up 4P. 4x4 T/M Motor Diesel",
    Nox: 0.1619,
    Rendimiento: 11.8
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2.8 Lts. Pick Up 4P. 4x4 T/A Motor Diesel",
    Nox: 0.13562,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 2.8 Lts. Pick Up 4P. 4x4 T/M Motor Diesel",
    Nox: 0.14346,
    Rendimiento: 11.9
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 3,0 Camioneta T/A",
    Nox: 0.2306,
    Rendimiento: 9.2
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 3,0 Lts. DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor Diesel",
    Nox: 0.2131,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Hilux 3,0 Lts. DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor Diesel",
    Nox: 0.2131,
    Rendimiento: 10
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma 3,5 Lts. Camioneta 4P. T/A",
    Nox: 0.00744,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma 3,5 T/A",
    Nox: 0.0079,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma 3,5 T/A 4x4 Otto",
    Nox: 0.0079,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma 4x4 T/A",
    Nox: 0.01188,
    Rendimiento: 5.8
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma SR5 3,5 Lts. Camioneta 4P. T/A",
    Nox: 0.00739,
    Rendimiento: 6.3
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TDR 3,5 Lts. Camioneta 2P. T/A 4X4",
    Nox: 0.00744,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD 3,5",
    Nox: 0.0079,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD 4x4",
    Nox: 0.00739,
    Rendimiento: 6.2
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD PRO 3,5 Lts. Camioneta 4P. T/A",
    Nox: 0.00743,
    Rendimiento: 6.3
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD Sport 3,5 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0085,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD Sport 3,5 Lts. Camioneta 4P. T/A Otto",
    Nox: 0.0085,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD Sport 3,5 Lts. T/A 4x4 Otto",
    Nox: 0.0085,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tacoma TRD Sport 3,5 Lts. T/A 4x4 Otto",
    Nox: 0.0073,
    Rendimiento: 7.6
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra 5,7 DOHC Pick Up D/C 4P. 4x2 T/A Motor Otto",
    Nox: 0.0055,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra 5,7 DOHC Pick Up D/C 4P. 4x4 T/A Motor Otto",
    Nox: 0.0055,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra 5,7 Lts. Pick Up D/C 4P. T/A 4x2 Otto",
    Nox: 0.009,
    Rendimiento: 5.2
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra 5,7 Lts. Pick Up D/C 4P. T/A 4x4 Otto",
    Nox: 0.009,
    Rendimiento: 5.2
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra 5,7 T/A 4x4",
    Nox: 0.0132,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra Crewmax 5,7 Lts. 4x4 TA",
    Nox: 0.0132,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Camioneta",
    Modelo: "Tundra Crewmax Pick Up 5,7 Lts. 4x4 T/A Otto",
    Nox: 0.0132,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Coupe",
    Modelo: "FT86 2,0 Lts. DOHC Coupe 2P. T/A Motor Otto",
    Nox: 0.00748,
    Rendimiento: 10.3
  },
  {
    Marca: "Toyota",
    Tipo: "Coupe",
    Modelo: "FT86 2,0 Lts. DOHC Coupe 2P. T/M Motor Otto",
    Nox: 0.01026,
    Rendimiento: 9.6
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon Cerrado",
    Modelo: "Hiace 2,8 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.133,
    Rendimiento: 9.2
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon Cerrado",
    Modelo: "Hiace 2,8 Lts. Furgon 5P T/M Diesel",
    Nox: 0.1442,
    Rendimiento: 9
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon cerrado",
    Modelo: "Hiace 3,0 Lts. DOHC Furgon 4P. T/M Motor Diesel",
    Nox: 0.1542,
    Rendimiento: 9.3
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon Cerrado",
    Modelo: "Hiace 3,0 Lts. Furgon 4P. T/M Diesel",
    Nox: 0.1542,
    Rendimiento: 9.3
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon cerrado",
    Modelo: "Hiace 3,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1344,
    Rendimiento: 9.9
  },
  {
    Marca: "Toyota",
    Tipo: "Furgon",
    Modelo: "Hiace 3,0 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1542,
    Rendimiento: 9.3
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Auris 1,3 Lts. Hatch Back T/M Otto",
    Nox: 0.0074,
    Rendimiento: 14.7
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Auris 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.002,
    Rendimiento: 11.9
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Auris 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.004,
    Rendimiento: 11.6
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Aygo 1,0 Lts. Hatch Back 3P. T/M Otto",
    Nox: 0.00655,
    Rendimiento: 18.1
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Aygo 1,0 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.00655,
    Rendimiento: 18.1
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "C-HR HEV",
    Nox: 0.00285,
    Rendimiento: 28.7
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Corolla 1,2 Lts. Turbo Hatch Back 5P. T/A CVT Otto",
    Nox: 0.01825,
    Rendimiento: 10.8
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Corolla 1,2 Lts. Turbo Hatch Back 5P. T/M Otto",
    Nox: 0.01665,
    Rendimiento: 12.6
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Corolla 1,8 Lts. Hatch Back 5P. T/A tipo CVT Hibrido",
    Nox: 0.00385,
    Rendimiento: 29.2
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Prius 1,5 Lts. Hatch Back 5P. T/A",
    Nox: 0.00619,
    Rendimiento: 32.8
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Prius 1,8 Lts. Hatch Back 5P. T/A Vehiculo Hibrido Electrico",
    Nox: 0.0101,
    Rendimiento: 41.7
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Prius C 1,5 Lts. CVT DOHC Hatch Back 5P. T/A, Vehiculo Electrico Hibrido",
    Nox: 0.00611,
    Rendimiento: 32.8
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Prius Hibrido 1,8 Lts. DOHC Hatch Back 5P. T/A, Vehiculo Hibrido Electrico",
    Nox: 0.00361,
    Rendimiento: 25.6
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Urban Cruiser 1,3 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.0101,
    Rendimiento: 13.9
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 12.2
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00485,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. Hatch Back 5P. T/A",
    Nox: 0.00995,
    Rendimiento: 12.9
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.01545,
    Rendimiento: 13.7
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. Hatch Back 5P. T/M",
    Nox: 0.0049,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Hatch Back",
    Modelo: "Yaris 1,5 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0111,
    Rendimiento: 13.6
  },
  {
    Marca: "Toyota",
    Tipo: "Jeep",
    Modelo: "FJ Cruiser 4,0 Lts. DOHC Tipo Jeep 5P. T/A 4x4 Motor Otto",
    Nox: 0.0145,
    Rendimiento: 6.3
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace 2,8 Lts. Minibus 10 Asientos 4P T/M Diesel",
    Nox: 0.149,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace 2,8 Lts. Minibus 12 Asientos 4P T/M Diesel",
    Nox: 0.1634,
    Rendimiento: 9.4
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace 3,0 Lts. DOHC (12 asientos) 4P. T/M Motor Diesel",
    Nox: 0.1542,
    Rendimiento: 9.3
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace 3,0 Lts. Minibus 10 Asientos 4P. T/M Diesel",
    Nox: 0.1344,
    Rendimiento: 9.9
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace Escolar 2,8 Lts. 24 Asientos 4P T/M Diesel",
    Nox: 0.149,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Minibus",
    Modelo: "Hiace Majesty 2.8 Lts. Minibus 9 Asientos 5P. T/A Diesel",
    Nox: 0.1361,
    Rendimiento: 9.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry 2,5 DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.0062,
    Rendimiento: 9.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry 2,5 Lts. Sedan 4P. T/A",
    Nox: 0.0062,
    Rendimiento: 9.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry 2,5 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.00102,
    Rendimiento: 20.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry Hibrid",
    Nox: 0.00102,
    Rendimiento: 20.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry Hibrido 2,5 Lts. DOHC Sedan 4P. T/A (CVT), Vehiculo Electrico Hibrido",
    Nox: 0.01536,
    Rendimiento: 18.2
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry LE 2,5 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.00102,
    Rendimiento: 20.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Camry XLE 2,5 Lts. Sedan 4P. T/A Hibrido",
    Nox: 0.00102,
    Rendimiento: 20.4
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla 1,8 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.00545,
    Rendimiento: 11.3
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla 1,8 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00535,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla 1,8 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0013,
    Rendimiento: 10.7
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla 1,8 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00565,
    Rendimiento: 10.7
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla SD 1,6 MT",
    Nox: 0.00765,
    Rendimiento: 11.1
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla SD 1.6 CVT",
    Nox: 0.00175,
    Rendimiento: 11
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla SD 1.8 HEV CVT",
    Nox: 0.005,
    Rendimiento: 33.1
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla SD 2.0 CVT",
    Nox: 0.00105,
    Rendimiento: 12.5
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Corolla SD 2.0 MT",
    Nox: 0.0067,
    Rendimiento: 11.2
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.005,
    Rendimiento: 12.2
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00485,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. Sedan 4P. T/A",
    Nox: 0.00995,
    Rendimiento: 12.9
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01545,
    Rendimiento: 13.7
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. Sedan 4P. T/M",
    Nox: 0.0049,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0111,
    Rendimiento: 13.6
  },
  {
    Marca: "Toyota",
    Tipo: "Sedan",
    Modelo: "Yaris S 1,5 Lts. Sedan 4P. T/M Otto",
    Nox: 0.00485,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "4 Runner 4,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.0107,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "4Runner 4,0 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0107,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "4Runner 4,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0107,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Corolla Cross 1.8 CVT HEV",
    Nox: 0.00087,
    Rendimiento: 25
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Corolla Cross 2.0 CVT",
    Nox: 0.00386,
    Rendimiento: 13.2
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "FJ Cruiser 4,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0145,
    Rendimiento: 6.3
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2,7 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01145,
    Rendimiento: 7.3
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2,7 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.01245,
    Rendimiento: 7.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2,8 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.1554,
    Rendimiento: 9.3
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2,8 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.1604,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2.7 Lts. Station Wagon 5P. T/M 4x2 Motor Gasolina",
    Nox: 0.01018,
    Rendimiento: 6.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2.8 Lts. Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.13562,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2.8 Lts. Station Wagon 5P. T/M Motor Diesel",
    Nox: 0.14346,
    Rendimiento: 11.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Fortuner 2.8L T/M",
    Nox: 0.2262,
    Rendimiento: 10.6
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Land Cruiser 5,7 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.009,
    Rendimiento: 5.2
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Land Cruiser Prado 2,7 Lts. Station Wagon 3P. T/A 4x4 Otto",
    Nox: 0.01069,
    Rendimiento: 7.2
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Land Cruiser Prado 4,0 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.02397,
    Rendimiento: 6.2
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Land Cruiser Prado 4,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01261,
    Rendimiento: 6.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav 4 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.0046,
    Rendimiento: 10.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,0 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00325,
    Rendimiento: 10.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00325,
    Rendimiento: 10.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01055,
    Rendimiento: 10.6
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,0 Lts. Station Wagon 5P. T/M 4x4 Otto",
    Nox: 0.0089,
    Rendimiento: 11
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,0 Lts. Station Wagon 5P. T/M Otto",
    Nox: 0.0089,
    Rendimiento: 11
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,5 Lts. DOHC Station Wagon 5P. T/A 4x2 Motor Otto",
    Nox: 0.0045,
    Rendimiento: 8.6
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,5 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0045,
    Rendimiento: 8.6
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,5 Lts. DOHC Station Wagon 5P. T/M 4x2 Motor Otto",
    Nox: 0.00495,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "RAV4 2,5 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor Otto",
    Nox: 0.00495,
    Rendimiento: 9.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P T/A CVT Hbrido 4x2",
    Nox: 0.00145,
    Rendimiento: 23.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P T/A CVT Hbrido 4x4",
    Nox: 0.00145,
    Rendimiento: 23.9
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.00509,
    Rendimiento: 10.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00395,
    Rendimiento: 10.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.00509,
    Rendimiento: 10.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rav4 2,5 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.00395,
    Rendimiento: 10.5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1,5 Lts. Station Wagon 5P. T/A 4x2",
    Nox: 0.00613,
    Rendimiento: 10.3
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1,5 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.00613,
    Rendimiento: 10.3
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1,5 Lts. Station Wagon 5P. T/M 4x2",
    Nox: 0.0046,
    Rendimiento: 11.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1,5 Lts. Station Wagon 5P. T/M 4x4",
    Nox: 0.0046,
    Rendimiento: 11.1
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1.5 AT",
    Nox: 0.00294,
    Rendimiento: 11.6
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Rush 1.5 MT",
    Nox: 0.0033,
    Rendimiento: 11.8
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Sequoia 5,7 DOHC Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.0055,
    Rendimiento: 5
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Sienna 3,5 Lts Station Wagon T/A",
    Nox: 0.0013,
    Rendimiento: 7
  },
  {
    Marca: "Toyota",
    Tipo: "Station Wagon",
    Modelo: "Sienna 3,5 T/A",
    Nox: 0.01013,
    Rendimiento: 6.7
  },
  {
    Marca: "Uaz",
    Tipo: "Camioneta",
    Modelo: "330365 Bukhanka",
    Nox: 0.02674,
    Rendimiento: 5.3
  },
  {
    Marca: "Uaz",
    Tipo: "Camioneta",
    Modelo: "390945 Bukhanka",
    Nox: 0.02674,
    Rendimiento: 5.3
  },
  {
    Marca: "UAZ",
    Tipo: "Camioneta",
    Modelo: "Profi GLP 236021",
    Nox: 0.02328,
    Rendimiento: 5.7
  },
  {
    Marca: "UAZ",
    Tipo: "Camioneta",
    Modelo: "UAZ-236021 Profi",
    Nox: 0.0395,
    Rendimiento: 5.7
  },
  {
    Marca: "UAZ",
    Tipo: "Camioneta",
    Modelo: "UAZ-236022 Profi",
    Nox: 0.0395,
    Rendimiento: 5.7
  },
  {
    Marca: "UAZ",
    Tipo: "Camioneta",
    Modelo: "UAZ-236323 Profi",
    Nox: 0.0395,
    Rendimiento: 5.7
  },
  {
    Marca: "UAZ",
    Tipo: "Camioneta",
    Modelo: "UAZ-236324 Profi",
    Nox: 0.0395,
    Rendimiento: 5.7
  },
  {
    Marca: "Uaz",
    Tipo: "Furgon",
    Modelo: "374195 Bukhanka",
    Nox: 0.02674,
    Rendimiento: 5.3
  },
  {
    Marca: "Uaz",
    Tipo: "Minibus",
    Modelo: "220695-04 Bukhanka",
    Nox: 0.02674,
    Rendimiento: 5.3
  },
  {
    Marca: "Uaz",
    Tipo: "Minibus",
    Modelo: "390995 Bukhanka",
    Nox: 0.02674,
    Rendimiento: 5.3
  },
  {
    Marca: "Uaz",
    Tipo: "Station Wagon",
    Modelo: "Atacama",
    Nox: 0.04525,
    Rendimiento: 5.6
  },
  {
    Marca: "Uaz",
    Tipo: "Station Wagon",
    Modelo: "Hunter 2,7 Lts. Station Wagon Tipo Jeep 5P. T/M 4x4 Otto",
    Nox: 0.04525,
    Rendimiento: 5.6
  },
  {
    Marca: "Uaz",
    Tipo: "Station Wagon",
    Modelo: "Kasak (Patriot)",
    Nox: 0.03178,
    Rendimiento: 8.5
  },
  {
    Marca: "Uaz",
    Tipo: "Station Wagon",
    Modelo: "Kazak MT",
    Nox: 0.01921,
    Rendimiento: 5.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Cabriolet",
    Modelo: "Beetle Cabrio 1,4 Lts. Cabriolet 2P T/M Motor CTHD Oto",
    Nox: 0.02595,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Cabriolet",
    Modelo: "Beetle Cabrio 1,4 Lts. DOHC Cabriolet 2P T/A Motor CTHD Otto",
    Nox: 0.03165,
    Rendimiento: 12.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Cabriolet",
    Modelo: "Beetle Cabrio 2,0 Lts. DOHC Convertible 2P. T/A Motor CPLA Otto",
    Nox: 0.01995,
    Rendimiento: 9.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Camioneta Cabina Simple 2P. T/M 4x2 Motor CNFB Diesel",
    Nox: 0.22566,
    Rendimiento: 11.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Camioneta Cabina Simple 2P. T/M 4x4 Motor CNFB Diesel",
    Nox: 0.22566,
    Rendimiento: 11.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Camioneta Doble Cabina 4P. T/M 4x2 Motor CNEA Diesel",
    Nox: 0.14314,
    Rendimiento: 11.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Comfortline DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor CNFB Diesel",
    Nox: 0.22566,
    Rendimiento: 10.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Comfortline DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor CNFB Diesel",
    Nox: 0.22566,
    Rendimiento: 10.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. Tdi DOHC Pick Up Doble Cabina 4P. 4x2 T/M Motor CNFA Diesel",
    Nox: 0.17894,
    Rendimiento: 10.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. Tdi DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor CNFA Diesel",
    Nox: 0.17894,
    Rendimiento: 10.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI DOHC Pick Up Doble Cabina 4P. T/A 4x2 Motor CSHA Diesel",
    Nox: 0.2306,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI DOHC Pick Up Doble Cabina 4P. T/A Motor CSHA Diesel",
    Nox: 0.2306,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Trendline Camioneta Doble Cabina 4P. T/M 4x2 Motor CNEA Diesel",
    Nox: 0.14314,
    Rendimiento: 11.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Amarok 2,0 Lts. TDI Trendline DOHC Pick Up Doble Cabina 4P. 4x4 T/M Motor CNEA Diesel",
    Nox: 0.14314,
    Rendimiento: 10.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Crafter 35 2,0 Lts. Tdi DOHC Chasis Cabina Doble 4P. T/M 4x2 Motor CKUB Diesel",
    Nox: 0.20382,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Crafter 35 2,0 Lts. Tdi DOHC Chasis Cabina Simple 2P. T/M 4x2 Motor CKUB Diesel",
    Nox: 0.20382,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Nueva Amarok V6 4x4 AT",
    Nox: 0.16355,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Saveiro 1,6 Lts. Camioneta Cabina Extendida 2P. T/M Otto",
    Nox: 0.01565,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Saveiro 1,6 Lts. Camioneta Cabina Simple 2P. T/M Otto",
    Nox: 0.01565,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Saveiro 1,6 Lts. Camioneta Doble Cabina 2P. T/M Otto",
    Nox: 0.01565,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Saveiro Cross 1,6 Lts. Pick Up Cabina Simple 2P. T/M Otto",
    Nox: 0.0047,
    Rendimiento: 10.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Saveiro Cross 1,6 Lts. Pick Up Doble Cabina 2P. T/M Otto",
    Nox: 0.0047,
    Rendimiento: 10.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Transporter 2,0 Lts. TDI SOHC Chasis Cabina 2P. 4x2 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Transporter 2,0 Lts. TDI SOHC Pick Up Doble Cabina 4P. 4x2 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Camioneta",
    Modelo: "Transporter 2,0 Lts. TDI SOHC Pick Up Doble Cabina 4P. 4x4 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Caddy 1,6 Lts. Furgon 5P. T/M Diesel",
    Nox: 0.1715,
    Rendimiento: 14.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon Cerrado",
    Modelo: "Caddy 2,0 Lts. Furgon 5P. T/M 4x2 Diesel",
    Nox: 0.1477,
    Rendimiento: 13.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Caddy 2,0 Lts. TDI DOHC Furgon 5P. T/M Motor CFHC Diesel",
    Nox: 0.1198,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon Cerrado",
    Modelo: "Crafter 2,0 Lts. Furgon 6P. T/M Diesel",
    Nox: 0.17837,
    Rendimiento: 11.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Crafter 35 2,0 Lts. Furgon 5P. T/M 4x4",
    Nox: 0.21244,
    Rendimiento: 10.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Crafter 35 2,0 Lts. Tdi DOHC Furgon 5P. T/M 4x2 Motor CKTB Diesel",
    Nox: 0.16391,
    Rendimiento: 9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Crafter 35 2,0 Lts. Tdi DOHC Furgon 5P. T/M 4x2 Motor CKUB Diesel",
    Nox: 0.20382,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Crafter 35 2,0 Lts. TSI DOHC Furgon 5P. T/M 4x2 Motor CKTC Diesel",
    Nox: 0.2054,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Crafter Ambulancia 2,0 Lts. Tdi DOHC Furgon 5P. T/M 4x2 Motor CKUB Diesel",
    Nox: 0.20382,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon Cerrado",
    Modelo: "Transporter 2.0L TDI MT 4x2",
    Nox: 0.1804,
    Rendimiento: 11.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Transporter LWD HR/NR 2,0 Lts. TDI SOHC Furgon 5P. 4x2 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon cerrado",
    Modelo: "Transporter LWD HR/NR 4 Motion 2,0 Lts. TDI SOHC Furgon 5P. 4x4 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon",
    Modelo: "Transporter TDI 2.0 Lts. T/A",
    Nox: 0.24928,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon",
    Modelo: "Transporter TDI 2.0 Lts. T/A",
    Nox: 0.24928,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Furgon",
    Modelo: "Transporter TDI 2.0 Lts. T/A",
    Nox: 0.24928,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Beetle 1,8 Lts. Hatch Back 3P. T/A",
    Nox: 0.00375,
    Rendimiento: 8.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Beetle Coupe 1,4 Lts. DOHC Hatch Back 3P T/A Motor CTHD Otto",
    Nox: 0.03165,
    Rendimiento: 12.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Beetle Coupe 1,4 Lts. Hatch Back 3P T/M Motor CTHD Oto",
    Nox: 0.02595,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Beetle Coupe 2,0 Lts. DOHC Hatch Back 3P. T/A Motor CPLA Otto",
    Nox: 0.01995,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Gol 1.6 T/A",
    Nox: 0.0093,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf 1,4 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.02105,
    Rendimiento: 14.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf 1,4 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0218,
    Rendimiento: 12.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf 2,0 Lts. Hatch Back 5P. T/A Diesel",
    Nox: 0.0459,
    Rendimiento: 12.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf 2,0 Lts. Hatch Back 5P. T/A Diesel",
    Nox: 0.01447,
    Rendimiento: 15.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf 2,0 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.0504,
    Rendimiento: 14.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf A7 1,4 Lts. TSI DOHC Hatch Back 5P. T/A Motor CHPA Otto",
    Nox: 0.01357,
    Rendimiento: 15.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf A7 1,4 Lts. TSI DOHC Hatch Back 5P. T/M Motor CHPA Otto",
    Nox: 0.02191,
    Rendimiento: 14.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf A7 1,6 Lts. DOHC Hatch Back 5P. T/A Motor CWVA Otto",
    Nox: 0.00626,
    Rendimiento: 11
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf A7 1,6 Lts. DOHC Hatch Back 5P. T/M Motor CWVA Otto",
    Nox: 0.00366,
    Rendimiento: 12.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf A7 GTI 2,0 Lts. TSI DOHC Hatch Back 5P. T/A Motor CXDA Otto",
    Nox: 0.0205,
    Rendimiento: 12
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf GTI 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.00771,
    Rendimiento: 8.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf GTI 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.01515,
    Rendimiento: 9.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf R 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.01357,
    Rendimiento: 11.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf R 2,0 Lts. Hatch Back 3P. T/A Otto",
    Nox: 0.02964,
    Rendimiento: 11.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf R 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.01357,
    Rendimiento: 11.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Golf R 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.01243,
    Rendimiento: 7.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Polo 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0102,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Polo 1,6 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0272,
    Rendimiento: 10.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Polo 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.0148,
    Rendimiento: 10.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Polo 1,6 Lts. Hatch Back 5P. T/M Otto",
    Nox: 0.01005,
    Rendimiento: 11.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Sciricco TSI 1,4 Lts. DOHC Hatch Back 3P. T/A Motor CTHD Otto",
    Nox: 0.02475,
    Rendimiento: 12.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Sciricco TSI 1,4 Lts. DOHC Hatch Back 3P. T/M Motor CTHD Otto",
    Nox: 0.02566,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Scirocco 2,0 Lts. DOHC Hatch Back 3P. T/A Motor CCZB Otto",
    Nox: 0.01578,
    Rendimiento: 9.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatch Back",
    Modelo: "Scirocco 2,0 Lts. DOHC Hatch Back 3P. T/M Motor CCZB Otto",
    Nox: 0.01392,
    Rendimiento: 9.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatchback",
    Modelo: "Gol 1,6 Lts. Hatchback 5P. T/M Otto",
    Nox: 0.01565,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Hatchback",
    Modelo: "Nuevo Polo GTS 1.4L TSI AT",
    Nox: 0.014,
    Rendimiento: 9.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Caravelle 11 Asientos",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Caravelle 2,0 Lts. Minibus 4P. T/A Diesel",
    Nox: 0.21462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Crafter 35 2,0 Lts. Tdi DOHC Minibus (10 asientos) 5P. T/M 4x2 Motor CKUB Diesel",
    Nox: 0.20382,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Multivan 2,0 Lts. TDI SOHC (7 asientos) 4P. T/M Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Multivan 2,0 Minibus 7 asientos 4P. T/A 4x4 Diesel",
    Nox: 0.21462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Transporter Combi 2,0 Lts. TDI SOHC Minibus (11 asientos) 4P. 4x2 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Transporter Combi 2,0 Lts. TDI SOHC Minibus (11 asientos) 4P. 4x4 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Minibus",
    Modelo: "Transporter Combi 2,0 Lts. TDI SOHC Minibus (9 asientos) 4P. 4x2 Motor CAAC Diesel",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 1,4 Lts. TSI DOHC Sedan 4P. T/A Motor CAXA Otto",
    Nox: 0.01575,
    Rendimiento: 12.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 1,4 Lts. TSI DOHC Sedan 4P. T/M Motor CAXA Otto",
    Nox: 0.0164,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.11981,
    Rendimiento: 17.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 1,6 Lts. Sedan 4P. T/M Diesel",
    Nox: 0.11657,
    Rendimiento: 17.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0411,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Bora 2,0 Lts. Sedan 4P. T/M Diesel",
    Nox: 0.0418,
    Rendimiento: 13.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "CC 2,0 Lts. TSI DOHC Sedan 4P. T/A Motor CCZB Otto",
    Nox: 0.01769,
    Rendimiento: 8.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "CC 2,0 Lts. TSI DOHC Sedan 4P. T/M Motor CCZB Otto",
    Nox: 0.0214,
    Rendimiento: 9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "CC 4Motion V6 3,6 Lts. FSI DOHC Sedan 4P. T/A Motor BWS Otto",
    Nox: 0.01321,
    Rendimiento: 8.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Jetta 1,4 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0142,
    Rendimiento: 11
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Jetta 1,4 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01225,
    Rendimiento: 12.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Jetta GLI 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0092,
    Rendimiento: 7.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Nuevo Virtus GTS 1.4L TSI AT",
    Nox: 0.011,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat 2,0 Lts. TSI DOHC Sedan 4P. T/A Motor CCZB Otto",
    Nox: 0.01769,
    Rendimiento: 8.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat 2,0 Lts. TSI DOHC Sedan 4P. T/M Motor CCZB Otto",
    Nox: 0.0214,
    Rendimiento: 9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat B7 V6 3,6 Lts. FSI DOHC Sedan 4P. 4x4 T/A Motor BWS Otto}",
    Nox: 0.01321,
    Rendimiento: 7.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat CC 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.0505,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat TSI 1,8 Lts. Turbo DOHC Sedan 4P. T/A Motor CDAA Otto",
    Nox: 0.02273,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Passat TSI 1,8 Turbo DOHC Sedan 4P. T/M Motor CDAA Otto",
    Nox: 0.02424,
    Rendimiento: 10
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Polo 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0272,
    Rendimiento: 10.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Polo 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0148,
    Rendimiento: 10.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Virtus 1,6 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01105,
    Rendimiento: 10.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Virtus 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.0082,
    Rendimiento: 11.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Voyage",
    Nox: 0.00875,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Sedan",
    Modelo: "Voyage 1,6 Lts. Sedan 4P. T/M Otto",
    Nox: 0.01565,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Atlas 3,6 Lts. Station Wagon 7 Asientos 5P. T/A 4x2 Otto",
    Nox: 0.01231,
    Rendimiento: 6.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Atlas 3,6 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.00844,
    Rendimiento: 7.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caddy 1,6 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.1531,
    Rendimiento: 14.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caddy 2,0 Lts. Station Wagon 5 asientos 4P. T/M Diesel",
    Nox: 0.14125,
    Rendimiento: 13.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caddy 2,0 Lts. Station Wagon 7 asientos 4P. T/M Diesel",
    Nox: 0.14125,
    Rendimiento: 13.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caddy Combi 2,0 Lts. TDI DOHC Sation Wagon 6P. T/M Motor CFHC Diesel",
    Nox: 0.1198,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "California 2,0 Lts. Station Wagon 4 Asientos 4P. T/A 4x4 Diesel",
    Nox: 0.21462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "California 2,0 Lts. TDI DOHC Station Wagon 4P. 4x4 T/M Motor CCHA Diesel",
    Nox: 0.24928,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caravelle 2,0 Lts. Station Wagon 9 Asientos 4P. T/A 4x4 Diesel",
    Nox: 0.21462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Caravelle 2,0 Lts. Station Wagon 9 Asientos 4P. T/M Diesel",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Golf 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0459,
    Rendimiento: 12.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Golf 2,0 Lts. Station Wagon 5P. T/M Diesel",
    Nox: 0.0504,
    Rendimiento: 14.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Multivan 4Motion 2,0 Lts. TDI DOHC Station Wagon 4P. 4x4 T/M Motor CCHA Diesel",
    Nox: 0.24928,
    Rendimiento: 9.6
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Nivus 1.0L TSI AT",
    Nox: 0.012,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Nivus 1.0L TSI MT",
    Nox: 0.015,
    Rendimiento: 13.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Sharan Highline 2,0 Lts. TDI CR DOHC Station Wagon 5P. T/A Motor CFFB Diesel",
    Nox: 0.1323,
    Rendimiento: 13.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "T-Cross 1,0 TSI T/A",
    Nox: 0.011,
    Rendimiento: 10.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "T-Cross 1,0 TSI T/M",
    Nox: 0.016,
    Rendimiento: 12.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "T-Cross 1,6 T/A",
    Nox: 0.00925,
    Rendimiento: 10.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "T-Cross 1,6 T/M",
    Nox: 0.0125,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Taos 1.4 TSI AT",
    Nox: 0.009,
    Rendimiento: 10.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan",
    Nox: 0.01715,
    Rendimiento: 11
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 5 asientos 5P. T/A Otto",
    Nox: 0.0234,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 5 Asientos 5P. T/M Otto",
    Nox: 0.0138,
    Rendimiento: 11.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 5P. 5 Asientos T/A Otto",
    Nox: 0.01915,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 5P. 7 Asientos T/A Otto",
    Nox: 0.01915,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.033,
    Rendimiento: 11
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 7 asientos 5P. T/A Otto",
    Nox: 0.0234,
    Rendimiento: 11.2
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. Station Wagon 7 Asientos 5P. T/M Otto",
    Nox: 0.0138,
    Rendimiento: 11.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 1,4 Lts. TSI DOHC Station Wagon 5P. T/M Motor CAXA Otto",
    Nox: 0.0128,
    Rendimiento: 10.1
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.13821,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.01715,
    Rendimiento: 10.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 5 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.02863,
    Rendimiento: 10
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Diesel",
    Nox: 0.13821,
    Rendimiento: 13
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.02863,
    Rendimiento: 9.9
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. Station Wagon 7 Asientos 5P. T/A 4x4 Otto",
    Nox: 0.01715,
    Rendimiento: 10.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. TDI DOHC Station Wagon 4x2 5P. T/M Motor CFF Diesel",
    Nox: 0.1307,
    Rendimiento: 15.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. TDI DOHC Station Wagon 5P. T/A 4x4 Motor Diesel",
    Nox: 0.10904,
    Rendimiento: 12.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan 2,0 Lts. TSI Sport 4Motion DOHC Station Wagon 5P. 4x4 T/A Motor CCZD Otto",
    Nox: 0.0275,
    Rendimiento: 8.3
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan TDI 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.0388,
    Rendimiento: 14.7
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Tiguan TSI 4Motion 2,0 Lts. DOHC Station Wagon 5P. T/M 4x4 Motor CCZB Otto",
    Nox: 0.02396,
    Rendimiento: 8.5
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Touareg 3,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.13664,
    Rendimiento: 11.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Touareg 3,0 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CRCA Diesel",
    Nox: 0.128,
    Rendimiento: 11.8
  },
  {
    Marca: "Volkswagen",
    Tipo: "Station Wagon",
    Modelo: "Touareg 4,2 Lts. TDI DOHC Station Wagon 5P. 4x4 T/A Motor CKDA Diesel",
    Nox: 0.15136,
    Rendimiento: 8.4
  },
  {
    Marca: "Volkswagen",
    Tipo: "Transporte de Pasajeros",
    Modelo: "Transporte 21 Asientos",
    Nox: 0.24051,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "C30 DRIVe 1,6 Lts. TDI SOHC Hatch Back 3P. T/M Motor Diesel",
    Nox: 0.1787,
    Rendimiento: 23.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40  T4 2,0 Lts. DOHC Hatch Back 5P. T/A AWD Motor Otto",
    Nox: 0.01252,
    Rendimiento: 9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC D2 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.12143,
    Rendimiento: 24.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC D2 1,6 Lts. SOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.12795,
    Rendimiento: 22.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC D2 2,0 Lts. Hatch Back 5P. T/M",
    Nox: 0.08083,
    Rendimiento: 18.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC D2 2,0 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.02944,
    Rendimiento: 13.7
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC D4 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.12585,
    Rendimiento: 14.7
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC T4 2,0 Lts. DOHC Hatch Back 5P. T/A AWD Motor Otto",
    Nox: 0.01252,
    Rendimiento: 9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC T4 2,0 Lts. Hatch Back 5P. T/A",
    Nox: 0.01876,
    Rendimiento: 11.1
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC T5 2,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.02099,
    Rendimiento: 9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 CC T5 2.0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0108,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D2 1,6 Lts. SOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.12795,
    Rendimiento: 22.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D2 2,0 Lts. Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.0508,
    Rendimiento: 17.4
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D2 2,0 Lts. Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.08083,
    Rendimiento: 18.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D2 Drive 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Diesel",
    Nox: 0.12143,
    Rendimiento: 24.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D2 Mec 2,0 Lts. Hatch Back 5P. T/M Diesel",
    Nox: 0.02944,
    Rendimiento: 13.7
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 D4 2,0 Lts. DOHC Hatch Back 5P. T/A Motor Diesel",
    Nox: 0.12585,
    Rendimiento: 14.7
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T3 1,5 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0078,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T3 2,0 Lts. Hatch Back 5P. T/M",
    Nox: 0.01355,
    Rendimiento: 9.5
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T4 1,6 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.01333,
    Rendimiento: 12.4
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T4 1,6 Lts. DOHC Hatch Back 5P. T/M Motor Otto",
    Nox: 0.00975,
    Rendimiento: 14.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T4 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0042,
    Rendimiento: 10.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T4 2,0 Lts. Hatch Back 5P. T/M 4x2 Otto",
    Nox: 0.01215,
    Rendimiento: 9.1
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T5 2,5 Lts. DOHC Hatch Back 5P. T/A Motor Otto",
    Nox: 0.02099,
    Rendimiento: 9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40 T5 2.0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0108,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40CC D2 2,0 Lts. Hatch Back 5P. T/A Diesel",
    Nox: 0.0508,
    Rendimiento: 17.4
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40CC T4 2,0 Lts. Hatch Back 5P. T/A Otto",
    Nox: 0.0042,
    Rendimiento: 10.3
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40CC T4 2,0 Lts. Hatch Back 5P. T/M 4x2 Otto",
    Nox: 0.01215,
    Rendimiento: 9.1
  },
  {
    Marca: "Volvo",
    Tipo: "Hatch Back",
    Modelo: "V40CC T5 2,0 Lts. Hatch Back 5P. T/A 4x4 Otto",
    Nox: 0.01384,
    Rendimiento: 11.8
  },
  {
    Marca: "Volvo",
    Tipo: "Hatchback",
    Modelo: "V40 CC T4 1,6 Lts. Hatchback 5P. T/A Otto",
    Nox: 0.01333,
    Rendimiento: 12.4
  },
  {
    Marca: "Volvo",
    Tipo: "Hatchback",
    Modelo: "V40 T4 CC 1,6 Lts. DOHC Hatchback 5P. T/M Motor Otto",
    Nox: 0.00975,
    Rendimiento: 14.1
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S40 DRIVe 1,6 Lts. TDI SOHC Sedan 4P. T/M Motor Diesel",
    Nox: 0.1787,
    Rendimiento: 23.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 CC T5 2,0 Lts. Sedan 4P. T/A AWD Otto",
    Nox: 0.0163,
    Rendimiento: 10.1
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 D2 Drive 1,6 Lts. Sedan 4P. T/A Motor Diesel",
    Nox: 0.14071,
    Rendimiento: 20.4
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 D2 Sedan 2,0 Lts. 5P. T/A Diesel",
    Nox: 0.0288,
    Rendimiento: 14.9
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 D4 2,0 Lts. Sedan 4P. T/A",
    Nox: 0.0281,
    Rendimiento: 13.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 D5 2,4 Lts. DOHC Sedan 4P. AWD T/A Motor Diesel",
    Nox: 0.11697,
    Rendimiento: 11.7
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 D5 AWD 2,4 DOHC Sedan 4P. 4x4 T/A Motor Diesel",
    Nox: 0.1179,
    Rendimiento: 10.5
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T3 1,5 Lts. Sedan 4P. T/A",
    Nox: 0.00915,
    Rendimiento: 9.1
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T4",
    Nox: 0.01295,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T4 1,6 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01403,
    Rendimiento: 10.4
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T4 1,6 Lts. DOHC Sedan 4P. T/M Motor Otto",
    Nox: 0.00881,
    Rendimiento: 11.6
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T4 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0057,
    Rendimiento: 9.9
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T5",
    Nox: 0.01462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T5 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01443,
    Rendimiento: 11.5
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T5 R-Desing S.S. 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01249,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T6 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.0046,
    Rendimiento: 8.6
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T6 AWD 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01436,
    Rendimiento: 10.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T6 AWD 3,0 Lts. DOHC Sedan 4P. 4x4 T/A Motor Otto",
    Nox: 0.02058,
    Rendimiento: 6.9
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T6 Polestar 2,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01351,
    Rendimiento: 9.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60 T8",
    Nox: 0.00815,
    Rendimiento: 29.3
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60CC D4 2,4 Lts. Sedan 4P. T/A 4x4 Diesel",
    Nox: 0.05093,
    Rendimiento: 14.5
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S60CC T5 AWD 2,5 Lts. Sedan 4P. T/A Otto",
    Nox: 0.03053,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S80 D5 2,4 Lts. DOHC Sedan 4P. AWD T/A Motor Diesel",
    Nox: 0.11197,
    Rendimiento: 11.4
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S80 T5 2,0 Lts. DOHC Sedan 4P. T/A Motor Otto",
    Nox: 0.01665,
    Rendimiento: 11
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 D5 2,0 Lts. Sedan 4P. T/A 4x4 Diesel",
    Nox: 0.04975,
    Rendimiento: 16.7
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 D5 2,0 Lts. Sedan 4P. T/A Diesel",
    Nox: 0.04975,
    Rendimiento: 16.7
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 T5 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.03,
    Rendimiento: 11.6
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 T5 2,0 Lts. Sedan 4P. T/A Otto",
    Nox: 0.01876,
    Rendimiento: 11.6
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 T6 2,0 Lts. Sedan 4P. T/A 4x4",
    Nox: 0.01735,
    Rendimiento: 10.5
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 T6 2,0 Lts. Sedan 4P. T/A 4x4 Otto",
    Nox: 0.01735,
    Rendimiento: 10.5
  },
  {
    Marca: "Volvo",
    Tipo: "Sedan",
    Modelo: "S90 T8 2,0 Lts. Sedan 4P. T/A 4x4 Hibrido",
    Nox: 0.0104,
    Rendimiento: 21.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 CC T5 2,0 Lts. Station Wagon 5P. T/A AWD Otto",
    Nox: 0.0163,
    Rendimiento: 10.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 CC T5 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.03054,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T4",
    Nox: 0.01295,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T4 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.0057,
    Rendimiento: 9.9
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T5",
    Nox: 0.01462,
    Rendimiento: 10.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T5 2,0 Lts. DOHC Station Wagon 5P T/A Motor Otto",
    Nox: 0.01609,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T6 3,0 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.01756,
    Rendimiento: 6.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T6 Polestar 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01351,
    Rendimiento: 9.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60 T8",
    Nox: 0.00815,
    Rendimiento: 29.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60CC D4 2,4 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.0276,
    Rendimiento: 14.7
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60CC II T5",
    Nox: 0.01706,
    Rendimiento: 9.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V60CC T5 2,5 Station Wagon T/A",
    Nox: 0.03054,
    Rendimiento: 8.9
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V90 D5 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.04975,
    Rendimiento: 16.7
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V90 T6 2,0 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.01735,
    Rendimiento: 10.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V90CC D5 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.02857,
    Rendimiento: 15.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V90CC T5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01635,
    Rendimiento: 10.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "V90CC T6 2,0 Lts. Station Wagon 5P. T/A Otto",
    Nox: 0.01636,
    Rendimiento: 9.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC 60 T8 2,0 Lts. Station Wagon 5P. T/A 4x4 Hibrido",
    Nox: 0.00388,
    Rendimiento: 27
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 D4 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.05199,
    Rendimiento: 16
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T4 2,0 Lts. Station Wagon 5P. T/A 4x2 Otto",
    Nox: 0.01025,
    Rendimiento: 8.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T4 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01025,
    Rendimiento: 8.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T4 AWD",
    Nox: 0.0131,
    Rendimiento: 9.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T4 FWD",
    Nox: 0.01593,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01341,
    Rendimiento: 9.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC40 T5 Hybrid",
    Nox: 0.01401,
    Rendimiento: 16.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 2,0 Lts. S.W. T/A Otto",
    Nox: 0.01684,
    Rendimiento: 10.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 3,0 Lts. Station Wagon T/A Otto",
    Nox: 0.01779,
    Rendimiento: 6.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 D3 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.1546,
    Rendimiento: 11.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 D4 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.12159,
    Rendimiento: 12.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 D5 2,4 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.01992,
    Rendimiento: 14.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 D5 AWD 2,4 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.11633,
    Rendimiento: 11.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 II D4 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.02034,
    Rendimiento: 15.7
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 II D5 2,0 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.02011,
    Rendimiento: 15.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 II T5 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.01336,
    Rendimiento: 9.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 II T6 2,0 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02205,
    Rendimiento: 9.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T5 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01851,
    Rendimiento: 8.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T5 2,0 Lts. DOHC Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01684,
    Rendimiento: 9.3
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T5 2,0 Lts. Station Wagon 5P. T/A 4x4",
    Nox: 0.01823,
    Rendimiento: 9.7
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T5 2,0 Lts. Station Wagon 5P. T/A AWD",
    Nox: 0.01823,
    Rendimiento: 9.7
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T5 AWD 2,5 Lts. Station Wagon 5P. T/A 4x4 Otto",
    Nox: 0.02509,
    Rendimiento: 8.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC60 T6 3,0 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.018,
    Rendimiento: 6.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC70 3,2 Lts. DOHC Station Wagon 5P. AWD T/A Motor Otto",
    Nox: 0.01934,
    Rendimiento: 7.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC70 D5 2,4 Lts. Station Wagon 5P. T/A 4x4 Diesel",
    Nox: 0.02169,
    Rendimiento: 14.8
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC70 D5 AWD 2,4 Lts. DOHC Station Wagon 5P. T/A Motor Diesel",
    Nox: 0.11799,
    Rendimiento: 11.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC70 T6 3,0 Lts. DOHC Station Wagon 5P. T/A 4x4 Motor Otto",
    Nox: 0.0171,
    Rendimiento: 6.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.0118,
    Rendimiento: 10.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 D5 2,0 Lts. Station Wagon 5P. 5 asientos T/A Motor Diesel",
    Nox: 0.05058,
    Rendimiento: 15.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 D5 2,0 Lts. Station Wagon 5P. 7 asientos T/A Motor Diesel",
    Nox: 0.05058,
    Rendimiento: 15.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 D5 2,0 Lts. Station Wagon 5P. T/A",
    Nox: 0.04727,
    Rendimiento: 15.9
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 D5 2,0 Lts. Station Wagon 5P. T/A Diesel",
    Nox: 0.0575,
    Rendimiento: 16.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 D5 2,4 DOHC Station Wagon 5P. AWD T/A Motor Diesel",
    Nox: 0.21711,
    Rendimiento: 9.1
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T5 2,0 Lts. Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01775,
    Rendimiento: 10.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T5 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.02012,
    Rendimiento: 6.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T5 AWD 2,0 Lts. Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01775,
    Rendimiento: 10.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T5 R-Design 2,5 Lts. DOHC Station Wagon 5P. 4x4 T/A Motor Otto",
    Nox: 0.02012,
    Rendimiento: 6.4
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T6 2,0 Lts. Station Wagon 5P. T/A Motor Otto",
    Nox: 0.01298,
    Rendimiento: 10.2
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T8 AWD 2,0 Lts. Station Wagon 5P. 4 asientos Hibrido T/A 4x4",
    Nox: 0.01461,
    Rendimiento: 23.6
  },
  {
    Marca: "Volvo",
    Tipo: "Station Wagon",
    Modelo: "XC90 T8 AWD 2,0 Lts. Station Wagon 5P. 7 asientos Hibrido T/A 4x4",
    Nox: 0.01461,
    Rendimiento: 23.6
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "DF6 2WD AT",
    Nox: 0.2006,
    Rendimiento: 9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "DF6 2WD MT",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "DF6 4WD AT",
    Nox: 0.2006,
    Rendimiento: 9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "DF6 4WD MT",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Dongfeng Rich 6 GL MT 4x2",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Dongfeng Rich 6 GL MT 4x4",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Dongfeng Rich 6 GLS AT 4x2",
    Nox: 0.2006,
    Rendimiento: 9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Dongfeng Rich 6 GLX AT 4x4",
    Nox: 0.2006,
    Rendimiento: 9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "New Rich 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "New Rich 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "New Rich Multipurpose 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "New Rich Multipurpose 2,4 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich 2,4 Lts. SOHC Camioneta Doble Cabina 4P. 4x2 Motor Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich 2,4 Lts. SOHC Camioneta Doble Cabina 4P. 4x4 Motor Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich 2,5 Lts. Camioneta Doble Cabina 4P. T/M 4x2 Diesel",
    Nox: 0.2324,
    Rendimiento: 11.9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich 2,5 Lts. Camioneta Doble Cabina 4P. T/M 4x4 Diesel",
    Nox: 0.2324,
    Rendimiento: 11.9
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich Multipurpose 2,4 Lts. SOHC Camioneta Doble Cabina 4P. 4x2 Motor Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "Rich Multipurpose 2,4 Lts. SOHC Camioneta Doble Cabina 4P. 4x4 Motor Otto",
    Nox: 0.0153,
    Rendimiento: 7.1
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "ZN1035U5X5",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Camioneta",
    Modelo: "ZN1035U5X5",
    Nox: 0.2416,
    Rendimiento: 10.4
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Furgon",
    Modelo: "New Succe Cargo (ZN6450V1A5) 1,6 Lts. Furgon 5P. T/M Otto",
    Nox: 0.00875,
    Rendimiento: 11
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Station Wagon",
    Modelo: "New Succe 5P (ZN6450V1A5) 1,6 Lts. Station Wagon 5 Asientos 5P. T/M Otto",
    Nox: 0.00875,
    Rendimiento: 11
  },
  {
    Marca: "ZNA Dongfeng",
    Tipo: "Station Wagon",
    Modelo: "New Succe 7P (ZN6450V1A5) 1,6 Lts. Station Wagon 7 Asientos 5P. T/M Otto",
    Nox: 0.00875,
    Rendimiento: 11
  },
  {
    Marca: "Zotye",
    Tipo: "Station Wagon",
    Modelo: "Hunter (T200) 1,3 Lts. DOHC Station Wagon 5P. T/M Motor Otto",
    Nox: 0.0092,
    Rendimiento: 12.6
  },
  {
    Marca: "ZX Auto",
    Tipo: "Camioneta",
    Modelo: "Terralord 2,5 Lts. Camioneta 4P. T/M 4x2 Diesel",
    Nox: 0.2062,
    Rendimiento: 8
  },
  {
    Marca: "ZX Auto",
    Tipo: "Camioneta",
    Modelo: "Terralord 2,5 Lts. Camioneta 4P. T/M 4x4 Diesel",
    Nox: 0.2062,
    Rendimiento: 8
  },
  {
    Marca: "ZX Auto",
    Tipo: "Camioneta",
    Modelo: "Terralord 4x4 AT",
    Nox: 0.2189,
    Rendimiento: 7.5
  },
  {
    Marca: "ZX Auto",
    Tipo: "Camioneta",
    Modelo: "Terralord D/C 2WD",
    Nox: 0.2272,
    Rendimiento: 10.1
  },
  {
    Marca: "ZX Auto",
    Tipo: "Camioneta",
    Modelo: "Terralord D/C 4WD",
    Nox: 0.2272,
    Rendimiento: 10.1
  },
  {
    Marca: "ZX",
    Tipo: "Camioneta",
    Modelo: "TUV 2,2 Lts. DOHC Pick Up Doble Cabina 4P. T/M Motor Otto",
    Nox: 0.03715,
    Rendimiento: 7.4
  }
]

const DetailVehicle = use("App/Models/DetailVehicle")

class DetailVehicleSeeder {
    async run() {
       for (let i in data) {
        await DetailVehicle.create(data[i])
      }
      console.log('Finished DetailVehicle')
    }
  }

module.exports = DetailVehicleSeeder
