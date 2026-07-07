const ctx = document.getElementById("speedChart");


const dinosaurs = [

    // ======================
    // HERBIVORES
    // ======================

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