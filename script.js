// Game Data
const gameData = {
  characters: [
    {
      name: "Adam Shepherd",
      family: "Shepherd",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Gray",
      image: "adam"
    },
    {
      name: "Alex Shepherd",
      family: "Shepherd",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Brown",
      image: "alex"
    },
    {
      name: "Alessa Gillespie",
      family: "Gillespie",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Black",
      image: "alessa"
    },
    {
      name: "Angela Orosco",
      family: "Orosco",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Unspecified",
      hairColor: "Black",
      image: "angela"
    },
    {
      name: "Andrew DeSalvo",
      family: "DeSalvo",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Silent Hill",
      hairColor: "Unspecified",
      image: "andrew"
    },
    {
      name: "Cheryl Mason",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Black",
      image: "cheryl"
    },
    {
      name: "Claudia Wolf",
      family: "Wolf",
      gender: "Female",
      firstAppearance: "Silent Hill 3",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "claudia"
    },
    {
      name: "Cynthia Velasquez",
      family: "Velasquez",
      gender: "Female",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Black",
      image: "cynthia"
    },
    {
      name: "Cybil Bennett",
      family: "Bennett",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Brahms",
      hairColor: "Blonde",
      image: "cybil"
    },
    {
      name: "Curtis Ackers",
      family: "Ackers",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Black",
      image: "curtis"
    },
    {
      name: "Dahlia Gillespie",
      family: "Gillespie",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Gray",
      image: "dahlia"
    },
    {
      name: "Douglas Cartland",
      family: "Cartland",
      gender: "Male",
      firstAppearance: "Silent Hill 3",
      hometown: "Unspecified",
      hairColor: "Gray",
      image: "douglas"
    },
    {
      name: "Eddie Dombrowski",
      family: "Dombrowski",
      gender: "Male",
      firstAppearance: "Silent Hill 2",
      hometown: "Unspecified",
      hairColor: "Blonde",
      image: "eddie"
    },
    {
      name: "Eileen Galvin",
      family: "Galvin",
      gender: "Female",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Brown",
      image: "eileen"
    },
    {
      name: "Elle Holloway",
      family: "Holloway",
      gender: "Female",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Blonde",
      image: "elle"
    },
    {
      name: "Frank Sunderland",
      family: "Sunderland",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Brown",
      image: "frank"
    },
    {
      name: "Harry Mason",
      family: "Mason",
      gender: "Male",
      firstAppearance: "Silent Hill",
      hometown: "Unspecified",
      hairColor: "Brown",
      image: "harry"
    },
    {
      name: "Heather Mason",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill 3",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "heather"
    },
    {
      name: "Henry Townshend",
      family: "Townshend",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Brown",
      image: "henry"
    },
    {
      name: "James Sunderland",
      family: "Sunderland",
      gender: "Male",
      firstAppearance: "Silent Hill 2",
      hometown: "Unspecified",
      hairColor: "Blonde",
      image: "james"
    },
    {
      name: "James Wheeler",
      family: "Wheeler",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Black",
      image: "jamesw"
    },
    {
      name: "Jasper Gein",
      family: "Gein",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Unspecified",
      hairColor: "Brown",
      image: "jasper"
    },
    {
      name: "Jodie Mason",
      family: "Mason",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Unspecified",
      hairColor: "Black",
      image: "jodie"
    },
    {
      name: "Joseph Schreiber",
      family: "Schreiber",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Unspecified",
      image: "joseph"
    },
    {
      name: "Joshua Shepherd",
      family: "Shepherd",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Brown",
      image: "joshua"
    },
    {
      name: "Laura",
      family: "Unspecified",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Unspecified",
      hairColor: "Blonde",
      image: "laura"
    },
    {
      name: "Lillian Shepherd",
      family: "Shepherd",
      gender: "Female",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Brown",
      image: "lillian"
    },
    {
      name: "Lisa Garland",
      family: "Garland",
      gender: "Female",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "lisa"
    },
    {
      name: "Margaret Holloway",
      family: "Holloway",
      gender: "Female",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Ashfield",
      hairColor: "Blonde",
      image: "margaret"
    },
    {
      name: "Maria",
      family: "Unspecified",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "maria"
    },
    {
      name: "Martin Fitch",
      family: "Fitch",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Ashfield",
      hairColor: "Gray",
      image: "martin"
    },
    {
      name: "Mary Sunderland",
      family: "Sunderland",
      gender: "Female",
      firstAppearance: "Silent Hill 2",
      hometown: "Unspecified",
      hairColor: "Brown",
      image: "mary"
    },
    {
      name: "Michael Kaufmann",
      family: "Kaufmann",
      gender: "Male",
      firstAppearance: "Silent Hill",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "kaufmann"
    },
    {
      name: "Richard Braintree",
      family: "Braintree",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Ashfield",
      hairColor: "Gray",
      image: "richard"
    },
    {
      name: "Richard Grady",
      family: "Grady",
      gender: "Male",
      firstAppearance: "Silent Hill: Origins",
      hometown: "Unspecified",
      hairColor: "Brown",
      image: "richardg"
    },
    {
      name: "Sam Bartlett",
      family: "Bartlett",
      gender: "Male",
      firstAppearance: "Silent Hill: Homecoming",
      hometown: "Shepherd's Glen",
      hairColor: "Brown",
      image: "sam"
    },
    {
      name: "Travis Grady",
      family: "Grady",
      gender: "Male",
      firstAppearance: "Silent Hill: Origins",
      hometown: "Unspecified",
      hairColor: "Brown",
      image: "travis"
    },
    {
      name: "Vincent Smith",
      family: "Smith",
      gender: "Male",
      firstAppearance: "Silent Hill 3",
      hometown: "Silent Hill",
      hairColor: "Brown",
      image: "vincent"
    },
    {
      name: "Walter Sullivan",
      family: "Sullivan",
      gender: "Male",
      firstAppearance: "Silent Hill 4: The Room",
      hometown: "Silent Hill",
      hairColor: "Blonde",
      image: "walter"
    }
  ],
  monsters: [
    {
      name: "Abstract Daddy",
      image: "abstractd"
    },
    {
      name: "Air Screamer",
      image: "airs"
    },
    {
      name: "Alessa's Dream",
      image: "ald"
    },
    {
      name: "Amnion",
      image: "amnion"
    },
    {
      name: "Ariel",
      image: "ariel"
    },
    {
      name: "Asphyxia",
      image: "asp"
    },
    {
      name: "Bottom",
      image: "bot"
    },
    {
      name: "Bubble Head Nurse",
      firstAppearance: "Silent Hill 2",
      image: "bnurse"
    },
    {
      name: "Butcher",
      image: "butcher"
    },
    {
      name: "Caliban",
      image: "cali"
    },
    {
      name: "Closer",
      image: "clos"
    },
    {
      name: "Double Head",
      firstAppearance: "Silent Hill 3",
      image: "double_head"
    },
    {
      name: "Feral",
      image: "feral"
    },
    {
      name: "Flesh Lip",
      image: "flip"
    },
    {
      name: "Floatstinger",
      image: "fstin"
    },
    {
      name: "Grey Child",
      image: "gch"
    },
    {
      name: "Gum Head",
      image: "gum"
    },
    {
      name: "Incubus",
      image: "inc"
    },
    {
      name: "Insane Cancer",
      image: "insc"
    },
    {
      name: "Larval Stalker",
      image: "larv"
    },
    {
      name: "Lurker",
      image: "lurk"
    },
    {
      name: "Lying Figure",
      image: "lyf"
    },
    {
      name: "Mandarin",
      image: "manda"
    },
    {
      name: "Mannequin",
      image: "mann"
    },
    {
      name: "Mary Boss",
      image: "maryb"
    },
    {
      name: "Memory of Alessa",
      image: "memal"
    },
    {
      name: "Missionary",
      image: "miss"
    },
    {
      name: "Needler",
      image: "need"
    },
    {
      name: "Night Flutter",
      image: "nflu"
    },
    {
      name: "Numb Body",
      image: "num"
    },
    {
      name: "Patient",
      image: "patient"
    },
    {
      name: "Pendulum",
      image: "pendulum"
    },
    {
      name: "Puppet Doctor",
      image: "pdoc"
    },
    {
      name: "Puppet Nurse",
      image: "pnur"
    },
    {
      name: "Pyramid Head",
      firstAppearance: "Silent Hill 2",
      image: "pyramid_head"
    },
    {
      name: "Robbie the Rabbit",
      image: "rob"
    },
    {
      name: "Romper",
      image: "romp"
    },
    {
      name: "Scarlet Boss",
      image: "scarb"
    },
    {
      name: "Schism",
      image: "sch"
    },
    {
      name: "Sepulcher",
      image: "sep"
    },
    {
      name: "Siam",
      image: "siam"
    },
    {
      name: "Slurper",
      image: "slup"
    },
    {
      name: "Smog",
      image: "smog"
    },
    {
      name: "Sniffer Dog",
      image: "can"
    },
    {
      name: "Straightjacket",
      image: "stjack"
    },
    {
      name: "Twin Victim",
      image: "twin"
    },
    {
      name: "Wheelchair",
      image: "wheel"
    }
  ],
  musics: [
    {
      name: "A World Of Madness",
      game: "Silent Hill 2",
      youtubeId: "fpGv8NWzlpw",
      duration: 40
    },
    {
      name: "Alex Theme",
      game: "Silent Hill: Homecoming",
      youtubeId: "BUEG6QXRoPU",
      duration: 40
    },
    {
      name: "Alone In The Town",
      game: "Silent Hill 2",
      youtubeId: "qTKlVbNenn4",
      duration: 40
    },
    {
      name: "Always On My Mind",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "FJtBXW4abRI",
      duration: 40
    },
    {
      name: "Anam Cara",
      game: "Silent Hill 2 Remake",
      youtubeId: "2CFviRRQTPI",
      duration: 40
    },
    {
      name: "Angel's Thanatos",
      game: "Silent Hill 2",
      youtubeId: "RFKgMoVa9hE",
      duration: 40
    },
    {
      name: "Betrayal",
      game: "Silent Hill 2",
      youtubeId: "WShknpNpHbY",
      duration: 40
    },
    {
      name: "Breeze in Monochrome Night",
      game: "Silent Hill 3",
      youtubeId: "MF4LnJZTyOQ",
      duration: 40
    },
    {
      name: "Childish Thoughts",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "rgpokMLiklI",
      duration: 40
    },
    {
      name: "Claw Finger",
      game: "Silent Hill",
      youtubeId: "-sS7T5_kC6I",
      duration: 40
    },
    {
      name: "Cold Blood",
      game: "Silent Hill: Homecoming",
      youtubeId: "03h2B2ZbJ88",
      duration: 40
    },
    {
      name: "Cradel Of Forest",
      game: "Silent Hill 4: The Room",
      youtubeId: "9f4aWcnUXbo",
      duration: 40
    },
    {
      name: "Creeping Distress",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "gtBl8Zd1v0c",
      duration: 40
    },
    {
      name: "Dance With Night Wind",
      game: "Silent Hill 3",
      youtubeId: "MiFeu9m9Mvo",
      duration: 40
    },
    {
      name: "Deputy Wheeler",
      game: "Silent Hill: Homecoming",
      youtubeId: "F0A64ByqhMA",
      duration: 40
    },
    {
      name: "Devil Lyric",
      game: "Silent Hill",
      youtubeId: "8lVUwRBcgpE",
      duration: 40
    },
    {
      name: "Don't Cry",
      game: "Silent Hill",
      youtubeId: "g4bTvxFKg88",
      duration: 40
    },
    {
      name: "Elle Theme",
      game: "Silent Hill: Homecoming",
      youtubeId: "W-F73PI9DNM",
      duration: 40
    },
    {
      name: "End of Small Sanctuary",
      game: "Silent Hill 3",
      youtubeId: "cADH06lKVNA",
      duration: 40
    },
    {
      name: "Fermata In Mistic Air",
      game: "Silent Hill 2",
      youtubeId: "dTuFnAVjiKw",
      duration: 40
    },
    {
      name: "Fever Chill",
      game: "Silent Hill 4: The Room",
      youtubeId: "C0Hadc-RsO8",
      duration: 40
    },
    {
      name: "Float Up from Dream",
      game: "Silent Hill 3",
      youtubeId: "7Jr7xw3NLx0",
      duration: 40
    },
    {
      name: "Forest",
      game: "Silent Hill 2",
      youtubeId: "xZhvK0lZFxo",
      duration: 40
    },
    {
      name: "Heaven's Night",
      game: "Silent Hill 2",
      youtubeId: "8HXMl6mAlFk",
      duration: 40
    },
    {
      name: "I Want Love",
      game: "Silent Hill 3",
      youtubeId: "WFTW49WYf-Y",
      duration: 40
    },
    {
      name: "I'll Kill You",
      game: "Silent Hill",
      youtubeId: "9kLhN-EuAlM",
      duration: 40
    },
    {
      name: "Innocent Moon",
      game: "Silent Hill 3",
      youtubeId: "56IZMGxG8r8",
      duration: 40
    },
    {
      name: "Killing Time",
      game: "Silent Hill",
      youtubeId: "diubgNmO1pQ",
      duration: 40
    },
    {
      name: "Laura Plays The Piano",
      game: "Silent Hill 2",
      youtubeId: "tdu3vfZLe_I",
      duration: 40
    },
    {
      name: "Letter from The Lost Days",
      game: "Silent Hill 3",
      youtubeId: "4Df5V40-VYI",
      duration: 40
    },
    {
      name: "Lives Wasted Away",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "CuhZvEWYZMM",
      duration: 40
    },
    {
      name: "Lost Carol",
      game: "Silent Hill 3",
      youtubeId: "5fO1e2MT2pk",
      duration: 37
    },
    {
      name: "Love Psalm",
      game: "Silent Hill 2",
      youtubeId: "0iYWuU9aTxg",
      duration: 40
    },
    {
      name: "Maternal Heart",
      game: "Silent Hill 3",
      youtubeId: "HglXDxMdSfM",
      duration: 40
    },
    {
      name: "Melancholy Requiem",
      game: "Silent Hill 4: The Room",
      youtubeId: "Sjqn5LvAth0",
      duration: 40
    },
    {
      name: "Never Forgive Me Never Forget Me",
      game: "Silent Hill 3",
      youtubeId: "_r2ozeKBG20",
      duration: 40
    },
    {
      name: "Not Tomorrow",
      game: "Silent Hill",
      youtubeId: "tDgjTP8fuz4",
      duration: 40
    },
    {
      name: "Null Moon",
      game: "Silent Hill 2",
      youtubeId: "bGZN5m3qs_c",
      duration: 40
    },
    {
      name: "One More Soul To The Call",
      game: "Silent Hill: Homecoming",
      youtubeId: "xOSbEafTHfo",
      duration: 40
    },
    {
      name: "Order Church",
      game: "Silent Hill: Homecoming",
      youtubeId: "MHik5S5D7Bk",
      duration: 40
    },
    {
      name: "Ordinary Vanity",
      game: "Silent Hill 2",
      youtubeId: "9YxUh4rHDUo",
      duration: 40
    },
    {
      name: "Otherside",
      game: "Silent Hill",
      youtubeId: "sHfEzAXN7bc",
      duration: 40
    },
    {
      name: "Overdose Delusion",
      game: "Silent Hill 2",
      youtubeId: "CtYvZGK_ZEs",
      duration: 40
    },
    {
      name: "Pianissimo Epilogue",
      game: "Silent Hill 2",
      youtubeId: "dkZfID8J84A",
      duration: 40
    },
    {
      name: "Please Love Me Once More",
      game: "Silent Hill 3",
      youtubeId: "Hs-xYYw43i8",
      duration: 40
    },
    {
      name: "Prayer",
      game: "Silent Hill 3",
      youtubeId: "xFfOBTTrs_c",
      duration: 40
    },
    {
      name: "Prisonic Fairytale",
      game: "Silent Hill 2",
      youtubeId: "ZKPREjJRkH8",
      duration: 40
    },
    {
      name: "Promise",
      game: "Silent Hill 2",
      youtubeId: "6qalGezr76o",
      duration: 40
    },
    {
      name: "Promise (Reprise)",
      game: "Silent Hill 2",
      youtubeId: "8N_PXTGdlGw",
      duration: 40
    },
    {
      name: "Remodeling",
      game: "Silent Hill 4: The Room",
      youtubeId: "2a7WTXCdhbw",
      duration: 40
    },
    {
      name: "Resting Comfortably",
      game: "Silent Hill 4: The Room",
      youtubeId: "b0VdQ1H_jCM",
      duration: 40
    },
    {
      name: "Room Of Angel",
      game: "Silent Hill 4: The Room",
      youtubeId: "eX6GmN4usKY",
      duration: 40
    },
    {
      name: "Scarlet",
      game: "Silent Hill: Homecoming",
      youtubeId: "7ktKG-w35kk",
      duration: 40
    },
    {
      name: "Shrill Insanity",
      game: "Silent Hill: Origins",
      youtubeId: "_Wpdk1-XJdk",
      duration: 40
    },
    {
      name: "Sickness Unto Foolish Death",
      game: "Silent Hill 3",
      youtubeId: "Mvle7cjUQzM",
      duration: 40
    },
    {
      name: "Silent Circus",
      game: "Silent Hill 4: The Room",
      youtubeId: "sYWayhJUETc",
      duration: 40
    },
    {
      name: "Silent Hill Theme",
      game: "Silent Hill",
      youtubeId: "mdqNshgDwtQ",
      duration: 40
    },
    {
      name: "Snow Driven",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "hEUgSaKJpXQ",
      duration: 40
    },
    {
      name: "Snow Flower",
      game: "Silent Hill: Homecoming",
      youtubeId: "a0kPYHG3020",
      duration: 40
    },
    {
      name: "Tears of",
      game: "Silent Hill",
      youtubeId: "NKJ-0I7I9AY",
      duration: 40
    },
    {
      name: "Tender Sugar",
      game: "Silent Hill 4: The Room",
      youtubeId: "-KNqndgBG5o",
      duration: 40
    },
    {
      name: "The Day Of Night",
      game: "Silent Hill 2",
      youtubeId: "ZBL5y8AciNw",
      duration: 40
    },
    {
      name: "The Last Mariachi",
      game: "Silent Hill 4: The Room",
      youtubeId: "0PGOJsJDV6g",
      duration: 40
    },
    {
      name: "The Story Begins",
      game: "Silent Hill: Origins",
      youtubeId: "5XwpsKl7TZ4",
      duration: 40
    },
    {
      name: "The Terminal Show",
      game: "Silent Hill: Homecoming",
      youtubeId: "rc0uNFMdw24",
      duration: 40
    },
    {
      name: "Theme of Laura",
      game: "Silent Hill 2",
      youtubeId: "td3P1-cfZ4E",
      duration: 40
    },
    {
      name: "Theme Of Laura (Repetition)",
      game: "Silent Hill 2 Remake",
      youtubeId: "OhGRAsr9Ifw",
      duration: 40
    },
    {
      name: "Theme Of Laura (Reprise)",
      game: "Silent Hill 2",
      youtubeId: "56lWd1m3a5w",
      duration: 40
    },
    {
      name: "Traversing The Portals Of Reality",
      game: "Silent Hill 4: The Room",
      youtubeId: "XsvGWBduBOk",
      duration: 40
    },
    {
      name: "True",
      game: "Silent Hill 2",
      youtubeId: "UDKx1Rp1yAA",
      duration: 40
    },
    {
      name: "Walk on Vanity Ruins",
      game: "Silent Hill 3",
      youtubeId: "4fR3ZrGPANg",
      duration: 40
    },
    {
      name: "Waverer",
      game: "Silent Hill 4: The Room",
      youtubeId: "2VoeGIbwqTM",
      duration: 40
    },
    {
      name: "When You're Gone",
      game: "Silent Hill: Shattered Memories",
      youtubeId: "-12u04eADNU",
      duration: 40
    },
    {
      name: "White Noiz",
      game: "Silent Hill 2",
      youtubeId: "Q95kw_pBXu0",
      duration: 40
    },
    {
      name: "Wounded Warsong",
      game: "Silent Hill 4: The Room",
      youtubeId: "iyfyHMnWx8E",
      duration: 40
    },
    {
      name: "You're Not Here",
      game: "Silent Hill 3",
      youtubeId: "UkumV_dHbkg",
      duration: 40
    },
    {
      name: "Your Rain",
      game: "Silent Hill 4: The Room",
      youtubeId: "U-dv06NhGn8",
      duration: 40
    }
  ]
};

