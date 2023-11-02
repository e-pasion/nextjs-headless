import { useEffect } from 'react';
import $ from 'jquery';




function Loading() {

    
// useEffect(() => {
//     $(window).on('load', function () {
//       $('#preloader-active').delay(450).fadeOut('slow');
//       $('body').delay(450).css({
//         overflow: 'visible',
//       });
//         $('#onloadModal').modal('show');
//     });
//   }, []);
  return (
    <div id="preloader-active">
        {/* <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="text-center">
                    <img src="imgs/theme/loading.gif" alt="" />
                </div>
            </div>
        </div> */}
    </div>
  )
}
export default Loading