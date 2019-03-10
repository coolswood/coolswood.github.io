<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <title>Главная</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css">
  <link rel="stylesheet" href="../../assets/bootstrap/bootstrap.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css">
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="css/template.css">
  <link rel="stylesheet" href="../../assets/OwlCarousel2-2.2.1/dist/assets/owl.carousel.min.css">
</head>

<body>

  <?php include '../../include/main-search.php';?>

    <header class="pt-3 pb-3 header-inner header-inner__no-slider">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 d-lg-flex d-none align-items-end">
          <a class="navbar-brand" href="#">
            <div class="mb-2 nav-logo_img"></div>
          </a>
        </div>
        <!--col-->
        <div class="col col-lg-10">

          <div class="row navbar-top mb-3">
            <div class="col-5 col-md-4 col-lg-3 d-flex align-items-center">
              <button class="btn btn-light btn-region px-2"><span>Калужская обл.</span> <i class="fa fa-angle-down"></i></button>
            </div>
            <div class="col-7 col-md-8 col-lg-9 d-flex justify-content-end align-items-center">
              <span class="header-phone d-none d-md-block">8 (4842) 788 999</span>
              <button class="btn btn-light btn-recall ml-4 py-1"><span>Обратный звонок</span> <i class="fa fa-phone-square ml-1"></i></button>
            </div>
          </div>
          <!--.row-->

          <nav class="navbar-main navbar navbar-expand-lg navbar-light p-0">
            <a class="navbar-brand d-block d-lg-none mr-auto" href="#">
                                <img src="../../img/logo-c.png" alt="logo">
                            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link after-cubics" href="#">Продукты <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Новости</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Статьи</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Контакты</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Партнерам</a>
                </li>
                <li class="nav-item d-lg-none d-xl-block">
                  <a class="nav-link" href="#">О компании</a>
                </li>
              </ul>
            </div>


            <i class="fa fa-search" data-toggle="modal" data-target="#searchModal"> </i>

            <button type="button" class="navbar-toggler btn btn-link p-0 ml-2" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
          </nav>

        </div>
        <!--col-->
      </div>
      <!--.row-->
    </div>

    </div>
  </header>