// Translation System
const translations = {
  en: {
    menuTitle: "Select Game Mode",
    characters: "Characters",
    monsters: "Monsters",
    musics: "Musics",
    placeholder: "Type or select a character",
    monsterPlaceholder: "Guess the monster's name",
    musicPlaceholder: "Guess the music name",
    submit: "Submit Guess",
    labels: ["Name", "Family", "Gender", "First Appearance", "Hometown", "Hair Color"],
    monsterHint: "First appeared in: ",
    success: "Congratulations! You guessed right!",
    failure: "Game Over! The correct answer was: ",
    attempts: "Attempts left: ",
    backToMenu: "Back to Menu",
    dailyMessage: "Answers are updated daily.",
    timer: "Update in: ",
    playClip: "Play Clip",
    fromGame: "From game: ",
    audioError: "Could not play audio",
    listenFull: "Listen full music",
    streak: "Win Streak",
    record: "Record",
    stats: {
      players: " players today | ",
      correct: " correct answers (",
      percentage: "%)"
    },
    attributes: {
      "Blonde": "Blonde",
      "Brown": "Brown",
      "Male": "Male",
      "Female": "Female",
      "Silent Hill": "Silent Hill",
      "Unspecified": "Unspecified",
      "Black": "Black",
      "Gray": "Gray"
    },
    invalidGuess: "Invalid guess! Try again."
  },
  pt: {
    menuTitle: "Selecione o Modo",
    characters: "Personagens",
    monsters: "Monstros",
    musics: "Músicas",
    placeholder: "Digite ou selecione um personagem",
    monsterPlaceholder: "Adivinhe o nome do monstro",
    musicPlaceholder: "Adivinhe o nome da música",
    submit: "Enviar Palpite",
    labels: ["Nome", "Familia", "Gênero", "Primeira Aparição", "Cidade Natal", "Cor do Cabelo"],
    monsterHint: "Primeira aparição: ",
    success: "Parabéns! Você acertou!",
    failure: "Fim de jogo! A resposta era: ",
    attempts: "Tentativas restantes: ",
    backToMenu: "Voltar ao Menu",
    dailyMessage: "As respostas são atualizadas diariamente.",
    timer: "Atualiza em: ",
    playClip: "Tocar Trecho",
    fromGame: "Do jogo: ",
    audioError: "Não foi possível reproduzir o áudio",
    listenFull: "Ouvir música completa",
    streak: "Sequência de Vitórias",
    record: "Recorde",
    stats: {
      players: " jogadores hoje | ",
      correct: " acertos (",
      percentage: "%)"
    },
    attributes: {
      "Blonde": "Loiro(a)",
      "Brown": "Castanho",
      "Male": "Masculino",
      "Female": "Feminino",
      "Silent Hill": "Silent Hill",
      "Unspecified": "Não especificado",
      "Black": "Preto",
      "Gray": "Cinza"
    },
    invalidGuess: "Palpite inválido! Tente novamente."
  }
};

