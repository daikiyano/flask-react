import React from 'react';
import SkillBar from 'react-skillbars';
import Tobitate from '../images/tobitate.png'
import Two from '../images/two.png'
import Komazawa from '../images/komazawa.png'
import Airxsys from '../images/airxsys.png'



export default class About extends React.Component {

    
    render() {
        const skills = [
            {type: "HTML", level: 100},
            {type: "CSS", level: 80},
            {type: "Javascript", level: 50},
            {type: "Jquery", level: 60},
            {type: "React.js", level: 50},
            {type: "Ruby", level: 70},
            {type: "Rails", level: 70},
            {type: "Python", level: 70},
            {type: "Flask", level: 75},
            {type: "Git", level: 80},
            {type: "MySQL", level: 70},
            {type: "Sqleckemy", level: 80},
            {type: "Wordpress", level: 80},
          ];
         const colors = {
            bar: '#3498db',
            title: {
              text: 'white',
              background: '#2980b9'
            }
          }
      return (
        <div className='container' style={{backgroundColor: 'white',width: '90%',marginTop: '100px', textAlign: 'center'}}>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='row'>
                    <div className='intro_right col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h1>About Me</h1>
                            <p style={{fontSize: '20px'}}>
                                Software Engineer who loves to transform ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.
                                With over two years of experience developing web applications using the latest front-end and back-end technologies.Motivated designer and developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development. Wordpress and MySQL.
                            </p>
                            <h1>Career</h1>
                            <div>
                                <ul style={{fontSize: '20px', textAlign: 'left'}}>
                                    <b>
                                        <li>Komazawa University</li>
                                        <li>Two.Inc</li>
                                        <li>tobitate young ambassador</li>
                                        <li>Airxsys</li>
                                    </b>
                                </ul>
                            </div>
                            <div style={{textAlign: 'center',margin: '30px 0'}}>
                                <img src={Komazawa}  alt="komazawa" style={{height: '75px',wight: '75px'}} />
                                <img src={Two}  alt="two" style={{height: '75px',wight: '75px'}} />
                                <img src={Tobitate}  alt="tobitate" style={{height: '75px',wight: '75px'}} />
                                <img src={Airxsys}  alt="tobitate" style={{height: '75px',wight: '75px'}} />
                            </div>
                        </div>
                        <div className='intro_left col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                            <h1>My skills</h1>
                            <SkillBar skills={skills} colors={colors} height={25}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      );
    }
  }