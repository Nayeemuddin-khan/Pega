const leftNavConfig = {
    app: {
        route: "/",
        img: "/Pega.jpeg",
        label: "Demo"
    },
    createNew: [{
            label: "Bug",
            route: "/createNew/bug",
            // icon: "FaBug"
        },{
            label: "Epic",
            route: "/createNew/epic",
            // icon: "FaEmpire"
        }
    ],
    landingPages: [{
        label: "Bugs",
        route: "/landing/bugs",
        icon: "FaBug"
    }, {
        label: "Epics",
        route: "/landing/epics",
        icon: "FaEmpire"
    },]
}

export default leftNavConfig;
