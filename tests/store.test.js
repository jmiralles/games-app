import Store from "../src/store";
fetch = jest.fn(() => new Promise(resolve => resolve()));

const sampleGames = [{
        "name": "8-Ball Pool",
        "short": "eightballpool",
        "url": "/spel/sportspel/8-ball-pool/?language=sv",
        "tags": "",
        "hasBoosters": false
    },
    {
        "name": "9-Ball Pool",
        "short": "nineballpool",
        "url": "/spel/sportspel/9-ball-pool/?language=sv",
        "tags": "",
        "hasBoosters": false
    },
    {
        "name": "Abracadabra",
        "short": "abracadabra",
        "url": "/spel/strategispel/abracadabra/?language=sv",
        "tags": "",
        "hasBoosters": false
    },
    {
        "name": "Ace Solitaire",
        "short": "acesolitaire",
        "url": "/spel/kortspel/ace-solitaire/?language=sv",
        "tags": "",
        "hasBoosters": false
    }
];

let GameStore;
beforeEach(() => {
    GameStore = new Store();
    GameStore.fetched = true;
    GameStore.games = sampleGames;
});

test("Store should return a list of games", async () => {
    const games = await GameStore.getGames();
    expect(games.length).toBe(4);
});

test("should order by apdex", () => {
    const topHost = topApps.getTopAppsByHost("7e6272f7-098e.dakota.biz");
    expect(topHost.length).toBe(2);
    expect(topHost[0].name).toBe(
        "Refined Concrete Shirt - Hudson - Sauer, Group"
    );
});

test("should update list and keep the top order when an app is added ", () => {
    let newTopApp = [];
    topApps.addAppToHosts({
        name: "Top App test",
        apdex: 100,
        host: ["b0b655c5-928a.nadia.biz"]
    });
    newTopApp = topApps.getAllApps();
    expect(newTopApp[0].name).toBe("Top App test");
});

test("should update list and keep the top order when an app is removed ", () => {
    let newTopApps;
    topApps.removeAppFromHosts({
        name: "Small Fresh Pants - Kautzer - Boyer, and Sons",
        apdex: 100,
        host: ["b0b655c5-928a.nadia.biz"]
    });

    newTopApps = topApps.getAllApps();
    expect(newTopApps[0].name).toBe(
        "Refined Concrete Shirt - Hudson - Sauer, Group"
    );
});