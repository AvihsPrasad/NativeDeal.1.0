// import arrowDown from "@/assets/icons/arrow-down.png";
// import arrowUp from "@/assets/icons/arrow-up.png";
// import backArrow from "@/assets/icons/back-arrow.png";
// import chat from "@/assets/icons/chat.png";
// import checkmark from "@/assets/icons/check.png";
// import close from "@/assets/icons/close.png";
// import dollar from "@/assets/icons/dollar.png";
// import email from "@/assets/icons/email.png";
// import eyecross from "@/assets/icons/eyecross.png";
import google from "@/assets/images/google.png";
// import home from "@/assets/icons/home.png";
// import list from "@/assets/icons/list.png";
// import lock from "@/assets/icons/lock.png";
// import map from "@/assets/icons/map.png";
// import marker from "@/assets/icons/marker.png";
// import out from "@/assets/icons/out.png";
// import person from "@/assets/icons/person.png";
// import pin from "@/assets/icons/pin.png";
// import point from "@/assets/icons/point.png";
// import profile from "@/assets/icons/profile.png";
// import search from "@/assets/icons/search.png";
// import selectedMarker from "@/assets/icons/selected-marker.png";
// import star from "@/assets/icons/star.png";
// import target from "@/assets/icons/target.png";
// import to from "@/assets/icons/to.png";
import check from "@/assets/images/check.png";
import getStarted from "@/assets/images/get-started.png";
// import message from "@/assets/images/message.png";
// import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/welcome/welcome1.png";
import onboarding2 from "@/assets/welcome/welcome2.png";
import onboarding3 from "@/assets/welcome/welcome3.png";
// import signUpCar from "@/assets/images/partial-react-logo.png";
import signUpImage from "@/assets/images/signup.png";
import loginImage from "@/assets/images/login.png";
import BannerOne from "@/assets/banner/banner1.png"
import BannerTwo from "@/assets/banner/banner2.png"
import BannerThree from "@/assets/banner/banner3.png"
import BannerFour from "@/assets/banner/banner4.png"
import BannerFive from "@/assets/banner/banner5.png"
import tools from "@/assets/Categorey/tools.png"
import books from "@/assets/Categorey/Books.png"
import bag from "@/assets/Categorey/Bag_object.png"
import auto from "@/assets/Categorey/motorcycle.png"
import cup from "@/assets/Categorey/cup_object.png"
import tag from "@/assets/Categorey/tag.png";
import d1 from "@/assets/dealer/d1.jpg"
import d2 from "@/assets/dealer/d2.jpg"
import d3 from "@/assets/dealer/d3.jpg"
import product1 from "@/assets/products/p1.jpg"
import product2 from "@/assets/products/p2.jpg";
import LGTV from "@/assets/products/LG_55_4K_UHD_SMART_LED.jpeg";
import SamsungTV from "@/assets/products/SAMSUNG_43DU7000_LED_TV.jpeg";
import WhirlpoolWash from "@/assets/products/Whirlpool_ELITE_WashingMachine.jpeg";
import ZebronicsSoundBar from "@/assets/products/ZEBRONICS_Zeb_JUKEBAR5000_SOUNDBAR.jpeg";

export const images = {
    onboarding1,
    onboarding2,
    onboarding3,
    BannerOne,
    BannerTwo,
    BannerThree,
    BannerFour,
    BannerFive,
    loginImage,
    signUpImage,
    tools,
    bag,tag,
    auto,cup,books,
    d1,d2,d3,
    check,
    getStarted,
    product1,
    product2,
    LGTV,
    SamsungTV,
    WhirlpoolWash,
    ZebronicsSoundBar
    // noResult,
    // message,
};

export const icons = {
//     arrowDown,
//     arrowUp,
//     backArrow,
//     chat,
//     checkmark,
//     close,
//     dollar,
//     email,
//     eyecross,
    google,
//     home,
//     list,
//     lock,
//     map,
//     marker,
//     out,
//     person,
//     pin,
//     point,
//     profile,
//     search,
//     selectedMarker,
//     star,
//     target,
//     to,
};

export const onboarding = [
    {
        id: 1,
        title: "The perfect ride is just a tap away!",
        description:
            "Your journey begins with Ryde. Find your ideal ride effortlessly.",
        image: images.onboarding1,
    },
    {
        id: 2,
        title: "Best car in your hands with Ryde",
        description:
            "Discover the convenience of finding your perfect ride with Ryde",
        image: images.onboarding2,
    },
    {
        id: 3,
        title: "Your ride, your way. Let's go!",
        description:
            "Enter your destination, sit back, and let us take care of the rest.",
        image: images.onboarding3,
    },
];

