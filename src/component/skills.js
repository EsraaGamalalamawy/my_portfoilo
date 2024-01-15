import {React,useState} from 'react'
import Skillscontent from './skillscontent';
const Skills = () => {
    const [num0,SetNum0]=useState(0)
    const [num1,SetNum1]=useState(0)
    const [num2,SetNum2]=useState(0)
    const [num3,SetNum3]=useState(0)
    const [num4,SetNum4]=useState(0)
    const [num5,SetNum5]=useState(0)
    const [num6,SetNum6]=useState(0)
    const [num7,SetNum7]=useState(0)
        const items=[
            {
                num:num0,
                name:"Html"
            },
            {
                num:num1,
                name:"Css"
            },
            {
                num:num2,
                name:"Bootstrap"
            },
            {
                num:num3,
                name:"Tailwind"
            },
            {
                num:num4,
                name:"JavaScript"
            },
            {
                num:num5,
                name:"React"
            },
            {
                num:num6,
                name:"Redux"
            },
            {
                num:num7,
                name:"Redux toolkit"
            }
        ]
        window.addEventListener("scroll",function(){
            var skills=document.getElementById("skills")
            if( window.scrollY >= skills.offsetTop - 200 && window.scrollY <= skills.offsetTop + 350){
                SetNum0(90)
                SetNum1(95)
                SetNum2(70)
                SetNum3(80)
                SetNum4(85)
                SetNum5(90)
                SetNum6(78)
                SetNum7(65)
            }else{
                SetNum0(0)
                SetNum1(0)
                SetNum2(0)
                SetNum3(0)
                SetNum4(0)
                SetNum5(0)
                SetNum6(0)
                SetNum7(0)
            }
        })
        return (
            <div className='skills' id='skills'>
                <h1 className="title" >Skills</h1>
                <p>My Techneical level</p>
                <div className='skillcont'>
                    {items.map((ele)=><Skillscontent num={ele.num} name={ele.name} />) }
                </div>
            </div>
        )
}

export default Skills
