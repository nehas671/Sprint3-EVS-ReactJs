import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const AdminHeader = (props) =>
{
  return(
    <header class="Custom-container py-md-2 py-3   ">
    <div class="header-before">
      <span class="mr-4">
        <img src="logo.jpg" alt="brand-name" class="logo"/>
      </span>
      <h1 class="d-inline">Electronic Voting System</h1>
    </div>
    <nav class="navbar navbar-expand-md  navbar-light d-md-block d-lg-flex px-sm-0 py-0 text-wrap ">
      {/*<div class="navbar-brand nav-custom-brand mb-3 mb-md-0 py-0"></div>*/}
      <button class="navbar-toggler  custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav flex-wrap w-100">
          <li class="nav-item  nav-item-custom mb-2 mb-md-0 flex-wrap ">
            <a class="nav-link text-dark border-primary nav-custom-link px-md-0 " href="#">
              Home
            </a>
          </li>
          <div className='btn-group dropdown'>
            <li class="nav-item  nav-item-custom  mb-2 mb-md-0 flex-wrap ">
              <a class="nav-link  text-dark px-md-0  position-relative border-primary  nav-custom-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Election
              </a>
              <div class="dropdown-menu nav-drop-custom  nav-drop position-absolute " aria-labelledby="navbarDropdown">
                <a class="dropdown-item drop " href="/election">
                  Add Election
                </a>
                <a class="dropdown-item drop" href="/showelection">
                  View Election
                </a>
              </div>
            </li>
          </div>
          <div className = 'btn-group dropdown'>
            <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
              {/*<a class="nav-link text-dark px-md-0 border-primary  nav-custom-link" href="#">Party</a>*/}
              <a class="nav-link  text-dark px-md-0  position-relative border-primary  nav-custom-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Party
              </a>
              <div class="dropdown-menu nav-drop-custom  nav-drop position-absolute " aria-labelledby="navbarDropdown">
                <a class="dropdown-item drop " href="/addparty">
                  Add Party
                </a>
                <a class="dropdown-item drop" href="/viewparty">
                  View Party
                </a>
              </div>
            </li>
          </div>
          <div className='btn-group dropdown'>
            <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
              {/* <a class="nav-link text-dark px-md-0  border-primary  nav-custom-link " href="#">Candidate</a>*/}
              <a class="nav-link  text-dark px-md-0  position-relative border-primary  nav-custom-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Candidate
              </a>
              <div class="dropdown-menu nav-drop-custom  nav-drop position-absolute " aria-labelledby="navbarDropdown">
                <a class="dropdown-item drop " href="/add_candidate">
                  Add Candidate
                </a>
                <a class="dropdown-item drop" href="/view_candidate">
                  View Candidate
                </a>
                <a class="dropdown-item drop " href="/updatecandidate">
                  Update Candidate
                </a>
                <a class="dropdown-item drop" href="#">
                  Delete Candidate
                </a>
              </div>
            </li>
          </div>
          <div className='btn-group dropdown'>
            <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
              {/* <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="#">Voter Request</a>*/}
              <a class="nav-link  text-dark px-md-0  position-relative border-primary  nav-custom-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Voter Request
              </a>
              <div class="dropdown-menu nav-drop-custom  nav-drop position-absolute " aria-labelledby="navbarDropdown">
                <a class="dropdown-item drop " href="/viewVoterReq">View VoterRequest</a>
                <a class="dropdown-item drop" href="/approveRequest">Approve VoterRequest</a>
              </div>
            </li>
          </div>
          <li class="nav-item nav-item-custom  mb-2 mb-md-0 flex-wrap">
            <a class="nav-link text-dark px-md-0  border-primary nav-custom-link " href="/addResult">Declare Result</a>
          </li>
        </ul>
        <div class=" d-flex sky-color search-box ">
          <input type="search" class=" border-0 sky-color  ml-md-auto" placeholder="search..."></input>
          <div class="">
            <button class=" btn search-button border-0 sky-color " type="button" id="search-button" ><FontAwesomeIcon icon={icons.faSearch} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default AdminHeader; 