// Game State
let currentLang = 'pt';
let attempts = 0;
let answer;
let currentGameMode = '';
let currentClipDuration = 5;
let maxClipDuration = 0;
let stats = getDailyStats();
let timerInterval;

let gameOver = false;
let revealedAnswer = false;
let playerWon = false;

let audioContext;
let audioBuffer;
let audioSource;
let startTime;
let clipInterval;
let audioElement = null;

let winStreak = 0;
let lastPlayDate = null;
const STREAK_TIMEOUT = 2 * 60 * 1000; // 2 dias em milissegundos (para produção)
// Para teste use: const STREAK_TIMEOUT = 2 * 60 * 1000; // 2 minutos

// DOM Elements
const elements = {
  menu: document.getElementById("menu"),
  game: document.getElementById("game"),
  guessInput: document.getElementById("guess-input"),
  submitButton: document.getElementById("submit-button"),
  results: document.getElementById("results"),
  characterImage: document.getElementById("character-image-container"),
  attemptsCounter: document.getElementById("attempts-counter"),
  timer: document.getElementById("timer"),
  statsPlayers: document.getElementById("stats-players"),
  statsCorrect: document.getElementById("stats-correct"),
  statsPercentage: document.getElementById("stats-percentage"),
  dailyMessage: document.getElementById("daily-message"),
  backButton: document.getElementById("back-button"),
  charactersBtn: document.getElementById("characters-btn"),
  monstersBtn: document.getElementById("monsters-btn"),
  musicBtn: document.getElementById("music-btn"),
  menuTitle: document.getElementById("menu-title"),
  datalist: document.getElementById("characters"),
  playMusicBtn: document.getElementById("play-music-btn"),
  clipDuration: document.getElementById("clip-duration"),
  currentTime: document.getElementById("current-time"),
  maxTime: document.getElementById("max-time")
};

