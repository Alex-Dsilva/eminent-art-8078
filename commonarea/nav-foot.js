function navbar(){

    return ` <div class="display">
    <div class="logo">
        <a href="index.html" itemprop="url">
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
                alt="TrackingTime">
        </a>

    </div>
    <div class="navigation">
        <a href="intergation.html">INTEGRATIONS</a>
        <a href="blog.html">BLOG</a>
       <ul name="FEATURES" id="feature" >FEATURES <i class="fa-solid fa-chevron-down"></i>
        <ul id="calloption">
            <li><a href="timetraker.html">Time Tracker</a></li>
            <li><a href="Project-manger.html">Project Management</a></li>
            <li><a href="online-timesheet.html">Online Timesheet</a></li>
            <li><a href="time-cards.html">Time Cards</a></li>
            <li><a href="attendance-tracker.html">Attendence Tracking</a></li>
            <li><a href="time_reporting.html">Time Reporting</a></li>
        </ul>
       </ul>
        <button id= "free"><a href="login.html">Try it Free</a></button>
        <button id="login"><a href="login.html">LOGIN</a></button>
    </div>

</div>`
}



function footer(){


    return `
    <div class="container8">
    <img class="ttimg" src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg"
        alt="TrackingTime">
    <h4>Get Started</h4>
    <p class="getp">Sign up today and join thousands of people around the world using <br>
        TrackingTime to make the most of their time.</p>
    <div id="googlelink">
    <div id="email_start">
    <input type="email" id="email-input" placeholder="Your work Email">
    <button id="start-w-email" class="btn" >START FOR FREE!</button>
    <p id="err"></p>
    <p id="textun">14-day PRO trial included</p>
    <div id="g-signup">
        <img src="data:image/png;base64,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" alt="G-logo">
        <h3><a href="#">Sign in with Google</a></h3>
    </div>
</div>
    </div>
</div>
<div class="row menus">
    <nav class="col-12-3" tabindex="0">
        <h4>Industries</h4>
        <ul>
            <li><a href="https://trackingtime.co/industry/time-tracking-for-graphic-designers"
                    title="Time tracking for Graphic Designers">Time tracking for Graphic Designers</a></li>
            <li><a href="https://trackingtime.co/industry/time-tracking-software-for-architects"
                    title="Time tracking software for Architects">Time tracking software for Architects</a></li>
            <li><a href="https://trackingtime.co/industry/time-tracking-for-remote-workers"
                    title="Time tracking for Remote Workers">Time tracking for Remote Workers</a></li>
            <li><a href="https://trackingtime.co/industry/time-tracking-for-marketing-teams"
                    title="Time tracking for Marketing Teams">Time tracking for Marketing Teams</a></li>
            <li><a href="https://trackingtime.co/industry/time-tracking-for-freelancers"
                    title="Time tracking for Freelancers">Time tracking for Freelancers</a></li>
        </ul>
    </nav>
    <nav class="col-12-2" tabindex="0">
        <h4>Product</h4>
        <ul>
            <li><a href="https://trackingtime.co/pricing">Plans &amp; Pricing</a></li>
            <li><a href="https://trackingtime.co/integrations">Integrations</a></li>
            <li><a href="/product-updates">Product Updates</a></li>
            <li><a class="gatrack" href="https://trackingtime.co/slack" target="_blank">Slack Bot</a></li>
            <li><a class="gatrack" href="https://trackingtime.co/time-tracking-for-microsoft-teams"
                    target="_blank">Microsoft Teams</a></li>
        </ul>
    </nav>
    <nav class="col-12-3" tabindex="0">
        <h4>Features</h4>
        <ul>
            <li><a href="https://trackingtime.co/features/online-timesheet"
                    title="Online Timesheet For Efficient Companies">Online Timesheet For Efficient Companies</a>
            </li>
            <li><a href="https://trackingtime.co/features/time-tracker" title="Time Tracker for every business">Time
                    Tracker for every business</a></li>
            <li><a href="https://trackingtime.co/features/billing-and-payroll-reports"
                    title="Reports for billing and payroll to reduce administrative work">Reports for billing and
                    payroll to reduce administrative work</a></li>
            <li><a href="https://trackingtime.co/features/attendance-tracker"
                    title="Attendance tracker for every business">Attendance tracker for every business</a></li>
            <li><a href="https://trackingtime.co/features/project-management"
                    title="Project Management Time Tracking Software">Project Management Time Tracking Software</a>
            </li>
        </ul>
    </nav>
    <nav class="col-12-2" tabindex="0">
        <h4>Apps</h4>
        <ul>
            <li><a class="gatrack" href="https://pro.trackingtime.co" target="_blank">Web App</a></li>
            <li><a class="gatrack" href="https://trackingtime.co/time-tracker-app?Mac" target="_blank">Time Tracker
                    app for Mac</a></li>
            <li><a class="gatrack" href="https://trackingtime.co/time-tracker-app?Win" target="_blank">Time Tracker
                    for Windows</a></li>


            <li><a href="https://trackingtime.co/iphone-app">iPhone app</a></li>
            <li><a href="https://trackingtime.co/android-app">Android app</a></li>
            <li><a class="gatrack"
                    href="https://chrome.google.com/webstore/detail/tracking-time-button/fglmkdhomaklnckgbjfnfmbfmlkjippg"
                    target="_blank">Time Tracking for Chrome</a></li>
            <li><a class="gatrack" href="https://addons.mozilla.org/en-US/firefox/addon/time-tracking-button/"
                    target="_blank">Time Tracking for Firefox</a></li>
            <li><a class="gatrack"
                    href="https://apps.apple.com/ar/app/tracking-time-button/id1587766224?l=en&amp;mt=12"
                    target="_blank">Time Tracking for Safari</a></li>
        </ul>
    </nav>
    <nav class="col-12-2" tabindex="0">
        <h4>Company</h4>
        <ul>
            <li><a href=""></a><a href="https://trackingtime.co/about-us">About Us</a></li>
            <li><a href="https://trackingtime.co/blog">Blog</a></li>
            <li><a href="https://trackingtime.co/media-kit">Media kit</a></li>
            <li><a href="https://support.trackingtime.co/en/articles/1956503-terms-of-service" target="_blank">Terms
                    of service</a></li>
            <li><a href="https://support.trackingtime.co/en/articles/1944754-privacy-policy" target="_blank">Privacy
                    Policy</a></li>
            <li><a href="https://support.trackingtime.co/en/articles/4441221-dmca-policy" target="_blank">DMCA
                    Policy</a></li>
            <li><a href="https://trackingtime.co/impressum">Impressum</a></li>
        </ul>
    </nav>
</div>

<div class="container9">
    
        <div class="social">
            <a href="https://twitter.com/trackingtime" id="twitter" class="gatrack" target="_blank"
                aria-label="Twitter"><img src="

        https://trackingtime.co/wp-content/themes/trackingtime-v4/img/social/twitterblanco.png" alt=""></a>
            <a href="https://www.linkedin.com/company/trackingtime-llc" id="linkiden" class="gatrack"
                target="_blank" aria-label="Linkedin">
                <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/social/linkedinblanco.png"
                    alt=""></a>

            <a href="https://www.facebook.com/trackingtime/" id="facebook" class="gatrack" target="_blank"
                aria-label="Facebook">
                <img src="	https://trackingtime.co/wp-content/themes/trackingtime-v4/img/social/facebookblanco.png"
                    alt=""></a>
        </div>
        <div class="dogesh">
        <div class="help">
            <h4>Help & Support</h4>
            <li>Help Center</li>
            <li>Developers</li>
            <li>Contact US</li>
        </div>
        <div class="choose">
            <h4>Choose Laungage</h4>
           <select name="laungage" id="Laungage">
            <option value="English">English</option>
            <option value="Portugues">Portugues</option>
            <option value="DUTESH">DUTESH</option>
            <option value="ESPANOL">ESPANOL</option>
           </select>
        </div>
    </div>

 


</div>
<p id="para">support@trackingtime.co</p>
<p id="para1"> © 2022 TrackingTime, LLC</p>`

}



function changepage(link){
    if(link.value==="Time Tracker" ){
        window.location.href="timetraker.html"
    }
    else if(link.value==="Project Management"){
        window.location.href="Project-manger.html"
    }
    else if(link.value==="Online Timesheet"){
        window.location.href="online-timesheet.html"
    }
    else if(link.value==="attendence"){
        window.location.href="attendance-tracker.html"
    }
    else if(link.value==="time_cards"){
        window.location.href="time-cards.html"
    }
    }
    function getlogin(){
        window.location.href="login.html"
    }
    function getsignup(){
        window.location.href="signup.html"
    }



export  {navbar ,footer,changepage};