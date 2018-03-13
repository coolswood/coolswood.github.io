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


    <style>
        body.modal-open {
            padding-right: 0 !important;
        }
        #searchModal {
            padding-right: 0 !important;
        }
        #searchModal .modal-dialog {
            max-width: 100%;
        }
        #searchModal .modal-dialog .modal-content {
            border-radius: 0;
            border: none;
        }
        #searchModal .modal-dialog .row {
            height: 100px;
        }
        #searchModal .modal-dialog input {
            border: transparent;
            box-shadow: none !important;
        }
        #searchModal .modal-dialog .fa-times {
            color: #a9aeb4;
            font-size: 20px;
            cursor: pointer;
        }
    </style>
    <script>
        $.fn.extend({
            animateCss: function(animationName, callback) {
                var animationEnd = (function(el) {
                    var animations = {
                        animation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        MozAnimation: 'mozAnimationEnd',
                        WebkitAnimation: 'webkitAnimationEnd',
                    };

                    for (var t in animations) {
                        if (el.style[t] !== undefined) {
                            return animations[t];
                        }
                    }
                })(document.createElement('div'));

                this.addClass('animated ' + animationName).one(animationEnd, function() {
                    $(this).removeClass('animated ' + animationName);

                    if (typeof callback === 'function') callback();
                });

                return this;
            }
        });

        $(function(){
            $('#searchModal').on('show.bs.modal', function (e) {
                console.log($(this).find("input"));
                $(this).find("input").focus();
            });
        });
    </script>

    <!-- Modal -->
    <div id="searchModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-7 col-lg-8 col-xl-9">
                            <input class="form-control form-control-lg w-100" type="text" placeholder="Поиск...">
                        </div>
                        <div class="col-4 col-lg-3 col-xl-2">
                            <button type="button" class="btn btn-primary btn-lg btn-block">Найти</button>
                        </div>
                        <div class="col-1 d-flex justify-content-end">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

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

    <main class="main_white">
        <div class="container">
            <div class="h2_wrapper d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row pt-5 pb-5">
                <h2 class="pb-2 pb-sm-0">Новости</h2>
                <div class="input-wrapper d-flex">
                    <div class="dropdown show">
                        <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Все новости
          <i class="fa fa-angle-down pl-4" aria-hidden="true"></i>
        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown show pl-2">
                        <a class="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">2018
          <i class="fa fa-angle-down pl-4" aria-hidden="true"></i>
        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row news-list">
                <div class="col-12 col-md-8 col-lg-6 mb-3">
                    <div class="news-item news-item-big">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-warning">Законодательство</span>
                        <span class="badge badge-secondary">Закрепленная новость</span>
                        <div class="news-title d-block pt-3 pb-2">В справках 2-НДФЛ и расчетах по страховым взносам необходимо отражать актуальные персональные данные физлиц</div>
                        <a href="" class="btn btn-link p-0">Все статьи <i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
                <div class="col-12 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-primary">Продукты</span>
                        <div class="news-title d-block pt-3">Астрал Отчет: Обзор версии 4.1.48.1</div>
                    </a>
                </div>
                <div class="col-12 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-success">Законодательство</span>

                        <div class="news-title d-block pt-3">В справках 2-НДФЛ и расчетах по страховым взносам необходимо отражать актуальные персональные данные физлиц</div>
                    </a>
                </div>
                <div class="col-12 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-info">Регион</span>
                        <div class="news-title d-block pt-3">Новый офис клиентского отдела в Калуге</div>
                    </a>
                </div>
                <div class="col-12 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-danger">Законодательство</span>

                        <div class="news-title d-block pt-3">С 15 января 2018 г. доступен новый программный сервис Банка России - "Конструктор платежных поручений"</div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-warning">Продукты</span>

                        <div class="news-title d-block pt-3">Астрал Отчет: Обзор версии 4.1.48.1</div>
                    </a>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mb-3">
                    <a href="" class="news-item news-item-small">
                        <div class="news-date mb-2">14 февраля 2018</div>
                        <span class="badge badge-info">Законодательство</span>
                        <div class="news-title d-block pt-3">В справках 2-НДФЛ и расчетах по страховым взносам необходимо отражать актуальные персональные данные физлиц</div>
                    </a>
                </div>
            </div>

            <div class="centro pt-5 pb-5">
                <nav aria-label="Page navigation example pb-2">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link-arr" href="#" aria-label="Previous">
                              <i class="fa fa-chevron-circle-left"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link-arr" href="#" aria-label="Next">
                              <i class="fa fa-chevron-circle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="grey_line mb-5"></div>

        <h2 class="centr-new">Будьте в курсе последних новостей</h2>

        <div class="container pb-5 mt-5">
            <div class="two_blocks">
                <div class="row flex-column flex-lg-row">
                    <div class="col-12 col-lg-6">
                        <div class="new two_block">
                            <div class="two_block__text">Подписывайтесь на наши группы в социальных сетях</div>
                            <div class="two_block__social pt-5">
                                <a href="" class="two_block__soc">
                                    <img src="img/facebook.png" alt="soc">
                                </a>
                                <a href="" class="two_block__soc">
                                    <img src="img/youtube.png" alt="soc">
                                </a>
                                <a href="" class="two_block__soc">
                                    <img src="img/vk.png" alt="soc">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 mt-3 mt-lg-0">
                        <div class="new two_block">
                            <div class="two_block__text">Подписывайтесь на рассылку нашего сайта</div>
                            <div class="col-xl-12 pl-0 pt-5">
                            <form action="">
                                <div class="input-group mb-3 flex-column flex-sm-row">
                                    <input type="text" class="form-control" placeholder="Ваш email..." aria-label="Ваш email..." aria-describedby="basic-addon2">
                                    <div class="input-group-append">
                                        <button class="btn btn-primary px-4" type="button">Подписаться</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <footer>
        <div class="container">
            <div class="footer_up">
                <div class="row">
                    <div class="col-md-3 col-sm-12 d-flex flex-column align-items-start footer_first">
                        <img src="../../img/logo-w.png" alt="logo">
                        <span>248000, г. Калуга ул.Суворова 121, 4 этаж, офис 430.</span>
                        <span>тел: (4842) 7-88-999 доб. 7032, 7037, 7034, 7031</span>
                        <span>email: client@astralnalog.ru</span>
                        <span>Время работы с 8:30 до 17:30</span>
                        <br>
                        <span>248000, г. Калуга пер.Воскресенский 29А, 1этаж.</span>
                        <span>тел: (4842) 7-88-999 доб. 7036, 7039, 7033</span>
                        <span>email: client@astralnalog.ru </span>
                        <span>Время работы с 8:30 до 17:30</span>

                        <div class="footer_search"><input type="text" placeholder="Поиск по сайту.."><i class="fa fa-search"></i></div>

                    </div>
                    <div class="col d-flex flex-column offset-md-1 offset-sm-0 footer__nav">
                        <h5>Продукты</h5>
                        <a href="">1С-Отчетность</a>
                        <a href="">Астрал Отчет</a>
                        <a href="">Информационная безопасность</a>
                        <a href="">Электронная подпись</a>
                        <a href="">Учебный центр</a>
                        <a href="">API</a>
                        <a href="">Электронная школа</a>
                        <a href="">Документооборот</a>
                        <a href="">Прочее</a>
                    </div>
                    <div class="col d-flex flex-column footer__nav">
                        <h5>Поддержка</h5>
                        <a href="">1С-Отчетность</a>
                        <a href="">Астрал Отчет</a>
                        <a href="">Информационная безопасность</a>
                        <a href="">Электронная подпись</a>
                        <a href="">Документооборот</a>
                    </div>
                    <div class="col d-flex flex-column footer__nav">
                        <h5>O компании</h5>
                        <a href="">Лицензии и сертификаты</a>
                        <a href="">Наши клиенты</a>
                        <a href="">Бизнес-партнеры</a>
                        <a href="">Партнерство</a>
                        <a href="">Вакансии</a>
                        <a href="">Руководство</a>
                        <a href="">СМИ о нас</a>
                        <a href="">Отзывы клиентов</a>
                    </div>
                </div>
            </div>
            <div class="footer_hr"></div>
            <div class="d-flex align-items-center justify-content-between flex-md-row flex-column footer_bottom">
                <span class="copir">© 2009-2017, ЗАО «Калуга Астрал»</span>
                <div class="d-flex align-items-center flex-md-row flex-column footer__soc-wrap">
                    <div class="footer__social">
                        <a href="" class="footer__soc"><img src="../../img/footer/soc-1.png" alt="vk"></a>
                        <a href="" class="footer__soc"><img src="../../img/footer/soc-2.png" alt="f"></a>
                        <a href="" class="footer__soc"><img src="../../img/footer/soc-3.png" alt="tw"></a>
                        <a href="" class="footer__soc"><img src="../../img/footer/soc-4.png" alt="my"></a>
                        <a href="" class="footer__soc"><img src="../../img/footer/soc-5.png" alt="you"></a>
                    </div>
                    <button type="button" class="btn btn-light footer-btn">Задать вопрос</button>
                </div>
            </div>
        </div>
    </footer>

