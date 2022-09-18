import { storageService } from './async-storage.service.js'

export const stayService = {
    query,
    save,
    remove,
    getById,
}

const STORAGE_KEY = 'stayDB'
const gDefaultStays = [
    {
        "name": "Westin Kaanapali KORVN 2BR",
        "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
        "interaction": "There are activities programs and concierge activities booking services at this resort.",
        "houseRules": "No smoking; No Pets; This resort's rules apply. Please call the resort directly to verify details.",
        "propertyType": "Serviced apartment",
        "roomType": "Entire place",
        "bedType": "Real Bed",
        "cancellationPolicy": "strict_14_with_grace_period",
        "capacity": 8,
        "bedrooms": 2,
        "beds": 4,
        "numOfReviews": 9,
        "highlights": {
            "selfCheckIn": false,
            "greatLocation": true,
            "pets": true,
            "freeParking": true
        },
        "amenities": [
            "TV",
            "Cable TV",
            "Internet",
            "Wifi",
            "Air conditioning",
            "Wheelchair accessible",
            "Pool",
            "Kitchen",
            "Free parking on premises",
            "Doorman",
            "Gym",
            "Elevator",
            "Hot tub",
            "Heating",
            "Family/kid friendly",
            "Suitable for events",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Carbon monoxide detector",
            "First aid kit",
            "Safety card",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Self check-in",
            "Building staff",
            "Private entrance",
            "Room-darkening shades",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Ethernet connection",
            "Luggage dropoff allowed",
            "Long term stays allowed",
            "Ground floor access",
            "Wide hallway clearance",
            "Step-free access",
            "Wide doorway",
            "Flat path to front door",
            "Well-lit path to entrance",
            "Disabled parking spot",
            "Step-free access",
            "Wide doorway",
            "Wide clearance to bed",
            "Step-free access",
            "Wide doorway",
            "Step-free access",
            "Wide entryway",
            "Waterfront",
            "Beachfront"
        ],
        "host": {
            "_id": "622f3403e36c59e6164faf93",
            "fullname": "Patty And Beckett",
            "location": "Eureka, California, United States",
            "about": "Adventurous couple loves to travel :)",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "36133410"
        },
        "address": {
            "street": "Lahaina, HI, United States",
            "country": "United States",
            "location": {
                "lat": -156.68083166296285,
                "lan": 20.88321046395682
            },
            "countryCode": "US",
            "city": "Maui"
        },
        "id": "12223067",
        "bathrooms": 2,
        "price": 1199,
        "securityDeposit": 500,
        "cleaningFee": null,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 10,
            "value": 10,
            "rating": 98
        },
        "reviews": [
            {
                "at": "2016-06-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc004",
                    "fullname": "Kiesha",
                    "imgUrl": "https://robohash.org/10711825?set=set1",
                    "id": "10711825"
                },
                "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
            },
            {
                "at": "2016-07-28T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb204",
                    "fullname": "Chris",
                    "imgUrl": "https://robohash.org/70072865?set=set1",
                    "id": "70072865"
                },
                "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
            },
            {
                "at": "2016-09-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb703",
                    "fullname": "Kim",
                    "imgUrl": "https://robohash.org/71179725?set=set1",
                    "id": "71179725"
                },
                "txt": "We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves."
            },
            {
                "at": "2017-01-07T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb37f",
                    "fullname": "Tracy",
                    "imgUrl": "https://robohash.org/65593239?set=set1",
                    "id": "65593239"
                },
                "txt": "Beautiful location. Patty & Peter were super helpful and easy to work with!"
            },
            {
                "at": "2017-04-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb105",
                    "fullname": "Duyen",
                    "imgUrl": "https://robohash.org/26215688?set=set1",
                    "id": "26215688"
                },
                "txt": "Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back."
            },
            {
                "at": "2017-05-09T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fabbe",
                    "fullname": "Binh",
                    "imgUrl": "https://robohash.org/117390236?set=set1",
                    "id": "117390236"
                },
                "txt": "The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. "
            },
            {
                "at": "2018-02-24T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb4af",
                    "fullname": "Samy",
                    "imgUrl": "https://robohash.org/15143517?set=set1",
                    "id": "15143517"
                },
                "txt": "We spent a great week at Patty and Peter's place. The place was exactly as shown in the pictures, very comfortable, nice view, with all amenities. The resort is great with several pools, a long beach, many restaurants, and of course a lot of great activities all around."
            },
            {
                "at": "2018-06-16T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb87b",
                    "fullname": "Breanne",
                    "imgUrl": "https://robohash.org/78173091?set=set1",
                    "id": "78173091"
                },
                "txt": "This place was perfect for my family. We had plenty of room to spread out and the service could not have been any better"
            },
            {
                "at": "2018-06-29T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb713",
                    "fullname": "Kimberly",
                    "imgUrl": "https://robohash.org/100535039?set=set1",
                    "id": "100535039"
                },
                "txt": "We love Westin Kaanapalli"
            }
        ],
        "_id": "622f337a75c7d36e498aaaf8",
        "imgUrls": [
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/002_z302wh.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480425/001_urftcv.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480424/003_osjmvf.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480424/004_bsyilg.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480424/005_muwncg.jpg"
        ]
    },
    {
        "name": "Belle chambre à côté Metro Papineau",
        "summary": "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
        "interaction": "J'adore recevoir mes invités personnellement mais il arrive que je ne puis être sur place lors de votre arrivée.",
        "houseRules": "",
        "propertyType": "Apartment",
        "roomType": "Private room",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 2,
        "bedrooms": 1,
        "beds": 1,
        "numOfReviews": 4,
        "highlights": {
            "selfCheckIn": false,
            "greatLocation": true,
            "pets": true,
            "freeParking": true
        },
        "amenities": [
            "TV",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Elevator",
            "Buzzer/wireless intercom",
            "Heating",
            "Family/kid friendly",
            "Washer",
            "Dryer",
            "Smoke detector",
            "Carbon monoxide detector",
            "Essentials",
            "Iron",
            "translation missing: en.hosting_amenity_50"
        ],
        "host": {
            "_id": "622f3401e36c59e6164fabab",
            "fullname": "Angel",
            "location": "Montreal, Québec, Canada",
            "about": "",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_x_medium",
            "isSuperhost": false,
            "id": "80344827"
        },
        "address": {
            "street": "Montréal, QC, Canada",
            "country": "Canada",
            "location": {
                "lat": -73.54985,
                "lan": 45.52797
            },
            "countryCode": "CA",
            "city": "Montreal"
        },
        "id": "13732894",
        "bathrooms": 1,
        "price": 1140,
        "securityDeposit": 150,
        "cleaningFee": 8,
        "extraPeople": 15,
        "reviewScores": {
            "accuracy": 10,
            "cleanliness": 9,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 100
        },
        "reviews": [
            {
                "at": "2016-07-07T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fc058",
                    "fullname": "Rowan",
                    "imgUrl": "https://robohash.org/81703602?set=set1",
                    "id": "81703602"
                },
                "txt": "The place was great, as was the host! I would recommend staying here."
            },
            {
                "at": "2016-07-08T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb274",
                    "fullname": "Adriana",
                    "imgUrl": "https://robohash.org/64310987?set=set1",
                    "id": "64310987"
                },
                "txt": "J'ai adoré rester là. Très acceuillant."
            },
            {
                "at": "2016-07-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb87c",
                    "fullname": "Emma",
                    "imgUrl": "https://robohash.org/23709900?set=set1",
                    "id": "23709900"
                },
                "txt": "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !"
            },
            {
                "at": "2016-08-02T04:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc082",
                    "fullname": "Jeffery",
                    "imgUrl": "https://robohash.org/44882622?set=set1",
                    "id": "44882622"
                },
                "txt": "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!"
            }
        ],
        "_id": "622f337a75c7d36e498aaaf9",
        "imgUrls": [
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480423/007_bspzdb.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480423/006_oc7xyq.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480423/009_wgdcwg.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480423/008_crilhc.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480422/014_yil1sp.jpg"
        ]
    },
    {
        "name": "M&M Space MM2  Apartamento no centro da cidade",
        "summary": "O apartamento fica perto de arte e cultura e dos mais belos monumentos da cidade. Belos jardins e paisagens da cidade e do rio Douro ficam perto e podem ser apreciadas.  Existem restaurantes típicos e de comida internacional ao redor do apartamento.   O espaço fica numa rua típica da cidade, cheia da sua magia e magnetismo e é muito pratico e confortável. O espaço é excelente para quem pretende visitar e conhecer a zona histórica e turística do Porto. Transportes públicos ficam próximos.",
        "interaction": "Será prestada ajuda aos hospedes, 24 horas por dia, desde que solicitada.",
        "houseRules": "- Devem respeitar o restantes hospedes a morar no prédio evitando barulhos excessivos. - Animais de estimação: Questionar o proprietário. Podem ser permitidos a um custo extra a acordar. e em casos excepcionais. Fumar: Podem fumar na varanda desde que cumpram as regras de segurança necessárias. - Ter cuidado com o manuseamento dos equipamentos existentes na casa. Dão-se informações se solicitado. - Levar o lixo utilizado para os contentores no exterior. São fornecidos sacos extra para o feito. - Ter uma boa estadia.",
        "propertyType": "Apartment",
        "roomType": "Hotel room",
        "bedType": "Real Bed",
        "cancellationPolicy": "moderate",
        "capacity": 4,
        "bedrooms": 2,
        "beds": 2,
        "numOfReviews": 18,
        "amenities": [
            "TV",
            "Cable TV",
            "Internet",
            "Wifi",
            "Air conditioning",
            "Kitchen",
            "Paid parking off premises",
            "Free street parking",
            "Buzzer/wireless intercom",
            "Family/kid friendly",
            "Washer",
            "Smoke detector",
            "First aid kit",
            "Fire extinguisher",
            "Essentials",
            "Shampoo",
            "Lock on bedroom door",
            "24-hour check-in",
            "Hangers",
            "Hair dryer",
            "Iron",
            "Laptop friendly workspace",
            "Private entrance",
            "Crib",
            "Room-darkening shades",
            "Hot water",
            "Bed linens",
            "Extra pillows and blankets",
            "Microwave",
            "Coffee maker",
            "Refrigerator",
            "Dishwasher",
            "Dishes and silverware",
            "Cooking basics",
            "Oven",
            "Stove",
            "Patio or balcony",
            "Luggage dropoff allowed",
            "Long term stays allowed",
            "Wide doorway",
            "Well-lit path to entrance",
            "Step-free access",
            "Wide doorway",
            "Accessible-height bed",
            "Step-free access",
            "Wide doorway",
            "Accessible-height toilet",
            "Step-free access",
            "Wide entryway",
            "Host greets you",
            "Handheld shower head",
            "Paid parking on premises",
            "Fixed grab bars for shower"
        ],
        "host": {
            "_id": "622f3403e36c59e6164fb266",
            "fullname": "Maria",
            "location": "Porto, Porto District, Portugal",
            "about": "Simples, muito comunicativa, mas de elevado sentido de responsabilidade, de organização e de confiança.\r\nGosto muito de contacto humano, sem o qual não me sinto estável. Adoro conhecer pessoas de culturas diferentes.\r\nFaço várias viagens, mas de curta duração, pois tenho necessidade de sentir o lar e a família. Por ser assim, tento fazer tudo para que os meus hospedes se sintam confortáveis como em suas casas.",
            "responseTime": "within an hour",
            "thumbnailUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
            "pictureUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
            "isSuperhost": true,
            "id": "78704763"
        },
        "address": {
            "street": "Porto, Porto, Portugal",
            "country": "Portugal",
            "location": {
                "lat": -8.60154,
                "lan": 41.14834
            },
            "countryCode": "PT",
            "city": "Porto"
        },
        "id": "13605461",
        "bathrooms": 1,
        "price": 1115,
        "securityDeposit": 0,
        "cleaningFee": 0,
        "extraPeople": 0,
        "reviewScores": {
            "accuracy": 9,
            "cleanliness": 10,
            "checkin": 10,
            "communication": 10,
            "location": 9,
            "value": 10,
            "rating": 96
        },
        "reviews": [
            {
                "at": "2016-07-18T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb090",
                    "fullname": "Lina & Alexis",
                    "imgUrl": "https://robohash.org/19177194?set=set1",
                    "id": "19177194"
                },
                "txt": "Mes parents ont passé un excellent séjour à Porto dans l'appartement de Maria qui est bien équipé, confortable et très propre. Il est situé au coeur du centre ville et tout est accessible à pied. Si vous venez en voiture, prévoir de se garer dans le parking souterrain payant juste à côté. Mes parents remercient chaudement Maria et son mari qui ont été adorables, notamment par leur accueil chaleureux."
            },
            {
                "at": "2016-08-10T04:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb4e7",
                    "fullname": "Mario R.",
                    "imgUrl": "https://robohash.org/81211152?set=set1",
                    "id": "81211152"
                },
                "txt": "El apartamento es perfecto para una  estancia, esta perfectamente dotado para cubrir las necesidades de un viaje de recreo, situado perfectamente para acceder a pie a las zonas más interesantes de Oporto. María una perfecta anfitriona que te facilitará una inolvidable estancia en Oporto. Ha sido una gran experiencia."
            },
            {
                "at": "2016-08-14T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb110",
                    "fullname": "Patricia",
                    "imgUrl": "https://robohash.org/16580426?set=set1",
                    "id": "16580426"
                },
                "txt": "Thierry, Patricia, Anaïs et Manon,\r\nMaria et son mari nous attendaient avec gentillesse et sourires, Maria a toujours répondu à mes mails et SMS en cours de voyage.   Ils nous ont aidé à monter les valises, Il y avait une bouteille d'eau au frais, très appréciable ainsi que des petits gâteaux et une bouteille de vin dans le frigo...L'appartement était très propre rien ne manquait, conforme à la description, bien situé, nous avons tout fait à pieds ...Très à l'écoute de nos demandes Maria et son mari sont charmants, nous nous sommes sentis en famille, nous reviendrons et je recommande fortement ce logement ...Nous avons pu apprécier notre séjour sans tracas.  "
            },
            {
                "at": "2016-09-12T04:00:00.000Z",
                "by": {
                    "_id": "622f3401e36c59e6164fab5b",
                    "fullname": "Ingrid",
                    "imgUrl": "https://robohash.org/40501338?set=set1",
                    "id": "40501338"
                },
                "txt": "Thanks Maria for your warm welcome. The appartement was really clean. It has everything that we needed for our stay and is really well located. It was easy to park for free near the appartement. Thanks!"
            },
            {
                "at": "2017-05-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb27c",
                    "fullname": "Marie Odile",
                    "imgUrl": "https://robohash.org/110925120?set=set1",
                    "id": "110925120"
                },
                "txt": "L appartement de Maria est tres bien situe, propre et surtout tres calme. Il ne manque rien . Maria nous a tres bien recus . Je recommande cet appartement."
            },
            {
                "at": "2017-06-13T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd3c",
                    "fullname": "Anne",
                    "imgUrl": "https://robohash.org/23040000?set=set1",
                    "id": "23040000"
                },
                "txt": "Maria is a great host and we loved this apartment! It was bright, clean, airy and well-equipped and Maria gave us a thorough introduction to how everything worked. The bed was comfortable (it is not made for tall people though) and nights were quiet as both living room and bedroom are facing the backyard, not the street. Only in the morning we could not sleep in as there was loud construction noise during the day. The metro station is only a few minutes walk away and the city center is at walking distance. We also got a sweet welcome with Portuguese wine."
            },
            {
                "at": "2017-06-30T04:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbd39",
                    "fullname": "Armelle",
                    "imgUrl": "https://robohash.org/113337848?set=set1",
                    "id": "113337848"
                },
                "txt": "Appartement très bien situé, tout le vieux porto se fait à pied. Très propre, indépendant et fonctionnel. Metro au pied en venant de l'aéroport, ligne directe 15 minutes environ.\nRestaurants et épiceries typiques au pied de l'immeuble. Climatisation et télé dans toutes les pièces, calme et quartier pittoresque. À recommander pour 3 ou 4. Accueil simple, gentil et efficace comme Maria la propriétaire.\n"
            },
            {
                "at": "2017-08-01T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbc52",
                    "fullname": "Domingo",
                    "imgUrl": "https://robohash.org/114367498?set=set1",
                    "id": "114367498"
                },
                "txt": "apartamento bien situado, agradable, bonito, muy limpio y con una anfitriona maravillosa dispuesta a resolver cualquier inconveniente que se pueda presentar. lo recomiendo sin lugar a dudas.\ngracias Mariapor su gentileza"
            },
            {
                "at": "2017-08-11T04:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbb3f",
                    "fullname": "Estelle",
                    "imgUrl": "https://robohash.org/123999116?set=set1",
                    "id": "123999116"
                },
                "txt": "Appartement très propre et très bien situé, bien agencé. Quartier très vivant mais appartement calme car ne donne pas sur la rue. Nous avons passé un très bon séjour chez Maria qui nous a très bien accueilli."
            },
            {
                "at": "2017-09-21T04:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb06f",
                    "fullname": "Alfredo Julio Leandro",
                    "imgUrl": "https://robohash.org/148979666?set=set1",
                    "id": "148979666"
                },
                "txt": "Apartamento agradable, muy limpio y muy bien equipado, en zona tranquila pero accesible para llegar a todos lados de a pie. Maria y Arturo nos recibieron con un rico vino del Douro y galletitas y muy buenas recomendaciones para pasear y comer."
            },
            {
                "at": "2017-10-17T04:00:00.000Z",
                "by": {
                    "_id": "622f3405e36c59e6164fb78f",
                    "fullname": "Nataliia",
                    "imgUrl": "https://robohash.org/137603514?set=set1",
                    "id": "137603514"
                },
                "txt": "Нам очень понравилась квартира,светлая,уютная,на 3-м этаже,с большим балконом,в квартире есть все самое необходимое,стиральная машина,утюг,кровати очень удобные,красивое постельное белье,вся обстановка в квартире сделана с душой,все время прибывания чувствовали себя как дома.\nМария по приезду подарила нам бутылку вина из долины реки Дору,из красивых бокалов мы его с удовольствием выпили,спасибо за презент.\nВ этой маленькой уютной квартире -3 телевизора!!!!Смотреть было некогда,наслаждались красивым городом и окрестностями Порту."
            },
            {
                "at": "2017-12-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad62",
                    "fullname": "Liz",
                    "imgUrl": "https://robohash.org/144054479?set=set1",
                    "id": "144054479"
                },
                "txt": "Muy contentos con todo. El piso estaba bastante cerca del centro, Maria y su marido estaban incluso antes de la hora de nuestra llegada. El piso esta muy bien equipado: cafetera, botiquín, lavadora etc. Super super limpio todo y las camas muy comodas y acogedores. Y al ser un piso interior, no se oia nada de ruido. Recomendable!"
            },
            {
                "at": "2018-01-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3403e36c59e6164fb1c3",
                    "fullname": "Ariadne",
                    "imgUrl": "https://robohash.org/151785573?set=set1",
                    "id": "151785573"
                },
                "txt": "Eu e minha amiga ficamos um mês no apartamento e foi uma otima experiencia!\nMuito bem localizado, perto de tudo! Não tivemos nenhuma dificuldade em encontrar o local, que fica a minutos da estação do metrô e é muito perto da região central.\nÓtima infraestrutura, limpeza e organização.\nFomos muito bem recebidas e bem auxiliadas pela Maria, que com certeza é uma ótima anfitriã!\nRecomendo muito a estadia, não poderia ter sido melhor!"
            },
            {
                "at": "2018-02-27T05:00:00.000Z",
                "by": {
                    "_id": "622f3404e36c59e6164fb5f5",
                    "fullname": "Bruno",
                    "imgUrl": "https://robohash.org/169584809?set=set1",
                    "id": "169584809"
                },
                "txt": "Respostas sempre rápidas; excelente recepção ; sempre simpática e disponível."
            },
            {
                "at": "2018-06-24T04:00:00.000Z",
                "by": {
                    "_id": "622f3402e36c59e6164fad10",
                    "fullname": "João",
                    "imgUrl": "https://robohash.org/43281546?set=set1",
                    "id": "43281546"
                },
                "txt": "Clean, quiet and centrally located. Very welcoming host as well."
            },
            {
                "at": "2018-07-18T04:00:00.000Z",
                "by": {
                    "_id": "622f3408e36c59e6164fc075",
                    "fullname": "Alcides",
                    "imgUrl": "https://robohash.org/22956972?set=set1",
                    "id": "22956972"
                },
                "txt": "O Espaço de Maria é de extremo bom gosto. Tudo extremamente limpo, pratico e organizado nos mínimos detalhes.  Boa localização perto de tudo.  Sem falar na Simpatia e disponibilidade da Maria que com suas dicas tornou nossa estadia em Porto melhor do que esperávamos. Recomendadíssimo !"
            },
            {
                "at": "2018-12-09T05:00:00.000Z",
                "by": {
                    "_id": "622f3406e36c59e6164fbad8",
                    "fullname": "Miguel Angel",
                    "imgUrl": "https://robohash.org/3708225?set=set1",
                    "id": "3708225"
                },
                "txt": "Alojamiento coqueto y acogedor, muy limpio y bien ubicado, tiene 2 habitaciones y todo lo necesario para poder pasar unos días en Oporto, buena ubicación cerca de Sta Catarina. Nos ha gustado mucho la estancia, la atención de María inmejorable. Muchas gracias por su atención y amabilidad"
            },
            {
                "at": "2018-12-29T05:00:00.000Z",
                "by": {
                    "_id": "622f3407e36c59e6164fbede",
                    "fullname": "Alessandro",
                    "imgUrl": "https://robohash.org/38271990?set=set1",
                    "id": "38271990"
                },
                "txt": "buena ubicación, piso acogedor, reformado, excelente servicio y recomendaciones"
            }
        ],
        "_id": "622f337a75c7d36e498aaafa",
        "imgUrls": [
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480421/018_pjkku2.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480421/017_ctfkfa.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480421/015_wcj12d.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480421/016_ooqm1z.jpg",
            "https://res.cloudinary.com/dhy6ndeij/image/upload/v1653480421/019_skqkvv.jpg"
        ]
    },
]
// query()
function query(filterBy) {
    return storageService.query(STORAGE_KEY).then(stays => {

        if (!stays || !stays.length) {
            storageService.postMany(STORAGE_KEY, gDefaultStays)
            stays = gDefaultStays
        }
        if (filterBy) {
            var { txt, roomTypes, minPrice, maxPrice } = filterBy
            console.log(filterBy);
            // robots = robots.filter(stay => stay.name.toLowerCase().includes(name.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
            stays = stays.filter(stay => (stay.address.country.toLowerCase().includes(txt.toLowerCase())
                || stay.address.street.toLowerCase().includes(txt.toLowerCase())) &&
                (!roomTypes.length || roomTypes.includes(stay.roomType)) &&
                (maxPrice === 1000 || (stay.price <= maxPrice && stay.price >= minPrice)))
        }
        // if (filterBy) {
        //     var { name, maxPrice, minPrice } = filterBy
        //     maxPrice = maxPrice || Infinity
        //     minPrice = minPrice || 0
        //     // robots = robots.filter(stay => stay.name.toLowerCase().includes(name.toLowerCase()) && robot.model.toLowerCase().includes(model.toLowerCase())
        //     stays = stays.filter(stay => stay.name.toLowerCase().includes(name.toLowerCase()) 
        //         && (stay.price < maxPrice)
        //         && stay.price > minPrice)
        // }

        return stays
    })
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

function remove(stayId) {
    return storageService.remove(STORAGE_KEY, stayId)
}

function save(stay) {
    if (stay._id) {
        return storageService.put(STORAGE_KEY, stay)
    } else {
        return storageService.post(STORAGE_KEY, stay)
    }
}
