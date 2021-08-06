<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

    <link rel="stylesheet" href="detail.css">
    <link rel="stylesheet" href="base.css">
    <link rel="stylesheet" href="login.css">
    <!-- font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">







</head>





<body>




    
    <div class="overlay"></div>



    <div>
        <i id='loginCancelIcon' class="fas fa-times"></i>
    </div>

    <!-- SIGNUP&LOGIN -->
    <div class='signupAndLogin'>

        <div class='signupAndLogin-Container'>

            <div class='login-pic'>
                <img src="https://i.ibb.co/DQ4CXFw/5.jpg" alt="">
            </div>

            <!-- SIGNUP -->


            <div class='signupForm'>

                <div class='signupForm-content'>
                    <h1>Create Account</h1>

                    <div class='signupForm-content-div'>
                        <p>Email</p>
                        <input id='email-signup' type="text" placeholder="Enter Email">
                    </div>
                    <div class='signup-noti'>
                        <p id='email-signup-noti'></p>
                    </div>

                    <div class='signupForm-content-div'>
                        <p>Password</p>
                        <input id='password-signup' type="password" placeholder="Enter password">
                    </div>
                    <div class='signup-noti'>
                        <p id='password-signup-noti'></p>
                    </div>

                    <div class='signupForm-content-div'>
                        <p>Name</p>
                        <input id='name-signup' type="text" placeholder="Enter name">
                    </div>
                    <div class='signup-noti'>
                        <p id='name-signup-noti'></p>
                    </div>

                    <div class='signupForm-login'>
                        <p class='signupForm-login-p1'>Already have an account?</p>
                        <p id='signUpSwitch' class='loginForm-login-p2' onclick=signUpSwitch()>Sign up</p>

                    </div>

                    <button id='btn-signup' class='signupForm-btn'>SIGN UP</button>

                </div>
            </div>

            <!-- LOGIN -->


            <div class='loginForm'>

                <div class='loginForm-content'>
                    <h1>Login</h1>

                    <div class='loginForm-content-div'>
                        <p>Email</p>
                        <input id='email-login' type="text" placeholder="Enter Email">
                    </div>
                    <div class='login-noti'>
                        <p id='email-login-noti'></p>
                    </div>

                    <div class='loginForm-content-div'>
                        <p>Password</p>
                        <input id='password-login' type="password" placeholder="Enter Password">
                    </div>
                    <div class='login-noti'>
                        <p id='password-login-noti'></p>
                    </div>




                    <div class='loginForm-login'>
                        <p class='loginForm-login-p1'>Don't have an account?</p>
                        <p id='signUpSwitch' class='loginForm-login-p2' onclick = signUpSwitch()>Sign up</p>

                    </div>

                    <button id='btn-login' class='loginForm-btn'>LOGIN</button>

                </div>

            </div>

        </div>

    </div>



    <!-- Header -->

    <div>

        <header>

            <!-- Navbar -->

            <div class="navbar">

                <div class="navbarLeft">
                    <div class="navbarLeft-detail" id='navbarLeft-detail_Home'>
                        <i class="fas fa-film"></i>
                        <p>Trang chủ</p>

                    </div>

                    <div class="navbarLeft-detail" id='navbarLeft-detail_Search'>
                        <i class="fas fa-search"></i>
                        <p>Tìm kiếm phim</p>
                    </div>


                    <div class="navbarLeft-detail">
                        <i class="fas fa-graduation-cap"></i>
                        <p>Học qua phim</p>
                    </div>
                </div>


                <!-- <div class="navbarRight"> -->

                <div class="navbarRight_signupAndLogin">
                    <div class='navbarRight_signup'>Đăng ký</div>
                    <div class='navbarRight_login'>Đăng nhập</div>
                </div>

                <div class="navbarRight_accountAndLogout">
                    <div class='navbarRight_account'>Account</div>
                    <div class='navbarRight_logout'>Log out</div>
                </div>

                <!-- </div> -->

            </div>



            <!-- Search Box -->

            <div class='search'>
                <div class='search-box'>
                    <input id='search_input' type="string" placeholder="Nhập tên phim">
                    <button id='search_btn'>Tìm kiếm </button>
                </div>
            </div>

        </header>





    <!-- BODY -->


    <div class='body-box'>

        <div class='body-box-left' id='body-box-left'>
            <img id='body-box-left_img' src="" alt="">
            <div id='body-box-left_overlay'></div>
            <img id='body-box-left_playIcon' src="./pngegg.png" alt="">
        </div>


        <div class='body-box-center'>

            <div>
                <div class='body-box-center-title'>
                    <h3></h3>
                    <p></p>
                </div>

                <div class='body-box-center_Intro'>GIỚI THIỆU PHIM</div>

                <div class='body-box-center-content'>
                    <p class='body-box-center-content_description'></p>

                    <div class='body-box-center-content-Info'>
                        <label for="">Quốc gia</label>
                        <p class='body-box-center-content-Info_nation'></p>
                    </div>

                    <div class='body-box-center-content-Info'>
                        <label for="">Thể loại</label>
                        <p class='body-box-center-content-Info_gerne'></p>
                    </div>

                    <div class='body-box-center-content-Info'>
                        <label for="">Đạo diễn</label>
                        <p class='body-box-center-content-Info_director'></p>
                    </div>

                    <div id ='hihi'class='body-box-center-content-Info'>
                        <label for="">Diễn viên</label>
                        <p class='body-box-center-content-Info_actors'></p>
                    </div>


                </div>

            </div>


            <div class='comment'>
                <div class='comment_binhLuan'>Bình luận</div>
                <div class='comment-box'>
                    <img src="https://i.ibb.co/svd6QPK/default-avatar.jpg" alt="">
                    <input id='comment-input' type="text" placeholder="Bình luận">

                </div>
                <button class='comment_btn'>Bình luận</button>
            </div>

            <div id='RTsec'></div>
         

        </div>
        <div class='body-box-right'></div>


    </div>

  <!-- Footer -->
  <footer class='foot'>

    <div class='footer1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
    <div class='footer2'>
        <p class='footer-head'>INDEX</p>
        <div class='footer-content'>

            <p>Trang chủ</p>
        </div>
        <div class='footer-content'>

            <p>Hướng dẫn xem với phụ đề</p>
        </div>
    </div>
    <div class='footer3'>
        <p class='footer-head'>QUY ĐỊNH</p>
        <div class='footer-content'>

            <p>Điều khoản sử dụng</p>
        </div>
        <div class='footer-content'>

            <p>Chính sách riêng tư</p>
        </div>
        <div class='footer-content'>

            <p>Bản quyền và nội dung</p>
        </div>

    </div>
    <div class='footer4'>
        <p class='footer-head'>LIÊN HỆ</p>
        <div class='footer-content'>
            <p>Email</p>
        </div>
        <div class='footer-content'>

            <p>Số điện thoại</p>
        </div>
    </div>

</footer>






    <!-- FB -->
    <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js"></script>
    <script defer src="https://www.gstatic.com/firebasejs/8.6.8/firebase-firestore.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js"></script>



    <script src='./FB.js' type='module'></script>
    <script src='login-css.js' type='module'></script>
    <script src='login.js' type='module'></script>
   
    <script src='detail-css.js' type='module'></script>
    <script src='detail.js' type='module'></script>

</body>

</html>
