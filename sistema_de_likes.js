function BSLIKE(b,a){
var d=a.innerHTML;
a.innerHTML="<img src='http://imgur.com/c5KaMh9.gif' />";
a.onclick="#";
$.get(b,function(){
a.className+=" BS_done";
a.innerHTML=d;
var c=a.nextSibling,b=parseInt(/\d+/.exec(c.innerHTML)[0])+1;
c.innerHTML=c.innerHTML.replace(/\d+/,b);
}
)};
function init_bs_like_system() {
	for(var x = $('.vote'), i = 0, vote; (vote = x[i++]); ) {
		var count = 0, plus = 0, barra = $('.vote-bar', vote)[0], button = $('.vote-button', vote)[0];			
		if (barra) {
			var info = barra.title.match(/\d+/g);
			plus = Math.round(parseInt( info[1] ) * parseInt( info[0] )) / 100;
		}
		
		button = button ? '<span onclick="BSLIKE(\'' + button.firstChild.href + '\',this);" class="BS_like"></span>' : '<span class="BS_like BS_done"></span>';

		var votes_text = '<span class="BS_count">' + plus + ' ' + (plus == 1 ? bestskins_like.vote_singular : bestskins_like.vote_plural) + '</span>';

		var total_button = '<div class="BS_vote" style="margin:5px">' + button + votes_text + '</div>';
		
		if(bestskins_like.callback) bestskins_like.callback(vote, total_button);
	}
	x.remove();
	
};

bestskins_like.dom_ready ? init_bs_like_system() : $(function () { init_bs_like_system() });