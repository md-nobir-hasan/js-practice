//this file is very necessary for usign various small function 


// Read more button function. you can add read more function any where ust passign three or two element  as agrgument
let befor_read_more_element = $('.inner-utleie-top-section .av_inherit_color p:eq(1)');
let after_read_more_element = $('.inner-utleie-top-section .av_inherit_color p:gt(1)');
readMore(befor_read_more_element,after_read_more_element,18);
readMore($('.av-l4o4p3s3-d7063412947df5229611a8356553d435 p'),$('.av-l4o4pqin-312866c92b42ca146035846e8c34f0a5 p'),18);

function readMore(befor_read_more_element,after_read_more_element,word_count){
    
    let first_dive_text = $(befor_read_more_element).text();
    let class_add = 'read-more'+Math.floor((Math.random() * 100) + 1);
    if(first_dive_text.split(' ').length > word_count){
        befor_read_more_element.html(first_dive_text.split(' ').slice(1,word_count).join(' ') + `<span id=${class_add}> .....Les mer </span>`);
    }
    
    if(after_read_more_element){
        after_read_more_element.css('display','none');
    }
    
    $(`#${class_add}`).on('click',function(){
        $(this).parent().html(first_dive_text);
        if(after_read_more_element){
            after_read_more_element.css('display','block');
        }
    });
}
// End Read more and Read less for mobile in Utleie page 