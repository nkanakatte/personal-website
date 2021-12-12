var app = new Vue({
    el: '#app',
    data: {
        myName: 'Naveen Kanakatte',
        website: 'http://naveen-kanakatte.me',
        profileImage: './Assets/Naveen.jpg',
        maxLength: 200,
        displayPMIBadge: true,
        hover: false,
        displayAWSBadge: true,
        value: '',
        degrees: [
            { school: "BU Metropolitan College", program: "Software Development", type: "Master's", year: "May 2022" },
            { school: "BMS College of Engineering", program: "Industrial Engineering & Management", type: "Bachelor's", year: "September 1999" },
            { school: "Stanford Graduate School of Business", program: "\"Executive Program for Leadership: An effective use of Power\"", type: "Executive Education Course", year: "September 2017" },
        ],
        messages: '',
        id: '',
        name: '',
        email: '',
        message: '',
        date_created: ''
    },
    methods: {
        printWindow: function () {
            window.print();
        },
    },
    created() {
        axios.get('https://contactform-project.000webhostapp.com/listRecords.php')
            .then(function (response) {
                app.messages = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },

});