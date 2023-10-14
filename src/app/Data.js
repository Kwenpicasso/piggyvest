import { AiTwotoneHome } from "react-icons/ai";
import { MdAccountCircle, MdSavings } from "react-icons/md";
import { BsCurrencyDollar, BsFillRocketTakeoffFill} from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import { GiArrowWings } from "react-icons/gi";
import { BsShield } from 'react-icons/bs'
import { TbMovie } from 'react-icons/tb'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'

export const savings = [
    {
        id: 1,
        title: "Automated Savings",
        desc: 'Build a dedicated savings faster on your terms, automatically or manually.',
        saving:'piggyvest',
        img: '/14.avif',
        edit:'navyblue',
        
    },
    {
        id: 2,
        title: "Fixed Savings",
        desc: 'Lock money away for a fixed duration without having access to it until maturity. Its like having a customd deposit.',
        saving:'safelock',
        img: '/skyblue.avif',
        edit:'skyblue',
    
        
    },
    {
        id: 3,
        title: "Goal-oriented Savings",
        desc: 'Reach all your savings goals faster. Save towards multiple goals on your own or with a group.',
        saving:'Target Savings',
        img: '/green.avif',
        edit:'green',
        
        
    },
    {
        id: 4,
        title: "Flex Naira",
        desc: ' Save, transfer, manage, organise, and withdraw your money at any time.',
        saving:'Flex Naira',
        img: '/pink.avif',
        edit:'pink',
        
        
    },
    {
        id: 5,
        title: "Flex Dollar",
        desc: 'Save and grow your money in foreign currencies such as Dollars.',
        saving:'Flex Dollar',
        img: '/navyblue.avif',
        edit:'darkblue',
    
        
    },
  
    
  
  
    
  
   
];
export const icons = [
{
    id: 1,
    name: 'Home',
    icon: <AiTwotoneHome size={25}/>
},
{
    id: 2,
    name: 'savings',
    icon: <MdSavings size={25}/>
},
{
    id: 3,
    name: 'invest',
    icon: <BsFillRocketTakeoffFill size={25}/>
},
{
    id: 4,
    name: 'account',
    icon: <MdAccountCircle size={25}/>
},
{
    id: 5,
    name: 'logout',
    icon: <FiPower size={25}/>
},
];
export const dashcards = [
    {
        id: 1,
        name: 'total savings',
        price: '₦7,000.87',
        icon: <BsShield size={40}/>,
        color: 'lightblue',
    },
    {
        id: 2,
        name: 'total investments',
        price: '₦0.65',
        icon: <GiArrowWings size={40}/>,
        color: 'purple',
    },
    {
        id: 3,
        name: 'flex dollar',
        price: '₦0.00',
        icon: <BsCurrencyDollar size={40}/>,
        color: 'black',
    },
    {
        id: 4,
        name: 'flex naira',
        price: '$0.00',
        icon: <TbMovie size={40}/>,
        color: 'white',
        textcolor:'whitepop',
    },
    {
        id: 5,
        name: 'Link PocketApp®',
        price: '₦****',
        icon: <RiMoneyPoundCircleLine size={40}/>,
        color: 'darkpurple',
    },
    {
        id: 5,
        name: 'Link PocketApp®',
        price: '₦****',
        icon: <RiMoneyPoundCircleLine size={40}/>,
        color: 'darkpurple',
    },
]
export const todo = [
    {
        id: 1,
        title: 'Switch to the new NUBAN 🚦🚦'

    },
    {
        id: 2,
        title: 'Tell us more about yourself'

    },
    {
        id: 3,
        title: 'Setup automatic savings'

    },
    {
        id: 4,
        title: 'Safelock ₦50,001 for 61 - 90 days'

    },
    {
        id: 5,
        title: 'Set your security question now! 🔐 🔐'

    },
]
export const gifts = [
    {
        id: 1,
        title: 'Get Piggybank Savings Interest for September!',
        desc: 'Tap to earn interest on Your Piggybank Savings for September'

    },
   
    {
        id: 2,
        title: 'See your recent activities',
        desc: 'See your most recent activities on PiggyVest'

    },
    {
        id: 3,
        title: 'See your most recent activities on PiggyVest',
        desc: 'Avoid spending temptations. Tap to create a Safelock'

    },
    {
        id: 4,
        title: 'Link your Pocket App',
        desc: 'Withdraw from your PiggyVest safer & faster 💜'

    },
   
   
]