const Aside = (props) => {
    return(

<aside class="col-4  rounded  pr-0  aside-custom d-flex justify-content-center"><div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
          <h3>Quick Links</h3>
          <ul class="nav flex-column mb-4">
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-primary font-weight-bold" href="#">Login</a>
            </li>
          </ul>
          <h3><marquee direction="up" height="210" width="200" >Maharashtra Gram Panchayat Election: Aurangabad, Thane, Palghar, Gadchiroli among 34 districts voting today</marquee>
          </h3>
          </div></aside>
    )
} 


export default Aside;
