---
layout: snippet
title: How to Add Image Preview to File Upload Field for GravityForm ( New
  Updated 2022 )
permalink: /snippet/how-to-add-image-preview-to-file-upload-for-gravityform
seo_description: How to Add Image Preview to File Upload Field for GravityForm
main_class: snippet
date: 2022-12-19T01:09:00.415Z
---
I updated the tutorial featuring preview image upload for GravityForm from this link <https://websitedepot.com/gravityforms-how-to-add-image-preview-to-file-upload-field/>. For recent versions of gravityform use the function with variable update. So I just added the latest javascript function to be able to display those thumbnails.

{% highlight php %}
function wd_gravity_image_thumb_upload() {
    
	// change this to your page ID
	
    if ( is_page(4558) ) {        
		
		// change this to your form ID
        $upload_path = GFFormsModel::get_upload_url(1);
        
     ?>

    <script type="text/javascript"> 
        
    jQuery(document).ready(function($) {
        
        gform.addFilter('gform_file_upload_markup', function (html, file, up, strings, imagesUrl, response) {

            //Path of your temp file
            var myFilePath = '<?php echo $upload_path . '/tmp/'; ?>'; 

            var formId = up.settings.multipart_params.form_id,
            fieldId = up.settings.multipart_params.field_id;

           // var fileName = up.settings.multipart_params.gform_unique_id + '_input_' + fieldId +'_'+ file.target_name;
            var fid =  "fid"+  Math.ceil((Math.random() * (10000 - 1000)) + 1000); 
			var temp_name = rgars( response, 'data/temp_filename' );
			var fileName = temp_name;
			
			
			console.log(temp_name);
            //Converting Image to the base64
            
            function convertImgToBase64URL(url, callback, outputFormat){
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function(){
                    var canvas = document.createElement('CANVAS'),
                    ctx = canvas.getContext('2d'), dataURL;
                    canvas.height = (300 * img.height)/img.width;
                    canvas.width = 300; //img.width;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    dataURL = canvas.toDataURL(outputFormat);
                    callback(dataURL);
                    canvas = null; 
                };
                img.src = url;
            }

            convertImgToBase64URL( myFilePath + fileName , function(base64Img){
              var ffid = "#"+fid;
              $(ffid).attr("src", base64Img); 
              console.log('RESULT:', base64Img);   
            });

            html = '<img id="'+fid+"\" src='' style='width:100%;height:auto;'/><img class='gform_delete' " + "src='" + imagesUrl + "/delete.png' "+ "onclick='gformDeleteUploadedFile(" + formId + "," + fieldId + ", this);' " + "alt='" + strings.delete_file + "' title='" + strings.delete_file + "' />";
            return html;
        });

    });
    </script>

        <?php }

    }

add_action('wp_head','wd_gravity_image_thumb_upload');
{% endhighlight %}