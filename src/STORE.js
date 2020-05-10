const STORE = [
    {
        departments: [
            "Mountain View Police Department",
            "Marin County Sheriff's Office",
            "New York Police Department",
            "Los Angeles Police Department",
            "San Francisco Police Department",
            "San Diego Police Department",
            "San Mateo County Sheriff's Office",
            "Federal Bureau of Investigation"
        ],
        localities: [
            "Mountain View",
            "Marin County",
            "New York City",
            "Los Angeles",
            "San Francisco",
            "San Diego",
            "San Mateo County",
            "Federal"
        ],
        reviews: [
        
            {
            id: 1,
            state: "New York",
            department: "New York Police Department",
            nature: "I got pulled over for speeding",
            rating: 7,
            comments: "The officer was pretty respectful. He told me what I did wrong when I asked him. Only giving a 7 because the ticket is expensive.",
            experience: "good",
            encounterDate: new Date(),
            user: "rmac2289"
            },
            {
            id: 2,
            state: "New York",
            department: "New York City Police Department",
            nature: "cops stopped me for no reason and just started yelling at me to get on the ground",
            rating: 0,
            comments: "This was some serious BS. They had no right to come at me like that. If I treated them that way they would have killed me.",
            experience: "terrible",
            encounterDate: new Date('June 25, 2019 08:15:00'),
            user: "njs26"
            },
            {
            id: 3,
            state: "New York",
            department: "New York City Police Department",
            nature: "I dropped my wallet and the officer found me to return it.",
            rating: 10,
            comments: "I can't believe he did that, what a relief. So glad we have people like that protecting our community.",
            experience: "great",
            encounterDate: new Date('January 10, 2020 11:15:00'),
            user: "coperlover99"
            },
            {
            id: 4,
            locality: "Marin County",
            nature: "I called 9-1-1 and received outstanding service.",
            rating: 10,
            comments: "I talked to this dispatcher named Ross and he saved my moms life. What a guy.",
            experience: "great",
            encounterDate: new Date('August 22, 2017 16:55:00'),
            user: "definitelynotross"
            },
            {
            id: 5,
            locality: "Federal",
            nature: "I robbed this bank and the feds showed up.",
            rating: 5,
            comments: "They were alright. They all had guns pointed at me which wasn't cool but like I was robbing a bank so fair is fair.",
            experience: "ok",
            encounterDate: new Date('April 04, 2016 09:00:00'),
            user: "hideyomoney14"
            },
            {
            id: 6,
            locality: "San Mateo County",
            nature: "I ran to my car to get there before the meter ran out but they ticketed me.",
            rating: 2,
            comments: "I was so close! He could have let it slide. And those stupid 3 wheel cars they drive are ridiculous.",
            experience: "bad",
            encounterDate: new Date('September 20, 2019 12:45:00'),
            user: "businessbrah32"
            },
            {
            id: 7,
            locality: "San Francisco",
            nature: "I called 9-1-1 to report my car got broken into and the lady laughed at me.",
            rating: 3,
            comments: "I was having an emergency and she didn't take it seriously.",
            experience: "bad",
            encounterDate: new Date('July 18, 2017 14:24:00'),
            user: "sf4lyfe"
            },
            {
            id: 8,
            locality: "San Diego",
            nature: "I saw on camera there were people in my house so I called the cops.",
            rating: 9,
            comments: "They came immediately and did a great job going after the suspects and apprehending them. I'm only not giving a 10 because my house still got broken into.",
            experience: "good",
            encounterDate: new Date('February 11, 2020 16:30:00'),
            user: "surfinusa"
            }
        ],
        forum_categories: [
            "Criminal Justice Reform",
            "Police Brutality",
            "Drug Crimes",
            "What the System is Doing Well",
            "Capital Punishment",
            "Crime Prevention",
            "Juvenile Justice",
            "Police-Community Relations",
            "Prison System",
            "Racial Profiling",
        ]

    }
]

export default STORE;