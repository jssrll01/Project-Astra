import React from 'react';
import './SimplePage.css';

function Bookmarks() {
  const groups = [
    {
      title: 'Programming & Computer Science',
      items: [
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org' },
        { name: 'W3Schools', url: 'https://w3schools.com' },
        { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org' },
        { name: 'Programiz', url: 'https://programiz.com' },
        { name: 'Codecademy', url: 'https://codecademy.com' },
        { name: 'The Odin Project', url: 'https://theodinproject.com' },
        { name: 'Exercism', url: 'https://exercism.org' },
        { name: 'HackerRank', url: 'https://hackerrank.com' },
        { name: 'LeetCode', url: 'https://leetcode.com' },
        { name: 'Codewars', url: 'https://codewars.com' },
      ],
    },
    {
      title: 'Web Development',
      items: [
        { name: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
        { name: 'web.dev', url: 'https://web.dev' },
        { name: 'CSS-Tricks', url: 'https://css-tricks.com' },
        { name: 'Frontend Mentor', url: 'https://frontendmentor.io' },
        { name: 'React', url: 'https://react.dev' },
        { name: 'Vue.js', url: 'https://vuejs.org' },
        { name: 'Angular', url: 'https://angular.dev' },
        { name: 'Next.js', url: 'https://nextjs.org' },
        { name: 'Node.js', url: 'https://nodejs.org' },
        { name: 'JavaScript.info', url: 'https://javascript.info' },
      ],
    },
    {
      title: 'Cybersecurity',
      items: [
        { name: 'TryHackMe', url: 'https://tryhackme.com' },
        { name: 'Hack The Box Academy', url: 'https://academy.hackthebox.com' },
        { name: 'PortSwigger', url: 'https://portswigger.net' },
        { name: 'OverTheWire', url: 'https://overthewire.org' },
        { name: 'OWASP', url: 'https://owasp.org' },
        { name: 'CyberDefenders', url: 'https://cyberdefenders.org' },
        { name: 'picoCTF', url: 'https://picoctf.org' },
        { name: 'SANS', url: 'https://sans.org' },
        { name: 'MITRE ATT&CK', url: 'https://attack.mitre.org' },
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { name: 'Microsoft Learn', url: 'https://learn.microsoft.com' },
        { name: 'Oracle Education', url: 'https://education.oracle.com' },
        { name: 'Docker Docs', url: 'https://docs.docker.com' },
        { name: 'Kubernetes', url: 'https://kubernetes.io' },
        { name: 'HashiCorp Developer', url: 'https://developer.hashicorp.com' },
        { name: 'Linux Foundation Training', url: 'https://training.linuxfoundation.org' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      items: [
        { name: 'Kaggle', url: 'https://kaggle.com' },
        { name: 'Google Developers', url: 'https://developers.google.com' },
        { name: 'DeepLearning.AI', url: 'https://deeplearning.ai' },
        { name: 'Hugging Face', url: 'https://huggingface.co' },
        { name: 'fast.ai', url: 'https://course.fast.ai' },
        { name: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu' },
        { name: 'Stanford Online', url: 'https://online.stanford.edu' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'SQLBolt', url: 'https://sqlbolt.com' },
        { name: 'SQLZoo', url: 'https://sqlzoo.net' },
        { name: 'PostgreSQL', url: 'https://postgresql.org' },
        { name: 'MongoDB Learn', url: 'https://learn.mongodb.com' },
        { name: 'MySQL Developer', url: 'https://dev.mysql.com' },
      ],
    },
    {
      title: 'Networking & Systems',
      items: [
        { name: 'Cisco NetAcad', url: 'https://netacad.com' },
        { name: 'Cloudflare', url: 'https://cloudflare.com' },
        { name: 'Linux Journey', url: 'https://linuxjourney.com' },
        { name: 'Linux Command Library', url: 'https://linuxcommandlibrary.com' },
        { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org' },
      ],
    },
    {
      title: 'Full IT Courses',
      items: [
        { name: 'Coursera', url: 'https://coursera.org' },
        { name: 'edX', url: 'https://edx.org' },
        { name: 'Udemy', url: 'https://udemy.com' },
        { name: 'FutureLearn', url: 'https://futurelearn.com' },
        { name: 'Alison', url: 'https://alison.com' },
        { name: 'OpenLearn', url: 'https://open.edu' },
        { name: 'Class Central', url: 'https://classcentral.com' },
      ],
    },
    {
      title: 'Computer Science Foundations',
      items: [
        { name: 'CS50', url: 'https://cs50.harvard.edu' },
        { name: 'CS50x', url: 'https://cs50.harvard.edu/x' },
        { name: 'Teach Yourself CS', url: 'https://teachyourselfcs.com' },
        { name: 'roadmap.sh', url: 'https://roadmap.sh' },
        { name: 'OSSU CS', url: 'https://github.com/ossu/computer-science' },
        { name: 'Stanford Online', url: 'https://online.stanford.edu' },
      ],
    },
    {
      title: 'Free Certificates',
      items: [
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org' },
        { name: 'SoloLearn', url: 'https://sololearn.com' },
        { name: 'Simplilearn', url: 'https://simplilearn.com' },
        { name: 'Great Learning', url: 'https://greatlearning.in' },
        { name: 'Alison', url: 'https://alison.com' },
        { name: 'Saylor Academy', url: 'https://saylor.org' },
        { name: 'IBM SkillsBuild', url: 'https://skillsbuild.org' },
        { name: 'Cisco Skills for All', url: 'https://skillsforall.com' },
        { name: 'Cisco NetAcad', url: 'https://netacad.com' },
        { name: 'Microsoft Learn', url: 'https://learn.microsoft.com' },
        { name: 'Kaggle', url: 'https://kaggle.com' },
      ],
    },
    {
      title: 'Professional IT Certificates',
      items: [
        { name: 'Coursera', url: 'https://coursera.org' },
        { name: 'edX', url: 'https://edx.org' },
        { name: 'Udemy', url: 'https://udemy.com' },
        { name: 'LinkedIn Learning', url: 'https://linkedin.com/learning' },
        { name: 'Pluralsight', url: 'https://pluralsight.com' },
        { name: 'DataCamp', url: 'https://datacamp.com' },
        { name: 'Codecademy', url: 'https://codecademy.com' },
        { name: 'TryHackMe', url: 'https://tryhackme.com' },
        { name: 'Hack The Box Academy', url: 'https://academy.hackthebox.com' },
        { name: 'AWS Certification', url: 'https://aws.amazon.com/certification' },
        { name: 'Microsoft Credentials', url: 'https://learn.microsoft.com/credentials' },
        { name: 'Google Cloud Certification', url: 'https://cloud.google.com/learn/certification' },
        { name: 'Oracle Education', url: 'https://education.oracle.com' },
        { name: 'CompTIA Certifications', url: 'https://comptia.org/certifications' },
        { name: 'Cisco Certifications', url: 'https://cisco.com/site/us/en/learn/training-certifications/certifications' },
      ],
    },
    {
      title: 'Programming & Web Development Certificates',
      items: [
        { name: 'freeCodeCamp', url: 'https://freecodecamp.org' },
        { name: 'Codecademy', url: 'https://codecademy.com' },
        { name: 'SoloLearn', url: 'https://sololearn.com' },
        { name: 'W3Schools', url: 'https://w3schools.com' },
        { name: 'The Odin Project', url: 'https://theodinproject.com' },
        { name: 'Scrimba', url: 'https://scrimba.com' },
        { name: 'Frontend Mentor', url: 'https://frontendmentor.io' },
        { name: 'Coursera', url: 'https://coursera.org' },
        { name: 'Udemy', url: 'https://udemy.com' },
      ],
    },
    {
      title: 'Cybersecurity Certificates',
      items: [
        { name: 'TryHackMe', url: 'https://tryhackme.com' },
        { name: 'Hack The Box Academy', url: 'https://academy.hackthebox.com' },
        { name: 'Cisco Skills for All', url: 'https://skillsforall.com' },
        { name: 'Cisco NetAcad', url: 'https://netacad.com' },
        { name: 'Coursera', url: 'https://coursera.org' },
        { name: 'edX', url: 'https://edx.org' },
        { name: 'CompTIA Certifications', url: 'https://comptia.org/certifications' },
        { name: 'SANS', url: 'https://sans.org' },
        { name: 'ISC2 Certifications', url: 'https://isc2.org/certifications' },
      ],
    },
    {
      title: 'Cloud Certificates',
      items: [
        { name: 'AWS Certification', url: 'https://aws.amazon.com/certification' },
        { name: 'Microsoft Credentials', url: 'https://learn.microsoft.com/credentials' },
        { name: 'Google Cloud Certification', url: 'https://cloud.google.com/learn/certification' },
        { name: 'Oracle Education', url: 'https://education.oracle.com' },
        { name: 'Linux Foundation Training', url: 'https://training.linuxfoundation.org' },
      ],
    },
    {
      title: 'AI / Data Science Certificates',
      items: [
        { name: 'Coursera', url: 'https://coursera.org' },
        { name: 'edX', url: 'https://edx.org' },
        { name: 'Kaggle', url: 'https://kaggle.com' },
        { name: 'DataCamp', url: 'https://datacamp.com' },
        { name: 'DeepLearning.AI', url: 'https://deeplearning.ai' },
        { name: 'Udacity', url: 'https://udacity.com' },
        { name: 'IBM Training', url: 'https://ibm.com/training' },
        { name: 'IBM SkillsBuild', url: 'https://skillsbuild.org' },
      ],
    },
    {
      title: 'Recognized Professional Certification Providers',
      items: [
        { name: 'CompTIA', url: 'https://comptia.org' },
        { name: 'Cisco', url: 'https://cisco.com' },
        { name: 'AWS', url: 'https://aws.amazon.com' },
        { name: 'Microsoft Learn', url: 'https://learn.microsoft.com' },
        { name: 'Google Cloud', url: 'https://cloud.google.com' },
        { name: 'Oracle', url: 'https://oracle.com' },
        { name: 'IBM', url: 'https://ibm.com' },
        { name: 'ISC2', url: 'https://isc2.org' },
      ],
    },
  ];

  return (
    <div className="simple-page page">
      <div className="wrap">
        <header className="page-header reveal">
          <p className="eyebrow">Bookmarks</p>
        </header>

        {groups.map((group) => (
          <section className="bookmark-group" key={group.title}>
            <h2 className="bookmark-title">{group.title}</h2>
            <div className="bookmark-compact">
              {group.items.map((item) => (
                <div className="bookmark-row" key={item.name}>
                  <div className="bookmark-info">
                    <span className="bookmark-name">{item.name}</span>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bookmark-btn"
                    aria-label={'Open ' + item.name}
                  >
                    Open
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Bookmarks;
