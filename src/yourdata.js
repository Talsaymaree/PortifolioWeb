import t from './images/t.jpg'
import about from './images/about4.png'
import aboutTwo from './images/about2.jpg'
export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'+',
        headerImage : t,
        ShowHeaderImage:true,
        //Contact Email
        contactEmail:'kalibrpluslabel@gmail.com',
        // Add Your About Text Here
        abouttext: "Talal Al Saymaree can be regarded as anything but your typical producer. Inspired by I.D.M., Vaporwave, the eclectic Brainfeeder label, Playstation Memory and Footwork. Ch4ins4w sets out to always be neck deep in an uncanny and, at times, euphoric waters. Never the one to shy away from taking left turns and injecting a healthy dose of humor into his productions, Talal doesn’t seem to try to subvert expectations, but his 4 full length albums speak volumes to his love for the foreign and off-kilter.",
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