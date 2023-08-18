import React, { useState, useEffect, useRef } from 'react';
import '../Css/Skill.css';

const Skill = () => {
  const [progress, setProgress] = useState({});
  const skillRef = useRef(null);
  let intervalIds = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          animateSkillProgress();
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.25
    });

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
      intervalIds.current.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []);

  const animateSkillProgress = () => {
    intervalIds.current = [];

    skills.forEach((skill, index) => {
      const { stop, id } = skill;

      const intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = { ...prevProgress };

          if (!newProgress[id]) {
            newProgress[id] = 0;
          }

          if (newProgress[id] < stop) {
            newProgress[id] += 1;
          } else {
            clearInterval(intervalId);
          }

          return newProgress;
        });
      }, 50);

      intervalIds.current.push(intervalId);
    });
  };

  const calculateStrokeDasharray = (progressValue) => {
    const circumference = 2 * Math.PI * 18;
    const progressPercentage = (progressValue / 100) * circumference;
    const remainingPercentage = circumference - progressPercentage;
    return `${progressPercentage}px ${remainingPercentage}px`;
  };

  const skills = [
    { name: 'Java', stop: 46, id: 'java' },
    { name: 'Php', stop: 40, id: 'php' },
    { name: 'React', stop: 49, id: 'react' },
    { name: 'jQuery', stop: 57, id: 'jQuery' },
    { name: 'Bootstrap5', stop: 70, id: 'Bootstrap5' },
    { name: 'HTML', stop: 80, id: 'HTML' },
    { name: 'CSS', stop: 77, id: 'CSS' },
    { name: 'mySql', stop: 44, id: 'mySql' },
    // Add more skills here with their respective stop values and IDs
  ];

  return (
    <div className='container' id='skill' ref={skillRef}>
      <div className='row'>
        <div className='col'>
          <div className='service-top'>
            <h1 className='section-title'>
              Ski<span>ll</span>s
            </h1>
          </div>
        </div>
      </div>
      <div className='row'>
        {skills.map((skill, index) => {
          const { name, id } = skill;
          const skillProgress = progress[id] || 0;
          const strokeDasharray = calculateStrokeDasharray(skillProgress);

          return (
            <div className='col-3 my-5' key={index}>
              <div id='countdown'>
                <svg viewBox='0 0 40 40'>
                  <g
                    transform='translate(20 20) rotate(-90)'
                    strokeWidth='4'
                    fill='none'
                    strokeLinecap='round'
                  >
                    <circle id='c3' r='18' />
                    <circle id='c2' r='18' strokeDasharray={strokeDasharray} />
                    <circle id='c1' r='2' cx='18' />
                  </g>
                  <text x='20' y='20'>{skillProgress}%</text>
                </svg>
                <div className='text-center'>
                  <h1>{name}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
