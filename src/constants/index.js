import { 
    personalizedTraining, 
    groupFitness, 
    nutritionalGuidance, 
    weightLoss,
    apfIcon,
    aceIcon,
    concordiaIcon,
    tritonIcon,
    wpcIcon,
    aapfIcon,
    googleReviews,


} from "../assets";

export const navigation = [
    {
        id: 0,
        title: "Trainer",
        url: "#trainer",
    },
    {
        id: 1,
        title: "Services",
        url: "#services",
    },
    {
        id: 2,
        title: "Testimonies",
        url: "#testimonies",
    },
    {
        id: 3,
        title: "Contact",
        url: "#contact",
    }
];

export const healthyLinks = [
    {
        id: 0,
        title: "Nutrition",
        btn: "Learn More",
        url: "https://www.nih.gov/about-nih/what-we-do/nih-turning-discovery-into-health/research-healthy-living/obesity-nutrition",
        backgroundUrl: "./src/assets/card-1.svg",
        description: "Proper nutrition is vital for a healthy life as it provides the body with the necessary fuel to function optimally. It supplies energy, supports growth and repair, and maintains immune function, optimal bodily functions, and mental well-being. A balanced diet can also prevent chronic diseases, such as obesity, diabetes, and heart disease, and enhance overall quality of life. By consuming a variety of essential nutrients, individuals can maintain physical and mental health, perform daily tasks, and enjoy life to the fullest.",
        light: true,
    },
    {
        id: 1,
        title: "Exercise Is Medicine",
        btn: "Learn More",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7444006/",
        backgroundUrl: "./src/assets/card-1.svg",
        description: "Regular exercise is crucial for a healthy life as it improves physical and mental well-being, increases strength and flexibility, and enhances overall quality of life. Exercise helps maintain a healthy weight, reduces the risk of chronic diseases, such as heart disease, diabetes, and certain cancers, and boosts mood and energy levels. It also improves sleep, cognitive function, and bone density, while reducing stress and anxiety. By incorporating physical activity into daily routine, individuals can enjoy a longer, healthier, and happier life.",
        light: false,
    },
    {
        id: 2,
        title: "Personal Trainer Guidance",
        btn: "Learn More",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10828695/",
        backgroundUrl: "./src/assets/card-1.svg",
        description: "Working with a certified personal trainer is essential for achieving healthy life and fitness goals as they provide expert guidance, personalized support, and accountability. A trainer helps create customized workout plans, teaches proper form and technique, and offers motivation and encouragement. They also monitor progress, adjust plans as needed, and provide valuable insights on nutrition and lifestyle habits.",
        light: true,
    }
];

export const trainerBio = `As a certified personal trainer and seasoned powerlifting competitor, Alex brings a unique combination of expertise and passion to helping clients achieve their fitness goals. With multiple appearances at the World Powerlifting Championships (WPC) and a proven track record of success on the international stage, Alex has honed his knowledge of effective training techniques and strategies for optimal performance.
With years of experience training clients in both powerlifting and general fitness, Alex has helped numerous individuals improve their overall health, increase strength, and enhance their well-being. His expertise extends beyond the gym, as he takes a holistic approach to fitness, focusing on nutrition, recovery, and mindset to support clients in achieving their goals.`;

export const services = [
    {
        id: 0,
        title: "Personalized Training",
        image: personalizedTraining,
      
    },
    {
        id: 1,
        title: "Group Fitness Classes",
        image: groupFitness,
     
    },
    {
        id: 2,
        title: "Nutritional Guidance",
        image: nutritionalGuidance,
        
    },
    {
        id: 3,
        title: "Weight Loss Programs",
        image: weightLoss,
        
    }
];

{/* <iframe className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FJimAlex17%2Fvideos%2F387350214336887%2F&show_text=false&width=380&t=0&autoplay=1&muted=1&loop=1" style={{border:"none", overflow:"hidden", width:"100%", height:"100%"}} allowfullscreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>  */}

export const certificationIcons = [
    {
        id: 0,
        image: aceIcon,
        url: "https://www.acefitness.org/about-ace/",
    },
    {
        id: 1,
        image: apfIcon,
        url: "https://worldpowerliftingcongress.com/about-apf/#",
    },
    {
        id: 2,
        image: concordiaIcon,
        url: "https://www.cuchicago.edu/",
    },
    {
        id: 3,
        image: tritonIcon,
        url: "https://www.triton.edu/about/points-of-pride/cutting-edge-facilities/fitness-center/",
    },
    {
        id: 4,
        image: wpcIcon,
        url: "https://worldpowerliftingcongress.com/",
    },
    {
        id: 5,
        image: aapfIcon,
        url: "https://worldpowerliftingcongress.com/about-apf/#",
    },
];

export const testimonies = [
    {
        id: 0,
        url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsamantha.taylor.52493%2Fposts%2Fpfbid0cjMncwFLAnqR7JWpoAk6Do9gCjiqA4qjVajvxeA428TRnMKEuitfVWxpvJ3ruR5yl&show_text=true&width=500",
        styles: "xl:translate-x-[5rem]",
    },
    {
        id: 1,
        url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid07Kc8bU3Rxv29JuQ7MidNE4po378t2jLe8KcxpHewA4hzRyqUCT8kALU5UoQi1tRHl%26id%3D100006228405065&show_text=true&width=500",
        styles: "2xl:translate-x-[5rem]",
    },
    {
        id: 2,
        url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkendall.evans.5%2Fposts%2Fpfbid0hbLf2DyRDhJdKGhGYX1zeDdD6ZKxUdm4v5mPafTUmUBFj7NLi811g7xDThF4hJ5gl&show_text=true&width=500",
        styles: "2xl:-translate-x-[5rem]",
    },
    {
        id: 3,
        url: googleReviews, //Change to actual facebook iframe when another review is available 
        styles: "xl:-translate-x-[5rem] 2xl:-translate-x-[2rem]",
    },

];

export const words = ["Success", "Triumphant", "Uplifting", "Amazing"];