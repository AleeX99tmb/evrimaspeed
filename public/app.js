const ctx = document.getElementById("speedChart");


const dinosaurs = [

    // ======================
    // HERBIVORES
    // ======================
    {
        category: "Herbivores",
        name: "Diabloceratops",
        color: "green",
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
        color: "green",
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
        color: "green",
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
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },
    {
        category: "Herbivores",
        name: "Maiasaurus",
        color: "green",
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
        color: "green",
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
        color: "green",
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
        color: "green",
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
        color: "green",
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
        name: "Deinosuchus",
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
        name: "Dilophosaurus",
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
        name: "Herrerasaurus",
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
        category: "Omniraptor",
        name: "Allosaurus",
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
        category: "Pteranodon",
        name: "Allosaurus",
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
        category: "Troodon",
        name: "Allosaurus",
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
        name: "Tyrannosaurus",
        color: "red",
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
        color:"purple",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },

    {
        category:"Gallimimus",
        name:"Beipiaosaurus",
        color:"purple",
        data:[
            {x:0,y:null},{x:5,y:null},{x:10,y:null},{x:15,y:null},{x:20,y:null},
            {x:25,y:null},{x:30,y:null},{x:35,y:null},{x:40,y:null},{x:45,y:null},
            {x:50,y:null},{x:55,y:null},{x:60,y:null},{x:65,y:null},{x:70,y:null},
            {x:75,y:null},{x:80,y:null},{x:85,y:null},{x:90,y:null},{x:95,y:null},
            {x:100,y:null}
        ]
    },


];



// Crear datasets separados por columnas

const datasets = dinosaurs.map(dinosaur => {

    return {

        label:`${dinosaur.category} - ${dinosaur.name}`,

        data:dinosaur.data,

        borderColor:dinosaur.color,

        backgroundColor:dinosaur.color,

        borderWidth:2,

        tension:0.3,

        pointRadius:1,

        pointHoverRadius:10

    };

});



new Chart(ctx, {

    type:"line",

    data:{
        datasets:datasets
    },


    options:{

        responsive:true,


        plugins:{

            legend:{

                position:"right",

            },


            tooltip:{

                callbacks:{

                    label:function(context){

                        return `${context.dataset.label}: Growth ${context.parsed.x}% - Speed ${context.parsed.y}`;

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

                min:0,

                max:100,

                ticks:{
                    stepSize:5
                },

                title:{
                    display:true,
                    text:"Speed"
                }

            }

        }

    }

});