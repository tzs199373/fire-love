$(function() {
    $('#yes').click(function(event) {
        modal('我就知道可以的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('嗨鸭', A);
    });
});

function A() {
    modal('讲这些', B);
}

function B() {
    modal('嗨鸭', C);
}

function C() {
    modal('除了嗨鸭', D);
}

function D() {
    modal('还是嗨鸭', E);
}

function E() {
    modal('嗨鸭', F);
}

function F() {
    modal('因为嗨鸭到闷了', G);
}

function G() {
    modal('就转变想法', H);
}

function H() {
    modal('对吧预言家', I);
}

function I() {
    modal('嗨鸭', J)
}

function J() {
    modal('嗨鸭', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
