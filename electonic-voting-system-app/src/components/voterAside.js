import React from 'react';

const VoterAsideComponent = ()=>
{
    return(
        <div>
            <div class=" border border-dark text-light bg-lg-dark pb-5 quick-link">
                <h3>Quick Links</h3>
                <ul class="nav flex-column mb-4">
                    <li class="nav-item">
                        <a class="nav-link text-primary font-weight-bold" href="#">
                            FAQs
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary font-weight-bold" href="#">
                            Apply for Voter ID
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary font-weight-bold" href="#">
                            Check Voter ID status
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-primary font-weight-bold" href="#">
                            View Election Schedule
                        </a>
                    </li>
                <li class="nav-item">
                    <a class="nav-link text-primary font-weight-bold" href="#">
                        Cast your Vote
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-primary font-weight-bold" href="#">
                        About Us
                    </a>
                </li>
                </ul>
                <h3>
                    <marquee direction="up" height="210" width="200" >
                        Scrolling News
                    </marquee>
                </h3>
            </div>
        </div>
    )
}

export default VoterAsideComponent;