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
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Dryosaurus",
        color: "goldenrod",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Hypsilophodon",
        color: "pink",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Kentrosaurus",
        color: "green",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:39.6},{x:91,y:39.1},{x:97,y:38},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Maiasaurus",
        color: "blue",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Pachycephalosaurus",
        color: "tomato",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Stegosaurus",
        color: "olive",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Tenontosaurus",
        color: "navy",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Triceratops",
        color: "violed",
        data: [
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },

    


    // ======================
    // CARNIVORES
    // ======================
    {
        category: "Carnivores",
        name: "Allosaurus",
        color: "orange",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:25.1},{x:30,y:30.9},{x:35,y:null},{x:40,y:37.9},{x:45,y:40.3},
            {x:50,y:41.4},{x:55,y:41.2},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Carnotaurus",
        color: "red",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Ceratosaurus",
        color: "plum",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Deinosuchus",
        color: "turquoise",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Dilophosaurus",
        color: "purple",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Herrerasaurus",
        color: "khaki",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Omniraptor",
        color: "brown",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Pteranodon",
        color: "coral",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Troodon",
        color: "white",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Carnivores",
        name: "Tyrannosaurus",
        color: "indigo",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },


   


    // ======================
    // OMNIVORES
    // ======================
    {
        category:"Omnivores",
        name:"Beipiaosaurus",
        color:"teal",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },

    {
        category:"Omnivores",
        name:"Gallimimus",
        color:"brown",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },


];

dinosaurs.forEach(dinosaur => {
    dinosaur.image = loadImage(dinosaur.name);
});




// Crear datasets separados por columnas

const datasets = dinosaurs.map(dinosaur => ({

    label: `${dinosaur.category} - ${dinosaur.name}`,

    data: dinosaur.data,

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

        const size = 42;

        ctx.save();

        // círculo blanco detrás
        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2 + 3, 0, Math.PI * 2);
        ctx.fillStyle = "white";
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

new Chart(ctx, {

    type:"line",

    data:{
        datasets:datasets
    },

    plugins: [hoverImagePlugin],

    options:{

        responsive:true,


        plugins:{

            legend:{

                position:"right",

            },


            tooltip:{

                callbacks:{

                    label:function(context){

                        return ` Growth ${context.parsed.x}% - Speed ${context.parsed.y} km/h`;

                    }

                }

            }

        },


        scales:{


            x:{ //growth

                type:"linear",

                min:0,

                max:100,

                ticks:{
                    stepSize:5
                },

                title:{
                    display:true,
                    text:"Growth (%)"
                }

            },


            y:{ //speed

                min:15,

                max:60,

                ticks:{
                    stepSize:2
                },

                title:{
                    display:true,
                    text:"Speed"
                }

            }

        }

    }

});