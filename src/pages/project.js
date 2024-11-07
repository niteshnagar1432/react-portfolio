<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nitesh Nagar</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
    <link rel="stylesheet" href="/stylesheets/responsive.css">
    <script src="https://kit.fontawesome.com/2acdadc9be.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="main">
        <header class="header">
            <!-- Logo -->
            <!-- <a href="#" class="logo">LR</a> -->
            <img class="logo" src="/images/logo/Nitesh nagar-logos_white.png" alt="" srcset="">
            <!-- Hamburger icon -->
            <input class="side-menu" type="checkbox" id="side-menu" />
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
            <!-- Menu -->
            <nav class="nav">
                <ul class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a> </li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="/project">Project's</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="#">Log-in</a></li>
                </ul>
            </nav>
        </header>
        <section class="project">
            <div class="project-heading">
                <h3>My Project's</h3>
            </div>
            <div class="project-sun-heading">
                <h3>My Last Project's :-</h3>
            </div>
            <div class="all-project">
                <div class="card-1">
                    <div class="project-2 project air_screen ">
                        <img src="/images/img/air_screen.png" alt="">
                        <div class="un-project-1">
                            <div class="project-logo">
                                <img src="/images/logo/project-icon.png" alt="">
                            </div>
                            <div class="project-topic">
                                <h3 class="project-heading-p">Todo Application with (API)</h3>
                            </div>
                        </div>
                        <div class="un-project-bottom">
                            <a href="#">Live Demo...</a>
                            <div class="like"><i class="fa fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                    <div class="project-2 project task_screen">
                        <img src="/images/img/task_screen.png" alt="">
                        <div class="un-project-1">
                            <div class="project-logo">
                                <img src="/images/logo/project-icon.png" alt="">
                            </div>
                            <div class="project-topic">
                                <h3 class="project-heading-p">Todo Application with (API)</h3>
                            </div>
                        </div>
                        <div class="un-project-bottom">
                            <a href="#">Live Demo...</a>
                            <div class="like"><i class="fa fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                    <div class="project-2 project scroll_screen">
                        <img src="/images/img/scroll_screen.png" alt="">
                        <div class="un-project-1">
                            <div class="project-logo">
                                <img src="/images/logo/project-icon.png" alt="">
                            </div>
                            <div class="project-topic">
                                <h3 class="project-heading-p">Scroll Trigger Animation</h3>
                            </div>
                        </div>
                        <div class="un-project-bottom">
                            <a href="#">Live Demo...</a>
                            <div class="like"><i class="fa fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                    <div class="project-2 project zoom_screen">
                        <img src="/images/zoom .png" alt="">
                        <div class="un-project-1">
                            <div class="project-logo">
                                <img src="/images/logo/project-icon.png" alt="">
                            </div>
                            <div class="project-topic">
                                <h3 class="project-heading-p">Meeting Application</h3>
                            </div>
                        </div>
                        <div class="un-project-bottom">
                            <a href="#">Live Demo...</a>
                            <div class="like"><i class="fa fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                    <div class="project-2 project funstagram_screen">
                        <img src="/images/funstagram.png" alt="">
                        <div class="un-project-1">
                            <div class="project-logo">
                                <img src="/images/logo/project-icon.png" alt="">
                            </div>
                            <div class="project-topic">
                                <h3 class="project-heading-p">Funstagram Web-Application</h3>
                            </div>
                        </div>
                        <div class="un-project-bottom">
                            <a href="#">Live Demo...</a>
                            <div class="like"><i class="fa fa-regular fa-heart"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <div class="blank"></div>
        <footer>
            <div class="footer-content">
                <!--add all information -->
                <img class="f-logo" src="/images/logo/Nitesh nagar-logos_white.png" alt="" srcset="">
                <h3 class="f-h3">Full Stack Developer</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, asperiores quia repudiandae neque
                    ipsum consectetur quidem accusamus modi ipsa dolorum dicta eligendi adipisci sint, nostrum eveniet
                    aperiam at autem corrupti!</p>
                <ul class="socials">
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                </ul>
                <div class="footer-bottom">
                    <!-- add all information -->
                    <p>copyright &copy;2023 <a href="#">nite_shnagar</a> </p>
                    <div class="footer-menu">
                        <ul class="f-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
    <script>
        $(document).ready(function(){
            $(".air_screen").click(function(){
                window.location.assign("/airJorden");
            });
            $(".task_screen").click(function(){
                window.location.assign("https://niteshnagar1432.github.io/todo_app/index.html");
            });
            $(".scroll_screen").click(function(){
                window.location.assign("/scrollTrigger");
            });
            $(".zoom_screen").click(function(){
                window.location.assign("https://zoom-wgn0.onrender.com/");
            });
            $(".funstagram_screen").click(function(){
                window.location.assign("https://funstagram-app.onrender.com/");
            });
        });
    </script>
</body>

</html>