// Initialize Game
function initGame() {
  setLanguage(currentLang);
  loadWinStreak();
  updateStats();
  setupEventListeners();
  preloadImages();
  
  // Verifica se precisa de reset
  const now = new Date();
  const lastReset = localStorage.getItem('lastResetTime');
  const testMode = true;
  const resetInterval = testMode ? 2 * 60 * 1000 : 24 * 60 * 60 * 1000;
  
  if (!lastReset || (now - new Date(lastReset)) >= resetInterval) {
    forceDailyReset();
  }
  
  // Inicia o timer
  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
  
  const audio = document.getElementById('success-sound');
  audio.load();
  audio.volume = 0;
}

// Language System
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  // Update all translatable elements
  if (elements.menuTitle) elements.menuTitle.textContent = t.menuTitle;
  if (elements.charactersBtn) elements.charactersBtn.querySelector('.blood-text').textContent = t.characters;
  if (elements.monstersBtn) elements.monstersBtn.querySelector('.blood-text').textContent = t.monsters;
  if (elements.musicBtn) elements.musicBtn.querySelector('.blood-text').textContent = t.musics;
  if (elements.dailyMessage) elements.dailyMessage.textContent = t.dailyMessage;
  if (elements.backButton) elements.backButton.querySelector('.blood-text').textContent = t.backToMenu;
  if (elements.playMusicBtn) elements.playMusicBtn.querySelector('.blood-text').textContent = `${t.playClip} (${currentClipDuration}s)`;
  
  if (elements.guessInput) {
    elements.guessInput.placeholder = currentGameMode === 'monsters' 
      ? t.monsterPlaceholder 
      : currentGameMode === 'musics'
        ? t.musicPlaceholder
        : t.placeholder;
    elements.submitButton.querySelector('.blood-text').textContent = t.submit;
  }
  
  updateUI();
  updateStreakDisplay();
}

