import React, {useEffect, useState} from 'react'
import {useHistory} from  'react-router-dom'
import clsx from "clsx";
import {makeStyles,TextField,InputAdornment,Button,IconButton,Menu,MenuItem,Dialog,DialogActions,DialogTitle} from '@material-ui/core';
import {Search ,FilterList,Add,MoreVert,Edit,Delete,Clear} from '@material-ui/icons';
import Loader from '../../MainComponents/Loader';
import {Themes} from "../../Theme/theme";
import {crud} from "../../services/crud";
import Slide from '@material-ui/core/Slide';
import '../QuestionBankComponent/QuestionCss.css';
import { useLocation } from "react-router-dom";
export default function QuestionCreateCourse() {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [formData, setFormData] = useState({
        formTitle: '',
        ButtonTitle: ''
    });
    const [loader,setLoader] = useState(false)
    const [open, setOpen] = useState(false);
    const [data, setData] = useState()
    const [anchorEl, setAnchorEl] = useState(null);
    const [courseData, setCourseData] = useState('');
    const [courses,setCourses]=useState();
    function GetFormManage() {
        setOpen(true)
            setFormData({
                formTitle: 'Create New Category',
                ButtonTitle: 'Create Category',
            });
    }
    function getClearAll() {
        setCourseData({
            courseName: '',
            category_subtitle:''
        });
    }
    //Edit
    function getEdit() {
        setOpen(true)
            setFormData({
                formTitle: 'Edit Category',
                ButtonTitle: 'UPDATE'
            });
            setCourseData({
                courseName: data.category_title,
                category_subtitle:data.category_short
            })
    }
    //delete
    async function deletecategory(){
       await crud.confirm();
        await crud.delete('/categoryapi/'+ data.category_id);
        getCourses();

    }
    // getCourses
    async function getCourses()
    {
      
        setLoader(true);
        
        try{
        
        const data= await crud.retrieve('/categoryapi/');
        setCourses(data);
        setLoader(false);
    }
    catch(e){
        setLoader(false);
    }
    }
    useEffect(() => {
        getClearAll();
        getCourses();
        
    }, [location])
    return (
        <>
            <div className={'container-fluid py-4 '}>
                <div className={'row px-lg-5'}>
                    <div className={'col-lg-3 col-12'}>
                        <h3 className={classes.title}>Category({courses?.length})</h3>
                    </div>
                    <div className={'col-lg-4 col-12 my-3 mt-lg-0'}>
                        <TextField fullWidth placeholder={'search here...'} InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search/></InputAdornment>),}}/>
                    </div>
                    <div className={'col-lg-5 col-12 d-flex justify-content-lg-end my-3 mt-lg-0'}>
                        <Button className={'mx-lg-3 mx-1'} variant="contained" startIcon={<FilterList/>}>
                            Sort
                        </Button>
                        <Button onClick={() => {GetFormManage()}} variant="contained" className={'mx-lg-3 mx-1'} startIcon={<Add/>}
                                style={{background: Themes.MainHeaderColor, color: Themes.WHITE}}>
                            Create Category
                        </Button>
                    </div>
                    <div className={'divider'}/>
                    {courses?.length?<>
                        {courses?.map((value, index) => (
                        <div key={index} className={'col-xl-3 col-lg-4 col-md-6 col-12  mt-4'}>
                            <div className={clsx('px-3 pt-2 card')} >
                                <div onClick={()=>{history.push({pathname: '/question-course/'+value?.category_id,
                                    state: {category:value.category_title}})}} className={'QuestionRedirect'} />
                                <h5>{value?.category_title}</h5>
                                <p>{value?.category_short}</p>
                                <IconButton  onClick={(event) => {
                                    setAnchorEl(event.currentTarget);
                                    setData(value)}} className={classes.menu}><MoreVert/></IconButton>
                                <Menu key={index}
                                      id="simple-menu"
                                      anchorEl={anchorEl}
                                      open={anchorEl}
                                      onClose={() => {setAnchorEl(null);}}>
                                    <MenuItem className={'d-flex justify-content-between text-primary'} onClick={() => {
                                        getEdit();
                                        setAnchorEl(false)
                                    }}>Edit<Edit className={classes.menuIcon}/></MenuItem>
                                    <MenuItem className={'d-flex justify-content-between text-danger'} onClick={() => {
                                       deletecategory();
                                       setAnchorEl(false);}}>
                                      Delete <Delete className={classes.menuIcon}/>
                                    </MenuItem>
                                    <MenuItem className={'text-success'} onClick={() => {setAnchorEl(false);}}>Enabled</MenuItem>
                                    <MenuItem onClick={() => {
                                        setAnchorEl(false);
                                        crud.confirm()
                                    }}>Disabled</MenuItem>
                                </Menu>
                                {/* <h6>{value?.topic} Courses</h6> */}
                            </div>
                        </div>
                    ))}
                    </>:<><h2 className='text-center pt-5'>Category is Empty...</h2></>}
                </div>
            </div>
            <Dialog maxWidth={'lg'} open={open} TransitionComponent={Transition} keepMounted>
                <DialogTitle id="alert-dialog-slide-title">{formData.formTitle}
                    <hr/>
                </DialogTitle>
                <IconButton onClick={() => {
                    setOpen(false);
                    getClearAll()
                }} className={classes.CloseBtn}><Clear/></IconButton>
                <div className={clsx('container-fluid mx-lg-4', classes.FormWidth)}>
                    <div className={'row pl-0 pr-0'}>
                        <div className={clsx('col-lg-3 col-12')}>
                            <h6 className={classes.InputTitle}>Category Name</h6>
                        </div>
                        <div className={'col-lg-9 col-12'}>
                            <TextField value={courseData.courseName} onChange={(e)=>{
                                     setCourseData({...courseData,courseName:e.target.value})
                            }} name='courseName'  fullWidth variant="outlined" InputProps={{className: 'TextFieldHeight',}}/>
                        </div>
                    </div>
                        <div className={'row  my-4 pl-0 pr-0'}>
                            <div className={clsx('col-lg-3 col-12')}>
                                <h6 className={classes.InputTitle}>sub category</h6>
                            </div>
                            <div className={'col-lg-9 col-12'}>
                            <TextField value={courseData.category_subtitle} onChange={(e)=>{
                                     setCourseData(
                                         {...courseData,
                                            category_subtitle:e.target.value})
                            }} name='category_subtitle'  fullWidth variant="outlined" InputProps={{className: 'TextFieldHeight',}}/>
                        </div>
                        </div> 
                </div>
                <DialogActions className={'mx-2'}>
                    <Button className={clsx(classes.Btn,)} variant={'contained'} onClick={async() => {
                    if(formData.ButtonTitle==='Create Category'){
                          await crud.create('/categoryapi/',{
                              category_short:courseData.category_subtitle,
                              category_title:courseData.courseName,
                            });
                        getCourses();
                        getClearAll();
                     }
                        setOpen(false)
                    if(formData.ButtonTitle==='UPDATE'){
                           await crud.update('/categoryapi/'+data.category_id+'/',{
                                    category_short:courseData.category_subtitle,      
                                    category_title:courseData.courseName,      
                         });
                        getCourses();
                        }
                    }} color="primary">
                        {formData.ButtonTitle}
                    </Button>
                </DialogActions>
            </Dialog>
            {loader?<Loader/>:<></>}
        </>
    )
}
const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '-16px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '0px',
        },
    },
    menu: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    menuIcon: {
        marginLeft: 10
    },
    CloseBtn: {
        position: 'absolute',
        top: 5,
        right: 10
    },
    FormWidth: {
        width: 300,
        minHeight: 200,
        [theme.breakpoints.up('sm')]: {
            width: 600,
        },
    },
    justifyContentForm: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    InputTitle: {
        paddingTop: 5
    },
    Btn: {
        background: Themes.MainHeaderColor,
        color: Themes.WHITE
    },
}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});