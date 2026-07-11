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
            {x:25,y:18},{x:30,y:24.7},{x:35,y:31.4},{x:40,y:32.2},{x:45,y:31.4},
            {x:50,y:30.6},{x:55,y:30.4},{x:60,y:30.4},{x:65,y:30.1},{x:70,y:29.6},
            {x:75,y:29.1},{x:80,y:29.6},{x:85,y:30.5},{x:90,y:30.5},{x:95,y:29},
            {x:100,y:25.2}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:18},{x:30,y:24.7},{x:35,y:31.4},{x:40,y:32.2},{x:45,y:31.4},
            {x:50,y:30.6},{x:55,y:30.4},{x:60,y:30.4},{x:65,y:30.1},{x:70,y:29.6},
            {x:75,y:29.1},{x:80,y:29},{x:85,y:28.7},{x:90,y:27.9},{x:95,y:26.5},
            {x:100,y:24.3}
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
            {x:25,y:21.7},{x:30,y:29.6},{x:35,y:37.1},{x:40,y:41.4},{x:45,y:42.9},
            {x:50,y:44.3},{x:55,y:44.1},{x:60,y:44},{x:65,y:43.2},{x:70,y:42},
            {x:75,y:40.7},{x:80,y:41.6},{x:85,y:43},{x:90,y:42.4},{x:95,y:38.7},
            {x:100,y:36.4}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:21.7},{x:30,y:29.6},{x:35,y:37.1},{x:40,y:41.4},{x:45,y:42.9},
            {x:50,y:44.3},{x:55,y:44.1},{x:60,y:44},{x:65,y:43.2},{x:70,y:42},
            {x:75,y:40.7},{x:80,y:40.7},{x:85,y:40.7},{x:90,y:39.7},{x:95,y:34.8},
            {x:100,y:31.9}
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
            {x:25,y:16.2},{x:30,y:24.6},{x:35,y:28.8},{x:40,y:28.1},{x:45,y:27},
            {x:50,y:26.3},{x:55,y:25.8},{x:60,y:25.1},{x:65,y:24.3},{x:70,y:23.7},
            {x:75,y:23.4},{x:80,y:24.1},{x:85,y:25.1},{x:90,y:24.7},{x:95,y:23},
            {x:100,y:22}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:16.2},{x:30,y:24.6},{x:35,y:28.8},{x:40,y:28.1},{x:45,y:27},
            {x:50,y:26.3},{x:55,y:25.8},{x:60,y:25.1},{x:65,y:24.3},{x:70,y:23.7},
            {x:75,y:23.4},{x:80,y:23.3},{x:85,y:23.2},{x:90,y:22.7},{x:95,y:22.7},
            {x:100,y:20.7}
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
            {x:25,y:25.1},{x:30,y:29.1},{x:35,y:33.4},{x:40,y:37.7},{x:45,y:40.3},
            {x:50,y:41.4},{x:55,y:41.2},{x:60,y:40.8},{x:65,y:40.3},{x:70,y:39.9},
            {x:75,y:39.8},{x:80,y:39.7},{x:85,y:39.4},{x:90,y:38.7},{x:95,y:37.5},
            {x:100,y:35.8}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25.1},{x:30,y:29.1},{x:35,y:33.4},{x:40,y:37.7},{x:45,y:40.3},
            {x:50,y:41.4},{x:55,y:41.2},{x:60,y:40.8},{x:65,y:40.3},{x:70,y:39.9},
            {x:75,y:39.8},{x:80,y:39.6},{x:85,y:39},{x:90,y:37.9},{x:95,y:36.1},
            {x:100,y:33.6}
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
            {x:25,y:32},{x:30,y:36.2},{x:35,y:39.7},{x:40,y:42.6},{x:45,y:44.7},
            {x:50,y:46.8},{x:55,y:47.7},{x:60,y:48.6},{x:65,y:49.1},{x:70,y:49.3},
            {x:75,y:49.5},{x:80,y:51.8},{x:85,y:55},{x:90,y:55.6},{x:95,y:53.8},
            {x:100,y:45}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:32},{x:30,y:36.2},{x:35,y:39.7},{x:40,y:42.6},{x:45,y:44.7},
            {x:50,y:46.8},{x:55,y:47.7},{x:60,y:48.6},{x:65,y:49.1},{x:70,y:49.3},
            {x:75,y:49.5},{x:80,y:49.5},{x:85,y:49.1},{x:90,y:47.7},{x:95,y:44.7},
            {x:100,y:39.6}
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
            {x:25,y:20.8},{x:30,y:25.7},{x:35,y:30.2},{x:40,y:33.6},{x:45,y:35.7},
            {x:50,y:37.8},{x:55,y:38.5},{x:60,y:39.3},{x:65,y:39.8},{x:70,y:40},
            {x:75,y:40.3},{x:80,y:40.3},{x:85,y:40},{x:90,y:39.3},{x:95,y:38.1},
            {x:100,y:36}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:20.8},{x:30,y:25.7},{x:35,y:30.2},{x:40,y:33.6},{x:45,y:35.7},
            {x:50,y:37.8},{x:55,y:38.5},{x:60,y:39.3},{x:65,y:39.8},{x:70,y:40},
            {x:75,y:40.3},{x:80,y:40.3},{x:85,y:39.8},{x:90,y:38.7},{x:95,y:36.6},
            {x:100,y:33.1}
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
            {x:25,y:16.2},{x:30,y:16.2},{x:35,y:16.7},{x:40,y:17.1},{x:45,y:17.1},
            {x:50,y:17.1},{x:55,y:17.3},{x:60,y:17.5},{x:65,y:17.6},{x:70,y:17.8},
            {x:75,y:18},{x:80,y:18.7},{x:85,y:19.4},{x:90,y:20.1},{x:95,y:20.8},
            {x:100,y:21.4}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:16.2},{x:30,y:16.2},{x:35,y:16.7},{x:40,y:17.1},{x:45,y:17.1},
            {x:50,y:17.1},{x:55,y:17.3},{x:60,y:17.5},{x:65,y:17.6},{x:70,y:17.8},
            {x:75,y:18},{x:80,y:18.2},{x:85,y:18.4},{x:90,y:18.5},{x:95,y:18.7},
            {x:100,y:18.9}
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
            {x:25,y:25},{x:30,y:34.1},{x:35,y:42.8},{x:40,y:47.6},{x:45,y:49},
            {x:50,y:50.4},{x:55,y:50.5},{x:60,y:50.7},{x:65,y:50.1},{x:70,y:48.8},
            {x:75,y:47.7},{x:80,y:49.3},{x:85,y:51.8},{x:90,y:51.9},{x:95,y:48.6},
            {x:100,y:41.4}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25},{x:30,y:34.1},{x:35,y:42.8},{x:40,y:47.6},{x:45,y:49},
            {x:50,y:50.4},{x:55,y:50.5},{x:60,y:50.7},{x:65,y:50.1},{x:70,y:48.8},
            {x:75,y:47.7},{x:80,y:47.1},{x:85,y:45.8},{x:90,y:43.5},{x:95,y:40},
            {x:100,y:35.5}
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
            {x:25,y:15.1},{x:30,y:18.2},{x:35,y:22.2},{x:40,y:24.2},{x:45,y:27.2},
            {x:50,y:30.2},{x:55,y:33.1},{x:60,y:36.1},{x:65,y:39.1},{x:70,y:42.1},
            {x:75,y:45},{x:80,y:45.7},{x:85,y:46.6},{x:90,y:46.8},{x:95,y:45},
            {x:100,y:37.7}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:15.1},{x:30,y:18.2},{x:35,y:22.2},{x:40,y:24.2},{x:45,y:27.2},
            {x:50,y:30.2},{x:55,y:33.1},{x:60,y:36.1},{x:65,y:39.1},{x:70,y:42.1},
            {x:75,y:45},{x:80,y:45},{x:85,y:44.4},{x:90,y:42},{x:95,y:37},
            {x:100,y:28.7}
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
            {x:25,y:25.1},{x:30,y:34},{x:35,y:42.4},{x:40,y:47.2},{x:45,y:48.7},
            {x:50,y:50.3},{x:55,y:50.2},{x:60,y:50.1},{x:65,y:49.4},{x:70,y:48.1},
            {x:75,y:46.8},{x:80,y:49},{x:85,y:51.9},{x:90,y:52},{x:95,y:49.4},
            {x:100,y:43.2}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25.1},{x:30,y:34},{x:35,y:42.4},{x:40,y:47.2},{x:45,y:48.7},
            {x:50,y:50.3},{x:55,y:50.2},{x:60,y:50.1},{x:65,y:49.4},{x:70,y:48.1},
            {x:75,y:46.8},{x:80,y:46.6},{x:85,y:46.3},{x:90,y:45.7},{x:95,y:43.9},
            {x:100,y:35.1}
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
            {x:25,y:12.6},{x:30,y:18.6},{x:35,y:24.3},{x:40,y:30.1},{x:45,y:35.8},
            {x:50,y:41.4},{x:55,y:42.2},{x:60,y:42.1},{x:65,y:43.6},{x:70,y:43.6},
            {x:75,y:45},{x:80,y:47.7},{x:85,y:51.5},{x:90,y:51.6},{x:95,y:47.8},
            {x:100,y:41.4}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:12.6},{x:30,y:18.6},{x:35,y:24.3},{x:40,y:30.1},{x:45,y:35.8},
            {x:50,y:41.4},{x:55,y:42.2},{x:60,y:42.1},{x:65,y:43.6},{x:70,y:43.6},
            {x:75,y:45},{x:80,y:45},{x:85,y:44.6},{x:90,y:43},{x:95,y:39.4},
            {x:100,y:33.3}
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
            {x:25,y:25},{x:30,y:28.9},{x:35,y:39.6},{x:40,y:51.3},{x:45,y:57.3},
            {x:50,y:34.9},{x:55,y:31.4},{x:60,y:29.8},{x:65,y:29.2},{x:70,y:29.2},
            {x:75,y:29},{x:80,y:30.8},{x:85,y:33.4},{x:90,y:33},{x:95,y:29.8},
            {x:100,y:27.9}
        ]
        },
        frail: {    
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25},{x:30,y:28.9},{x:35,y:39.6},{x:40,y:51.3},{x:45,y:57.3},
            {x:50,y:34.9},{x:55,y:31.4},{x:60,y:29.8},{x:65,y:29.2},{x:70,y:29.2},
            {x:75,y:29},{x:80,y:29},{x:85,y:28.7},{x:90,y:28},{x:95,y:26.9},
            {x:100,y:25.2}  
        ]
        },
    },


   


    // ======================
    // OMNIVORES
    // ======================
    {
        category:"Omnivores",
        name:"Beipiasaurus",
        color:"teal",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:10.5},{x:30,y:15.9},{x:35,y:21},{x:40,y:25.3},{x:45,y:28.9},
            {x:50,y:32.4},{x:55,y:32.3},{x:60,y:32.1},{x:65,y:32},{x:70,y:32},
            {x:75,y:32},{x:80,y:32.5},{x:85,y:32.9},{x:90,y:32.7},{x:95,y:31.6},
            {x:100,y:29.5}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:10.5},{x:30,y:15.9},{x:35,y:21},{x:40,y:25.3},{x:45,y:28.9},
            {x:50,y:32.4},{x:55,y:32.3},{x:60,y:32.1},{x:65,y:32},{x:70,y:32},
            {x:75,y:32},{x:80,y:32},{x:85,y:31.9},{x:90,y:31.2},{x:95,y:29.5},
            {x:100,y:26.8}
        ]
        },
    },

    {
        category:"Omnivores",
        name:"Gallimimus",
        color:"yellow",
        prime: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:49.7},{x:30,y:49.7},{x:35,y:49.7},{x:40,y:49.7},{x:45,y:49.7},
            {x:50,y:49.7},{x:55,y:49.7},{x:60,y:49.7},{x:65,y:49.7},{x:70,y:49.7},
            {x:75,y:49.7},{x:80,y:52.4},{x:85,y:56.2},{x:90,y:56.9},{x:95,y:54.8},
            {x:100,y:44.3}
        ]
        },
        frail: {
            minGrowth: 75,
            data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:49.7},{x:30,y:49.7},{x:35,y:49.7},{x:40,y:49.7},{x:45,y:49.7},
            {x:50,y:49.7},{x:55,y:49.7},{x:60,y:49.7},{x:65,y:49.7},{x:70,y:49.7},
            {x:75,y:49.7},{x:80,y:46.8},{x:85,y:46.3},{x:90,y:44.5},{x:95,y:40.6},
            {x:100,y:34.2}
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

        const size = 80;

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

                min: 25,

                max: 101,

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