// Game Modes
function startGame(gameMode) {
  clearInterval(timerInterval);
  clearGameUI();
  currentGameMode = gameMode;

  const alreadyPlayed = loadGameState(gameMode);

  if (alreadyPlayed && revealedAnswer) {
    showRevealedState();
    return;
  }

  // Reset apenas se o jogo não foi jogado ainda
  revealedAnswer = false;
  gameOver = false;
  playerWon = false;
  attempts = 0;

  answer = getDailyAnswer();

  if (gameMode === 'musics') {
    currentClipDuration = 5;
    maxClipDuration = answer.duration;
    loadMusicClip();
  }

  setupGameScreen();
  timerInterval = setInterval(updateTimer, 1000);
}

function showRevealedState() {
  elements.menu.style.display = "none";
  elements.game.style.display = "block";
  
  // Mostra os elementos corretamente
  elements.guessInput.style.display = "none";
  elements.submitButton.style.display = "none";
  
  // Mostra a resposta
  showCharacterImage();
  
  // Determina a mensagem correta baseada no estado do jogo
  const message = playerWon 
    ? translations[currentLang].success 
    : `${translations[currentLang].failure} ${answer.name}`;
  
  const messageType = playerWon ? "success" : "error";
  
  showMessage(message, messageType, false);
  
  // Atualiza o contador de tentativas
  elements.attemptsCounter.textContent = 
    `${translations[currentLang].attempts}${5 - attempts}`;
}

function getDailyAnswer() {
  // Força a geração de novas respostas se não existirem
  if (!localStorage.getItem('dailyAnswers')) {
    generateNewDailyAnswers();
  }
  
  const dailyAnswers = JSON.parse(localStorage.getItem('dailyAnswers'));
  return dailyAnswers[currentGameMode];
}

function generateNewDailyAnswers() {
  const now = new Date();
  const testMode = true;
  const resetInterval = testMode ? 2 * 60 * 1000 : 24 * 60 * 60 * 1000;
  const periodsSinceEpoch = Math.floor(now.getTime() / resetInterval);

  const dailyAnswers = {
    characters: gameData.characters[periodsSinceEpoch % gameData.characters.length],
    monsters: gameData.monsters[periodsSinceEpoch % gameData.monsters.length],
    musics: gameData.musics[periodsSinceEpoch % gameData.musics.length]
  };

  localStorage.setItem('dailyAnswers', JSON.stringify(dailyAnswers));
}

function getRandomAnswer(mode, seed) {
  const collection = gameData[mode === 'characters' ? 'characters' : 
                            mode === 'monsters' ? 'monsters' : 
                            'musics'];
  
  // Usa o seed para garantir a mesma resposta no mesmo período
  return collection[seed % collection.length];
}

function setupGameScreen() {
  elements.menu.style.display = "none";
  elements.game.style.display = "block";
  
  // Limpa a UI antes de configurar o novo modo
  clearGameUI();
  
  if (currentGameMode === 'musics') {
    document.getElementById('music-player-container').style.display = 'block';
    elements.guessInput.placeholder = translations[currentLang].musicPlaceholder;
  } else {
    document.getElementById('music-player-container').style.display = 'none';
  }
  
  createDatalistOptions();
  
  if (currentGameMode === 'monsters') {
    const imageContainer = document.createElement("div");
    imageContainer.id = "pixelated-image";
    elements.characterImage.appendChild(imageContainer);
    updateMonsterImage();
  }
  const youtubeContainer = document.querySelector('.youtube-container');
  if (youtubeContainer) youtubeContainer.remove();

  showInputControls();
}

function resetGame() {
  gameOver = false;
  attempts = 0;
  elements.results.innerHTML = '';
  elements.characterImage.innerHTML = '';
  elements.guessInput.value = '';
  clearSuccessMessage();
  clearInterval(clipInterval);
  
  // Mostra os elementos novamente ao resetar
  document.querySelector('.input-container').style.display = 'flex';
  if (currentGameMode === 'musics') {
    document.getElementById('music-player-container').style.display = 'block';
    currentClipDuration = 5;
    loadMusicClip();
    document.querySelector('.clip-progress').style.width = '0%';
    elements.currentTime.textContent = '0';
    elements.maxTime.textContent = currentClipDuration;
    elements.clipDuration.textContent = currentClipDuration;
  } else if (currentGameMode === 'monsters') {
    const imageContainer = document.createElement("div");
    imageContainer.id = "pixelated-image";
    elements.characterImage.appendChild(imageContainer);
    updateMonsterImage();
  }
  
  updateUI();
}

