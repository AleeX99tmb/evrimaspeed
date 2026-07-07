const ctx = document.getElementById("speedChart");


const characters = [

    {
        name: "Allosaurus",

        color: "red",

        data: [
            {x:0, y:10},
            {x:5, y:15},
            {x:10, y:20},
            {x:15, y:25},
            {x:20, y:32},
            {x:25, y:38},
            {x:30, y:42},
            {x:35, y:47},
            {x:40, y:52},
            {x:45, y:55},
            {x:50, y:58},
            {x:55, y:60},
            {x:60, y:62},
            {x:65, y:64},
            {x:70, y:65},
            {x:75, y:66},
            {x:80, y:67},
            {x:85, y:68},
            {x:90, y:69},
            {x:95, y:70},
            {x:100, y:70}
        ]

    },


    {
        name:"Kentrosaurus",

        color:"blue",

        data:[
            {x:0,y:8},
            {x:5,y:12},
            {x:10,y:18},
            {x:15,y:22},
            {x:20,y:27},
            {x:25,y:32},
            {x:30,y:38},
            {x:35,y:43},
            {x:40,y:48},
            {x:45,y:52},
            {x:50,y:56},
            {x:55,y:59},
            {x:60,y:62},
            {x:65,y:64},
            {x:70,y:66},
            {x:75,y:67},
            {x:80,y:68},
            {x:85,y:69},
            {x:90,y:70},
            {x:95,y:70},
            {x:100,y:70}
        ]

    }

];



const datasets = characters.map(character => {

    return {

        label: character.name,

        data: character.data,

        borderColor: character.color,

        backgroundColor: character.color,

        borderWidth: 2,

        tension: 0.3,

        pointRadius: 0,

        pointHoverRadius: 7

    };

});



new Chart(ctx, {


    type: "line",


    data: {

        datasets: datasets

    },


    options: {


        responsive:true,


        plugins:{


            tooltip:{


                callbacks:{


                    label:function(context){

                        return `${context.dataset.label}: Growth ${context.parsed.x}% - Speed ${context.parsed.y}`;

                    }

                }

            }

        },


        scales:{


            x:{ //growth axis


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


            y:{ //speed axis
                

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