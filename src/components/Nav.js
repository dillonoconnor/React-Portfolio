import './Nav.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/Mail';

function Nav() {
  return (
    <nav>
      <div class="left-nav">
        <h1>dillon o'connor</h1>
      </div>
      <div class="right-nav">
        <a href="mailto:oconnor.dillon8@gmail.com"><MailOutlineIcon /></a>
        <a href="https://github.com/dillonoconnor"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/dillonoconnor/"><LinkedInIcon /></a>
      </div>
    </nav>
  );
}

export default Nav;