function navbar(){
     
    return `   <div class="display">
    <div class="logo">
        <a href="https://trackingtime.co/" itemprop="url">
            <img src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
                alt="TrackingTime">
        </a>

    </div>
    <div class="navigation">
        <a href="intergation.html">INTEGRATIONS</a>
        <a href="blog.html">BLOG</a>
        <select name="FEATURES" id="feature">
            <a href="">
                <option value="">FEATURE</option>
            </a>
            <a href="Time Tracker.html" class="we1">
                <option value="" id="features" class="we1">Time Tracker</option>
            </a>
            <a href="Project Management.html" class="we1">
                <option value="" class="we1">Project Management</option>
            </a>
            <a href="Online Timesheet.html">
                <option value="" class="we1">Online Timesheet</option>
            </a>
            <a href="Time Cards">
                <option value="" class="we1">Time Cards</option>
            </a>
            <a href="Attendence Tracking.html">
                <option value="" class="we1">Attendence Tracking</option>
            </a>
            <a href="Time Reporting.html">
                <option value="" class="we1">Time Reporting</option>
            </a>
        </select>
        <button id="free"><a href="login">Try it Free</a></button>
        <button id="login"><a href="login">LOGIN</a></button>
    </div>

</div>`
}
export default navbar();