// Agrupar datasets por categoría
chart.data.datasets.forEach((dataset, index) => {

    const category = dataset.label.split(" - ")[0];

    if (categories[category]) {

        categories[category].push({
            dataset,
            index
        });

    }

});



// Crear columnas
Object.keys(categories).forEach(category => {


    const column = document.createElement("div");

    column.className = "legend-column";



    // Título
    const title = document.createElement("div");

    title.className = "legend-title";

    title.textContent = category;


    column.appendChild(title);



    // =========================
    // BOTÓN GENERAL CATEGORÍA
    // =========================

    const toggleButton = document.createElement("button");

    toggleButton.textContent = "Hide all";

    toggleButton.style.width = "100%";

    toggleButton.style.marginBottom = "10px";

    toggleButton.style.cursor = "pointer";



    let categoryVisible = true;



    toggleButton.onclick = () => {


        categoryVisible = !categoryVisible;



        categories[category].forEach(item => {


            chart.setDatasetVisibility(
                item.index,
                categoryVisible
            );


        });



        chart.update();



        toggleButton.textContent = categoryVisible
            ? "Hide all"
            : "Show all";



    };



    column.appendChild(toggleButton);




    // =========================
    // DINOSAURIOS
    // =========================

    categories[category].forEach(item => {



        const row = document.createElement("div");

        row.className = "legend-item";



        // Color

        const color = document.createElement("span");

        color.className = "legend-color";

        color.style.backgroundColor =
            item.dataset.borderColor;




        // Nombre

        const text = document.createElement("span");

        text.textContent =
            item.dataset.label.replace(
                category + " - ",
                ""
            );



        row.appendChild(color);

        row.appendChild(text);




        // =========================
        // ⭐ PRIME / FRAIL
        // =========================

        const star = document.createElement("span");


        star.textContent = "★";

        star.style.marginLeft = "8px";

        star.style.cursor = "pointer";

        star.style.color = "gold";

        star.style.fontSize = "18px";



        star.onclick = (e) => {


            e.stopPropagation();



            const dataset =
                chart.data.datasets[item.index];

            const dino =
                dataset.dinosaur;




            if (dataset.mode === "prime") {


                dataset.mode = "frail";


                dataset.data =
                    dino.frail
                        ? dino.frail.data
                        : dino.data;



                star.style.color = "white";



            } 
            else {



                dataset.mode = "prime";


                dataset.data =
                    dino.prime
                        ? dino.prime.data
                        : dino.data;



                star.style.color = "gold";


            }



            chart.update();



        };



        row.appendChild(star);





        // =========================
        // CLICK INDIVIDUAL
        // =========================

        row.onclick = () => {


            const visible =
                chart.isDatasetVisible(item.index);



            chart.setDatasetVisibility(
                item.index,
                !visible
            );



            chart.update();



            row.style.opacity =
                visible ? 0.4 : 1;



        };



        column.appendChild(row);



    });



    legendContainer.appendChild(column);



});