// Game Logic
function submitGuess() {
  if (gameOver) return;

  const guessName = elements.guessInput.value.trim().toUpperCase();
  
  let collection;
  if (currentGameMode === 'characters') {
    collection = gameData.characters;
  } else if (currentGameMode === 'monsters') {
    collection = gameData.monsters;
  } else if (currentGameMode === 'musics') {
    collection = gameData.musics;
  }
  
  const guess = collection.find(item => 
    item.name.toUpperCase() === guessName
  );

  if (!guess) {
    showMessage(translations[currentLang].invalidGuess, "error");
    return;
  }

  attempts++;
  elements.guessInput.value = '';
  
  // Aumenta a duração apenas quando um palpite é feito (modo música)
  if (currentGameMode === 'musics') {
    currentClipDuration = Math.min(currentClipDuration + 5, maxClipDuration);
    elements.clipDuration.textContent = currentClipDuration;
    elements.maxTime.textContent = currentClipDuration;
  }

  if (currentGameMode === 'monsters') {
    updateMonsterImage();
    checkMonsterGameEnd(guess);
  } else if (currentGameMode === 'musics') {
    checkMusicGameEnd(guess);
  } else {
    createResultRow(guess);
    checkGameEnd(guess);
  }
  
  updateUI();
}

// Character Mode Functions
function createResultRow(guess) {
  const row = document.createElement("div");
  row.className = "result-row";

  const attributes = [
    { label: translations[currentLang].labels[0], value: "name" },
    { label: translations[currentLang].labels[1], value: "family" },
    { label: translations[currentLang].labels[2], value: "gender" },
    { label: translations[currentLang].labels[3], value: "firstAppearance" },
    { label: translations[currentLang].labels[4], value: "hometown" },
    { label: translations[currentLang].labels[5], value: "hairColor" }
  ];

  attributes.forEach(attr => {
    const container = document.createElement("div");
    container.className = "attribute-container";

    const label = document.createElement("div");
    label.className = "attribute-label";
    label.textContent = attr.label;

    const box = document.createElement("div");
    box.className = "attribute-box";
    
    const guessValue = guess[attr.value];
    const answerValue = answer[attr.value];
    const isCorrect = guessValue === answerValue;
    
    box.textContent = translateAttribute(guessValue);
    box.style.backgroundColor = isCorrect ? "#4CAF50" : "#F44336";

    container.append(label, box);
    row.appendChild(container);
  });

  elements.results.appendChild(row);

  if (attempts < 5) {
    const separator = document.createElement("div");
    separator.className = "guess-separator";
    elements.results.appendChild(separator);
  }
}

// Monster Mode Functions
function updateMonsterImage() {
  const container = document.getElementById("pixelated-image");
  if (!container) return;
  
  container.innerHTML = '';
  
  const img = document.createElement("img");
  img.alt = answer.name;
  
  const formats = ['webp', 'png', 'jpg'];
  let currentFormat = 0;

  function tryNextFormat() {
    if (currentFormat >= formats.length) {
      console.error("Image not found for:", answer.name);
      return;
    }
    
    img.src = `assets/monsters/${answer.image}.${formats[currentFormat]}`;
    
    img.onerror = () => {
      currentFormat++;
      tryNextFormat();
    };
  }
  
  tryNextFormat();

  const pixelation = Math.max(0, 0.8 - (attempts * 0.2));
  
  img.style.filter = `blur(${pixelation * 5}px) contrast(${1 + pixelation})`;
  img.style.width = "280px";
  img.style.height = "280px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "8px";
  img.style.border = "2px solid #d10000";
  
  if (pixelation <= 0.3) {
    img.classList.add("almost-visible");
  }
  
  container.appendChild(img);
}

// Music Mode Functions
async function loadMusicClip() {
  return new Promise((resolve) => {
    // Remove o player antigo
    if (audioElement) {
      audioElement.pause();
      audioElement.remove();
    }

    // Cria novo elemento de áudio
    audioElement = new Audio();
    audioElement.id = 'hidden-audio';
    audioElement.preload = 'auto';
    audioElement.volume = 0.7;
    
    // Configura o caminho do arquivo
    const musicFile = `assets/musics/${answer.name.replace(/\s+/g, '_')}.mp3`;
    audioElement.src = musicFile;
    
    // Eventos para debug
    audioElement.addEventListener('canplaythrough', () => {
      console.log('Áudio pronto para reprodução');
      resolve(true);
    });

    audioElement.addEventListener('error', (e) => {
      console.error('Erro no carregamento:', e, 'Tentando carregar:', musicFile);
      resolve(false);
    });

    document.body.appendChild(audioElement);
  });
}

async function playMusicClip() {
  try {
    // Garante que o áudio está carregado
    const loaded = await loadMusicClip();
    if (!loaded) throw new Error('Áudio não carregado');

    // Para reproduções anteriores
    audioElement.pause();
    clearInterval(clipInterval);

    // Configura a reprodução
    audioElement.currentTime = 0;
    document.querySelector('.clip-progress').style.width = '0%';
    elements.currentTime.textContent = '0';

    // Toca o áudio
    await audioElement.play();

    // Atualiza a barra de progresso
    const startTime = Date.now();
    const duration = currentClipDuration * 1000;
    
    clipInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      
      document.querySelector('.clip-progress').style.width = `${progress}%`;
      elements.currentTime.textContent = (elapsed / 1000).toFixed(1);
      
      if (elapsed >= duration) {
        clearInterval(clipInterval);
        audioElement.pause();
      }
    }, 100);

  } catch (error) {
    console.error('Erro na reprodução:', error);
    showMessage(translations[currentLang].audioError, "error");
    
    // Debug adicional
    if (error.message.includes('play() failed')) {
      console.log('Dica: O navegador pode estar bloqueando autoplay. Interaja primeiro com a página.');
    }
  }
}

function checkMusicGameEnd(guess) {
  if (guess.name === answer.name) {
    endGame(true);
  } else if (attempts >= 5) {
    endGame(false);
  }
}

// Game End Checks
function checkGameEnd(guess) {
  if (guess.name === answer.name) {
    endGame(true);
  } else if (attempts >= 5) {
    endGame(false);
  }
}

function checkMonsterGameEnd(guess) {
  if (guess.name === answer.name) {
    endGame(true);
    const container = document.getElementById("pixelated-image");
    if (container) container.style.filter = "none";
  } else if (attempts >= 5) {
    endGame(false);
    const container = document.getElementById("pixelated-image");
    if (container) {
      container.style.filter = "none";
      showMessage(`${translations[currentLang].monsterHint}${answer.firstAppearance}`, "hint");
    }
  }
}

