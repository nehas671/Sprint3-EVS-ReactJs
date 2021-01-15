
const Footer = (props) => {
    return(
        <footer>
        <div class=" footer-before">
            <div class="row Custom-container  word-break">
                <div class="col-lg-6 col-md-6 light-grey mb-3 mb-md-0 px-sm-0 pr-md-4 ">
                    <div class="footer-headings">About Us</div>
                    <p>E-voting which is physically supervised by representatives of governmental or independent electoral authorities.
remote e-voting via the Internet (also called i-voting) where the voter submits his or her vote electronically to the election authorities, from any location.</p>
                </div>


                <div class="col-lg-6 col-md-6  text-lg-right light-grey  mb-3 mb-md-0 px-sm-0 px-md-2">
                    <div class="footer-headings mb-1">Follow Us</div>
                    <div class="d-flex flex-wrap justify-content-lg-end"><a href="#"><img src="followus.png" class="col-2" alt="followus"/></a>
                                            </div>
                </div>


            </div>

        </div>
        <div class="footer-after">
            <div class="row Custom-container d-flex justify-content-center py-4 ">
                
                <div class="text-muted small align-center">&copy; Copyright 2021.All Rights Reserved</div>
               
            </div>
        </div>

    </footer>


    )
}


export default Footer;