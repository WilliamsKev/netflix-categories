const defaultCategories = [
  {
    "name": "Action & Aventure ",
    "code": "1365",
    "sub": [
      {
        "name": "Films d'action asiatiques ",
        "code": "77232"
      },
      {
        "name": "Les grands classiques Action & Aventure ",
        "code": "46576"
      },
      {
        "name": "Comédies d'action ",
        "code": "43040"
      },
      {
        "name": "Thrillers d'action ",
        "code": "43048"
      },
      {
        "name": "Aventures ",
        "code": "7442"
      },
      {
        "name": "Comics et Films de Superhéros ",
        "code": "10118"
      },
      {
        "name": "Westerns ",
        "code": "7700"
      },
      {
        "name": "Films d'espionnage ",
        "code": "10702"
      },
      {
        "name": "Films d'arts martiaux ",
        "code": "8985"
      },
      {
        "name": "Films de guerre & action ",
        "code": "2125"
      }
    ]
  },
  {
    "name": "Dessins animés ",
    "code": "7424",
    "sub": [
      {
        "name": "Dessins animés adultes ",
        "code": "11881"
      },
      {
        "name": "Dessins animés d'action ",
        "code": "2653"
      },
      {
        "name": "Comédies animées",
        "code": "9302"
      },
      {
        "name": "Drames animés ",
        "code": "452"
      },
      {
        "name": "Dessins animés de Science Fiction ",
        "code": "2729"
      },
      {
        "name": "Dessins animés d'horreur",
        "code": "10695"
      },
      {
        "name": "Dessins animés Heroïc & Fantasy ",
        "code": "11146"
      },
      {
        "name": "Séries animées ",
        "code": "6721"
      }
    ]
  },
  {
    "name": "Films pour enfants ou en famille ",
    "code": "783",
    "sub": [
      {
        "name": "Films de 0 à 2 ans ",
        "code": "6796"
      },
      {
        "name": "Films de 2 à 4 ans ",
        "code": "6218"
      },
      {
        "name": "Films de 5 à 7 ans ",
        "code": "5455"
      },
      {
        "name": "Films de 8 à 10 ans ",
        "code": "561"
      },
      {
        "name": "Films de 11 à 12 ans ",
        "code": "6962"
      },
      {
        "name": "Documentaires pour enfants ",
        "code": "10659"
      },
      {
        "name": "Disney ",
        "code": "67673"
      },
      {
        "name": "Films basés sur des livres pour enfants ",
        "code": "10056"
      },
      {
        "name": "Cartoons ",
        "code": "11177"
      },
      {
        "name": "Programmes TV pour enfants ",
        "code": "27346"
      },
      {
        "name": "Musique pour enfants ",
        "code": "52843"
      },
      {
        "name": "Contes autour des animaux ",
        "code": "5507"
      }
    ]
  },
  {
    "name": "Les grands classiques du cinéma ",
    "code": "31574",
    "sub": [
      {
        "name": "Les classiques de la comédie ",
        "code": "31694"
      },
      {
        "name": "Les drames classiques ",
        "code": "29809"
      },
      {
        "name": "Les classiques de la Science Fiction & Fantasy ",
        "code": "47147"
      },
      {
        "name": "Les Thrillers ",
        "code": "46588"
      },
      {
        "name": "Film Noir ",
        "code": "7687"
      },
      {
        "name": "Les grands films de guerre ",
        "code": "48744"
      },
      {
        "name": "Les grandes épopées ",
        "code": "52858"
      },
      {
        "name": "Cinéma muet ",
        "code": "53310"
      },
      {
        "name": "Westerns ",
        "code": "47465"
      }
    ]
  },
  {
    "name": "Comédies ",
    "code": "6548",
    "sub": [
      {
        "name": "Comédies noires ",
        "code": "869"
      },
      {
        "name": "Comédies de l'étranger",
        "code": "4426"
      },
      {
        "name": "Comédies politiques ",
        "code": "2700"
      },
      {
        "name": "Comédies autour du sport ",
        "code": "5286"
      },
      {
        "name": "Stand-up ",
        "code": "11559"
      },
      {
        "name": "Comédies pour ados ",
        "code": "3519"
      },
      {
        "name": "Satires ",
        "code": "4922"
      },
      {
        "name": "Comédies romantiques ",
        "code": "5475"
      }
    ]
  },
  {
    "name": "Films cultes ",
    "code": "7627",
    "sub": [
      {
        "name": "Films de série B",
        "code": "8195"
      },
      {
        "name": "Films Kitchampy",
        "code": "1252"
      },
      {
        "name": "Films de Science-Fiction et Fantasy",
        "code": "4734"
      },
      {
        "name": "Comédies cultes ",
        "code": "9434"
      }
    ]
  },
  {
    "name": "Documentaires ",
    "code": "6839",
    "sub": [
      {
        "name": "Biographies ",
        "code": "3652"
      },
      {
        "name": "Crimes ",
        "code": "9875"
      },
      {
        "name": "Documentaires étrangers ",
        "code": "5161"
      },
      {
        "name": "Histoire ",
        "code": "5349"
      },
      {
        "name": "Guerres ",
        "code": "4006"
      },
      {
        "name": "Sports ",
        "code": "180"
      },
      {
        "name": "Musique et concerts ",
        "code": "90361"
      },
      {
        "name": "Voyage ",
        "code": "1159"
      },
      {
        "name": "Politique ",
        "code": "7018"
      },
      {
        "name": "Religion ",
        "code": "10005"
      },
      {
        "name": "Science & Nature ",
        "code": "2595"
      },
      {
        "name": "Culture et Société ",
        "code": "3675"
      }
    ]
  },
  {
    "name": "Drames ",
    "code": "5763",
    "sub": [
      {
        "name": "Biographies",
        "code": "3179"
      },
      {
        "name": "Les grands classiques",
        "code": "29809"
      },
      {
        "name": "Au tribunal ",
        "code": "528582748"
      },
      {
        "name": "Crime ",
        "code": "6889"
      },
      {
        "name": "Basés sur un livre ",
        "code": "4961"
      },
      {
        "name": "Basés sur une histoire vraie ",
        "code": "3653"
      },
      {
        "name": "Drames sentimentaux ",
        "code": "6384"
      },
      {
        "name": "À l'étranger ",
        "code": "2150"
      },
      {
        "name": "Sport ",
        "code": "7243"
      },
      {
        "name": "Films indépendants ",
        "code": "384"
      },
      {
        "name": "Drames pour adolescents ",
        "code": "9299"
      },
      {
        "name": "Films de guerre ",
        "code": "11"
      },
      {
        "name": "Drames politiques ",
        "code": "6616"
      },
      {
        "name": "Drames romantiques ",
        "code": "1255"
      },
      {
        "name": "Dans le showbiz ",
        "code": "5012"
      },
      {
        "name": "Société ",
        "code": "3947"
      }
    ]
  },
  {
    "name": "Foi & Spiritualité ",
    "code": "26835",
    "sub": [
      {
        "name": "Films ",
        "code": "52804"
      },
      {
        "name": "Documentaires spirituels ",
        "code": "2760"
      },
      {
        "name": "Pour les enfants ",
        "code": "751423"
      }
    ]
  },
  {
    "name": "Films étrangers ",
    "code": "7462",
    "sub": [
      {
        "name": "Art de vivre ",
        "code": "29764"
      },
      {
        "name": "Action & Aventure ",
        "code": "11828"
      },
      {
        "name": "Les grands classiques ",
        "code": "32473"
      },
      {
        "name": "Comédies ",
        "code": "4426"
      },
      {
        "name": "Documentaires ",
        "code": "5161"
      },
      {
        "name": "Drames ",
        "code": "2150"
      },
      {
        "name": "Science-Fiction & Fantasy ",
        "code": "6485"
      },
      {
        "name": "Thrillers ",
        "code": "10306"
      },
      {
        "name": "Comédies romantiques ",
        "code": "7153"
      },
      {
        "name": "Cinéma africain ",
        "code": "3761"
      },
      {
        "name": "Cinéma australien ",
        "code": "5230"
      },
      {
        "name": "Cinéma belge ",
        "code": "262"
      },
      {
        "name": "Cinéma coréen ",
        "code": "5685"
      },
      {
        "name": "Cinéma latino-américain",
        "code": "1613"
      },
      {
        "name": "Cinéma du Moyen-Orient ",
        "code": "5875"
      },
      {
        "name": "Cinéma néozélandais ",
        "code": "63782"
      },
      {
        "name": "Cinéma russe ",
        "code": "11567"
      },
      {
        "name": "Cinéma scandinave ",
        "code": "9292"
      },
      {
        "name": "Asie du Sud Est ",
        "code": "9196"
      },
      {
        "name": "Cinéma espagnol ",
        "code": "58741"
      },
      {
        "name": "Cinéma grec ",
        "code": "61115"
      },
      {
        "name": "Cinéma allemand ",
        "code": "58886"
      },
      {
        "name": "Cinéma français ",
        "code": "58807"
      },
      {
        "name": "Cinéma d'Europe de l'Est ",
        "code": "5254"
      },
      {
        "name": "Pays-Bas ",
        "code": "10606"
      },
      {
        "name": "Cinéma irlandais ",
        "code": "58750"
      },
      {
        "name": "Cinéma japonais ",
        "code": "10398"
      },
      {
        "name": "Cinéma italien ",
        "code": "8221"
      },
      {
        "name": "Cinéma indien ",
        "code": "10463"
      },
      {
        "name": "Cinéma chinois ",
        "code": "3960"
      },
      {
        "name": "Cinéma britannique ",
        "code": "10757"
      }
    ]
  },
  {
    "name": "Cinéma indépendant ",
    "code": "7077",
    "sub": [
      {
        "name": "Oeuvres expérimentales ",
        "code": "11079"
      },
      {
        "name": "Action & Aventure ",
        "code": "11804"
      },
      {
        "name": "Thrillers indépendants ",
        "code": "3269"
      },
      {
        "name": "Films romantiques indépendants ",
        "code": "9916"
      },
      {
        "name": "Comédies indépendantes ",
        "code": "4195"
      },
      {
        "name": "Drames indépendants ",
        "code": "384"
      }
    ]
  },
  {
    "name": "Musique ",
    "code": "1701",
    "sub": [
      {
        "name": "Pour les enfants ",
        "code": "52843"
      },
      {
        "name": "Country & Western/Folk ",
        "code": "1105"
      },
      {
        "name": "Jazz ",
        "code": "10271"
      },
      {
        "name": "Musique latine ",
        "code": "10741"
      },
      {
        "name": "Concerts Urban & Dance ",
        "code": "9472"
      },
      {
        "name": "Concerts du monde entier ",
        "code": "2856"
      },
      {
        "name": "Concerts Rock & Pop ",
        "code": "3278"
      }
    ]
  },
  {
    "name": "Comédies musicales ",
    "code": "13335",
    "sub": [
      {
        "name": "Les grands classiques ",
        "code": "32392"
      },
      {
        "name": "Disney ",
        "code": "59433"
      },
      {
        "name": "Dans le showbiz ",
        "code": "13573"
      },
      {
        "name": "Sur scène ",
        "code": "55774"
      }
    ]
  },
  {
    "name": "Romances ",
    "code": "8883",
    "sub": [
      {
        "name": "Les plus célèbres ",
        "code": "502675"
      },
      {
        "name": "Excentrique ",
        "code": "36103"
      },
      {
        "name": "Films indépendants ",
        "code": "9916"
      },
      {
        "name": "Cinéma étranger ",
        "code": "7153"
      },
      {
        "name": "Drames ",
        "code": "1255"
      },
      {
        "name": "Les grands classiques ",
        "code": "31273"
      },
      {
        "name": "Comédies romantiques ",
        "code": "5475"
      }
    ]
  },
  {
    "name": "Science-Fiction & Fantasy ",
    "code": "1492",
    "sub": [
      {
        "name": "Films d'action ",
        "code": "1568"
      },
      {
        "name": "Avec des extraterrestres ",
        "code": "3327"
      },
      {
        "name": "Les classiques ",
        "code": "47147"
      },
      {
        "name": "Films cultes ",
        "code": "4734"
      },
      {
        "name": "Fantasy ",
        "code": "9744"
      },
      {
        "name": "Films d'aventure ",
        "code": "6926"
      },
      {
        "name": "Drames ",
        "code": "3916"
      },
      {
        "name": "Thrillers ",
        "code": "11014"
      },
      {
        "name": "Cinéma étranger",
        "code": "6485"
      }
    ]
  },
  {
    "name": "Films sur le thème du sport ",
    "code": "4370",
    "sub": [
      {
        "name": "Comédies ",
        "code": "5286"
      },
      {
        "name": "Documentaires ",
        "code": "180"
      },
      {
        "name": "Drames ",
        "code": "7243"
      },
      {
        "name": "Films sur le baseball ",
        "code": "12339"
      },
      {
        "name": "Films sur le football US ",
        "code": "12803"
      },
      {
        "name": "Films sur la boxe ",
        "code": "12443"
      },
      {
        "name": "Films sur le foot ",
        "code": "12549"
      },
      {
        "name": "Arts martiaux, combats, catch ",
        "code": "6695"
      },
      {
        "name": "Films de basketball ",
        "code": "12762"
      },
      {
        "name": "Sports & Fitness ",
        "code": "9327"
      }
    ]
  },
  {
    "name": "Thrillers ",
    "code": "8933",
    "sub": [
      {
        "name": "Films d'action",
        "code": "43048"
      },
      {
        "name": "Les classiques ",
        "code": "46588"
      },
      {
        "name": "Crimes ",
        "code": "10499"
      },
      {
        "name": "Films étrangers ",
        "code": "10306"
      },
      {
        "name": "Thrillers indépendants ",
        "code": "3269"
      },
      {
        "name": "Films de gangsters ",
        "code": "31851"
      },
      {
        "name": "Thrillers psychologiques ",
        "code": "5505"
      },
      {
        "name": "Thrillers politiques ",
        "code": "10504"
      },
      {
        "name": "Mystères ",
        "code": "9994"
      },
      {
        "name": "Thrillers de Science-Fiction ",
        "code": "11014"
      },
      {
        "name": "Thrillers d'espionnage ",
        "code": "9147"
      }
    ]
  },
  {
    "name": "Séries & Shows TV ",
    "code": "83",
    "sub": [
      {
        "name": "Séries britanniques ",
        "code": "52117"
      },
      {
        "name": "Les classiques ",
        "code": "46553"
      },
      {
        "name": "Crimes ",
        "code": "26146"
      },
      {
        "name": "Séries cultes ",
        "code": "74652"
      },
      {
        "name": "Cuisine et voyage ",
        "code": "72436"
      },
      {
        "name": "Programmes pour enfants ",
        "code": "27346"
      },
      {
        "name": "Séries coréennes ",
        "code": "67879"
      },
      {
        "name": "Mini-séries ",
        "code": "4814"
      },
      {
        "name": "Séries sur la guerre ",
        "code": "25804"
      },
      {
        "name": "Science & Nature ",
        "code": "52780"
      },
      {
        "name": "Action & Adventure ",
        "code": "10673"
      },
      {
        "name": "Comédies ",
        "code": "10375"
      },
      {
        "name": "Documentaires ",
        "code": "10105"
      },
      {
        "name": "Drames ",
        "code": "11714"
      },
      {
        "name": "Horreur ",
        "code": "83059"
      },
      {
        "name": "Mystère ",
        "code": "4366"
      },
      {
        "name": "Science-Fiction & Fantasy ",
        "code": "1372"
      },
      {
        "name": "Télé-réalité ",
        "code": "9833"
      },
      {
        "name": "Programmes pour ados ",
        "code": "60951"
      }
    ]
  }
]

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['categories'], ({categories}) => {
    console.log(categories)
    if(categories === undefined){
      chrome.storage.local.set({categories: defaultCategories})
    }
  })
})
