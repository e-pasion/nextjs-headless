function loadExternalLibrary(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  
  async function loadLibrariesInSeries(librariesToLoad) {
    for (const library of librariesToLoad) {
      try {
        await loadExternalLibrary(library);
        console.log(`La librería ${library} se ha cargado con éxito`);
      } catch (error) {
        console.error(`Error al cargar la librería ${library}: ${error}`);
      }
    }
  }

  function loadAllLibraries(){
    if (typeof window !== 'undefined') {
        const librariesToLoad = [
          '/js/vendor/jquery-3.6.0.min.js',
          '/js/vendor/jquery-migrate-3.3.0.min.js',
          '/js/vendor/modernizr-3.6.0.min.js',
          '/js/vendor/bootstrap.bundle.min.js',
          '/js/plugins/slick.js',
          '/js/plugins/jquery.syotimer.min.js',
          '/js/plugins/waypoints.js',
          '/js/plugins/wow.js',
          '/js/plugins/perfect-scrollbar.js',
          '/js/plugins/magnific-popup.js',
          '/js/plugins/select2.min.js',
          '/js/plugins/counterup.js',
          '/js/plugins/jquery.countdown.min.js',
          '/js/plugins/images-loaded.js',
          '/js/plugins/isotope.js',
          '/js/plugins/scrollup.js',
          '/js/plugins/jquery.vticker-min.js',
          '/js/plugins/jquery.theia.sticky.js',
          '/js/plugins/jquery.elevatezoom.js',
          '/js/main.js?v=5.3'
        ];
    
        loadLibrariesInSeries(librariesToLoad);
      }
  }

  export default loadAllLibraries;