function endGame(isWin) {
  gameOver = !isWin;
  gameOver = true;
  revealedAnswer = true;
  playerWon = isWin;
  const t = translations[currentLang];

  if (isWin) {
    winStreak++;
    saveWinStreak();
  } else {
    resetWinStreak();
  }
  
  updateStreakDisplay();
  
  saveGameState();

  // Atualiza estatísticas
  stats.players++;
  if (isWin) stats.correct++;
  saveStats();
  
  // Esconde todos os elementos de controle
  document.querySelector('.input-container').style.display = 'none';
  document.getElementById('music-player-container').style.display = 'none';
  
  if (isWin) {
    if (currentGameMode !== 'musics') {
      showCharacterImage();
    }
    playSuccessSound();
    showMessage(t.success, "success");
    stats.dailyCorrect++;
  } else {
    if (currentGameMode !== 'musics') {
      showCharacterImage();
    }
    showMessage(`${t.failure} ${answer.name}`, "error", false);
  }
  
  if (currentGameMode === 'musics') {
    const musicInfo = document.createElement('div');
    musicInfo.className = 'music-info';
    musicInfo.innerHTML = `
      <p>${t.fromGame} <strong>${answer.game}</strong></p>
      <div class="youtube-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/${answer.youtubeId}?autoplay=1&controls=1" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;
    elements.results.appendChild(musicInfo);
  }
  
  stats.dailyPlayers++;
  updateStats();
}

// UI Functions
function updateUI() {
  const t = translations[currentLang];
  elements.attemptsCounter.textContent = t.attempts + (5 - attempts);
  updateTimer();
  updateStats();
}

function updateStats() {
  const t = translations[currentLang].stats;
  const percentage = stats.players > 0 
    ? Math.round((stats.correct / stats.players) * 100)
    : 0;
  
  elements.statsPlayers.textContent = stats.players + t.players;
  elements.statsCorrect.textContent = stats.correct + t.correct;
  elements.statsPercentage.textContent = percentage + t.percentage;
}

function updateTimer() {
  const now = new Date();
  const testMode = true; // Modo teste ativado
  const resetInterval = testMode ? 2 * 60 * 1000 : 24 * 60 * 60 * 1000;
  
  // Obtém ou define o último reset
  let lastReset = localStorage.getItem('lastResetTime');
  if (!lastReset) {
    lastReset = now.toISOString();
    localStorage.setItem('lastResetTime', lastReset);
  }
  
  const nextReset = new Date(new Date(lastReset).getTime() + resetInterval);
  const timeRemaining = nextReset - now;

  // Atualiza o display do timer
  const mins = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  elements.timer.textContent = `${translations[currentLang].timer} ${mins}m ${secs}s`;

  // Reset automático quando o tempo acabar
  if (timeRemaining <= 0) {
    forceDailyReset();
  }
}

function forceDailyReset() {
  const now = new Date();
  
  if (lastPlayDate) {
    const timeSinceLastPlay = now - new Date(lastPlayDate);
    if (timeSinceLastPlay > STREAK_TIMEOUT) {
      resetWinStreak();
    }
  }

  // 1. Limpa todas as respostas e estados
  localStorage.removeItem('dailyAnswers');
  localStorage.removeItem('gameState');
  localStorage.removeItem('hilldleStats');
  localStorage.setItem('lastResetTime', now.toISOString());
  
  // 2. Gera novas respostas para todos os modos
  generateNewDailyAnswers();
  
  // 3. Se estiver em um jogo, recarrega com a nova resposta
  if (currentGameMode) {
    revealedAnswer = false;
    gameOver = false;
    attempts = 0;
    answer = getDailyAnswer();
    
    if (currentGameMode === 'musics') {
      currentClipDuration = 5;
      maxClipDuration = answer.duration;
      loadMusicClip();
    }
    
    // Atualiza a UI
    elements.results.innerHTML = '';
    elements.guessInput.value = '';
    elements.guessInput.style.display = '';
    elements.submitButton.style.display = '';
    clearSuccessMessage();
    
    if (currentGameMode === 'monsters') {
      updateMonsterImage();
    }
  }
}

function resetDailyContent() {
  // Limpa apenas o estado do modo atual
  const gameState = JSON.parse(localStorage.getItem('gameState') || '{}');
  delete gameState[currentGameMode];
  localStorage.setItem('gameState', JSON.stringify(gameState));
  
  generateNewDailyAnswers();
  localStorage.removeItem('hilldleStats');
  
  if (currentGameMode) {
    revealedAnswer = false;
    gameOver = false;
    attempts = 0;
    startGame(currentGameMode);
  }
}

function resetGameState() {
  revealedAnswer = false;
  gameOver = false;
  attempts = 0;
}

function showMessage(text, type, autoRemove = true) {
  const existingMsg = document.querySelector('.message');
  if (existingMsg) existingMsg.remove();

  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  message.style.textAlign = "center";
  message.style.margin = "20px auto";
  
  elements.results.appendChild(message);
  
  if (autoRemove && type !== "success") {
    setTimeout(() => message.remove(), 3000);
  }
}

function showCharacterImage() {
  const formats = ['webp', 'png', 'jpg'];
  let currentFormat = 0;
  const img = document.createElement("img");
  img.alt = answer.name;
  img.classList.add('character-image');
  img.id = 'revealed-answer-image';

  function tryNextFormat() {
    if (currentFormat >= formats.length) return;
    
    img.src = `assets/${currentGameMode === 'monsters' ? 'monsters' : 'characters'}/${answer.image}.${formats[currentFormat]}`;
    
    img.onerror = () => {
      currentFormat++;
      tryNextFormat();
    };
  }
  
  tryNextFormat();
  elements.characterImage.innerHTML = '';
  elements.characterImage.appendChild(img);
  
  setTimeout(() => {
    const element = document.getElementById('revealed-answer-image');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, 100);
}

// Helper Functions
function translateAttribute(value) {
  return translations[currentLang].attributes[value] || value;
}

function playSuccessSound() {
  try {
    const audio = document.getElementById('success-sound');
    audio.currentTime = 0;
    audio.volume = 0.7;
    audio.play().catch(e => console.log("Audio error:", e));
  } catch (e) {
    console.error("Erro no sistema de áudio:", e);
  }
}

function createDatalistOptions() {
  elements.datalist.innerHTML = '';
  
  let collection;
  if (currentGameMode === 'characters') {
    collection = gameData.characters;
  } else if (currentGameMode === 'monsters') {
    collection = gameData.monsters;
  } else if (currentGameMode === 'musics') {
    collection = gameData.musics;
  } else {
    return;
  }
  
  collection.forEach(item => {
    const option = document.createElement("option");
    option.value = item.name;
    elements.datalist.appendChild(option);
  });
}

function preloadImages() {
  [...gameData.characters, ...gameData.monsters].forEach(item => {
    const img = new Image();
    img.src = `assets/${item.hasOwnProperty('gender') ? 'characters' : 'monsters'}/${item.image}.webp`;
  });
}

function setupEventListeners() {
  elements.playMusicBtn.addEventListener('click', async () => {
    try {
      // Solução para restrições de autoplay
      if (audioContext && audioContext.state === 'suspended') {
        await audioContext.resume();
      }
    
      playMusicClip();
    } catch (error) {
      console.error('Erro ao preparar reprodução:', error);
    }
  });

  elements.submitButton.addEventListener("click", submitGuess);
  
  elements.guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitGuess();
    }
  });

  elements.charactersBtn.addEventListener("click", () => startGame('characters'));
  elements.monstersBtn.addEventListener("click", () => startGame('monsters'));
  elements.musicBtn.addEventListener("click", () => startGame('musics'));
  elements.backButton.addEventListener("click", backToMenu);
  elements.playMusicBtn.addEventListener("click", playMusicClip);
}

function clearSuccessMessage() {
  const successMsg = document.querySelector('.message.success');
  if (successMsg) successMsg.remove();
}

function backToMenu() {
  clearInterval(timerInterval);
  elements.game.style.display = "none";
  elements.menu.style.display = "block";
  
  // Limpa a UI ao voltar ao menu
  clearGameUI();
  clearSuccessMessage();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

// Update timer every minute
setInterval(updateTimer, 1000);

function getDailyStats() {
  const today = new Date().toDateString();
  const savedStats = localStorage.getItem('hilldleStats');
  
  if (savedStats) {
    const parsedStats = JSON.parse(savedStats);
    if (parsedStats.date === today) {
      return parsedStats;
    }
  }
  
  // Reset diário
  return {
    date: today,
    players: 0,
    correct: 0
  };
}

function saveStats() {
  localStorage.setItem('hilldleStats', JSON.stringify(stats));
}

function saveGameState() {
  const gameState = JSON.parse(localStorage.getItem('gameState') || '{}');
  
  gameState[currentGameMode] = {
    revealed: revealedAnswer,
    answer: answer,
    attempts: attempts,
    gameOver: gameOver,
    playerWon: playerWon,
    lastPlayed: new Date().toISOString()
  };
  
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState(gameMode) {
  const savedState = JSON.parse(localStorage.getItem('gameState') || '{}');
  if (!savedState[gameMode]) return false;

  const state = savedState[gameMode];
  const today = new Date().toDateString();
  const lastPlayedDate = new Date(state.lastPlayed).toDateString();

  if (lastPlayedDate === today) {
    revealedAnswer = state.revealed;
    answer = state.answer;
    attempts = state.attempts;
    gameOver = state.gameOver;
    playerWon = state.playerWon ?? false;

    return true;
  }

  return false;
}

function clearGameUI() {
  // Limpa todos os elementos dinâmicos
  elements.results.innerHTML = '';
  elements.characterImage.innerHTML = '';
  elements.guessInput.value = '';
  
  // Remove mensagens
  const messages = document.querySelectorAll('.message');
  messages.forEach(msg => msg.remove());
  
  // Mostra os elementos de input (caso estejam escondidos)
  elements.guessInput.style.display = '';
  elements.submitButton.style.display = '';
  
  // Limpa o player de música se existir
  const oldPlayer = document.getElementById('hidden-audio');
  if (oldPlayer) oldPlayer.remove();
  
  // Limpa o container do YouTube se existir
  const youtubeContainer = document.querySelector('.youtube-container');
  if (youtubeContainer) youtubeContainer.remove();

  if (audioSource) {
    audioSource.stop();
    audioSource = null;
  }
  clearInterval(clipInterval);
}

function loadWinStreak() {
  const streakData = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  
  // Verifica se a streak expirou por inatividade
  if (streakData.lastPlayDate) {
    const timeSinceLastPlay = Date.now() - new Date(streakData.lastPlayDate).getTime();
    if (timeSinceLastPlay > STREAK_TIMEOUT) {
      resetWinStreak();
      return;
    }
  }
  
  winStreak = streakData.winStreak || 0;
  lastPlayDate = streakData.lastPlayDate;
  updateStreakDisplay();
}

function saveWinStreak() {
  const previousData = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  const previousMax = previousData.maxStreak || 0;
  const newMax = Math.max(previousMax, winStreak);

  localStorage.setItem('winStreakData', JSON.stringify({
    winStreak: winStreak,
    maxStreak: newMax,
    lastPlayDate: new Date().toISOString()
  }));
}

function resetWinStreak() {
  const data = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  const maxStreak = data.maxStreak || 0;

  localStorage.setItem('winStreakData', JSON.stringify({
    winStreak: 0,
    maxStreak: maxStreak,
    lastPlayDate: null
  }));

  winStreak = 0;
  updateStreakDisplay();
}

function updateStreakDisplay() {
  const streakElement = document.getElementById('streak-counter');
  if (!streakElement) return;

  const t = translations[currentLang];
  const maxStreak = getMaxStreak();

  let streakText = `${t.streak}: ${winStreak}`;
  if (maxStreak && maxStreak > 0) {
    streakText += ` (${t.record}: ${maxStreak})`;
  }

  streakElement.textContent = streakText;
}


function getMaxStreak() {
  const data = JSON.parse(localStorage.getItem('winStreakData') || '{}');
  return data.maxStreak || 0;
}

function getGameState() {
  return gameStateByMode[currentGameMode];
}

function setGameOver(value) {
  gameStateByMode[currentGameMode].gameOver = value;
}

function setRevealedAnswer(value) {
  gameStateByMode[currentGameMode].revealedAnswer = value;
}

function showInputControls() {
  elements.guessInput.style.display = '';
  elements.submitButton.style.display = '';
  document.querySelector('.input-container').style.display = 'flex';

  if (currentGameMode === 'musics') {
    document.getElementById('music-player-container').style.display = 'block';
  }
}
