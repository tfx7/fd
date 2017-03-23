$(function(){
    var main_content = $('.main-content_board_index'),
        logged_in = _userdata["session_logged_in"];

    if( !logged_in ) main_content.eq(4).html('<p class="error-message">Desculpe, conteúdo visível somente a membros do fórum.</p><div style="overflow:hidden"><a href="/login" class="button-link"><i class="fa fa-sign-in"></i> login</a><a href="/register" class="button-link"><i class="fa fa-share-square-o"></i> registre-se</a></div>');


    //chatbox
    function updateIframeSize( x,y )
    {
        if (x != '') {
            $('#' + x).height(y + 10 + 'px');
        }
    }
    
    if( logged_in ) $('#page-body').prepend('<iframe id="iframe_shoutbox" height="360px" width="100%" frameBorder="0" src="/h16-">Your browser does not support IFRAMEs</iframe>');
    
    
});
