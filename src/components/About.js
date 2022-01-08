import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0 created by Aida Osmonova to make our beloved students' life easier </h4>
      <h4><a href="http://alatoo.edu.kg/view/public/pages/page.xhtml?id=3781#gsc.tab=0">Alatoo University's Page</a></h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About