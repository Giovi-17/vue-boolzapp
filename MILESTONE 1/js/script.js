/*
Milestone 1
Replica della grafica con la possibilità 
di avere messaggi scritti dall’utente (verdi) 
e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: 
tramite la direttiva v-for, visualizzare nome e immagine 
di ogni contatto
*/

Vue.config.devtools = true;

const app = new Vue(

    {
        el: "#root",
        data: {

            selFriend: 0,
            changeClassMex: false,
            userText: "",

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },

                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ],
                },

                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        },
                    ],
                },

                {
                    name: 'Luisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                },
            ]

        },
        methods: {

            typeOfMex: function(index){

                /* console.log(this.contacts[0].messages[0].status); */

                if(this.contacts[0].messages[0].status === "sent"){

                    this.changeClassMex = true;

                }else if(this.contacts[0].messages[0].status === "received"){

                    this.changeClassMex = false;

                }

                console.log(index);

                /* console.log(this.changeClassMex); */

                return this.changeClassMex;

            },

            addMex: function(userText){

                this.contacts[0].messages.push({

                    data: "Prova Data",
                    text: userText,
                    status: 'sent' 

                });

                this.userText = "";

                console.log(this.contacts[0].messages);

            },

            selectedFriend: function(index){

                selFriend = index;

            }

        }
    }

);