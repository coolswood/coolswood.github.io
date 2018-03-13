
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