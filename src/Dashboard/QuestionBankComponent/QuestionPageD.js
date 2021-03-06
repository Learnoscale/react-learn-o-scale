import React, {useState,useEffect} from "react";
import {useLocation,useHistory} from "react-router-dom";
import {Button, makeStyles, Radio, RadioGroup, FormControlLabel , Dialog,Slide,DialogTitle,DialogActions,IconButton,TextField ,MenuItem, Grid} from "@material-ui/core";
import clsx from "clsx";
import {Themes} from "../../Theme/theme";
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import {crud} from "../../services/crud";
import ChipInput from 'material-ui-chip-input'
import Loader from '../../MainComponents/Loader';

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import VideoUpload from "./UploadVideo";

import { useSelector } from "react-redux";
import MathJax from "mathjax3-react";

//import { useForm } from 'react-hook-form';
export default function QuestionPageD() {  

  
    const [radiovalue, setRadiovalue] = useState();
    const [radiovaluedual, setRadiovaluedual] = useState();

    const [loader,setLoader] = useState(false)
  
    const location = useLocation();
    const navigate = useHistory();
    const [Question,setQuestion]=useState();

    const [Type,setType]=useState();
    const [Diff,setDiff]=useState();
    const [Lang,setLang]=useState();  

    const[AnswerRadio,setAnswerRadio]=useState();
    const [setQuestionData]=useState();
    const classes = styles();

    const [open, setOpen] = useState(false);
    const [setChip] = useState()

    const [textpara, setTextpara] = useState("")
    const [textpara1, setTextpara1] = useState("")
    const [textpara2, setTextpara2] = useState("")

    const [textque, settextque] = useState("")
    const [textqueDual, settextqueDual] = useState("")

    const [textsol, settextsol] = useState("")
    const [textsolDual, settextsolDual] = useState("")

   
    const user = useSelector(state => state.user)
    
    const [optionData, setoptionData] = useState([])
    const [optionDatadual, setoptionDatadual] = useState([])
    const[showeditor1,setShoweditor1]=useState(false)
    const[showeditor2,setShoweditor2]=useState(false)
    const[showeditor3,setShoweditor3]=useState(false)
    const[showeditor4,setShoweditor4]=useState(false)
    const[showeditor5,setShoweditor5]=useState(false)
    const[showeditor6,setShoweditor6]=useState(false)
    const[showeditor7,setShoweditor7]=useState(false)
    const[showeditor8,setShoweditor8]=useState(false)
    const[showeditor9,setShoweditor9]=useState(false)
    const[showeditor10,setShoweditor10]=useState(false)
    const[showeditor11,setShoweditor11]=useState(false)
    const[showeditor12,setShoweditor12]=useState(false)
    const[showeditor13,setShoweditor13]=useState(false)
    const handleEditor1 =() => {
        setShoweditor1(true);
    }
    const handleEditor2 =() => {
        setShoweditor2(true);
    }
    const handleEditor3 =() => {
        setShoweditor3(true);
    }
    const handleEditor4 =() => {
        setShoweditor4(true);
    }
    const handleEditor5 =() => {
        setShoweditor5(true);
    }
    const handleEditor6 =() => {
        setShoweditor6(true);
    }
    const handleEditor7 =() => {
        setShoweditor7(true);
    }
    const handleEditor8=() => {
        setShoweditor8(true);
    }
    const handleEditor9 =() => {
        setShoweditor9(true);
    }
    const handleEditor10 =() => {
        setShoweditor10(true);
    }
    const handleEditor11 =() => {
        setShoweditor11(true);
    }
    const handleEditor12 =() => {
        setShoweditor12(true);
    }
    const handleEditor13 =() => {
        setShoweditor13(true);
    }
    
   


    const[adQuestions,setadQuestions]=useState([]);
    
    const [options, setOptions] =  useState([
        {
        
        },
        {
        
        },
        {
         
        },
        {
         
        }
    ]);
    
    const [formData, setFormData] = useState({
        formTitle: '',
        ButtonTitle: ''
    })
    const [formData2, setFormData2] = useState({
        formTitle: '',
        ButtonTitle: ''
    })

    const [formData3, setFormData3] = useState({
        formTitle: '',
        ButtonTitle: ''
    })

    const [formData4, setFormData4] = useState({
        formTitle: '',
        ButtonTitle: ''
    })
    // post questions
    const [PostQuestions, setPostQuestions] = useState('');
    const [AddFinalQuestions, setAddFinalQuestions] = useState('');
    const[Tquestion,setTquestion]=useState([false]);
    const[TquestionDual,setTquestionDual]=useState([false]);
    const[quedisable,setQuedisable]=useState(true);
    const[detaildisable,setDetaildisable]=useState(false);
    function GetFormManage() {
        setOpen(true)
        setFormData({
            formTitle: 'Create New Question',
            ButtonTitle: 'Add Details',
        });
    }
    
    function questionList(){
        setadQuestions([...adQuestions,{value:""}]);
    }
    
    function AddFinalQuestion(){
        setOpen(true)
        setFormData2({
            formTitle: 'Create Final Question',
            ButtonTitle: 'SAVE',
        });
    }
    function AddFinalQuestion2(){
        setOpen(true)
        setFormData3({
            formTitle: 'Create Final Question2',
            ButtonTitle: 'SAVE',
        });
    }
    function AddFinalQuestion4(){
        setOpen(true)
        setFormData4({
            formTitle: 'next',
            ButtonTitle: 'NEXT',
        });
    }
    function handleChangeR (option) {
        setRadiovalue(option);
         }
    function handleChangeRdual (option) {
            setRadiovaluedual(option);
             }   
    function handleChangeQ(option)   {
        setAnswerRadio(option);
        
    }

    const addOption = () => {
        setOptions([...options, {checked: false, value: ""}]);
      
    }
    
    const removeOption = (option) => {
        setOptions(options.filter(s => s !== option));
    }
  

    async function getQuestion()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/testquestionsapi/')
            setQuestion(data1);
            setLoader(false);
            }
        
        catch(e){
        setLoader(false);
        }
    }
    async function getAll()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/questions/')
            setQuestionData(data1);
            setLoader(false);
           }
        
        catch(e){
        setLoader(false);
        }
    }
    const[Qid,setQid]=useState();
   
 
    async function getQid()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/questionsapi/')
            setQid(data1);
            setLoader(false);
           }
        catch(e){
        setLoader(false);
        }
    }

    async function getType()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/Qtype/')
            setType(data1);
            setLoader(false);
           }
        
        catch(e){
        setLoader(false);
        }
    }
    async function getDifficulty()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/DLevel/')
            setDiff(data1);
            setLoader(false);
           }
        
        catch(e){
        setLoader(false);
        }
    }
    async function getLanguage()
    {
        setLoader(true);
        try{
            const data1= await crud.retrieve('/Language/')
            setLang(data1);
            setLoader(false);
           }
        
        catch(e){
        setLoader(false);
        }
    }  
 
 
    const API_URl = crud.baseUrl

    const UPLOAD_ENDPOINT = "imagedemo/";
    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("image_text", file);
                        fetch(`${API_URl}/${UPLOAD_ENDPOINT}`, {
                            method: "post",
                            body: body
                        })
                            .then((res => res.json()))
                            .then((res) => {
                                resolve({ default: `${res.image_text}` })
                            })
                            .catch((err) => {
                                reject(err);
                            })
                    })
                })
            }
        }
    }

    function uploadPlugin(editor) {
        
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
        }
      }
    function clear(){ 
        console.log("helo")
    
        setTextpara({textpara:[{}]})
        setTextpara({textpara:[{}]})
        setTextpara1({textpara1:[{}]})
        setTextpara2({textpara2:[{}]})
        setAddFinalQuestions({addFinalQuestions:[]})
       
       
        
        
    }
  
   
    
  
    
      
 
    useEffect(() => {
        
        getQuestion();
        getAll();
        getType();
        getDifficulty();
        getLanguage();
        getQid();
        
        
        // eslint-disable-next-line
    }, [location]);
  
    


    return (
        <>
            <div className={'container-fluid px-lg-5 mt-3'}>
                <div className={'row'}>
                    <div className={'col-12 col-lg-5 py-2'}>
                        <h5>Category : <span className='back-tag' onClick={() => {navigate('/question-bank')}}>{location.state?.category}</span>&gt;
                            <span className='back-tag' onClick={() => {navigate({pathname: '/question-course',
                                state: {category:location.state?.category,course:location.state?.course}})}}>{location.state?.course}</span>&gt;
                            <span className='back-tag' onClick={() => {navigate({pathname: '/question-subject',
                                state: {category:location.state?.category,course:location.state?.course,subject:location.state?.subject}})}}>
                                  {location.state?.subject}</span>&gt; <span className='back-tag' onClick={() => {navigate({pathname: '/question-topic',
                                state: {category:location.state?.category,course:location.state?.course,subject:location.state?.subject,topic:location.state?.topic,topic1:location.state?.topic1}})}}>
                                  {location.state?.topic}</span>&gt;
                            <span className='back-tag' onClick={() => {navigate({pathname: '/question-type',
                                state: {category:location.state?.category,course:location.state?.course,subject:location.state?.subject,topic:location.state?.topic,topic1:location.state?.topic1}})}}>
                                  {location.state?.question_type}</span>
                        </h5>
                    </div>
                    <div className={'col-lg-7 col-12 d-lg-flex justify-content-lg-end'}>
                        <label htmlFor="contained-button-file">
                            <Button
                            onClick={() => {
                                GetFormManage();
                                AddFinalQuestion();
                                AddFinalQuestion2();
                                AddFinalQuestion4();
                            }}
                            variant={'contained'}  startIcon={<AddIcon/>} className={clsx(classes.Button)}>
                                Create Question
                            </Button>
                        </label>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button startIcon={<AddIcon/>}  variant="contained" color="primary" component="span" className={clsx('mx-md-3 my-3 my-lg-0', classes.Button)}>
                                Import Question
                            </Button>
                        </label>

                        <label htmlFor="contained-button-file">
                            <Button variant={'contained'} startIcon={<AddIcon/>} className={clsx(classes.Button)}>Export
                                Question</Button>
                        </label>
                     
                    </div>
                    <hr className={'my-3'}/>
                 
                    {Question?.length?<>
                    {Question.map((question,index)=>(
                        <>
                        
                            <div key={index} className={'col-12'}>
                            
                                {index+1}. {
                                <MathJax.Provider >
                                <MathJax.Html html={question?.question_text}/>
                                </MathJax.Provider>    
                                
                                }
                                {question?.choices.map((option,index)=>(
                                 <RadioGroup key={index} aria-label="gender" name="gender1" 
                                 value=
                                 {
                                    <MathJax.Provider>
                                    <MathJax.Html html={question?.choices.answer_text}/>
                                    </MathJax.Provider> 
                                     
                                }  
                                 onClick={() => {handleChangeQ(option)}}
                                > 
                                <FormControlLabel value={
                                    <MathJax.Provider>
                                    <MathJax.Html html={option.answer_text}/>
                                    </MathJax.Provider> 
                                    
                                    } checked={AnswerRadio===option} control={<Radio/>} 
                                    label={
                                        <MathJax.Provider>
                                        <MathJax.Html html={option.answer_text}/>
                                        </MathJax.Provider> 
                                        
                                        }/>
                                </RadioGroup>
                                 ))}
                                <div className={'my-2'}>
                                    <Button onClick={() => {setOpen(true);}} size={'small'} color={'primary'}><CreateIcon/> Edit</Button>
                                    <Button size={'small'} className={'mx-3'} color={'secondary'} onClick={()=>{crud.confirm();}}><DeleteIcon/> Delete</Button>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))}
                    </>:<><h2 className='text-center pt-5'>no question...</h2></>}

                </div>
            </div> 

            <Dialog  disableEnforceFocus={true} maxWidth={'lg'}
             
            open={open}
            TransitionComponent={Transition}>
           
                <div className={'container-fluid'}>
                <div className={'row'}>
                <div className={'col-12 pl-0 pr-3'}>
                            
                            
                            <div style={{position:'fixed',zIndex:1}} >
                                <DialogTitle>{location.state?.question_type} </DialogTitle>
                                <Button  variant={'contained'} className={clsx(classes.Button)}>Previous</Button>
                            {PostQuestions.QLanguage===1 || PostQuestions.QLanguage===2?<>
                                <Button className={clsx(classes.Button,"mx-2")} variant={'contained'} onClick={async() => {
                                if(formData2.ButtonTitle==='SAVE'){ 
                                        
                                        await crud.create('/testquestionsapi/',
                                        
                                        {
                                            qid:Qid[(Qid.length)-1].qu_id,
                                            question_para:textpara,
                                            question_text:textque,
                                            ques_lang:PostQuestions.QLanguage,
                                            description:AddFinalQuestions.QDes,
                                            solution:textsol,
                                            is_active:'true',
                                            choices: 

                                        
                                        options.map((option,index) =>    
                                        {
                                        return(  
                                            {
                                                language:PostQuestions.QLanguage,
                                                answer_text:optionData[index],
                                                is_right:Tquestion[index]
                                                
                                            }
                                        )
                                        }
                                     )
                                    }
                                    );
                                  
                                    }
                                    setOpen(false);
                                    }
                                    
                                    } color="primary">
                                    {formData2.ButtonTitle}
                                   
                                </Button>
                            </>:<></>}    
                            {PostQuestions.QLanguage===3?<>
                                <Button className={clsx(classes.Button,"mx-2")} variant={'contained'} onClick={async() => {
                                 if(formData3.ButtonTitle==='SAVE'){ 
                                    
                                    await crud.create('/testquestionsapi/',
                                    {
                                        qid:Qid[(Qid.length)-1].qu_id,
                                        question_para:textpara,
                                        question_text:textque,
                                        ques_lang:PostQuestions.QLanguage,
                                        description:AddFinalQuestions.QDes,
                                        solution:textsol,
                                        is_active:'true',
                                        choices: 
                                    options.map((option,index) =>    
                                    {
                                    return(  
                                        {
                                            language:1,
                                            answer_text:optionData[index],
                                            is_right:Tquestion[index]
                                        }
                                    )
                                    
                                    }
                                    
                                    )
                                    
                                    }
                                    
                                    );
                                    
                                    console.log("qid",Qid[(Qid.length)-1].qu_id)  
                                    await crud.create('/testquestionsapi/',
                                    {
                                        qid:Qid[(Qid.length)-1].qu_id,
                                        question_para:textpara2,
                                        question_text:textqueDual,
                                        ques_lang:2,
                                        description:AddFinalQuestions.QDes,
                                        solution:textsolDual,
                                        is_active:'true',
                                        choices: 
                                    options.map((option,index) =>    
                                    {
                                    return(  
                                        {
                                            language:2,
                                            answer_text:optionDatadual[index],
                                            is_right:TquestionDual[index]
                                        }
                                    )
                                    }
                                    )
                                    
                                    }
                                    );
                                   
                                }
                                setOpen(false);
                                }} 
                                color="primary">
                                {formData3.ButtonTitle}
                                </Button>
                            </>:<></>} 

                             {PostQuestions.QLanguage===1 || PostQuestions.QLanguage===2?<>
                                <Button className={clsx(classes.Button,"mx-2")} variant={'contained'} onClick={async() => {
                           
                                if(formData4.ButtonTitle==='NEXT'){ 
                                      
                                    await crud.create('/testquestionsapi/',
                                        
                                        {
                                            qid:Qid[(Qid.length)-1].qu_id,
                                            question_para:textpara,
                                            question_text:textque,
                                            ques_lang:PostQuestions.QLanguage,
                                            description:AddFinalQuestions.QDes,
                                            solution:textsol,
                                            is_active:'true',
                                            choices: 

                                        
                                        options.map((option,index) =>    
                                        {
                                        return(  
                                            {
                                                language:PostQuestions.QLanguage,
                                                answer_text:optionData[index],
                                                is_right:Tquestion[index]
                                                
                                            }
                                        )
                                        }
                                     )
                                    }
                                    
                                    );
                                    
                                    }
                               // clear();
                            
                                }
        
                                   
                                    
                                } color="primary">
                               
                                {formData4.ButtonTitle}
                                    
                                </Button>
                            </>:<></>}    
                            {PostQuestions.QLanguage===3?<>
                                <Button className={clsx(classes.Button,"mx-2")} variant={'contained'} onClick={async() => {
                                 
                                 if(formData4.ButtonTitle==='NEXT'){ 
                                    
                                    
                                    await crud.create('/testquestionsapi/',
                                    {
                                        //qid:Qid[(Qid.length)-1].qu_id,
                                        question_para:textpara1,
                                        question_text:textque,
                                        ques_lang:1,
                                        description:AddFinalQuestions.QDes,
                                        solution:textsol,
                                        is_active:'true',
                                        choices: 
                                    options.map((option,index) =>    
                                    {
                                    return(  
                                        {
                                            language:1,
                                            answer_text:optionData[index],
                                            is_right:Tquestion[index]
                                        }
                                    )
                                    
                                    }
                                    
                                    )
                                    
                                    }
                                    
                                    );
                                    
                                    console.log("qid",Qid[(Qid.length)-1].qu_id)  
                                    await crud.create('/testquestionsapi/',
                                    {
                                        //qid:Qid[(Qid.length)-1].qu_id,
                                        question_para:textpara2,
                                        question_text:textqueDual,
                                        ques_lang:2,
                                        description:AddFinalQuestions.QDes,
                                        solution:textsolDual,
                                        is_active:'true',
                                        choices: 
                                    options.map((option,index) =>    
                                    {
                                    return(  
                                        {
                                            language:2,
                                            answer_text:optionDatadual[index],
                                            is_right:TquestionDual[index]
                                        }
                                    )
                                    }
                                    )
                                    
                                    }
                                    );
                                   
                                }
                                clear();
                                }} 
                                color="primary">
                                {formData4.ButtonTitle}
                                </Button>
                            </>:<></>}   
                              
                            </div>
                            <IconButton onClick={() => {setOpen(false);}}  className={classes.menu}><ClearIcon/></IconButton>
                            <hr/>
                </div><br></br><br></br><br></br><br></br><br></br>
                <div className={'col-12 mt-3'}>
                <div className="border p-4" onClick={handleEditor1} >
                <label className={'pb-2'}>Select Paragraph</label>
                <div style={{ display:(showeditor1===true)?'block':'none'}} > 
                
                {PostQuestions.QLanguage===1?<>       
                <CKEditor editor={Editor} datapara={textpara} 
                                           
                                            onChange={(event, editor) => { const datapara = editor.getData()
                                            setTextpara(datapara)
                                            }}
                                           
                                            value={textpara}
                                            config={{
                                                extraPlugins: [uploadPlugin],
                                                placeholder:"type paragraph in hindi"
                                            }}
                                           
                />
                </>:<></>}
                {PostQuestions.QLanguage===2?<>       
                <CKEditor editor={Editor} datapara={textpara} 
                                            onChange={(event, editor) => { const datapara = editor.getData()
                                            setTextpara(datapara)
                                            }}
                                            value={textpara}
                                            config={{
                                                extraPlugins: [uploadPlugin],
                                                placeholder:"type paragraph in english"
                                            }}
                                           
                />
                </>:<></>}
                {PostQuestions.QLanguage===3?<>       
                <CKEditor editor={Editor} datapara={textpara1} 
                                            onChange={(event, editor) => { const datapara1 = editor.getData()
                                            setTextpara1(datapara1)
                                            }}
                                            value={textpara1}
                                            config={{
                                                extraPlugins: [uploadPlugin],
                                                placeholder:"type paragraph in hindi"
                                            }}
                                           
                />
                <CKEditor editor={Editor} datapara={textpara2} 
                                            onChange={(event, editor) => { const datapara2 = editor.getData()
                                            setTextpara2(datapara2)
                                            }}
                                            value={textpara2}
                                            config={{
                                                extraPlugins: [uploadPlugin],
                                                placeholder:"type paragraph in english"
                                            }}
                                           
                />
                </>:<></>}
                </div>
                </div> 
                        <div className={'col-lg-8 offset-lg-4 col-12  px-lg-3 d-lg-flex justify-content-lg-end'}>
                            <div className={'mx-lg-2 px-lg-2'}>
                            <label className={'pb-2'}>Select Level</label>
                            {Diff?.length?<>
                            <TextField  size={"small"} value={PostQuestions.QDifficulty} variant={'outlined'}
                            onChange={(e) => {setPostQuestions({...PostQuestions,QDifficulty:e.target.value})}} 
                            name='QDifficulty'fullWidth  select>
                                {Diff.map((diff,index)=>(
                                <MenuItem value={diff.dl_id}>{diff.dl_title}</MenuItem>
                                ))}
                            </TextField>  
                            </>:<></>}   
                            </div>
                            <div className={'mx-lg-2 px-lg-2'}>
                            <label className={'pb-2'}>Select Language</label>
                            {Lang?.length?<>
                            <TextField size={"small"} value={PostQuestions.QLanguage} variant={'outlined'}
                             onChange={(e) => {setPostQuestions({...PostQuestions,QLanguage:e.target.value})}}  
                             name='QLanguage'  fullWidth  select>
                            {Lang.map((lang,index)=>(   
                                <MenuItem value={lang.lg_id}>{lang.lg_title}</MenuItem>
                            ))}
                            </TextField>
                            </>:<></>}  
                            </div>
                        </div>    
                       
                        <div className={'col-12 d-flex justify-content-between'}>
                            <div className={'mx-lg-2 px-lg-2'}>  
                            <label className={'pb-2'}>Question Type</label>
                            {Type?.length?<>
                            <TextField  size={"small"} value={PostQuestions.QType} variant={'outlined'} 
                             onChange={(e) => {setPostQuestions({...PostQuestions,QType:e.target.value})}} 
                             name="QType" fullWidth  select>
                             {Type.map((type,index)=>(     
                               <MenuItem value={type.qt_id}>{type.qt_title}</MenuItem>
                            ))}
                            </TextField>
                            </>:<></>}   
                            </div>
                        </div>   

                        <Grid container className="mt-3">
                            <Grid item xs={12}>
                            <DialogActions>
                            <Button className={clsx(classes.Btn,)} startIcon={<AddIcon />} disabled={detaildisable} variant={'contained'} onClick={async() => {
                                    if(formData.ButtonTitle==='Add Details'){
                                        await crud.create('/questionsapi/',{
                                            qtype:PostQuestions.QType,
                                            difficulty:PostQuestions.QDifficulty,
                                            language:PostQuestions.QLanguage,
                                            user:user.user.id,
                                            topic:location.state?.topic1
                                        });
                                    console.log("under",)
                                    setQuedisable(false);
                                    setDetaildisable(true);
                                    }
                                    
                                    }} color="primary">
                                    {formData.ButtonTitle}
                                    

                            </Button>
                            <Button className={clsx(classes.Btn,)} startIcon={<AddIcon />} disabled={quedisable} variant={'contained'}
                            onClick={async() => { questionList() }}  color="primary" >
                              ADD Questions
                            </Button>
                            </DialogActions>
                            </Grid>
                        </Grid> 
                       
                        <div>
                        {
                        adQuestions.map((option, index) => <>
                        { 
                        <Grid container spacing={2} justifyContent={"space-between"}>
                            <div className={'col-12 mt-3'}>Question.{index+1}</div>
                            <div className={'col-12 mt-3'}>
                                  {PostQuestions.QLanguage===3?<>
                                  <div className="border p-4" onClick={handleEditor2} >
                                  <div style={{ display:(showeditor2===true)?'block':'none'}} > 
                                  <CKEditor editor={Editor} data1={textqueDual} 
                                                  onChange={(event, editor) => { const data1 = editor.getData()
                                                  settextqueDual(data1)
                                                  }}
                                                  config={{
                                                    extraPlugins: [uploadPlugin],
                                                    placeholder:"type question in hindi"
                                                  }}
                                                  />
                                    </div>
                                    </div>   
                                    <div className="border p-4" onClick={handleEditor3} >
                                    <div style={{ display:(showeditor3===true)?'block':'none'}} >            
                                    <CKEditor editor={Editor}  data2={textque} 
                                                  onChange={(event, editor) => { const data2 = editor.getData()
                                                    settextque(data2)
                                                  }}
                                                  config={{
                                                    extraPlugins: [uploadPlugin],
                                                    placeholder:"type question in english"
                                                  }}
                                                  />
                                    </div>
                                    </div>              
                                  </>:<></>}
                                  {PostQuestions.QLanguage===2?<>
                                  <div className="border p-4" onClick={handleEditor4} >
                                  <div style={{ display:(showeditor4===true)?'block':'none'}} >
                                  <CKEditor editor={Editor} data3={textque} 
                                                  onChange={(event, editor) => { const data3 = editor.getData()
                                                    settextque(data3)
                                                  }}
                                                  config={{
                                                    extraPlugins: [uploadPlugin],
                                                    placeholder:"type question in english"
                                                  }}
                                                  />
                                   </div>
                                   </div>               
                                      
                                  </>:<></>}
                                  {PostQuestions.QLanguage===1?<>
                                  <div className="border p-4" onClick={handleEditor5} >
                                  <div style={{ display:(showeditor5===true)?'block':'none'}}>
                                  <CKEditor editor={Editor} data4={textque} 
                                                  onChange={(event, editor) => { const data4 = editor.getData()
                                                    settextque(data4)
                                                  }}
                                                config={{
                                                    extraPlugins: [uploadPlugin],
                                                    placeholder:"type question in hindi"
                                                }}  
                                                />
                                   </div>
                                   </div>             
                                  </>:<></>}
                              </div>
                              {
                                options.map((option, index) => <>
                                    {
                                        PostQuestions.QLanguage === 3 ? <>
                                            <Grid item xs={1}>
                                                <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                                                    <Grid item>
                                                        <span className="bars">=</span>
                                                    </Grid>
                                                    <Grid item>
                                                    <RadioGroup key={index} id={index} onClick={() => {handleChangeRdual(option,index)}} name="is_right">      
                                                                     <FormControlLabel 
                                                                      name="is_right" control={<Radio 
                                                                      value={radiovaluedual}
                                                                      checked={radiovaluedual===option} 
                                                                      onChange={(event) => { 
                                                                        let Rvaluedual = [false,false,false,false,false,false,false,false,false,false,false,false,false]
                                                                        event.target.checked?Rvaluedual[index]=true:Rvaluedual[index]=false
                                                                        setTquestionDual(Rvaluedual);
                                                                        
                                                                    }}
                                                                    
                                                                    
                                                                    color={"primary"}/>} />
                                                    </RadioGroup>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={10}>
                                            <div className="border p-4" onClick={handleEditor6} >
                                            <div style={{ display:(showeditor6===true)?'block':'none'}}>    
                                            <CKEditor editor={Editor} data5={optionDatadual[index]}
                                           onChange={(event, editor) => { const data5 = editor.getData()
                                            let optionsValuedual = [...optionDatadual]
                                            optionsValuedual[index] = data5
                                            setoptionDatadual(optionsValuedual);
                                        }}
                                        config={{
                                            extraPlugins: [uploadPlugin],
                                            placeholder:"type option("+(index+1)+")in hindi"
                                        }}
                                        />
                                        </div>
                                        </div>
                                        </Grid>

                                            <Grid item xs={1}>
                                                <Grid container justifyContent={"flex-end"}>
                                                    <Grid item xs={12}>
                                                        <Button
                                                            startIcon={<DeleteIcon />}
                                                            onClick={() => {removeOption(option)}}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                                <Grid item xs={1}>
                                                    <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                                                        <Grid item>
                                                            <span className="bars">=</span>
                                                        </Grid>
                                                        <Grid item>
                                                        <RadioGroup key={index} id={index} onClick={() => {handleChangeR(option,index)}} name="is_right">      
                                                                     <FormControlLabel 
                                                                     
                                                                     
                                                                      name="is_right" control={<Radio 
                                                                      value={radiovalue}
                                                                      checked={radiovalue===option} 
                                                                        onChange={(event) => { 
                                                                        let RValue = [false,false,false,false,false,false,false,false,false,false,false,false,false]
                                                                        event.target.checked?RValue[index]=true:RValue[index]=false
                                                                        setTquestion(RValue);
                                                                        console.log("rvalue=",RValue)
                                                                    }}
                                                                    
                                                                    
                                                                    color={"primary"}/>} />
                                                        </RadioGroup>  
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                                <Grid item xs={10}>
                                                <div className="border p-4" onClick={handleEditor7} >
                                                <div style={{ display:(showeditor7===true)?'block':'none'}}>        
                                                <CKEditor editor={Editor} data6={optionData[index]} 
                                            onChange={(event, editor) => { const data6 = editor.getData()
                                                let optionsValue = [...optionData]
                                                optionsValue[index] = data6
                                                setoptionData(optionsValue);
                                            }}
                                            config={{
                                                extraPlugins: [uploadPlugin],
                                                placeholder:"type option(" +(index+1)+ ")in english"
                                            }}
                                            />
                                            </div>
                                            </div>
                                            </Grid>

                                                <Grid item xs={1}>
                                                    <Grid container justifyContent={"flex-end"}>
                                                        <Grid item xs={12}>
                                                            <Button
                                                                startIcon={<DeleteIcon />}
                                                                onClick={() => {removeOption(option)}}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                        </> :
                                             PostQuestions.QLanguage === 1 ? <>
                                                     <>
                                                         <Grid item xs={1}>
                                                             <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                                                                 <Grid item>
                                                                     <span className="bars">=</span>
                                                                 </Grid>
                                                                 <Grid item>
                                                                     
                                                                 <RadioGroup key={index} id={index} onClick={() => {handleChangeR(option,index)}} name="is_right">      
                                                                     <FormControlLabel 
                                                                     
                                                                     
                                                                      name="is_right" control={<Radio 
                                                                      value={radiovalue}
                                                                      checked={radiovalue===option} 
                                                                        onChange={(event) => { 
                                                                        let RValue = [false,false,false,false,false,false,false,false,false,false,false,false,false]
                                                                        event.target.checked?RValue[index]=true:RValue[index]=false
                                                                        setTquestion(RValue);
                                                                        console.log("rvalue=",RValue)
                                                                    }}
                                                                    
                                                                    
                                                                    color={"primary"}/>} />
                                                                 </RadioGroup>
                                                                 </Grid>
                                                             </Grid>
                                                         </Grid>

                                                         <Grid item xs={10}>
                                            <div className="border p-4" onClick={handleEditor8} >
                                            <div style={{ display:(showeditor8===true)?'block':'none'}}>                     
                                            <CKEditor  key={index} id={index} editor={Editor} data7={optionData[index]}
                                           onChange={(event, editor) => { const data7 = editor.getData()
                                            let optionsValue = [...optionData]
                                            optionsValue[index] = data7
                                            setoptionData(optionsValue);
                                        }}
                                           
                                        config={{
                                            extraPlugins: [uploadPlugin],
                                            placeholder:"type option("+ (index+1) +")in hindi"
                                        }}
                                        />
                                        </div>
                                        </div>
                                            </Grid>

                                                         <Grid item xs={1}>
                                                             <Grid container justifyContent={"flex-end"}>
                                                                 <Grid item xs={12}>
                                                                     <Button
                                                                         startIcon={<DeleteIcon />}
                                                                         onClick={() => {removeOption(option)}}
                                                                     >
                                                                         Delete
                                                                     </Button>
                                                                 </Grid>
                                                             </Grid>
                                                         </Grid>
                                                     </>
                                                 </> :
                                            <>
                                                <Grid item xs={1}>
                                                    <Grid container justifyContent={"flex-end"} alignItems={"center"}>
                                                        <Grid item>
                                                            <span className="bars">=</span>
                                                        </Grid>
                                                        <Grid item>
                                                        <RadioGroup key={index}  name="radio-buttons-group"   onClick={() => {handleChangeR(option)}}>  
                                                            <FormControlLabel key={index} control={<Radio  color={"primary"}/>}  checked={radiovalue===option}/>
                                                        </RadioGroup>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>

                                        <Grid item xs={10}>
                                            <div className="border p-4" onClick={handleEditor9} >
                                            <div style={{ display:(showeditor9===true)?'block':'none'}}>    
                                            <CKEditor editor={Editor} data8={optionData[index]}
                                            onChange={(event, editor) => { const data8 = editor.getData()
                                            let optionsValue = [...optionData]
                                            optionsValue[index] = data8
                                            setoptionData(optionsValue);
                                        }}
                                        config={{
                                            extraPlugins: [uploadPlugin],
                                            placeholder:"type option("+ (index+1) +")in english"
                                        }}
                                        />
                                        </div>
                                        </div>
                                        </Grid>

                                                <Grid item xs={1}>
                                                    <Grid container justifyContent={"flex-end"}>
                                                        <Grid item xs={12}>
                                                            <Button
                                                                startIcon={<DeleteIcon />}
                                                                onClick={() => {removeOption(option)}}
                                                            >
                                                                Delete
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </>
                                    }
                                </>)
                            }

                        <Grid container className="mt-3">
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant={"outlined"}
                                    color={"primary"}
                                    onClick={() => addOption()}
                                    startIcon={<AddIcon />}
                                >
                                    Add new option
                                </Button>
                            </Grid>
                        </Grid>  
                        <div className={'col-12 mt-3'}>
                        <h4 className={'pt-3'}>Solution</h4>
                              {PostQuestions.QLanguage===3?<>
                              <div className="border p-4" onClick={handleEditor10} >
                              <div style={{ display:(showeditor10===true)?'block':'none'}}>    
                              <CKEditor editor={Editor} data9={textsolDual} 
                              onChange={(event, editor) => { const data9 = editor.getData()
                              settextsolDual(data9)}}
                              config={{
                                extraPlugins: [uploadPlugin],
                                placeholder:"type solution in hindi"
                              }}
                              />
                            </div>
                            </div>
                           < VideoUpload /> 
                           <div className="border p-4" onClick={handleEditor11} >
                           <div style={{ display:(showeditor11===true)?'block':'none'}}>    
                           <CKEditor editor={Editor} data10={textsol} 
                           onChange={(event, editor) => { const data10 = editor.getData()
                           settextsol(data10) }}
                           config={{
                            extraPlugins: [uploadPlugin],
                            placeholder:"type solution in english"
                           }}
                          />
                          </div>
                          </div>
                          < VideoUpload /> 
                        </>:<></>}
                        {PostQuestions.QLanguage===2?<>
                        <div className="border p-4" onClick={handleEditor12} >
                        <div style={{ display:(showeditor12===true)?'block':'none'}}>    
                       <CKEditor editor={Editor} data11={textsol} 
                        onChange={(event, editor) => { const data11 = editor.getData()
                        settextsol(data11)
                        }}
                        config={{
                            extraPlugins: [uploadPlugin],
                            placeholder:"type solution in english"
                        }}
                        />
                        </div>
                        </div>
                        < VideoUpload />  
                        </>:<></>}
                        {PostQuestions.QLanguage===1?<>
                        <div className="border p-4" onClick={handleEditor13} >
                        <div style={{ display:(showeditor13===true)?'block':'none'}}>    
                        <CKEditor editor={Editor} data12={textsol} 
                        onChange={(event, editor) => { const data12 = editor.getData()
                        settextsol(data12)
                        }}
                        config={{
                            extraPlugins: [uploadPlugin],
                            placeholder:"type solution in hindi"
                        }}
                        />
                        </div>
                        </div>
                        < VideoUpload /> 
            </>:<></>}
                        </div>

                        <div className={'col-5 mt-3'}>
                            <label className={'pb-2'}>Reference</label>
                            <div>
                            <TextField type="text" value={AddFinalQuestions.QDes} variant={'outlined'}
                            onChange={(e) => {setAddFinalQuestions({...AddFinalQuestions,QDes:e.target.value})}} 
                            name='QDes'/>
                            </div>
                        </div>
                        <div className={'col-5 mt-3'}>
                            <label className={'pb-2'}>Tags</label>
                            <div>
                                <ChipInput value={["math","Physics"]}
                                    fullWidth
                                    variant={'outlined'}
                                    size={'small'}
                                    placeholder={'referance subject'}
                                    onAdd={(chip) => setChip(chip)}
                                    onDelete={(chip, index) => setChip(chip, index)}
                                />
                            </div>
                        </div>
                        <DialogActions>

                          
                        </DialogActions>   
                        </Grid>
                        
                        
                        }
                        </>)
                        } 
                        </div>

                </div> 
               
              
                </div>
                </div>
            
            </Dialog>    
            {loader?<Loader/>:<></>}
</>
)            
}


const styles = makeStyles((theme) => ({
    Button: {
        background: Themes.MainHeaderColor,
        color: Themes.WHITE
    },
    menu:{
        position:'absolute',
        top:7,
        right:0,
        [theme.breakpoints.up('sm')]: {
            right:20,
            top:10},
    },
    input:{
        display:"none"
        
    }

}))
const Transition = React.forwardRef(function Transition(props,ref,key) {
    return <Slide direction="down" ref={ref}  {...props} />;
});

