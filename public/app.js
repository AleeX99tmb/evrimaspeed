const ctx = document.getElementById("speedChart");

function loadImage(name) {
    const img = new Image();

    img.src = `img/${name.toLowerCase().replace(/\s+/g, "-")}.png`;

    return img;
}

const dinosaurs = [

    // ======================
    // HERBIVORES
    // ======================
    {
        category: "Herbivores",
        name: "Diabloceratops",
        color: "gold",

        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        }, 
        
    },
    {
        category: "Herbivores",
        name: "Dryosaurus",
        color: "goldenrod",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Hypsilophodon",
        color: "pink",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Kentrosaurus",
        color: "green",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:17.9},{x:30,y:24.2},{x:35,y:27.9},{x:40,y:33},{x:45,y:36.7},
            {x:50,y:41.5},{x:55,y:43.5},{x:60,y:42.4},{x:65,y:null},{x:70,y:null},
            {x:75,y:39.6},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:17.9},{x:30,y:24.2},{x:35,y:27.9},{x:40,y:33},{x:45,y:36.7},
            {x:50,y:41.5},{x:55,y:43.5},{x:60,y:42.4},{x:65,y:null},{x:70,y:null},
            {x:75,y:39.6},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Maiasaura",
        color: "blue",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:19.5},{x:30,y:16.8},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:19.5},{x:30,y:16.8},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Pachycephalosaurus",
        color: "tomato",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:23.8},{x:30,y:30.6},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:23.8},{x:30,y:30.6},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Stegosaurus",
        color: "olive",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Tenontosaurus",
        color: "navy",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Herbivores",
        name: "Triceratops",
        color: "violed",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },

    


    // ======================
    // CARNIVORES
    // ======================
    {
        category: "Carnivores",
        name: "Allosaurus",
        color: "orange",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25.1},{x:30,y:30.9},{x:35,y:null},{x:40,y:37.9},{x:45,y:40.3},
            {x:50,y:41.4},{x:55,y:41.2},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25.1},{x:30,y:30.9},{x:35,y:null},{x:40,y:37.9},{x:45,y:40.3},
            {x:50,y:41.4},{x:55,y:41.2},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Carnotaurus",
        color: "red",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Ceratosaurus",
        color: "plum",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Deinosuchus",
        color: "turquoise",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Dilophosaurus",
        color: "purple",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Herrerasaurus",
        color: "khaki",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Omniraptor",
        color: "brown",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Pteranodon",
        color: "coral",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Troodon",
        color: "white",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },
    {
        category: "Carnivores",
        name: "Tyrannosaurus",
        color: "indigo",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },


   


    // ======================
    // OMNIVORES
    // ======================
    {
        category:"Omnivores",
        name:"Beipiaosaurus",
        color:"teal",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },

    {
        category:"Omnivores",
        name:"Gallimimus",
        color:"brown",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:55},{x:85,y:60},{x:90,y:60},{x:95,y:60},
            {x:100,y:60}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:40},{x:30,y:50},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:50},{x:80,y:50},{x:85,y:50},{x:90,y:50},{x:95,y:50},
            {x:100,y:50}
        ]
        },
    },


];

dinosaurs.forEach(dinosaur => {
    dinosaur.image = loadImage(dinosaur.name);
});




const datasets = dinosaurs.map(dinosaur => ({

    label: `${dinosaur.category} - ${dinosaur.name}`,

    // Prime por defecto
    data: dinosaur.prime ? dinosaur.prime.data : dinosaur.data,

    dinosaur: dinosaur,

    mode: "prime",

    image: dinosaur.image,

    borderColor: dinosaur.color,

    backgroundColor: dinosaur.color,

    borderWidth: 2,

    tension: 0,

    pointRadius: 2,

    pointHoverRadius: 0

}));

const hoverImagePlugin = {

    id: "hoverImage",

    afterDatasetsDraw(chart) {

        const active = chart.getActiveElements();

        if (!active.length) return;

        const {ctx} = chart;

        const {datasetIndex, index} = active[0];

        const point = chart.getDatasetMeta(datasetIndex).data[index];

        const image = chart.data.datasets[datasetIndex].image;

        if (!image || !image.complete) return;

        const size = 60;

        ctx.save();

        // círculo blanco detrás
        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2 + 3, 0, Math.PI * 2);
        //ctx.fillStyle = "white";
        ctx.fill();

        // borde negro
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#222";
        ctx.stroke();

        // imagen
        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
        ctx.clip();

        ctx.drawImage(
            image,
            point.x - size / 2,
            point.y - size / 2,
            size,
            size
        );

        ctx.restore();

    }

};

const chart = new Chart(ctx, {

    type: "line",

    data: {
        datasets: datasets
    },

    plugins: [hoverImagePlugin],

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false   // Ocultamos la leyenda de Chart.js
            },

            tooltip: {

                callbacks: {

                    label(context) {
                        return ` Growth ${context.parsed.x}% - Speed ${context.parsed.y} km/h`;
                    }

                }

            }

        },

        scales: {

            x: {

                type: "linear",

                min: 0,

                max: 100,

                ticks: {
                    stepSize: 5
                },

                title: {
                    display: true,
                    text: "Growth (%)"
                }

            },

            y: {

                min: 15,

                max: 60,

                ticks: {
                    stepSize: 2
                },

                title: {
                    display: true,
                    text: "Speed"
                }

            }

        }

    }

});


const legendContainer = document.getElementById("legend-container");


const categories = {
    Herbivores: [],
    Carnivores: [],
    Omnivores: []
};


// Agrupar dinosaurios
chart.data.datasets.forEach((dataset, index)=>{

    const category = dataset.label.split(" - ")[0];

    if(categories[category]){

        categories[category].push({
            dataset,
            index
        });

    }

});



// Crear columnas
Object.keys(categories).forEach(category=>{


    const column = document.createElement("div");
    column.className = "legend-column";


    const title = document.createElement("div");

    title.className = "legend-title";

    title.textContent = category;


    column.appendChild(title);



    categories[category].forEach(item=>{


        const row = document.createElement("div");

        row.className = "legend-item";



        const color = document.createElement("span");

        color.className = "legend-color";

        color.style.backgroundColor = item.dataset.borderColor;



        const text = document.createElement("span");

        text.textContent = item.dataset.label.replace(
            category + " - ",
            ""
        );



        row.appendChild(color);

        row.appendChild(text);



        // ⭐ Prime/Frail

        const star = document.createElement("span");


        star.textContent = "★";

        star.style.marginLeft = "8px";

        star.style.cursor = "pointer";

        star.style.color = "gold";

        star.style.fontSize = "18px";



        star.onclick = (e)=>{


            e.stopPropagation();



            const dataset = chart.data.datasets[item.index];

            const dino = dataset.dinosaur;



            if(dataset.mode === "prime"){


                dataset.mode = "frail";


                dataset.data = dino.frail 
                    ? dino.frail.data 
                    : dino.data;



                star.style.color = "white";


            }
            else{


                dataset.mode = "prime";


                dataset.data = dino.prime
                    ? dino.prime.data
                    : dino.data;



                star.style.color = "gold";


            }



            chart.update();


        };



        row.appendChild(star);




        // Ocultar/mostrar dinosaurio

        row.onclick = ()=>{


            const visible = chart.isDatasetVisible(item.index);



            chart.setDatasetVisibility(
                item.index,
                !visible
            );


            chart.update();



            row.style.opacity = visible 
                ? 0.4 
                : 1;


        };



        column.appendChild(row);



    });



    legendContainer.appendChild(column);



});