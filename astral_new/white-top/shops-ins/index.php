<? include '../include/header.php' ?>

    <main class="main_white">

        <? include '../include/shop-nav-header.php' ?>

            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mt-4 pb-3">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>

                <div class="row">


                    <div class="col-2 d-none d-lg-block">
                        <nav class="nav-aside d-flex flex-column">
                            <a href="" class="nav-aside__item nav-aside__item_active">Астрал Отчет</a>
                            <a href="" class="nav-aside__item">1С-Отчетность</a>
                            <a href="" class="nav-aside__item">Астрал ЭТ</a>
                            <a href="" class="nav-aside__item">1С-ЭТП</a>
                            <a href="" class="nav-aside__item">Скрин.Астрал</a>
                            <a href="" class="nav-aside__item">1С-ЭДО</a>
                            <a href="" class="nav-aside__item">Астрал 5.0</a>
                        </nav>
                    </div>
                    <div class="col-12 col-lg-10">
                        <div class="info-card">
                            <div class="row flex-column flex-md-row">
                                <div class="col-12 col-md-4 d-none d-md-block">
                                    <img src="img/img-big.png" alt="" class="info-card__img">
                                </div>
                                <div class="col-12 col-md-6 pl-4">
                                    <h3>Астрал Отчет</h3>
                                    <h3>Оптимальный</h3>
                                    <img src="img/img-big.png" alt="" class="info-card__img d-block d-md-none mt-4">
                                    <div class="info-card__price pt-4 pb-4">
                                        <span class="price">3 700</span>
                                        <span>&#8381;/шт</span>
                                    </div>
                                    <div class="info-card__info d-flex">
                                        <div class="count">Много</div>
                                        <div class="cheaper pl-4">Нашли дешевле?</div>
                                    </div>

                                    <div class="info-card__btns flex-column flex-md-row d-flex pt-4 pb-4">
                                        <div class="counter d-flex">
                                            <div class="counter__minus pl-2">&ndash;</div>
                                            <div class="counter__nmb">1</div>
                                            <div class="counter__plus pr-2">+</div>
                                        </div>
                                        <button class="btn btn-primary px-4 ml-0 mr-0 ml-md-2 mr-md-2 mt-2 mb-2 mt-md-0 mb-md-0" type="button">В корзину</button>
                                        <button type="button" class="btn emp-bord px-4">Купить в 1 клик</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class=" pb-4">
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Описание</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Характеристики</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Видео</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Отзывы <span class="cnt_roccomends">(1)</span></a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Задать вопрос</a>
                            </div>
                        </nav>
                        <div class="tab-content info-card-toggler" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <h2 class="pb-4">Пять преимуществ «КАССЫ №1»</h2>
                                <h4 class="pb-4">Удобная и простая настройка</h4>
                                <p>Администрировать «Кассу №1» Вы можете в любом веб-браузере любой операционной системы. Переход между различными вкладками настройки осуществляется в один клик. В пункте меню «ФН», в выпадающем меню «Регистрация» располагается одно единое окно для регистрации ККТ, в котором можно указать все необходимые Вам данные и нажать на кнопку «Зарегистрировать».</p>
                                <h4 class="pb-4">Удаленное администрирование кассы через веб-сервис</h4>
                                <p>Если на компьютере установлена программа для удаленного доступа, такая как «Аmmy Аdmin» или «TeamViewer», Вы можете удаленно подключиться к компьютеру и перейти в веб-браузер для необходимых настроек.</p>
                                <p>Также настройку можно производить с любого компьютера, находящегося в той же сети Wi-Fi, что и ККТ.</p>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                        </div>
                    </>
                </div>

            </div>

            <div class="grey_line mt-5 mb-5"></div>

            <? include 'include/you-looked.php' ?>

    </main>
    <? include '../../include/footer.php' ?>

        <script type="text/javascript">
            var minus = $('.counter__minus');
            var plus = $('.counter__plus');
            var nmb = $('.counter__nmb');
            var cnter = 1;
            minus.on('click', function(e) {
                cnter == 1 ? e.preventDefault() : nmb.text(--cnter);
            })
            plus.on('click', function() {
                nmb.text(++cnter)
            })
        </script>
