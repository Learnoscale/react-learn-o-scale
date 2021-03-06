import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from '@material-ui/icons/Settings';
import ViewListIcon from "@material-ui/icons/ViewList";
import DescriptionIcon from "@material-ui/icons/Description";
import BallotIcon from "@material-ui/icons/Ballot";
import DvrIcon from "@material-ui/icons/Dvr";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import WebIcon from '@material-ui/icons/Web';
import PollIcon from '@material-ui/icons/Poll';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StoreIcon from '@material-ui/icons/Store';
import EventIcon from '@material-ui/icons/Event';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TableChartIcon from '@material-ui/icons/TableChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AirplayIcon from '@material-ui/icons/Airplay';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CampaignIcon from '@mui/icons-material/Campaign';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import GroupIcon from '@mui/icons-material/Group';
import SubjectIcon from '@mui/icons-material/Subject';
import GroupsIcon from '@mui/icons-material/Groups';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

//Admin-Header
export const DashboadNav = [
    {id: 14,title: "Home",icon: <DashboardIcon/>,page: "/",},
    {id: 1,title: "Dashboard",icon: <DashboardIcon/>,page: "/dashboard",},
    {id: 2,title: "Courses",icon: <DescriptionIcon/>,page: "/course-category",},
    {id: 3,title: "Question Bank",icon: <ViewListIcon/>,page: "/question-bank",},
    {id: 11,title: "Events",icon: <EventIcon/>,page: "/events",},
    {id: 4, title: "Enquiry", icon: <BallotIcon/>, page: "/enquiry",},
    {id: 13,title: "Engager",icon: <PersonAddIcon/>,page: "/engager",},
    {id: 12,title: "Store",icon: <StoreIcon/>,page: "/store",},
    //{id: 5, title: "Study Material", icon: <MenuBookIcon/>, page: "/study-material"},
    {id: 6, title: "Reports", icon: <PollIcon/>, page: "/reports"},
    {id: 7,title: "Site & App Manager",icon: <DvrIcon/>,page: "/site-&-app-manager",},
    {id: 8,title: "Settings",icon: <SettingsIcon/>,page: "/setting",},
];
export const BatchSidebar = [
    {id: 1, title: "Overview",icons: <DashboardIcon/>,page: "/Overview",},
    {id: 2, title: "Batches",icons: <GroupsIcon/>,page: "/course-batchs",},
    {id: 3, title: "Subjects",icons: <SubjectIcon/>,page: "/subjects",},
    {id: 4, title: "Educators",icons: <CoPresentIcon/>,page: "/educators",},
    {id: 5, title: "Contents",icons: < ContentPasteIcon/>,page: "/contents",},
    {id: 6, title: "Students",icons: <GroupIcon/>,page: "/students",},
    {id: 7, title: "Analytics",icons: <AnalyticsIcon/>,page: "/analytics",},
    {id: 8, title: "Live Sessions",icons: <LiveTvIcon/>,page: "/live-sessions",},
    {id: 9, title: "Announcements",icons: <CampaignIcon/>,page: "/announcements",},
];
// Batches sidebar1
export const BatchSidebar1 = [
    {id: 1, title: "Overview",icons: <DashboardIcon fontSize="small"/>,page: "/Overview",},
    {id: 2, title: "Batches",icons: <GroupsIcon fontSize="small"/>,page: "/course-batchs",},
    {id: 3, title: "Subjects",icons: <SubjectIcon fontSize="small"/>,page: "/subjects",},
    {id: 4, title: "Educators",icons: <CoPresentIcon fontSize="small"/>,page: "/educators",},
];
// Batch sidebar2
export const BatchSidebar2 = [
    {id: 1, title: "Students",icons: <GroupIcon fontSize="small"/>,page: "/students",},
    {id: 2, title: "Analytics",icons: <AnalyticsIcon fontSize="small"/>,page: "/analytics",},
    {id: 3, title: "Live Sessions",icons: <LiveTvIcon fontSize="small"/>,page: "/live-sessions",},
    {id: 4, title: "Announcements",icons: <CampaignIcon fontSize="small"/>,page: "/announcements",},
];

// Contents BatchSidebar
export const BatchContent = [
    {id: 1, title: "Contents",icons: < ContentPasteIcon fontSize="small"/>},
   
];
export const ContentNav = [
    {id: 1, title: "Test",icons: <DescriptionIcon fontSize="small"/>,page: "/test",},
    {id: 2, title: "Classes",icons: <LiveTvIcon fontSize="small"/>,page: "/classes",},
    {id: 3, title: "E-Books",icons: <MenuBookIcon fontSize="small"/>,page: "/e-books",},
    {id: 4, title: "Assignment",icons: <AssignmentIcon fontSize="small"/>,page: "/assignment",},
    {id: 5, title: "Content-Mapping",icons: <CampaignIcon fontSize="small"/>,page: "/content",},
    {id: 6, title: "Presentation",icons: <PresentToAllIcon fontSize="small"/>,page: "/presentation",}
];
//Website-header
export const WebsiteNav = [
    {id: 1,title: "Online Courses",icon: <LibraryBooksIcon/>,page: "/online-courses",},
    {id: 2,title: "Live Tests",icon: <RateReviewIcon/>,page: "/live-test",},
    {id: 3,title: "Classes",icon: <AssignmentIndIcon/>,page: "/classes",},
    {id: 4,title: "Practice",icon: <AssignmentIcon/>,page: "/user-setting",},
    {id: 5,title: "Challenge Zone",icon: <TableChartIcon/>,page: "/challenge-zone",},
    {id: 6,title: "Just Ask",icon: <RecordVoiceOverIcon/>,page: "/just-ask",},
    {id: 7,title: "E Books",icon: <LocalLibraryIcon/>,page: "/e-books",},
    {id: 8,title: "Learn & Earn",icon: <WebIcon/>,page: "/learn-and-earn",},
    {id: 9,title: "Exam Alerts",icon: <ReceiptIcon/>,page: "/exam-alert",},
    {id: 10,title: "Login",icon: <LockOpenIcon/>,page: "/login",},
    {id: 11,title: "Sign Up",icon: <ContactMailIcon/>,page: "/sign-up",},
];
//CourseSideNav
export const CoursesSideNav =[
    {id:1,title:'Courses',path:'/question-bank',icon:<DashboardIcon/>},
    {id:2,title:'Subject',path:'/subject',icon:<AirplayIcon/>},
    {id:3,title:'Topic',path:'/topic',icon:<MenuBookIcon/>},
]
//MutliSelect-data
export const colourOptions = [
    { value: "ocean", label: "Maths"},
    { value: "blue", label: "English" },
    { value: "purple", label: "Hindi"},

];



