/*
Milestone 5
Cancella messaggio: 
cliccando sul messaggio appare un menu a tendina 
che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto 
nella lista dei contatti.
*/

Vue.config.devtools = true;

const app = new Vue(

    {
        el: "#root",
        data: {

            selFriend: 0,
            userText: "",
            userFilterText: "",
            lastElement: 0,
            activeMessage : null,

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

            addMex: function(userText){

                if(userText.trim().length > 0){

                const dayDate = dayjs().format("DD/MM/YYYY HH:mm:ss");

                this.contacts[this.selFriend].messages.push({

                    date: dayDate,
                    text: userText,
                    status: 'sent' 

                });

                this.userText = "";

                setTimeout(this.addAutoFriendMex, 1000);

                }

            },

            selectedFriend: function(index){

                this.selFriend = index;
                this.activeMessage = null;

            },

            addAutoFriendMex: function(){
                
                const dayDate = dayjs().format("DD/MM/YYYY HH:mm:ss");

                this.contacts[this.selFriend].messages.push({

                    date: dayDate,
                    text: "ok",
                    status: 'received' 

                });

            },

            filterFriendName: function(){

                this.contacts.forEach((element) => {

                    if(element.name.toLowerCase().includes(this.userFilterText.toLowerCase().trim())){

                        element.visible = true;

                    }else{

                        element.visible = false;

                    }

                })

            },

            deleteMex: function(index){

                this.contacts[this.selFriend].messages.splice(index, 1);
                this.activeMessage = null;

            },

            setActiveMessage: function(index){

                if(index === this.activeMessage){

                this.activeMessage = null;

                }else{

                this.activeMessage = index;

                }

            },

            getContactLastMessageText: function(contact){

                const contactMessages = contact.messages;
                const lastMessageText = contactMessages[contactMessages.length - 1].text ;

                const cutMessageText = lastMessageText.slice(0, 20);

                if( cutMessageText.length > 19 ){

                    cutMessageText += "..." ;

                }

                return cutMessageText ;
            }

        }
    }

);