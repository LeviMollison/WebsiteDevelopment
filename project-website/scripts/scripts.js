// We want to play an audo file upon certain button clicks

/*
	In order to play music files they have to be attached to an audio element.
	We can keep it hidden from the page, but still be able to manipulate it
*/


var $audio_element = $('<audio>', { src: '' });
$audio_element.prop('volume',0.2);
$audio_element.attr('loop','true');
var $current_sound_selected;
var $innactive_music_control;
var $current_active_modal;

/* listen for when a display image is clicked, and open the modal associated with the click */

$('[open-sound-panel]').on('click', function(){
    
    var $selector = $(this);
    var $sound_panel_name = $selector.attr('open-sound-panel');
    
    $sound_panel = $('[sound-panel=' +'"' + $sound_panel_name +'"' + ']');
    $sound_panel.addClass('active');
    $current_active_modal = $sound_panel;

    var $glass = $('.modal-glass');
    $glass.addClass('active');

});

/*
	listen for song requests and play them 
	#make the music control that requests a song innactive upon click
	#load the song into the audio player and play it
*/

$('[turn-on-sound]').on('click', function(){
	if($innactive_music_control){
		$audio_element.trigger('pause');
    	$audio_element.attr('src','');
    	$innactive_music_control.removeClass('innactive');
    	$innactive_music_control = '';
	}

	$current_sound_selected = $(this).attr('turn-on-sound');
	$audio_element.attr('src', $current_sound_selected);
	$audio_element.load();
	$audio_element.trigger('play');

	$innactive_music_control = $(this);
	$innactive_music_control.addClass('innactive');

});

/* This is for the impatient who hate the sounds being played */

$('[turn-off-sound]').on('click', function(){
	if($innactive_music_control){
		$audio_element.trigger('pause');
    	$audio_element.attr('src','');
    	$innactive_music_control.removeClass('innactive');
    	$innactive_music_control = '';
	}
})

/*
	listen to when anything that can close the modal is selected
	#turn off playing songs 
	#reactivate innactive music controls
	#close modal and glass
 */ 

$('[close-sound-panel]').on('click', function(){
    
    /* check to see if sounds are playing, turn them off and reactivate their players */
    if($innactive_music_control){
    	$audio_element.trigger('pause');
    	$audio_element.attr('src','');
    	$innactive_music_control.removeClass('innactive');
    	$innactive_music_control = '';
    }

    /* close modal and glass */
    $current_active_modal.removeClass('active');

    var $glass = $('.modal-glass');
    $glass.removeClass('active');
});