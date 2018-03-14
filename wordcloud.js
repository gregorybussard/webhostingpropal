'use strict';

var examples = {
  'greg': {
    list: '4 Telecoms http://www.etsi.org/\n' +
'5 Management\n' +
'5 Architecte\n' +
'4 International\n' +
'4 Sécurité\n' +
'4 Projets\n' +
'4 design\n' +
'4 B2B\n' +
'3 cryptographie\n' +
'3 Déploiement\n' +
'3 Solutions\n' +
'3 embarqués\n' +
'3 Logiciel\n' +
'3 Réseau\n' +
'3 DevOps\n' +
'3 Agiles\n' +
'3 carte~à~puces\n' +
'3 Cloud\n' +
'3 Centrale~Lille\n' +
'3 Java http://www.oracle.com/technetwork/java/index.html\n' +
'3 AWS https://aws.amazon.com/\n' +
'3 IoT https://www.gsma.com/\n' +
'2 Industrialisation\n' +
'2 communication\n' +
'2 méthodologies\n' +
'2 accréditations\n' +
'2 coordination\n' +
'2 connectivité\n' +
'2 Consultant\n' +
'2 bancaires https://www.emvco.com/\n' +
'2 Standards  \n' +
'2 recherche\n' +
'2 projets~européen https://ec.europa.eu/info/research-and-innovation_en\n' +
'2 Systèmes\n' +
'2 Services\n' +
'2 process\n' +
'2 Gemalto https://www.gemalto.com\n' +
'2 Inspirateur\n' +
'2 WAF\n' +
'2 VPN\n' +
'2 GDPR https://www.eugdpr.org/\n' +
'2 Startup\n' +
'1 Personnalisation\n' +
'1 CloudFormation https://aws.amazon.com/cloudformation/\n' +
'1 géo-redondance\n' +
'1 key~ceremony\n' +
'1 integration\n' +
'1 certificats\n' +
'1 scalabilité\n' +
'1 académique\n' +
'1 conception\n' +
'1 rendements\n' +
'1 génération\n' +
'1 monitoring\n' +
'1 Atlassian https://www.atlassian.com/\n' +
'1 stateless\n' +
'1 workflow\n' +
'1 JavaCard\n' +
'1 PCI~DSS https://www.pcisecuritystandards.org/pci_security/\n' +
'1 Austin\n' +
'1 Dublin\n' +
'1 builds\n' +
'1 USIM\n' +
'1 PKCS\n' +
'1 REST\n' +
'1 SOAP\n' +
'1 5x9\n' +
'1 LTE\n' +
'1 KMS\n' +
'1 OWASP https://www.owasp.org/images/7/72/OWASP_Top_10-2017_%28en%29.pdf.pdf\n' +
'1 CPS https://www.emvco.com/emv-technologies/contact/\n'  ,
    option: '{\n' +
			'  gridSize: Math.round(16 * $(\'#canvas\').width() / 1024),\n' +
            '  weightFactor: 3,\n' +
            '  fontFamily: \'Lobster\',\n' +
            '  color: \'#f0f0c0\',\n' +
            '  hover: window.drawBox,\n' +
            '  click: function(item) {\n' +
            '    if (item[2]) {window.open(item[2]);}\n' +
            '  },\n' +
            '  backgroundColor: \'#001f00\',\n' +
             '  shape: function(theta) {\n' +
				'  var max = 328;\n' +
				'  var leng = [292,291,289,287,285,282,281,278,275,275,272,270,267,265,262,260,259,259,260,260,261,261,262,262,263,263,263,264,264,265,264,264,265,265,265,265,264,265,264,265,264,264,265,264,264,264,263,263,262,262,262,261,261,260,259,259,258,257,257,256,255,254,254,252,252,251,250,249,248,247,246,245,244,242,241,240,239,238,236,235,234,231,231,229,228,226,224,223,221,220,218,216,214,213,211,208,207,204,203,200,199,197,195,193,192,192,193,193,195,195,196,196,196,196,198,198,198,199,200,200,200,201,201,202,203,203,203,204,204,205,205,205,206,206,206,207,207,208,208,208,209,209,210,210,210,210,211,211,211,211,212,212,213,213,214,214,214,214,214,215,215,215,215,215,215,215,215,216,216,216,216,217,216,216,217,217,217,217,217,217,217,217,217,217,217,217,218,217,217,218,217,217,217,217,217,217,217,217,216,216,216,216,216,216,216,216,216,216,215,215,215,215,214,214,214,213,214,214,213,213,212,212,212,212,211,211,211,211,210,210,210,209,208,209,208,208,208,207,207,206,206,205,205,205,204,203,203,203,202,202,202,201,200,200,200,199,198,198,198,197,197,199,202,204,207,209,213,215,217,220,222,224,227,229,232,234,236,239,241,243,245,248,249,252,254,255,259,260,262,264,265,267,269,271,273,275,276,278,279,281,283,284,286,287,289,291,291,293,294,296,297,298,300,301,303,303,304,305,307,307,308,309,310,311,312,312,314,314,319,320,321,320,321,321,322,322,322,322,322,322,322,322,322,322,322,322,322,322,321,322,321,320,320,320,319,319,318,318,317,317,316,316,315,314,314,313,312,311,310,309,308,307,307,306,304,303,302,301,300,298,297,296,295,293,293,291,290,288,286,284,283,282,280,279,277,275,273,271,270,268,266,264,262,260,259,257,255,254,252,251,249,248,246,245,243,242,241,240,239,237,236,235,234,233,232,231,230,229,229,228,227,226,225,225,224,223,223,222,222,221,220,220,219,219,219,218,218,217,217,217,216,216,216,216,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,216,216,216,216,217,217,217,218,218,218,219,219,220,220,221,221,222,222,223,224,224,225,226,227,227,228,229,230,231,232,233,234,235,236,237,238,239,240,242,243,244,246,247,248,250,251,253,254,256,258,260,261,263,265,267,269,271,273,275,278,280,281,284,286,287,290,291,293,295,296,299,300,301,302,304,306,307,308,309,310,312,313,314,315,316,317,317,319,320,321,322,322,323,323,324,324,324,325,325,326,326,326,327,327,327,327,327,328,328,327,327,327,327,327,326,325,325,325,324,324,324,324,323,322,321,320,317,316,315,313,313,311,310,309,308,307,306,303,302,301,299,298,296,294,294];\n' +
				'  return leng[(theta / (2 * Math.PI)) * leng.length | 0] / max;\n' +
				'}\n'+
  '}',
    fontCSS: 'https://fonts.googleapis.com/css?family=Lobster'
  }
};

