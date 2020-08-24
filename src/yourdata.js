import t from './images/anom.jpg'
import about from './images/anomalypro.png'
import aboutTwo from './images/head/ifk1.jpg'
export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'A Divergence From the Standard',
        headerImage : t,
        ShowHeaderImage:true,
        //Contact Email
        contactEmail:'info@anomalypro.com',
        // Add Your About Text Here
        abouttext: "Anomaly Productions specializes in event coordination and talent procurement for all tastes and occasions. Anomaly Productions is focused on tailoring the most unique performances from artists around the world, regardless of the occasion. Logistical Coordination, Talent procurement, Event Management and everything in between. Let us give your audiences, loved ones, guests, or customers an experience they will be grateful for.",
        aboutImage:about,
        aboutImageTwo:aboutTwo,
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       ShowAboutImageTwo:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            title:'Turbo Apocalypse', 
             releaseDate:'2020', 
             imageSrc:"https://f4.bcbits.com/img/a3943883318_16.jpg",
             url:'https://ch4ins4w.bandcamp.com/album/turbo-apocalypse'
            },
            {
                id: 1,
                title: '3D Island',
                releaseDate: '2018',
                imageSrc: "https://f4.bcbits.com/img/a3282446447_16.jpg",
                url: 'https://ch4ins4w.bandcamp.com/album/3d-island'
            }

        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/chetanverma16'},
            {
                name: 'Behance',
                url: 'https://www.behance.net/chetanverma'
            },
            {
                name: 'Dribbble',
                url: 'https://dribbble.com/chetanverma'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/cv.uidesign/'
            }

        ]
    }