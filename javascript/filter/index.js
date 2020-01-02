const DataOriginal = [
    {
        title: "Guaxupé",
        member: [
            {
                title: "Fernando",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Sabrina",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Daniel",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Samuel",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Ramon",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Rosa",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            }
        ]
    },
    {
        title: "Guaranésia",
        member: [
            {
                title: "Adolfo",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Larissa",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Jonathan",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Isaias",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Roberto",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            },
            {
                title: "Miriã",
                email: "fernando@gmail.com",
                adress: "Av. Pitagoras 550 - centro"
            }
        ]
    }
];

const isEqual = (txt1, txt2) => txt1.toLowerCase() == txt2.toLowerCase();

const filterMember = (el, txt1) => el.filter(el => isEqual(el.title, txt1));

const filteredArrayByName = (text, data) =>
    data.map(el => {
        el.member = filterMember(el.member, text);
        return el;
    });

console.log(filteredArrayByName("Roberto", DataOriginal));