var maskCanvas;

jQuery(function($) {
  var $form = $('#form');
  var $canvas = $('#canvas');
  var $htmlCanvas = $('#html-canvas');
  var $canvasContainer = $('#canvas-container');
  var $loading = $('#loading');

  var $list = $('#input-list');
  var $options = $('#config-option');
  var $width = $('#config-width');
  var $height = $('#config-height');
  var $mask = $('#config-mask');
  var $dppx = $('#config-dppx');
  var $css = $('#config-css');
  var $webfontLink = $('#link-webfont');

  if (!WordCloud.isSupported) {
    $('#not-supported').prop('hidden', false);
    $form.find('textarea, input, select, button').prop('disabled', true);
    return;
  }

  var $box = $('<div id="box" hidden />');
  $canvasContainer.append($box);
  window.drawBox = function drawBox(item, dimension) {
    if (!dimension) {
      $box.prop('hidden', true);

      return;
    }

    var dppx = $dppx.val();

    $box.prop('hidden', false);
    $box.css({
      left: dimension.x / dppx + 'px',
      top: dimension.y / dppx + 'px',
      width: dimension.w / dppx + 'px',
      height: dimension.h / dppx + 'px'
    });
  };

  // Update the default value if we are running in a hdppx device
  if (('devicePixelRatio' in window) &&
      window.devicePixelRatio !== 1) {
    $dppx.val(window.devicePixelRatio);
  }

  $canvas.on('wordcloudstop', function wordcloudstopped(evt) {
    $loading.prop('hidden', true);
  });

  $form.on('submit', function formSubmit(evt) {
    evt.preventDefault();

    changeHash('');
  });

  $('#config-mask-clear').on('click', function() {
    maskCanvas = null;
    // Hack!
    $mask.wrap('<form>').closest('form').get(0).reset();
    $mask.unwrap();
  });

  // Load the local image file, read it's pixels and transform it into a
  // black-and-white mask image on the canvas.
  $mask.on('change', function() {
    maskCanvas = null;

    var file = $mask[0].files[0];

    if (!file) {
      return;
    }

    var url = window.URL.createObjectURL(file);
    var img = new Image();
    img.src = url;

    img.onload = function readPixels() {
      window.URL.revokeObjectURL(url);

      maskCanvas = document.createElement('canvas');
      maskCanvas.width = img.width;
      maskCanvas.height = img.height;

      var ctx = maskCanvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var imageData = ctx.getImageData(
        0, 0, maskCanvas.width, maskCanvas.height);
      var newImageData = ctx.createImageData(imageData);

      for (var i = 0; i < imageData.data.length; i += 4) {
        var tone = imageData.data[i] +
          imageData.data[i + 1] +
          imageData.data[i + 2];
        var alpha = imageData.data[i + 3];

        if (alpha < 128 || tone > 128 * 3) {
          // Area not to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 255;
          newImageData.data[i + 3] = 0;
        } else {
          // Area to draw
          newImageData.data[i] =
            newImageData.data[i + 1] =
            newImageData.data[i + 2] = 0;
          newImageData.data[i + 3] = 255;
        }
      }

      ctx.putImageData(newImageData, 0, 0);
    };
  });

  if ($mask[0].files.length) {
    $mask.trigger('change');
  }

  $('#btn-save').on('click', function save(evt) {
    var url = $canvas[0].toDataURL();
    if ('download' in document.createElement('a')) {
      this.href = url;
    } else {
      evt.preventDefault();
      alert('Please right click and choose "Save As..." to save the generated image.');
      window.open(url, '_blank', 'width=500,height=300,menubar=yes');
    }
  });

  $('#btn-canvas').on('click', function showCanvas(evt) {
    $canvas.removeClass('hide');
    $htmlCanvas.addClass('hide');
    $('#btn-canvas').prop('disabled', true);
    $('#btn-html-canvas').prop('disabled', false);
  });

  $('#btn-html-canvas').on('click', function showCanvas(evt) {
    $canvas.addClass('hide');
    $htmlCanvas.removeClass('hide');
    $('#btn-canvas').prop('disabled', false);
    $('#btn-html-canvas').prop('disabled', true);
  });

  $('#btn-canvas').prop('disabled', true);
  $('#btn-html-canvas').prop('disabled', false);

  var $examples = $('#examples');
  $examples.on('change', function loadExample(evt) {
    changeHash(this.value);

    this.selectedIndex = 0;
    $examples.blur();
  });

  var run = function run() {
    $loading.prop('hidden', false);

    // Load web font
    $webfontLink.prop('href', $css.val());

    // devicePixelRatio
    var devicePixelRatio = parseFloat($dppx.val());

    // Set the width and height
    var width = $('#canvas-container').width();
    var height = Math.floor(width * 0.65);
    var pixelWidth = width;
    var pixelHeight = height;

    if (devicePixelRatio !== 1) {
      $canvas.css({'width': width + 'px', 'height': height + 'px'});

      pixelWidth *= devicePixelRatio;
      pixelHeight *= devicePixelRatio;
    } else {
      $canvas.css({'width': '', 'height': '' });
    }

    $canvas.attr('width', pixelWidth);
    $canvas.attr('height', pixelHeight);

    $htmlCanvas.css({'width': pixelWidth + 'px', 'height': pixelHeight + 'px'});

    // Set the options object
    var options = {};
    if ($options.val()) {
      options = (function evalOptions() {
        try {
          return eval('(' + $options.val() + ')');
        } catch (error) {
          alert('The following Javascript error occurred in the option definition; all option will be ignored: \n\n' +
            error.toString());
          return {};
        }
      })();
    }

    // Set devicePixelRatio options
    if (devicePixelRatio !== 1) {
      if (!('gridSize' in options)) {
        options.gridSize = 8;
      }
      options.gridSize *= devicePixelRatio;

      if (options.origin) {
        if (typeof options.origin[0] == 'number')
          options.origin[0] *= devicePixelRatio;
        if (typeof options.origin[1] == 'number')
          options.origin[1] *= devicePixelRatio;
      }

      if (!('weightFactor' in options)) {
        options.weightFactor = 1;
      }
      if (typeof options.weightFactor == 'function') {
        var origWeightFactor = options.weightFactor;
        options.weightFactor =
          function weightFactorDevicePixelRatioWrap() {
            return origWeightFactor.apply(this, arguments) * devicePixelRatio;
          };
      } else {
        options.weightFactor *= devicePixelRatio;
      }
    }

    // // Put the word list into options
    // if ($list.val()) {
      // var list = [];
      // $.each($list.val().split('\n'), function each(i, line) {
        // if (!$.trim(line))
          // return;

        // var lineArr = line.split(' ');
        // var count = parseFloat(lineArr.shift()) || 0;
        // list.push([lineArr.join(' '), count]);
      // });
      // options.list = list;
    // }

    // Put the word list into options
    if ($list.val()) {
      var list = [];
      $.each($list.val().split('\n'), function each(i, line) {
        if (!$.trim(line))
          return;

        var lineArr = line.split(' ');
        var count = parseFloat(lineArr.shift()) || 0;
		var word = lineArr.shift().split('~').join(' ');
		var url = lineArr.shift();
		
        list.push([word, count*5, url]);
      });
      options.list = list;
    }

    if (maskCanvas) {
      options.clearCanvas = false;

      /* Determine bgPixel by creating
         another canvas and fill the specified background color. */
      var bctx = document.createElement('canvas').getContext('2d');

      bctx.fillStyle = options.backgroundColor || '#fff';
      bctx.fillRect(0, 0, 1, 1);
      var bgPixel = bctx.getImageData(0, 0, 1, 1).data;

      var maskCanvasScaled =
        document.createElement('canvas');
      maskCanvasScaled.width = $canvas[0].width;
      maskCanvasScaled.height = $canvas[0].height;
      var ctx = maskCanvasScaled.getContext('2d');

      ctx.drawImage(maskCanvas,
        0, 0, maskCanvas.width, maskCanvas.height,
        0, 0, maskCanvasScaled.width, maskCanvasScaled.height);

      var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      var newImageData = ctx.createImageData(imageData);
      for (var i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i + 3] > 128) {
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3];
        } else {
          // This color must not be the same w/ the bgPixel.
          newImageData.data[i] = bgPixel[0];
          newImageData.data[i + 1] = bgPixel[1];
          newImageData.data[i + 2] = bgPixel[2];
          newImageData.data[i + 3] = bgPixel[3] ? (bgPixel[3] - 1) : 0;
        }
      }

      ctx.putImageData(newImageData, 0, 0);

      ctx = $canvas[0].getContext('2d');
      ctx.drawImage(maskCanvasScaled, 0, 0);

      maskCanvasScaled = ctx = imageData = newImageData = bctx = bgPixel = undefined;
    }

    // Always manually clean up the html output
    if (!options.clearCanvas) {
      $htmlCanvas.empty();
      $htmlCanvas.css('background-color', options.backgroundColor || '#fff');
    }

    // All set, call the WordCloud()
    // Order matters here because the HTML canvas might by
    // set to display: none.
    WordCloud([$canvas[0], $htmlCanvas[0]], options);
  };

  var loadExampleData = function loadExampleData(name) {
    var example = examples[name];

    $options.val(example.option || '');
    $list.val(example.list || '');
    $css.val(example.fontCSS || '');
    $width.val(example.width || '');
    $height.val(example.height || '');
  };

  var changeHash = function changeHash(name) {
    if (window.location.hash === '#' + name ||
        (!window.location.hash && !name)) {
      // We got a same hash, call hashChanged() directly
      hashChanged();
    } else {
      // Actually change the hash to invoke hashChanged()
      window.location.hash = '#' + name;
    }
  };

  var hashChanged = function hashChanged() {
    var name = window.location.hash.substr(1);
    if (!name) {
      // If there is no name, run as-is.
      run();
    } else if (name in examples) {
      // If the name matches one of the example, load it and run it
      loadExampleData(name);
      run();
    } else {
      // If the name doesn't match, reset it.
      window.location.replace('#');
    }
  }

  $(window).on('hashchange', hashChanged);

  if (!window.location.hash ||
    !(window.location.hash.substr(1) in examples)) {
    // If the initial hash doesn't match to any of the examples,
    // or it doesn't exist, reset it to #greg (single option)
    window.location.replace('#greg');
  } else {
    hashChanged();
  }
});
