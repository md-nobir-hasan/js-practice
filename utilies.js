//this file is very necessary for usign various small function 


// 1.Read more button function. you can add read more function any where ust passign three or two element  as agrgument
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

//****************************************
// 2. Add to card function by localStorage 

var class_array1 = [];
        //console.log("load",class_array1);
		var image_arr = [];
		var heading_arr = [];
		var prod_title_arr = [];
		if(JSON.parse((localStorage.getItem("clicked_class1")))){
				class_array1 = JSON.parse((localStorage.getItem("clicked_class1")));
				
		}
		if(JSON.parse((localStorage.getItem("image_src")))){
				image_arr = JSON.parse((localStorage.getItem("image_src")));
				
			}
		if(JSON.parse((localStorage.getItem("heading")))){
				heading_arr = JSON.parse((localStorage.getItem("heading")));
			}
		if(JSON.parse((localStorage.getItem("prod_title")))){
				prod_title_arr = JSON.parse((localStorage.getItem("prod_title")))
		}
		if(class_array1.length>0){
			for (var m = 0; m<class_array1.length;m++){
				$(".type-product:eq("+class_array1[m]+") .inner_product .cart-icon").addClass('clicked1');
				$(".type-product:eq("+class_array1[m]+") .inner_product .cart-icon img").attr('src',"/wp-content/uploads/2022/07/cart-added.svg")
		}
		}
		$(".type-product").each(function(k){
			var t = $(this);
			$(t).find(".inner_product .cart-icon").click(function(e){
                //console.log("index-",k);
				e.preventDefault();
				if (jQuery(this).hasClass('clicked1')) {
					$(this).removeClass('clicked1');
					localStorage.clear()

                    //e.preventDefault();
					var image_src = $(t).find(".inner_product  a .thumbnail_container .head_img_img").attr('src');
					var heading = $(t).find(".inner_product  a .inner_product_header .inner_product_header_table .inner_product_header_cell .prod_heading").text();
					var prod_title = $(t).find(".inner_product  a .inner_product_header .inner_product_header_table .inner_product_header_cell .prod_title").text();
					if(jQuery.inArray(prod_title, prod_title_arr) != -1) {
						var class_index = class_array1.indexOf(k)
						class_array1.splice(class_index,1);
                        //console.log("is in array");
						var index = prod_title_arr.indexOf(prod_title)
                        //console.log("yes",index);
						image_arr.splice(index,1);
						heading_arr.splice(index,1);
						prod_title_arr.splice(index,1);
						localStorage.setItem('clicked_class1', JSON.stringify(class_array1));
						localStorage.setItem('image_src', JSON.stringify(image_arr));
						localStorage.setItem('heading', JSON.stringify(heading_arr));
						localStorage.setItem('prod_title', JSON.stringify(prod_title_arr));
						class_array1 = JSON.parse((localStorage.getItem("clicked_class1")));
						image_arr = JSON.parse((localStorage.getItem("image_src")));
						heading_arr = JSON.parse((localStorage.getItem("heading")));
						prod_title_arr = JSON.parse((localStorage.getItem("prod_title")))
						$("#cart_product_count").text(JSON.parse((localStorage.getItem("prod_title"))).length)
						j = index+(index+1)
                        //console.log(j)
					$(this).find("img").attr('src',"/wp-content/uploads/2022/07/cart-icon.svg")
					}

					}
					else
					{
						$(this).addClass('clicked1');
						var image_src = $(t).find(".inner_product  a .thumbnail_container .head_img_img").attr('src');
						$(this).find("img").attr('src',"/wp-content/uploads/2022/07/cart-added.svg")

						var heading = $(t).find(".inner_product  a .inner_product_header .inner_product_header_table .inner_product_header_cell .prod_heading").text();
						var prod_title = $(t).find(".inner_product  a .inner_product_header .inner_product_header_table .inner_product_header_cell .prod_title").text();
						if(jQuery.inArray(prod_title, prod_title_arr) == -1) {
							image_arr.push(image_src);
							heading_arr.push(heading);
							prod_title_arr.push(prod_title);

							class_array1.push(k);
							localStorage.setItem('clicked_class1', JSON.stringify(class_array1));
							localStorage.setItem('image_src', JSON.stringify(image_arr));
							localStorage.setItem('heading', JSON.stringify(heading_arr));
							localStorage.setItem('prod_title', JSON.stringify(prod_title_arr));	
							$("#cart_product_count").text(JSON.parse((localStorage.getItem("prod_title"))).length)
						}
					}
			});
		});

//=======================================================================================================
//======================================= Ajax data fetch  ==============================================
//=======================================================================================================
$("#product_id").change(function() {
	ajaxDataFetch(['product_id'],'MoreProduct', "supplier_id", ['created_user', 'updated_user',
		'deleted_user', 'supplier'
	],function(response){
		let count = 0;
		$.each(response,function(key,item){
			count += Number(item.quantity);
		})
		$('#available_qty').val(count)
	},null,null,'supplier',null,'shop_name');
});

//Ajax Data fetch according to  department
function ajaxDataFetch(collect_data_arr, model, append_element, with_arr,returnFunc=null, stop, old_value = null, belongs_to, has_many = null, coloum='name') {
let data_arr = {};
for (selector in collect_data_arr) {
	data_arr[collect_data_arr[selector]] = $('#' + collect_data_arr[selector]).val();
}
$.ajax({
	url: "{{ route('asset.product_fetch.ajax') }}",
	method: 'GET',
	async: false,
	data: {
		'arr': data_arr,
		'model': model,
		'with_arr': with_arr,
	},
	success: function(response) {
		var option = "<option value='' hidden>Select...</option>";
	   if(returnFunc){
		returnFunc(response)
	   }
	   if(stop != 'stop'){
			$.each(response, function(index, value) {
				if (value[has_many]) {
					$.each(value[has_many], function(has_index, has_value) {
						if (has_value[belongs_to]) {
							option += `<option value="${has_value[belongs_to].id}" ${old_value == has_value[belongs_to].id ? 'selected' : ''}>${has_value[belongs_to][coloum]}</option>`;
						} else {
							option += `<option value="${has_value.id}" ${old_value == has_value.id ? 'selected' : ''}>${has_value[coloum]}</option>`;
						}
					});
				}
				else if(value[belongs_to]){
					if(value[belongs_to][has_many]){
						console.log()
						$.each(value[belongs_to][has_many], function(belongs_index,belongs_value) {
							option += `<option value="${belongs_value.id}" ${old_value == belongs_value.id ? 'selected' : ''}>${belongs_value[coloum]}</option>`;
						});
					} else {
							option += `<option value="${value[belongs_to].id}" ${old_value == value[belongs_to].id ? 'selected' : ''}>${value[belongs_to][coloum]}</option>`;
						}
				}
				else {
					option += `<option value="${value.id}" ${old_value == value.id ? 'selected' : ''}>${value[coloum]}</option>`;
				}
			});
			$('#' + append_element).html(option);
		}
	}
});
}