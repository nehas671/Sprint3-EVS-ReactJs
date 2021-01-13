import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons'

const Slogan = (props) => {
    return(
        <div class="jumbotron sky-color jumbotron-custom mb-0 px-sm-0 rounded-0">

        <div class="row  Custom-container px-sm-0 mb-5 text-break ">
            <div class="col-lg-9 col-sm-12 px-sm-0 text-center text-lg-left mb-4 mb-lg-0">
                <div class="jumbotron-learnmore-heading mb-3 px-sm-0 ">Voting is not only your right but also your responsibility, cast your vote make your voice heard.</div>
                <p class=" jumbotron-learnmore-subheading px-sm-0">E-voting where the voter submits his or her vote electronically to the election authorities, from any location</p>
            </div>
            <div class="col-lg-3  col-sm-12  ml-auto d-flex  justify-content-center mb-n4 ">
                <button class="learn-more-button btn remove-box-shadow text-white align-self-center "><span class="pr-1">Use Your Vote</span><FontAwesomeIcon icon={icons.faVoteYea} /></button>
            </div>

        </div>

    </div>
    )
}

export default Slogan;