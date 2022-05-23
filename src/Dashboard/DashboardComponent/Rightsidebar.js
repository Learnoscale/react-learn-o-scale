import React from "react";
import MyBarchart from "./MyBarchart";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import OwlCarousel from 'react-owl-carousel';
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import {Options} from "./SliderOptions";
import {Tooltip, withStyles} from "@material-ui/core";
export default function Rightsidebar() {
    const classes = useStyles();
    const TopCourses = [{title: 'Html Css Series'}, {title: 'JAVA Series'}, {title: 'C# Series'}]
    return (
        <>
            <h5 className={'mt-1'}>Realtime</h5>
            <p  className={'d-flex'} style={{marginTop:'-5px'}}><div className={'mt-1 mx-1'} style={{width:10,borderRadius:'50%',height:10,background:'green'}}/>Updating Time</p>
            <hr/>
            <div className="d-flex justify-content-between pb-4 pb-lg-0">
                <HtmlTooltip placement="top-start" title={<>
                    <div className={'d-flex justify-content-between'}>
                        <h6 className={'text-success'}>Active</h6>
                        <h6 className={'px-2'}>41</h6>
                    </div>
                    <div className={'d-flex justify-content-between'}>
                        <h6 className={'text-danger'}>Inactive</h6>
                        <h6 className={'px-2'}>10</h6>
                    </div>
                </>}><h6>530201<br/>Students</h6></HtmlTooltip>
                <HtmlTooltip placement="top-start" title={<>
                    <div className={'d-flex justify-content-between'}>
                        <h6 className={'text-success'}>Active</h6>
                        <h6 className={'px-2'}>4451</h6>
                    </div>
                    <div className={'d-flex justify-content-between'}>
                        <h6 className={'text-danger'}>Inactive</h6>
                        <h6 className={'px-2'}>100</h6>
                    </div>
                </>}><h6>324321<br/>Students on App</h6></HtmlTooltip>
            </div>
            <hr/>
            <div >
                <MyBarchart/>
            </div>
            <div className="mt-2">
                <div className="d-flex justify-content-between">
                    <h6>Top Courses</h6>
                    <h6>Sold</h6>
                </div>
                {TopCourses.map((value,) => (
                    <div key={value} className='d-flex justify-content-between mt-1' style={{alignItems: 'center',}}>
                        <img
                            src={'data:image/jpeg;base64,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'}
                            alt="" className={clsx('img-fluid', classes.courseImg)}/>
                        <h6>{value.title}</h6>
                        <h6>223 </h6>
                    </div>
                ))}
            </div>

            <div>
                <h5 className='font-weight-bold pt-2'>Latest Courses</h5>
                <OwlCarousel className='owl-theme'  {...Options}>
                    {TopCourses.map((value) => (
                        <div class='item'>
                            <div className={classes.sliderBox}>
                                <img src={'data:image/jpeg;base64,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'}
                                    alt="" className={clsx('img-fluid', classes.courseImg1)}/>
                                <p style={{lineHeight: '25px', marginTop: '5px',}}>first 4 days 23 hours to your typical
                                    performance.</p>
                                <div className={clsx('d-flex justify-content-between px-2', classes.footerSlider)}
                                     style={{borderBottom: "1px solid grey"}}>
                                    <p>Sold</p>
                                    <p>297 <ArrowUpwardRoundedIcon className={classes.icons}/></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </OwlCarousel>
            </div>

        </>
    );
}
const useStyles = makeStyles((theme) => ({
    courseImg: {
        width: 50,
    },
    courseImg1: {
        width: '100% !important',
        height:'100px'
    },
    footerSlider: {
        height: 40,
        marginTop: -20
    }, icons: {
        fontSize: '15px',
        fontWeight: 'bold',
        background: '#02810e',
        borderRadius: '50%',
        color: 'white',
        marginLeft: '1px'
    },

}));
const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        cursor: 'pointer'

    },
}))(Tooltip);