export const HomeSwiperImages = [
    {url: images.BannerThree},
    {url: images.BannerFive},
    {url: images.BannerTwo},
    {url: images.BannerFour},
];
export const categoryList = [
    {   
        CategoryId: 'CATLST001',
        CategoryName: 'Groceries',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.cup,
        CategoryList: ['Drinks','grains','Soaps','Shampoo','Brush','Biscuits','Chocolate','Cigarettes','flour','More']
    },
    {
        CategoryId: 'CATLST002',
        CategoryName: 'Books & Stationary',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.books,
        CategoryList: ['Books','Bags','Lunch Box','Bottles','More']
    },
    {
        CategoryId: 'CATLST003',
        CategoryName: 'Electronis & Electricals',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.tools,
        CategoryList: ['Bulb','Switches','Wires','Tools','','More']
    },
    {   
        CategoryId: 'CATLST004',
        CategoryName: 'Medical & Madicines',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.bag,
        CategoryList: ['appolo','paracetamal','Twincal','More']
    },
    {   
        CategoryId: 'CATLST005',
        CategoryName: 'Auto',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.auto,
        CategoryList: ['Car & Bike Parts','Accesories','Bikes','More']
    },
    {   
        CategoryId: 'CATLST006',
        CategoryName: 'Others',
        categoryDisp: 'Daily needs and utilities',
        CategoryUrl: images.tag,
        CategoryList: ['appolo','paracetamal','Twincal','More']
    },
]

export const categorySubList = [
    {catid:'CATLST001',itemTypes: [
        {itemId:'CATLST001_CSLIID0001',title:'grains'},
        {itemId:'CATLST001_CSLIID0002',title:'flour'},
        {itemId:'CATLST001_CSLIID0003',title:'Bath room essentials'},
        {itemId:'CATLST001_CSLIID0004',title:'Breverages mix'},
    ]},
    {catid:'CATLST002',itemTypes: [
        {itemId:'CATLST002_CSLIID0001',title:'Books'},
        {itemId:'CATLST002_CSLIID0002',title:'Text books'},
        {itemId:'CATLST002_CSLIID0003',title:'writing essentials'},
        {itemId:'CATLST002_CSLIID0004',title:'Drawing'},
    ]},
]
export const categorySubListItems = []
export const MenuList = [
    {title: 'Orders',descp: '',route: ''},
    {title: 'Address',descp: '',route: ''},
    {title: 'Documents',descp: '',route: ''},
    {title: 'Notifications',descp: '',route: ''},
    {title: 'CustomerCare',descp: '',route: ''},
    {title: 'Terms & Condition',descp: '',route: ''},
]
export const DealersList = [
    {dId: 'DEAL001',title: 'Ola',type:'brand',descp: 'EV bikes and Scooters',img: images.d1,ratings:'2.5'},
    {dId: 'DEAL005',title: 'Sir Vasavi Enterprise',type:'enterprise',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
    {dId: 'DEAL002',title: 'Cadbury',type:'brand',descp: 'Chocolets and Biskuits',img: images.d2,ratings:'3.5'},
    {dId: 'DEAL003',title: 'Himalya',type:'brand',descp: 'Soap, shampoos, face creams, tootpast',img: images.d3,ratings:'3.0'},
    {dId: 'DEAL004',title: 'Appolo',type:'brand',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
    {dId: 'DEAL004',title: 'Manjunatha Enterprise',type:'enterprise',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
]
export const DealersDetails = [
    {ddId:'DD001',dId: 'DEAL001',title: 'Ola',type:'brand',descp: 'EV bikes and Scooters',img: images.d1,ratings:'2.5'},
    {ddId:'DD002',dId: 'DEAL005',title: 'Sir Vasavi Enterprise',type:'enterprise',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
    {ddId:'DD003',dId: 'DEAL002',title: 'Cadbury',type:'brand',descp: 'Chocolets and Biskuits',img: images.d2,ratings:'3.5'},
    {ddId:'DD004',dId: 'DEAL003',title: 'Himalya',type:'brand',descp: 'Soap, shampoos, face creams, tootpast',img: images.d3,ratings:'3.0'},
    {ddId:'DD005',dId: 'DEAL004',title: 'Appolo',type:'brand',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
    {ddId:'DD006',dId: 'DEAL004',title: 'Manjunatha Enterprise',type:'enterprise',descp: 'Chocolets and Biskuits',img: images.d1,ratings:'4.5'},
]
export const DealersItems = [
    {diId:'DD001',dId: 'DEAL001',products:[
        {pid: 'DD001P1', pName:'OLA S1 Pro',img:images.LGTV},
        {pid: 'DD001P2', pName:'OLA S1 Air',img:images.LGTV},
        {pid: 'DD001P3', pName:'OLA S1 X',img:images.LGTV},
    ]},
    {diId:'DD002',dId: 'DEAL005',products:[
        {pid: 'DD002P1', pName:'LG 139.7 cm (55 inch) 4K Ultra HD TV, Ashed Blue,  55UT80506LA',img:images.LGTV, price: '120000'},
        {pid: 'DD002P2', pName:'Samsung 108 cm (43 Inch) 4K Ultra HD Smart TV (UA43DU7000KLXL, Black)', img: images.SamsungTV, price: '50000'},
        {pid: 'DD002P3', pName:'Whirlpool 7.5 Kg 5 Star Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ELITE 7.5, Grey, Hard Water Wash)',img: WhirlpoolWash, price: '6000'},
        {pid: 'DD001P4', pName:'Zebronics Zeb-Juke Bar 5000 Pro 160 Watts Multimedia soundbar with subwoofer Supports HDMI(ARC), Optical Input, AUX, Bluetooth & USB', img: ZebronicsSoundBar,price:'3000'},
    ]},
]